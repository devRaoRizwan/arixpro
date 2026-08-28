import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  children: ReactNode
  id?: string
  className?: string
  /** Adds the hairline rule that separates stacked sections. */
  bordered?: boolean
}

export function Section({ children, id, className, bordered = true }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-20 sm:py-24 lg:py-32',
        bordered && 'border-t border-surface-800/80',
        className,
      )}
    >
      {children}
    </section>
  )
}
