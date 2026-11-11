import { Link } from 'react-router-dom'
import { StackBadge } from '../components/Badges'
import { ArrowRight, CheckCircle2, Layout, Server, Database, Sparkles } from 'lucide-react'

export function Services() {
  const serviceList = [
    {
      id: 'web-applications',
      title: 'Web Applications',
      icon: <Layout className="size-6 text-[#6336C5]" />,
      summary:
        'Fast, accessible client web applications engineered with React 18, Vite, and strict TypeScript.',
      description:
        'We engineer client applications that prioritize usability and responsiveness over needless visual complexity. Every interface is built with modular components, type-safe API bindings, and clean rendering cycles.',
      stack: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Next.js (SSR only)'],
      deliverables: [
        'Component-driven single page application or static prerendered site',
        'Strict TypeScript type definitions synced with backend API schemas',
        'Responsive layout guarantees across mobile (320px) to desktop (1440px)',
        'Clean bundle architecture with zero unused dependencies',
      ],
      exampleTitle: 'SiteScopia Inspection Dashboard',
      exampleSlug: 'sitescopia',
    },
    {
      id: 'backend-engineering',
      title: 'Backend Engineering',
      icon: <Server className="size-6 text-[#6336C5]" />,
      summary:
        'Resilient Python backend architectures built on Django 5, PostgreSQL, and Celery.',
      description:
        'Built by engineers who handle Django REST APIs serving 100,000+ daily production requests. We design clean relational schemas, transaction-safe database queries, and distributed task pipelines that prevent operational bottlenecks.',
      stack: ['Python 3.12', 'Django 5', 'PostgreSQL 16', 'Celery', 'Redis', 'RabbitMQ'],
      deliverables: [
        'Normalized PostgreSQL database schema and migration scripts',
        'Asynchronous worker pipeline for background tasks and batch jobs',
        'Redis caching layer and token-bucket rate limiting',
        'Automated unit and integration test suite with >85% coverage',
      ],
      exampleTitle: 'JobHarvester Data Ingestion Engine',
      exampleSlug: 'jobharvester',
    },
    {
      id: 'apis',
      title: 'APIs & Microservices',
      icon: <Database className="size-6 text-[#6336C5]" />,
      summary:
        'High-throughput asynchronous REST microservices built with FastAPI and Pydantic.',
      description:
        'When low latency and high concurrency are non-negotiable, we build asynchronous FastAPI microservices. Every endpoint features strict Pydantic validation, explicit HTTP error statuses, and automatic OpenAPI contract documentation.',
      stack: ['FastAPI', 'Pydantic v2', 'SQLAlchemy 2.0', 'Uvicorn', 'JWT / OAuth2'],
      deliverables: [
        'Asynchronous REST API endpoints with sub-200ms latency targets',
        'Interactive Swagger / OpenAPI documentation contract',
        'JWT token authentication and granular role-based permissions',
        'Docker container build with health check telemetry',
      ],
      exampleTitle: 'SiteScopia 38-Check Security API',
      exampleSlug: 'sitescopia',
    },
    {
      id: 'saas-products',
      title: 'SaaS Products',
      icon: <Sparkles className="size-6 text-[#6336C5]" />,
      summary:
        'Turn product requirements into a production-ready, multi-tenant digital business.',
      description:
        'From day one, we build software products that are ready for real paying customers: multi-tenant database isolation, automated Stripe subscription billing, customer self-service settings, and production telemetry monitoring.',
      stack: ['FastAPI', 'PostgreSQL', 'Stripe Billing', 'Docker', 'AWS', 'LLM / RAG'],
      deliverables: [
        'Multi-tenant schema design with data security boundaries',
        'Stripe Checkout & Billing Portal with automated webhook handling',
        'User onboarding flows and role-based permissions',
        'Continuous deployment pipeline on AWS with automated rollback',
      ],
      exampleTitle: 'BOMWatcher Supply-Chain Intelligence',
      exampleSlug: 'bomwatcher',
    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-[#E8E4F3] bg-[#FAF9FD]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Engineering Services
            </span>
            <h1 className="mt-3 font-sans text-[36px] sm:text-[44px] font-bold text-[#160B28] tracking-tight leading-tight">
              Software Solutions Built for Production Scale
            </h1>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-[#504665]">
              We build custom web applications, Python backends, high-concurrency APIs, and full SaaS platforms. Fixed deliverables, clean source code, and direct engineering collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 space-y-16">
          {serviceList.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 agency-card p-8 sm:p-12"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
                {/* Left Description */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-[12px] bg-[#FAF9FD] border border-[#E8E4F3]">
                      {service.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[12px] text-[#6B6578]">
                        0{index + 1}
                      </span>
                      <h2 className="font-sans text-[24px] font-bold text-[#160B28]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="mt-5 font-sans text-[16px] font-medium text-[#160B28]">
                    {service.summary}
                  </p>

                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-[#504665]">
                    {service.description}
                  </p>

                  {/* Stack */}
                  <div className="mt-6">
                    <span className="block font-mono text-[11px] font-semibold uppercase text-[#6B6578] mb-2">
                      Production Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.stack.map((tech) => (
                        <StackBadge key={tech}>{tech}</StackBadge>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/work/${service.exampleSlug}`}
                      className="btn-primary"
                    >
                      <span>Real Example: {service.exampleTitle}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                    <Link to="/contact" className="btn-secondary">
                      Inquire About This Service
                    </Link>
                  </div>
                </div>

                {/* Right Deliverables Table / Box */}
                <div className="lg:col-span-5 rounded-[14px] border border-[#E8E4F3] bg-[#FAF9FD] p-6 shadow-sm">
                  <h3 className="font-sans text-[16px] font-bold text-[#160B28] border-b border-[#E8E4F3] pb-3">
                    Concrete Deliverables Handed Over
                  </h3>

                  <ul className="mt-4 space-y-3 font-sans text-[14px] text-[#4A4458]">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-[#1E9E4A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-[#E8E4F3] flex items-center justify-between text-xs font-mono text-[#6B6578]">
                    <span>100% IP Ownership</span>
                    <span>Direct Senior Eng</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Teaser */}
      <section className="py-12 border-t border-[#E4DEF2] bg-[#F7F6FC]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans text-[20px] font-semibold text-[#241044]">
              Need a custom engineering scope?
            </h3>
            <p className="mt-1 font-sans text-[14px] text-[#6B6578]">
              We evaluate your specifications and provide a realistic timeline and budget within 24 hours.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
