import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import {
  ArrowUpRight,
  Check,
  Clock,
  Mail,
  MapPin,
} from 'lucide-react'

interface Role {
  id: string
  title: string
  type: string
  location: string
  team: string
  summary: string
  responsibilities: string[]
  requirements: string[]
  stack: string[]
}

const TECH_ICONS: Record<string, string> = {
  React: '/icons/react.svg',
  TypeScript: '/icons/typescript.svg',
  JavaScript: '/icons/javascript.svg',
  Python: '/icons/python.svg',
  FastAPI: '/icons/fastapi.svg',
  Django: '/icons/django.svg',
  PostgreSQL: '/icons/postgresql.svg',
  Redis: '/icons/redis.svg',
  Docker: '/icons/docker.svg',
  Linux: '/icons/linux.svg',
  Git: '/icons/git.svg',
  'GitHub Actions': '/icons/githubactions.svg',
  Figma: '/icons/figma.svg',
  'Tailwind CSS': '/icons/css.svg',
}

const ROLES: Role[] = [
  {
    id: 'fullstack-engineer',
    title: 'Full-Stack Engineer',
    type: 'Full-time',
    location: 'Lahore (Kickstart DHA Phase 8) / Hybrid',
    team: 'Product Engineering',
    summary:
      'Own product features end-to-end: from designing PostgreSQL schemas and writing type-safe FastAPI endpoints to building interactive, responsive React interfaces.',
    responsibilities: [
      'Build vertical product features across the stack with strict type contracts between backend schemas and frontend TypeScript.',
      'Design relational schemas, write Alembic migrations, and optimize PostgreSQL query plans.',
      'Develop responsive client dashboards in React with clean component architecture and optimistic mutations.',
      'Review pull requests and ship tested code via automated GitHub Actions CI/CD pipelines.',
    ],
    requirements: [
      'Production experience building and deploying web applications with React and TypeScript.',
      'Solid backend foundations in Python (FastAPI or Django) and relational databases (PostgreSQL).',
      'Strong grasp of SQL indexing, transaction boundaries, and RESTful API design.',
      'Care for clean UI craft: sub-second page loads, accessible markup, and zero layout shift.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems Engineer',
    type: 'Full-time',
    location: 'Lahore (Kickstart DHA Phase 8) / Hybrid',
    team: 'Core Systems & Infrastructure',
    summary:
      'Design high-throughput REST APIs, asynchronous task workers, webhook processing pipelines, and resilient database architectures.',
    responsibilities: [
      'Build and maintain asynchronous Python services using FastAPI, asyncio, and Uvicorn under heavy concurrency.',
      'Architect background task processing pipelines with Redis, ensuring idempotent task execution and retry safety.',
      'Tune PostgreSQL performance: indexing strategies, query execution plans, and connection pool sizing.',
      'Maintain reproducible Docker environments for local development and production deployments.',
    ],
    requirements: [
      'Production experience with Python backend systems and relational databases.',
      'Strong understanding of concurrency, event loops, and asynchronous I/O in Python.',
      'Hands-on experience debugging database locks, slow queries, and cache invalidation strategies.',
      'Familiarity with containerization (Docker, Docker Compose) and Linux environments.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Linux', 'GitHub Actions'],
  },
  {
    id: 'frontend-ui',
    title: 'Frontend UI / Product Engineer',
    type: 'Full-time',
    location: 'Lahore / Remote Flexible',
    team: 'Design Systems & Web Platform',
    summary:
      'Craft fast, polished web interfaces, data telemetry tables, and reusable component architectures with obsessive attention to craft.',
    responsibilities: [
      'Develop pixel-accurate, keyboard-accessible web interfaces using modern React, TypeScript, and Tailwind CSS.',
      'Build complex client workflows: virtualized data grids, multi-step state machines, and real-time telemetry charts.',
      'Profile and optimize runtime frontend performance: minimize bundle sizes and achieve fluid 60fps interactions.',
      'Translate design wireframes into intuitive user flows with robust error boundaries and loading states.',
    ],
    requirements: [
      'Deep fluency with modern React, TypeScript, and semantic HTML/CSS.',
      'High design bar: you notice when padding is off by 2px, font rhythm is broken, or a transition feels sluggish.',
      'Experience with state management, optimistic mutation patterns, and headless UI primitives.',
      'Pride in code cleanliness: typed component props, modular file structure, and zero shortcuts.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Docker'],
  },
]

const HIRING_STEPS = [
  {
    step: '01',
    title: '30-Min Technical Conversation',
    duration: '30 mins',
    desc: 'A direct 1-on-1 with an engineer on our team. We talk about systems you’ve built, technical trade-offs you care about, and what kind of problems you enjoy solving.',
  },
  {
    step: '02',
    title: '45-Min Code Walkthrough',
    duration: '45 mins',
    desc: 'Walk us through code you’ve written that you are proud of, or we discuss an architecture scenario together. Zero whiteboard trick questions, zero inverting binary trees.',
  },
  {
    step: '03',
    title: 'Offer & Terms',
    duration: 'Within 48 hours',
    desc: 'Fast decisions. Transparent compensation, hardware allowance, clear start date, and a planned roadmap for your first shipped project.',
  },
]

export function Careers() {
  useSeo({
    title: 'Engineering Careers · ArixPro Software Studio',
    description:
      'Engineering roles at ArixPro. We build clean, high-throughput web applications with React, TypeScript, FastAPI, and PostgreSQL. Direct engineering ownership.',
    path: '/careers',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Clean, Streamlined Hero */}
      <section className="pt-14 pb-12 sm:pt-16 sm:pb-14 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-4">
              <span className="size-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="font-mono text-[11px] font-semibold text-slate-700">
                Engineering at ArixPro · Open Roles
              </span>
            </div>

            <h1 className="font-sans text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-slate-950 tracking-tight leading-[1.18]">
              Written by engineers. Reviewed by engineers.
            </h1>

            <p className="mt-3 font-sans text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              We run an independent software engineering studio in Lahore. We don’t employ recruiters or non-technical project managers. If you apply here, your code and background are reviewed directly by the engineers who ship production software every day.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Open Roles with Tech Stack Image Icons */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
                Open Roles
              </span>
              <h2 className="mt-1.5 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
                Current Technical Openings
              </h2>
              <p className="mt-1 text-[14px] text-slate-600">
                Detailed expectations written by the team you’ll build with.
              </p>
            </div>

            <span className="font-mono text-[11.5px] text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md shrink-0 self-start sm:self-auto">
              {ROLES.length} active positions
            </span>
          </div>

          <div className="space-y-8">
            {ROLES.map((role) => (
              <article
                key={role.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 hover:border-slate-300 transition-all shadow-xs"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-md bg-purple-50 border border-purple-200 text-[#6336C5] font-semibold">
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

                    <h3 className="font-sans text-[20px] sm:text-[22px] font-bold text-slate-950 tracking-tight">
                      {role.title}
                    </h3>
                    <p className="font-sans text-[14px] text-slate-600 max-w-3xl leading-relaxed">
                      {role.summary}
                    </p>
                  </div>

                  <a
                    href={`mailto:careers@arixpro.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0A0A0A] font-sans text-[13px] font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors shrink-0 self-start lg:self-auto"
                  >
                    <span>Apply for this role</span>
                    <ArrowUpRight className="size-3.5 text-white/80" />
                  </a>
                </div>

                {/* Role Details */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-7">
                  {/* Responsibilities */}
                  <div className="space-y-2.5">
                    <h4 className="font-sans text-[13.5px] font-bold text-slate-900">
                      What you’ll build and own:
                    </h4>
                    <ul className="space-y-2 text-[13px] text-slate-600 leading-relaxed">
                      {role.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="size-3.5 text-[#059669] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2.5">
                    <h4 className="font-sans text-[13.5px] font-bold text-slate-900">
                      What we look for:
                    </h4>
                    <ul className="space-y-2 text-[13px] text-slate-600 leading-relaxed">
                      {role.requirements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="size-3.5 text-[#6336C5] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack with Image Icons */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold mr-1">
                    Primary Stack:
                  </span>
                  {role.stack.map((tech) => {
                    const icon =
                      TECH_ICONS[tech] ||
                      `/icons/${tech.toLowerCase().replace(/\s+/g, '')}.svg`
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700 font-medium"
                      >
                        <img
                          src={icon}
                          alt={tech}
                          className="size-3.5 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            ;(e.target as HTMLElement).style.display = 'none'
                          }}
                        />
                        <span>{tech}</span>
                      </span>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Simple 3-Step Hiring Roadmap */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Hiring Roadmap
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              A practical, respectful interview process.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              No whiteboard riddles, no inverting binary trees, and no unpaid multi-day homework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HIRING_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2.5"
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

      {/* 4. Direct Application Callout */}
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
                href="mailto:careers@arixpro.com?subject=Engineering%20Application&body=Hi%20ArixPro%20team,%0A%0AHere%20is%20my%20GitHub/portfolio:%20%0A%0AA%20recent%20technical%20project%20or%20bug%20I%20solved:%20%0A%0AAttached%20resume/details:%20"
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
