import { Link } from 'react-router-dom'
import { TechIcons } from '../components/TechIcons'
import { CheckCircle2, ArrowUpRight, Terminal } from 'lucide-react'

export function Services() {
  const serviceSections = [
    {
      id: 'web-applications',
      badge: 'FRONTEND ARCHITECTURE',
      title: 'Web Applications',
      description:
        'Engineered with React 19, TypeScript, and state architectures tuned to eliminate unnecessary re-renders. We build fluid, accessible web interfaces capable of visualizing high-frequency data streams over WebSockets without frame-rate drops.',
      whatYouGet: 'A production client application with 100/100 Lighthouse performance, full type safety, and comprehensive test coverage before cutover.',
      techStack: ['React', 'TypeScript', 'JavaScript'],
      metrics: 'Zero memory leaks • Sub-5ms virtual DOM updates',
    },
    {
      id: 'backend-apis',
      badge: 'DISTRIBUTED SERVICES',
      title: 'Backend & High-Throughput APIs',
      description:
        'Asynchronous Python 3.12 architectures utilizing FastAPI and Django REST. We architect relational schemas, optimize complex query plans in PostgreSQL, configure connection pooling, and orchestrate background worker queues with Redis and Celery.',
      whatYouGet: 'A typed, self-documenting OpenAPI contract with sub-35ms p99 endpoint response times and fault-tolerant background queues.',
      techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      metrics: '50,000 req/sec sustained • Strict ACID transactions',
    },
    {
      id: 'saas-products',
      badge: 'SUBSCRIPTION ENGINES',
      title: 'Multi-Tenant SaaS Platforms',
      description:
        'Complete end-to-end multi-tenant architectures featuring row-level security isolation, Stripe subscription lifecycle automation, granular role-based access controls (RBAC), and real-time administrative telemetry consoles.',
      whatYouGet: 'A battle-tested commercial SaaS platform ready to safely onboard enterprise accounts and process recurring billing from day one.',
      techStack: ['PostgreSQL', 'React', 'Python', 'Docker', 'AWS'],
      metrics: 'Zero tenant cross-bleed • Automated billing webhooks',
    },
    {
      id: 'ai-automation',
      badge: 'INTELLIGENT PIPELINES',
      title: 'Autonomous AI Workflows & Human Approval Gates',
      description:
        'Deterministic language model integrations and automated document extraction engines. We connect enterprise data stores to verified retrieval pipelines while enforcing mandatory human-in-the-loop sign-off gates before writes execute.',
      whatYouGet: 'A named business workflow executed by software with strict JSON schema validation and zero-hallucination guardrails.',
      techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      metrics: '99.8% extraction accuracy • Mandatory audit logging',
    },
  ]

  return (
    <div className="w-full text-white selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Top Architecture Hero */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-white/[0.06] overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#794BE8]/15 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-4">
              <Terminal className="size-3.5 text-[#38BDF8]" />
              <span className="font-mono text-[12px] uppercase tracking-wider text-[#A78BFA]">
                Engineering Solutions
              </span>
            </div>
            <h1 className="font-sans text-[36px] sm:text-[48px] font-bold text-white tracking-tight leading-tight">
              Production Capabilities &amp; Deliverables
            </h1>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-[#C9C2E0]/85">
              Four specialized engineering disciplines. Every engagement delivers production-grade code, documented schemas, and verified test suites.
            </p>
          </div>

          {/* Code IDE Showcase Image */}
          <div className="w-full rounded-2xl border border-white/[0.12] bg-[#0E061D]/90 p-4 sm:p-6 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden">
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
              className="scroll-mt-28 ui-card p-8 sm:p-12 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Scope & Deliverables */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[13px] font-bold text-[#A78BFA]">
                        0{index + 1} //
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#34D399] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/20">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="mt-3 font-sans text-[26px] sm:text-[30px] font-bold text-white tracking-tight">
                      {service.title}
                    </h2>

                    <p className="mt-4 font-sans text-[16px] leading-[1.65] text-[#C9C2E0]/85">
                      {service.description}
                    </p>

                    <div className="mt-6 rounded-xl bg-black/40 p-5 border border-white/[0.08]">
                      <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#8378A6]">
                        Delivered Outcome
                      </span>
                      <div className="mt-2 flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-[#10B981] shrink-0 mt-0.5" />
                        <p className="font-sans text-[15px] font-medium text-white leading-relaxed">
                          {service.whatYouGet}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 font-mono text-[12px] text-[#38BDF8]">
                      Performance Standard: {service.metrics}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link to="/contact" className="btn-primary">
                      <span>Start a Project</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: Tech Stack Dock */}
                <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-black/40 p-6 flex flex-col justify-center">
                  <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A78BFA] mb-4 text-center sm:text-left">
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
      <section className="py-20 bg-[#07030E]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="font-sans text-[28px] sm:text-[36px] font-bold text-white tracking-tight">
            Have a custom engineering requirement?
          </h2>
          <p className="mt-3 font-sans text-[16px] text-[#C9C2E0]/80 max-w-xl mx-auto">
            Tell us about your data volumes, concurrency targets, or product specifications.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary text-[16px] h-[50px] px-8">
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
