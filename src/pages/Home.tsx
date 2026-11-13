import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TechSphere } from '../components/TechSphere'
import { PencilSchematic } from '../components/PencilSchematic'
import { TypewriterText } from '../components/TypewriterText'
import { SolutionFinder } from '../components/SolutionFinder'
import { useSeo } from '../lib/useSeo'
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
  useSeo({
    title: 'ArixPro | Custom software studio',
    description:
      'ArixPro builds custom web applications, SaaS platforms, internal tools, and API integrations for growing businesses.',
    path: '/',
  })

  // Page-based smooth scroll helper
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
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* 1. Page 1: Hero Section (Full Viewport Height) */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 sm:py-20 overflow-hidden scroll-mt-20"
      >
        {/* Subtle ambient light gradient at top (AI Fiesta Style) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-transparent blur-[90px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Headline with Typewriter & Direct CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h1 className="font-sans text-[38px] sm:text-[50px] lg:text-[58px] xl:text-[64px] font-bold text-slate-950 tracking-tight leading-[1.12]">
                <span>We Build</span>
                <TypewriterText />
                <span className="block mt-1 sm:mt-2 text-slate-950">That Scale.</span>
              </h1>

              <p className="mt-6 font-sans text-[17px] sm:text-[20px] leading-[1.65] text-slate-600 max-w-xl">
                Custom software, built clean, tested, and shipped to production.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link to="/contact" className="btn-primary text-[15px] h-[48px] px-7">
                  <span>Build With Us</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link to="/work" className="btn-secondary text-[15px] h-[48px] px-7">
                  <span>View Shipped Systems</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hand-Sketched Architectural Blueprint */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <PencilSchematic />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Page 2: Interactive Solution Finder (Clean Off-White Surface) */}
      <section
        id="what-we-build"
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 sm:py-24 bg-slate-50/60 scroll-mt-20"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="font-sans text-[30px] sm:text-[40px] font-bold text-slate-950 tracking-tight">
              What does your business need?
            </h2>
            <p className="mt-2.5 text-[15px] sm:text-[16px] text-slate-600">
              Search what you want to achieve or select a core capability.
            </p>
          </div>

          <SolutionFinder />
        </div>
      </section>

      {/* 3. Page 3: Real Shipped Work (Clean White Canvas) */}
      <section
        id="shipped-systems"
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 sm:py-24 bg-white scroll-mt-20"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
                Case Studies
              </span>
              <h2 className="mt-2.5 font-sans text-[30px] sm:text-[40px] font-bold text-slate-950 tracking-tight">
                Shipped Systems
              </h2>
            </div>
            <Link
              to="/work"
              className="font-sans text-[15px] font-semibold text-[#6336C5] hover:text-slate-950 inline-flex items-center gap-2 transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {systems.map((system) => (
              <article
                key={system.slug}
                className="ui-card flex flex-col justify-between overflow-hidden group transition-all"
              >
                {/* Contain Image */}
                <Link
                  to={`/work/${system.slug}`}
                  className="block w-full bg-slate-50/80 p-6 border-b border-slate-100 flex items-center justify-center overflow-hidden"
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

                <div className="p-6 sm:p-7 flex flex-1 flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[12px] font-bold text-[#059669]">
                        {system.metric}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                        {system.tag}
                      </span>
                    </div>

                    <h3 className="font-sans text-[20px] font-bold text-slate-950 group-hover:text-[#6336C5] transition-colors">
                      <Link to={`/work/${system.slug}`}>{system.title}</Link>
                    </h3>

                    <p className="mt-2.5 font-sans text-[14px] leading-relaxed text-slate-600">
                      {system.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[12px] text-slate-500">Inspect architecture</span>
                    <ArrowRight className="size-4 text-[#6336C5] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Page 4: Tech Stack Foundation */}
      <section
        id="technology-cta"
        className="relative flex flex-col justify-center py-16 sm:py-20 bg-slate-50/60 scroll-mt-20"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 w-full">
          <div className="text-center">
            <div className="max-w-lg mx-auto mb-8 sm:mb-10">
              <h2 className="font-sans text-[26px] sm:text-[34px] font-bold text-slate-950 tracking-tight">
                Technologies We Build With
              </h2>
            </div>

            <div className="w-full">
              <TechSphere />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
