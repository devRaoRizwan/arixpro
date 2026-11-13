import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { ArrowRight, ArrowUpRight, Cpu } from 'lucide-react'

interface WorkProject {
  slug: string
  title: string
  category: string
  metric: string
  oneLine: string
  image: string
  tags: string[]
}

const WORK_PROJECTS: WorkProject[] = [
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    category: 'Dashboards',
    metric: '< 45ms query latency',
    oneLine: 'Real-time telemetry and aggregated analytics built for high-concurrency systems.',
    image: '/images/work-analytics-dashboard.webp',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'WebSockets', 'ClickHouse'],
  },
  {
    slug: 'ecommerce-admin',
    title: 'E-commerce Admin',
    category: 'Admin Panels',
    metric: '0.00% inventory drift',
    oneLine: 'Multi-store order processing and synchronized inventory controls.',
    image: '/images/work-ecommerce-admin.webp',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Stripe', 'Docker'],
  },
  {
    slug: 'crm-platform',
    title: 'CRM Platform',
    category: 'SaaS Platforms',
    metric: '250k indexed accounts',
    oneLine: 'Scalable customer pipeline with full audit history and sub-second full-text search.',
    image: '/images/work-crm-platform.webp',
    tags: ['React', 'Django REST', 'Celery', 'Redis', 'AWS'],
  },
]

export function Work() {
  useSeo({
    title: 'Work | ArixPro',
    description: 'Explore case studies for custom dashboards, commerce systems, and CRM platforms built by ArixPro.',
    path: '/work',
  })

  const [filter, setFilter] = useState('All')

  const filterOptions = ['All', 'Dashboards', 'Admin Panels', 'SaaS Platforms']

  const filteredProjects =
    filter === 'All'
      ? WORK_PROJECTS
      : WORK_PROJECTS.filter((p) => p.category === filter)

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* Title & Filter Header */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-purple-100/50 to-transparent blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-4 shadow-xs">
              <Cpu className="size-3.5 text-[#0284C7]" />
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
                Portfolio &amp; Case Studies
              </span>
            </div>
            <h1 className="font-sans text-[36px] sm:text-[48px] font-bold text-slate-950 tracking-tight leading-tight">
              Work &amp; Systems
            </h1>
            <p className="mt-3 font-sans text-[17px] leading-relaxed text-slate-600">
              Production architectures engineered with strict relational integrity, high test coverage, and predictable performance.
            </p>
          </div>

          {/* Interactive Filter Pills (AI Fiesta Style) */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setFilter(opt)}
                className={`h-[38px] px-4.5 rounded-full font-sans text-[13.5px] font-medium transition-all cursor-pointer border ${
                  filter === opt
                    ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredProjects.map((project) => (
              <article
                key={project.slug}
                className="ui-card flex flex-col justify-between overflow-hidden group bg-white border border-slate-200 shadow-sm rounded-2xl"
              >
                {/* Image on top, full image, no crop */}
                <Link
                  to={`/work/${project.slug}`}
                  className="block w-full bg-slate-50 p-5 border-b border-slate-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </Link>

                <div className="p-6 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#059669]">
                      {project.metric}
                    </span>

                    <h2 className="mt-2 font-sans text-[20px] font-bold text-slate-950 group-hover:text-[#6336C5] transition-colors">
                      <Link to={`/work/${project.slug}`}>{project.title}</Link>
                    </h2>

                    <p className="mt-2 font-sans text-[14px] leading-relaxed text-slate-600">
                      {project.oneLine}
                    </p>
                  </div>

                  {/* Stack tags at the bottom */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-50 px-2.5 py-1 font-mono text-[11px] text-slate-600 border border-slate-200/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/work/${project.slug}`}
                      className="font-sans text-[13px] font-semibold text-[#6336C5] group-hover:text-slate-950 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read System Case Study</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="font-sans text-[28px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
            Need a similar architecture built?
          </h2>
          <p className="mt-3 font-sans text-[16px] text-slate-600 max-w-xl mx-auto">
            We architect systems to withstand real traffic from day one.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary text-[15px] h-[48px] px-8 rounded-full">
              <span>Start a Project</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
