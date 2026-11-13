import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  useSeo({
    title: 'About ArixPro · Software Studio',
    description:
      'ArixPro is an independent software studio building web apps, APIs, and SaaS platforms. Direct engineering collaboration with Python, Django, FastAPI, React, and PostgreSQL.',
    path: '/about',
  })

  const stats = [
    { value: '100k+', label: 'Daily API Requests Handled' },
    { value: '38 Checks', label: 'Automated Audit per Scan' },
    { value: 'Python 3.12', label: 'Strictly Typed Backends' },
    { value: '100%', label: 'Codebase & IP Ownership' },
  ]

  const pillars = [
    {
      title: 'Direct Engineer Access',
      desc: 'You work directly with the developers writing your backend and frontend. No account managers, no ticket queues, and no telephone games.',
    },
    {
      title: 'Fixed-Price Architecture',
      desc: 'Every project starts with a verified database schema and locked milestone pricing. We take on full delivery responsibility with zero hourly surprises.',
    },
    {
      title: '100% Client Codebase Ownership',
      desc: 'All source code, Dockerfiles, and database schemas are pushed directly to your private GitHub repository from day one. Zero proprietary lock-in.',
    },
  ]

  const products = [
    {
      name: 'SiteScopia',
      domain: 'Technical SEO & Site Architecture Audit',
      stack: 'Python 3.12 · FastAPI · Redis · React 18',
      summary: 'Automated technical auditing engine running 38 structural checks per scan with sub-second report generation.',
    },
    {
      name: 'JobHarvester',
      domain: 'Multi-Source Job Aggregation & Parsing',
      stack: 'Django 5.x · PostgreSQL 16 · Celery · Redis',
      summary: 'Asynchronous worker fleet aggregating and deduplicating listings across distributed queues with zero state drift.',
    },
    {
      name: 'BOMWatcher',
      domain: 'Bill-of-Materials & Supply Chain Tracking',
      stack: 'FastAPI · PostgreSQL 16 · LLM / RAG · React 18',
      summary: 'Automated electronic component cross-referencing and inventory lifecycle monitoring engine.',
    },
  ]

  const toolkit = [
    {
      tech: 'Python 3.12 & FastAPI',
      domain: 'Backend Services',
      capability: 'High-throughput async REST APIs & workers',
      app: 'SiteScopia, BOMWatcher',
    },
    {
      tech: 'Django 5.x & DRF',
      domain: 'Application Core',
      capability: 'Relational data models & Celery background jobs',
      app: 'JobHarvester',
    },
    {
      tech: 'React 18 & TypeScript',
      domain: 'Frontend Interfaces',
      capability: 'Single-page web applications with sub-second updates',
      app: 'All Client Builds',
    },
    {
      tech: 'PostgreSQL 16 & Redis',
      domain: 'Storage & Cache',
      capability: 'Strict relational schemas, row locks & distributed caching',
      app: 'Production Fleet',
    },
  ]

  return (
    <div className="w-full text-[#4A4458] bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Hero Section */}
      <section className="py-16 border-b border-[#E4DEF2]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <span className="font-sans text-[12px] font-semibold text-[#6B6578] uppercase tracking-wider block mb-2">
              About ArixPro
            </span>
            <h1 className="font-sans text-[28px] font-semibold text-[#241044] tracking-tight leading-[1.2]">
              We build web apps, APIs, and SaaS platforms that scale.
            </h1>
            <p className="mt-3 font-sans text-[16px] text-[#4A4458] leading-relaxed">
              ArixPro is an independent software studio. We take on 1–2 client projects at a time, work directly with founders, and build production systems using Python, Django, FastAPI, React, and PostgreSQL.
            </p>
          </div>

          {/* Unified Stats Strip */}
          <div className="mt-12 pt-8 border-t border-[#E4DEF2] grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="font-sans text-[28px] font-semibold text-[#241044] tracking-tight">
                  {s.value}
                </p>
                <p className="font-sans text-[14px] text-[#6B6578]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. How We Work & Engineering Philosophy */}
      <section className="py-16 bg-[#F7F6FC] border-b border-[#E4DEF2]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="font-sans text-[22px] font-medium text-[#241044] tracking-tight">
              Direct engineering without agency bloat.
            </h2>
            <p className="mt-2 font-sans text-[16px] text-[#4A4458] leading-relaxed">
              Most software agencies operate as sales organizations with offshore development teams. ArixPro was built on the opposite standard: senior engineers collaborating directly with founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-[14px] border border-[#E4DEF2] bg-white flex flex-col justify-between space-y-3"
              >
                <h3 className="font-sans text-[17px] font-semibold text-[#241044]">
                  {p.title}
                </h3>
                <p className="font-sans text-[15px] text-[#4A4458] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Shipped Systems & Live Implementations */}
      <section className="py-16 bg-white border-b border-[#E4DEF2]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="font-sans text-[22px] font-medium text-[#241044] tracking-tight">
              Production platforms we build and maintain.
            </h2>
            <p className="mt-2 font-sans text-[16px] text-[#4A4458] leading-relaxed">
              Real software architectures operating in production with verified throughput and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-[14px] border border-[#E4DEF2] bg-white flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans text-[18px] font-semibold text-[#241044]">
                      {p.name}
                    </h3>
                    <span className="font-mono text-[11px] text-[#6B6578] uppercase">
                      Live
                    </span>
                  </div>
                  <p className="font-sans text-[13px] text-[#6336C5] font-medium">
                    {p.domain}
                  </p>
                  <p className="font-sans text-[14.5px] text-[#4A4458] leading-relaxed">
                    {p.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E4DEF2] font-mono text-[12px] text-[#6B6578]">
                  {p.stack}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Verified Engineering Toolkit Table */}
      <section className="py-16 bg-[#F7F6FC] border-b border-[#E4DEF2]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="font-sans text-[22px] font-medium text-[#241044] tracking-tight">
              Verified engineering stack.
            </h2>
            <p className="mt-2 font-sans text-[16px] text-[#4A4458] leading-relaxed">
              Production tooling selected strictly for stability, type safety, and maintainability.
            </p>
          </div>

          <div className="rounded-[14px] border border-[#E4DEF2] bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E4DEF2] bg-white text-[12px] font-semibold text-[#6B6578] uppercase tracking-wider">
                    <th className="py-3.5 px-6">Technology</th>
                    <th className="py-3.5 px-6">Domain</th>
                    <th className="py-3.5 px-6">Capability</th>
                    <th className="py-3.5 px-6">Production Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4DEF2] text-[14px]">
                  {toolkit.map((row) => (
                    <tr key={row.tech} className="hover:bg-[#F7F6FC] transition-colors">
                      <td className="py-3.5 px-6 font-semibold text-[#241044] whitespace-nowrap">
                        {row.tech}
                      </td>
                      <td className="py-3.5 px-6 text-[#4A4458] whitespace-nowrap">
                        {row.domain}
                      </td>
                      <td className="py-3.5 px-6 text-[#4A4458]">
                        {row.capability}
                      </td>
                      <td className="py-3.5 px-6 text-[#6336C5] font-medium whitespace-nowrap">
                        {row.app}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="font-sans text-[26px] font-semibold text-[#241044] tracking-tight">
              Have a project in mind?
            </h2>
            <p className="font-sans text-[16px] text-[#4A4458] leading-relaxed">
              Tell us about your requirements. An engineer will review your specifications and reply within one business day with an honest technical assessment.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-[48px] px-6 rounded-[8px] bg-[#241044] font-sans text-[14px] font-medium text-white hover:bg-[#1a0b32] transition-colors"
              >
                <span>Talk to an Engineer</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 h-[48px] px-6 rounded-[8px] bg-white border border-[#E4DEF2] font-sans text-[14px] font-medium text-[#241044] hover:bg-[#F7F6FC] transition-colors"
              >
                <span>View Shipped Work</span>
                <ArrowUpRight className="size-4 text-[#6B6578]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
