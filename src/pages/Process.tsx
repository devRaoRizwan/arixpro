import { Link } from 'react-router-dom'
import { GitPullRequest, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export function Process() {
  const steps = [
    {
      number: '01',
      phase: 'Sprint 0',
      title: 'Technical Discovery & Relational Schemas',
      description:
        'We define entity-relationship diagrams, OpenAPI specifications, and auth models before writing application code. We establish performance SLAs, query latency ceilings, and test coverage standards.',
      whatYouGet: 'Documented API schema, database ERD, and agreed sprint milestones with fixed deliverables.',
    },
    {
      number: '02',
      phase: 'Core Build',
      title: 'Milestone Execution & Staging Deploys',
      description:
        'Bi-weekly sprints with automated CI/CD builds deployed to your private staging environment. You click through live functional software at every checkpoint, reviewing real integrations rather than slide decks.',
      whatYouGet: 'Access to password-protected staging builds, clean commit logs, and weekly architectural summaries.',
    },
    {
      number: '03',
      phase: 'Pre-Flight',
      title: 'Automated Testing & Security Hardening',
      description:
        'End-to-end integration test suites run automatically across edge cases. We enforce parameterized queries against injection vectors, audit CORS policies, configure rate-limiters, and verify database backup restore pipelines.',
      whatYouGet: 'Passing test suites across unit, integration, and end-to-end user workflows, plus security sign-off.',
    },
    {
      number: '04',
      phase: 'Production Scale',
      title: 'Production Cutover & Observability',
      description:
        'We monitor latency percentiles, database query plans, and background worker queues. As traffic grows, we assist with index tuning, caching layers, and system upgrades.',
      whatYouGet: 'A dedicated technical escalation channel and operational runbooks, not a handover and disappear.',
    },
  ]

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* Top Architecture Hero */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-purple-100/50 to-transparent blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-4 shadow-xs">
              <GitPullRequest className="size-3.5 text-[#059669]" />
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
                Engineering Methodology
              </span>
            </div>
            <h1 className="font-sans text-[36px] sm:text-[48px] font-bold text-slate-950 tracking-tight leading-tight">
              How We Build &amp; Ship
            </h1>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-slate-600">
              A transparent, test-driven engineering lifecycle engineered to prevent regressions, budget surprises, and unmaintainable codebases.
            </p>
          </div>

          {/* Planning Image Container */}
          <div className="w-full rounded-2xl border border-slate-200 bg-slate-950 p-4 sm:p-6 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.12)] flex items-center justify-center overflow-hidden">
            <img
              src="/images/process-planning.webp"
              alt="Engineering Planning Process"
              width={1376}
              height={768}
              className="w-full max-h-[460px] object-contain rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 4 Numbered Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-[880px] px-6 sm:px-8 space-y-12">
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="ui-card p-8 sm:p-10 relative overflow-hidden bg-white border border-slate-200 shadow-sm rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[24px] sm:text-[28px] font-bold text-[#6336C5] tabular-nums">
                      {step.number}
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#059669] bg-[#059669]/10 px-2.5 py-0.5 rounded-full border border-[#059669]/20">
                      {step.phase}
                    </span>
                  </div>
                </div>

                <h2 className="font-sans text-[22px] sm:text-[24px] font-bold text-slate-950 tracking-tight">
                  {step.title}
                </h2>

                <p className="mt-3 font-sans text-[15px] leading-relaxed text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
                  <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Phase Deliverable
                  </span>
                  <div className="mt-1.5 flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#059669] shrink-0 mt-0.5" />
                    <p className="font-sans text-[14px] font-medium text-slate-900 leading-relaxed">
                      {step.whatYouGet}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="pt-8 text-center">
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

export default Process
