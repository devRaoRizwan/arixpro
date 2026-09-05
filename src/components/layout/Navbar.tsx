import { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { primaryNav } from '@/data/navigation'
import { easeOutExpo } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { ButtonLink } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Navbar() {
  /* Same as WhatsAppButton: no window during prerender. */
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 12,
  )
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled || open
          ? 'border-b border-surface-800 bg-surface-950/80 shadow-raise backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative inline-flex h-9 items-center rounded-full px-3.5 text-sm transition-colors duration-200',
                      isActive ? 'text-content-50' : 'text-content-400 hover:text-content-100',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full border border-surface-700 bg-veil"
                          transition={{ duration: 0.35, ease: easeOutExpo }}
                        />
                      ) : null}
                      <span className="relative">{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Wrapped rather than given `hidden`: the button's own `inline-flex`
              is the same CSS property and would win the cascade. */}
          <div className="hidden xs:block">
            <ButtonLink to="/contact" size="sm">
              Start Learning
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-lg border border-surface-700 bg-veil text-content-200 transition-colors hover:bg-veil-strong lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="overflow-hidden border-t border-surface-800 bg-surface-950/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-4">
              <nav aria-label="Mobile">
                <ul className="flex flex-col">
                  {primaryNav.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * index + 0.05, duration: 0.3, ease: easeOutExpo }}
                    >
                      <NavLink
                        to={item.href}
                        end={item.href === '/'}
                        onClick={close}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center justify-between border-b border-surface-850 py-3.5 text-base transition-colors',
                            isActive ? 'text-accent-400' : 'text-content-200 hover:text-content-50',
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div onClick={close} role="presentation" className="mt-5">
                <ButtonLink to="/contact" size="lg" className="w-full">
                  Start Learning
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
