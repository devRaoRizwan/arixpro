import { AlertCircle } from 'lucide-react'

interface ErrorStateProps {
  title?: string
  message: string
  onRetry?: () => void
}

export function ErrorState({
  title = 'Something went wrong',
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[14px] border border-[#FCD8D8] bg-[#FFF8F8] px-6 py-12 text-center">
      <AlertCircle className="size-8 text-[#C13515]" />
      <h3 className="mt-3 font-sans text-[18px] font-semibold text-[#241044]">
        {title}
      </h3>
      <p className="mt-1 font-sans text-[14px] text-[#C13515] max-w-sm">
        {message}
      </p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex h-[40px] items-center justify-center rounded-[8px] border border-[#E4DEF2] bg-white px-4 font-sans text-[14px] font-medium text-[#241044] hover:bg-[#F7F6FC] transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorState
