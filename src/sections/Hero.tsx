import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CircleCheck } from 'lucide-react'
import { easeOutExpo } from '@/lib/motion'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { HeroVisual } from '@/components/HeroVisual'

export function Hero() {
  const reduced = useReducedMotion()

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: easeOutExpo, delay: reduced ? 0 : delay },
  })

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background field */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="bg-grid absolute inset-0 opacity-60"
          style={{
            maskImage: 'radial-gradient(72% 62% at 50% 26%, black 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(72% 62% at 50% 26%, black 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(48% 40% at 18% 8%, var(--glow-2) 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-950 to-transparent" />
      </div>

      <Container className="pt-14 pb-20 sm:pt-20 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          <div className="max-w-2xl">
            <motion.h1
              {...rise(0.05)}
              className="text-gradient text-[clamp(2.5rem,9vw,4.5rem)] leading-[0.98] font-extrabold tracking-[-0.028em]"
            >
              Learn to Code.
              <br />
              Build for Real
            </motion.h1>

            <motion.p
              {...rise(0.14)}
              className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-content-300 sm:text-lg"
            >
              Practical coding education for the next generation of Pakistani developers. Taught
              live, built around real projects, and explained until it actually makes sense.
            </motion.p>

            <motion.div {...rise(0.21)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink to="/courses" size="lg" trailingIcon={ArrowRight}>
                Explore Courses
              </ButtonLink>
              <ButtonLink to="/#how-it-works" size="lg" variant="secondary">
                Learn How It Works
              </ButtonLink>
            </motion.div>

            <motion.p
              {...rise(0.28)}
              className="mt-7 flex items-center gap-2 text-sm text-content-500"
            >
              <CircleCheck className="size-4 shrink-0 text-accent-400/70" aria-hidden="true" />
              Built for beginners. Designed for real-world development.
            </motion.p>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}
