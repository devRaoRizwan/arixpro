import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Store,
  Layers,
  Gauge,
  ShoppingBag,
  Check,
  Minus,
  ArrowUpRight,
  Clock,
  Laptop,
  Server,
  ShieldCheck,
} from 'lucide-react'

type ProjectCategory = 'local-business' | 'saas-product' | 'internal-ops' | 'ecommerce'

interface ProjectBlueprint {
  id: ProjectCategory
  icon: typeof Store
  name: string
  label: string
  forWho: string
  summary: string
  timeline: string
  frontend: string[]
  backend: string[]
  handover: string[]
}

const BLUEPRINTS: Record<ProjectCategory, ProjectBlueprint> = {
  'local-business': {
    id: 'local-business',
    icon: Store,
    name: 'Local Business & Booking',
    label: 'Barbers, Restaurants, Clinics & Service Brands',
    forWho: 'Businesses that need a fast mobile web presence and automated customer booking.',
    summary:
      'A custom high-speed website that captures leads, takes appointments, and collects payments 24/7 without template bloat.',
    timeline: '2 – 3 Weeks',
    frontend: [
      'Bespoke mobile-first storefront (zero template or plugin lag)',
      'Real-time appointment & table booking calendar',
      'One-tap Apple Pay, Google Pay, and Stripe credit card checkout',
      'Services menu, pricing tiers, customer reviews, and FAQ',
      'Sub-second page load times on mobile connections',
    ],
    backend: [
      'Automated SMS & email booking confirmations to stop no-shows',
      'Two-way sync with Google Calendar or your existing setup',
      'Direct Stripe payment payouts straight to your business bank',
      'Customer database with appointment history and notes',
    ],
    handover: [
      'Deployed on your custom domain with SSL encryption',
      'Google Maps profile and local search indexing setup',
      '100% full ownership of domain, code, and accounts',
      '30-day post-launch support and staff walkthrough session',
    ],
  },
  'saas-product': {
    id: 'saas-product',
    icon: Layers,
    name: 'SaaS & Web Applications',
    label: 'Startups, Founders & Digital Products',
    forWho: 'Founders building a web application, customer portal, or subscription product.',
    summary:
      'Full-stack architecture from day one. Clean React/TypeScript frontend, robust Python/Node backend, auth, and Stripe billing.',
    timeline: '4 – 8 Weeks',
    frontend: [
      'Responsive UI built in modern React 19, TypeScript & Tailwind',
      'Customer onboarding, passwordless login, and OAuth (Google/GitHub)',
      'Multi-tier subscription billing portal (upgrade, downgrade, cancel)',
      'Account settings, team invites, and user profiles',
    ],
    backend: [
      'Asynchronous REST & WebSocket backend services (Python / Node.js)',
      'Relational PostgreSQL database architecture with strict migrations',
      'Stripe webhook processor for recurring plans and invoices',
      'Automated background queues and Redis caching for low latency',
    ],
    handover: [
      'Complete private Git repository transferred directly to you',
      'Automated CI/CD deployment on AWS, Vercel, or Cloudflare',
      'Interactive OpenAPI / Swagger documentation for all endpoints',
      'Unit and integration test suites verifying critical workflows',
    ],
  },
  'internal-ops': {
    id: 'internal-ops',
    icon: Gauge,
    name: 'Internal Tools & Dashboards',
    label: 'Operations, Inventory & Team Hubs',
    forWho: 'Companies drowning in manual spreadsheets, copy-pasting, and disjointed tools.',
    summary:
      'A private internal operations portal built directly on your data to manage inventory, orders, and team workflows.',
    timeline: '3 – 5 Weeks',
    frontend: [
      'Custom admin panel with real-time operational search & filtering',
      'Interactive data tables with column filters and CSV export',
      'Role-based permissions (Admin, Manager, Staff)',
      'Status change workflows, internal order notes, and audit logs',
    ],
    backend: [
      'Direct secure connection to your SQL databases, Shopify, or APIs',
      'Automated background sync jobs that keep all records updated',
      'Strict input validation to prevent duplicate or corrupt data',
      'Webhook listeners that trigger notifications when key events happen',
    ],
    handover: [
      'Private internal web tool hosted securely behind authentication',
      'Zero monthly per-seat licensing fees (your software, forever)',
      'Operational runbook and documentation for your internal team',
      '30-day monitoring and bug fix warranty',
    ],
  },
  ecommerce: {
    id: 'ecommerce',
    icon: ShoppingBag,
    name: 'Custom E-Commerce',
    label: 'Independent Brands & Direct-to-Consumer',
    forWho: 'Brands that want a unique, fast online store without paying 10% platform cuts or plugin fees.',
    summary:
      'High-performance custom storefronts engineered for fast checkout, mobile conversion, and inventory sync.',
    timeline: '3 – 6 Weeks',
    frontend: [
      'Ultra-fast product catalog, search, and dynamic filtering',
      'Frictionless slide-out cart and accelerated checkout',
      'Customer account portal with order tracking and saved addresses',
      'Mobile-optimized imagery and product video showcases',
    ],
    backend: [
      'Secure Stripe or Shopify headless checkout integration',
      'Real-time inventory decrementing and out-of-stock management',
      'Automated order confirmation emails and shipping webhook sync',
      'Custom promotional discount rules and coupon code validator',
    ],
    handover: [
      'Production storefront live on your domain with fast CDN caching',
      'Payment gateway setup verified in test and live mode',
      'Full source code repository ownership transferred to your team',
      'Full staff walkthrough on adding products and managing orders',
    ],
  },
}

const comparisonRows = [
  {
    feature: 'Source Code & IP Rights',
    detail: 'Legal ownership of all codebase assets',
    arixpro: '100% full transfer on day one',
    agency: 'Often locked behind licensing contracts',
    freelancer: 'Transferred, but undocumented and fragile',
    builder: 'Zero ownership (rented platform hostage)',
  },
  {
    feature: 'Page Load Speed',
    detail: 'Real-world speed on mobile 4G/5G connections',
    arixpro: 'Sub-second (< 800ms custom code)',
    agency: '2.5s – 4.5s (heavy corporate frameworks)',
    freelancer: 'Unpredictable (varies by freelancer)',
    builder: '3.5s – 6.0s (theme & plugin bloat)',
  },
  {
    feature: 'Pricing & Budget Certainty',
    detail: 'How projects are quoted and billed',
    arixpro: 'Guaranteed fixed quote with milestone delivery',
    agency: '$25k+ retainers with open-ended hours',
    freelancer: 'Hourly billing or frequent scope creep',
    builder: 'Monthly subscription + transaction cuts',
  },
  {
    feature: 'Communication & Team',
    detail: 'Who you actually plan and build with',
    arixpro: 'Direct contact with senior engineer',
    agency: 'Account managers and sales intermediaries',
    freelancer: 'Direct, but risk of ghosting or delays',
    builder: 'Self-service forums and ticket queues',
  },
  {
    feature: 'Custom Business Logic',
    detail: 'Tailoring to your exact operations',
    arixpro: 'Bespoke code tailored to your exact workflows',
    agency: 'Possible, but takes 4+ months of spec meetings',
    freelancer: 'Limited to their individual personal skillset',
    builder: 'Strictly limited to third-party app plugins',
  },
  {
    feature: 'Post-Launch Reliability',
    detail: 'Support after your system goes live',
    arixpro: '30-day bug warranty & proactive monitoring',
    agency: 'Requires expensive ongoing monthly contract',
    freelancer: 'Usually unavailable once final invoice is paid',
    builder: 'You are on your own when plugins break',
  },
]

export function Services() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('local-business')
  const current = BLUEPRINTS[activeTab]

  useSeo({
    title: 'Services & System Blueprints',
    description:
      'What ArixPro builds: local business booking engines, custom SaaS platforms, internal tools, and e-commerce systems with fixed pricing and 100% code ownership.',
    path: '/services',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header with Gliding Segmented Control */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 overflow-hidden">
        {/* Subtle ambient light gradient at top (AI Fiesta Style) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-gradient-to-b from-purple-100/40 via-purple-50/15 to-transparent blur-[110px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-slate-950 tracking-tight leading-[1.12]">
              Software we build &amp; deliver.
            </h1>
            <p className="mt-4 font-sans text-[17px] sm:text-[19px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              From local business booking engines to full-stack SaaS and internal operations tools. Custom code, fixed pricing, and 100% full ownership.
            </p>
          </div>

          {/* Smooth Gliding Segmented Pill Switcher (Matches Navbar Capsule) */}
          <div className="mt-10 inline-flex flex-wrap justify-center p-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 backdrop-blur-md shadow-xs max-w-full relative">
            {(Object.keys(BLUEPRINTS) as ProjectCategory[]).map((catKey) => {
              const item = BLUEPRINTS[catKey]
              const Icon = item.icon
              const isSelected = activeTab === catKey

              return (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setActiveTab(catKey)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-sans text-[13.5px] sm:text-[14px] font-medium transition-colors duration-200 cursor-pointer select-none ${
                    isSelected
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeServiceTab"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white border border-slate-200/90 shadow-xs"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon
                      className={`size-4 transition-colors ${
                        isSelected ? 'text-[#6336C5]' : 'text-slate-500'
                      }`}
                    />
                    <span>{item.name}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. Smoothly Animated Active Blueprint Presentation */}
      <section className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-11 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.05)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Top Bar with Specifications */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="max-w-3xl">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Blueprint Specification
                    </span>
                    <h2 className="mt-1 font-sans text-[24px] sm:text-[30px] font-bold text-slate-950 tracking-tight">
                      {current.label}
                    </h2>
                    <p className="mt-1.5 font-sans text-[14.5px] text-slate-600">
                      <span className="font-semibold text-slate-900">For who: </span>
                      {current.forWho}
                    </p>
                    <p className="mt-3 font-sans text-[15px] text-slate-700 leading-relaxed bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/60 max-w-3xl">
                      {current.summary}
                    </p>
                  </div>

                  {/* Timeline Badge */}
                  <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/20 border border-slate-200 text-left lg:text-right min-w-[200px]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block">
                      Turnaround
                    </span>
                    <span className="font-sans text-[19px] font-bold text-slate-950 flex items-center gap-1.5 lg:justify-end mt-0.5">
                      <Clock className="size-4.5 text-[#6336C5]" />
                      <span>{current.timeline}</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#059669] font-semibold block mt-0.5">
                      Guaranteed Fixed Quote
                    </span>
                  </div>
                </div>

                {/* 3 Balanced Architectural Pillar Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Pillar 1: Customer Frontend */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50/80 to-white border border-slate-200/80 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-all">
                    <div>
                      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-200/70">
                        <div className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-2xs">
                          <Laptop className="size-4" />
                        </div>
                        <div>
                          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-slate-500 block">
                            Pillar 01
                          </span>
                          <h3 className="font-sans text-[14.5px] font-bold text-slate-950">
                            Customer Experience
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {current.frontend.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-slate-700 leading-snug">
                            <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                              <Check className="size-2.5 stroke-[3]" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pillar 2: Business Backend */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50/80 to-white border border-slate-200/80 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-all">
                    <div>
                      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-200/70">
                        <div className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-2xs">
                          <Server className="size-4" />
                        </div>
                        <div>
                          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-slate-500 block">
                            Pillar 02
                          </span>
                          <h3 className="font-sans text-[14.5px] font-bold text-slate-950">
                            Business Engine
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {current.backend.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-slate-700 leading-snug">
                            <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                              <Check className="size-2.5 stroke-[3]" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pillar 3: Launch & Ownership */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-50/25 to-white border border-purple-200/70 flex flex-col justify-between shadow-2xs hover:border-purple-300 transition-all">
                    <div>
                      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-purple-200/60">
                        <div className="size-8 rounded-lg bg-white border border-purple-200 flex items-center justify-center text-[#6336C5] shadow-2xs">
                          <ShieldCheck className="size-4" />
                        </div>
                        <div>
                          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-[#6336C5] block">
                            Pillar 03
                          </span>
                          <h3 className="font-sans text-[14.5px] font-bold text-slate-950">
                            Launch &amp; Ownership
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {current.handover.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-slate-800 leading-snug">
                            <div className="size-4 rounded-full bg-purple-100 text-[#6336C5] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="size-2.5 stroke-[3]" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-sans text-[13.5px] text-slate-600">
                    <span className="font-semibold text-slate-900">Fixed Milestone Pricing: </span>
                    Includes full source code transfer, staging previews, and zero vendor lock-in.
                  </div>
                  <Link
                    to={`/contact?service=${activeTab}`}
                    className="btn-primary text-[14px] h-[44px] px-7 rounded-full inline-flex items-center gap-2 shrink-0 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Request a Scope for this Build</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. Delivery Standards Matrix (Redesigned & Elevated) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          {/* Header */}
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11.5px] font-semibold uppercase tracking-wider text-slate-400 block">
              Standards &amp; Delivery Matrix
            </span>
            <h2 className="mt-1.5 font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
              How our engineering delivery compares.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">
              An objective comparison of custom software engineering versus traditional agencies, freelance outsourcing, and no-code builders.
            </p>
          </div>

          {/* Elevated Table Container */}
          <div className="border border-slate-200/90 rounded-3xl bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans min-w-[780px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800">
                    <th className="py-5 px-6 sm:px-8 font-mono text-[11.5px] uppercase tracking-wider text-slate-500 font-semibold w-[26%]">
                      Capability / Standard
                    </th>

                    {/* ArixPro Column Header */}
                    <th className="py-5 px-6 bg-purple-50/30 border-x border-slate-200/90 w-[26%]">
                      <div className="flex items-center gap-2">
                        <span className="px-3.5 py-1 rounded-full bg-slate-950 text-white font-sans text-[12.5px] font-bold shadow-xs">
                          ArixPro
                        </span>
                        <span className="font-mono text-[10.5px] font-semibold text-[#6336C5] uppercase tracking-wider">
                          Custom Architecture
                        </span>
                      </div>
                    </th>

                    <th className="py-5 px-6 text-slate-700 w-[16%]">
                      <span className="font-sans text-[13.5px] font-bold text-slate-900 block">
                        Traditional Agency
                      </span>
                      <span className="font-sans text-[11.5px] text-slate-500">
                        $25k+ Retainers
                      </span>
                    </th>

                    <th className="py-5 px-6 text-slate-700 w-[16%]">
                      <span className="font-sans text-[13.5px] font-bold text-slate-900 block">
                        Offshore / Freelancer
                      </span>
                      <span className="font-sans text-[11.5px] text-slate-500">
                        Contractors
                      </span>
                    </th>

                    <th className="py-5 px-6 text-slate-700 w-[16%]">
                      <span className="font-sans text-[13.5px] font-bold text-slate-900 block">
                        No-Code / Builders
                      </span>
                      <span className="font-sans text-[11.5px] text-slate-500">
                        Wix / Squarespace
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-[13.5px]">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors duration-150"
                    >
                      {/* Standard Name */}
                      <td className="py-5 px-6 sm:px-8">
                        <span className="font-sans text-[14.5px] font-bold text-slate-950 block">
                          {row.feature}
                        </span>
                        <span className="font-sans text-[12px] text-slate-500 block mt-0.5">
                          {row.detail}
                        </span>
                      </td>

                      {/* ArixPro Column */}
                      <td className="py-5 px-6 bg-purple-50/15 border-x border-slate-200/90">
                        <div className="flex items-start gap-2.5">
                          <div className="size-5 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/80 shadow-2xs">
                            <Check className="size-3 stroke-[2.5]" />
                          </div>
                          <span className="font-sans text-[13.5px] font-semibold text-slate-950 leading-snug">
                            {row.arixpro}
                          </span>
                        </div>
                      </td>

                      {/* Traditional Agency */}
                      <td className="py-5 px-6 text-slate-600">
                        <div className="flex items-start gap-2">
                          <div className="size-4.5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Minus className="size-3 stroke-[2]" />
                          </div>
                          <span className="leading-snug">{row.agency}</span>
                        </div>
                      </td>

                      {/* Freelancers */}
                      <td className="py-5 px-6 text-slate-600">
                        <div className="flex items-start gap-2">
                          <div className="size-4.5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Minus className="size-3 stroke-[2]" />
                          </div>
                          <span className="leading-snug">{row.freelancer}</span>
                        </div>
                      </td>

                      {/* No-Code */}
                      <td className="py-5 px-6 text-slate-600">
                        <div className="flex items-start gap-2">
                          <div className="size-4.5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Minus className="size-3 stroke-[2]" />
                          </div>
                          <span className="leading-snug">{row.builder}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Banner */}
            <div className="px-6 sm:px-8 py-4 bg-slate-50/80 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px] text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="size-4 text-[#059669]" />
                <span>All ArixPro builds include guaranteed milestones, staging previews, and full IP handover.</span>
              </div>
              <Link
                to="/contact"
                className="font-semibold text-slate-950 hover:text-[#6336C5] inline-flex items-center gap-1 transition-colors"
              >
                <span>Have specific requirements? Contact us</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Refuse to Do (Tactile Cards with Hover Lift) */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
              What we refuse to do.
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              Clear boundaries on how we work and what we will never subject our clients to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-sans text-[16.5px] font-bold text-slate-950 flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>No Bloated WordPress Themes</span>
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                We write clean custom code. Zero conflicting plugins that create security vulnerabilities and crash when updated.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-sans text-[16.5px] font-bold text-slate-950 flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>No Monthly Code Hostage Fees</span>
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                You own your software 100%. All source code, cloud credentials, and domain records are yours from day one.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-sans text-[16.5px] font-bold text-slate-950 flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>No Junior Handoffs</span>
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                You never get passed off to an intern or an offshore subcontractor. You speak directly with the engineer writing your software.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-sans text-[16.5px] font-bold text-slate-950 flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>No Open-Ended Hourly Traps</span>
              </h3>
              <p className="mt-2.5 font-sans text-[14px] text-slate-600 leading-relaxed">
                We work on fixed price milestones. If a feature takes longer than expected, that is on our shoulders—never added to your bill.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
