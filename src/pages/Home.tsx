import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { ToolkitTable } from '../components/ToolkitTable'
import { CodeWindow } from '../components/CodeWindow'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layout,
  Server,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
} from 'lucide-react'

export function Home() {
  const featuredProjects = [
    {
      slug: 'sitescopia',
      title: 'SiteScopia',
      subtitle: 'Automated website compliance & security inspection engine.',
      image:
        '/images/media-generation-sitescopia-dashboard-mock-0-7adb795b-9ffd-452c-a525-5c03f5c1d0f7.webp',
      stack: ['FastAPI', 'React 18', 'Pydantic v2', 'Tailwind CSS'],
      isLive: true,
      meta: '38 checks per scan • 142ms avg latency',
    },
    {
      slug: 'jobharvester',
      title: 'JobHarvester',
      subtitle: 'High-scale job discovery and automated ingestion pipeline.',
      image:
        '/images/media-generation-jobharvester-board-mock-0-4ce00962-dbfa-4c30-9cc6-6df95f7d8b04.webp',
      stack: ['Django 5', 'PostgreSQL', 'Celery', 'Redis'],
      isLive: true,
      meta: 'High-throughput Celery background pipeline',
      statusNote: 'Live board in active maintenance (honest status)',
    },
    {
      slug: 'bomwatcher',
      title: 'BOMWatcher',
      subtitle: 'AI-assisted supply chain and BOM component risk scanner.',
      image:
        '/images/media-generation-bomwatcher-scanner-mock-0-70ac7d75-3093-461b-b864-a208b80a2497.webp',
      stack: ['FastAPI', 'LLM / RAG', 'PostgreSQL', 'Docker'],
      isLive: true,
      meta: 'RAG component risk analysis & lifecycle flags',
    },
  ]

  const capabilities = [
    {
      title: 'Custom Web Applications',
      icon: <Layout className="size-6 text-[#6336C5]" />,
      description:
        'Fast, accessible client web applications engineered with React 18, Vite, and strict TypeScript. Modular component architecture with zero bloat.',
      stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS'],
      link: '/services#web-applications',
    },
    {
      title: 'Backend Engineering & APIs',
      icon: <Server className="size-6 text-[#6336C5]" />,
      description:
        'High-concurrency Python architectures built on FastAPI and Django 5. Low-latency REST endpoints, asynchronous Celery task queues, and relational PostgreSQL.',
      stack: ['Python 3.12', 'FastAPI', 'Django 5', 'PostgreSQL', 'Redis'],
      link: '/services#backend-engineering',
    },
    {
      title: 'Full SaaS Products',
      icon: <Sparkles className="size-6 text-[#6336C5]" />,
      description:
        'Complete end-to-end multi-tenant digital platforms with automated Stripe billing, role-based access controls, and production telemetry monitoring.',
      stack: ['PostgreSQL', 'Stripe Billing', 'Docker', 'AWS'],
      link: '/services#saas-products',
    },
    {
      title: 'Mobile Ecosystem & Automation',
      icon: <Smartphone className="size-6 text-[#6336C5]" />,
      description:
        'Unified web frontend, backend API, and mobile applications that stay seamlessly synchronized. Automated background workers and data scrapers.',
      stack: ['React Native', 'Celery Workers', 'GitHub Actions CI/CD'],
      link: '/services',
    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Editorial High-Impact Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-[#E8E4F3]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Eyebrow Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E8E4F3] bg-[#FAF9FD] px-4 py-1.5 font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5] shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1E9E4A] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#1E9E4A]" />
              </span>
              <span>Software Development Company &middot; Full Ecosystem</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-sans text-[36px] sm:text-[54px] lg:text-[62px] font-bold text-[#160B28] tracking-tight leading-[1.08]">
              We Build Web Apps, APIs and SaaS That Scale.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 font-sans text-[17px] sm:text-[19px] leading-relaxed text-[#4A4458] max-w-2xl mx-auto">
              ArixPro designs and engineers fast, secure backend systems, clean APIs, and modern web products for startups and global teams.
            </p>

            {/* High-Converting CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-[15px] px-8">
                <span>Start Your Project</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link to="/work" className="btn-secondary text-[15px] px-8">
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Direct WhatsApp Quick Contact */}
            <div className="mt-5 flex items-center justify-center gap-2 font-sans text-[14px] text-[#6B6578]">
              <span>Have an immediate question?</span>
              <a
                href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-[#315BDA] hover:underline inline-flex items-center gap-1"
              >
                <span>Chat on WhatsApp (+92 312 0418701)</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Protagonist Product UI Showcase (Browser Mockup Frame) */}
          <div className="relative mt-14 sm:mt-18 mx-auto max-w-5xl">
            {/* Ambient Radial Illumination behind Mockup */}
            <div className="hero-glow" />

            <div className="browser-mockup">
              {/* Browser Header Bar */}
              <div className="browser-header">
                <div className="flex items-center gap-1.5">
                  <span className="size-3 rounded-full bg-[#FF5F56]" />
                  <span className="size-3 rounded-full bg-[#FFBD2E]" />
                  <span className="size-3 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex-1 max-w-md mx-auto rounded-[6px] border border-[#E8E4F3] bg-white px-3 py-1 font-mono text-[11px] text-[#6B6578] text-center truncate">
                  https://app.sitescopia.arixpro.com/dashboard/security-inspection
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF8EE] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#1E9E4A]">
                    <span className="size-1.5 rounded-full bg-[#1E9E4A]" />
                    <span>Live 142ms</span>
                  </span>
                </div>
              </div>

              {/* Browser Content Image */}
              <div className="relative aspect-[16/9] w-full bg-[#FAF9FD] overflow-hidden">
                <img
                  src="/images/media-generation-sitescopia-dashboard-mock-0-7adb795b-9ffd-452c-a525-5c03f5c1d0f7.webp"
                  alt="SiteScopia Production Dashboard"
                  width={1280}
                  height={720}
                  className="size-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Mockup Bottom Feature Strip */}
              <div className="border-t border-[#E8E4F3] bg-white p-4 sm:p-5 grid grid-cols-2 gap-4 sm:grid-cols-4 font-sans text-center sm:text-left">
                <div className="border-r border-[#E8E4F3] pr-4">
                  <span className="block font-mono text-[11px] uppercase text-[#6B6578]">
                    Featured System
                  </span>
                  <span className="font-semibold text-[#160B28] text-[14px]">
                    SiteScopia Analyzer
                  </span>
                </div>
                <div className="sm:border-r border-[#E8E4F3] sm:pr-4">
                  <span className="block font-mono text-[11px] uppercase text-[#6B6578]">
                    Verification
                  </span>
                  <span className="font-semibold text-[#1E9E4A] text-[14px]">
                    34/38 Checks Passed
                  </span>
                </div>
                <div className="border-r border-[#E8E4F3] pr-4">
                  <span className="block font-mono text-[11px] uppercase text-[#6B6578]">
                    Architecture
                  </span>
                  <span className="font-semibold text-[#160B28] text-[14px]">
                    FastAPI Async
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase text-[#6B6578]">
                    Client Layer
                  </span>
                  <span className="font-semibold text-[#160B28] text-[14px]">
                    React 18 + TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Production Standards */}
          <div className="mt-14 pt-10 border-t border-[#E8E4F3] grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            <div>
              <span className="block font-sans text-[32px] font-bold text-[#160B28] tracking-tight">
                100k+
              </span>
              <span className="font-sans text-[14px] text-[#6B6578]">
                Daily API Requests Handled
              </span>
            </div>
            <div>
              <span className="block font-sans text-[32px] font-bold text-[#6336C5] tracking-tight">
                38 Checks
              </span>
              <span className="font-sans text-[14px] text-[#6B6578]">
                Automated Audit per Scan
              </span>
            </div>
            <div>
              <span className="block font-sans text-[32px] font-bold text-[#160B28] tracking-tight">
                Python 3.12
              </span>
              <span className="font-sans text-[14px] text-[#6B6578]">
                Strictly Typed Backends
              </span>
            </div>
            <div>
              <span className="block font-sans text-[32px] font-bold text-[#160B28] tracking-tight">
                100%
              </span>
              <span className="font-sans text-[14px] text-[#6B6578]">
                Codebase &amp; IP Ownership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Bento Grid */}
      <section className="py-20 sm:py-24 border-b border-[#E8E4F3] bg-[#FAF9FD]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
                Engineering Solutions
              </span>
              <h2 className="mt-2 font-sans text-[30px] sm:text-[36px] font-bold text-[#160B28] tracking-tight">
                Full-Cycle Software Capabilities
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 font-sans text-[15px] font-semibold text-[#6336C5] hover:text-[#5028A7]"
            >
              <span>Explore all specifications</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="agency-card flex flex-col justify-between p-7"
              >
                <div>
                  <div className="size-12 rounded-[12px] bg-[#FAF9FD] border border-[#E8E4F3] flex items-center justify-center">
                    {cap.icon}
                  </div>

                  <h3 className="mt-5 font-sans text-[19px] font-bold text-[#160B28]">
                    {cap.title}
                  </h3>

                  <p className="mt-2.5 font-sans text-[14px] leading-relaxed text-[#504665]">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E8E4F3]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cap.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-[6px] bg-[#F3F1F9] px-2 py-0.5 font-mono text-[11px] font-medium text-[#4A4458]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={cap.link}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#6336C5] hover:text-[#5028A7]"
                  >
                    <span>View deliverables</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Production Systems (Photo-First Cards) */}
      <section className="py-20 sm:py-24 border-b border-[#E8E4F3]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
                Production Case Studies
              </span>
              <h2 className="mt-2 font-sans text-[30px] sm:text-[36px] font-bold text-[#160B28] tracking-tight">
                Shipped Systems &amp; Live Implementations
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 font-sans text-[15px] font-semibold text-[#6336C5] hover:text-[#5028A7]"
            >
              <span>View all projects</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Code Window Section */}
      <section className="py-20 sm:py-24 border-b border-[#E8E4F3] bg-[#FAF9FD]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
                Engineering Rigor
              </span>
              <h2 className="mt-2 font-sans text-[30px] sm:text-[36px] font-bold text-[#160B28] tracking-tight leading-tight">
                Clean Code Architecture. Zero Fragile Hacks.
              </h2>
              <p className="mt-4 font-sans text-[16px] leading-relaxed text-[#504665]">
                We build backend microservices and databases that don&apos;t wake you up at 3 AM. Strict typing with Python 3.12, explicit Pydantic serialization, and indexed relational schemas.
              </p>

              <div className="mt-6 space-y-3 font-sans text-[14px] text-[#4A4458]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#1E9E4A]" />
                  <span>Sub-200ms latency targets across all API routes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="size-4 text-[#6336C5]" />
                  <span>Strict schema validations preventing malformed mutations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Zap className="size-4 text-[#315BDA]" />
                  <span>Redis caching layers &amp; background Celery workers</span>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/about" className="btn-secondary">
                  Meet Lead Engineer Rao Rizwan
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Table Section */}
      <section className="py-20 sm:py-24 border-b border-[#E8E4F3]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Production Stack
            </span>
            <h2 className="mt-2 font-sans text-[30px] sm:text-[36px] font-bold text-[#160B28] tracking-tight">
              Verified Engineering Toolkit
            </h2>
            <p className="mt-2 font-sans text-[15px] text-[#6B6578]">
              Every technology and framework actively utilized across our client and internal production clusters.
            </p>
          </div>

          <ToolkitTable />
        </div>
      </section>

      {/* High-Impact Bottom Call to Action */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="rounded-[20px] border border-[#E8E4F3] bg-[#FAF9FD] p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
                Direct Collaboration
              </span>
              <h2 className="mt-3 font-sans text-[32px] sm:text-[42px] font-bold text-[#160B28] tracking-tight leading-tight">
                Have a project? Let&apos;s build it right.
              </h2>
              <p className="mt-3 font-sans text-[16px] leading-relaxed text-[#504665]">
                Connect directly with our senior engineer. We evaluate your specifications, domain constraints, and timeline without agency middle-management friction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary w-full sm:w-auto text-[15px] px-8"
              >
                <span>WhatsApp: +92 312 0418701</span>
                <ArrowUpRight className="size-4" />
              </a>

              <Link
                to="/contact"
                className="btn-secondary w-full sm:w-auto text-[15px] px-8"
              >
                Submit Project Brief
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
