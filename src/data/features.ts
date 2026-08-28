import {
  Hammer,
  Sprout,
  LifeBuoy,
  Languages,
  FolderGit2,
  Briefcase,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Feature = {
  title: string
  body: string
  icon: LucideIcon
}

export const whyArixPro: Feature[] = [
  {
    title: 'Practical Learning',
    body: 'Time goes to the skills used in real development work, not to definitions that only matter in an exam.',
    icon: Hammer,
  },
  {
    title: 'Beginner Friendly',
    body: 'Nothing is assumed. If you have never opened a terminal, that is exactly where we start.',
    icon: Sprout,
  },
  {
    title: 'Personal Guidance',
    body: 'When something breaks, you get a person who explains why, not a comment section and a broken link.',
    icon: LifeBuoy,
  },
  {
    title: 'Real Projects',
    body: 'You leave every module with working code you wrote yourself and can defend line by line.',
    icon: FolderGit2,
  },
  {
    title: 'Urdu-Friendly',
    body: 'Difficult concepts explained in the language you think in, with the technical vocabulary kept in English.',
    icon: Languages,
  },
  {
    title: 'Career Focused',
    body: 'Git, APIs, databases, deployment and a portfolio. The things internships and clients actually ask for.',
    icon: Briefcase,
  },
]
