import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  useSeo({
    title: 'About Us · ArixPro Software Studio',
    description:
      'We are an independent software studio. We take on 1–2 projects at a time, work directly with founders, and ship clean, reliable web applications.',
    path: '/about',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-14 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              About the Studio
            </span>
            <h1 className="mt-3 font-sans text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              We build custom web software without the agency runaround.
            </h1>
            <p className="mt-3 font-sans text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              ArixPro is an independent software studio. We take on 1–2 client projects at a time, write clean code, and work directly with founders and business owners.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Real-Life Story & Philosophy (Clean Editorial) */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-10 font-sans text-[14.5px] sm:text-[15px] text-slate-700 leading-[1.75]">
              <div className="space-y-4">
                <h2 className="font-sans text-[20px] sm:text-[22px] font-bold text-slate-950 tracking-tight">
                  Why we started this studio
                </h2>
                <p>
                  Most software agencies are sales organizations with developers attached. You talk to a polished partner during the pitch, sign a five-figure retainer, and then watch your project quietly get passed off to junior contractors or outsourced teams you never met.
                </p>
                <p>
                  When something breaks or needs adjusting, you have to explain it to an account manager who writes a ticket for someone else. Communication crawls, budgets swell, and the finished codebase is often a tangled mess of page-builder plugins that no one wants to touch.
                </p>
                <p>
                  We spent years inside that environment and got tired of watching good businesses get burned. We built ArixPro to do the opposite: keep the studio intentionally small, cut out the middlemen, and focus purely on shipping software that works.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h2 className="font-sans text-[20px] sm:text-[22px] font-bold text-slate-950 tracking-tight">
                  How we run projects
                </h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-bold text-slate-950 text-[15px] mb-1">
                      1. You talk directly with the engineer writing your code
                    </h3>
                    <p className="text-slate-600 text-[14px]">
                      There are no account managers, sales reps, or ticket queues. When you have a question or an idea, you message the person actually building the feature. Feedback takes minutes, not days.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950 text-[15px] mb-1">
                      2. Fixed pricing, zero hourly invoice surprises
                    </h3>
                    <p className="text-slate-600 text-[14px]">
                      Hourly billing incentivizes software teams to work slowly. We scope your project in detail upfront and agree on a guaranteed fixed quote. If a feature takes longer than expected, that is our responsibility, not an extra bill on your desk.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950 text-[15px] mb-1">
                      3. Working software in your hands every 7 days
                    </h3>
                    <p className="text-slate-600 text-[14px]">
                      We don’t disappear for three months to do a "big reveal." By day seven, you have a private staging URL on your phone where you can test real features. Every Friday, you get a short video walkthrough of what was completed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950 text-[15px] mb-1">
                      4. You own 100% of the intellectual property from day one
                    </h3>
                    <p className="text-slate-600 text-[14px]">
                      The GitHub repository, database, and cloud accounts are created in your name. We don’t lock you into proprietary hosting, charge monthly software hostage fees, or hide the source code. If you ever hire an in-house developer, they can take over immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h2 className="font-sans text-[20px] sm:text-[22px] font-bold text-slate-950 tracking-tight">
                  The tools we build with
                </h2>
                <p>
                  We don’t chase every new JavaScript framework of the week. We choose boring, battle-tested technologies that are fast, secure, and will still be easy to maintain five years from now:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-[13.5px]">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                    <span className="font-semibold text-slate-950 block">React &amp; TypeScript</span>
                    <span className="text-slate-600 text-[12.5px]">Fast, accessible interfaces that run cleanly across desktop and mobile.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                    <span className="font-semibold text-slate-950 block">Node.js &amp; Python</span>
                    <span className="text-slate-600 text-[12.5px]">Stateless backend APIs, background workers, and automated queues.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                    <span className="font-semibold text-slate-950 block">PostgreSQL</span>
                    <span className="text-slate-600 text-[12.5px]">Strict relational data storage. Zero missing records, zero corrupted states.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                    <span className="font-semibold text-slate-950 block">Stripe</span>
                    <span className="text-slate-600 text-[12.5px]">Credit card checkout, recurring subscriptions, and verified webhook receipts.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar / Studio Quick Facts */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-4">
                <h3 className="font-sans text-[14px] font-bold uppercase tracking-wider text-slate-900">
                  Studio Facts
                </h3>

                <div className="space-y-3 text-[13px]">
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500">Team</span>
                    <span className="font-medium text-slate-900">Senior engineers only</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500">Client Capacity</span>
                    <span className="font-medium text-slate-900">Max 2 projects at a time</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500">Pricing</span>
                    <span className="font-medium text-slate-900">Fixed-price milestone quotes</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500">First Working Build</span>
                    <span className="font-medium text-slate-900">Day 7 on private staging</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500">Code Ownership</span>
                    <span className="font-medium text-slate-900">100% Client IP from Day 1</span>
                  </div>
                  <div className="flex justify-between pt-1.5">
                    <span className="text-slate-500">Post-Launch</span>
                    <span className="font-medium text-slate-900">30-day bug warranty included</span>
                  </div>
                </div>
              </div>

              {/* Direct Invitation Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-xs">
                <h3 className="font-sans text-[15px] font-bold text-slate-950">
                  Have a project in mind?
                </h3>
                <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                  Tell us what you're trying to build. An engineer will review your requirements and respond within 24 hours with an honest assessment and clear pricing.
                </p>
                <div className="pt-1">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-[#6336C5] hover:text-[#4f28a3] transition-colors"
                  >
                    <span>Talk with an engineer</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
