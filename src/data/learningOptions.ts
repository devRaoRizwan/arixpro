import { UserRound, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type LearningOption = {
  id: 'one-on-one' | 'live-batch'
  title: string
  body: string
  bestFor: string[]
  ctaLabel: string
  ctaHref: string
  icon: LucideIcon
  featured: boolean
}

export const learningOptions: LearningOption[] = [
  {
    id: 'one-on-one',
    title: '1-on-1 Mentorship',
    body: 'A private session with an instructor, scheduled around you. The pace, the examples and the projects are chosen for your goal, and nobody else is waiting on the call.',
    bestFor: [
      'Complete beginners',
      'Students who need individual attention',
      'Career-focused learners with a deadline',
      'Anyone working toward a specific project or goal',
    ],
    ctaLabel: 'Book 1-on-1',
    ctaHref: '/contact?mode=one-on-one',
    icon: UserRound,
    featured: true,
  },
  {
    id: 'live-batch',
    title: 'Live Batches',
    body: 'Structured live classes with a small group following a fixed curriculum. You learn alongside other students, compare approaches, and keep pace with a schedule.',
    bestFor: [
      'Students who prefer classroom-style learning',
      'More affordable than private sessions',
      'Peer discussion and shared debugging',
      'A fixed, predictable curriculum',
    ],
    ctaLabel: 'View Batches',
    ctaHref: '/contact?mode=live-batch',
    icon: UsersRound,
    featured: false,
  },
]
