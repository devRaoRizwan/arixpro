import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type EyebrowProps = {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-2xs tracking-[0.22em] text-accent-400 uppercase',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-accent-400/50" />
      {children}
    </span>
  )
}
