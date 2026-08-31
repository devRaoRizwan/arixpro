import { Quote } from 'lucide-react'
import { initialsOf, type Testimonial } from '@/data/testimonials'

type TestimonialCardProps = {
  testimonial: Testimonial
  /** 1-based position, shown as the `03 / 06` counter. */
  position: number
  total: number
}

export function TestimonialCard({ testimonial, position, total }: TestimonialCardProps) {
  return (
    <figure className="gloss relative flex h-full flex-col rounded-2xl border border-surface-800 bg-surface-900 p-7 shadow-raise sm:p-9 lg:p-11">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 size-64 rounded-full bg-accent-400/[0.07] blur-3xl"
      />

      <div className="relative flex items-start justify-between gap-4">
        <Quote className="size-8 text-accent-400/35 sm:size-9" aria-hidden="true" />
        <span className="font-mono text-2xs tracking-[0.18em] text-content-500 tabular-nums">
          {String(position).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Caveat runs small on the em, so this is set well above the sans sizes
          it replaces; leading stays >= 1.2 so descenders are never clipped. */}
      <blockquote className="relative mt-6 flex-1 font-script text-xl leading-[1.45] font-medium text-content-100 sm:text-2xl lg:text-[1.9rem] lg:leading-[1.4]">
        {testimonial.quote}
      </blockquote>

      <figcaption className="relative mt-8 flex items-center gap-4 border-t border-surface-800 pt-6">
        <span
          aria-hidden="true"
          className="grid size-12 shrink-0 place-items-center rounded-full border border-accent-400/30 bg-accent-400/10 font-mono text-sm font-semibold text-accent-400"
        >
          {initialsOf(testimonial.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-base font-semibold text-content-50">
            {testimonial.name}
          </span>
          <span className="mt-0.5 block truncate font-mono text-2xs text-content-500">
            {testimonial.batch}
          </span>
        </span>
      </figcaption>

      {testimonial.isPlaceholder ? (
        <span className="absolute top-5 right-5 rounded-full border border-surface-700 bg-surface-850 px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.14em] text-content-500 uppercase">
          Placeholder
        </span>
      ) : null}
    </figure>
  )
}
