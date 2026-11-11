import { Check } from 'lucide-react'

export interface ProcessStep {
  number: string
  title: string
  description: string
  deliverable: string
  timeline: string
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Architecture',
    description:
      'We examine system requirements, define relational data models, map out API endpoints, and specify boundary constraints before writing any production code.',
    deliverable: 'Technical Specification, Database Schema & Fixed Milestone Agreement',
    timeline: 'Week 1',
  },
  {
    number: '02',
    title: 'Build & Continuous Verification',
    description:
      'Engineered in disciplined agile sprints. Every commit triggers automated unit and integration tests via GitHub Actions. You review live staging builds at every checkpoint.',
    deliverable: 'Clean Codebase, Staging Access & Passing CI/CD Pipelines',
    timeline: 'Weeks 2–6',
  },
  {
    number: '03',
    title: 'Ship & Production Deployment',
    description:
      'Zero-downtime cutover to production cloud infrastructure (AWS / Docker), DNS configuration, SSL provisioning, and real-time error logging setup.',
    deliverable: 'Live Production System, Health Telemetry & Verification Sign-Off',
    timeline: 'Final Sprint',
  },
  {
    number: '04',
    title: 'Support & IP Handover',
    description:
      'Full repository ownership handover with zero licensing entanglements, developer runbooks, post-launch monitoring, and guaranteed bug resolution.',
    deliverable: '100% Codebase Ownership, Runbook Documentation & 30-Day Warranty',
    timeline: 'Ongoing',
  },
]

export function ProcessList() {
  return (
    <div className="w-full divide-y divide-[#E4DEF2]">
      {processSteps.map((step) => (
        <div
          key={step.number}
          className="py-8 sm:py-10 grid grid-cols-1 gap-6 md:grid-cols-12 items-start"
        >
          {/* Step Number */}
          <div className="md:col-span-2 flex items-baseline gap-2">
            <span className="font-mono text-[28px] font-semibold text-[#241044] tabular-nums">
              {step.number}
            </span>
            <span className="font-mono text-[12px] uppercase text-[#6B6578]">
              {step.timeline}
            </span>
          </div>

          {/* Description */}
          <div className="md:col-span-5">
            <h3 className="font-sans text-[20px] font-semibold text-[#241044]">
              {step.title}
            </h3>
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-[#4A4458]">
              {step.description}
            </p>
          </div>

          {/* Concrete Deliverable */}
          <div className="md:col-span-5 rounded-[8px] bg-[#F7F6FC] p-4 border border-[#E4DEF2]">
            <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#6B6578]">
              Deliverable Handed Over
            </span>
            <div className="mt-1.5 flex items-start gap-2">
              <Check className="size-4 text-[#241044] shrink-0 mt-0.5" />
              <p className="font-sans text-[14px] font-medium text-[#241044]">
                {step.deliverable}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProcessList
