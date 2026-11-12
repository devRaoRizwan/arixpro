import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TechSphere } from '../components/TechSphere'
import { PencilSchematic } from '../components/PencilSchematic'
import { TypewriterText } from '../components/TypewriterText'
import { SolutionFinder } from '../components/SolutionFinder'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const systems = [
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    image: '/images/work-analytics-dashboard.webp',
    metric: '< 45ms query latency',
    tag: 'Web Analytics',
    description: 'High-throughput dashboard with live WebSocket charts and sub-second metrics.',
  },
  {
    slug: 'ecommerce-admin',
    title: 'E-commerce Admin',
    image: '/images/work-ecommerce-admin.webp',
    metric: '0.00% inventory drift',
    tag: 'Order Management',
    description: 'Multi-channel inventory management, order processing, and warehouse sync.',
  },
  {
    slug: 'crm-platform',
    title: 'CRM Platform',
    image: '/images/work-crm-platform.webp',
    metric: '250k indexed accounts',
    tag: 'Customer Records',
    description: 'Opportunity pipeline, background email sync, and instant customer search.',
  },
]

export function Home() {
  // Page-based scroll: When user is on page 1 (hero) and scrolls downward a bit, smoothly glide into page 2
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }

    let isThrottled = false

    const handleWheel = (e: WheelEvent) => {
      // If user is at or near the top of the hero and moves wheel downwards:
      if (window.scrollY < 80 && e.deltaY > 15 && !isThrottled) {
        isThrottled = true
        e.preventDefault()
        const next = document.getElementById('what-we-build')
        if (next) {
          next.scrollIntoView({ behavior: 'smooth' })
        }
        setTimeout(() => {
          isThrottled = false
        }, 900)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="w-full text-white selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* 1. Page 1: Hero Section (Full Viewport Height) */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 sm:py-20 overflow-hidden snap-start scroll-mt-20"
      >
        {/* Ambient Top Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#794BE8]/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[350px] bg-[#38BDF8]/10 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Headline with Typewriter & Direct CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h1 className="font-sans text-[38px] sm:text-[50px] lg:text-[58px] xl:text-[64px] font-bold text-white tracking-tight leading-[1.15]">
                <span>We Build</span>
                <TypewriterText />
                <span className="block mt-1 sm:mt-2 text-white">That Scale.</span>
              </h1>

              <p className="mt-6 font-sans text-[17px] sm:text-[20px] leading-[1.65] text-[#C9C2E0]/90 max-w-xl">
                Custom software, built clean, tested, and shipped to production.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link to="/contact" className="btn-primary text-[16px] h-[52px] px-8">
                  <span>Build With Us</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link to="/work" className="btn-secondary text-[16px] h-[52px] px-8">
                  <span>View Shipped Systems</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Servers, Monitors & Mobiles Blueprint */}
            <div className="lg:col-span-6">
              <PencilSchematic />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Page 2: Interactive Solution Finder (Full Page Height, Centered & Spacious) */}
      <section
        id="what-we-build"
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 sm:py-24 border-t border-white/[0.06] bg-[#0A0514]/50 snap-start scroll-mt-20"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="font-sans text-[30px] sm:text-[40px] font-bold text-white tracking-tight">
              What does your business need?
            </h2>
            <p className="mt-2.5 text-[15px] sm:text-[16px] text-[#C9C2E0]/75">
              Search what you want to achieve or select a core capability.
            </p>
          </div>

          <SolutionFinder />
        </div>
      </section>

      {/* 3. Page 3: Real Shipped Work (Full Page Height, Centered 3-Column Grid) */}
      <section
        id="shipped-systems"
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 sm:py-24 border-t border-white/[0.06] snap-start scroll-mt-20"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#A78BFA]">
                Case Studies
              </span>
              <h2 className="mt-2.5 font-sans text-[30px] sm:text-[40px] font-bold text-white tracking-tight">
                Shipped Systems
              </h2>
            </div>
            <Link
              to="/work"
              className="font-sans text-[15px] font-semibold text-[#A78BFA] hover:text-white inline-flex items-center gap-2 transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {systems.map((system) => (
              <article
                key={system.slug}
                className="ui-card flex flex-col justify-between overflow-hidden group hover:border-[#8B5CF6]/40 transition-all"
              >
                {/* Contain Image */}
                <Link
                  to={`/work/${system.slug}`}
                  className="block w-full bg-[#06020E] p-6 border-b border-white/[0.08] flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={system.image}
                    alt={system.title}
                    width={800}
                    height={500}
                    className="w-full h-[180px] sm:h-[200px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </Link>

                <div className="p-6 sm:p-7 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[12px] font-bold text-[#10B981]">
                        {system.metric}
                      </span>
                      <span className="font-mono text-[11px] text-[#8378A6] uppercase tracking-wider">
                        {system.tag}
                      </span>
                    </div>

                    <h3 className="font-sans text-[20px] font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                      <Link to={`/work/${system.slug}`}>{system.title}</Link>
                    </h3>

                    <p className="mt-2.5 font-sans text-[14px] leading-relaxed text-[#C9C2E0]/80">
                      {system.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="font-mono text-[12px] text-[#8378A6]">Inspect architecture</span>
                    <ArrowRight className="size-4 text-[#A78BFA] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Page 4: Tech Stack & Closing CTA */}
      <section
        id="technology-cta"
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 sm:py-24 border-t border-white/[0.06] bg-[#0A0514]/40 snap-start scroll-mt-20"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 w-full space-y-16 sm:space-y-20">
          {/* Top Half: Standard Open Runtimes */}
          <div className="text-center">
            <div className="max-w-lg mx-auto mb-8 sm:mb-10">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#A78BFA]">
                Technology Foundation
              </span>
              <h2 className="mt-1.5 font-sans text-[26px] sm:text-[32px] font-bold text-white tracking-tight">
                Standard Open Runtimes
              </h2>
            </div>

            <div className="py-6 sm:py-8 px-4 sm:px-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] overflow-hidden">
              <TechSphere />
            </div>
          </div>

          {/* Bottom Half: High-Impact Closing CTA Banner */}
          <div className="rounded-3xl border border-white/[0.12] bg-[#120824]/90 p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_80px_-20px_rgba(121,75,232,0.3)]">
            <div className="max-w-2xl">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#34D399]">
                Start Your Project
              </span>
              <h2 className="mt-2.5 font-sans text-[28px] sm:text-[38px] font-bold text-white tracking-tight leading-tight">
                Start Your Next System
              </h2>
              <p className="mt-3 font-sans text-[15px] sm:text-[16px] text-[#C9C2E0]/80">
                Send us what your business needs. We review your requirements and reply with a transparent engineering proposal.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link to="/contact" className="btn-primary text-[15px] h-[52px] px-9 w-full sm:w-auto">
                <span>Contact Engineering</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
