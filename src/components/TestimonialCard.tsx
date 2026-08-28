import { Quote, UserRound } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'

type TestimonialCardProps = {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="gloss relative flex h-full flex-col rounded-2xl border border-surface-800 bg-surface-900 p-6 shadow-raise sm:p-7">
      <Quote className="size-6 text-accent-400/35" aria-hidden="true" />

      <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-content-200">
        {testimonial.quote}
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-surface-800 pt-5">
        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center rounded-full border border-dashed border-surface-600 text-content-500"
        >
          <UserRound className="size-4" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-medium text-content-100">
            {testimonial.name}
          </span>
          <span className="block truncate font-mono text-2xs text-content-500">
            {testimonial.context}
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
