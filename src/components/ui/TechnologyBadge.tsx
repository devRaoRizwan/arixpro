import { cn } from '@/lib/utils'

type TechnologyBadgeProps = {
  label: string
  className?: string
  tone?: 'default' | 'accent'
}

export function TechnologyBadge({ label, className, tone = 'default' }: TechnologyBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-2xs tracking-wide whitespace-nowrap',
        tone === 'accent'
          ? 'border-accent-400/25 bg-accent-400/10 text-accent-300'
          : 'border-surface-700 bg-surface-850 text-content-400',
        className,
      )}
    >
      {label}
    </span>
  )
}
