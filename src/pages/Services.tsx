import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
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
  Sparkles,
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
    name: 'Online Presence & Booking',
    label: 'Barbers, Restaurants, Clinics & Services',
    forWho: 'Businesses that need a fast, high-converting digital presence and automated customer booking.',
    summary:
      'We replace clunky WordPress templates and broken booking plugins with a custom, high-speed website that captures leads, takes appointments, and collects payments 24/7.',
    timeline: '2 – 3 Weeks',
    frontend: [
      'Custom-designed mobile-first web storefront (zero template bloat)',
      'Real-time appointment & table booking calendar',
      'One-tap Apple Pay, Google Pay, and Stripe credit card checkout',
      'Service menu, pricing tiers, customer reviews, and FAQ accordion',
      'Sub-second page load times on 4G/5G mobile connections',
    ],
    backend: [
      'Automated SMS & email booking confirmations to reduce no-shows',
      'Two-way sync with Google Calendar or your existing calendar',
      'Direct Stripe payment payouts straight into your business bank account',
      'Customer contact database with appointment history and notes',
    ],
    handover: [
      'Live website deployed on your custom domain with SSL encryption',
      'Google Maps profile and local search indexing setup',
      '100% full ownership of domain, code, and accounts (no monthly hostage fees)',
      '30-day post-launch support and staff walkthrough session',
    ],
  },
  'saas-product': {
    id: 'saas-product',
    icon: Layers,
    name: 'SaaS Platforms & Web Apps',
    label: 'Startups & Digital Products',
    forWho: 'Founders building a web application, customer portal, or subscription product from scratch.',
    summary:
      'We build your product from architecture to production. Clean React/TypeScript frontend, robust Python/Node backend, secure authentication, and recurring Stripe billing.',
    timeline: '4 – 8 Weeks',
    frontend: [
      'Responsive user interface built with modern React 19, TypeScript & Tailwind',
      'Customer onboarding flow, passwordless login, and OAuth (Google / GitHub)',
      'Multi-tier subscription billing portal (upgrade, downgrade, cancel)',
      'Account settings, team invites, and user profile management',
    ],
    backend: [
      'Asynchronous REST & WebSocket backend services (Python / Node.js)',
      'Relational PostgreSQL database architecture with strict migrations',
      'Stripe webhook processor for recurring subscriptions and invoices',
      'Automated background jobs and Redis caching for sub-50ms responses',
    ],
    handover: [
      'Complete private Git repository transferred directly to your organization',
      'Automated CI/CD deployment pipeline on AWS, Vercel, or Cloudflare',
      'Interactive OpenAPI / Swagger documentation for all endpoints',
      'Unit and integration test suites verifying critical user workflows',
    ],
  },
  'internal-ops': {
    id: 'internal-ops',
    icon: Gauge,
    name: 'Internal Tools & Dashboards',
    label: 'Operations & Business Teams',
    forWho: 'Companies drowning in manual spreadsheets, copy-pasting data, and disjointed tools.',
    summary:
      'A private internal operations portal built directly on your data. Manage inventory, process orders, track customer records, and automate repetitive team chores.',
    timeline: '3 – 5 Weeks',
    frontend: [
      'Custom admin panel with real-time operational search and sorting',
      'Interactive data tables with multi-filter columns and one-click CSV export',
      'Role-based view permissions (Admin, Manager, Staff)',
      'Status change workflows, internal order notes, and audit logs',
    ],
    backend: [
      'Direct secure connection to your SQL databases, Shopify, or existing APIs',
      'Automated background sync jobs that keep all records up to date',
      'Strict input validation to prevent duplicate or corrupt data entries',
      'Webhook listeners that trigger notifications when key events happen',
    ],
    handover: [
      'Private internal web tool hosted securely behind authentication',
      'Zero monthly per-seat licensing fees (your software, on your domain)',
      'Operational runbook and documentation for your internal team',
      '30-day monitoring and bug fix warranty',
    ],
  },
  ecommerce: {
    id: 'ecommerce',
    icon: ShoppingBag,
    name: 'Bespoke E-Commerce Stores',
    label: 'Independent Brands & Retailers',
    forWho: 'Brands that want a unique, fast online store without paying 10% platform cuts or slow app bloat.',
    summary:
      'High-performance custom storefronts engineered for fast checkout, mobile conversion, and seamless inventory management across all sales channels.',
    timeline: '3 – 6 Weeks',
    frontend: [
      'Ultra-fast product catalog, search, and dynamic filtering',
      'Frictionless slide-out cart and accelerated checkout flows',
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
      'Payment gateway setup verified in test and live production mode',
      'Full source code repository ownership transferred to your team',
      'Full staff training on adding products and fulfilling orders',
    ],
  },
}

const comparisonRows = [
  {
    feature: 'Page Load Speed',
    detail: 'Real-world speed on mobile connections',
    arixpro: 'Sub-second (< 800ms custom code)',
    agency: '2 – 4s (heavy corporate frameworks)',
    freelancer: 'Unpredictable (varies by freelancer)',
    builder: '3 – 6s (theme bloat & plugin lag)',
  },
  {
    feature: 'Source Code Ownership',
    detail: 'Who holds the intellectual property',
    arixpro: '100% full transfer on day one',
    agency: 'Often locked behind licensing fees',
    freelancer: 'Transferred, but often undocumented',
    builder: 'Zero ownership (rented platform)',
  },
  {
    feature: 'Pricing Model',
    detail: 'How you are quoted and billed',
    arixpro: 'Guaranteed fixed price & milestones',
    agency: 'Retainers ($20k+) + billable hours',
    freelancer: 'Hourly billing or scope creep disputes',
    builder: 'Monthly fees + transaction cut',
  },
  {
    feature: 'Communication & Team',
    detail: 'Who you actually speak with daily',
    arixpro: 'Direct access to senior builder',
    agency: 'Account managers & sales reps',
    freelancer: 'Direct, but risk of ghosting',
    builder: 'Automated chatbots and forums',
  },
  {
    feature: 'Custom Business Logic',
    detail: 'Tailoring to your exact workflows',
    arixpro: 'Bespoke code tailored to your ops',
    agency: 'Possible, but takes 4+ months',
    freelancer: 'Limited to their personal skillset',
    builder: 'Strictly limited to app store plugins',
  },
]

export function Services() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('local-business')
  const current = BLUEPRINTS[activeTab]

  useSeo({
    title: 'Services & System Blueprints',
    description:
      'Explore what ArixPro builds: local business booking engines, custom SaaS platforms, internal tools, and e-commerce systems with fixed pricing and 100% code ownership.',
    path: '/services',
  })

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Header Section (Aligned with Site-Wide Grid) */}
      <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-slate-200/80 overflow-hidden">
        {/* Subtle ambient light gradient at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-transparent blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-[12px] font-mono font-semibold uppercase tracking-wider text-[#6336C5] mb-5 shadow-xs">
              <Sparkles className="size-3.5 text-[#6336C5]" />
              <span>Capabilities &amp; Blueprints</span>
            </div>

            <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-slate-950 tracking-tight leading-[1.12]">
              What we build, what is included, and how it ships.
            </h1>

            <p className="mt-5 font-sans text-[17px] sm:text-[19px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Select a project category below to inspect the exact customer experience, backend architecture, and deliverables we engineer for production.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive System Blueprint Configurator */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          {/* Section Subheading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
                System Architecture
              </span>
              <h2 className="mt-2 font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
                Interactive Project Blueprints
              </h2>
            </div>
            <p className="font-sans text-[14px] text-slate-500 sm:text-right max-w-sm">
              Click any project type to reveal the complete frontend, backend, and handover specs.
            </p>
          </div>

          {/* 4 Interactive Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
            {(Object.keys(BLUEPRINTS) as ProjectCategory[]).map((catKey) => {
              const item = BLUEPRINTS[catKey]
              const Icon = item.icon
              const isSelected = activeTab === catKey

              return (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setActiveTab(catKey)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-100 ease-out active:scale-[0.98] select-none cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-[#6336C5] shadow-[0_4px_20px_-4px_rgba(99,54,197,0.15)] ring-2 ring-[#6336C5]/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  {/* Top Row: Icon + Active Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`size-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#6336C5] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-[#6336C5] font-mono text-[11px] font-bold uppercase tracking-wider">
                        <span className="size-1.5 rounded-full bg-[#6336C5] animate-pulse" />
                        <span>Active</span>
                      </span>
                    ) : (
                      <span className="font-mono text-[11px] text-slate-400">
                        Inspect &rarr;
                      </span>
                    )}
                  </div>

                  <div>
                    <h3
                      className={`font-sans text-[16px] font-bold leading-snug ${
                        isSelected ? 'text-slate-950' : 'text-slate-800'
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className="mt-1 font-sans text-[12.5px] text-slate-500 leading-normal">
                      {item.label}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Blueprint Presentation Card */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-12 shadow-sm">
            {/* Header of Active Blueprint */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-[11.5px] font-mono font-bold uppercase tracking-wider text-[#6336C5] mb-3">
                  <span>Blueprint // {current.name}</span>
                </div>
                <h3 className="font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
                  {current.label}
                </h3>
                <p className="mt-2.5 font-sans text-[15.5px] text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-900">Designed for: </span>
                  {current.forWho}
                </p>
                <p className="mt-3 font-sans text-[15px] text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {current.summary}
                </p>
              </div>

              {/* Delivery Timeline Card */}
              <div className="shrink-0 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/30 border border-purple-100 text-left lg:text-right min-w-[220px]">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Delivery Timeline
                </span>
                <span className="font-sans text-[20px] font-bold text-slate-950 flex items-center gap-2 lg:justify-end mt-1">
                  <Clock className="size-5 text-[#6336C5]" />
                  <span>{current.timeline}</span>
                </span>
                <span className="font-mono text-[11px] text-[#059669] font-semibold mt-1 block">
                  Fixed Milestone Guarantee
                </span>
              </div>
            </div>

            {/* 3 Engineering Pillars */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1: Frontend Experience */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-200/70">
                    <div className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#6336C5] shadow-xs">
                      <Laptop className="size-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#6336C5] block">
                        Pillar 01
                      </span>
                      <h4 className="font-sans text-[14.5px] font-bold text-slate-950">
                        Customer Experience
                      </h4>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {current.frontend.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-slate-700 leading-snug">
                        <div className="size-4 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3 stroke-[2.5]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pillar 2: Backend Engine */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-200/70">
                    <div className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#6336C5] shadow-xs">
                      <Server className="size-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#6336C5] block">
                        Pillar 02
                      </span>
                      <h4 className="font-sans text-[14.5px] font-bold text-slate-950">
                        Business Engine
                      </h4>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {current.backend.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-slate-700 leading-snug">
                        <div className="size-4 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3 stroke-[2.5]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pillar 3: Handoff & Ownership */}
              <div className="p-6 rounded-2xl bg-purple-50/40 border border-purple-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-purple-200/60">
                    <div className="size-8 rounded-lg bg-white border border-purple-200 flex items-center justify-center text-[#6336C5] shadow-xs">
                      <ShieldCheck className="size-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#6336C5] block">
                        Pillar 03
                      </span>
                      <h4 className="font-sans text-[14.5px] font-bold text-slate-950">
                        Launch &amp; Ownership
                      </h4>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {current.handover.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-slate-800 leading-snug">
                        <div className="size-4 rounded-full bg-purple-100 text-[#6336C5] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3 stroke-[2.5]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-sans text-[14px] text-slate-600">
                <span className="font-semibold text-slate-900">Fixed Milestone Pricing: </span>
                Every build includes full source code transfer, staging previews, and zero proprietary lock-in.
              </div>
              <Link
                to={`/contact?service=${activeTab}`}
                className="btn-primary text-[14.5px] h-[46px] px-7 rounded-full inline-flex items-center gap-2 shrink-0 shadow-sm hover:shadow-md transition-all"
              >
                <span>Request a Scope for this Build</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Enhanced Comparison Matrix (Clean, High-Contrast & Beautifully Designed) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Market Comparison
            </span>
            <h2 className="mt-2.5 font-sans text-[28px] sm:text-[38px] font-bold text-slate-950 tracking-tight">
              Why business owners choose ArixPro over traditional alternatives.
            </h2>
            <p className="mt-3 font-sans text-[16px] text-slate-600 leading-relaxed">
              Most clients come to us after getting burned by \$30,000 agency retainers or fragile \$20/month website builders. Here is the honest side-by-side comparison.
            </p>
          </div>

          {/* Enhanced Comparison Table Container */}
          <div className="border border-slate-200/90 rounded-3xl bg-white shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans min-w-[760px]">
                <thead>
                  <tr className="border-b border-slate-200/90 bg-slate-50/70">
                    <th className="py-5 px-6 font-mono text-[12px] uppercase tracking-wider text-slate-500 font-semibold w-[26%]">
                      Decision Factor
                    </th>

                    {/* ArixPro Column (Champion Column with Violet Accent) */}
                    <th className="py-5 px-6 bg-purple-50/60 border-x border-[#6336C5]/20 w-[24%]">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#6336C5] text-white font-sans text-[13px] font-bold tracking-wide shadow-xs">
                          ArixPro
                        </span>
                        <span className="font-mono text-[11px] font-semibold text-[#6336C5] uppercase tracking-wider">
                          Recommended
                        </span>
                      </div>
                      <span className="block font-sans text-[12px] text-slate-600 font-normal mt-1">
                        Turnkey Custom Systems
                      </span>
                    </th>

                    <th className="py-5 px-6 text-slate-700 w-[17%]">
                      <span className="font-sans text-[14px] font-bold text-slate-900 block">
                        Traditional Agency
                      </span>
                      <span className="font-sans text-[12px] text-slate-500 font-normal">
                        $20k+ retainers
                      </span>
                    </th>

                    <th className="py-5 px-6 text-slate-700 w-[17%]">
                      <span className="font-sans text-[14px] font-bold text-slate-900 block">
                        Fiverr / Upwork
                      </span>
                      <span className="font-sans text-[12px] text-slate-500 font-normal">
                        Individual freelancers
                      </span>
                    </th>

                    <th className="py-5 px-6 text-slate-700 w-[16%]">
                      <span className="font-sans text-[14px] font-bold text-slate-900 block">
                        Wix / WordPress
                      </span>
                      <span className="font-sans text-[12px] text-slate-500 font-normal">
                        DIY page builders
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-[13.5px]">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      {/* Left Feature Column */}
                      <td className="py-5 px-6">
                        <span className="font-sans text-[14.5px] font-bold text-slate-950 block">
                          {row.feature}
                        </span>
                        <span className="font-sans text-[12.5px] text-slate-500 block mt-0.5">
                          {row.detail}
                        </span>
                      </td>

                      {/* ArixPro Column (Highlighted Body) */}
                      <td className="py-5 px-6 bg-purple-50/25 border-x border-[#6336C5]/20">
                        <div className="flex items-start gap-2.5">
                          <div className="size-5 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                            <Check className="size-3.5 stroke-[2.5]" />
                          </div>
                          <span className="font-sans font-semibold text-slate-950 leading-snug">
                            {row.arixpro}
                          </span>
                        </div>
                      </td>

                      {/* Traditional Agency */}
                      <td className="py-5 px-6 text-slate-600">
                        <div className="flex items-start gap-2">
                          <div className="size-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Minus className="size-2.5 stroke-[2]" />
                          </div>
                          <span className="leading-snug">{row.agency}</span>
                        </div>
                      </td>

                      {/* Freelancers */}
                      <td className="py-5 px-6 text-slate-600">
                        <div className="flex items-start gap-2">
                          <div className="size-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Minus className="size-2.5 stroke-[2]" />
                          </div>
                          <span className="leading-snug">{row.freelancer}</span>
                        </div>
                      </td>

                      {/* DIY Builders */}
                      <td className="py-5 px-6 text-slate-600">
                        <div className="flex items-start gap-2">
                          <div className="size-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Minus className="size-2.5 stroke-[2]" />
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
            <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px] text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="size-4 text-[#059669]" />
                <span>All ArixPro projects include written milestones and full source code handover.</span>
              </div>
              <Link
                to="/contact"
                className="font-semibold text-[#6336C5] hover:text-slate-950 inline-flex items-center gap-1 transition-colors"
              >
                <span>Have questions? Ask our team</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Refuse to Do (Polished Human Principles) */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Core Ethics
            </span>
            <h2 className="mt-2.5 font-sans text-[28px] sm:text-[38px] font-bold text-slate-950 tracking-tight">
              What we refuse to do.
            </h2>
            <p className="mt-3 font-sans text-[16px] text-slate-600">
              Trust is earned by being clear about what we will never subject our clients to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                  Refused
                </span>
                <h3 className="font-sans text-[17px] font-bold text-slate-950">
                  No Bloated WordPress Themes
                </h3>
              </div>
              <p className="font-sans text-[14.5px] text-slate-600 leading-relaxed">
                We write clean, bespoke code. We never install 40 conflicting plugins that slow down your website, create security holes, and break when WordPress updates.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                  Refused
                </span>
                <h3 className="font-sans text-[17px] font-bold text-slate-950">
                  No Monthly Code Hostage Fees
                </h3>
              </div>
              <p className="font-sans text-[14.5px] text-slate-600 leading-relaxed">
                You own 100% of your software. All source repositories, hosting credentials, and domain records belong to your business from day one. Zero lock-in.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                  Refused
                </span>
                <h3 className="font-sans text-[17px] font-bold text-slate-950">
                  No Junior Handoffs
                </h3>
              </div>
              <p className="font-sans text-[14.5px] text-slate-600 leading-relaxed">
                You never get handed off to an inexperienced intern or an outsourced contractor farm. You speak directly with the senior engineer writing your software.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                  Refused
                </span>
                <h3 className="font-sans text-[17px] font-bold text-slate-950">
                  No Open-Ended Hourly Traps
                </h3>
              </div>
              <p className="font-sans text-[14.5px] text-slate-600 leading-relaxed">
                We work on transparent fixed-price milestones. If a feature takes longer than we anticipated, that is on our shoulders—not tacked onto your invoice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Human Contact (Centered & Clean) */}
      <section className="py-20 sm:py-28 bg-white text-center">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] font-mono text-[12px] font-semibold mb-5 shadow-xs">
              <span className="size-2 rounded-full bg-[#059669] animate-pulse" />
              <span>Currently Booking Next Month Projects</span>
            </div>

            <h2 className="font-sans text-[30px] sm:text-[42px] font-bold text-slate-950 tracking-tight leading-tight">
              Have a project you want to build?
            </h2>

            <p className="mt-4 font-sans text-[17px] text-slate-600 leading-relaxed">
              Tell us what you want to achieve and your target launch date. We will review your requirements and reply within 24 hours with an honest technical assessment, scope breakdown, and fixed quote.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-[15px] h-[50px] px-9 rounded-full shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Talk to an Engineer</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/work"
                className="btn-secondary text-[15px] h-[50px] px-8 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
              >
                <span>View Shipped Systems</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
