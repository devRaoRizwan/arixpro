import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Web Applications & SaaS',
    tagline: 'Modern, high-performance web products built for users and business scale.',
    detail:
      'From early MVPs to mature customer portals and multi-tenant platforms. We handle frontend architecture, secure authentication, Stripe billing, and database connections.',
    stack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    deliverable: 'Complete responsive web app with full repository ownership.',
  },
  {
    number: '02',
    title: 'APIs & Backend Engineering',
    tagline: 'Fast, secure server architectures that handle heavy traffic and clean data flow.',
    detail:
      'Asynchronous REST and WebSocket backends, relational database schemas in PostgreSQL, Redis caching, and third-party API integrations that do not break under load.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    deliverable: 'Tested backend endpoints with interactive OpenAPI documentation.',
  },
  {
    number: '03',
    title: 'Custom Internal Tools & Dashboards',
    tagline: 'Operational hubs and admin panels that eliminate manual spreadsheets.',
    detail:
      'Secure internal portals that connect directly to your databases and tools. Manage orders, track inventory, view live analytics, and assign granular team permissions.',
    stack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    deliverable: 'Private admin dashboard deployed on your domain with zero per-seat fees.',
  },
  {
    number: '04',
    title: 'Cloud Infrastructure & DevOps',
    tagline: 'Reliable cloud deployments with automated CI/CD and zero-downtime releases.',
    detail:
      'Docker containerization, GitHub Actions deployment pipelines, SSL/domain configuration, and automated database backups on AWS, Vercel, or Cloudflare.',
    stack: ['AWS', 'Docker', 'GitHub Actions', 'Cloudflare'],
    deliverable: 'Automated deployment pipeline with staging environments and backups.',
  },
]

const process = [
  {
    step: '01',
    title: 'Scope',
    desc: 'Clear requirements, agreed tech stack, and fixed timeline before writing code.',
  },
  {
    step: '02',
    title: 'Build',
    desc: 'Weekly milestones with live staging previews so you test working software.',
  },
  {
    step: '03',
    title: 'Ship & Own',
    desc: 'Full transfer of code repository, credentials, and documentation with 30-day warranty.',
  },
]

export function Services() {
  useSeo({
    title: 'Services & Engineering Capabilities',
    description:
      'Custom web applications, backend APIs, internal dashboards, and cloud infrastructure engineered by ArixPro.',
    path: '/services',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Minimal Header */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <span className="font-mono text-[12px] uppercase tracking-wider text-[#6336C5] font-semibold">
            Services
          </span>
          <h1 className="mt-3 font-sans text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.1]">
            Software engineered for production.
          </h1>
          <p className="mt-4 font-sans text-[17px] sm:text-[19px] text-slate-600 leading-relaxed max-w-2xl">
            We build custom web apps, scalable backends, and internal operational tools. Clean architecture, direct communication, and 100% code ownership.
          </p>
        </div>
      </section>

      {/* 2. Services Editorial List */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          {services.map((service) => (
            <div
              key={service.number}
              id={service.number}
              className="py-10 sm:py-12 border-b border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              {/* Left Column: Number + Title + Tagline */}
              <div className="md:col-span-5">
                <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                  {service.number} //
                </span>
                <h2 className="mt-2 font-sans text-[22px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-2 font-sans text-[14.5px] text-slate-500 leading-relaxed">
                  {service.tagline}
                </p>
              </div>

              {/* Right Column: Detail + Stack + Deliverable */}
              <div className="md:col-span-7 space-y-4">
                <p className="font-sans text-[15px] text-slate-700 leading-relaxed">
                  {service.detail}
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11.5px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Deliverable Tag */}
                <div className="pt-2">
                  <p className="font-sans text-[13px] text-slate-600">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 mr-2">
                      Deliverable:
                    </span>
                    {service.deliverable}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Simple Engagement Steps */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <span className="block font-mono text-[11.5px] uppercase tracking-wider text-slate-500 font-semibold mb-8">
            How Engagements Work
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {process.map((p) => (
              <div key={p.step} className="space-y-2">
                <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                  {p.step}
                </span>
                <h3 className="font-sans text-[18px] font-bold text-slate-950">
                  {p.title}
                </h3>
                <p className="font-sans text-[14px] text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Minimal Contact Strip */}
      <section className="py-20 sm:py-24 bg-white text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-sans text-[26px] sm:text-[32px] font-bold text-slate-950 tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-3 font-sans text-[16px] text-slate-600 leading-relaxed">
            Tell us what you want to build. We will reply within 24 hours with an honest technical assessment and realistic timeline.
          </p>
          <div className="mt-7">
            <Link
              to="/contact"
              className="btn-primary text-[15px] h-[48px] px-8 rounded-full shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
