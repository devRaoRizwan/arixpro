import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import {
  ArrowUpRight,
  Check,
  GitBranch,
  KeyRound,
  Lock,
  MessageSquare,
  Terminal,
  Video,
} from 'lucide-react'

export function Process() {
  useSeo({
    title: 'Engineering Process & Production Pipeline',
    description:
      'How ArixPro builds and ships software: from technical discovery and weekly staging builds to automated test pipelines and 100% code handover.',
    path: '/process',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Hero Header */}
      <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-slate-200/80 overflow-hidden">
        {/* Subtle atmospheric ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-gradient-to-b from-purple-100/40 via-purple-50/15 to-transparent blur-[110px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5] bg-purple-50 border border-purple-200/70 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-2xs">
              The Production Pipeline
            </span>

            <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-slate-950 tracking-tight leading-[1.12]">
              How your software goes from idea to live code.
            </h1>

            <p className="mt-5 font-sans text-[17px] sm:text-[19px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              A transparent, milestone-driven lifecycle. You test working code every week, communicate directly with the builder, and take 100% ownership on launch day.
            </p>
          </div>

          {/* Quick Pillar Strip */}
          <div className="mt-12 pt-8 border-t border-slate-200/70 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left font-sans text-[13px] text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#059669] shrink-0" />
              <span>Weekly live staging demos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#059669] shrink-0" />
              <span>Direct senior engineer access</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#059669] shrink-0" />
              <span>Guaranteed fixed quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#059669] shrink-0" />
              <span>100% source code transfer</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Chronological Pipeline Steps with Live Artifacts */}
      <section className="py-16 sm:py-24 bg-slate-50/50">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 space-y-16 sm:space-y-24">
          {/* STEP 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                  Step 01 //
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                  Days 1 – 3
                </span>
              </div>

              <h2 className="font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight leading-snug">
                The Architecture Blueprint &amp; Scope Contract
              </h2>

              <p className="font-sans text-[15.5px] text-slate-600 leading-relaxed">
                Before writing a single line of code, we map your customer flows, database schema, and third-party integrations into an explicit specification. You receive a guaranteed fixed-price quote and deliverable milestone calendar.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Visual Entity-Relationship Diagram (ERD) defining exact data models</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Documented OpenAPI endpoint schema &amp; authentication specs</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Fixed-price quote with zero open-ended hourly billing</span>
                </div>
              </div>
            </div>

            {/* Right: Visual Artifact - Schema & Spec Preview */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/70">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="size-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="size-2.5 rounded-full bg-[#27C93F]/80" />
                    <span className="ml-2 font-mono text-[11.5px] text-slate-500">blueprint.spec.json</span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Validated
                  </span>
                </div>
                <div className="p-5 font-mono text-[12.5px] leading-relaxed text-slate-800 bg-white space-y-1.5 overflow-x-auto">
                  <div className="text-slate-400">&#47;&#47; Architecture Definition</div>
                  <div>&#123;</div>
                  <div className="pl-4"><span className="text-[#6336C5]">"project"</span>: <span className="text-emerald-700">"production_system"</span>,</div>
                  <div className="pl-4"><span className="text-[#6336C5]">"pricing_model"</span>: <span className="text-emerald-700">"fixed_guaranteed_quote"</span>,</div>
                  <div className="pl-4"><span className="text-[#6336C5]">"database"</span>: <span className="text-emerald-700">"PostgreSQL 16 (Strict Relational)"</span>,</div>
                  <div className="pl-4"><span className="text-[#6336C5]">"frontend"</span>: <span className="text-emerald-700">"React 19 + TypeScript + Tailwind"</span>,</div>
                  <div className="pl-4"><span className="text-[#6336C5]">"payments"</span>: <span className="text-emerald-700">"Stripe Webhook Gateway"</span>,</div>
                  <div className="pl-4"><span className="text-[#6336C5]">"latency_target"</span>: <span className="text-emerald-700">"&lt; 800ms P99"</span>,</div>
                  <div className="pl-4"><span className="text-[#6336C5]">"code_ownership"</span>: <span className="text-emerald-700">"100% Client IP Day 1"</span></div>
                  <div>&#125;</div>
                </div>
                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between font-sans text-[12px] text-slate-600">
                  <span>Sign-off requirement: 100% agreement before build starts</span>
                  <span className="font-mono text-[#6336C5] font-semibold">Milestone 01 Sign-off</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Visual Artifact - Staging Window (order-2 on mobile, order-1 on lg) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/70">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="size-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="size-2.5 rounded-full bg-[#27C93F]/80" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-600">
                    <Lock className="size-3 text-[#059669]" />
                    <span>staging.yourproject.com/overview</span>
                  </div>
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="p-6 bg-white space-y-4 font-sans">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h4 className="text-[14px] font-bold text-slate-950">Private Staging Environment</h4>
                      <p className="text-[12px] text-slate-500">Live deployment updated on every git push</p>
                    </div>
                    <span className="font-mono text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
                      Sprint 01 Preview
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-mono text-[10.5px] uppercase text-slate-400 block">Database</span>
                      <span className="text-[13px] font-bold text-slate-900">PostgreSQL Connected</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-mono text-[10.5px] uppercase text-slate-400 block">Authentication</span>
                      <span className="text-[13px] font-bold text-slate-900">JWT + OAuth Ready</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 flex items-center justify-between text-[12px]">
                    <span className="text-slate-700">Client Demo Access: Password-Protected</span>
                    <span className="font-mono font-bold text-[#6336C5]">Active on Day 7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content (order-1 on mobile, order-2 on lg) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                  Step 02 //
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                  Weeks 1 – 2
                </span>
              </div>

              <h2 className="font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight leading-snug">
                Clickable Staging Builds Every 7 Days
              </h2>

              <p className="font-sans text-[15.5px] text-slate-600 leading-relaxed">
                We provision your database, configure authentication, and deploy directly to your private staging environment. You click through real, functional software in your browser on day 7—never static slide decks.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Password-protected staging URL accessible from mobile and desktop</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Weekly video demo walkthrough highlighting completed user flows</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Continuous git commits pushed to your private repository</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                  Step 03 //
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                  Weeks 2 – 4
                </span>
              </div>

              <h2 className="font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight leading-snug">
                Integrations, Test Suites &amp; Pre-Flight
              </h2>

              <p className="font-sans text-[15.5px] text-slate-600 leading-relaxed">
                We wire up production payment gateways (Stripe), email/SMS notifications, and background queues. Every endpoint is subjected to automated integration test suites and mobile speed audits before cutover.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Live Stripe checkout with verified webhook signature handling</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Automated integration tests running across all edge cases</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Mobile performance verification ensuring &lt; 800ms load speed</span>
                </div>
              </div>
            </div>

            {/* Right: Visual Artifact - Test Suite Terminal */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/70">
                  <div className="flex items-center gap-2">
                    <Terminal className="size-4 text-slate-600" />
                    <span className="font-mono text-[11.5px] text-slate-600">pipeline-verification.sh</span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    48 Passed
                  </span>
                </div>
                <div className="p-5 font-mono text-[12px] leading-relaxed text-slate-700 bg-white space-y-2">
                  <div className="flex items-center justify-between text-slate-900 font-semibold pb-1 border-b border-slate-100">
                    <span>Automated Pre-Flight Check</span>
                    <span>Status</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">✓ Database query plan latency (&lt; 28ms)</span>
                    <span className="text-emerald-600 font-bold">PASS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">✓ Stripe payment webhook HMAC signature</span>
                    <span className="text-emerald-600 font-bold">PASS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">✓ SQL parameterized query sanitization</span>
                    <span className="text-emerald-600 font-bold">PASS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">✓ Responsive viewport audit (iOS / Android)</span>
                    <span className="text-emerald-600 font-bold">PASS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">✓ SSL / TLS 1.3 encryption handshake</span>
                    <span className="text-emerald-600 font-bold">PASS</span>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between font-sans text-[12px] text-slate-600">
                  <span>Zero regressions permitted before cutover</span>
                  <span className="font-mono text-emerald-600 font-semibold">100% Green Pipeline</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Visual Artifact - Ownership Vault (order-2 on mobile, order-1 on lg) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/70">
                  <div className="flex items-center gap-2">
                    <KeyRound className="size-4 text-[#6336C5]" />
                    <span className="font-mono text-[11.5px] text-slate-600">IP Transfer &amp; Credentials Vault</span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-[#6336C5] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                    Transferred
                  </span>
                </div>
                <div className="p-6 bg-white space-y-4 font-sans text-[13.5px]">
                  <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">Repository Rights</span>
                      <span className="font-semibold text-slate-900">github.com/your-org/production</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#059669] font-bold">100% Transferred</span>
                  </div>
                  <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">Cloud Hosting &amp; DB</span>
                      <span className="font-semibold text-slate-900">AWS / Vercel / Cloudflare</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#059669] font-bold">Your Billing</span>
                  </div>
                  <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">Domain &amp; SSL</span>
                      <span className="font-semibold text-slate-900">yourdomain.com</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#059669] font-bold">Live &amp; Secure</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[12.5px]">
                    <span className="text-slate-600">Post-Launch Warranty</span>
                    <span className="font-mono font-bold text-slate-950">30 Days Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content (order-1 on mobile, order-2 on lg) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                  Step 04 //
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                  Launch Day &amp; Beyond
                </span>
              </div>

              <h2 className="font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight leading-snug">
                Production Cutover &amp; 100% Full Handover
              </h2>

              <p className="font-sans text-[15.5px] text-slate-600 leading-relaxed">
                We deploy your system live to your custom domain with SSL, configure DNS routing, and transfer all private GitHub repositories, cloud accounts, and environment keys directly to you. Plus 30 days of proactive bug warranty.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Production DNS cutover with SSL encryption and global CDN caching</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>100% full transfer of private Git repo and cloud hosting accounts</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-slate-800">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>30-day post-launch warranty covering proactive server monitoring and free bug fixes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Communication Standards (How We Work With You) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11.5px] font-semibold uppercase tracking-wider text-slate-400 block">
              Transparency
            </span>
            <h2 className="mt-1.5 font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
              How we communicate during the build.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">
              No bloated meetings or disappearing acts. A direct, asynchronous communication model designed for speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:shadow-xs transition-all">
              <div className="size-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4 shadow-2xs">
                <MessageSquare className="size-5 text-[#6336C5]" />
              </div>
              <h3 className="font-sans text-[17px] font-bold text-slate-950">
                Direct Engineer Channel
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                You get a private Slack or shared async channel directly with the senior developer building your system. No account managers playing telephone.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:shadow-xs transition-all">
              <div className="size-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4 shadow-2xs">
                <Video className="size-5 text-[#6336C5]" />
              </div>
              <h3 className="font-sans text-[17px] font-bold text-slate-950">
                Weekly Video Demos
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                Every Friday, you receive a 3–5 minute recorded video walkthrough showing newly completed features running live in staging. Zero wasted meeting hours.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:shadow-xs transition-all">
              <div className="size-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4 shadow-2xs">
                <GitBranch className="size-5 text-[#6336C5]" />
              </div>
              <h3 className="font-sans text-[17px] font-bold text-slate-950">
                Live Commit Visibility
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                You have real-time access to the Git repository. You can inspect commit histories, PR reviews, and automated CI/CD builds at any point in the cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Practical FAQs */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11.5px] font-semibold uppercase tracking-wider text-slate-400 block">
              Clear Answers
            </span>
            <h2 className="mt-1.5 font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
              Frequently asked execution questions.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">
              Straightforward details on scope adjustments, post-launch support, and payment milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <h3 className="font-sans text-[16px] font-bold text-slate-950 flex items-start gap-2.5 leading-snug">
                <span className="text-[#6336C5] font-mono text-[14px] mt-0.5">Q.</span>
                <span>What happens if we need to adjust features during the build?</span>
              </h3>
              <p className="mt-3 font-sans text-[14px] text-slate-600 leading-relaxed pl-5 border-l-2 border-slate-200">
                We work with flexibility. If an adjustment fits within the current milestone, we adapt it immediately. If it involves a substantial new feature, we provide an upfront fixed quote for the add-on before writing any code, ensuring zero surprise billing.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <h3 className="font-sans text-[16px] font-bold text-slate-950 flex items-start gap-2.5 leading-snug">
                <span className="text-[#6336C5] font-mono text-[14px] mt-0.5">Q.</span>
                <span>Do we need technical experience to manage the project?</span>
              </h3>
              <p className="mt-3 font-sans text-[14px] text-slate-600 leading-relaxed pl-5 border-l-2 border-slate-200">
                Not at all. We handle the entire engineering lifecycle—cloud hosting, DNS, database architecture, and security configurations. We also provide an intuitive admin dashboard and recorded walkthroughs so your team can manage daily operations with ease.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <h3 className="font-sans text-[16px] font-bold text-slate-950 flex items-start gap-2.5 leading-snug">
                <span className="text-[#6336C5] font-mono text-[14px] mt-0.5">Q.</span>
                <span>What happens if an unexpected bug appears after launch?</span>
              </h3>
              <p className="mt-3 font-sans text-[14px] text-slate-600 leading-relaxed pl-5 border-l-2 border-slate-200">
                Every project includes a 30-day post-launch warranty at zero extra cost. If any issue arises or an edge case behaves unexpectedly, our engineering team fixes it immediately.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <h3 className="font-sans text-[16px] font-bold text-slate-950 flex items-start gap-2.5 leading-snug">
                <span className="text-[#6336C5] font-mono text-[14px] mt-0.5">Q.</span>
                <span>How are milestone payments structured?</span>
              </h3>
              <p className="mt-3 font-sans text-[14px] text-slate-600 leading-relaxed pl-5 border-l-2 border-slate-200">
                Payments are tied strictly to verified milestones: an initial deposit upon blueprint sign-off, a progress milestone upon staging environment review, and the final balance only upon successful production cutover and code handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Action Prompt */}
      <section className="py-20 sm:py-28 bg-white text-center border-t border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-sans text-[30px] sm:text-[40px] font-bold text-slate-950 tracking-tight leading-tight">
              Ready to plan your build?
            </h2>

            <p className="mt-3.5 font-sans text-[16px] sm:text-[17px] text-slate-600 leading-relaxed">
              Tell us what you want to achieve. We will review your requirements and provide a clear technical blueprint and fixed quote within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-[15px] h-[48px] px-8 rounded-full shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 active:scale-[0.98]"
              >
                <span>Start with Step 01</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary text-[15px] h-[48px] px-8 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all active:scale-[0.98]"
              >
                <span>View Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Process
