import { Link } from 'react-router-dom'
import { Mail, MessageCircle } from 'lucide-react'
import { footerNav } from '@/data/navigation'
import { emailHref, siteConfig, whatsappHref } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-surface-800 bg-surface-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent"
      />

      <Container className="py-10 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))] lg:gap-8">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-content-400">
              Practical technology education for the next generation.
            </p>
            <p className="mt-3 font-mono text-2xs tracking-[0.18em] text-content-500 uppercase">
              {siteConfig.location}
            </p>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-mono text-2xs tracking-[0.2em] text-content-500 uppercase">
                {group.title}
              </h2>
              <ul className="mt-3.5 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      to={link.href}
                      className="group inline-flex text-sm text-content-300 transition-colors hover:text-content-50"
                    >
                      <span className="bg-gradient-to-r from-accent-400 to-accent-400 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-mono text-2xs tracking-[0.2em] text-content-500 uppercase">
              Contact
            </h2>
            <ul className="mt-3.5 flex flex-col gap-2">
              <li>
                <a
                  href={emailHref}
                  className="inline-flex items-center gap-2 text-sm text-content-300 transition-colors hover:text-content-50"
                >
                  <Mail className="size-4 shrink-0 text-content-500" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm text-content-300 transition-colors hover:text-content-50"
                >
                  <MessageCircle className="size-4 shrink-0 text-content-500" aria-hidden="true" />
                  {siteConfig.whatsapp.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-surface-850 pt-5 sm:flex-row-reverse sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-1.5">
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex rounded-full border border-surface-700 bg-surface-850 px-2.5 py-1 text-2xs text-content-400 transition-colors hover:border-surface-600 hover:text-content-100"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-2xs text-content-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
