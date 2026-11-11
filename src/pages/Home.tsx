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
      statusNote: 'Live board in active maintenance',
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
      icon: <Layout className="size-8 text-[#241044]" />,
      description:
        'Fast, accessible client web applications engineered with React 18, Vite, and strict TypeScript. Modular component architecture with zero bloat.',
      stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS'],
      link: '/services#web-applications',
    },
    {
      title: 'Backend Engineering & APIs',
      icon: <Server className="size-8 text-[#241044]" />,
      description:
        'High-concurrency Python architectures built on FastAPI and Django 5. Low-latency REST endpoints, asynchronous Celery task queues, and relational PostgreSQL.',
      stack: ['Python 3.12', 'FastAPI', 'Django 5', 'PostgreSQL', 'Redis'],
      link: '/services#backend-engineering',
    },
    {
      title: 'Full SaaS Products',
      icon: <Sparkles className="size-8 text-[#241044]" />,
      description:
        'Complete end-to-end multi-tenant digital platforms with automated Stripe billing, role-based access controls, and production telemetry monitoring.',
      stack: ['PostgreSQL', 'Stripe Billing', 'Docker', 'AWS'],
      link: '/services#saas-products',
    },
    {
      title: 'Mobile Ecosystem & Automation',
      icon: <Smartphone className="size-8 text-[#241044]" />,
      description:
        'Unified web frontend, backend API, and mobile applications synchronized across platforms. Automated background workers and data scrapers.',
      stack: ['React Native', 'Celery Workers', 'GitHub Actions CI/CD'],
      link: '/services',
    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Editorial Hero: Max 100vh on Desktop, 2 Columns (Text Left ~45%, Dashboard Right ~55%) */}
      <section className="relative overflow-hidden py-12 lg:py-16 border-b border-[#E4DEF2]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline + Subhead + 2 Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {/* Eyebrow: 12px 600, muted, not purple */}
              <div className="inline-flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6B6578]">
                <span>Software Development &amp; Systems Architecture</span>
              </div>

              {/* Main Headline: Display 28px 600 to 44px on larger displays */}
              <h1 className="mt-4 font-sans text-[32px] sm:text-[40px] lg:text-[44px] font-semibold text-[#241044] tracking-tight leading-[1.15]">
                We Build Web Apps, APIs and SaaS That Scale.
              </h1>

              {/* Subhead: 16px 400, line height 1.5, #4A4458 */}
              <p className="mt-4 font-sans text-[16px] leading-relaxed text-[#4A4458]">
                ArixPro designs and engineers fast, secure backend systems, clean APIs, and modern web products for startups and global teams.
              </p>

              {/* Buttons: Same Height 48px, White-Space Nowrap */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary">
                  <span>Start Your Project</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link to="/work" className="btn-secondary">
                  <span>Explore Our Work</span>
                </Link>
              </div>

              {/* WhatsApp Quick Note */}
              <div className="mt-5 flex flex-wrap items-center gap-1.5 font-sans text-[14px] text-[#6B6578]">
                <span>Have an immediate question?</span>
                <a
                  href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-[#315BDA] hover:underline inline-flex items-center gap-1"
                >
                  <span>WhatsApp (+92 312 0418701)</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: SiteScopia Dashboard Mockup at 55-60% width, max height 520px, object-fit contain, no browser-in-browser frame */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="w-full rounded-[14px] border border-[#E4DEF2] bg-[#F7F6FC] p-3 sm:p-4 shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/images/media-generation-sitescopia-dashboard-mock-0-7adb795b-9ffd-452c-a525-5c03f5c1d0f7.webp"
                  alt="SiteScopia Production Dashboard"
                  width={1280}
                  height={720}
                  className="w-full max-h-[480px] object-contain rounded-[8px]"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Stats Bar: All 4 Values in Same Style, Ink #241044 28px 600, Labels Muted 14px, No Orange, No Purple */}
          <div className="mt-12 pt-10 border-t border-[#E4DEF2] grid grid-cols-2 gap-6 sm:grid-cols-4 text-center sm:text-left">
            <div>
              <span className="block font-sans text-[28px] font-semibold text-[#241044] tracking-tight tabular-nums">
                100k+
              </span>
              <span className="mt-1 block font-sans text-[14px] text-[#6B6578]">
                Daily API Requests Handled
              </span>
            </div>
            <div>
              <span className="block font-sans text-[28px] font-semibold text-[#241044] tracking-tight tabular-nums">
                38 Checks
              </span>
              <span className="mt-1 block font-sans text-[14px] text-[#6B6578]">
                Automated Audit per Scan
              </span>
            </div>
            <div>
              <span className="block font-sans text-[28px] font-semibold text-[#241044] tracking-tight tabular-nums">
                Python 3.12
              </span>
              <span className="mt-1 block font-sans text-[14px] text-[#6B6578]">
                Strictly Typed Backends
              </span>
            </div>
            <div>
              <span className="block font-sans text-[28px] font-semibold text-[#241044] tracking-tight tabular-nums">
                100%
              </span>
              <span className="mt-1 block font-sans text-[14px] text-[#6B6578]">
                Codebase &amp; IP Ownership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Bento Grid: Section Padding Strictly 64px (py-16), Cards Line Up Perfectly */}
      <section className="py-16 border-b border-[#E4DEF2] bg-[#F7F6FC]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6B6578]">
                Engineering Solutions
              </span>
              <h2 className="mt-2 font-sans text-[24px] sm:text-[28px] font-semibold text-[#241044] tracking-tight">
                Full-Cycle Software Capabilities
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 font-sans text-[14px] font-semibold text-[#6336C5] hover:text-[#4F2AA0]"
            >
              <span>Explore all specifications</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="ui-card flex flex-col justify-between p-6 h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Icon: 32px, Top Left, 16px Padding Below */}
                  <div className="mb-4">{cap.icon}</div>

                  {/* Title Area: Fixed Height 56px, 2 Lines Max, Same Font Size */}
                  <div className="min-h-[56px] flex items-start">
                    <h3 className="font-sans text-[18px] font-semibold text-[#241044] leading-snug line-clamp-2">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Body Copy: flex-1 */}
                  <p className="mt-2 flex-1 font-sans text-[14px] leading-relaxed text-[#4A4458]">
                    {cap.description}
                  </p>
                </div>

                {/* Tag Area: Fixed Height 36px, 1 Row, Wrap If Needed, Locked to Bottom */}
                <div className="mt-6 pt-4 border-t border-[#E4DEF2]">
                  <div className="h-[36px] flex items-center gap-1.5 overflow-hidden mb-3">
                    {cap.stack.map((item) => (
                      <span
                        key={item}
                        className="whitespace-nowrap rounded-[6px] bg-[#F7F6FC] px-2.5 py-1 font-mono text-[11px] font-medium text-[#4A4458] border border-[#E4DEF2]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={cap.link}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#6336C5] hover:text-[#4F2AA0]"
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

      {/* Featured Case Studies: Section Padding Strictly 64px (py-16) */}
      <section className="py-16 border-b border-[#E4DEF2]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6B6578]">
                Production Case Studies
              </span>
              <h2 className="mt-2 font-sans text-[24px] sm:text-[28px] font-semibold text-[#241044] tracking-tight">
                Shipped Systems &amp; Live Implementations
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 font-sans text-[14px] font-semibold text-[#6336C5] hover:text-[#4F2AA0]"
            >
              <span>View all projects</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Code Window Section: Section Padding Strictly 64px (py-16) */}
      <section className="py-16 border-b border-[#E4DEF2] bg-[#F7F6FC]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6B6578]">
                Engineering Discipline
              </span>
              <h2 className="mt-2 font-sans text-[24px] sm:text-[28px] font-semibold text-[#241044] tracking-tight leading-tight">
                Clean Code Architecture. Zero Fragile Hacks.
              </h2>
              <p className="mt-4 font-sans text-[16px] leading-relaxed text-[#4A4458]">
                We engineer resilient backend microservices and scalable relational architectures. Built with Python 3.12, explicit Pydantic serialization, and indexed PostgreSQL schemas.
              </p>

              <div className="mt-6 space-y-3 font-sans text-[14px] text-[#4A4458]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#241044]" />
                  <span>Sub-200ms latency targets across all API routes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="size-4 text-[#241044]" />
                  <span>Strict schema validations preventing malformed mutations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Zap className="size-4 text-[#241044]" />
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

      {/* Toolkit Table Section: Section Padding Strictly 64px (py-16) */}
      <section className="py-16 border-b border-[#E4DEF2]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6B6578]">
              Engineering Stack
            </span>
            <h2 className="mt-2 font-sans text-[24px] sm:text-[28px] font-semibold text-[#241044] tracking-tight">
              Verified Engineering Toolkit
            </h2>
            <p className="mt-2 font-sans text-[15px] text-[#6B6578]">
              Core languages, frameworks, and infrastructure active in our production deployments.
            </p>
          </div>

          <ToolkitTable />
        </div>
      </section>

      {/* Call to Action: Section Padding 64px (py-16), Box Padding 48px, Buttons One Line Each */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="rounded-[14px] border border-[#E4DEF2] bg-[#F7F6FC] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6B6578]">
                Direct Collaboration
              </span>
              <h2 className="mt-2 font-sans text-[26px] sm:text-[32px] font-semibold text-[#241044] tracking-tight leading-tight">
                Have a project? Let&apos;s build it right.
              </h2>
              <p className="mt-2 font-sans text-[16px] leading-relaxed text-[#4A4458]">
                Connect directly with our senior engineer. We evaluate your specifications, domain constraints, and timeline without agency middle-management friction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <a
                href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary w-full sm:w-auto"
              >
                <span>WhatsApp +92 312 0418701</span>
                <ArrowUpRight className="size-4" />
              </a>

              <Link to="/contact" className="btn-secondary w-full sm:w-auto">
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
