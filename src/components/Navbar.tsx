import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showStickyCta, setShowStickyCta] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowStickyCta(true)
      } else {
        setShowStickyCta(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Work & Systems', href: '/work' },
    { label: 'Engineering Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 h-[80px] w-full border-b border-[#E4DEF2] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 sm:px-8">
          {/* Brand Logo with Pomegranate and Purple Text */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/arixpro-pomegranate.png"
              alt="ArixPro"
              width={38}
              height={38}
              className="size-[38px] object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-sans text-[24px] font-bold tracking-tight text-[#6336C5]">
              ArixPro
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.href)

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-sans text-[15px] font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[#6336C5] font-semibold'
                      : 'text-[#4A4458] hover:text-[#241044]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right: Quick Actions */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noreferrer noopener"
              className="font-sans text-[14px] font-medium text-[#315BDA] hover:underline flex items-center gap-1.5"
            >
              <span>WhatsApp +92 312 0418701</span>
              <ArrowUpRight className="size-3.5" />
            </a>

            <Link
              to="/contact"
              className="btn-primary min-h-[44px] px-6 text-[14px]"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Hamburger Toggle (visible below 768px / 744px) */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-[44px] items-center justify-center rounded-[8px] border border-[#E4DEF2] bg-white text-[#241044] hover:bg-[#F7F6FC]"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-[80px] z-50 border-b border-[#E4DEF2] bg-white px-6 py-6 shadow-md md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.href)

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-sans text-[16px] font-semibold py-2 ${
                      isActive ? 'text-[#6336C5]' : 'text-[#241044]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-[#E4DEF2] flex flex-col gap-3">
                <a
                  href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-secondary w-full justify-center text-[14px]"
                >
                  WhatsApp (+92 312 0418701)
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-[14px]"
                >
                  Start a Project
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom CTA Bar: Appears only after scrolling */}
      {showStickyCta && (
        <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-[#E4DEF2] p-3 px-4 flex items-center gap-2 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
          <a
            href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary flex-1 text-[13px] h-[42px] min-h-[42px] px-2 whitespace-nowrap justify-center"
          >
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="btn-primary flex-1 text-[13px] h-[42px] min-h-[42px] px-2 whitespace-nowrap justify-center"
          >
            Start a Project
          </Link>
        </div>
      )}
    </>
  )
}

export default Navbar
