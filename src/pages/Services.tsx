import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe2,
  Code2,
  Gauge,
  Clock,
  KeyRound,
  Headphones,
} from 'lucide-react'

const packages = [
  {
    badge: 'Flagship Package',
    icon: Globe2,
    title: 'The Complete Online Presence & Business Engine',
    idealFor: 'Service businesses, clinics, restaurants, barbershops, studios & boutique brands',
    description:
      'Everything you need to look world-class, get found by customers, and take bookings or orders automatically—all in one place.',
    features: [
      'Bespoke, lightning-fast custom web design (zero clunky templates or WordPress bloat)',
      'Automated online booking & appointment system with email/SMS confirmations',
      'Direct card & mobile payment checkout (Stripe) with zero platform middleman fees',
      'Google SEO optimization, local search visibility, domain, and fast cloud hosting',
      'Mobile-first responsive layout tested across iPhones, Androids, tablets, and desktops',
    ],
    timeline: 'Delivered in 2 to 3 weeks',
    deliverable: 'Complete live website, custom domain, payment integration, and staff walkthrough.',
  },
  {
    badge: 'Product Engineering',
    icon: Code2,
    title: 'Custom Web Applications & SaaS Platforms',
    idealFor: 'Founders, startups, and companies launching a new digital product',
    description:
      'Turn your software concept into a launch-ready, production-grade web application built to handle real customer volume from day one.',
    features: [
      'Interactive user interface built in modern React 19, TypeScript, and Tailwind CSS',
      'Secure user authentication, email verification, session security, and profile management',
      'Subscription billing, recurring plans, invoices, and automated payment webhooks',
      'Fast, reliable Python/Node backend with scalable PostgreSQL database architecture',
      'Automated deployment pipeline on AWS/Vercel with automated daily database backups',
    ],
    timeline: 'Delivered in 4 to 8 weeks',
    deliverable: '100% full source code ownership, private Git repo, and deployment credentials.',
  },
  {
    badge: 'Operations & Automation',
    icon: Gauge,
    title: 'Custom Operations Hubs & Admin Dashboards',
    idealFor: 'Growing businesses drowning in messy spreadsheets, manual entry, and disjointed tools',
    description:
      'A tailor-made internal control center that connects your business data, automates repetitive work, and gives you complete operational clarity.',
    features: [
      'Direct connection to your production databases, inventory, orders, or customer records',
      'Interactive tables with instant search, multi-column filters, and one-click CSV export',
      'Role-based staff permissions so team members only access what they are authorized to see',
      'Automated status updates, internal notes, and real-time activity audit logs',
      'Zero monthly per-seat licensing fees—your tool, on your domain, forever',
    ],
    timeline: 'Delivered in 3 to 5 weeks',
    deliverable: 'Private admin dashboard deployed on your domain with full documentation.',
  },
]

const differentiators = [
  {
    icon: KeyRound,
    title: 'You Own 100% of Everything',
    desc: 'All source code, design assets, domains, and cloud accounts are transferred directly to you. No proprietary rental traps or platform lock-in.',
  },
  {
    icon: Clock,
    title: 'Fixed Price & Guaranteed Delivery',
    desc: 'We agree on the exact scope, budget, and delivery date upfront. No ambiguous estimates or open-ended hourly billing surprises.',
  },
  {
    icon: Zap,
    title: 'Direct Builder Access',
    desc: 'You communicate directly with the engineer building your platform—no middleman sales reps or account managers playing telephone.',
  },
  {
    icon: Headphones,
    title: '30-Day Post-Launch Support',
    desc: 'We monitor your system after go-live and immediately fix any unexpected bugs or questions at zero additional charge.',
  },
]

const steps = [
  {
    num: '01',
    name: 'Blueprint & Scope',
    detail: 'We review your goals, map out the customer workflow, and lock in a fixed price and timeline within 48 hours.',
  },
  {
    num: '02',
    name: 'Build & Live Previews',
    detail: 'We build your system with weekly clickable staging previews. You test real, functional software at every checkpoint.',
  },
  {
    num: '03',
    name: 'Launch & Handoff',
    detail: 'We deploy to your domain, test all payments and forms in production, transfer all credentials, and ensure you are 100% independent.',
  },
]

export function Services() {
  useSeo({
    title: 'Services & Turnkey Systems',
    description:
      'Complete online presence, custom web applications, and operational dashboards engineered by ArixPro. Fixed price, fast delivery, 100% code ownership.',
    path: '/services',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Clear, Confident Hero */}
      <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-slate-200 overflow-hidden">
        {/* Subtle ambient light top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-transparent blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 sm:px-8 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-[12.5px] font-medium text-slate-700 mb-6 shadow-xs">
            <Sparkles className="size-3.5 text-[#6336C5]" />
            <span>The Turnkey Digital Partner</span>
          </div>

          <h1 className="font-sans text-[36px] sm:text-[50px] lg:text-[58px] font-bold text-slate-950 tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Everything your business needs online. Engineered as one system.
          </h1>

          <p className="mt-5 font-sans text-[17px] sm:text-[20px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
            No piecing together separate designers, slow freelancers, or clunky page-builders. We design, build, and deploy custom web platforms that run your business automatically.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-[15px] h-[48px] px-8 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <span>Get a Fixed-Price Quote</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/work"
              className="btn-secondary text-[15px] h-[48px] px-8 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
            >
              <span>See Shipped Work</span>
            </Link>
          </div>

          {/* Quick Value Pillars */}
          <div className="mt-12 pt-8 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left font-sans text-[13px] text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#059669] shrink-0" />
              <span>Sub-second speed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#059669] shrink-0" />
              <span>Built-in payments &amp; booking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#059669] shrink-0" />
              <span>Fixed quote &amp; timeline</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#059669] shrink-0" />
              <span>100% code ownership</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Concrete Offerings */}
      <section className="py-16 sm:py-24 bg-slate-50/50">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 space-y-10 sm:space-y-12">
          <div className="max-w-2xl">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              What We Build
            </span>
            <h2 className="mt-2.5 font-sans text-[28px] sm:text-[38px] font-bold text-slate-950 tracking-tight">
              Three clear, end-to-end solutions.
            </h2>
            <p className="mt-2.5 font-sans text-[16px] text-slate-600 leading-relaxed">
              Every build is customized to your operations, built from scratch, and delivered turnkey.
            </p>
          </div>

          {packages.map((pkg, idx) => {
            const IconComponent = pkg.icon
            return (
              <article
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-xs hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#6336C5] shrink-0 mt-1">
                      <IconComponent className="size-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6336C5] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                        {pkg.badge}
                      </span>
                      <h3 className="mt-2 font-sans text-[22px] sm:text-[26px] font-bold text-slate-950 tracking-tight">
                        {pkg.title}
                      </h3>
                      <p className="mt-1 font-sans text-[13.5px] font-medium text-slate-500">
                        Ideal for: {pkg.idealFor}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-left md:text-right">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
                      Typical Turnaround
                    </span>
                    <span className="font-sans text-[15px] font-bold text-slate-900">
                      {pkg.timeline}
                    </span>
                  </div>
                </div>

                <p className="mt-6 font-sans text-[15.5px] leading-relaxed text-slate-700">
                  {pkg.description}
                </p>

                {/* Features Included */}
                <div className="mt-6 space-y-3">
                  <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    What is included in the build:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                        <span className="font-sans text-[13.5px] text-slate-800 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Footer */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-sans text-[13px] text-slate-600">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 mr-2">
                      Handover:
                    </span>
                    {pkg.deliverable}
                  </div>
                  <Link
                    to="/contact"
                    className="btn-secondary text-[13.5px] h-[40px] px-5 rounded-full border border-slate-200 inline-flex items-center gap-1.5 shrink-0"
                  >
                    <span>Inquire about this</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* 3. The Unfair Advantage (Why ArixPro) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              The ArixPro Difference
            </span>
            <h2 className="mt-2.5 font-sans text-[28px] sm:text-[38px] font-bold text-slate-950 tracking-tight">
              Why business owners choose us over traditional agencies.
            </h2>
            <p className="mt-3 font-sans text-[16px] text-slate-600 leading-relaxed">
              No junior handoffs, no runaway budgets, and no proprietary vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {differentiators.map((diff, dIdx) => {
              const IconComp = diff.icon
              return (
                <div
                  key={dIdx}
                  className="p-7 rounded-2xl border border-slate-200/90 bg-slate-50/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="size-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6336C5] shadow-xs mb-4">
                      <IconComp className="size-5" />
                    </div>
                    <h3 className="font-sans text-[18px] font-bold text-slate-950">
                      {diff.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-[14px] leading-relaxed text-slate-600">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Simple 3-Step Process */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500 font-semibold">
              The Journey
            </span>
            <h2 className="mt-2 font-sans text-[26px] sm:text-[32px] font-bold text-slate-950 tracking-tight">
              From concept to live in 3 steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st) => (
              <div key={st.num} className="space-y-2.5">
                <span className="font-mono text-[12px] font-bold text-[#6336C5]">
                  Step {st.num} //
                </span>
                <h3 className="font-sans text-[18px] font-bold text-slate-950">
                  {st.name}
                </h3>
                <p className="font-sans text-[14px] text-slate-600 leading-relaxed">
                  {st.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clear, Direct CTA */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-sans text-[28px] sm:text-[36px] font-bold text-slate-950 tracking-tight">
            Ready to upgrade your business online?
          </h2>
          <p className="mt-3.5 font-sans text-[16px] text-slate-600 leading-relaxed">
            Tell us about your business or what you want to build. We will reply within 24 hours with an honest technical assessment, clear scope, and fixed-price quote.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-[15px] h-[50px] px-9 rounded-full shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Get Your Fixed Quote</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
