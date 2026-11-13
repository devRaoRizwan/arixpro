import { useSeo } from '../lib/useSeo'
import {
  Check,
  GitBranch,
  Lock,
  MessageSquare,
  Video,
} from 'lucide-react'

export function Process() {
  useSeo({
    title: 'How We Work & Engineering Process',
    description:
      'From technical scope to production launch: simple milestones, weekly working software, and full code handover on launch day.',
    path: '/process',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header (Clean, Direct, Zero Slop) */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.1]">
              How projects run.
            </h1>
            <p className="mt-4 font-sans text-[17px] sm:text-[19px] text-slate-600 leading-relaxed">
              From initial scope to production launch. Simple milestones, weekly working code, and full repository handover.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Four Simplified, Concrete Steps */}
      <section className="py-16 sm:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 space-y-12 sm:space-y-16 max-w-5xl">
          {/* STEP 01 */}
          <div className="p-7 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                  01
                </span>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                  Days 1 – 3
                </span>
              </div>

              <h2 className="font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
                Scope &amp; Fixed-Price Agreement
              </h2>

              <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
                We review your goals, map out the customer flow, and define the database schema. Before writing code, you receive an exact milestone schedule and a guaranteed fixed quote.
              </p>

              <ul className="pt-2 space-y-2 text-[13.5px] text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Feature list &amp; user flow specification</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Database schema &amp; integration plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Guaranteed fixed quote with agreed delivery dates</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3 text-[13px]">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Deliverable
              </span>
              <p className="font-semibold text-slate-900">
                Written project specification &amp; fixed milestone schedule.
              </p>
              <div className="pt-2 border-t border-slate-200/60 font-sans text-[12px] text-slate-500">
                You review and approve the exact scope before development begins.
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="p-7 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                  02
                </span>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                  Weeks 1 – 2
                </span>
              </div>

              <h2 className="font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
                Core Build &amp; Working Staging Link
              </h2>

              <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
                We set up the database, authentication, and core interface. You receive a private password-protected staging URL on day 7 to click through real, functional software.
              </p>

              <ul className="pt-2 space-y-2 text-[13.5px] text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Live staging environment updated on every commit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Real database queries and authentication flows</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Weekly video demo showing newly completed features</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3 text-[13px]">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Deliverable
              </span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-mono text-[12px] text-slate-700">
                <Lock className="size-3.5 text-[#059669]" />
                <span>staging.yourproject.com</span>
              </div>
              <p className="text-[12px] text-slate-500">
                Interactive preview you can test directly on your phone or computer.
              </p>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="p-7 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                  03
                </span>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                  Weeks 2 – 4
                </span>
              </div>

              <h2 className="font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
                Integrations, Payments &amp; Testing
              </h2>

              <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
                We connect payment gateways (Stripe), email/SMS notifications, and background queues. Automated test suites verify that every user workflow behaves properly before launch.
              </p>

              <ul className="pt-2 space-y-2 text-[13.5px] text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Live Stripe checkout with verified payment webhooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Automated test suites covering core business logic</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Mobile performance optimization (&lt; 800ms load times)</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3 text-[13px]">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Deliverable
              </span>
              <p className="font-semibold text-slate-900">
                Complete system verified with passing tests &amp; real payments.
              </p>
              <div className="pt-2 border-t border-slate-200/60 font-sans text-[12px] text-slate-500">
                Tested against real-world mobile speeds and edge cases.
              </div>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="p-7 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                  04
                </span>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                  Launch Day &amp; Beyond
                </span>
              </div>

              <h2 className="font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
                Launch, Full Handover &amp; 30-Day Support
              </h2>

              <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
                We deploy to your custom domain, set up SSL encryption, and transfer 100% of the Git repository and cloud accounts to your team. We then monitor the system and fix any issues free for 30 days.
              </p>

              <ul className="pt-2 space-y-2 text-[13.5px] text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>Custom domain routing with SSL certificate and CDN caching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>100% full transfer of code repositories &amp; cloud accounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[#059669] shrink-0" />
                  <span>30-day post-launch warranty covering proactive bug fixes</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 p-5 rounded-xl bg-purple-50/40 border border-purple-200/70 space-y-3 text-[13px]">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5] block">
                Deliverable
              </span>
              <p className="font-semibold text-slate-900">
                Live production site + 100% code ownership.
              </p>
              <div className="pt-2 border-t border-purple-100 font-sans text-[12px] text-slate-600">
                Zero proprietary lock-in. You own everything from day one.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Communication Standards */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="font-sans text-[26px] sm:text-[32px] font-bold text-slate-950 tracking-tight">
              How we communicate during the build.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              Direct, asynchronous communication designed to keep momentum high without useless meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
              <div className="size-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                <MessageSquare className="size-4 text-[#6336C5]" />
              </div>
              <h3 className="font-sans text-[16px] font-bold text-slate-950">
                Direct Engineer Channel
              </h3>
              <p className="mt-2 font-sans text-[14px] text-slate-600 leading-relaxed">
                You get a private channel directly with the developer building your app. No sales reps or account managers playing telephone.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
              <div className="size-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                <Video className="size-4 text-[#6336C5]" />
              </div>
              <h3 className="font-sans text-[16px] font-bold text-slate-950">
                Weekly Video Demos
              </h3>
              <p className="mt-2 font-sans text-[14px] text-slate-600 leading-relaxed">
                Every Friday, you receive a 3–5 minute video walkthrough showing working features live in staging. You watch it whenever you have time.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
              <div className="size-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                <GitBranch className="size-4 text-[#6336C5]" />
              </div>
              <h3 className="font-sans text-[16px] font-bold text-slate-950">
                Live Code Visibility
              </h3>
              <p className="mt-2 font-sans text-[14px] text-slate-600 leading-relaxed">
                You have full access to the Git repository. You can see commits, code reviews, and automated builds whenever you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Practical FAQs */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="font-sans text-[26px] sm:text-[32px] font-bold text-slate-950 tracking-tight">
              Frequently asked questions.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              Clear answers on scope adjustments, support, and payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
              <h3 className="font-sans text-[15.5px] font-bold text-slate-950 leading-snug">
                What if we need to adjust features during the build?
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                If an adjustment fits within the milestone, we adapt it immediately. If it's a major new addition, we give you a fixed quote upfront before writing code—zero surprise billing.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
              <h3 className="font-sans text-[15.5px] font-bold text-slate-950 leading-snug">
                Do we need technical experience to manage this?
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                No. We handle hosting, DNS, databases, and security. We hand over an intuitive admin panel and video walkthroughs so your team can run operations easily.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
              <h3 className="font-sans text-[15.5px] font-bold text-slate-950 leading-snug">
                What if an unexpected bug appears after launch?
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                Every project includes a 30-day post-launch warranty. If anything behaves unexpectedly or breaks, we fix it immediately at zero extra cost.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
              <h3 className="font-sans text-[15.5px] font-bold text-slate-950 leading-snug">
                How are milestone payments structured?
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                Payments are tied to verified milestones: deposit on scope sign-off, progress milestone upon staging review, and final balance only upon live launch and code handover.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Process
