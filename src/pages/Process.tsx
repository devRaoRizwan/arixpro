import { useSeo } from '../lib/useSeo'
import {
  Check,
  CreditCard,
  FileText,
  GitBranch,
  Globe,
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
          <div className="max-w-3xl mx-auto">
            <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.1]">
              How projects run.
            </h1>
            <p className="mt-4 font-sans text-[17px] sm:text-[19px] text-slate-600 leading-relaxed">
              From initial scope to production launch. Simple milestones, weekly working code, and full repository handover.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Broad Four-Milestone Grid with Visual Artifacts */}
      <section className="py-16 sm:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          {/* Broad Horizontal Milestone Roadmap Tracker */}
          <div className="mb-10 sm:mb-12 pb-8 border-b border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#6336C5]">PHASE 01</span>
                <p className="font-sans text-[14px] font-bold text-slate-950">Scope &amp; Agreement</p>
                <p className="font-mono text-[11.5px] text-slate-500">Days 1 – 3</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#6336C5]">PHASE 02</span>
                <p className="font-sans text-[14px] font-bold text-slate-950">Working Staging Link</p>
                <p className="font-mono text-[11.5px] text-slate-500">Weeks 1 – 2</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#6336C5]">PHASE 03</span>
                <p className="font-sans text-[14px] font-bold text-slate-950">Integrations &amp; Testing</p>
                <p className="font-mono text-[11.5px] text-slate-500">Weeks 2 – 4</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#6336C5]">PHASE 04</span>
                <p className="font-sans text-[14px] font-bold text-slate-950">Launch &amp; Handover</p>
                <p className="font-mono text-[11.5px] text-slate-500">Launch Day &amp; Beyond</p>
              </div>
            </div>
          </div>

          {/* 2x2 Broad Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* STEP 01 */}
            <div className="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                      01
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                      Days 1 – 3
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-md">
                    Phase 01 Deliverable
                  </span>
                </div>

                <div>
                  <h2 className="font-sans text-[22px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
                    Scope &amp; Fixed-Price Agreement
                  </h2>
                  <p className="mt-2 font-sans text-[14.5px] text-slate-600 leading-relaxed">
                    We review your requirements, map customer user flows, and define relational data models. Before writing code, you approve a guaranteed fixed quote.
                  </p>
                </div>

                {/* Graphic 01: Architecture & Scope Schematic */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-3">
                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    <div className="p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                      <div className="size-6 mx-auto mb-1.5 rounded bg-slate-50 flex items-center justify-center">
                        <img src="/icons/figma.svg" alt="Figma" className="size-3.5" />
                      </div>
                      <div className="font-sans text-[11.5px] font-semibold text-slate-800">User Flows</div>
                      <div className="font-mono text-[10px] text-slate-400">Wireframes</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                      <div className="size-6 mx-auto mb-1.5 rounded bg-slate-50 flex items-center justify-center">
                        <img src="/icons/postgresql.svg" alt="PostgreSQL" className="size-3.5" />
                      </div>
                      <div className="font-sans text-[11.5px] font-semibold text-slate-800">Data Models</div>
                      <div className="font-mono text-[10px] text-slate-400">PostgreSQL</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                      <div className="size-6 mx-auto mb-1.5 rounded bg-slate-50 flex items-center justify-center">
                        <FileText className="size-3.5 text-slate-700" />
                      </div>
                      <div className="font-sans text-[11.5px] font-semibold text-slate-800">Fixed Quote</div>
                      <div className="font-mono text-[10px] text-slate-400">Guaranteed</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white border border-slate-200/80 text-[11.5px]">
                    <span className="text-slate-500">Sign-off Condition</span>
                    <span className="font-semibold text-slate-900">100% agreement before build starts</span>
                  </div>
                </div>

                {/* 3 Checklist Specifications */}
                <ul className="pt-1 space-y-2 text-[13.5px] text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Feature list &amp; user journey specification</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Database schema &amp; integration plan</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>Guaranteed fixed quote with agreed delivery dates</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Condition Strip */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-600">
                <span>Client Sign-off</span>
                <span className="font-semibold text-slate-900">Required before writing code</span>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                      02
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                      Weeks 1 – 2
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-md">
                    Phase 02 Deliverable
                  </span>
                </div>

                <div>
                  <h2 className="font-sans text-[22px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
                    Core Build &amp; Working Staging Link
                  </h2>
                  <p className="mt-2 font-sans text-[14.5px] text-slate-600 leading-relaxed">
                    We configure the database, authentication, and core interface. On Day 7, you receive a private password-protected staging URL to test real software in your browser.
                  </p>
                </div>

                {/* Graphic 02: Staging Browser Window Preview */}
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <div className="px-3.5 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="size-2 rounded-full bg-slate-300" />
                      <div className="size-2 rounded-full bg-slate-300" />
                      <div className="size-2 rounded-full bg-slate-300" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-mono text-slate-600">
                      <Lock className="size-2.5 text-slate-500" />
                      <span>staging.yourproject.com</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase font-semibold text-slate-500">Day 7 Build</span>
                  </div>
                  <div className="relative h-28 sm:h-32 overflow-hidden bg-slate-100">
                    <img
                      src="/images/work-analytics-dashboard.webp"
                      alt="Staging environment preview"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* 3 Checklist Specifications */}
                <ul className="pt-1 space-y-2 text-[13.5px] text-slate-700">
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

              {/* Bottom Condition Strip */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-600">
                <span>Review Format</span>
                <span className="font-semibold text-slate-900">Clickable link + weekly video demo</span>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                      03
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                      Weeks 2 – 4
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-md">
                    Phase 03 Deliverable
                  </span>
                </div>

                <div>
                  <h2 className="font-sans text-[22px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
                    Integrations, Payments &amp; Testing
                  </h2>
                  <p className="mt-2 font-sans text-[14.5px] text-slate-600 leading-relaxed">
                    We connect payment gateways (Stripe), email/SMS notifications, and background queues. Automated test suites verify every user workflow before launch.
                  </p>
                </div>

                {/* Graphic 03: Verification Matrix */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs text-[12px]">
                    <div className="flex items-center gap-2">
                      <CreditCard className="size-3.5 text-slate-600" />
                      <span className="font-medium text-slate-850">Stripe Webhooks</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-600 font-medium">Verified 200 OK</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs text-[12px]">
                    <div className="flex items-center gap-2">
                      <img src="/icons/react.svg" alt="React" className="size-3.5" />
                      <span className="font-medium text-slate-850">Automated Test Suites</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-600 font-medium">100% Passing</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs text-[12px]">
                    <div className="flex items-center gap-2">
                      <Globe className="size-3.5 text-slate-600" />
                      <span className="font-medium text-slate-850">Speed Benchmark</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-600 font-medium">&lt; 800ms Latency</span>
                  </div>
                </div>

                {/* 3 Checklist Specifications */}
                <ul className="pt-1 space-y-2 text-[13.5px] text-slate-700">
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

              {/* Bottom Condition Strip */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-600">
                <span>Launch Gate</span>
                <span className="font-semibold text-slate-900">100% checks cleared before cutover</span>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                      04
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                      Launch Day &amp; Beyond
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-md">
                    Phase 04 Deliverable
                  </span>
                </div>

                <div>
                  <h2 className="font-sans text-[22px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
                    Launch, Full Handover &amp; 30-Day Support
                  </h2>
                  <p className="mt-2 font-sans text-[14.5px] text-slate-600 leading-relaxed">
                    We deploy to your custom domain, configure SSL encryption, and transfer 100% of the Git repository and cloud accounts to your team with a 30-day warranty.
                  </p>
                </div>

                {/* Graphic 04: IP Transfer Vault */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs text-[12px]">
                    <div className="flex items-center gap-2">
                      <img src="/icons/github.svg" alt="GitHub" className="size-3.5" />
                      <span className="font-medium text-slate-850">Git Repository</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-600 font-medium">Full Admin Transfer</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs text-[12px]">
                    <div className="flex items-center gap-2">
                      <Globe className="size-3.5 text-slate-600" />
                      <span className="font-medium text-slate-850">Domain &amp; Infrastructure</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-600 font-medium">Live Custom Domain</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs text-[12px]">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="size-3.5 text-slate-600" />
                      <span className="font-medium text-slate-850">Post-Launch Warranty</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-600 font-medium">30 Days Proactive Free</span>
                  </div>
                </div>

                {/* 3 Checklist Specifications */}
                <ul className="pt-1 space-y-2 text-[13.5px] text-slate-700">
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

              {/* Bottom Condition Strip */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-600">
                <span>Handover Status</span>
                <span className="font-semibold text-slate-900">Full ownership transferred on Day 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Communication Standards (Broad Full-Width Grid) */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10">
            <h2 className="font-sans text-[26px] sm:text-[32px] font-bold text-slate-950 tracking-tight">
              How we communicate during the build.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              Direct, asynchronous communication designed to keep momentum high without useless meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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

      {/* 4. Practical FAQs (Broad Full-Width Grid) */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10">
            <h2 className="font-sans text-[26px] sm:text-[32px] font-bold text-slate-950 tracking-tight">
              Frequently asked questions.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              Clear answers on scope adjustments, support, and payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
