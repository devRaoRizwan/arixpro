import type { LucideIcon } from 'lucide-react'
import {
  Boxes,
  Code2,
  Cpu,
  Smartphone,
  Repeat,
  Cloud,
} from 'lucide-react'

export type ServiceItem = {
  id: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  deliverables: string[]
  technologies: string[]
  metrics?: string
}

export const services: ServiceItem[] = [
  {
    id: 'ecosystem',
    title: 'Full Ecosystem Engineering',
    tagline: 'Web frontend, backend API, and mobile app built as one cohesive system.',
    description:
      'The complete end-to-end digital foundation for modern businesses. We design and engineer your custom web portal, scalable backend engine, and iOS/Android mobile apps together—sharing unified data models, real-time sync, and cohesive security.',
    icon: Boxes,
    deliverables: [
      'Seamless multi-platform data sync between web and mobile users',
      'Unified authentication (SSO, OAuth, JWT) across all touchpoints',
      'Centralized admin dashboard controlling both web and mobile operations',
      'Shared API contracts and single source of truth for business logic',
    ],
    technologies: ['React', 'React Native', 'Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: '100% Platform Parity',
  },
  {
    id: 'web',
    title: 'Custom Websites & Web Applications',
    tagline: 'High-performance, responsive, and conversion-focused web platforms.',
    description:
      'We build tailored web applications and high-conversion company websites that load fast, scale gracefully, and provide flawless user experiences across all desktop and mobile devices.',
    icon: Code2,
    deliverables: [
      'Bespoke web applications, SaaS dashboards, and client portals',
      'Responsive, accessible, and high-speed corporate websites',
      'Complex data visualizations, interactive tables, and search filters',
      'Clean SEO structure and optimized Core Web Vitals',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'GraphQL'],
    metrics: '< 1.1s Load Speed',
  },
  {
    id: 'backend',
    title: 'High-Performance Backends & APIs',
    tagline: 'Scalable data layers, rock-solid security, and low-latency throughput.',
    description:
      'The engine behind your software. We design robust microservices, relational and NoSQL database schemas, and resilient REST/gRPC endpoints capable of handling heavy concurrent traffic without bottlenecks.',
    icon: Cpu,
    deliverables: [
      'High-throughput RESTful and gRPC API endpoints',
      'Relational (PostgreSQL) and NoSQL database design & index optimization',
      'Secure role-based access control (RBAC), token auth, and encryption',
      'Event-driven message queues and background worker queues',
    ],
    technologies: ['Go', 'Node.js', 'Python', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
    metrics: '< 40ms P99 Latency',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    tagline: 'Intuitive iOS & Android apps built for performance and retention.',
    description:
      'Native-feel mobile applications that users enjoy using every day. We build offline-first, highly responsive apps for both Apple App Store and Google Play ecosystems.',
    icon: Smartphone,
    deliverables: [
      'Cross-platform iOS and Android applications with native smoothness',
      'Offline-first caching, local database storage, and background sync',
      'Push notification pipelines and hardware sensor integrations',
      'End-to-end App Store and Google Play publishing and CI/CD pipelines',
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Swift', 'Kotlin', 'SQLite'],
    metrics: '99.9% Crash-Free',
  },
  {
    id: 'automation',
    title: 'Workflow & Process Automation',
    tagline: 'Eliminate repetitive manual tasks with custom software automation.',
    description:
      'Turn slow manual spreadsheets and disjointed tools into automated, self-healing software workflows. We build custom integrations, scheduled jobs, and webhook listeners that run your operations automatically.',
    icon: Repeat,
    deliverables: [
      'Bi-directional API integrations between CRM, ERP, and payment platforms',
      'Scheduled background ETL jobs, report generation, and data scrapers',
      'Idempotent webhook processing with automatic retry mechanisms',
      'Automated email, SMS, and WhatsApp notification dispatchers',
    ],
    technologies: ['Python', 'Node.js', 'Redis', 'BullMQ', 'Cron', 'FastAPI'],
    metrics: '90%+ Manual Time Saved',
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure & DevOps',
    tagline: 'Zero-downtime deployments, automated scaling, and continuous security.',
    description:
      'We containerize and deploy your web, backend, and database systems using modern Infrastructure as Code (IaC). Automated continuous delivery pipelines ensure updates deploy cleanly with zero downtime.',
    icon: Cloud,
    deliverables: [
      'Containerization and orchestration via Docker and Kubernetes',
      'Automated CI/CD build, test, and zero-downtime deployment pipelines',
      'Cloud architecture setup and cost optimization on AWS / Google Cloud',
      'Continuous uptime monitoring, automated alerts, and daily backups',
    ],
    technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    metrics: '99.99% Cloud Uptime',
  },
]
