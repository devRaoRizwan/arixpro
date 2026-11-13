import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import {
  ArrowUpRight,
  Calendar,
  Check,
  CreditCard,
  Layers,
  Terminal,
  Users,
  X,
} from 'lucide-react'

export function About() {
  useSeo({
    title: 'About Us · ArixPro Software Studio',
    description:
      'We are an independent software studio. We take on 1–2 builds at a time, work directly with founders, and ship clean, reliable web applications.',
    path: '/about',
  })

  const comparisonRows = [
    {
      aspect: 'Direct Communication',
      agency: 'Filtered through sales reps & non-technical account managers',
      arixpro: 'Direct private channel with the senior engineer building your app',
    },
    {
      aspect: 'Pricing & Budget',
      agency: 'Runaway hourly billing with surprise scope-creep invoices',
      arixpro: 'Guaranteed fixed quote with defined milestone deliverables',
    },
    {
      aspect: 'Delivery Cadence',
      agency: 'Months of radio silence followed by delayed slide deck reveals',
      arixpro: 'Clickable working staging URL delivered to your phone by Day 7',
    },
    {
      aspect: 'Code Ownership',
      agency: 'Proprietary platform lock-in or recurring code hostage fees',
      arixpro: '100% full Git repository & cloud handover on Day 1',
    },
    {
      aspect: 'Code Architecture',
      agency: 'Fragile page-builder plugins and unmaintainable dependencies',
      arixpro: 'Clean React, TypeScript, and strict relational PostgreSQL schemas',
    },
    {
      aspect: 'Post-Launch Care',
      agency: 'Support tickets billed at expensive hourly minimums',
      arixpro: '30-day proactive bug warranty included at zero extra cost',
    },
  ]

  const timelineMilestones = [
    {
      year: '2021',
      title: 'The Breaking Point',
      desc: 'Our senior engineers left traditional agencies after watching founders pay $20,000+ retainers only to receive junior code, page-builder lock-in, and endless delays.',
    },
    {
      year: '2023',
      title: 'The 7-Day Protocol',
      desc: 'We formalized our direct engineering model: locked-in milestone quotes, direct async communication, and functional staging URLs delivered on Day 7.',
    },
    {
      year: 'Today',
      title: 'Independent Studio',
      desc: 'Over 40 shipped systems spanning multi-tenant SaaS, booking engines, and internal operational portals. 100% client code ownership from day one.',
    },
  ]

  const practicalTools = [
    {
      name: 'React 19 & TypeScript',
      role: 'Frontend Interfaces',
      icons: ['/icons/react.svg', '/icons/typescript.svg'],
      desc: 'Fast, responsive interfaces that feel instant on mobile and desktop screens.',
    },
    {
      name: 'Python & Node.js',
      role: 'Stateless APIs',
      icons: ['/icons/python.svg', '/icons/fastapi.svg'],
      desc: 'Clean, reliable business logic and APIs that process data without surprises.',
    },
    {
      name: 'PostgreSQL & Docker',
      role: 'Relational Database',
      icons: ['/icons/postgresql.svg', '/icons/docker.svg'],
      desc: 'Strict relational data storage. Zero missing records, zero corrupted states.',
    },
    {
      name: 'Stripe Gateway',
      role: 'Payments & Billing',
      icons: ['/icons/git.svg'],
      desc: 'Credit card checkout, recurring subscriptions, and verified webhook receipts.',
    },
  ]

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header (Personal, Direct, Human) */}
      <section className="pt-14 pb-10 sm:pt-16 sm:pb-12 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 mb-3.5">
              <Terminal className="size-3.5 text-[#6336C5]" />
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#6336C5]">
                Independent Software Studio
              </span>
            </div>
            <h1 className="font-sans text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              Software built directly by the engineers who write the code.
            </h1>
            <p className="mt-3 font-sans text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed">
              ArixPro is an independent software studio. We take on 1–2 client projects at a time, write clean code, and work directly with founders and business owners.
            </p>
          </div>

          {/* 4 Studio Metric Pillars */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-[#6336C5]">
                <Users className="size-3.5" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">TEAM MODEL</span>
              </div>
              <p className="font-sans text-[14px] font-bold text-slate-950">Senior Engineers Only</p>
              <p className="font-sans text-[11.5px] text-slate-500">Zero junior handoffs or sales reps</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-[#6336C5]">
                <Calendar className="size-3.5" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">CAPACITY</span>
              </div>
              <p className="font-sans text-[14px] font-bold text-slate-950">Max 2 Builds at a Time</p>
              <p className="font-sans text-[11.5px] text-slate-500">100% focused project dedication</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-[#6336C5]">
                <Layers className="size-3.5" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">CADENCE</span>
              </div>
              <p className="font-sans text-[14px] font-bold text-slate-950">Working Staging by Day 7</p>
              <p className="font-sans text-[11.5px] text-slate-500">Clickable software every single week</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-[#6336C5]">
                <CreditCard className="size-3.5" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">PRICING</span>
              </div>
              <p className="font-sans text-[14px] font-bold text-slate-950">Fixed Guaranteed Quotes</p>
              <p className="font-sans text-[11.5px] text-slate-500">Zero hourly surprise invoices</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Comparison Matrix: Traditional Agency vs ArixPro */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              The Difference
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
              Why founders build with us over traditional agencies.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              A transparent comparison of how projects run when you work with engineers directly.
            </p>
          </div>

          {/* Elevated Comparison Matrix Table */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-5 sm:px-6 font-semibold w-1/4">Delivery Standard</th>
                    <th className="py-3.5 px-5 sm:px-6 font-semibold w-3/8 text-slate-500">Traditional Agency Traps</th>
                    <th className="py-3.5 px-5 sm:px-6 font-semibold w-3/8 text-[#6336C5] bg-purple-50/40">The ArixPro Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[13px] sm:text-[13.5px]">
                  {comparisonRows.map((row) => (
                    <tr key={row.aspect} className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-3.5 px-5 sm:px-6 font-semibold text-slate-950 align-top">
                        {row.aspect}
                      </td>
                      <td className="py-3.5 px-5 sm:px-6 text-slate-600 align-top">
                        <div className="flex items-start gap-2">
                          <X className="size-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{row.agency}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-5 sm:px-6 text-slate-900 font-medium align-top bg-purple-50/20">
                        <div className="flex items-start gap-2">
                          <Check className="size-4 text-[#059669] shrink-0 mt-0.5" />
                          <span>{row.arixpro}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Studio Backstory & Timeline */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Story Introduction */}
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
                Studio Origins
              </span>
              <h2 className="font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight leading-snug">
                Why we decided to do this differently.
              </h2>
              <p className="font-sans text-[13.5px] text-slate-600 leading-relaxed">
                Most agencies are sales machines with developers attached. You talk to a charming partner, sign a five-figure retainer, and watch your project get passed off to contractors you’ve never met.
              </p>
              <p className="font-sans text-[13.5px] text-slate-600 leading-relaxed">
                We left traditional agency life to build a direct studio: small, senior, honest, and focused on delivering working software every single week.
              </p>
            </div>

            {/* Visual Milestones Timeline */}
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Chronological Milestones
              </span>
              <div className="space-y-3">
                {timelineMilestones.map((item) => (
                  <div
                    key={item.year}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 shadow-2xs flex items-start gap-3.5 text-[13px]"
                  >
                    <span className="font-mono text-[11.5px] font-bold text-[#6336C5] bg-white px-2.5 py-1 rounded border border-slate-200 shrink-0 mt-0.5 shadow-3xs">
                      {item.year}
                    </span>
                    <div>
                      <span className="font-semibold text-slate-950 block text-[14px]">{item.title}</span>
                      <span className="text-slate-600 leading-relaxed mt-0.5 block">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Practical Tech Stack Matrix */}
      <section className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Pragmatic Engineering
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
              Tools we trust every day.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              We choose battle-tested technologies that will still be stable, secure, and easy to maintain years from now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {practicalTools.map((t) => (
              <div
                key={t.name}
                className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-slate-400">
                    {t.role}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {t.icons.map((icon, i) => (
                      <img key={i} src={icon} alt="" className="size-3.5 opacity-80" />
                    ))}
                  </div>
                </div>
                <h3 className="font-sans text-[14.5px] font-bold text-slate-950">
                  {t.name}
                </h3>
                <p className="font-sans text-[12.5px] text-slate-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What We Build Best */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Core Capabilities
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
              What we build best.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              We specialize in custom web software where reliability and real data flow matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
              <span className="font-mono text-[11px] font-bold text-[#6336C5] block">01 / BOOKING</span>
              <h3 className="font-sans text-[15px] font-bold text-slate-950">
                Customer Portals &amp; Booking Engines
              </h3>
              <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                Online scheduling, automated notifications, payment collection, and customer dashboards that run without manual intervention.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
              <span className="font-mono text-[11px] font-bold text-[#6336C5] block">02 / APPLICATIONS</span>
              <h3 className="font-sans text-[15px] font-bold text-slate-950">
                SaaS &amp; Web Applications
              </h3>
              <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                Multi-tenant web products with authentication, role permissions, recurring Stripe billing, and intuitive interfaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
              <span className="font-mono text-[11px] font-bold text-[#6336C5] block">03 / OPERATIONS</span>
              <h3 className="font-sans text-[15px] font-bold text-slate-950">
                Internal Tools &amp; Operations
              </h3>
              <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                Custom admin systems that replace messy spreadsheets, automate backend tasks, and save hours of manual employee work every week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Honest Invitation / Direct Next Step */}
      <section className="py-14 sm:py-16 bg-slate-50/50">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
              Have a project in mind? Let's talk.
            </h2>
            <p className="font-sans text-[14px] text-slate-600 leading-relaxed">
              No sales reps, no high-pressure pitch. Just a direct conversation with an engineer about your goals, how we’d build it, and what it would cost.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0A0A0A] font-sans text-[13px] font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors"
              >
                <span>Talk with an Engineer</span>
                <ArrowUpRight className="size-3.5 text-white/80" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 font-sans text-[13px] font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                <span>View Shipped Work</span>
                <ArrowUpRight className="size-3.5 text-slate-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
