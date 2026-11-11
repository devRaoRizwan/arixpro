export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

/** Avatars are drawn from the name. */
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
      'ArixPro re-architected our transaction ingestion layer from scratch. Our API latencies dropped under 40ms, and we survived our Black Friday transaction surge without a single dropped packet.',
    name: 'Marcus Vance',
    role: 'VP of Engineering',
    company: 'FinFlow Global',
  },
  {
    id: 'testimonial-2',
    quote:
      'The engineering discipline they brought to our cloud migration was outstanding. Clean code, zero fluff, transparent PRs, and fully automated deployment pipelines from week two.',
    name: 'Sarah Lindqvist',
    role: 'Chief Technology Officer',
    company: 'Nordic Logistics Core',
  },
  {
    id: 'testimonial-3',
    quote:
      'Unlike traditional dev agencies that pile on technical debt, ArixPro delivered a clean, typed codebase with full documentation and automated test suites that our internal team took over with ease.',
    name: 'Tariq Al-Mansoor',
    role: 'Head of Product',
    company: 'Axiom Health Systems',
  },
  {
    id: 'testimonial-4',
    quote:
      'They engineered our multi-tenant SaaS architecture ahead of schedule. Their attention to data isolation and security standards gave our enterprise compliance auditors total peace of mind.',
    name: 'Elena Rostova',
    role: 'Founder & CEO',
    company: 'DocuSphere SaaS',
  },
]
