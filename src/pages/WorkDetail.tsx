import { useParams, Link } from 'react-router-dom'
import { StackBadge, LiveBadge } from '../components/Badges'
import { DashboardMock } from '../components/DashboardMock'
import { EmptyState } from '../components/EmptyState'
import { Table } from '../components/Tables'
import { ArrowLeft, ArrowUpRight, Github, CheckCircle2, AlertTriangle } from 'lucide-react'

export function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()

  // Data for the 3 verified projects
  const projectData: Record<
    string,
    {
      title: string
      tagline: string
      overview: string
      image: string
      stack: string[]
      liveUrl?: string
      githubUrl?: string
      metrics: { label: string; value: string }[]
      keyFeatures: string[]
      technicalArchitecture: string
      note?: string
    }
  > = {
    sitescopia: {
      title: 'SiteScopia',
      tagline: 'Automated Website Compliance & Security Inspection Engine',
      overview:
        'SiteScopia is a high-speed website auditing platform that inspects domain endpoints across 38 distinct security, performance, and compliance checks. Built with an asynchronous FastAPI engine and React client, it returns detailed diagnostic breakdowns in an average of 142 milliseconds.',
      image:
        '/images/media-generation-sitescopia-dashboard-mock-0-7adb795b-9ffd-452c-a525-5c03f5c1d0f7.webp',
      stack: ['FastAPI', 'Python 3.12', 'React 18', 'Pydantic v2', 'Tailwind CSS', 'Docker'],
      liveUrl: 'https://sitescopia.arixpro.com',
      githubUrl: 'https://github.com/devRaoRizwan',
      metrics: [
        { label: 'Checks Per Scan', value: '38 Checks' },
        { label: 'Average Latency', value: '142.6ms' },
        { label: 'Compliance Score', value: '34/38 Passed' },
        { label: 'Architecture', value: 'Async Non-Blocking' },
      ],
      keyFeatures: [
        'TLS 1.3 handshake and cipher suite verification',
        'HTTP security headers validation (HSTS, CSP, X-Frame-Options, CORS)',
        'DNS record hygiene and SPF/DMARC email security parsing',
        'Interactive tabular report with actionable remediation guidance',
      ],
      technicalArchitecture:
        'The backend is built with FastAPI utilizing httpx async HTTP client for concurrent socket polling. Every test executes concurrently across an event loop rather than serial HTTP round-trips, ensuring instantaneous report generation even when testing slow foreign endpoints.',
    },
    jobharvester: {
      title: 'JobHarvester',
      tagline: 'High-Scale Job Discovery & Automated Ingestion Pipeline',
      overview:
        'JobHarvester is a structured job board and data harvesting system designed to ingest, deduplicate, and index tech employment postings across diverse company career portals. Built with Django 5, PostgreSQL 16, and Celery distributed workers.',
      image:
        '/images/media-generation-jobharvester-board-mock-0-4ce00962-dbfa-4c30-9cc6-6df95f7d8b04.webp',
      stack: ['Django 5', 'Python 3.12', 'PostgreSQL 16', 'Celery', 'Redis', 'RabbitMQ'],
      liveUrl: 'https://jobharvester.arixpro.com',
      githubUrl: 'https://github.com/devRaoRizwan',
      metrics: [
        { label: 'Queue Broker', value: 'Redis 7.2' },
        { label: 'Ingestion Engine', value: 'Celery Distributed' },
        { label: 'Relational DB', value: 'PostgreSQL 16' },
        { label: 'API Framework', value: 'Django REST Framework' },
      ],
      note: 'Note on Live Status: The live indexing server is currently in active maintenance and displays a clean "No jobs yet" empty state. Per our engineering integrity rules, we do not fabricate synthetic live listings to pretend the production board is full.',
      keyFeatures: [
        'Distributed Celery worker queues with RabbitMQ backpressure control',
        'PostgreSQL full-text search indexing with trigram matching for titles',
        'Automated deduplication algorithm comparing canonical company domains',
        'Redis-backed API rate limiting and token authentication',
      ],
      technicalArchitecture:
        'Ingestion scrapers run as isolated Celery tasks triggered by beat schedules. Data passes through strict Pydantic parsing layers before database writes, isolating database locks and preventing malformed job entries from corrupting the relational schema.',
    },
    bomwatcher: {
      title: 'BOMWatcher',
      tagline: 'AI Supply-Chain Bill of Materials Risk Scanner',
      overview:
        'BOMWatcher is an enterprise supply-chain intelligence tool that analyzes electronics and software Bills of Materials. By querying manufacturer databases and applying RAG (Retrieval-Augmented Generation) models, it identifies end-of-life (EOL) hardware parts and software supply chain vulnerabilities.',
      image:
        '/images/media-generation-bomwatcher-scanner-mock-0-70ac7d75-3093-461b-b864-a208b80a2497.webp',
      stack: ['FastAPI', 'Python 3.12', 'LLM / RAG', 'PostgreSQL', 'SQLAlchemy 2.0', 'Docker'],
      liveUrl: 'https://bomwatcher.arixpro.com',
      githubUrl: 'https://github.com/devRaoRizwan',
      metrics: [
        { label: 'Model Architecture', value: 'FastAPI + RAG' },
        { label: 'Database', value: 'PostgreSQL + pgvector' },
        { label: 'Part Catalogs', value: 'Component Lifecycle' },
        { label: 'Deployment', value: 'Docker Containerized' },
      ],
      keyFeatures: [
        'Automated BOM ingestion (CSV, JSON, and manufacturer exports)',
        'Component lifecycle risk flagging (Active, NRND, EOL, Obsolete)',
        'RAG-powered replacement recommendations with verified pin compatibility',
        'Lead-time tracking and supply chain disruption warnings',
      ],
      technicalArchitecture:
        'Combines structured relational queries with vector similarity search in PostgreSQL (pgvector). Component documentation is chunked and embedded, allowing the RAG agent to synthesize exact engineering alternatives when components are marked obsolete.',
    },
  }

  const project = slug ? projectData[slug] : undefined

  if (!project) {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto max-w-md">
          <h2 className="font-sans text-[22px] font-semibold text-[#241044]">
            Project Not Found
          </h2>
          <p className="mt-2 text-[#6B6578] font-sans text-[14px]">
            The project you requested does not exist or has been moved.
          </p>
          <Link to="/work" className="btn-primary mt-6">
            Back to Work
          </Link>
        </div>
      </div>
    )
  }

  // BOM sample table data for bomwatcher
  const bomSampleData = [
    {
      partNumber: 'STM32F407VGT6',
      description: 'MCU 32-bit ARM Cortex-M4 1MB Flash',
      manufacturer: 'STMicroelectronics',
      status: 'Active',
      risk: 'Low',
      leadTime: '12 Weeks',
    },
    {
      partNumber: 'FT232RL-REEL',
      description: 'USB to Serial UART Interface IC',
      manufacturer: 'FTDI',
      status: 'Active',
      risk: 'Low',
      leadTime: '8 Weeks',
    },
    {
      partNumber: 'AT24C256C-SSHL-T',
      description: 'EEPROM 256Kbit I2C 1MHz SOIC-8',
      manufacturer: 'Microchip',
      status: 'NRND',
      risk: 'Medium',
      leadTime: '24 Weeks',
    },
    {
      partNumber: 'LM1117IMPX-3.3',
      description: 'LDO Voltage Regulator 3.3V 800mA',
      manufacturer: 'Texas Instruments',
      status: 'Active',
      risk: 'Low',
      leadTime: '6 Weeks',
    },
  ]

  const bomColumns = [
    {
      key: 'partNumber',
      header: 'Part Number',
      render: (item: (typeof bomSampleData)[0]) => (
        <span className="font-mono font-medium text-[#241044]">{item.partNumber}</span>
      ),
    },
    {
      key: 'description',
      header: 'Component Description',
    },
    {
      key: 'manufacturer',
      header: 'Manufacturer',
    },
    {
      key: 'status',
      header: 'Lifecycle',
      render: (item: (typeof bomSampleData)[0]) => (
        <span
          className={`font-mono text-[12px] px-2 py-0.5 rounded-[4px] border ${
            item.status === 'Active'
              ? 'bg-[#EAF8EE] text-[#241044] border-[#C8EED3]'
              : 'bg-[#FFF8E6] text-[#241044] border-[#FEEBC8]'
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: 'leadTime',
      header: 'Lead Time',
      align: 'right' as const,
      render: (item: (typeof bomSampleData)[0]) => (
        <span className="font-mono tabular-nums text-[#241044]">{item.leadTime}</span>
      ),
    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb & Navigation */}
      <div className="border-b border-[#E4DEF2] py-4 bg-[#F7F6FC]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 flex items-center justify-between">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-[#4A4458] hover:text-[#241044]"
          >
            <ArrowLeft className="size-4 text-[#241044]" />
            <span>All Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 font-sans text-[13px] font-medium text-[#315BDA] hover:underline"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 font-sans text-[13px] font-medium text-[#4A4458] hover:text-[#241044]"
              >
                <Github className="size-3.5 text-[#241044]" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Project Header */}
      <section className="py-12 border-b border-[#E4DEF2]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <LiveBadge />
            <span className="font-mono text-[12px] text-[#6B6578]">
              Verified Production Build
            </span>
          </div>

          <h1 className="font-sans text-[28px] font-semibold text-[#241044] sm:text-[32px] tracking-tight">
            {project.title}
          </h1>

          <p className="mt-2 font-sans text-[16px] leading-relaxed text-[#4A4458]">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <StackBadge key={s}>{s}</StackBadge>
            ))}
          </div>
        </div>
      </section>

      {/* Hero UI Screenshot Container - Clean Frame, No Fake Browser Dots, Object Contain */}
      <section className="py-12 border-b border-[#E4DEF2] bg-[#F7F6FC]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="rounded-[14px] border border-[#E4DEF2] bg-white p-4 sm:p-6 overflow-hidden flex items-center justify-center">
            <img
              src={project.image}
              alt={`${project.title} Interface`}
              width={1280}
              height={720}
              className="w-full max-h-[560px] object-contain rounded-[8px]"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Note if applicable (e.g. JobHarvester integrity note) */}
      {project.note && (
        <section className="py-6 border-b border-[#E4DEF2] bg-[#FFFDF9]">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
            <div className="flex items-start gap-3 rounded-[8px] border border-[#E4DEF2] bg-white p-4">
              <AlertTriangle className="size-5 text-[#241044] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans text-[14px] font-semibold text-[#241044]">
                  Production Transparency Notice
                </h4>
                <p className="mt-1 font-sans text-[13px] leading-relaxed text-[#4A4458]">
                  {project.note}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Metrics Row */}
      <section className="py-10 border-b border-[#E4DEF2]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-[8px] border border-[#E4DEF2] bg-[#F7F6FC] p-4 text-center sm:text-left"
              >
                <span className="block font-mono text-[12px] uppercase text-[#6B6578]">
                  {m.label}
                </span>
                <span className="mt-1 block font-mono text-[18px] font-semibold text-[#241044] tabular-nums">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Technical Content */}
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Architecture and Features */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="font-sans text-[22px] font-semibold text-[#241044]">
                  System Overview
                </h2>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#4A4458]">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="font-sans text-[18px] font-semibold text-[#241044]">
                  Engineering Architecture
                </h3>
                <p className="mt-2 font-sans text-[15px] leading-relaxed text-[#4A4458]">
                  {project.technicalArchitecture}
                </p>
              </div>

              <div>
                <h3 className="font-sans text-[18px] font-semibold text-[#241044]">
                  Key Capabilities Delivered
                </h3>
                <ul className="mt-3 space-y-2.5 font-sans text-[14px] text-[#4A4458]">
                  {project.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-[#241044] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special live component embed for SiteScopia: DashboardMock */}
              {slug === 'sitescopia' && (
                <div className="mt-10">
                  <h3 className="font-sans text-[18px] font-semibold text-[#241044] mb-4">
                    Live Scan Engine Diagnostic (34/38 Passed)
                  </h3>
                  <DashboardMock />
                </div>
              )}

              {/* Special component embed for JobHarvester: Honest EmptyState */}
              {slug === 'jobharvester' && (
                <div className="mt-10">
                  <h3 className="font-sans text-[18px] font-semibold text-[#241044] mb-4">
                    Live Board Maintenance State
                  </h3>
                  <EmptyState
                    title="No jobs yet"
                    description="The ingestion scraper has been paused for scheduled database re-indexing. New employment feeds will populate once the crawler runs."
                    actionLabel="View Ingestion Pipeline Repo"
                    onAction={() =>
                      window.open('https://github.com/devRaoRizwan', '_blank')
                    }
                  />
                </div>
              )}

              {/* Special component embed for BOMWatcher: BOM Table */}
              {slug === 'bomwatcher' && (
                <div className="mt-10">
                  <h3 className="font-sans text-[18px] font-semibold text-[#241044] mb-4">
                    Sample Component Lifecycle Table
                  </h3>
                  <Table
                    columns={bomColumns}
                    data={bomSampleData}
                    keyField="partNumber"
                  />
                </div>
              )}
            </div>

            {/* Right Column: Project Meta Card & Action */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-[14px] border border-[#E4DEF2] bg-[#F7F6FC] p-6 shadow-sm">
                <span className="font-mono text-[12px] font-medium uppercase tracking-wider text-[#6336C5]">
                  Project Specifications
                </span>
                <h4 className="mt-2 font-sans text-[18px] font-semibold text-[#241044]">
                  Need a similar architecture?
                </h4>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#6B6578]">
                  We can design, engineer, and deploy a comparable system for your business with fixed milestones and zero technical debt.
                </p>

                <div className="mt-6 pt-5 border-t border-[#E4DEF2] space-y-3 font-sans text-[14px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B6578]">Timeline</span>
                    <span className="font-medium text-[#241044]">4–8 Weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B6578]">Ownership</span>
                    <span className="font-medium text-[#241044]">100% Client IP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B6578]">Lead Engineer</span>
                    <span className="font-medium text-[#241044]">Rao Rizwan</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E4DEF2] flex flex-col gap-3">
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Discuss This System
                  </Link>
                  <a
                    href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-secondary w-full justify-center"
                  >
                    Quick WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkDetail
