import {
  ArrowRight,
  BookOpen,
  Languages,
  MessageCircle,
  Route,
  UserRound,
  UsersRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * The `/links` page, for the single link every social bio allows.
 *
 * Order is deliberate: the two things someone lands here to do sit at the top,
 * and everything below is for people still deciding. Anything that is not a
 * destination worth a tap does not belong on this page.
 */
export type BioLink = {
  label: string
  /** One short line. Bio traffic scans, it does not read. */
  hint: string
  /** Internal route, or an absolute URL for anything off-site. */
  href: string
  icon: LucideIcon
  primary?: boolean
}

export const bioLinks: BioLink[] = [
  {
    label: 'Start Learning',
    hint: 'Tell us your goal, we reply with a starting point',
    href: '/contact',
    icon: ArrowRight,
    primary: true,
  },
  {
    label: 'Message on WhatsApp',
    hint: 'Fastest answer, usually same day',
    href: 'whatsapp',
    icon: MessageCircle,
    primary: true,
  },
  {
    label: 'Courses',
    hint: 'Python, web development, backend, AI',
    href: '/courses',
    icon: BookOpen,
  },
  {
    label: '1-on-1 Mentorship',
    hint: 'Private sessions, scheduled around you',
    href: '/contact?mode=one-on-one',
    icon: UserRound,
  },
  {
    label: 'Live Batches',
    hint: 'Small groups of 5 or 10 students',
    href: '/contact?mode=live-batch',
    icon: UsersRound,
  },
  {
    label: 'Learning Path',
    hint: 'From zero to job-ready, in eight stages',
    href: '/learning-paths',
    icon: Route,
  },
  {
    label: 'Why We Teach in Urdu',
    hint: 'Concepts in Urdu, technical terms in English',
    href: '/learn-coding-in-urdu',
    icon: Languages,
  },
]
