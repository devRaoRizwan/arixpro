import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Laptop,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react'

interface TechTool {
  name: string
  icon: string
  role: string
}

interface RoleData {
  id: string
  title: string
  team: string
  type: string
  location: string
  summary: string
  whatYouShip: string[]
  whatWeLookFor: string[]
  tools: TechTool[]
}

const ROLES: RoleData[] = [
  {
    id: 'fullstack-engineer',
    title: 'Full-Stack Engineer',
    team: 'Product Engineering',
    type: 'Full-time',
    location: 'Lahore (Kickstart DHA Phase 8) / Hybrid',
    summary:
      'Own vertical product features from schema design to responsive React interfaces. You build clean APIs, write typed database contracts, and ship directly to staging and production.',
    whatYouShip: [
      'Design relational PostgreSQL schemas and write clean Alembic migrations.',
      'Build type-safe backend endpoints in Python (FastAPI) with Pydantic schemas.',
      'Develop fast, responsive web applications in React 19 and TypeScript.',
      'Ship automated test suites via GitHub Actions CI/CD on every PR.',
    ],
    whatWeLookFor: [
      'Production experience with React, TypeScript, and modern state patterns.',
      'Solid foundations in Python (FastAPI/Django) and relational databases.',
      'Care for clean UI details: sub-second page loads and zero layout shift.',
    ],
    tools: [
      { name: 'React', icon: '/icons/react.svg', role: 'UI Components & Hooks' },
      { name: 'TypeScript', icon: '/icons/typescript.svg', role: 'Strict Type Contracts' },
      { name: 'Python', icon: '/icons/python.svg', role: 'Backend Services' },
      { name: 'FastAPI', icon: '/icons/fastapi.svg', role: 'Async REST Endpoints' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', role: 'Primary Datastore' },
      { name: 'Docker', icon: '/icons/docker.svg', role: 'Local & Production Containers' },
    ],
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems Engineer',
    team: 'Core Systems & Infrastructure',
    type: 'Full-time',
    location: 'Lahore (Kickstart DHA Phase 8) / Hybrid',
    summary:
      'Design high-throughput APIs, background task workers, webhook pipelines, and resilient database architectures that handle burst concurrency.',
    whatYouShip: [
      'Build asynchronous Python microservices using FastAPI, asyncio, and Uvicorn.',
      'Architect background queues with Redis and Celery for idempotent job execution.',
      'Tune PostgreSQL performance: indexing strategies, query plans, and connection pools.',
      'Maintain reproducible Docker environments and automated deploy pipelines.',
    ],
    whatWeLookFor: [
      'Experience building production Python backend services and APIs.',
      'Solid grasp of asynchronous I/O, event loops, and worker pools.',
      'Familiarity with containerization (Docker) and Linux environments.',
    ],
    tools: [
      { name: 'Python', icon: '/icons/python.svg', role: 'Core Runtime & Asyncio' },
      { name: 'FastAPI', icon: '/icons/fastapi.svg', role: 'High-Concurrency APIs' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', role: 'Relational Modeling' },
      { name: 'Redis', icon: '/icons/redis.svg', role: 'Task Queues & Caching' },
      { name: 'Docker', icon: '/icons/docker.svg', role: 'Container Orchestration' },
      { name: 'Linux', icon: '/icons/linux.svg', role: 'Production Server Host' },
    ],
  },
  {
    id: 'frontend-ui',
    title: 'Frontend UI / Product Engineer',
    team: 'Design Systems & Web Platform',
    type: 'Full-time',
    location: 'Lahore / Remote Flexible',
    summary:
      'Craft fast, polished web interfaces, interactive data telemetry charts, and reusable component architectures with obsessive attention to design craft.',
    whatYouShip: [
      'Build pixel-accurate, keyboard-accessible web interfaces with React and Tailwind.',
      'Develop complex client workflows: data tables, state machines, and real-time charts.',
      'Optimize runtime performance: minimize bundle sizes and achieve 60fps interactions.',
      'Maintain an internal component library with accessible tokens and layout patterns.',
    ],
    whatWeLookFor: [
      'Fluency with modern React, TypeScript, and semantic HTML/CSS.',
      'High visual bar for spacing rhythm, typography, and micro-interactions.',
      'Experience with optimistic mutation patterns and headless UI primitives.',
    ],
    tools: [
      { name: 'React', icon: '/icons/react.svg', role: 'Modern Component Systems' },
      { name: 'TypeScript', icon: '/icons/typescript.svg', role: 'Generic Types & Hooks' },
      { name: 'Tailwind CSS', icon: '/icons/css.svg', role: 'Design Tokens & Styling' },
      { name: 'Figma', icon: '/icons/figma.svg', role: 'Design System Alignment' },
      { name: 'GitHub', icon: '/icons/github.svg', role: 'PR Reviews & CI Checks' },
      { name: 'Docker', icon: '/icons/docker.svg', role: 'Local Development Parity' },
    ],
  },
]

const STUDIO_GEAR = [
  {
    name: 'Hardware & Rig',
    icon: Laptop,
    badge: 'Hardware',
    detail: 'Apple Silicon MacBook or dedicated Linux rig + dual 4K displays at Kickstart DHA Phase 8.',
  },
  {
    name: 'AI Tooling Suite',
    icon: Sparkles,
    badge: 'Tooling',
    detail: 'Studio subscriptions for Claude 3.5 Sonnet, GitHub Copilot, and modern AI coding environments.',
  },
  {
    name: 'Async Engineering',
    icon: Terminal,
    badge: 'Workflow',
    detail: 'Architecture debated in GitHub PRs and markdown RFCs. No 2-hour daily meetings or Jira story-point poker.',
  },
  {
    name: 'Kickstart Workspace',
    icon: MapPin,
    badge: 'Location',
    detail: 'Modern private studio desk in DHA Phase 8 Lahore with high-speed fiber internet and hybrid flexibility.',
  },
]

const HIRING_STEPS = [
  {
    step: '01',
    title: 'Intro Conversation',
    time: '30 mins',
    desc: 'Direct 1-on-1 with an engineer on our team. We talk about past systems, architectural trade-offs, and what you enjoy building.',
  },
  {
    step: '02',
    title: 'Code Deep-Dive',
    time: '45 mins',
    desc: 'You walk us through code you’ve written that you are proud of. Zero whiteboard riddles, zero inverting binary trees.',
  },
  {
    step: '03',
    title: 'Offer & Start',
    time: 'Within 48h',
    desc: 'Fast, transparent compensation offer, hardware package, and a clear roadmap for your first shipped project.',
  },
]

export function Careers() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0)
  const activeRole = ROLES[selectedRoleIndex]

  useSeo({
    title: 'Engineering Careers · ArixPro Software Studio',
    description:
      'Open engineering roles at ArixPro. We build clean, high-throughput web applications with React, TypeScript, FastAPI, and PostgreSQL.',
    path: '/careers',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Studio Engineering Hero */}
      <section className="pt-14 pb-12 sm:pt-16 sm:pb-14 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-3.5">
                <span className="size-2 rounded-full bg-[#059669] animate-pulse" />
                <span className="font-mono text-[11px] font-semibold text-slate-700">
                  Engineering Studio · Open Positions
                </span>
              </div>

              <h1 className="font-sans text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-slate-950 tracking-tight leading-[1.15]">
                We’re hiring software engineers.
              </h1>

              <p className="mt-3 font-sans text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-xl">
                ArixPro is an independent software studio in Lahore. We build web platforms, APIs, and custom software systems with direct technical ownership and zero non-technical middlemen.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-[11.5px] shrink-0">
              <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Open Roles</span>
                <span className="font-bold text-slate-900">{ROLES.length} Active Positions</span>
              </div>
              <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Location</span>
                <span className="font-bold text-slate-900">Lahore / Hybrid</span>
              </div>
              <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Decision Speed</span>
                <span className="font-bold text-[#059669]">48-Hour SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Role Explorer (Master-Detail) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="mb-8">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Role Explorer
            </span>
            <h2 className="mt-1 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              Select an open role to inspect requirements &amp; tooling.
            </h2>
          </div>

          {/* Master-Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Role Navigation Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {ROLES.map((role, idx) => {
                const isSelected = selectedRoleIndex === idx
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRoleIndex(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all relative ${
                      isSelected
                        ? 'bg-purple-50/40 border-[#6336C5] shadow-xs ring-1 ring-[#6336C5]/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[10.5px] px-2 py-0.5 rounded-md bg-purple-50 border border-purple-200 text-[#6336C5] font-semibold">
                        {role.team}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        {role.type}
                      </span>
                    </div>

                    <h3 className="font-sans text-[17px] sm:text-[18px] font-bold text-slate-950">
                      {role.title}
                    </h3>

                    <p className="mt-1 font-sans text-[12.5px] text-slate-500 line-clamp-2 leading-relaxed">
                      {role.summary}
                    </p>

                    {/* SVG Icon Row Preview */}
                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center gap-2">
                      {role.tools.slice(0, 5).map((tool) => (
                        <div
                          key={tool.name}
                          className="size-6 rounded-md bg-white border border-slate-200/80 p-1 flex items-center justify-center shadow-2xs"
                          title={tool.name}
                        >
                          <img src={tool.icon} alt={tool.name} className="size-full object-contain" />
                        </div>
                      ))}
                      {role.tools.length > 5 && (
                        <span className="font-mono text-[10px] text-slate-400 ml-1">
                          +{role.tools.length - 5}
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right: Detailed Role Blueprint Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6"
                >
                  {/* Top Bar with Apply Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10.5px] px-2 py-0.5 rounded bg-purple-50 text-[#6336C5] font-semibold border border-purple-200/60">
                          {activeRole.team}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1">
                          <MapPin className="size-3" />
                          {activeRole.location}
                        </span>
                      </div>
                      <h3 className="font-sans text-[22px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
                        {activeRole.title}
                      </h3>
                    </div>

                    <a
                      href={`mailto:careers@arixpro.com?subject=Application:%20${encodeURIComponent(activeRole.title)}&body=Hi%20ArixPro%20team,%0A%0AApplying%20for:%20${encodeURIComponent(activeRole.title)}%0AGitHub/Portfolio:%20%0ARecent%20project%20or%20production%20system:%20`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0A0A] font-sans text-[13px] font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors shrink-0 self-start sm:self-auto"
                    >
                      <Mail className="size-3.5" />
                      <span>Apply for Role</span>
                      <ArrowUpRight className="size-3.5 text-white/70" />
                    </a>
                  </div>

                  <p className="font-sans text-[14px] text-slate-600 leading-relaxed">
                    {activeRole.summary}
                  </p>

                  {/* Visual Tooling Grid */}
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-3">
                      Production Stack &amp; Tooling
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {activeRole.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3"
                        >
                          <div className="size-8 rounded-lg bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                            <img src={tool.icon} alt={tool.name} className="size-full object-contain" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-sans text-[12.5px] font-bold text-slate-900 truncate">
                              {tool.name}
                            </p>
                            <p className="font-sans text-[11px] text-slate-500 truncate">
                              {tool.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Two-Column Expectations */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <h4 className="font-sans text-[13px] font-bold text-slate-900">
                        What you’ll ship:
                      </h4>
                      <ul className="space-y-2 text-[12.5px] text-slate-600">
                        {activeRole.whatYouShip.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="size-3.5 text-[#059669] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-sans text-[13px] font-bold text-slate-900">
                        What we look for:
                      </h4>
                      <ul className="space-y-2 text-[12.5px] text-slate-600">
                        {activeRole.whatWeLookFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="size-3.5 text-[#6336C5] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Studio Setup & Engineering Gear */}
      <section className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-xl mb-8">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Studio Standards
            </span>
            <h2 className="mt-1 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              Tools, rig &amp; working environment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STUDIO_GEAR.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.name}
                  className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="size-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#6336C5]">
                      <Icon className="size-4" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-sans text-[14.5px] font-bold text-slate-950">
                    {item.name}
                  </h3>
                  <p className="font-sans text-[12.5px] text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Practical Hiring Roadmap */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-xl mb-8">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Hiring Roadmap
            </span>
            <h2 className="mt-1 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              3 steps. Zero whiteboard puzzles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {HIRING_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#6336C5] bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                    Step {step.step}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    {step.time}
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
      <section className="py-12 sm:py-16 bg-slate-50/40">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-md mx-auto space-y-3">
            <h2 className="font-sans text-[20px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
              Don’t see your exact role?
            </h2>
            <p className="font-sans text-[13.5px] text-slate-600 leading-relaxed">
              We always make room for exceptional engineers. Send your GitHub or portfolio directly to our engineering team.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:careers@arixpro.com?subject=Engineering%20Inquiry&body=Hi%20ArixPro%20team,%0A%0AHere%20is%20my%20GitHub/portfolio:%20%0A%0AA%20recent%20technical%20project%20or%20system%20I%20built:%20"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0A0A0A] font-sans text-[13px] font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors"
              >
                <Mail className="size-3.5" />
                <span>Email careers@arixpro.com</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 font-sans text-[13px] font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 transition-colors"
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
