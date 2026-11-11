import { useEffect } from 'react'
import { CheckCircle2, AlertCircle, X } from 'lucide-react'

interface ToastProps {
  message: string
  type?: 'success' | 'error'
  isOpen: boolean
  onClose: () => void
  duration?: number
}

export function Toast({
  message,
  type = 'success',
  isOpen,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (!isOpen) return
    const timer = setTimeout(() => {
      onClose()
    }, duration)
    return () => clearTimeout(timer)
  }, [isOpen, duration, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-[8px] border border-[#E4DEF2] bg-white px-4 py-3 shadow-dropdown">
      {type === 'success' ? (
        <CheckCircle2 className="size-5 text-[#1E9E4A]" />
      ) : (
        <AlertCircle className="size-5 text-[#C13515]" />
      )}
      <p className="font-sans text-[14px] font-medium text-[#241044]">{message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss toast"
        className="ml-2 text-[#6B6578] hover:text-[#241044]"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}

export default Toast
