import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import {
  ArrowUpRight,
  Check,
  Cpu,
  GitBranch,
  ShieldCheck,
  Users,
} from 'lucide-react'

export function About() {
  useSeo({
    title: 'About ArixPro · Software Development Studio',
    description:
      'ArixPro is an independent software development studio building modern web applications, scalable backend systems, and custom SaaS platforms.',
    path: '/about',
  })

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '99.9%', label: 'Production Uptime' },
    { value: '100%', label: 'Client IP Ownership' },
    { value: '30 Days', label: 'Included Warranty' },
  ]

  const values = [
    {
      icon: Cpu,
      title: 'Architectural Discipline',
      desc: 'We write strict schemas, typed contracts, and reproducible migrations. Every system is built to scale smoothly without compounding technical debt.',
    },
    {
      icon: Users,
      title: 'Direct Engineer Access',
      desc: 'You work directly with the senior developers writing your code. Zero account managers, zero sales fluff, and zero telephone games.',
    },
    {
      icon: GitBranch,
      title: 'Complete Code Ownership',
      desc: 'Every repository, database schema, and deployment pipeline belongs to you from day one. Zero proprietary lock-in, zero monthly software ransoms.',
    },
    {
      icon: ShieldCheck,
      title: 'Post-Launch Reliability',
      desc: 'We stand by every line of code we ship. Every project includes 30 days of proactive post-launch bug fixes and monitoring at zero extra cost.',
    },
  ]

  const engagementSteps = [
    {
      step: '01',
      title: 'Scope & Architecture',
      desc: 'We analyze your requirements, define database models, and provide a guaranteed fixed quote before writing code.',
    },
    {
      step: '02',
      title: 'Weekly Staging Builds',
      desc: 'You receive private staging links to click through real, functional software on your own devices every single week.',
    },
    {
      step: '03',
      title: 'Cutover & Handover',
      desc: 'We handle production deployment with SSL, transfer 100% of all accounts and repositories, and support you post-launch.',
    },
  ]

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Hero Section */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-sans text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-slate-950 tracking-tight leading-[1.15]">
              Engineering reliable software for ambitious businesses.
            </h1>
            <p className="mt-4 font-sans text-[16px] sm:text-[17px] text-slate-600 leading-relaxed">
              ArixPro is an independent software studio. We design, build, and maintain custom web applications, high-throughput APIs, and multi-tenant SaaS platforms with architectural discipline.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="font-sans text-[28px] font-bold text-slate-950 tracking-tight">
                  {s.value}
                </p>
                <p className="font-sans text-[13px] text-slate-500 mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Who We Are & The Backstory */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
                How ArixPro Started
              </span>
              <h2 className="font-sans text-[24px] sm:text-[28px] font-bold text-slate-950 tracking-tight leading-snug">
                Born out of hands-on engineering rescue work.
              </h2>
              <p className="font-sans text-[14.5px] text-slate-600 leading-relaxed">
                Before ArixPro was a formal studio, our engineers were brought in to rescue stalled builds—crashing booking engines, desynced inventory databases, and fragile agency handoffs.
              </p>
              <div className="pt-2 space-y-2.5 text-[13px] text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="size-3.5 text-[#059669] shrink-0" />
                  <span>Senior engineers who write the code speak directly with you</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-3.5 text-[#059669] shrink-0" />
                  <span>Guaranteed milestone quotes with zero hourly budget creep</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-3.5 text-[#059669] shrink-0" />
                  <span>100% full repository &amp; cloud transfer on launch day</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 font-sans text-[14.5px] text-slate-600 leading-[1.75]">
              <p>
                In 2021, we kept getting hired by founders whose projects had ground to a halt. A medical booking system that collapsed during peak scheduling hours because an agency used fragile frontend hacks instead of database transactions. An e-commerce inventory sync that desynced records across channels. A custom internal tool quoted at four weeks that was on month seven with zero working staging links.
              </p>
              <p>
                In almost every case, the root cause wasn't lack of budget—it was the disconnect between the people selling the project and the people building it. Generalist digital agencies took the contract, outsourced the implementation, and layered on non-technical account managers who couldn't read an error log or audit a database query.
              </p>
              <p>
                We started ArixPro to provide an honest, engineering-first standard: <strong className="font-semibold text-slate-950">direct collaboration with senior engineers who take complete ownership of the architecture</strong>.
              </p>
              <p>
                We scope the data models and API contracts properly upfront so we can guarantee a fixed price. We deliver a clickable staging link every Friday so you test real progress on your own devices. And on launch day, you own 100% of the source code, database, and infrastructure—with zero proprietary lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Core Standards
            </span>
            <h2 className="mt-2 font-sans text-[24px] sm:text-[28px] font-bold text-slate-950 tracking-tight">
              How we approach every build.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              The fundamental engineering and operating standards that guide every codebase we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3"
                >
                  <div className="size-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#6336C5]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-sans text-[17px] font-bold text-slate-950">
                    {v.title}
                  </h3>
                  <p className="font-sans text-[14px] text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. The Studio Engagement Model */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Working Together
            </span>
            <h2 className="mt-2 font-sans text-[24px] sm:text-[28px] font-bold text-slate-950 tracking-tight">
              A transparent, predictable process.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              From day one to launch day, you always know what is being built, when it will be delivered, and how it behaves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {engagementSteps.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3"
              >
                <span className="font-mono text-[12px] font-bold text-[#6336C5] bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md inline-block">
                  Phase {step.step}
                </span>
                <h3 className="font-sans text-[17px] font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="font-sans text-[14px] text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing Invitation */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="font-sans text-[24px] sm:text-[30px] font-bold text-slate-950 tracking-tight">
              Have a project in mind?
            </h2>
            <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
              Tell us about your requirements. An engineer will review your specifications and reply within 24 hours with an honest technical assessment and fixed quote.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-[48px] px-7 rounded-full bg-[#0A0A0A] font-sans text-[14px] font-semibold text-white shadow-xs hover:bg-slate-800 transition-colors"
              >
                <span>Talk to an Engineer</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 h-[48px] px-7 rounded-full bg-white border border-slate-200 font-sans text-[14px] font-semibold text-slate-800 shadow-xs hover:bg-slate-50 transition-colors"
              >
                <span>View Shipped Work</span>
                <ArrowUpRight className="size-4 text-slate-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
