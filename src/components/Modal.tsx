import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Scrim #000000 50% */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 transition-opacity"
      />

      {/* White card 14px */}
      <div className="relative z-10 w-full max-w-lg rounded-[14px] border border-[#E4DEF2] bg-white p-6 shadow-dropdown">
        <div className="flex items-center justify-between border-b border-[#E4DEF2] pb-4">
          <h3 className="font-sans text-[20px] font-semibold text-[#241044]">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="size-9 rounded-full flex items-center justify-center text-[#6B6578] hover:bg-[#F7F6FC] hover:text-[#241044] transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}

export default Modal
