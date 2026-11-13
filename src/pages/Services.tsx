import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import {
  Store,
  Layers,
  Gauge,
  ShoppingBag,
  Check,
  X,
  ArrowUpRight,
  Clock,
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
    forWho: 'Businesses that want a fast, high-converting digital presence and automated customer booking.',
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
    arixpro: 'Sub-second (< 800ms, custom code)',
    agency: '2 – 4 seconds (heavy frameworks)',
    freelancer: 'Unpredictable (depends on skill)',
    builder: '3 – 6 seconds (template bloat & plugin lag)',
  },
  {
    feature: 'Source Code Ownership',
    arixpro: '100% full transfer on day one',
    agency: 'Often locked behind licensing',
    freelancer: 'Usually transferred, often undocumented',
    builder: 'Zero ownership (rented on their platform)',
  },
  {
    feature: 'Pricing Model',
    arixpro: 'Fixed price upfront with clear milestones',
    agency: 'Expensive retainers ($20k+) + billable hours',
    freelancer: 'Hourly or scope creep disputes',
    builder: 'Monthly subscription + transaction cut',
  },
  {
    feature: 'Communication',
    arixpro: 'Direct access to senior builder',
    agency: 'Account managers & sales middlemen',
    freelancer: 'Direct, but high risk of ghosting',
    builder: 'Automated chatbots and help docs',
  },
  {
    feature: 'Custom Logic & Integrations',
    arixpro: 'Bespoke code tailored to your exact workflow',
    agency: 'Yes, but takes months of bureaucracy',
    freelancer: 'Limited to what they personally know',
    builder: 'Restricted to third-party app store plugins',
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
      {/* 1. Honest, Grounded Header */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <span className="font-mono text-[12px] uppercase tracking-wider text-[#6336C5] font-semibold">
            Capabilities &amp; Blueprints
          </span>
          <h1 className="mt-3 font-sans text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.1]">
            What we build, what is included, and how it ships.
          </h1>
          <p className="mt-4 font-sans text-[17px] sm:text-[19px] text-slate-600 leading-relaxed max-w-2xl">
            Select a project type below to see the exact customer experience, backend architecture, and deliverables we build for production.
          </p>
        </div>
      </section>

      {/* 2. Interactive System Blueprint Configurator */}
      <section className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          {/* Tab Selector */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-10">
            {(Object.keys(BLUEPRINTS) as ProjectCategory[]).map((catKey) => {
              const item = BLUEPRINTS[catKey]
              const Icon = item.icon
              const isSelected = activeTab === catKey

              return (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setActiveTab(catKey)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#6336C5] shadow-sm ring-1 ring-[#6336C5]'
                      : 'bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon
                      className={`size-5 ${
                        isSelected ? 'text-[#6336C5]' : 'text-slate-500'
                      }`}
                    />
                    {isSelected && (
                      <span className="size-2 rounded-full bg-[#6336C5]" />
                    )}
                  </div>
                  <div>
                    <h3
                      className={`font-sans text-[14.5px] font-bold leading-snug ${
                        isSelected ? 'text-slate-950' : 'text-slate-700'
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className="mt-1 font-sans text-[12px] text-slate-500 line-clamp-1">
                      {item.label}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Blueprint Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xs">
            {/* Header of Active Blueprint */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="max-w-2xl">
                <span className="font-mono text-[11.5px] font-semibold uppercase tracking-wider text-[#6336C5]">
                  Architecture Blueprint // {current.name}
                </span>
                <h2 className="mt-2 font-sans text-[24px] sm:text-[30px] font-bold text-slate-950 tracking-tight">
                  {current.label}
                </h2>
                <p className="mt-2 font-sans text-[14.5px] text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-900">For who: </span>
                  {current.forWho}
                </p>
              </div>

              <div className="shrink-0 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-left md:text-right">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block">
                  Delivery Timeline
                </span>
                <span className="font-sans text-[16px] font-bold text-slate-900 flex items-center gap-1.5 md:justify-end mt-0.5">
                  <Clock className="size-4 text-[#6336C5]" />
                  <span>{current.timeline}</span>
                </span>
              </div>
            </div>

            <p className="mt-6 font-sans text-[15.5px] text-slate-700 leading-relaxed">
              {current.summary}
            </p>

            {/* 3 Engineering Pillars */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {/* Column 1: Customer Frontend */}
              <div className="space-y-3">
                <span className="block font-mono text-[11.5px] font-bold uppercase tracking-wider text-slate-900">
                  01. Customer Experience (Frontend)
                </span>
                <ul className="space-y-2.5">
                  {current.frontend.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13.5px] text-slate-700 leading-snug">
                      <Check className="size-4 text-[#059669] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Backend & Ops Engine */}
              <div className="space-y-3">
                <span className="block font-mono text-[11.5px] font-bold uppercase tracking-wider text-slate-900">
                  02. Business Engine (Backend)
                </span>
                <ul className="space-y-2.5">
                  {current.backend.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13.5px] text-slate-700 leading-snug">
                      <Check className="size-4 text-[#059669] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Handoff & Launch */}
              <div className="space-y-3">
                <span className="block font-mono text-[11.5px] font-bold uppercase tracking-wider text-slate-900">
                  03. Day 1 Handoff &amp; Ownership
                </span>
                <ul className="space-y-2.5">
                  {current.handover.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13.5px] text-slate-700 leading-snug">
                      <Check className="size-4 text-[#059669] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-sans text-[13.5px] text-slate-600">
                Fixed quote provided upfront based on your exact requirements. Zero hourly surprises.
              </div>
              <Link
                to={`/contact?service=${activeTab}`}
                className="btn-primary text-[14px] h-[42px] px-6 rounded-full inline-flex items-center gap-2 shrink-0"
              >
                <span>Scope this build</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Uncomfortable Truth: Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Honest Comparison
            </span>
            <h2 className="mt-2 font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
              Why business owners get frustrated with normal options.
            </h2>
            <p className="mt-2.5 font-sans text-[15px] text-slate-600">
              Most people get burned by slow page builders or agencies charging \$30,000 for junior dev work. Here is how we differ.
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left border-collapse font-sans text-[13.5px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-800">
                  <th className="p-4 sm:p-5 font-bold">Standard</th>
                  <th className="p-4 sm:p-5 font-bold text-[#6336C5] bg-purple-50/40">ArixPro</th>
                  <th className="p-4 sm:p-5 font-medium text-slate-600">Traditional Agency</th>
                  <th className="p-4 sm:p-5 font-medium text-slate-600">Fiverr / Upwork</th>
                  <th className="p-4 sm:p-5 font-medium text-slate-600">Wix / WordPress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-900 whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-slate-950 bg-purple-50/20">
                      <div className="flex items-start gap-1.5">
                        <Check className="size-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{row.arixpro}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      <div className="flex items-start gap-1.5">
                        <X className="size-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      <div className="flex items-start gap-1.5">
                        <X className="size-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      <div className="flex items-start gap-1.5">
                        <X className="size-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.builder}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. What We Refuse to Do (Human & Transparent) */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono text-[11.5px] uppercase tracking-wider text-slate-500 font-semibold">
              Our Principles
            </span>
            <h2 className="mt-2 font-sans text-[26px] sm:text-[32px] font-bold text-slate-950 tracking-tight">
              What we refuse to do.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 font-sans">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-950 flex items-center gap-2">
                <span className="text-red-500">✕</span>
                <span>No Bloated WordPress Themes</span>
              </h3>
              <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">
                We write custom code. No 40 active plugins that conflict, slow down your site, and crash when WordPress updates.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-950 flex items-center gap-2">
                <span className="text-red-500">✕</span>
                <span>No Monthly Code Hostage Fees</span>
              </h3>
              <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">
                You own your website 100%. All source code, cloud credentials, and domain records belong to you from day one.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-950 flex items-center gap-2">
                <span className="text-red-500">✕</span>
                <span>No Junior Handoffs</span>
              </h3>
              <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">
                You never get passed off to an intern or an outsourced contractor. You speak directly with the senior engineer writing your software.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-950 flex items-center gap-2">
                <span className="text-red-500">✕</span>
                <span>No Open-Ended Billing Traps</span>
              </h3>
              <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">
                We work on fixed price milestones. If a feature takes longer than expected, that is on us, not added to your bill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Human Contact */}
      <section className="py-20 sm:py-24 bg-white text-center">
        <div className="mx-auto max-w-2xl px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] font-mono text-[12px] font-semibold mb-4">
            <span className="size-2 rounded-full bg-[#059669] animate-pulse" />
            <span>Currently Booking Next Month Projects</span>
          </div>

          <h2 className="font-sans text-[28px] sm:text-[38px] font-bold text-slate-950 tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-3.5 font-sans text-[16px] text-slate-600 leading-relaxed">
            Tell us what you want to build and your target timeline. We will review your requirements and reply within 24 hours with a straightforward technical plan and a fixed price quote.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="btn-primary text-[15px] h-[50px] px-9 rounded-full shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Talk to an Engineer</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
