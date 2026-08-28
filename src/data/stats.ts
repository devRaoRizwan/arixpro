export type StatItem = {
  label: string
  detail: string
}

/**
 * Deliberately no invented numbers. These describe how ArixPro teaches.
 * Replace with measured figures only once they are real.
 */
export const stats: StatItem[] = [
  { label: '1-on-1 Mentorship', detail: 'Sessions built around one student' },
  { label: 'Live Learning', detail: 'Taught live, questions answered live' },
  { label: 'Practical Projects', detail: 'Every module ends in working code' },
  { label: 'Urdu-Friendly', detail: 'Explained in the language you think in' },
]
