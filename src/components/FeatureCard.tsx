import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type FeatureCardProps = {
  title: string
  body: string
  icon: LucideIcon
  className?: string
}

export function FeatureCard({ title, body, icon: Icon, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group gloss relative h-full rounded-2xl border border-surface-800 bg-surface-900 p-6 shadow-raise sm:p-7',
        'transition-[border-color,box-shadow] duration-300 hover:border-surface-600 hover:shadow-card',
        className,
      )}
    >
      <span className="grid size-10 place-items-center rounded-lg border border-surface-700 bg-surface-850 text-accent-400 transition-colors duration-300 group-hover:border-accent-400/30 group-hover:bg-accent-400/10">
        <Icon className="size-[1.15rem]" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-content-400">{body}</p>
    </article>
  )
}
