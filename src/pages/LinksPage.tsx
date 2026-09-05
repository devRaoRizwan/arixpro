import { Link } from 'react-router-dom'
import { bioLinks, type BioLink } from '@/data/bioLinks'
import { siteConfig, whatsappHref } from '@/lib/site'
import { useSeo } from '@/lib/useSeo'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

/**
 * The one link that goes in every social bio.
 *
 * Built here rather than on Linktree so the traffic lands on our own domain,
 * keeps the brand, and can be measured with the analytics already on the site.
 *
 * Deliberately `noindex`: it is a menu, not content. Left indexable it would
 * compete with the homepage for brand searches and win sometimes, which is the
 * opposite of what anyone wants.
 */
export function LinksPage() {
  useSeo({
    title: 'Links',
    description:
      'Everything from the ArixPro bio in one place. Courses, 1-on-1 mentorship, live batches and WhatsApp.',
    path: '/links',
    noindex: true,
  })

  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(58% 46% at 50% 0%, var(--glow-1) 0%, transparent 70%)',
        }}
      />

      <Container>
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <Reveal>
            <span
              aria-hidden="true"
              className="grid size-16 place-items-center rounded-2xl border border-accent-400/30 bg-accent-400/10 shadow-card"
            >
              <svg viewBox="0 0 32 32" className="size-9" fill="none">
                <path
                  d="M6.6 24 16 7.6 25.4 24"
                  stroke="currentColor"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent-400"
                />
                <path
                  d="M11.9 18.4h8.2"
                  stroke="currentColor"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  className="text-accent-400/50"
                />
              </svg>
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-content-400">
              Learn to Code. Build for Real<span className="text-accent-400">.</span>
            </p>
            <p className="mt-1 font-mono text-2xs tracking-[0.16em] text-content-500 uppercase">
              {siteConfig.location}
            </p>
          </Reveal>

          <ul className="mt-9 flex w-full flex-col gap-3">
            {bioLinks.map((item, index) => (
              <li key={item.label}>
                <Reveal delay={0.04 * index} className="w-full">
                  <BioLinkRow item={item} />
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.34} className="w-full">
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex rounded-full border border-surface-700 bg-surface-850 px-3 py-1.5 text-2xs text-content-400 transition-colors hover:border-surface-600 hover:text-content-100"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-7 font-mono text-2xs text-content-500">{siteConfig.url}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function BioLinkRow({ item }: { item: BioLink }) {
  const Icon = item.icon

  const className = cn(
    'group flex w-full items-center gap-4 rounded-2xl border p-4 text-left',
    'transition-[border-color,background-color,transform] duration-200',
    'motion-safe:hover:-translate-y-0.5',
    item.primary
      ? 'border-accent-400/40 bg-accent-400/[0.08] hover:border-accent-400/60'
      : 'border-surface-800 bg-surface-900/70 hover:border-surface-600 hover:bg-surface-850/70',
  )

  const inner = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'grid size-10 shrink-0 place-items-center rounded-xl border',
          item.primary
            ? 'border-accent-400/35 bg-accent-400/15 text-accent-400'
            : 'border-surface-700 bg-surface-850 text-content-300',
        )}
      >
        <Icon className="size-[1.15rem]" />
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={cn(
            'block truncate font-semibold',
            item.primary ? 'text-content-50' : 'text-content-100',
          )}
        >
          {item.label}
        </span>
        <span className="mt-0.5 block truncate text-2xs text-content-400">{item.hint}</span>
      </span>
    </>
  )

  /* The WhatsApp entry is the only one that leaves the site, and its URL is
     assembled in site.ts with the prefilled message. */
  if (item.href === 'whatsapp') {
    return (
      <a href={whatsappHref} target="_blank" rel="noreferrer noopener" className={className}>
        {inner}
      </a>
    )
  }

  return (
    <Link to={item.href} className={className}>
      {inner}
    </Link>
  )
}
