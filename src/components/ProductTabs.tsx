import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Server, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { NewBadge, StackBadge } from './Badges'

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState<'web' | 'apis' | 'saas'>('web')

  const tabContent = {
    web: {
      title: 'High-Performance Web Applications',
      tagline: 'Modern, fast web platforms built with React and TypeScript.',
      description:
        'We engineer frontends with clean component architecture, snappy client-side state management, and strict TypeScript types. Designed for operational clarity, rapid load times, and direct user workflows.',
      stack: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'REST / GraphQL'],
      features: [
        'Zero bloated boilerplate or fragile UI plugins',
        'Mobile-first responsive layouts from 320px to 1440px',
        'Production builds prerendered for search engines',
        'End-to-end integration with your Python / Node backend',
      ],
      exampleName: 'SiteScopia Website Analyzer',
      exampleLink: '/work/sitescopia',
    },
    apis: {
      title: 'Backend Systems & Resilient APIs',
      tagline: 'High-concurrency Python architectures built on FastAPI and Django.',
      description:
        'We design and deploy robust REST APIs, asynchronous task workers, and relational schemas. Built by engineers who operate Django REST backends handling 100,000+ daily production requests.',
      stack: ['Python 3.12', 'FastAPI', 'Django 5', 'PostgreSQL', 'Celery', 'Redis'],
      features: [
        'Automated OpenAPI and Swagger documentation contracts',
        'Asynchronous job queues powered by Celery and Redis',
        'Indexed relational schemas and zero-downtime migrations',
        'Strict JWT / OAuth2 token authentication and rate limiting',
      ],
      exampleName: 'JobHarvester Backend Pipeline',
      exampleLink: '/work/jobharvester',
    },
    saas: {
      title: 'Full-Cycle SaaS Products',
      tagline: 'Turn MVP specifications into reliable, multi-tenant digital platforms.',
      description:
        'From database multi-tenancy and subscription billing to role-based access control and AI pipeline integrations, we build the complete software ecosystem required to launch and scale.',
      stack: ['FastAPI', 'PostgreSQL', 'Docker', 'Stripe Billing', 'RAG / LLM'],
      features: [
        'Multi-tenant data isolation and role-based permissions',
        'Automated subscription lifecycles and webhook handling',
        'RAG-based AI assistant pipelines with strict rate controls',
        'Telemetry monitoring, error tracing, and continuous deployments',
      ],
      exampleName: 'BOMWatcher Supply-Chain Scanner',
      exampleLink: '/work/bomwatcher',
    },
  }

  const current = tabContent[activeTab]

  return (
    <div className="w-full">
      {/* Category Strip / Tabs Navigation */}
      <div className="flex items-center justify-center border-b border-[#E4DEF2]">
        <div className="flex gap-4 sm:gap-12 overflow-x-auto pb-px">
          {/* Tab 1: Web Apps */}
          <button
            type="button"
            onClick={() => setActiveTab('web')}
            className={`group relative flex items-center gap-2.5 pb-4 font-sans text-[16px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'web' ? 'text-[#241044]' : 'text-[#6B6578] hover:text-[#241044]'
            }`}
          >
            <div
              className={`flex size-8 items-center justify-center rounded-[8px] transition-colors ${
                activeTab === 'web' ? 'bg-[#F7F6FC] text-[#6336C5]' : 'text-[#6B6578]'
              }`}
            >
              <Layout className="size-5" />
            </div>
            <span>Web Applications</span>
            {activeTab === 'web' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#241044]" />
            )}
          </button>

          {/* Tab 2: APIs */}
          <button
            type="button"
            onClick={() => setActiveTab('apis')}
            className={`group relative flex items-center gap-2.5 pb-4 font-sans text-[16px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'apis' ? 'text-[#241044]' : 'text-[#6B6578] hover:text-[#241044]'
            }`}
          >
            <div
              className={`flex size-8 items-center justify-center rounded-[8px] transition-colors ${
                activeTab === 'apis' ? 'bg-[#F7F6FC] text-[#6336C5]' : 'text-[#6B6578]'
              }`}
            >
              <Server className="size-5" />
            </div>
            <span>APIs &amp; Backend</span>
            {activeTab === 'apis' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#241044]" />
            )}
          </button>

          {/* Tab 3: SaaS */}
          <button
            type="button"
            onClick={() => setActiveTab('saas')}
            className={`group relative flex items-center gap-2.5 pb-4 font-sans text-[16px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'saas' ? 'text-[#241044]' : 'text-[#6B6578] hover:text-[#241044]'
            }`}
          >
            <div
              className={`flex size-8 items-center justify-center rounded-[8px] transition-colors ${
                activeTab === 'saas' ? 'bg-[#F7F6FC] text-[#6336C5]' : 'text-[#6B6578]'
              }`}
            >
              <Sparkles className="size-5" />
            </div>
            <span>SaaS Products</span>
            <NewBadge />
            {activeTab === 'saas' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#241044]" />
            )}
          </button>
        </div>
      </div>

      {/* Tab Panel Display */}
      <div className="mt-10 rounded-[14px] border border-[#E4DEF2] bg-[#F7F6FC] p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <span className="font-mono text-[12px] font-medium uppercase tracking-wider text-[#6336C5]">
              Core Deliverable
            </span>
            <h3 className="mt-2 font-sans text-[22px] font-medium text-[#241044] sm:text-[26px]">
              {current.title}
            </h3>
            <p className="mt-1 font-sans text-[16px] font-medium text-[#4A4458]">
              {current.tagline}
            </p>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-[#6B6578]">
              {current.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {current.stack.map((item) => (
                <StackBadge key={item}>{item}</StackBadge>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link to={current.exampleLink} className="btn-primary">
                <span>View {current.exampleName}</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                All Services
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[12px] border border-[#E4DEF2] bg-white p-6 shadow-sm">
            <h4 className="font-sans text-[15px] font-semibold text-[#241044]">
              Production Standards
            </h4>
            <ul className="mt-4 space-y-3 font-sans text-[14px] text-[#4A4458]">
              {current.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-[#1E9E4A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-[#E4DEF2]">
              <span className="block font-mono text-[11px] text-[#6B6578] uppercase">
                Direct Contact
              </span>
              <a
                href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 font-sans text-[14px] font-medium text-[#315BDA] hover:underline block"
              >
                Chat on WhatsApp (+92 312 0418701) &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
