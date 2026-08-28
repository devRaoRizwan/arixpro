import { Hammer, Repeat, Sprout, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Pillar = {
  index: string
  title: string
  body: string
  icon: LucideIcon
}

export const pillars: Pillar[] = [
  {
    index: '01',
    title: 'Learn',
    body: 'Concepts from the fundamentals up, explained until they actually make sense, not until the slide ends.',
    icon: BookOpen,
  },
  {
    index: '02',
    title: 'Build',
    body: 'Every concept lands in a real project. You write the code, break it, and fix it yourself.',
    icon: Hammer,
  },
  {
    index: '03',
    title: 'Practice',
    body: 'Regular problem sets and debugging drills that turn knowledge into working, repeatable skill.',
    icon: Repeat,
  },
  {
    index: '04',
    title: 'Grow',
    body: 'Finish with a portfolio, a workflow and the habits that internships, jobs and freelance clients look for.',
    icon: Sprout,
  },
]
