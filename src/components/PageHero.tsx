import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { easeOutExpo } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  /** Content rendered in a second column on large screens. */
  aside?: ReactNode
  className?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
  className,
}: PageHeroProps) {
  const reduced = useReducedMotion()

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: easeOutExpo, delay: reduced ? 0 : delay },
  })

  return (
    <section className={cn('relative isolate overflow-hidden', className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="bg-grid absolute inset-0 opacity-50"
          style={{
            maskImage: 'radial-gradient(70% 80% at 30% 0%, black 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(70% 80% at 30% 0%, black 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(46% 44% at 12% 0%, var(--glow-2) 0%, transparent 72%)',
          }}
        />
      </div>

      <Container className="pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <div
          className={cn(
            'grid gap-12',
            aside ? 'lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16' : '',
          )}
        >
          <div className={cn(aside ? '' : 'max-w-3xl')}>
            <motion.div {...rise(0.03)}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              {...rise(0.1)}
              className="text-gradient mt-5 text-[clamp(2.15rem,7vw,3.75rem)] leading-[1.02] font-extrabold tracking-[-0.03em]"
            >
              {title}
            </motion.h1>

            {description ? (
              <motion.p
                {...rise(0.17)}
                className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-content-300 sm:text-lg"
              >
                {description}
              </motion.p>
            ) : null}

            {children ? (
              <motion.div {...rise(0.24)} className="mt-8">
                {children}
              </motion.div>
            ) : null}
          </div>

          {aside ? <motion.div {...rise(0.3)}>{aside}</motion.div> : null}
        </div>
      </Container>
    </section>
  )
}
