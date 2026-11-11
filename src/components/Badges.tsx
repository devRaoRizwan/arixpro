import React from 'react'

export function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#241044] shadow-sm backdrop-blur-sm border border-[#E4DEF2]">
      <span className="size-2 rounded-full bg-[#1E9E4A]" />
      <span>Live</span>
    </span>
  )
}

export function StackBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[6px] bg-[#F7F6FC] px-2.5 py-1 font-mono text-[12px] font-medium text-[#4A4458] border border-[#E4DEF2]">
      {children}
    </span>
  )
}

export function NewBadge() {
  return (
    <span className="inline-flex items-center rounded-[4px] bg-[#6336C5] px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
      NEW
    </span>
  )
}

export function StatusBadge({
  status,
  label,
}: {
  status: 'passed' | 'warning' | 'error'
  label: string
}) {
  const styles = {
    passed: 'bg-[#EAF8EE] text-[#1E9E4A] border-[#C8EED3]',
    warning: 'bg-[#FFF8E6] text-[#B7791F] border-[#FEEBC8]',
    error: 'bg-[#FDF2F2] text-[#C13515] border-[#FCD8D8]',
  }[status]

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-[4px] border font-mono text-[12px] font-medium ${styles}`}
    >
      {label}
    </span>
  )
}
