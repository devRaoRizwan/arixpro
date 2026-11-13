import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import {
  ArrowUpRight,
  Check,
  Clock,
  Code2,
  FileCode2,
  GitPullRequest,
  HelpCircle,
  Mail,
  MapPin,
  Terminal,
  Zap,
} from 'lucide-react'

interface Role {
  id: string
  title: string
  type: string
  location: string
  team: string
  compNote: string
  summary: string
  dayToDay: string[]
  whatWeLookFor: string[]
  stack: string[]
}

const ROLES: Role[] = [
  {
    id: 'fullstack-senior',
    title: 'Senior Full-Stack Engineer',
    type: 'Full-time',
    location: 'Lahore (Kickstart DHA Phase 8) / Hybrid',
    team: 'Product Engineering',
    compNote: 'Senior Tier · Pegged to Market Standards',
    summary:
      'Own vertical features end-to-end: from designing PostgreSQL schemas and writing type-safe FastAPI endpoints to building interactive, zero-latency React interfaces.',
    dayToDay: [
      'Architect full product features across the stack, ensuring strict type-safety between backend Pydantic schemas and frontend TypeScript types.',
      'Build responsive client portals and dashboards in React 19 with clean component boundaries, optimistic mutations, and resilient error states.',
      'Design relational database schemas, write clean Alembic migrations, and optimize PostgreSQL query plans (EXPLAIN ANALYZE) to eliminate N+1 bottlenecks.',
      'Review peer pull requests with attention to edge cases, idempotency, data consistency, and architectural maintainability.',
      'Ship tested code to staging and production via automated GitHub Actions CI/CD pipelines.',
    ],
    whatWeLookFor: [
      '3+ years of production experience building and deploying web applications with React and TypeScript.',
      'Strong backend fundamentals in Python (FastAPI or Django) with deep respect for clean API contracts.',
      'Comfortable writing raw SQL, understanding table indexing, connection pooling, and ACID transaction boundaries.',
      'You care about user experience: sub-second page loads, accessible UI states, and zero layout thrashing.',
      'Strong written communication skills for async PR discussions and architectural documentation.',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Python 3.12', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems Engineer',
    type: 'Full-time',
    location: 'Lahore (Kickstart DHA Phase 8) / Hybrid',
    team: 'Core Systems & Infrastructure',
    compNote: 'Senior Tier · Pegged to Market Standards',
    summary:
      'Design high-throughput REST APIs, asynchronous task workers, webhook processing pipelines, and resilient database architectures.',
    dayToDay: [
      'Build and maintain asynchronous Python services using FastAPI, asyncio, and Uvicorn under heavy concurrency.',
      'Architect robust background task processing pipelines with Redis and Celery/Arq, ensuring idempotent task execution and retry safety.',
      'Tune PostgreSQL performance: index optimization, query execution analysis, and PgBouncer connection pool tuning.',
      'Implement secure webhook ingestion systems with HMAC signature validation and replay attack prevention.',
      'Maintain reproducible Docker environments for local development and streamline GitHub Actions deployment pipelines.',
    ],
    whatWeLookFor: [
      '3+ years of production experience with Python backend systems and relational databases.',
      'Solid understanding of concurrency, event loops, thread pools, and asynchronous programming in Python.',
      'Hands-on experience debugging database locks, slow queries, and cache invalidation strategies.',
      'Discipline around API versioning, backwards compatibility, and structured JSON logging.',
      'Familiarity with containerization (Docker, Docker Compose) and Linux server environments.',
    ],
    stack: ['Python 3.12', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Linux', 'GitHub Actions'],
  },
  {
    id: 'frontend-ui',
    title: 'Frontend UI / Product Engineer',
    type: 'Full-time',
    location: 'Lahore / Remote Flexible',
    team: 'Design Systems & Web Platform',
    compNote: 'Senior Tier · Pegged to Market Standards',
    summary:
      'Craft fast, polished web interfaces, complex data telemetry tables, and reusable component architectures with obsessive attention to craft.',
    dayToDay: [
      'Develop pixel-accurate, keyboard-accessible web interfaces using modern React, TypeScript, and Tailwind CSS.',
      'Build complex client-side workflows: virtualized data grids (TanStack Table), multi-step state machines, and real-time canvas/SVG telemetry charts.',
      'Profile and optimize runtime frontend performance: minimize bundle sizes, eliminate unnecessary re-renders, and achieve 60fps interaction polish.',
      'Build and maintain an internal component library with accessible patterns, fluid spacing tokens, and clean keyboard navigation.',
      'Translate product requirements into elegant user flows without needing wireframes for every minor edge case.',
    ],
    whatWeLookFor: [
      'Deep fluency with modern React, TypeScript, and semantic HTML/CSS.',
      'High design bar: you notice when padding is off by 2px, font-weight hierarchy is broken, or a transition feels sluggish.',
      'Experience with state management libraries, optimistic mutation patterns (TanStack Query), and headless UI primitives.',
      'Track record of building responsive applications that work flawlessly across mobile, tablet, and ultra-wide screens.',
      'Pride in code cleanliness: typed component props, zero `any` shortcuts, and modular file organization.',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'TanStack Query', 'TanStack Table', 'Framer Motion'],
  },
]

const DEV_PRINCIPLES = [
  {
    icon: GitPullRequest,
    title: 'PR Reviews Over Meetings',
    desc: 'We debate architecture in GitHub pull requests and markdown RFCs, not 2-hour synchronous meetings. Your calendar stays open for actual engineering.',
  },
  {
    icon: Terminal,
    title: '15-Minute Local Setup',
    desc: 'Local development mirrors production through Docker Compose. One script seeds test data and boots the entire stack. If onboarding takes half a day, that is a bug we fix.',
  },
  {
    icon: Code2,
    title: 'Direct Code Ownership',
    desc: 'No non-technical layers playing telephone between you and client stakeholders. You participate in architectural decisions, write the code, and review the metrics.',
  },
  {
    icon: Zap,
    title: 'Zero Technical Debt Tolerance',
    desc: 'We deliberately quote fixed milestones so we have the runway to write tests, refactor legacy modules, and ship clean software we are proud to stand behind.',
  },
]

const HIRING_STEPS = [
  {
    step: '01',
    title: '30-Min Technical Conversation',
    desc: 'A direct 1-on-1 with an engineer on our team. We talk about systems you’ve built, technical trade-offs you care about, and what kind of problems you enjoy solving. No HR scripts.',
  },
  {
    step: '02',
    title: '45-Min Code Walkthrough',
    desc: 'You walk us through a piece of code you’ve written that you are proud of, or we look at an open-source architecture scenario together. Zero whiteboard trick questions, zero inverting binary trees.',
  },
  {
    step: '03',
    title: 'Offer & Terms',
    desc: 'We make decisions within 48 hours. Transparent base compensation, hardware allowance, clear start date, and a planned trajectory for your first shipped project.',
  },
]

const FAQS = [
  {
    q: 'Do you assign take-home coding tests?',
    a: 'No. We think multi-day take-home tests take advantage of candidate time. If you have a public GitHub, open-source pull requests, or production apps you’ve built, we review those directly. If not, we walk through code together during the interview.',
  },
  {
    q: 'What hardware and developer tools do you provide?',
    a: 'You get high-spec engineering hardware (Apple Silicon MacBook or dedicated Linux workstation), secondary 4K displays at our Kickstart DHA Phase 8 office, and company-provided subscriptions for AI developer tools (Claude / GitHub Copilot) and testing environments.',
  },
  {
    q: 'What does the day-to-day workflow look like?',
    a: 'We work primarily asynchronous in Slack. Core overlap hours are 11:00 AM to 5:00 PM PKT for code reviews, architectural syncs, and PR merges. The rest of your day is uninterrupted maker time.',
  },
  {
    q: 'Can I work remotely or hybrid?',
    a: 'Yes. Our team has dedicated desks at Kickstart, DHA Phase 8 in Lahore for collaborative sprints and pairing, but we support hybrid schedules for engineers who communicate clearly and deliver reliable code.',
  },
]

export function Careers() {
  useSeo({
    title: 'Engineering Careers · ArixPro Software Studio',
    description:
      'Engineering roles at ArixPro. We build clean, high-throughput web applications with React, TypeScript, FastAPI, and PostgreSQL. Direct engineering ownership and zero HR fluff.',
    path: '/careers',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Developer-Centric Hero */}
      <section className="pt-14 pb-12 sm:pt-16 sm:pb-14 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-4">
              <span className="size-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="font-mono text-[11px] font-semibold text-slate-700">
                Engineering at ArixPro · Hiring Senior Engineers
              </span>
            </div>

            <h1 className="font-sans text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-slate-950 tracking-tight leading-[1.18]">
              Written by engineers. Reviewed by engineers.
            </h1>

            <p className="mt-4 font-sans text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-2xl">
              We run an independent software engineering studio in Lahore. We don’t employ recruiters, non-technical project managers, or scrum masters. If you apply here, your code and background are reviewed directly by the engineers who ship production software every day.
            </p>

            {/* Quick Dev Spec Summary Bar */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <span className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#6336C5]">
                    Production Stack
                  </span>
                  <p className="mt-1 font-sans text-[13px] font-semibold text-slate-900">
                    React 19 · TypeScript · Python · FastAPI · PostgreSQL
                  </p>
                </div>

                <div>
                  <span className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#6336C5]">
                    Engineering Cadence
                  </span>
                  <p className="mt-1 font-sans text-[13px] font-semibold text-slate-900">
                    Async PRs · GitHub CI/CD · Automated testing · Zero Jira theater
                  </p>
                </div>

                <div>
                  <span className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#6336C5]">
                    Studio Workspace
                  </span>
                  <p className="mt-1 font-sans text-[13px] font-semibold text-slate-900">
                    Kickstart, DHA Phase 8, Lahore / Hybrid Flexible
                  </p>
                </div>

                <div>
                  <span className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#6336C5]">
                    Interview Policy
                  </span>
                  <p className="mt-1 font-sans text-[13px] font-semibold text-slate-900">
                    Real code discussion · 48h decisions · Zero leetcode puzzles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Open Positions (Detailed Dev JDs) */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
                Open Roles
              </span>
              <h2 className="mt-1.5 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
                Current Engineering Openings
              </h2>
              <p className="mt-1.5 text-[14px] text-slate-600">
                Detailed expectations written by the team you’ll be building with.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[11.5px] text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md shrink-0">
                {ROLES.length} active positions
              </span>
            </div>
          </div>

          <div className="space-y-8">
            {ROLES.map((role) => (
              <article
                key={role.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 hover:border-slate-300 transition-all shadow-xs"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-purple-50 border border-purple-200 text-[#6336C5] font-semibold">
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
                      <span className="font-mono text-[11px] text-[#059669] font-medium bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                        {role.compNote}
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

                {/* Body Details */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                  {/* Day to Day */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-sans text-[13.5px] font-bold">
                      <FileCode2 className="size-4 text-[#6336C5]" />
                      <h4>What you’ll actually build and do:</h4>
                    </div>
                    <ul className="space-y-2 text-[13px] text-slate-600 leading-relaxed">
                      {role.dayToDay.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="size-3.5 text-[#059669] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements / What we look for */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-sans text-[13.5px] font-bold">
                      <Terminal className="size-4 text-[#6336C5]" />
                      <h4>What we look for in your code:</h4>
                    </div>
                    <ul className="space-y-2 text-[13px] text-slate-600 leading-relaxed">
                      {role.whatWeLookFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="size-3.5 text-[#6336C5] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold mr-2">
                    Primary Stack:
                  </span>
                  {role.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Engineering Ground Rules */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Engineering Norms
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              How we write and ship code.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              The daily engineering rules that keep our codebase clean and our team productive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEV_PRINCIPLES.map((principle) => {
              const Icon = principle.icon
              return (
                <div
                  key={principle.title}
                  className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2.5"
                >
                  <div className="size-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                    <Icon className="size-4 text-[#6336C5]" />
                  </div>
                  <h3 className="font-sans text-[15px] font-bold text-slate-950">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-[12.5px] text-slate-600 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Practical Hiring Roadmap */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Hiring Roadmap
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              A respectful, zero-leetcode interview process.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              We know interviewing can be frustrating. We don’t ask algorithmic riddles or assign unpaid multi-day homework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HIRING_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#6336C5] bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                    Step {step.step}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    Engineering Team
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

      {/* 5. Engineering FAQ */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Developer FAQ
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              Questions engineers ask before applying.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              Honest answers about tooling, compensation, and how we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2"
              >
                <h3 className="font-sans text-[14.5px] font-bold text-slate-950 flex items-start gap-2">
                  <HelpCircle className="size-4 text-[#6336C5] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="font-sans text-[13px] text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Direct Application / How to Apply */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:p-10 text-center space-y-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Direct Engineer Inbox
            </span>
            <h2 className="font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              Ready to talk code?
            </h2>
            <p className="font-sans text-[14px] text-slate-600 leading-relaxed max-w-xl mx-auto">
              Send an email to <span className="font-mono text-[13px] text-slate-900 font-semibold">careers@arixpro.com</span>. Please include your GitHub/GitLab, a link to a project or PR you’re proud of, and a quick note about a complex bug you solved.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:careers@arixpro.com?subject=Engineering%20Application&body=Hi%20ArixPro%20team,%0A%0AHere%20is%20my%20GitHub/portfolio:%20%0A%0AA%20recent%20technical%20project%20or%20bug%20I%20solved:%20%0A%0AAttached%20resume/details:%20"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0A0A0A] font-sans text-[13px] font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors"
              >
                <Mail className="size-3.5" />
                <span>Email careers@arixpro.com</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 font-sans text-[13px] font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <span>General Studio Contact</span>
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