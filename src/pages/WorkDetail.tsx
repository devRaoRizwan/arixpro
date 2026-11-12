import { useParams, Link } from 'react-router-dom'
import { TechIcons } from '../components/TechIcons'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Database, Layers, Activity, Cpu } from 'lucide-react'

interface ProjectDetail {
  title: string
  subtitle: string
  category: string
  image: string
  problem: string
  problemContext: string
  whatWeBuilt: string
  architectureDetails: {
    layer: string
    tech: string
    description: string
  }[]
  metrics: {
    label: string
    value: string
    subtext: string
  }[]
  stackDisplay: string
  deviconNames: string[]
  features: string[]
  nextSlug: string
  nextTitle: string
}

const PROJECTS_DATA: Record<string, ProjectDetail> = {
  'analytics-dashboard': {
    title: 'Analytics Dashboard',
    subtitle: 'High-Concurrency Real-Time Querying & Telemetry Aggregation Engine',
    category: 'Telemetry & Analytics',
    image: '/images/work-analytics-dashboard.webp',
    problem: 'Slow SQL execution times, cold-start latency, and lack of live updates paralyzing executive decision workflows.',
    problemContext:
      'The client was relying on legacy batch queries running directly on operational production replicas. Reports took up to 45 seconds to generate, triggering database lock contention and providing stale data to leadership.',
    whatWeBuilt:
      'A decoupled, event-driven telemetry dashboard pairing an asynchronous FastAPI data ingestor with an optimized PostgreSQL read-replica cluster and a sub-100ms React visualization layer.',
    architectureDetails: [
      {
        layer: 'Ingestion & ETL',
        tech: 'FastAPI + Celery + Redis',
        description: 'Asynchronous workers consume, validate, and batch-normalize 50,000 hourly events into partitioned time-series schemas.',
      },
      {
        layer: 'Storage & Querying',
        tech: 'PostgreSQL 16 + Partitioned Timescale Tables',
        description: 'Pre-computed rollup tables and index strategies reduce analytical p99 query latency from 45 seconds to 42 milliseconds.',
      },
      {
        layer: 'UI & Visualization',
        tech: 'React 19 + TypeScript + Canvas Charts',
        description: 'Zero-bloat interactive line charts, cohort tables, and parametric filters with sub-second data streaming over WebSockets.',
      },
    ],
    metrics: [
      { label: 'Query Latency', value: '< 45ms', subtext: 'p99 across 10M records' },
      { label: 'Ingestion Rate', value: '50k/hr', subtext: 'Zero data drop rate' },
      { label: 'Sync Consistency', value: '100%', subtext: 'Automated atomic batches' },
    ],
    stackDisplay: 'Python 3.12, FastAPI, React 19, TypeScript, PostgreSQL 16, Redis',
    deviconNames: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis'],
    features: [
      'Multi-metric KPI cards with sparkline trend indicators',
      'Real-time line, area, and stacked bar distribution charts',
      'Parametric date-range filters with instant client-side caching',
      'Asynchronous background CSV and PDF report generation',
      'Strict role-based access control (RBAC) with audit logs',
      'Automated data anomaly alerts routed to Slack and Webhooks',
    ],
    nextSlug: 'ecommerce-admin',
    nextTitle: 'E-commerce Admin',
  },
  'ecommerce-admin': {
    title: 'E-commerce Admin',
    subtitle: 'High-Concurrency Multi-Storefront Inventory & Order Fulfillment Core',
    category: 'Commerce Infrastructure',
    image: '/images/work-ecommerce-admin.webp',
    problem: 'Inventory sync failures, fragmented refund handling, and spreadsheet-driven manual order processing causing overselling.',
    problemContext:
      'Rapid catalog growth across multiple channels led to race conditions during flash promotions. Operations staff spent 20+ hours weekly manually reconciling inventory levels and cross-referencing payment processor chargebacks.',
    whatWeBuilt:
      'An enterprise back-office management system engineered with Django REST, robust database-level transactional row locking, and an intuitive fulfillment workflow dashboard.',
    architectureDetails: [
      {
        layer: 'Transaction Safety',
        tech: 'Django ORM + PostgreSQL Row-Level Locks',
        description: 'Pessimistic concurrency locking prevents overselling during high-volume checkout surges across distributed storefronts.',
      },
      {
        layer: 'Event Processing',
        tech: 'Celery + Redis Broker',
        description: 'Decoupled webhooks process Stripe payment intents, 3PL logistics dispatch, and instant stock deduction notifications in under 200ms.',
      },
      {
        layer: 'Management Console',
        tech: 'React 19 + TypeScript + Tailwind CSS',
        description: 'Keyboard-first order triage interface with real-time inventory adjustments, batch label generation, and automated refund audits.',
      },
    ],
    metrics: [
      { label: 'Inventory Drift', value: '0.00%', subtext: 'Zero race conditions' },
      { label: 'Webhook Latency', value: '180ms', subtext: 'Fulfillment dispatch' },
      { label: 'Processing Speed', value: '4x', subtext: 'Reduction in manual clicks' },
    ],
    stackDisplay: 'Python, Django REST Framework, PostgreSQL, React, Redis, Docker',
    deviconNames: ['Python', 'PostgreSQL', 'React', 'Redis', 'Docker'],
    features: [
      'High-throughput live order stream with instant fulfillment triage',
      'Multi-warehouse inventory tracker with threshold-based restock triggers',
      'Automated dispute and refund execution with gateway reconciliation',
      'Faceted SKU search over 100,000 items in under 50 milliseconds',
      'Granular operator permission policies with tamper-proof activity logs',
      'Direct integration with major logistics shipping carriers and webhooks',
    ],
    nextSlug: 'crm-platform',
    nextTitle: 'CRM Platform',
  },
  'crm-platform': {
    title: 'CRM Platform',
    subtitle: 'Pipeline Automation, Interaction History & Account Intelligence Engine',
    category: 'Enterprise Systems',
    image: '/images/work-crm-platform.webp',
    problem: 'Siloed sales communications, untracked client touchpoints, and dropped follow-ups causing lost deal conversions.',
    problemContext:
      'Growing account management teams struggled with fragmented contact records dispersed across email inboxes, chat threads, and notes. Without an integrated timeline or automated reminders, critical contract renewals were consistently overlooked.',
    whatWeBuilt:
      'A dedicated relationship management platform featuring a responsive Kanban deal board, automated email synchronization workers, and intelligent reminder scheduling.',
    architectureDetails: [
      {
        layer: 'Pipeline Engine',
        tech: 'FastAPI + Asynchronous SQLAlchemy',
        description: 'Sub-30ms deal card transitions with optimistic UI updates and server-side state validation.',
      },
      {
        layer: 'Background Workers',
        tech: 'Celery + Redis Task Queues',
        description: 'Continuous background workers poll and sync bidirectional email threads, parse meeting schedules, and trigger contextual reminders.',
      },
      {
        layer: 'Frontend Workspace',
        tech: 'React 19 + TypeScript + Drag-and-Drop Core',
        description: 'Fluid drag-and-drop opportunity board with keyboard shortcuts, instant search, and inline record editing.',
      },
    ],
    metrics: [
      { label: 'Search Speed', value: '< 25ms', subtext: 'Across 250k contacts' },
      { label: 'Follow-up Reliability', value: '100%', subtext: 'Zero missed notifications' },
      { label: 'Sync Pipeline', value: 'Real-time', subtext: 'Sub-second WebSocket updates' },
    ],
    stackDisplay: 'Python 3.12, FastAPI, PostgreSQL, React, TypeScript, Redis, Celery',
    deviconNames: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis'],
    features: [
      'Visual multi-stage sales pipeline with stage velocity tracking',
      'Unified contact dossiers featuring chronologically organized interaction history',
      'Rule-based automated task and follow-up assignment workflows',
      'Full-text fuzzy search across contacts, accounts, and internal notes',
      'Customizable custom fields, deal probability scoring, and team visibility',
      'Secure tokenized API integrations for calendar and email synchronization',
    ],
    nextSlug: 'analytics-dashboard',
    nextTitle: 'Analytics Dashboard',
  },
}

export function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? PROJECTS_DATA[slug] : undefined

  if (!project) {
    return (
      <div className="py-24 text-center text-slate-900 bg-white">
        <div className="mx-auto max-w-md px-6">
          <h1 className="font-sans text-[26px] font-bold text-slate-950">
            System Case Study Not Found
          </h1>
          <p className="mt-3 text-slate-600 font-sans text-[15px]">
            The requested architecture case study does not exist or has been relocated.
          </p>
          <div className="mt-8">
            <Link to="/work" className="btn-primary rounded-full">
              Return to Work &amp; Systems
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-slate-100 py-4 bg-slate-50/80 backdrop-blur-md">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Work &amp; Systems</span>
          </Link>
          <span className="font-mono text-[11px] font-bold text-[#6336C5] uppercase tracking-wider bg-[#6336C5]/10 px-3 py-1 rounded-full border border-[#6336C5]/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Hero Visual Mockup Container */}
      <section className="py-12 border-b border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 flex items-center justify-center overflow-hidden shadow-xs">
            <img
              src={project.image}
              alt={project.title}
              width={1376}
              height={768}
              className="w-full max-h-[540px] object-contain rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="py-20">
        <div className="mx-auto max-w-[960px] px-6 sm:px-8 space-y-16">
          {/* Header Title & Subtitle */}
          <div>
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Production Implementation
            </span>
            <h1 className="mt-2 font-sans text-[34px] sm:text-[44px] font-bold text-slate-950 tracking-tight">
              {project.title}
            </h1>
            <p className="mt-3 font-sans text-[18px] text-slate-600 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Key Production Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {m.label}
                </span>
                <span className="mt-2 font-mono text-[30px] font-bold text-[#059669]">
                  {m.value}
                </span>
                <span className="mt-1 font-sans text-[13px] text-slate-500">
                  {m.subtext}
                </span>
              </div>
            ))}
          </div>

          {/* The Problem */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-2 text-[#6336C5]">
              <Activity className="size-5" />
              <h2 className="font-sans text-[22px] font-bold text-slate-950">
                The Operational Problem
              </h2>
            </div>
            <p className="font-sans text-[17px] font-medium text-slate-900 leading-relaxed">
              {project.problem}
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-slate-600">
              {project.problemContext}
            </p>
          </div>

          {/* What We Built */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#0284C7]">
              <Cpu className="size-5" />
              <h2 className="font-sans text-[22px] font-bold text-slate-950">
                What We Built
              </h2>
            </div>
            <p className="font-sans text-[16px] leading-[1.65] text-slate-600">
              {project.whatWeBuilt}
            </p>
          </div>

          {/* System Architecture Layers */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#059669]">
              <Layers className="size-5" />
              <h2 className="font-sans text-[22px] font-bold text-slate-950">
                System Architecture
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {project.architectureDetails.map((layer, idx) => (
                <div
                  key={layer.layer}
                  className="rounded-xl border border-slate-200 bg-slate-50/80 p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                        0{idx + 1} //
                      </span>
                      <h3 className="font-sans text-[17px] font-bold text-slate-950">
                        {layer.layer}
                      </h3>
                    </div>
                    <p className="mt-2 font-sans text-[14px] leading-relaxed text-slate-600">
                      {layer.description}
                    </p>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <span className="inline-block rounded-md bg-white px-3 py-1 font-mono text-[12px] font-medium text-[#0284C7] border border-slate-200 shadow-xs">
                      {layer.tech}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Stack */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D97706]">
              <Database className="size-5" />
              <h2 className="font-sans text-[22px] font-bold text-slate-950">
                Technology Stack
              </h2>
            </div>
            <p className="font-mono text-[14px] text-slate-600">
              {project.stackDisplay}
            </p>
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50">
              <TechIcons names={project.deviconNames} />
            </div>
          </div>

          {/* Delivered Capabilities */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#059669]">
              <ShieldCheck className="size-5" />
              <h2 className="font-sans text-[22px] font-bold text-slate-950">
                Delivered Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs"
                >
                  <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                  <span className="font-sans text-[14px] font-medium text-slate-900">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Project & CTA Navigation */}
          <div className="pt-12 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to={`/work/${project.nextSlug}`}
              className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-slate-950 hover:text-[#6336C5] transition-colors"
            >
              <span>Next Architecture: {project.nextTitle}</span>
              <ArrowRight className="size-4" />
            </Link>

            <Link to="/contact" className="btn-primary w-full sm:w-auto rounded-full">
              <span>Start a Project</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkDetail
