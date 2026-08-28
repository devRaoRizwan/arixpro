/**
 * PLACEHOLDERS ONLY.
 *
 * No real student has been quoted here and no names have been invented.
 * Replace `quote`, `name` and `context` with genuine, permitted student
 * feedback before launch, then set `isPlaceholder` to false and the card
 * drops its "placeholder" label automatically.
 */

export type Testimonial = {
  id: string
  quote: string
  name: string
  context: string
  isPlaceholder: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Student testimonial goes here. Replace this with a real student experience.',
    name: 'Student name',
    context: 'Course and batch',
    isPlaceholder: true,
  },
  {
    id: 'testimonial-2',
    quote:
      'Student testimonial goes here. A short, specific quote about what changed for them works best.',
    name: 'Student name',
    context: 'Course and batch',
    isPlaceholder: true,
  },
  {
    id: 'testimonial-3',
    quote:
      'Student testimonial goes here. Two or three sentences is enough, kept in their own words.',
    name: 'Student name',
    context: 'Course and batch',
    isPlaceholder: true,
  },
]
