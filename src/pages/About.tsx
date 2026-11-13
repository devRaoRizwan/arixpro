import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { TechIcons } from '../components/TechIcons'
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Layers,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export function About() {
  useSeo({
    title: 'About ArixPro · Engineering Studio & Backstory',
    description:
      'The story behind ArixPro: an independent software studio founded to eliminate agency bloat, building resilient web applications and APIs with direct engineer collaboration.',
    path: '/about',
  })

  const principles = [
    {
      num: '01',
      title: 'Determinism Over Guesswork',
      desc: 'We build with strict relational schemas, typed boundary interfaces, and reproducible migrations. Runtimes must fail loudly during automated tests rather than silently in production.',
      deliverables: ['PostgreSQL strict relational schemas', 'Zod validation at all API boundaries', 'Automated migration rollbacks'],
    },
    {
      num: '02',
      title: 'Direct Engineer Collaboration',
      desc: 'You work directly with the senior engineer writing your software. No account managers or sales intermediaries playing telephone with your product requirements.',
      deliverables: ['Private async communication channel', 'Weekly clickable staging builds on Day 7', 'Direct code reviews and video demos'],
    },
    {
      num: '03',
      title: 'Zero Premature Abstraction',
      desc: 'We prioritize clarity over cleverness. Systems are structured so any competent developer can audit, maintain, and extend the codebase in minutes without vendor lock-in.',
      deliverables: ['Clean, modular directory structures', 'Standard open-source libraries (React, Node, Python)', '100% full Git repository handover'],
    },
    {
      num: '04',
      title: 'Telemetry & Production Hardening',
      desc: 'Every production cutover is instrumented with automated health checks, security headers, SSL certificates, structured error logging, and sub-800ms mobile speed budgets.',
      deliverables: ['Automated CI/CD deployment pipelines', 'Stripe webhook verification & idempotency', '30-day proactive post-launch bug warranty'],
    },
  ]

  const stackPillars = [
    {
      category: 'Frontend & Interfaces',
      icon: Layers,
      technologies: 'React 19 · TypeScript · Tailwind CSS · Vite',
      desc: 'Single-page web apps and interfaces with sub-second page loads and optimistic UI updates.',
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      technologies: 'Python / FastAPI · Node.js · REST & OpenAPI · Redis',
      desc: 'High-throughput stateless API services, background job queues, and robust webhook integrations.',
    },
    {
      category: 'Data & Infrastructure',
      icon: Database,
      technologies: 'PostgreSQL · Docker · AWS / Cloudflare · Linux',
      desc: 'Strict relational database schemas, containerized builds, CI/CD pipelines, and SSL edge caching.',
    },
  ]

  const comparisons = [
    {
      title: 'Budget Certainty',
      standard: 'Guaranteed Fixed Quotes',
      desc: 'Every project begins with a verified technical specification and a locked price. You never receive surprise hourly invoices.',
    },
    {
      title: 'Feedback Cadence',
      standard: 'Working Software by Day 7',
      desc: 'We deploy clickable staging environments within the first week so you can test real database queries on your own devices.',
    },
    {
      title: 'Ownership Model',
      standard: '100% Client Intellectual Property',
      desc: 'All source code, design files, and cloud accounts are transferred entirely to your team on launch day with zero recurring licensing fees.',
    },
  ]

  const timelineMilestones = [
    {
      year: '2021',
      title: 'The Breaking Point',
      desc: 'Our senior engineers left traditional agencies after repeatedly witnessing founders pay $20,000+ retainers only to receive junior code, page-builder lock-in, and endless delays.',
    },
    {
      year: '2023',
      title: 'The 7-Day Protocol',
      desc: 'We formalized our core operating standard: direct engineer access, strict relational schemas, clickable staging builds by Day 7, and guaranteed fixed pricing.',
    },
    {
      year: 'Today',
      title: 'Independent Studio',
      desc: 'Over 40 shipped systems spanning multi-tenant SaaS, booking engines, and internal operational portals. 100% client code ownership from day one.',
    },
  ]

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header & Studio Overview */}
      <section className="pt-14 pb-10 sm:pt-16 sm:pb-12 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 mb-4">
              <Code2 className="size-3.5 text-[#6336C5]" />
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#6336C5]">
                Independent Software Studio
              </span>
            </div>
            <h1 className="font-sans text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-slate-950 tracking-tight leading-[1.15]">
              Software built with architectural discipline.
            </h1>
            <p className="mt-3 font-sans text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              We design, engineer, and deploy high-throughput web applications, multi-tenant SaaS platforms, and internal operational engines for clients who demand reliable, production-ready software.
            </p>
          </div>

          {/* 4 Studio Performance Badges */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[10px] font-bold text-[#6336C5] block">OWNERSHIP</span>
              <p className="font-sans text-[13.5px] font-bold text-slate-950">100% Client IP</p>
              <p className="font-sans text-[11.5px] text-slate-500">Full repository &amp; cloud handover</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[10px] font-bold text-[#6336C5] block">PRICING</span>
              <p className="font-sans text-[13.5px] font-bold text-slate-950">Fixed-Price Quotes</p>
              <p className="font-sans text-[11.5px] text-slate-500">Guaranteed budget with zero overruns</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[10px] font-bold text-[#6336C5] block">PERFORMANCE</span>
              <p className="font-sans text-[13.5px] font-bold text-slate-950">&lt; 800ms P99 Latency</p>
              <p className="font-sans text-[11.5px] text-slate-500">Optimized mobile &amp; desktop speeds</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[10px] font-bold text-[#6336C5] block">WARRANTY</span>
              <p className="font-sans text-[13.5px] font-bold text-slate-950">30-Day Proactive Care</p>
              <p className="font-sans text-[11.5px] text-slate-500">Free bug fixes post-launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Studio Backstory & Photography (Wide 2-Column Grid) */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Studio Team Photography + Core Values */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xs overflow-hidden">
                <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70">
                  <img
                    src="/images/about-office-team.webp"
                    alt="ArixPro Engineering Collaboration Studio"
                    width={1376}
                    height={768}
                    className="w-full h-[260px] sm:h-[340px] object-cover"
                    loading="eager"
                  />
                </div>
                <div className="mt-2.5 px-1.5 flex items-center justify-between text-[11.5px] text-slate-500">
                  <span>ArixPro Engineering Studio</span>
                  <span className="font-mono text-[10.5px]">Collaborative Architecture &amp; Delivery</span>
                </div>
              </div>

              {/* 3 Grounded Commitments */}
              <div className="space-y-2 text-[12.5px]">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <ShieldCheck className="size-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Direct Senior Developer Access</span>
                    <span className="text-slate-600">Zero sales intermediaries or project managers playing telephone.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <Code2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Standard Open-Source Tooling</span>
                    <span className="text-slate-600">Built with React, TypeScript, and PostgreSQL. Zero proprietary lock-in.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Backstory Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-3.5 text-[#6336C5]" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
                    Studio Backstory
                  </span>
                </div>
                <h2 className="font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight leading-snug">
                  Why we left the traditional agency model behind.
                </h2>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  In 2021, our senior engineers were working inside fast-growing software companies and traditional agencies. We repeatedly saw the same breakdown: business owners investing $20,000+ retainers expecting world-class engineering, only to have their projects handed off to junior contractors playing telephone through non-technical account managers.
                </p>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  Delivery stalled, codebases became fragile tangles of page-builder plugins, and clients were trapped paying monthly fees just to keep their systems from crashing.
                </p>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  We started ArixPro to prove an opposite model: eliminate agency bloat, put founders directly in contact with the senior engineers writing their software, build on deterministic relational schemas, and deliver working staging software every 7 days.
                </p>
              </div>

              {/* Backstory Chronology */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Studio Milestones
                </span>
                <div className="space-y-2">
                  {timelineMilestones.map((item) => (
                    <div
                      key={item.year}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3 text-[12.5px]"
                    >
                      <span className="font-mono text-[11px] font-bold text-[#6336C5] bg-purple-50 px-2 py-0.5 rounded border border-purple-100 shrink-0 mt-0.5">
                        {item.year}
                      </span>
                      <div>
                        <span className="font-semibold text-slate-900 block">{item.title}</span>
                        <span className="text-slate-600 leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Engineering Principles (Broad 2x2 Grid) */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Core Standards
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              Our Engineering Principles
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              The architectural rules that govern every codebase, API endpoint, and database we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12.5px] font-bold text-[#6336C5]">
                      {p.num}
                    </span>
                    <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                      Standard
                    </span>
                  </div>

                  <h3 className="font-sans text-[17px] sm:text-[18px] font-bold text-slate-950 tracking-tight">
                    {p.title}
                  </h3>

                  <p className="font-sans text-[13.5px] text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>

                  <ul className="pt-1 space-y-1.5 text-[12.5px] text-slate-700">
                    {p.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="size-3.5 text-[#059669] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Production Technology Stack (3 Pillars + Icon Matrix) */}
      <section className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Proven Tooling
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              Production Technology Stack
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              Battle-tested technologies selected for long-term maintainability, strict type safety, and fast execution.
            </p>
          </div>

          {/* 3 Architecture Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {stackPillars.map((pillar) => {
              const IconComponent = pillar.icon
              return (
                <div
                  key={pillar.category}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2.5"
                >
                  <div className="size-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-1">
                    <IconComponent className="size-4 text-[#6336C5]" />
                  </div>
                  <h3 className="font-sans text-[15px] font-bold text-slate-950">
                    {pillar.category}
                  </h3>
                  <div className="font-mono text-[11.5px] font-semibold text-[#6336C5]">
                    {pillar.technologies}
                  </div>
                  <p className="font-sans text-[12.5px] text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Clean Light Tech Icons Matrix */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <TechIcons />
          </div>
        </div>
      </section>

      {/* 5. How ArixPro Compares */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Delivery Standards
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              Why business owners build with us.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              Clear commitments that eliminate the common risks of custom software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {comparisons.map((c) => (
              <div
                key={c.title}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2.5"
              >
                <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block">
                  {c.title}
                </span>
                <h3 className="font-sans text-[15px] font-bold text-slate-950">
                  {c.standard}
                </h3>
                <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Clean Navigation Footprint */}
      <section className="py-14 sm:py-16 bg-slate-50/50">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
              Ready to explore our work or review the process?
            </h2>
            <p className="font-sans text-[14px] text-slate-600">
              Inspect our production case studies or see how we structure our milestone-based delivery schedule.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 font-sans text-[13px] font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                <span>View Shipped Work</span>
                <ArrowUpRight className="size-3.5 text-slate-500" />
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 font-sans text-[13px] font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                <span>See How We Work</span>
                <ArrowUpRight className="size-3.5 text-slate-500" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0A0A0A] font-sans text-[13px] font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors"
              >
                <span>Talk to an Engineer</span>
                <ArrowUpRight className="size-3.5 text-white/80" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
