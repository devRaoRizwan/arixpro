import React, { useState } from 'react'
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react'

interface AlertProps {
  type?: 'success' | 'warning' | 'error' | 'info'
  title?: string
  children: React.ReactNode
  onClose?: () => void
}

export function Alert({ type = 'info', title, children, onClose }: AlertProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const handleClose = () => {
    setVisible(false)
    if (onClose) onClose()
  }

  const icons = {
    success: <CheckCircle2 className="size-5 text-[#1E9E4A] shrink-0" />,
    warning: <AlertTriangle className="size-5 text-[#B7791F] shrink-0" />,
    error: <AlertCircle className="size-5 text-[#C13515] shrink-0" />,
    info: <Info className="size-5 text-[#315BDA] shrink-0" />,
  }

  const borderStyles = {
    success: 'bg-[#F9FCF9] border-[#C8EED3] text-[#241044]',
    warning: 'bg-[#FFFDF9] border-[#FEEBC8] text-[#241044]',
    error: 'bg-[#FFF8F8] border-[#FCD8D8] text-[#241044]',
    info: 'bg-[#F7F9FD] border-[#D6E2F7] text-[#241044]',
  }

  return (
    <div
      role="alert"
      className={`relative flex items-start gap-3 rounded-[8px] border p-4 font-sans text-[14px] leading-relaxed ${borderStyles[type]}`}
    >
      <div className="pt-0.5">{icons[type]}</div>
      <div className="flex-1">
        {title && <p className="font-semibold text-[#241044] mb-0.5">{title}</p>}
        <div className="text-[#4A4458]">{children}</div>
      </div>
      <button
        type="button"
        onClick={handleClose}
        aria-label="Dismiss alert"
        className="text-[#6B6578] hover:text-[#241044] transition-colors p-1"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}

export default Alert
