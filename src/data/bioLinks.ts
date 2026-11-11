import {
  ArrowRight,
  Code2,
  Boxes,
  Briefcase,
  Info,
  MessageCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type BioLink = {
  label: string
  hint: string
  href: string
  icon: LucideIcon
  primary?: boolean
}

export const bioLinks: BioLink[] = [
  {
    label: 'Start a Project',
    hint: 'Request a consultation or architecture review',
    href: '/contact',
    icon: ArrowRight,
    primary: true,
  },
  {
    label: 'Chat on WhatsApp',
    hint: 'Direct channel to engineering leads',
    href: 'whatsapp',
    icon: MessageCircle,
    primary: true,
  },
  {
    label: 'Software Services',
    hint: 'Web apps, mobile, cloud infrastructure & APIs',
    href: '/services',
    icon: Code2,
  },
  {
    label: 'Enterprise Solutions',
    hint: 'SaaS product build, modernizations & pipelines',
    href: '/solutions',
    icon: Boxes,
  },
  {
    label: 'Case Studies & Work',
    hint: 'Production architectures and impact metrics',
    href: '/work',
    icon: Briefcase,
  },
  {
    label: 'About ArixPro',
    hint: 'Our engineering principles and standards',
    href: '/about',
    icon: Info,
  },
]
