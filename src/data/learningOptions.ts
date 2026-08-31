import { UserRound, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/** The two live-batch formats. Ids double as the `batch` query param on /contact. */
export type BatchTierId = 'focus' | 'standard'

export type BatchTier = {
  id: BatchTierId
  name: string
  /** Drives the seat meter, so it must stay <= SEAT_METER_MAX in the section. */
  seats: number
  seatsLabel: string
  tagline: string
  points: string[]
  /** One per tier so both buttons stay the same height. */
  badge: string
  /** Short positioning line under the points, e.g. how the fee compares. */
  note: string
  /** Drives which tier the card and the enrolment form open on. */
  recommended: boolean
}

export const batchTiers: BatchTier[] = [
  {
    id: 'focus',
    name: 'Focus Batch',
    seats: 5,
    seatsLabel: '5 students',
    tagline: 'Close to a private session, at group cost.',
    points: [
      'Everyone writes code on the call, every session',
      'Your work is reviewed individually each week',
      'Doubts answered the moment they come up',
      'Enough room to slow down when the group needs it',
    ],
    badge: 'Most attention',
    note: 'Fills fastest. Usually one batch per course at a time.',
    recommended: true,
  },
  {
    id: 'standard',
    name: 'Standard Batch',
    seats: 10,
    seatsLabel: '10 students',
    tagline: 'Classroom pace at the lowest fee we offer.',
    points: [
      'Same curriculum, same instructor, same projects',
      'A dedicated Q&A block in every session',
      'More peers to compare approaches and debug with',
      'Recordings and notes to catch anything you missed',
    ],
    badge: 'Lowest fee',
    note: 'The most affordable way to learn live with us.',
    recommended: false,
  },
]

export type LearningOption = {
  id: 'one-on-one' | 'live-batch'
  title: string
  body: string
  /** Static seat meter for options without `tiers`, so both cards read alike. */
  capacity?: { seats: number; label: string; note: string }
  /** Rendered only when the option has no `tiers`; tier points do that job instead. */
  bestFor?: string[]
  ctaLabel: string
  ctaHref: string
  icon: LucideIcon
  featured: boolean
  /** Present only on `live-batch`; renders the batch-format picker on the card. */
  tiers?: BatchTier[]
}

export const learningOptions: LearningOption[] = [
  {
    id: 'one-on-one',
    title: '1-on-1 Mentorship',
    body: 'A private session with an instructor, scheduled around you. The pace, the examples and the projects are chosen for your goal, and nobody else is waiting on the call.',
    capacity: {
      seats: 1,
      label: 'Just you',
      note: 'One student, one instructor, the whole session.',
    },
    bestFor: [
      'Complete beginners who have never written a line of code',
      'Students who need the instructor to themselves',
      'Career switchers working against a real deadline',
      'Anyone building one specific project, start to finish',
      'Working professionals fitting sessions around a job',
    ],
    ctaLabel: 'Book 1-on-1',
    ctaHref: '/contact?mode=one-on-one',
    icon: UserRound,
    featured: true,
  },
  {
    id: 'live-batch',
    title: 'Live Batches',
    body: 'Structured live classes with a small group following a fixed curriculum. Two batch sizes run in parallel, so you choose how much of the instructor you want to yourself.',
    ctaLabel: 'View Batches',
    ctaHref: '/contact?mode=live-batch',
    icon: UsersRound,
    featured: false,
    tiers: batchTiers,
  },
]
