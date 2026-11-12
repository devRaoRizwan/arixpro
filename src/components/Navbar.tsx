import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
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
            ? 'h-[54px] bg-[#090412]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.5)]'
            : 'h-[62px] bg-transparent border-b border-white/[0.05]'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-12">
          {/* Brand Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative size-7 sm:size-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.1] p-1 transition-all group-hover:border-[#8B5CF6]/50 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.3)]">
              <img
                src="/images/logo-pomegranate-transparent.png"
                alt="ArixPro"
                width={26}
                height={26}
                className="size-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[17px] sm:text-[18px] font-bold text-white tracking-tight">
                Arix<span className="text-[#A78BFA]">Pro</span>
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
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
                  className={`px-3.5 py-1 rounded-full font-sans text-[13px] font-medium transition-all ${
                    isActive
                      ? 'bg-white/[0.1] text-white shadow-sm border border-white/[0.12]'
                      : 'text-[#C9C2E0]/80 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Actions: Day/Night Theme Toggle + Action CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            <div className="hidden md:flex items-center">
              <Link to="/contact" className="btn-primary text-[13px] h-[36px] px-4 text-white">
                <span className="text-white font-medium">Start a Project</span>
                <ArrowUpRight className="size-3.5 text-white shrink-0" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex size-8 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-[54px] z-50 border-b border-white/[0.1] bg-[#090412]/95 backdrop-blur-2xl px-6 py-6 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
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
                        ? 'bg-white/[0.1] text-white border border-white/[0.12]'
                        : 'text-[#C9C2E0] hover:text-white hover:bg-white/[0.04]'
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
