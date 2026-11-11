import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Cpu } from 'lucide-react'

interface WorkProject {
  slug: string
  title: string
  category: 'Dashboard' | 'E-commerce' | 'CRM'
  image: string
  oneLine: string
  metric: string
  tags: string[]
}

const WORK_PROJECTS: WorkProject[] = [
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    category: 'Dashboard',
    image: '/images/work-analytics-dashboard.webp',
    oneLine: 'Operational telemetry and distributed query aggregation engine rendering 100k data points in under 68ms.',
    metric: '< 45ms p99 query latency',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis'],
  },
  {
    slug: 'ecommerce-admin',
    title: 'E-commerce Admin',
    category: 'E-commerce',
    image: '/images/work-ecommerce-admin.webp',
    oneLine: 'Multi-storefront inventory control, transactional order triage, and automated 3PL carrier dispatch.',
    metric: '0.00% inventory drift',
    tags: ['Django', 'PostgreSQL', 'React', 'Redis', 'Docker'],
  },
  {
    slug: 'crm-platform',
    title: 'CRM Platform',
    category: 'CRM',
    image: '/images/work-crm-platform.webp',
    oneLine: 'Enterprise deal pipeline tracker, contact interaction ledger, and automated contract renewal reminders.',
    metric: 'Sub-second sync over 250k accounts',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Celery'],
  },
]

export function Work() {
  const [filter, setFilter] = useState<'All' | 'Dashboard' | 'E-commerce' | 'CRM'>('All')

  const filterOptions: ('All' | 'Dashboard' | 'E-commerce' | 'CRM')[] = [
    'All',
    'Dashboard',
    'E-commerce',
    'CRM',
  ]

  const filteredProjects =
    filter === 'All'
      ? WORK_PROJECTS
      : WORK_PROJECTS.filter((p) => p.category === filter)

  return (
    <div className="w-full text-white selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Title & Filter Header */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#794BE8]/15 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-4">
              <Cpu className="size-3.5 text-[#38BDF8]" />
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#A78BFA]">
                Portfolio &amp; Case Studies
              </span>
            </div>
            <h1 className="font-sans text-[36px] sm:text-[48px] font-bold text-white tracking-tight leading-tight">
              Work &amp; Systems
            </h1>
            <p className="mt-3 font-sans text-[17px] leading-relaxed text-[#C9C2E0]/85">
              Production architectures engineered with strict relational integrity, high test coverage, and predictable performance.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setFilter(opt)}
                className={`h-[38px] px-4 rounded-full font-sans text-[14px] font-medium transition-all cursor-pointer border ${
                  filter === opt
                    ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-[0_0_16px_rgba(139,92,246,0.4)]'
                    : 'bg-white/[0.04] text-[#C9C2E0] border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
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
                className="ui-card flex flex-col justify-between overflow-hidden group"
              >
                {/* Image on top, full image, no crop, no Live badge */}
                <Link
                  to={`/work/${project.slug}`}
                  className="block w-full bg-[#06020E] p-5 border-b border-white/[0.08] flex items-center justify-center overflow-hidden"
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
                    <span className="font-mono text-[11px] font-bold text-[#10B981]">
                      {project.metric}
                    </span>

                    <h2 className="mt-2 font-sans text-[20px] font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                      <Link to={`/work/${project.slug}`}>{project.title}</Link>
                    </h2>

                    <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#C9C2E0]/80">
                      {project.oneLine}
                    </p>
                  </div>

                  {/* Stack tags at the bottom */}
                  <div className="mt-6 pt-4 border-t border-white/[0.08]">
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-[#C9C2E0] border border-white/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/work/${project.slug}`}
                      className="font-sans text-[13px] font-semibold text-[#A78BFA] group-hover:text-white inline-flex items-center gap-1.5 transition-colors"
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
      <section className="py-20 border-t border-white/[0.06] bg-[#07030E]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="font-sans text-[28px] sm:text-[34px] font-bold text-white tracking-tight">
            Need a similar architecture built?
          </h2>
          <p className="mt-3 font-sans text-[16px] text-[#C9C2E0]/80 max-w-xl mx-auto">
            We architect systems to withstand real traffic from day one.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary text-[16px] h-[50px] px-8">
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
