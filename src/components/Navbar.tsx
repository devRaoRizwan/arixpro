import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { site } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const [prevPathname, setPrevPathname] = useState(location.pathname)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on route change
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname)
    setOpen(false)
  }

  // Escape key closes menu
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
        <div className="container navbar__inner">
          <Logo animated />
          <nav aria-label="Main navigation">
            <ul className="navbar__nav" role="list">
              {site.nav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/contact" className="btn btn-primary navbar__cta">
            Start a project <ArrowRight size={16} className="btn-arrow" />
          </Link>
          <button
            type="button"
            className="hamburger"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
        ref={navRef}
      >
        {site.nav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          Start a project <ArrowRight size={16} className="btn-arrow" />
        </Link>
      </nav>
    </>
  )
}
