import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import {
  Layout,
  Server,
  Gauge,
  Cloud,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Code2,
  FileCode2,
  RefreshCw,
  Sparkles,
} from 'lucide-react'

const coreServices = [
  {
    id: 'web-apps',
    icon: Layout,
    title: 'Custom Web Applications & SaaS',
    tag: 'Frontend & Full-Stack',
    description:
      'Fast, responsive web applications and customer portals built for high engagement and daily operational use.',
    features: [
      'Responsive user interfaces built with React 19, TypeScript & Tailwind CSS',
      'User authentication, session security, and role-based permissions',
      'Stripe billing, subscription tiers, invoices, and payment webhooks',
      'Optimistic state updates, client-side caching, and sub-100ms UI interactions',
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'],
    deliverable: 'Fully typed source repository, automated build pipeline, and responsive cross-device layouts.',
  },
  {
    id: 'backend-apis',
    icon: Server,
    title: 'Backend Systems & Robust APIs',
    tag: 'APIs & Databases',
    description:
      'High-throughput REST and WebSocket backends engineered for fast query response, data integrity, and clean integration.',
    features: [
      'Asynchronous Python (FastAPI / Django) or modern Node.js services',
      'Relational schema design, index optimization, and migrations in PostgreSQL',
      'In-memory Redis caching layers and asynchronous background worker queues',
      'Strict input validation schemas and parameterized SQL to eliminate vulnerabilities',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    deliverable: 'OpenAPI / Swagger documentation, parameterized migrations, and comprehensive test suites.',
  },
  {
    id: 'internal-tools',
    icon: Gauge,
    title: 'Internal Tools & Operations Dashboards',
    tag: 'Operations & Workflows',
    description:
      'Custom management dashboards and workflow tools that replace fragile spreadsheets and disconnected third-party software.',
    features: [
      'Direct connection to production databases with granular access tiers',
      'Interactive data tables with live filtering, sorting, and CSV/Excel export',
      'Team approval workflows, status tracking, and audit logging',
      'Multi-channel inventory, customer records, and order fulfillment sync',
    ],
    tech: ['React', 'TypeScript', 'PostgreSQL', 'REST / SQL', 'Tailwind CSS'],
    deliverable: 'Private internal portal deployed on your custom domain with zero ongoing per-seat license fees.',
  },
  {
    id: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps CI/CD',
    tag: 'DevOps & Reliability',
    description:
      'Production cloud environments and automated deployment pipelines configured for high availability and zero-downtime rollouts.',
    features: [
      'Docker containerization and automated GitHub Actions CI/CD workflows',
      'Deployment on AWS, Vercel, Cloudflare, or Linux VPS environments',
      'SSL certificates, DNS routing, and edge caching configuration',
      'Automated daily database backup snapshots and real-time error logging',
    ],
    tech: ['AWS', 'Docker', 'GitHub Actions', 'Cloudflare', 'Linux'],
    deliverable: 'Automated CI/CD deployment pipeline with staging previews and automated backup snapshots.',
  },
]

const standardDeliverables = [
  {
    icon: ShieldCheck,
    title: '100% Code Ownership',
    desc: 'All GitHub repositories, cloud accounts, and environment keys are transferred directly to you. No proprietary vendor lock-in.',
  },
  {
    icon: FileCode2,
    title: 'Production-Ready & Tested',
    desc: 'Every endpoint and critical UI workflow is covered by automated unit and integration tests before going live.',
  },
  {
    icon: Code2,
    title: 'Strict Types & Clean Architecture',
    desc: 'Engineered in TypeScript and Python with strict schema definitions so any developer can easily maintain and extend it.',
  },
  {
    icon: RefreshCw,
    title: '30-Day Launch Warranty',
    desc: 'We monitor production stability and resolve any unexpected bugs post-launch at zero additional cost.',
  },
]

export function Services() {
  useSeo({
    title: 'Services & Engineering Capabilities',
    description:
      'Custom web applications, backend APIs, internal dashboards, and cloud infrastructure engineered for production by ArixPro.',
    path: '/services',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-20 overflow-hidden border-b border-slate-100">
        {/* Subtle ambient light gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-transparent blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 text-[12.5px] font-medium text-slate-700 mb-6 shadow-xs">
            <Sparkles className="size-3.5 text-[#6336C5]" />
            <span>Production Engineering Services</span>
          </div>

          {/* Main Title */}
          <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[58px] font-bold text-slate-950 tracking-tight leading-[1.12] max-w-4xl mx-auto">
            What We Build &amp; Deliver
          </h1>

          {/* Subtitle */}
          <p className="mt-5 font-sans text-[17px] sm:text-[19px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Custom web applications, robust backends, and internal operational tools. Built with clean architecture, tested against real workloads, and handed over with full code ownership.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-[15px] h-[48px] px-8 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/work"
              className="btn-secondary text-[15px] h-[48px] px-8 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
            >
              <span>View Shipped Systems</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Core Services Grid (2x2) */}
      <section className="py-16 sm:py-24 bg-slate-50/50">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Core Offerings
            </span>
            <h2 className="mt-2.5 font-sans text-[28px] sm:text-[38px] font-bold text-slate-950 tracking-tight">
              Specialized Engineering Disciplines
            </h2>
            <p className="mt-3 font-sans text-[16px] text-slate-600 leading-relaxed">
              Every system is built to your specifications with dedicated architecture, clean documentation, and direct engineer communication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {coreServices.map((service) => {
              const IconComponent = service.icon
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Tag */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="size-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#6336C5]">
                        <IconComponent className="size-5.5" />
                      </div>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200/60">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-[22px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 font-sans text-[15px] leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                      <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Key Capabilities &amp; Features
                      </span>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                          <span className="font-sans text-[14px] text-slate-800 leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tech Stack & Deliverable Note */}
                  <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                    {/* Stack badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mr-1">
                        Stack:
                      </span>
                      {service.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11.5px] px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Deliverable Output */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-[13px] font-sans text-slate-700 flex items-baseline gap-2">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5] shrink-0">
                        Deliverable:
                      </span>
                      <span>{service.deliverable}</span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Non-Negotiable Standards (What You Receive) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Guaranteed Standards
            </span>
            <h2 className="mt-2.5 font-sans text-[28px] sm:text-[38px] font-bold text-slate-950 tracking-tight">
              What You Receive On Every Project
            </h2>
            <p className="mt-3 font-sans text-[16px] text-slate-600">
              No shortcuts or technical debt. Every engagement is executed to clear production standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardDeliverables.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6336C5] mb-4 shadow-xs">
                      <IconComp className="size-5" />
                    </div>
                    <h3 className="font-sans text-[17px] font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-[13.5px] leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Engagement Models (How We Work) */}
      <section className="py-16 sm:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Collaboration
            </span>
            <h2 className="mt-2.5 font-sans text-[28px] sm:text-[38px] font-bold text-slate-950 tracking-tight">
              Two Straightforward Ways to Work
            </h2>
            <p className="mt-3 font-sans text-[16px] text-slate-600">
              Pick the structure that fits your project timeline and organizational goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Fixed Scope */}
            <div className="p-8 sm:p-9 rounded-2xl border border-slate-200/90 bg-white shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#6336C5] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  Defined Deliverables
                </span>
                <h3 className="mt-4 font-sans text-[24px] font-bold text-slate-950">
                  Fixed-Scope Project
                </h3>
                <p className="mt-2.5 font-sans text-[14.5px] leading-relaxed text-slate-600">
                  Best for MVPs, specific feature sets, or full platform rebuilds with clear specifications.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2.5 text-[14px] text-slate-800">
                    <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Detailed scope document with guaranteed timeline</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-slate-800">
                    <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Weekly staging environment demos with working code</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-slate-800">
                    <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Milestone payments tied strictly to verified deliverables</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-slate-800">
                    <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Complete handover with documentation and environment keys</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="btn-secondary w-full justify-center text-[14.5px] h-[46px] rounded-full border border-slate-200"
                >
                  <span>Request Scope &amp; Quote</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Dedicated Sprint */}
            <div className="p-8 sm:p-9 rounded-2xl border-2 border-[#6336C5]/30 bg-white shadow-sm flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-6 bg-[#6336C5] text-white font-mono text-[11px] font-semibold px-3 py-0.5 rounded-full shadow-xs">
                Most Flexible
              </div>

              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#059669] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  Continuous Velocity
                </span>
                <h3 className="mt-4 font-sans text-[24px] font-bold text-slate-950">
                  Dedicated Monthly Sprint
                </h3>
                <p className="mt-2.5 font-sans text-[14.5px] leading-relaxed text-slate-600">
                  Best for growing platforms needing ongoing engineering velocity, feature additions, and scaling.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2.5 text-[14px] text-slate-800">
                    <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Direct async / Slack communication with senior engineers</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-slate-800">
                    <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Weekly sprint planning and continuous git commits</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-slate-800">
                    <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Flexible backlog prioritization as your business needs shift</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-slate-800">
                    <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Month-to-month engagement with zero long-term commitments</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center text-[14.5px] h-[46px] rounded-full shadow-xs"
                >
                  <span>Check Availability</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Closing CTA */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-sans text-[28px] sm:text-[38px] font-bold text-slate-950 tracking-tight">
              Have a project you want to build?
            </h2>
            <p className="mt-3.5 font-sans text-[16px] text-slate-600 leading-relaxed">
              Tell us about what you want to achieve. We'll reply within 24 hours with an honest technical assessment, recommended architecture, and realistic estimate.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="btn-primary text-[15px] h-[48px] px-8 rounded-full shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
