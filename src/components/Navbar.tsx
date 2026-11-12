import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

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
            ? 'h-[68px] sm:h-[72px] bg-[#090412]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.5)]'
            : 'h-[76px] sm:h-[82px] bg-transparent border-b border-white/[0.05]'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-12">
          {/* Brand Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-pomegranate-transparent.png"
              alt="ArixPro"
              width={34}
              height={34}
              className="size-8 sm:size-9 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-sans text-[18px] sm:text-[20px] font-bold text-white tracking-tight leading-none">
                Arix<span className="text-[#A78BFA]">Pro</span>
              </span>
            </div>
          </Link>

          {/* Center Navigation Links: Pure White Capsule in Day Mode, Deep Black Capsule in Dark Mode + Smooth Sliding Highlight */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white dark:bg-[#0C061A] border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_14px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md relative">
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
                      ? 'text-slate-900 dark:text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-950 dark:text-[#C9C2E0]/80 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      data-active-pill="true"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-slate-100 dark:bg-white/[0.1] border border-slate-200/80 dark:border-white/[0.14]"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Actions: Day/Night Theme Toggle + Action CTA */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <ThemeToggle />

            <div className="hidden md:flex items-center">
              <Link to="/contact" className="btn-primary text-[14px] h-[40px] px-5 text-white">
                <span className="text-white font-medium">Start a Project</span>
                <ArrowUpRight className="size-3.5 text-white shrink-0" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex size-9 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-[68px] sm:top-[72px] z-50 border-b border-white/[0.1] bg-[#090412]/95 backdrop-blur-2xl px-6 py-6 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
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
                    className={`px-4 py-3 rounded-xl font-sans text-[16px] font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-100 dark:bg-white/[0.1] text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/[0.12]'
                        : 'text-slate-600 dark:text-[#C9C2E0] hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <div className="mt-4 pt-4 border-t border-white/[0.08]">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-white"
                >
                  <span className="text-white font-medium">Start a Project</span>
                  <ArrowUpRight className="size-4 text-white shrink-0" />
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
