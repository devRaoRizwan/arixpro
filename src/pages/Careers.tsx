import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { Briefcase, MapPin, Clock, ArrowUpRight, CheckCircle2, Sparkles, Terminal, Code } from 'lucide-react'

interface Role {
  id: string
  title: string
  type: string
  location: string
  team: string
  desc: string
  requirements: string[]
}

const ROLES: Role[] = [
  {
    id: 'fullstack-senior',
    title: 'Senior Full-Stack Engineer',
    type: 'Full-time',
    location: 'Lahore (Kickstart DHA Phase 8) / Hybrid',
    team: 'Product Engineering',
    desc: 'Lead the architecture and delivery of customer portals, SaaS platforms, and operational dashboards from database schema to responsive React interfaces.',
    requirements: [
      '3+ years experience with React and TypeScript in production',
      'Solid backend foundations in Python (FastAPI or Django) and relational databases (PostgreSQL)',
      'High standards for clean component architecture, typed schema contracts, and automated testing',
    ],
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems Engineer',
    type: 'Full-time',
    location: 'Lahore (Kickstart DHA Phase 8) / Hybrid',
    team: 'Cloud & Infrastructure',
    desc: 'Design and optimize high-throughput REST APIs, asynchronous task workers with Celery & Redis, and database query pooling.',
    requirements: [
      'Deep fluency with Python 3.12, FastAPI, and asynchronous concurrency',
      'Strong relational modeling, indexing, and migration discipline with PostgreSQL',
      'Experience with background task queues, webhook idempotency, and Docker containerization',
    ],
  },
  {
    id: 'frontend-ui',
    title: 'Frontend UI / Product Engineer',
    type: 'Full-time',
    location: 'Lahore / Remote Flexible',
    team: 'Design Engineering',
    desc: 'Craft ultra-fast, responsive web interfaces, interactive data telemetry canvas charts, and polished dark luxury user experiences.',
    requirements: [
      'Exceptional eye for design detail, typography rhythm, and micro-interactions',
      'Proficiency with modern React, Tailwind CSS, and headless UI patterns',
      'Commitment to sub-5ms render benchmarks and zero layout shift',
    ],
  },
]

const PERKS = [
  {
    icon: <Terminal className="size-5 text-[#A78BFA]" />,
    title: 'Autonomous Engineering',
    desc: 'Direct architectural ownership without layers of non-technical middlemen or unnecessary meetings.',
  },
  {
    icon: <Code className="size-5 text-[#38BDF8]" />,
    title: 'Modern Production Stack',
    desc: 'React 19, TypeScript, Python 3.12, FastAPI, PostgreSQL, and Docker. Zero legacy technical debt.',
  },
  {
    icon: <MapPin className="size-5 text-[#10B981]" />,
    title: 'Kickstart DHA Phase 8',
    desc: 'Modern collaborative workspace in Lahore equipped with ergonomic setups and high-speed fiber internet.',
  },
  {
    icon: <Sparkles className="size-5 text-[#FBBF24]" />,
    title: 'Competitive Compensation',
    desc: 'Above-market base pay, performance bonuses, and transparent career advancement.',
  },
]

export function Careers() {
  useSeo({
    title: 'Careers | ArixPro Software Engineering Studio',
    description:
      'Join our engineering studio in Lahore. We are hiring senior engineers to build resilient web applications, high-concurrency APIs, and SaaS systems.',
  })

  return (
    <div className="w-full text-white selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* 1. Hero Header */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#794BE8]/15 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] font-mono text-[#A78BFA] mb-6">
            <Briefcase className="size-3.5" />
            <span>Join Our Engineering Team</span>
          </div>

          <h1 className="font-sans text-[36px] sm:text-[50px] lg:text-[60px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Build High-Impact Systems With Us
          </h1>

          <p className="mt-6 font-sans text-[17px] sm:text-[19px] leading-[1.65] text-[#C9C2E0]/85 max-w-2xl mx-auto">
            We are an independent software studio based at Kickstart, DHA Phase 8, Lahore. We look for autonomous engineers who take pride in writing clean, well-tested code and shipping production systems.
          </p>
        </div>
      </section>

      {/* 2. Engineering Culture & Values */}
      <section className="py-16 sm:py-20 bg-[#0A0514]/40">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A78BFA]">
              Culture &amp; Philosophy
            </span>
            <h2 className="mt-2 font-sans text-[28px] sm:text-[34px] font-bold text-white tracking-tight">
              Why Engineers Choose ArixPro
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0C061A]/80 flex flex-col justify-between"
              >
                <div>
                  <div className="size-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                    {perk.icon}
                  </div>
                  <h3 className="font-sans text-[18px] font-bold text-white">{perk.title}</h3>
                  <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#C9C2E0]/70">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Roles */}
      <section className="py-18 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A78BFA]">
                Available Positions
              </span>
              <h2 className="mt-2 font-sans text-[28px] sm:text-[36px] font-bold text-white tracking-tight">
                Current Openings
              </h2>
            </div>
            <span className="font-mono text-[13px] text-[#8378A6]">
              {ROLES.length} open technical roles
            </span>
          </div>

          <div className="space-y-6">
            {ROLES.map((role) => (
              <article
                key={role.id}
                className="rounded-2xl border border-white/[0.08] bg-[#0E061E]/80 p-6 sm:p-8 hover:border-[#8B5CF6]/40 transition-all shadow-[0_12px_40px_-15px_rgba(0,0,0,0.7)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C084FC]">
                        {role.team}
                      </span>
                      <span className="font-mono text-[11px] text-[#8378A6] flex items-center gap-1">
                        <Clock className="size-3" />
                        {role.type}
                      </span>
                      <span className="font-mono text-[11px] text-[#8378A6] flex items-center gap-1">
                        <MapPin className="size-3" />
                        {role.location}
                      </span>
                    </div>

                    <h3 className="font-sans text-[22px] sm:text-[26px] font-bold text-white tracking-tight">
                      {role.title}
                    </h3>
                  </div>

                  <a
                    href={`mailto:careers@arixpro.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                    className="btn-primary text-[14px] h-[44px] px-6 shrink-0 self-start lg:self-auto"
                  >
                    <span>Apply for Role</span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>

                <div className="mt-6">
                  <p className="font-sans text-[15px] leading-relaxed text-[#C9C2E0]/85">
                    {role.desc}
                  </p>

                  <div className="mt-5 space-y-2">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#A78BFA] mb-2">
                      What We Look For:
                    </span>
                    {role.requirements.map((req) => (
                      <div key={req} className="flex items-start gap-2.5 text-[14px] text-[#C9C2E0]/80">
                        <CheckCircle2 className="size-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. General Application Callout */}
      <section className="py-16 sm:py-20 bg-[#0A0514]/40 text-center">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto rounded-3xl border border-white/[0.1] bg-[#120824]/80 p-8 sm:p-12">
            <h2 className="font-sans text-[24px] sm:text-[30px] font-bold text-white tracking-tight">
              Don’t see your exact role?
            </h2>
            <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#C9C2E0]/80">
              We always make room for exceptional engineers. Send your GitHub, portfolio, or resume directly to our engineering team.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:careers@arixpro.com?subject=General%20Engineering%20Inquiry"
                className="btn-primary text-[15px] h-[48px] px-7"
              >
                <span>Email careers@arixpro.com</span>
                <ArrowUpRight className="size-4" />
              </a>
              <Link to="/contact" className="btn-secondary text-[15px] h-[48px] px-7">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
