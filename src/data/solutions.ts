import type { LucideIcon } from 'lucide-react'
import { Server, Zap, Repeat, Boxes, Smartphone } from 'lucide-react'

export type SolutionItem = {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  capabilities: string[]
  architectureHighlights: string[]
}

export const solutions: SolutionItem[] = [
  {
    id: 'ecosystem',
    title: 'Full Multi-Platform Ecosystems',
    subtitle: 'Unified Web App, Backend API, and iOS/Android Mobile App.',
    description:
      'Eliminate the friction of juggling separate agencies for web, mobile, and backend. We architect and build complete digital ecosystems where web frontends, mobile clients, and backend services communicate with shared type contracts, real-time sync, and cohesive authentication.',
    icon: Smartphone,
    capabilities: [
      'Synchronized real-time state between web and mobile users via WebSockets',
      'Centralized backend architecture powering both desktop and mobile apps',
      'Unified single sign-on (SSO), push notifications, and payment gateways',
      'Single admin control dashboard overseeing the entire multi-device ecosystem',
    ],
    architectureHighlights: [
      'Shared TypeScript data contracts across frontend and mobile',
      'Microservice API gateway with unified rate-limiting and telemetry',
      'Automated parallel deployment pipelines for Web, App Store, and Google Play',
    ],
  },
  {
    id: 'saas',
    title: 'SaaS Product Engineering',
    subtitle: 'From greenfield architecture to multi-tenant scale.',
    description:
      'Building software as a service requires resilient multi-tenancy, subscription billing, granular role-based access control (RBAC), and bulletproof data isolation. We engineer complete SaaS platforms designed to scale seamlessly as user concurrency surges.',
    icon: Boxes,
    capabilities: [
      'Multi-tenant database architectures with strict row-level security',
      'Stripe & LemonSqueezy recurring billing and invoice automation',
      'Role-based authorization (RBAC) and team management',
      'Audit logging, activity telemetry, and tenant usage metrics',
    ],
    architectureHighlights: [
      'Tenant isolation by schema or row keys',
      'Global edge caching and low-latency API routes',
      'Real-time WebSocket notifications & event dispatchers',
    ],
  },
  {
    id: 'automation',
    title: 'Enterprise Workflow & Business Automation',
    subtitle: 'Automate manual operations, legacy syncs, and back-office pipelines.',
    description:
      'Replace error-prone manual spreadsheets and legacy data entry with automated software workflows. We integrate fragmented ERPs, CRMs, and payment gateways into coherent, automated background pipelines.',
    icon: Repeat,
    capabilities: [
      'Bi-directional synchronization across external third-party APIs',
      'Automated reconciliation engines for financial and inventory data',
      'Self-healing background sync jobs with dead-letter queue recovery',
      'Custom internal admin dashboards with fine-grained approval permissions',
    ],
    architectureHighlights: [
      'Idempotent webhook receivers with cryptographic signature verification',
      'Automated failure alerting with Slack and PagerDuty webhooks',
      'Immutable audit trails recording every write action',
    ],
  },
  {
    id: 'performance',
    title: 'High-Throughput Backends & Distributed APIs',
    subtitle: 'Ultra-low latency microservices handling millions of events daily.',
    description:
      'When databases bottleneck and response times slip, architecture makes the difference. We design event-driven distributed systems that decouple heavy workloads from user-facing request cycles.',
    icon: Zap,
    capabilities: [
      'Asynchronous task workers and durable message queues',
      'In-memory distributed caching strategies with Redis',
      'PostgreSQL query indexing, partition optimization, and connection pooling',
      'Distributed tracing to pinpoint execution bottlenecks in milliseconds',
    ],
    architectureHighlights: [
      'gRPC service-to-service communication for sub-millisecond serialization',
      'Kafka event streams with at-least-once delivery guarantees',
      'Non-blocking async I/O runtime kernels',
    ],
  },
  {
    id: 'modernization',
    title: 'Cloud & Infrastructure Modernization',
    subtitle: 'Transform legacy servers into resilient cloud native systems.',
    description:
      'Legacy servers and manual shell scripts create operational bottlenecks and severe downtime risks. We modernize your infrastructure with automated Kubernetes clusters, continuous integration, and declarative configurations.',
    icon: Server,
    capabilities: [
      'Legacy VM to containerized workload migration',
      'Multi-region high-availability failover architectures',
      'Automated preview environments for engineering pull requests',
      'Cost reduction through spot instances and intelligent autoscaling',
    ],
    architectureHighlights: [
      'GitOps workflow via ArgoCD & Terraform',
      'Integrated Prometheus & Grafana alerting stacks',
      'Automated disaster recovery and multi-zone database replication',
    ],
  },
]
