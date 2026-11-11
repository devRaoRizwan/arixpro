import { Link } from 'react-router-dom'
import { TechIcons } from '../components/TechIcons'
import { ArrowUpRight, Terminal } from 'lucide-react'

export function About() {
  const principles = [
    {
      title: 'Determinism Over Guesswork',
      desc: 'We write strict schemas, typed interfaces, and reproducible database migrations. Runtimes must fail loudly during tests rather than quietly in production.',
    },
    {
      title: 'Continuous Verification & CI',
      desc: 'Every commit is verified against automated unit and integration tests. No code enters main without passing automated pipeline checks.',
    },
    {
      title: 'Zero Premature Abstraction',
      desc: 'We prioritize clarity over cleverness. Systems are structured so any competent engineer can read the codebase and understand the execution flow in minutes.',
    },
    {
      title: 'Telemetry & Observability First',
      desc: 'We instrument every endpoint and background queue with latency metrics, structured logging, and anomaly alarms from day one.',
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
              <Terminal className="size-3.5 text-[#A78BFA]" />
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#A78BFA]">
                Engineering Studio
              </span>
            </div>
            <h1 className="font-sans text-[36px] sm:text-[48px] font-bold text-white tracking-tight leading-tight">
              About ArixPro
            </h1>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-[#C9C2E0]/85">
              An independent software company building resilient web apps, high-throughput APIs, and multi-tenant SaaS products for clients who demand working software.
            </p>
          </div>

          {/* Studio Team Photography */}
          <div className="w-full rounded-2xl border border-white/[0.12] bg-[#0E061D]/90 p-4 sm:p-6 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden">
            <img
              src="/images/about-office-team.webp"
              alt="ArixPro Engineering Collaboration Studio"
              width={1376}
              height={768}
              className="w-full max-h-[460px] object-contain rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Ethos & Principles */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-[960px] px-6 sm:px-8 space-y-16">
          <div className="space-y-6 font-sans text-[18px] leading-[1.7] text-[#C9C2E0]">
            <p className="text-white text-[22px] font-medium leading-relaxed">
              We work in small, testable increments. We deploy to production with zero downtime, and we keep the systems stable after launch.
            </p>
            <p>
              Modern software development is plagued by over-engineering, unmaintainable dependencies, and synthetic marketing claims. ArixPro was founded to return to core engineering fundamentals: explicit database schemas, typed boundary contracts, sub-50ms response times, and automated test pipelines.
            </p>
          </div>

          {/* 4 Engineering Principles */}
          <div className="space-y-6">
            <h2 className="font-sans text-[26px] font-bold text-white tracking-tight">
              Our Engineering Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 space-y-2"
                >
                  <h3 className="font-sans text-[17px] font-bold text-[#A78BFA]">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#C9C2E0]/80">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Tech Stack */}
      <section className="py-20 border-b border-white/[0.06] bg-[#07030E] text-center">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-md mx-auto mb-12">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#A78BFA]">
              Technology Standards
            </span>
            <h2 className="mt-2 font-sans text-[30px] font-bold text-white tracking-tight">
              Production Stack
            </h2>
          </div>

          <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
            <TechIcons />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#090412]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="font-sans text-[28px] sm:text-[36px] font-bold text-white tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-3 font-sans text-[16px] text-[#C9C2E0]/80 max-w-xl mx-auto">
            Tell us about your requirements and we will reply with a concrete architecture proposal.
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

export default About
