import { useSeo } from '../lib/useSeo'
import {
  Check,
  CreditCard,
  FileCheck,
  GitBranch,
  Globe,
  KeyRound,
  Lock,
  MessageSquare,
  ShieldCheck,
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

      {/* 2. Four Concrete Milestone Steps */}
      <section className="py-16 sm:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
            {/* STEP 01 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                    01
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                    Days 1 – 3
                  </span>
                </div>

                <h2 className="font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
                  Scope &amp; Fixed-Price Agreement
                </h2>

                <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
                  We review your requirements, map out the customer flow, and define database models. Before writing code, you receive an exact milestone schedule and a guaranteed quote.
                </p>

                <ul className="pt-2 space-y-2 text-[13.5px] text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Feature list &amp; user flow specification</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Database schema &amp; third-party integration plan</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Guaranteed fixed quote with agreed delivery dates</span>
                  </li>
                </ul>
              </div>

              {/* Artifact Card: Scope Document */}
              <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCheck className="size-4 text-[#6336C5]" />
                    <span className="font-mono text-[12px] font-semibold text-slate-800">
                      Scope_Agreement.pdf
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Check className="size-3" />
                    Approved
                  </span>
                </div>

                <div className="p-4 space-y-3 text-[12.5px]">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Pricing Model</span>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">Guaranteed Fixed Quote</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Milestone Timeline</span>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">Agreed Delivery Dates</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Database &amp; Flows</span>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">Locked Schema</span>
                  </div>
                  <div className="pt-1 flex items-center gap-2 text-[11.5px] text-slate-500">
                    <div className="size-1.5 rounded-full bg-emerald-500" />
                    <span>Signed off 100% before any code is written</span>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                    02
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                    Weeks 1 – 2
                  </span>
                </div>

                <h2 className="font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
                  Core Build &amp; Working Staging Link
                </h2>

                <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
                  We set up the database, authentication, and core interface. You receive a private password-protected staging URL on day 7 to click through real, functional software.
                </p>

                <ul className="pt-2 space-y-2 text-[13.5px] text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Live staging environment updated on every commit</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Real database queries and authentication flows</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Weekly video demo walkthrough showing progress</span>
                  </li>
                </ul>
              </div>

              {/* Artifact Card: Staging Window */}
              <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
                <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-slate-300" />
                    <div className="size-2 rounded-full bg-slate-300" />
                    <div className="size-2 rounded-full bg-slate-300" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11.5px] font-mono text-slate-600">
                    <Lock className="size-3 text-emerald-600" />
                    <span>staging.yourproject.com</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="p-4 space-y-3 text-[12.5px]">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Deployment Cadence</span>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">Every Git Commit</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Testing Devices</span>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">iOS, Android &amp; Desktop</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Access Security</span>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">Password Protected</span>
                  </div>
                  <div className="pt-1 flex items-center gap-2 text-[11.5px] text-slate-500">
                    <div className="size-1.5 rounded-full bg-emerald-500" />
                    <span>Clickable software delivered on Day 7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                    03
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                    Weeks 2 – 4
                  </span>
                </div>

                <h2 className="font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
                  Integrations, Payments &amp; Testing
                </h2>

                <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
                  We connect payment gateways (Stripe), email/SMS notifications, and background queues. Automated test suites verify that every user workflow behaves properly before launch.
                </p>

                <ul className="pt-2 space-y-2 text-[13.5px] text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Live Stripe checkout with verified payment webhooks</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Automated test suites covering core business logic</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Mobile performance optimization (&lt; 800ms load times)</span>
                  </li>
                </ul>
              </div>

              {/* Artifact Card: Preflight Audit */}
              <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-[#6336C5]" />
                    <span className="font-mono text-[12px] font-semibold text-slate-800">
                      Preflight_Audit_Log
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Check className="size-3" />
                    100% Passed
                  </span>
                </div>

                <div className="p-4 space-y-3 text-[12.5px]">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <CreditCard className="size-3.5 text-slate-400" />
                      <span className="text-slate-600">Stripe Webhooks</span>
                    </div>
                    <span className="font-semibold text-emerald-700 font-mono text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      Verified 200 OK
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <GitBranch className="size-3.5 text-slate-400" />
                      <span className="text-slate-600">Test Coverage</span>
                    </div>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">Core Logic Passing</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Globe className="size-3.5 text-slate-400" />
                      <span className="text-slate-600">Speed Benchmark</span>
                    </div>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">&lt; 800ms Load Time</span>
                  </div>
                  <div className="pt-1 flex items-center gap-2 text-[11.5px] text-slate-500">
                    <div className="size-1.5 rounded-full bg-emerald-500" />
                    <span>All production gates cleared before deployment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                    04
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                    Launch Day &amp; Beyond
                  </span>
                </div>

                <h2 className="font-sans text-[22px] sm:text-[25px] font-bold text-slate-950 tracking-tight">
                  Launch, Full Handover &amp; 30-Day Support
                </h2>

                <p className="font-sans text-[15px] text-slate-600 leading-relaxed">
                  We deploy to your custom domain, set up SSL encryption, and transfer 100% of the Git repository and cloud accounts to your team. We then monitor the system and fix any issues free for 30 days.
                </p>

                <ul className="pt-2 space-y-2 text-[13.5px] text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Custom domain routing with SSL certificate and CDN caching</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>100% full transfer of code repositories &amp; cloud accounts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>30-day post-launch warranty covering proactive bug fixes</span>
                  </li>
                </ul>
              </div>

              {/* Artifact Card: Ownership Transfer */}
              <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <KeyRound className="size-4 text-[#6336C5]" />
                    <span className="font-mono text-[12px] font-semibold text-slate-800">
                      Ownership_Transfer
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-[#6336C5] border border-purple-200">
                    <Check className="size-3" />
                    100% Client IP
                  </span>
                </div>

                <div className="p-4 space-y-3 text-[12.5px]">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Git Repository</span>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">Full Admin Transfer</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Domain &amp; SSL</span>
                    <span className="font-semibold text-slate-900 font-mono text-[12px]">Live on Custom Domain</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Bug Warranty</span>
                    <span className="font-semibold text-emerald-700 font-mono text-[12px]">30 Days Proactive Free</span>
                  </div>
                  <div className="pt-1 flex items-center gap-2 text-[11.5px] text-slate-500">
                    <div className="size-1.5 rounded-full bg-emerald-500" />
                    <span>Zero vendor lock-in; you own every single asset</span>
                  </div>
                </div>
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

