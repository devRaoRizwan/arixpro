import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock,
  Check,
  ArrowUpRight,
  Laptop,
  Server,
  ShieldCheck,
  Video,
  KeyRound,
} from 'lucide-react'

type ProcessPhaseId = 'discovery' | 'build' | 'testing' | 'launch'

interface ProcessPhase {
  id: ProcessPhaseId
  num: string
  name: string
  phase: string
  duration: string
  headline: string
  summary: string
  actions: string[]
  clientExperience: {
    reviewFormat: string
    whatYouSee: string
    communication: string
  }
}

const PHASES: Record<ProcessPhaseId, ProcessPhase> = {
  discovery: {
    id: 'discovery',
    num: '01',
    name: 'Blueprint & Scope',
    phase: 'Days 1 – 3',
    duration: '3 Days',
    headline: 'Technical discovery, schema design & fixed-price quote',
    summary:
      'We map out your user flows, database architecture, and integration points before writing a single line of application code.',
    actions: [
      '30-minute discovery session to understand your business operations and targets',
      'Entity-Relationship Diagram (ERD) defining exact database tables and relationships',
      'OpenAPI specification detailing all endpoints, authentication, and webhooks',
      'Guaranteed fixed-price proposal and delivery schedule with milestone dates',
    ],
    clientExperience: {
      reviewFormat: 'Written blueprint document & technical architecture walkthrough',
      whatYouSee: 'Visual entity diagrams, user flow map, and agreed milestone timeline',
      communication: 'Direct kickoff call with your lead engineer and shared async channel',
    },
  },
  build: {
    id: 'build',
    num: '02',
    name: 'Core Build & Staging',
    phase: 'Weeks 1 – 2',
    duration: '1 – 2 Weeks',
    headline: 'Database setup, auth models & weekly clickable staging previews',
    summary:
      'We build your core infrastructure with automated CI/CD deployments to a private, password-protected staging URL.',
    actions: [
      'Relational database provisioning in PostgreSQL with strict migration scripts',
      'User authentication, session security, and role-based permissions tiers',
      'Responsive frontend component development in React 19, TypeScript & Tailwind',
      'Automated deployment pipeline updating your private staging environment on every commit',
    ],
    clientExperience: {
      reviewFormat: 'Clickable staging link accessible from your phone or browser',
      whatYouSee: 'Real, working software you can log into and test—never static slide decks',
      communication: 'Weekly progress summary with video demo and direct engineer updates',
    },
  },
  testing: {
    id: 'testing',
    num: '03',
    name: 'Integrations & Pre-Flight',
    phase: 'Weeks 2 – 4',
    duration: '1 – 2 Weeks',
    headline: 'Payment gateways, notifications & automated security test suites',
    summary:
      'We wire up production payments, external APIs, and run automated integration test suites to eliminate bugs before cutover.',
    actions: [
      'Stripe checkout, subscription recurring billing, invoices, and webhook handlers',
      'Automated email/SMS notifications, background worker queues, and calendar sync',
      'Automated test suites covering unit logic, API endpoints, and edge cases',
      'Performance audit ensuring sub-second load times on mobile 4G/5G connections',
    ],
    clientExperience: {
      reviewFormat: 'End-to-end workflow walkthrough with test card payment verification',
      whatYouSee: 'Complete feature set running with live webhooks and automated alerts',
      communication: 'Collaborative bug verification and feedback polish in your private channel',
    },
  },
  launch: {
    id: 'launch',
    num: '04',
    name: 'Launch & Full Handover',
    phase: 'Launch Day & Beyond',
    duration: 'Launch Day + 30 Days',
    headline: 'Production deployment, 100% IP transfer & 30-day bug warranty',
    summary:
      'We deploy your system live to production, configure custom domains and SSL, transfer all credentials, and support you for 30 days.',
    actions: [
      'Production DNS cutover, custom domain routing, SSL certificate, and CDN caching',
      '100% full transfer of private GitHub repositories, cloud accounts, and API keys',
      'Recorded staff walkthrough session and operational runbook for your team',
      '30-day post-launch warranty covering proactive server monitoring and free bug fixes',
    ],
    clientExperience: {
      reviewFormat: 'Production go-live verification and complete ownership sign-off',
      whatYouSee: 'Your platform running live for real customers with zero vendor lock-in',
      communication: 'Dedicated technical escalation channel for immediate assistance',
    },
  },
}

const commitments = [
  {
    icon: Laptop,
    title: 'Weekly Staging Demos (No Slide Decks)',
    desc: 'You test functional software in your browser every 7 days. We demonstrate real buttons, forms, and database queries—never static mockups.',
  },
  {
    icon: Video,
    title: 'Direct Senior Engineer Access',
    desc: 'You communicate directly with the engineer writing your code via a shared async channel. No junior interns or middleman account managers.',
  },
  {
    icon: Clock,
    title: 'Guaranteed Fixed-Price Milestones',
    desc: 'Every project is scoped upfront with a fixed delivery budget. If an unexpected technical edge case takes longer to solve, we absorb the cost.',
  },
  {
    icon: KeyRound,
    title: '100% Source Code & Asset Ownership',
    desc: 'All Git repositories, cloud deployment accounts, domain records, and database keys belong to you from day one. Zero proprietary lock-in.',
  },
]

const faqs = [
  {
    question: 'What happens if we need to adjust features during the build?',
    answer:
      'We work with flexibility. If an adjustment fits within the current milestone, we adapt it immediately. If it involves a substantial new feature, we provide an upfront fixed quote for the add-on before writing any code, ensuring no surprise billing.',
  },
  {
    question: 'Do we need technical experience to manage the project?',
    answer:
      'Not at all. We handle the entire engineering lifecycle—cloud hosting, DNS, database architecture, and security configurations. We also provide an intuitive admin dashboard and recorded video walkthroughs so your team can manage daily operations with ease.',
  },
  {
    question: 'What happens if an unexpected bug appears after launch?',
    answer:
      'Every project includes a 30-day post-launch warranty at zero extra cost. If any issue arises or an edge case behaves unexpectedly, our engineering team fixes it immediately.',
  },
  {
    question: 'How are milestone payments structured?',
    answer:
      'Payments are tied strictly to verified milestones: an initial deposit upon blueprint sign-off, a progress milestone upon staging environment review, and the final balance only upon successful production cutover and code handover.',
  },
]

export function Process() {
  const [activePhase, setActivePhase] = useState<ProcessPhaseId>('discovery')
  const current = PHASES[activePhase]

  useSeo({
    title: 'Engineering Process & Delivery Lifecycle',
    description:
      'How ArixPro builds and ships software: from technical discovery and weekly staging builds to automated testing and 100% code handover.',
    path: '/process',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header with Gliding Phase Switcher */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 overflow-hidden">
        {/* Subtle ambient light gradient at top (AI Fiesta Style) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-gradient-to-b from-purple-100/40 via-purple-50/15 to-transparent blur-[110px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-slate-950 tracking-tight leading-[1.12]">
              How we build, test, and ship.
            </h1>
            <p className="mt-4 font-sans text-[17px] sm:text-[19px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              A transparent engineering lifecycle with weekly staging demos, zero technical debt, and 100% full source code ownership on launch day.
            </p>
          </div>

          {/* Smooth Gliding Phase Capsule Switcher */}
          <div className="mt-10 inline-flex flex-wrap justify-center p-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 backdrop-blur-md shadow-xs max-w-full relative">
            {(Object.keys(PHASES) as ProcessPhaseId[]).map((phaseKey) => {
              const item = PHASES[phaseKey]
              const isSelected = activePhase === phaseKey

              return (
                <button
                  key={phaseKey}
                  type="button"
                  onClick={() => setActivePhase(phaseKey)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-sans text-[13.5px] sm:text-[14px] font-medium transition-colors duration-200 cursor-pointer select-none ${
                    isSelected
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProcessPhase"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white border border-slate-200/90 shadow-xs"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span
                      className={`font-mono text-[11.5px] font-bold transition-colors ${
                        isSelected ? 'text-[#6336C5]' : 'text-slate-400'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span>{item.name}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. Interactive Phase Detail Card */}
      <section className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-11 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.05)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Top Phase Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                        Phase {current.num} //
                      </span>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                        {current.phase}
                      </span>
                    </div>

                    <h2 className="font-sans text-[24px] sm:text-[30px] font-bold text-slate-950 tracking-tight">
                      {current.headline}
                    </h2>
                    <p className="mt-2.5 font-sans text-[15px] text-slate-600 leading-relaxed max-w-3xl">
                      {current.summary}
                    </p>
                  </div>

                  {/* Duration Pill */}
                  <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/20 border border-slate-200 text-left lg:text-right min-w-[200px]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block">
                      Phase Duration
                    </span>
                    <span className="font-sans text-[19px] font-bold text-slate-950 flex items-center gap-1.5 lg:justify-end mt-0.5">
                      <Clock className="size-4.5 text-[#6336C5]" />
                      <span>{current.duration}</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#059669] font-semibold block mt-0.5">
                      Milestone Verified
                    </span>
                  </div>
                </div>

                {/* 2 Main Columns: Engineering Actions & Client Experience */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column (7 cols): Engineering Actions */}
                  <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-50/80 to-white border border-slate-200/80 flex flex-col justify-between shadow-2xs">
                    <div>
                      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-200/70">
                        <Server className="size-4 text-slate-800" />
                        <h3 className="font-sans text-[15px] font-bold text-slate-950">
                          Engineering Deliverables
                        </h3>
                      </div>

                      <ul className="space-y-3.5">
                        {current.actions.map((act, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[14px] text-slate-700 leading-snug">
                            <div className="size-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 shadow-2xs">
                              <Check className="size-2.5 stroke-[3]" />
                            </div>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column (5 cols): Client Experience & Communication */}
                  <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-purple-50/25 to-white border border-purple-200/70 flex flex-col justify-between shadow-2xs">
                    <div>
                      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-purple-200/60">
                        <ShieldCheck className="size-4 text-[#6336C5]" />
                        <h3 className="font-sans text-[15px] font-bold text-slate-950">
                          Your Transparency &amp; Review
                        </h3>
                      </div>

                      <div className="space-y-4 font-sans">
                        <div>
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                            Review Format
                          </span>
                          <p className="mt-1 text-[13.5px] font-medium text-slate-900 leading-snug">
                            {current.clientExperience.reviewFormat}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-purple-100">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                            What You See &amp; Test
                          </span>
                          <p className="mt-1 text-[13.5px] font-medium text-slate-900 leading-snug">
                            {current.clientExperience.whatYouSee}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-purple-100">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                            Communication Channel
                          </span>
                          <p className="mt-1 text-[13.5px] font-medium text-slate-900 leading-snug">
                            {current.clientExperience.communication}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-sans text-[13.5px] text-slate-600">
                    <span className="font-semibold text-slate-900">Guaranteed Milestones: </span>
                    You only approve and pay milestones when working software is demonstrated in staging.
                  </div>
                  <Link
                    to="/contact"
                    className="btn-primary text-[14px] h-[44px] px-7 rounded-full inline-flex items-center gap-2 shrink-0 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Start with Phase 01</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. Delivery Commitments (Why this works without headaches) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11.5px] font-semibold uppercase tracking-wider text-slate-400 block">
              Core Commitments
            </span>
            <h2 className="mt-1.5 font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
              Engineering standards that protect your project.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">
              Every engagement is governed by four clear principles designed to eliminate budget surprises and ghosting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {commitments.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4 shadow-2xs">
                      <IconComp className="size-5" />
                    </div>
                    <h3 className="font-sans text-[17px] font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Practical Questions (Real Client FAQs) */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
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
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs"
              >
                <h3 className="font-sans text-[16px] font-bold text-slate-950 flex items-start gap-2.5 leading-snug">
                  <span className="text-[#6336C5] font-mono text-[14px] mt-0.5">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-3 font-sans text-[14px] text-slate-600 leading-relaxed pl-5 border-l-2 border-slate-200">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Minimal Direct Action Prompt */}
      <section className="py-20 sm:py-28 bg-white text-center">
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
                <span>Start Phase 01</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary text-[15px] h-[48px] px-8 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all active:scale-[0.98]"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Process
