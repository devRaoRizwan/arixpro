import {
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Feature = {
  title: string
  body: string
  icon: LucideIcon
}

export const whyArixPro: Feature[] = [
  {
    title: 'Disciplined Architecture',
    body: 'We model domain boundaries, schemas, and API contracts before building. No rushed hacks that cripple future releases.',
    icon: Layers,
  },
  {
    title: 'Strict Type-Safety & Testing',
    body: 'Every PR is guarded by automated test suites, linting, and type verification. Zero compromises on codebase stability.',
    icon: ShieldCheck,
  },
  {
    title: 'High-Concurrency Performance',
    body: 'Optimized for low latency. We tune database indexes, connection pools, and caching layers to maintain sub-100ms response targets.',
    icon: Cpu,
  },
  {
    title: 'Observable & Maintainable',
    body: 'Built with structured logging, distributed tracing, and automated health checks. When edge cases happen, they are solved in minutes.',
    icon: Activity,
  },
  {
    title: 'Senior Engineering Team',
    body: 'Direct collaboration with engineers who understand system design, distributed systems, and real-world scale.',
    icon: Terminal,
  },
  {
    title: 'Transparent Sprint Cadence',
    body: 'Bi-weekly sprint reviews, demonstrable staging environments, and full visibility into git commits and issue tracking boards.',
    icon: Users,
  },
]
