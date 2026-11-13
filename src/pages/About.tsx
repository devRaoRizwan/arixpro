import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { ArrowUpRight, Terminal } from 'lucide-react'

export function About() {
  useSeo({
    title: 'About ArixPro · Our Story & Philosophy',
    description:
      'We are an independent software studio. We work directly with founders and business owners to build reliable web applications, tools, and SaaS products with zero agency bloat.',
    path: '/about',
  })

  const commitments = [
    {
      title: 'We treat your budget like our own',
      desc: 'We never bill by the hour to pad invoices or drag out timelines. We agree on the scope, lock in a fixed price, and deliver what we promised.',
    },
    {
      title: 'You see working software every week',
      desc: 'No disappearing for months behind closed doors. Starting in week one, you get a private staging link to click through real, functional features.',
    },
    {
      title: 'You own 100% of everything we build',
      desc: 'The Git repository, cloud accounts, and database credentials are in your name from day one. Zero proprietary lock-in, zero monthly hostage fees.',
    },
    {
      title: 'We stand by our work after launch',
      desc: 'Launch day is not goodbye. Every build includes 30 days of proactive, zero-cost support to make sure everything runs smoothly in the real world.',
    },
  ]

  const practicalTools = [
    {
      name: 'React & TypeScript',
      role: 'Frontend Interfaces',
      desc: 'Fast, responsive interfaces that feel instant on phones and desktop screens.',
    },
    {
      name: 'Python & Node.js',
      role: 'Backend Engine',
      desc: 'Clean, reliable business logic and APIs that process data without surprises.',
    },
    {
      name: 'PostgreSQL',
      role: 'Database',
      desc: 'The gold standard for relational databases. Secure, dependable, and durable.',
    },
    {
      name: 'Stripe',
      role: 'Payments',
      desc: 'Secure checkout, subscriptions, and payouts with verified webhook handling.',
    },
  ]

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header (Personal, Conversational, Human) */}
      <section className="pt-14 pb-12 sm:pt-16 sm:pb-14 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 mb-4">
              <Terminal className="size-3.5 text-[#6336C5]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
                A Small Independent Studio
              </span>
            </div>
            <h1 className="font-sans text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              We’re engineers who love building software that actually works.
            </h1>
            <p className="mt-3.5 font-sans text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              We started ArixPro because we were tired of the agency song-and-dance: slick pitch decks, bloated retainers, and projects passed off to juniors who didn't understand the problem.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Backstory (Candid, Real, Grounded) */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
                The Backstory
              </span>
              <h2 className="font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight leading-snug">
                Why we decided to do this differently.
              </h2>
              <p className="font-sans text-[13.5px] text-slate-500 leading-relaxed">
                A simple conviction: great software doesn't come from big corporate layers. It comes from small teams of senior engineers who care about what they're building.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 font-sans text-[14px] text-slate-600 leading-relaxed">
              <p>
                A few years ago, our engineers were working across growing startups and traditional software agencies. The pattern was always the same: a founder with a great idea would get sold the dream by a senior partner, only to watch their project get handed off to junior contractors playing telephone through non-technical project managers.
              </p>
              <p>
                Communication crawled. Small changes took weeks. Codebases ended up tangled in fragile page-builder plugins and bloated dependencies that broke every time an update rolled out.
              </p>
              <p>
                We wanted a better, more honest way to work. So we built ArixPro around one central rule: <strong className="font-semibold text-slate-900">the people you talk to are the people writing your code</strong>.
              </p>
              <p>
                No account managers. No inflated hourly retainers. Just direct, transparent engineering with people who care about making your business succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work (Our Commitments to You) */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              How We Work
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
              Our commitments to every client.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              The everyday standards we hold ourselves to on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {commitments.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11.5px] font-bold text-[#6336C5]">
                    0{idx + 1}
                  </span>
                  <span className="text-slate-300">·</span>
                  <h3 className="font-sans text-[15.5px] font-bold text-slate-950">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-[13.5px] text-slate-600 leading-relaxed pl-5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Enjoy Building */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Focus Areas
            </span>
            <h2 className="mt-1.5 font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
              What we build best.
            </h2>
            <p className="mt-2 text-[14px] text-slate-600">
              We specialize in custom web software where reliability and real data flow matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
              <h3 className="font-sans text-[15px] font-bold text-slate-950">
                Customer Portals &amp; Booking Engines
              </h3>
              <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                Online scheduling, automated notifications, payment collection, and customer dashboards that run without manual intervention.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
              <h3 className="font-sans text-[15px] font-bold text-slate-950">
                SaaS &amp; Web Applications
              </h3>
              <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                Multi-tenant web products with authentication, role permissions, recurring Stripe billing, and intuitive interfaces.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
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

      {/* 5. Pragmatic Tooling (Human & Clear, Zero Jargon) */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5]">
              Pragmatic Tech
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
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[14px] font-bold text-slate-950">
                    {t.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-semibold text-slate-400">
                    {t.role}
                  </span>
                </div>
                <p className="font-sans text-[12.5px] text-slate-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
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
