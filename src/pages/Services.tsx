import { Link } from 'react-router-dom'
import { TechIcons } from '../components/TechIcons'
import { Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export function Services() {
  const serviceSections = [
    {
      id: 'custom-web-apps',
      title: 'Custom Web Applications',
      badge: 'React & TypeScript',
      description:
        'Single-page applications, multi-tenant SaaS dashboards, and workflow interfaces engineered in modern React 19 and TypeScript. We build responsive components, state-managed data stores, and offline-resilient user workflows with real-time feedback loops.',
      techStack: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3', 'Jest'],
      whatYouGet:
        'Fully typed frontend codebase with production build pipelines, automated component test suites, responsive layouts, and sub-100ms UI interactions.',
      metrics: '< 100ms interaction latency • 99.9% uptime targets',
    },
    {
      id: 'backend-apis',
      title: 'Backend Engineering & APIs',
      badge: 'Python & FastAPI',
      description:
        'Asynchronous Python 3.12 architectures utilizing FastAPI and Django REST. We architect relational schemas, optimize complex query plans in PostgreSQL, configure connection pooling, and orchestrate background worker queues with Redis and Celery.',
      techStack: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL', 'Celery', 'Nginx'],
      whatYouGet:
        'OpenAPI 3.1 compliant schemas, parameterized database migrations, rate-limiting layers, and containerized Docker services ready for cloud deployment.',
      metrics: 'p99 < 35ms response time • 0 data anomalies',
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure & DevOps',
      badge: 'AWS & Kubernetes',
      description:
        'Zero-downtime infrastructure provisioned as code via Terraform. We manage container orchestrations in AWS ECS and EKS, establish TLS termination, and configure automated GitHub Actions CI/CD deployment pipelines with zero human intervention required.',
      techStack: ['Amazon Web Services', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana', 'Linux', 'Cloudflare'],
      whatYouGet:
        'Immutable infrastructure definitions, multi-region database replication, automated backup snapshots, and real-time observability telemetry via Prometheus.',
      metrics: 'Zero-downtime blue/green rollouts • Automated health checks',
    },
    {
      id: 'ai-integrations',
      title: 'AI & Data Integration Pipelines',
      badge: 'LLMs & Workflows',
      description:
        'Deterministic language model integrations and automated document extraction engines. We connect enterprise data stores to verified retrieval pipelines while enforcing mandatory human-in-the-loop sign-off gates before writes execute.',
      techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'GitHub Copilot'],
      whatYouGet:
        'Vectorized document indexing, structured JSON schema generation, strict rate limiting, and end-to-end audit logging for compliance.',
      metrics: '99.8% extraction accuracy • Mandatory audit logging',
    },
  ]

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* Top Architecture Hero */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-100 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-purple-100/50 to-transparent blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-4 shadow-xs">
              <Terminal className="size-3.5 text-[#0284C7]" />
              <span className="font-mono text-[12px] uppercase tracking-wider text-[#6336C5] font-semibold">
                Engineering Solutions
              </span>
            </div>
            <h1 className="font-sans text-[36px] sm:text-[48px] font-bold text-slate-950 tracking-tight leading-tight">
              Production Capabilities &amp; Deliverables
            </h1>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-slate-600">
              Four specialized engineering disciplines. Every engagement delivers production-grade code, documented schemas, and verified test suites.
            </p>
          </div>

          {/* Code IDE Showcase Image */}
          <div className="w-full rounded-2xl border border-slate-200 bg-slate-950 p-4 sm:p-6 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.12)] flex items-center justify-center overflow-hidden">
            <img
              src="/images/services-code-screen.webp"
              alt="Services Code Architecture"
              width={1376}
              height={768}
              className="w-full max-h-[460px] object-contain rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 space-y-12">
          {serviceSections.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 ui-card p-8 sm:p-12 relative overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Scope & Deliverables */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[13px] font-bold text-[#6336C5]">
                        0{index + 1} //
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#059669] bg-[#059669]/10 px-2.5 py-0.5 rounded-full border border-[#059669]/20 font-semibold">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="mt-3 font-sans text-[26px] sm:text-[30px] font-bold text-slate-950 tracking-tight">
                      {service.title}
                    </h2>

                    <p className="mt-4 font-sans text-[16px] leading-[1.65] text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-6 rounded-xl bg-slate-50 p-5 border border-slate-200/80">
                      <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Delivered Outcome
                      </span>
                      <div className="mt-2 flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                        <p className="font-sans text-[15px] font-medium text-slate-900 leading-relaxed">
                          {service.whatYouGet}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 font-mono text-[12px] text-[#0284C7] font-medium">
                      Performance Standard: {service.metrics}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link to="/contact" className="btn-primary rounded-full">
                      <span>Start a Project</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: Tech Stack Dock */}
                <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50/80 p-6 flex flex-col justify-center">
                  <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#6336C5] mb-4 text-center sm:text-left">
                    Verified Runtimes &amp; Tools
                  </span>
                  <div className="flex flex-wrap items-center gap-4">
                    <TechIcons names={service.techStack} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="font-sans text-[28px] sm:text-[36px] font-bold text-slate-950 tracking-tight">
            Have a custom engineering requirement?
          </h2>
          <p className="mt-3 font-sans text-[16px] text-slate-600 max-w-xl mx-auto">
            Tell us about your data volumes, concurrency targets, or product specifications.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary text-[15px] h-[48px] px-8 rounded-full">
              <span>Start a Project</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
