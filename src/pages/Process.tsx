import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowUpRight, GitPullRequest } from 'lucide-react'

export function Process() {
  const steps = [
    {
      number: '01',
      phase: 'DISCOVERY & ARCHITECTURE',
      title: 'Boundary Definition & Schema Contracts',
      description:
        'We map data models, user roles, concurrency limits, and third-party dependencies. We write explicit OpenAPI specs and database entity diagrams before writing implementation code.',
      whatYouGet: 'A finalized one-page scope document and typed schema contract defining what is built and what is out of bounds.',
    },
    {
      number: '02',
      phase: 'INCREMENTAL SPRINTS',
      title: 'Weekly Deployable Increments',
      description:
        'We build in small, fully tested vertical slices. Automated CI pipelines run unit, integration, and lint checks against every pull request. No massive monolithic handovers at the end.',
      whatYouGet: 'A working version running on staging every single week for your review and verification.',
    },
    {
      number: '03',
      phase: 'PRODUCTION CUTOVER',
      title: 'Zero-Downtime Deployment & Canary Verification',
      description:
        'We configure cloud infrastructure, database read-replicas, and DNS records. Deployment follows blue/green or rolling canary strategies with continuous telemetry enabled.',
      whatYouGet: 'A live, audited product running in production with real-time error tracking and automated alerts.',
    },
    {
      number: '04',
      phase: 'CONTINUOUS RELIABILITY',
      title: 'Operational Telemetry & SRE Support',
      description:
        'We monitor latency percentiles, database query plans, and background worker queues. As traffic grows, we assist with index tuning, caching layers, and system upgrades.',
      whatYouGet: 'A dedicated technical escalation channel and operational runbooks, not a handover and disappear.',
    },
  ]

  return (
    <div className="w-full text-white selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Top Architecture Hero */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#794BE8]/15 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-4">
              <GitPullRequest className="size-3.5 text-[#10B981]" />
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#A78BFA]">
                Engineering Methodology
              </span>
            </div>
            <h1 className="font-sans text-[36px] sm:text-[48px] font-bold text-white tracking-tight leading-tight">
              How We Build &amp; Ship
            </h1>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-[#C9C2E0]/85">
              A transparent, test-driven engineering lifecycle engineered to prevent regressions, budget surprises, and unmaintainable codebases.
            </p>
          </div>

          {/* Planning Image Container */}
          <div className="w-full rounded-2xl border border-white/[0.12] bg-[#0E061D]/90 p-4 sm:p-6 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden">
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
          <div className="space-y-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="ui-card p-8 sm:p-10 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[24px] sm:text-[28px] font-bold text-[#A78BFA] tabular-nums">
                      {step.number}
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#34D399] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/20">
                      {step.phase}
                    </span>
                  </div>
                </div>

                <h2 className="font-sans text-[22px] sm:text-[24px] font-bold text-white tracking-tight">
                  {step.title}
                </h2>

                <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#C9C2E0]/85">
                  {step.description}
                </p>

                <div className="mt-6 rounded-xl bg-black/40 p-4 border border-white/[0.08]">
                  <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#8378A6]">
                    Phase Deliverable
                  </span>
                  <div className="mt-1.5 flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#10B981] shrink-0 mt-0.5" />
                    <p className="font-sans text-[14px] font-medium text-white leading-relaxed">
                      {step.whatYouGet}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="pt-8 text-center">
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

export default Process
