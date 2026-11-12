import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'h-[68px] sm:h-[72px] bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'
            : 'h-[76px] sm:h-[82px] bg-white/80 backdrop-blur-sm border-b border-slate-200/50'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-12">
          {/* Brand Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <img
              src="/images/logo-pomegranate-transparent.png"
              alt="ArixPro"
              width={34}
              height={34}
              className="size-8 sm:size-8.5 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-sans text-[18px] sm:text-[20px] font-bold text-slate-950 tracking-tight leading-none">
                Arix<span className="text-[#6336C5]">Pro</span>
              </span>
            </div>
          </Link>

          {/* Center Navigation Links: Clean White Capsule (AI Fiesta Style) */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/70 border border-slate-200/80 shadow-xs backdrop-blur-md relative">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname === link.href ||
                    location.pathname.startsWith(`${link.href}/`)

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative px-4 py-1.5 rounded-full font-sans text-[13.5px] font-medium transition-colors ${
                    isActive
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      data-active-pill="true"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-white border border-slate-200/90 shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Actions: Clean AI Fiesta Pill CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-medium text-[13.5px] h-[38px] px-5 shadow-xs transition-all hover:shadow-md"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="size-3.5 text-white/80 shrink-0" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition-colors shadow-xs"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-[68px] sm:top-[72px] z-50 border-b border-slate-200 bg-white/98 backdrop-blur-xl px-6 py-6 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? location.pathname === '/'
                    : location.pathname === link.href ||
                      location.pathname.startsWith(`${link.href}/`)

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 rounded-xl font-sans text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-slate-950 font-semibold border border-slate-200/80'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <div className="mt-3 pt-3 border-t border-slate-200">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 text-white font-medium text-[14px] h-[42px] px-5"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="size-4 text-white/80 shrink-0" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar
