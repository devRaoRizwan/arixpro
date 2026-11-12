import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowUpRight, Check, X } from 'lucide-react'

interface Solution {
  id: string
  label: string
  title: string
  category: string
  summary: string
  highlights: string[]
  href: string
  keywords: string[]
}

const SOLUTIONS: Solution[] = [
  {
    id: 'portals',
    label: 'Client Portals',
    title: 'Customer & Client Portals',
    category: 'Web & Portals',
    summary: 'A secure self-service portal where your clients log in, view live project updates, and upload files.',
    highlights: ['Secure Authentication', 'Role-Based Access', 'Zero Manual Status Emails'],
    href: '/contact?service=portals',
    keywords: ['portal', 'client', 'customer', 'login', 'account', 'files', 'documents', 'self-service'],
  },
  {
    id: 'admin',
    label: 'Admin Panels',
    title: 'Internal Admin & Operations Panels',
    category: 'Operations',
    summary: 'A central command center to manage orders, inventory, staff permissions, and records in real time.',
    highlights: ['Real-Time Inventory', 'Custom Staff Permissions', 'Database Management'],
    href: '/contact?service=admin-panels',
    keywords: ['admin', 'dashboard', 'inventory', 'orders', 'warehouse', 'staff', 'internal', 'crm', 'ops'],
  },
  {
    id: 'saas',
    label: 'SaaS Platforms',
    title: 'Subscription & SaaS Platforms',
    category: 'Monetization',
    summary: 'Turn your software idea into a recurring business with Stripe subscriptions and multi-tenant accounts.',
    highlights: ['Stripe Billing & Plans', 'Multi-Tenant Workspaces', 'Automated Invoicing'],
    href: '/contact?service=saas-platforms',
    keywords: ['saas', 'stripe', 'subscription', 'billing', 'payments', 'monthly', 'membership', 'plans', 'recurring'],
  },
  {
    id: 'integrations',
    label: 'API & Integrations',
    title: 'Custom APIs & System Integrations',
    category: 'Data Sync',
    summary: 'Connect your website, CRM, and accounting software so your business data stays synchronized.',
    highlights: ['Automated Data Pipelines', 'Two-Way Sync', 'Zero Manual Retyping'],
    href: '/contact?service=api-integrations',
    keywords: ['api', 'sync', 'integration', 'connect', 'database', 'webhook', 'tools', 'backend', 'data'],
  },
  {
    id: 'automations',
    label: 'Automations',
    title: 'Business Workflow Automations',
    category: 'Automations',
    summary: 'Background software that eliminates manual data chores like parsing vendor invoices and scheduled alerts.',
    highlights: ['Invoice & PDF Parsing', 'Scheduled Reminders', '24/7 Background Execution'],
    href: '/contact?service=automations',
    keywords: ['automation', 'invoice', 'email', 'alerts', 'repetitive', 'worker', 'pdf', 'parser', 'bot', 'workflow'],
  },
]

export function SolutionFinder() {
  const [selectedId, setSelectedId] = useState<string>('portals')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Filter solutions based on search query
  const matchedSolutions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return SOLUTIONS

    return SOLUTIONS.filter((s) => {
      const inTitle = s.title.toLowerCase().includes(q)
      const inSummary = s.summary.toLowerCase().includes(q)
      const inKeywords = s.keywords.some((k) => k.includes(q))
      const inCategory = s.category.toLowerCase().includes(q)
      return inTitle || inSummary || inKeywords || inCategory
    })
  }, [searchQuery])

  // Active solution: either search result first match or currently selected tab
  const activeSolution = useMemo(() => {
    if (searchQuery.trim() && matchedSolutions.length > 0) {
      return matchedSolutions[0]
    }
    return SOLUTIONS.find((s) => s.id === selectedId) || SOLUTIONS[0]
  }, [searchQuery, matchedSolutions, selectedId])

  return (
    <div className="w-full">
      {/* Search Input Bar (AI Fiesta Floating Pill Style) */}
      <div className="relative max-w-2xl mx-auto">
        <div className="relative flex items-center">
          <Search className="absolute left-5 size-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search what you need (e.g. portal, stripe, inventory, sync)..."
            className="w-full h-[52px] pl-12 pr-12 rounded-full border border-slate-200 bg-white text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/5 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Quick-Select Filter Pills (Floating Pill Tabs) */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {SOLUTIONS.map((item) => {
          const isActive = activeSolution.id === item.id
          return (
            <button
              key={item.id}
              onClick={() => {
                setSelectedId(item.id)
                setSearchQuery('')
              }}
              className={`px-4.5 py-2 rounded-full text-[13.5px] font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/90 shadow-xs'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {/* Spacious Focused Result Card (Clean White Studio) */}
      <div className="mt-10 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 cols: Category, Title, Plain Summary */}
            <div className="lg:col-span-7">
              <span className="inline-block font-mono text-[11.5px] font-bold text-[#6336C5] uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#6336C5]/10 border border-[#6336C5]/20 mb-4">
                {activeSolution.category}
              </span>

              <h3 className="font-sans text-[24px] sm:text-[32px] font-bold text-slate-950 tracking-tight leading-tight">
                {activeSolution.title}
              </h3>

              <p className="mt-3.5 font-sans text-[16px] leading-relaxed text-slate-600">
                {activeSolution.summary}
              </p>
            </div>

            {/* Right 5 cols: Highlights checklist + Action Button */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-6 lg:pt-0 lg:pl-8 lg:border-l border-slate-200">
              <div className="space-y-2.5">
                {activeSolution.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[13.5px] font-sans text-slate-800"
                  >
                    <Check className="size-4 text-[#059669] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <Link
                to={activeSolution.href}
                className="btn-primary w-full h-[46px] text-[14px] flex items-center justify-center gap-2 rounded-full"
              >
                <span>Build This System</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionFinder
