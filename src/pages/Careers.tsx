import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import {
  ArrowUpRight,
  Check,
  Clock,
  Code2,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'

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
      '3+ years production experience with React and TypeScript',
      'Solid backend foundations in Python (FastAPI or Django) and PostgreSQL',
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
    desc: 'Craft fast, responsive web interfaces, interactive data telemetry charts, and polished, accessible user experiences.',
    requirements: [
      'Exceptional eye for design detail, typography rhythm, and micro-interactions',
      'Proficiency with modern React, Tailwind CSS, and headless UI patterns',
      'Commitment to sub-second page loads, accessible markup, and zero layout shift',
    ],
  },
]

const PILLARS = [
  {
    icon: Terminal,
    title: 'Autonomous Engineering',
    desc: 'Direct architectural ownership. You decide how features are built without layers of non-technical middlemen.',
  },
  {
    icon: Code2,
    title: 'Modern Production Stack',
    desc: 'React 19, TypeScript, Python 3.12, FastAPI, PostgreSQL, and Docker. Zero legacy spaghetti code.',
  },
  {
    icon: Zap,
    title: 'Deep Maker Time',
    desc: 'We communicate asynchronously in Slack and document decisions. Minimal meetings so you can actually code.',
  },
  {
    icon: Sparkles,
    title: 'Competitive Compensation',
    desc: 'Above-market base salary, performance incentives, and clear career advancement based on shipped work.',
  },
]

const HIRING_STEPS = [
  {
    step: '01',
    title: 'Intro Conversation',
    duration: '30 mins',
    desc: 'A relaxed conversation about your background, what you enjoy building, and how we operate as a studio.',
  },
  {
    step: '02',
    title: 'Practical Code Walkthrough',
    duration: '45 mins',
    desc: 'A realistic review of code you’ve written or a practical architecture problem. Zero whiteboard leetcode puzzles.',
  },
  {
    step: '03',
    title: 'Offer & Onboarding',
    duration: 'Within 48 hours',
    desc: 'Transparent compensation details, workspace setup, and a clear plan for your first shipped project.',
  },
]

export function Careers() {
  useSeo({
    title: 'Careers · ArixPro Software Studio',
    description:
      'Join our software studio in Lahore. We are hiring senior engineers to build resilient web applications, high-throughput APIs, and custom SaaS products.',
    path: '/careers',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Hero Header */}
      <section className="pt-14 pb-12 sm:pt-16 sm:pb-14 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Engineering Careers
            </span>
            <h1 className="font-sans text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              Build software with a small, focused team.
            </h1>
            <p className="mt-3 font-sans text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              ArixPro is an independent software studio based at Kickstart, DHA Phase 8, Lahore. We look for thoughtful engineers who take pride in writing clean, well-tested code and shipping production systems.
            </p>
          </div>

          {/* 4 Studio Value Badges */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[10px] font-bold text-[#6336C5] block">LEADERSHIP</span>
              <p className="font-sans text-[13.5px] font-bold text-slate-950">Engineers Direct</p>
              <p className="font-sans text-[11.5px] text-slate-500">Zero non-technical project managers</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[10px] font-bold text-[#6336C5] block">TOOLING</span>
              <p className="font-sans text-[13.5px] font-bold text-slate-950">Modern Stack</p>
              <p className="font-sans text-[11.5px] text-slate-500">React 19, TypeScript, FastAPI, PostgreSQL</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[10px] font-bold text-[#6336C5] block">CULTURE</span>
              <p className="font-sans text-[13.5px] font-bold text-slate-950">Deep Maker Time</p>
              <p className="font-sans text-[11.5px] text-slate-500">Async-first with minimal meetings</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[10px] font-bold text-[#6336C5] block">LOCATION</span>
              <p className="font-sans text-[13.5px] font-bold text-slate-950">Lahore / Hybrid</p>
              <p className="font-sans text-[11.5px] text-slate-500">Kickstart, DHA Phase 8 / Flexible</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Studio Culture & Values */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Studio Standards
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
              Why engineers choose ArixPro.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              We built the working environment we always wanted as engineers: high autonomy, zero politics, and real craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((perk) => {
              const Icon = perk.icon
              return (
                <div
                  key={perk.title}
                  className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2.5"
                >
                  <div className="size-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-1">
                    <Icon className="size-4 text-[#6336C5]" />
                  </div>
                  <h3 className="font-sans text-[15px] font-bold text-slate-950">
                    {perk.title}
                  </h3>
                  <p className="font-sans text-[12.5px] text-slate-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
                Open Positions
              </span>
              <h2 className="mt-1.5 font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
                Current Technical Openings
              </h2>
              <p className="mt-1.5 text-[14px] text-slate-600">
                Join our engineering team in Lahore or hybrid. Direct impact from day one.
              </p>
            </div>
            <span className="font-mono text-[12px] text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-md shrink-0">
              {ROLES.length} active roles
            </span>
          </div>

          <div className="space-y-6">
            {ROLES.map((role) => (
              <article
                key={role.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-slate-300 transition-all shadow-xs"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-md bg-purple-50 border border-purple-200/60 text-[#6336C5] font-semibold">
                        {role.team}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="size-3" />
                        {role.type}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="size-3" />
                        {role.location}
                      </span>
                    </div>

                    <h3 className="font-sans text-[18px] sm:text-[20px] font-bold text-slate-950 tracking-tight">
                      {role.title}
                    </h3>
                  </div>

                  <a
                    href={`mailto:careers@arixpro.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0A0A0A] font-sans text-[13px] font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors shrink-0 self-start lg:self-auto"
                  >
                    <span>Apply for Role</span>
                    <ArrowUpRight className="size-3.5 text-white/80" />
                  </a>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="font-sans text-[13.5px] leading-relaxed text-slate-600">
                    {role.desc}
                  </p>

                  <div className="pt-1 space-y-2">
                    <span className="block font-mono text-[10.5px] uppercase tracking-wider text-slate-400 font-semibold">
                      Key Qualifications:
                    </span>
                    <ul className="space-y-1.5 text-[13px] text-slate-700">
                      {role.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2.5">
                          <Check className="size-3.5 text-[#059669] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Transparent Hiring Process */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Interview Roadmap
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
              Our hiring process.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              Fast, practical, and transparent. We respect your time and never assign multi-day free work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HIRING_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#6336C5] bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                    Step {step.step}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-sans text-[15px] font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. General Application Callout */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
              Don’t see your exact role?
            </h2>
            <p className="font-sans text-[14px] text-slate-600 leading-relaxed">
              We always make room for exceptional engineers. Send your GitHub, portfolio, or a brief note directly to our engineering team.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:careers@arixpro.com?subject=General%20Engineering%20Inquiry"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0A0A0A] font-sans text-[13px] font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors"
              >
                <Mail className="size-3.5" />
                <span>Email careers@arixpro.com</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 font-sans text-[13px] font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <span>General Contact</span>
                <ArrowUpRight className="size-3.5 text-slate-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
