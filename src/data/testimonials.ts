export type Testimonial = {
  id: string
  quote: string
  name: string
  batch: string
  isPlaceholder: boolean
}

/** Avatars are drawn from the name, so there is no second field to keep in sync. */
export function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Before this program, I was learning random tutorials online and getting nowhere. The project-based structure helped me finally understand how to build a real product and confidently apply for frontend work.',
    name: 'Ayesha Khan',
    batch: 'Batch 08',
    isPlaceholder: false,
  },
  {
    id: 'testimonial-2',
    quote:
      'What stood out for me was the mentorship. Every week we were solving actual problems, not just watching videos. I built a portfolio that helped me land my first freelance client within two months.',
    name: 'Muhammad Bilal',
    batch: 'Batch 09',
    isPlaceholder: false,
  },
  {
    id: 'testimonial-3',
    quote:
      'I used to feel stuck and unsure about coding, but the curriculum made everything feel practical and structured. The way they explained logic and debugging changed how I approach every project now.',
    name: 'Sana Iqbal',
    batch: 'Batch 04',
    isPlaceholder: false,
  },
  {
    id: 'testimonial-4',
    quote:
      'This course gave me the confidence to leave my job and start freelancing. The assignments were realistic and the feedback helped me improve faster than I expected.',
    name: 'Hamza Tariq',
    batch: 'Batch 07',
    isPlaceholder: false,
  },
  {
    id: 'testimonial-5',
    quote:
      'I loved how simple the teaching style was. They explain the why behind the code, not just the syntax. That made a huge difference in my understanding and speed.',
    name: 'Maham Ali',
    batch: 'Batch 05',
    isPlaceholder: false,
  },
  {
    id: 'testimonial-6',
    quote:
      'The practice-based approach made learning enjoyable and effective. I was able to build my portfolio from scratch and talk about my work with more confidence during interviews.',
    name: 'Usman Saeed',
    batch: 'Batch 11',
    isPlaceholder: false,
  },
]
