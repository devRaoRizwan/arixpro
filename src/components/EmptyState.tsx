interface EmptyStateProps {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[14px] border border-[#E4DEF2] bg-[#F7F6FC] px-6 py-16 text-center">
      <div className="size-12 rounded-full border border-[#E4DEF2] bg-white flex items-center justify-center text-[#6B6578] font-mono text-[14px]">
        0
      </div>
      <h3 className="mt-4 font-sans text-[18px] font-semibold text-[#241044]">
        {title}
      </h3>
      <p className="mt-1.5 max-w-sm font-sans text-[14px] text-[#6B6578]">
        {description}
      </p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 inline-flex h-[40px] items-center justify-center rounded-[8px] bg-[#6336C5] px-4 font-sans text-[14px] font-medium text-white hover:bg-[#4F2AA0] transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default EmptyState
