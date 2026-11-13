import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { ArrowUpRight, Clock, MessageSquare, Shield, Terminal } from 'lucide-react'

export function About() {
  useSeo({
    title: 'About Us · ArixPro Software Studio',
    description:
      'We are a small, independent software studio. We take on 1–2 builds at a time and work directly with founders to build clean, dependable web applications.',
    path: '/about',
  })

  const weeklyCadence = [
    {
      day: 'Monday',
      title: 'Priorities & Milestones',
      desc: 'We review the exact features being shipped this week in a direct async channel. No long, draining meetings—just clear, agreed goals.',
    },
    {
      day: 'Mid-Week',
      title: 'Direct Code & Progress',
      desc: 'You see automated staging updates as features are finished. When you have a question, you message the engineer writing the code.',
    },
    {
      day: 'Friday',
      title: 'Working Link & Video Demo',
      desc: 'You get a private staging URL to test real features on your phone, paired with a short 3-minute video walkthrough of what was completed.',
    },
  ]

  const houseRules = [
    {
      num: '01',
      rule: 'The builder talks directly to the founder.',
      detail: 'No account managers or project coordinators playing telephone. When you have feedback or an idea, you talk directly to the engineer writing your code.',
    },
    {
      num: '02',
      rule: 'Guaranteed fixed quotes. No hourly billing.',
      detail: 'Hourly billing rewards slow work. We agree on the scope and lock in a fixed price. If a feature takes longer than expected, that is our responsibility.',
    },
    {
      num: '03',
      rule: 'Clickable software by Day 7.',
      detail: 'We never disappear for two months behind closed doors. You get a private staging URL to click through functional software within the first week.',
    },
    {
      num: '04',
      rule: 'You own 100% of the code on Day 1.',
      detail: 'The GitHub repository, database, and cloud accounts are in your name. We don’t hold code hostage, charge licensing fees, or lock you into proprietary hosting.',
    },
  ]

  const founderQuestions = [
    {
      q: 'What does working with you feel like day-to-day?',
      a: 'Like having senior developers in-house without the 6-month recruiting cycle or overhead. We chat in a private channel, share staging links frequently, and answer questions without corporate delay.',
    },
    {
      q: 'What happens if we need to adjust features mid-build?',
      a: 'Software naturally evolves once you start clicking real screens. If an adjustment is minor, we handle it on the fly. If it’s a brand-new addition, we give you a clear fixed quote before touching code.',
    },
    {
      q: 'What happens after launch day?',
      a: 'Launch day isn’t goodbye. Every build includes 30 days of proactive post-launch support. We monitor the application and fix any unexpected bugs immediately at zero extra cost.',
    },
  ]

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header (Warm, Personal, Grounded) */}
      <section className="pt-14 pb-10 sm:pt-16 sm:pb-12 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-3.5">
              <Terminal className="size-3.5 text-[#6336C5]" />
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-slate-600">
                ArixPro Studio · Est. 2021
              </span>
            </div>
            <h1 className="font-sans text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              A small studio of engineers who build software for founders.
            </h1>
            <p className="mt-3 font-sans text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed">
              No sales reps. No account managers. Just the developers who actually write your code.
            </p>
          </div>
        </div>
      </section>

      {/* 2. A Note from the Studio (Authentic, Real Human Letter) */}
      <section className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-[#6336C5]">
              <MessageSquare className="size-4" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                A Note From The Studio
              </span>
            </div>

            <div className="space-y-4 font-sans text-[14px] sm:text-[14.5px] text-slate-700 leading-[1.75]">
              <p>
                Most software agencies operate like talent brokers: a senior partner signs you up with a slick presentation, collects a five-figure retainer, and then hands the work off to junior developers or overseas contractors who weren’t in the room.
              </p>
              <p>
                When something breaks or needs adjusting, you have to explain it to an account manager who writes a ticket for someone else. Communication crawls, budgets swell, and the finished codebase is often a fragile tangle of page-builder plugins that no one wants to touch.
              </p>
              <p>
                We built ArixPro to be the opposite. We’re an independent engineering studio. When you hire us, the people you talk with on day one are the exact engineers designing your database, wiring your payments, and writing your frontend code.
              </p>
              <p>
                We don’t take on dozens of projects at once. We take 1 or 2 builds at a time. We give them our full attention, deliver working software every single week, and transfer 100% of the code on launch day.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-500 font-sans">
              <span className="font-semibold text-slate-900">The Engineering Team at ArixPro</span>
              <span className="font-mono text-[11px]">Direct &amp; Independent</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How a Week Actually Runs (Real-Life Studio Cadence) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-[#6336C5] mb-1">
              <Clock className="size-4" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                Weekly Rhythm
              </span>
            </div>
            <h2 className="font-sans text-[21px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
              How a typical week looks when we build together.
            </h2>
            <p className="mt-1.5 text-[13.5px] text-slate-600">
              Transparent, asynchronous communication designed to keep momentum high without useless meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {weeklyCadence.map((item) => (
              <div
                key={item.day}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5] bg-white px-2 py-0.5 rounded border border-slate-200/80 inline-block">
                  {item.day}
                </span>
                <h3 className="font-sans text-[15px] font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our 4 Studio Rules */}
      <section className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-[#6336C5] mb-1">
              <Shield className="size-4" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                Studio Standards
              </span>
            </div>
            <h2 className="font-sans text-[21px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
              The four rules we never break.
            </h2>
            <p className="mt-1.5 text-[13.5px] text-slate-600">
              Clear operating boundaries that protect your budget, timeline, and intellectual property.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {houseRules.map((r) => (
              <div
                key={r.num}
                className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                    {r.num}
                  </span>
                  <span className="text-slate-300">·</span>
                  <h3 className="font-sans text-[14.5px] sm:text-[15px] font-bold text-slate-950">
                    {r.rule}
                  </h3>
                </div>
                <p className="font-sans text-[13px] text-slate-600 leading-relaxed pl-5">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Candid Founder Q&A */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-8">
            <h2 className="font-sans text-[21px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
              Questions founders usually ask us.
            </h2>
            <p className="mt-1.5 text-[13.5px] text-slate-600">
              Honest answers on how we collaborate, handle changes, and support projects after launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {founderQuestions.map((q) => (
              <div
                key={q.q}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2"
              >
                <h3 className="font-sans text-[14px] font-bold text-slate-950 leading-snug">
                  {q.q}
                </h3>
                <p className="font-sans text-[12.5px] sm:text-[13px] text-slate-600 leading-relaxed">
                  {q.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Direct Conversation Prompt */}
      <section className="py-14 sm:py-16 bg-slate-50/50">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-md mx-auto space-y-3">
            <h2 className="font-sans text-[21px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
              Have an idea or a system you need built?
            </h2>
            <p className="font-sans text-[13.5px] text-slate-600 leading-relaxed">
              No sales pitches, no pressure. Just an honest conversation with an engineer about what you’re trying to build and what it would take.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0A0A0A] font-sans text-[13px] font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors"
              >
                <span>Talk with an engineer</span>
                <ArrowUpRight className="size-3.5 text-white/80" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 font-sans text-[13px] font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <span>View shipped work</span>
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
