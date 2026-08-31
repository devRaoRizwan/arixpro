import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { initialsOf, testimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { TestimonialCard } from '@/components/TestimonialCard'

const AUTOPLAY_MS = 6500

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  /* Once someone picks a student themselves, the carousel stops moving under
     them for good. That is also the pause mechanism assistive tech needs. */
  const [stopped, setStopped] = useState(false)
  const reduced = useReducedMotion()

  const autoplaying = !paused && !stopped && !reduced

  useEffect(() => {
    if (!autoplaying) return

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, AUTOPLAY_MS)

    return () => window.clearTimeout(timer)
  }, [autoplaying, activeIndex])

  const panelId = 'testimonial-panel'

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Student voices"
          title="What Students Say"
          description="Students come in with uncertainty and leave with clarity, confidence, and momentum. Pick a student to read theirs."
        />

        <div
          className="mt-12 sm:mt-14"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Reveal>
            {/* Every quote is stacked in one grid cell, so the panel is always as
                tall as the longest one and the rail below never jumps as it
                rotates. Only the active card is visible. */}
            <div id={panelId} className="grid">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex

                return (
                  <div
                    key={testimonial.id}
                    aria-hidden={!isActive}
                    className={cn(
                      'col-start-1 row-start-1',
                      'transition-[opacity,transform,visibility] duration-300 ease-out',
                      isActive
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible opacity-0 motion-safe:translate-y-2',
                    )}
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      position={index + 1}
                      total={testimonials.length}
                    />
                  </div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-6 lg:grid-cols-6">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex

                return (
                  <li key={testimonial.id}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      aria-controls={panelId}
                      onClick={() => {
                        setActiveIndex(index)
                        setStopped(true)
                      }}
                      className={cn(
                        'relative flex w-full cursor-pointer flex-col items-start gap-3',
                        'overflow-hidden rounded-xl border p-4 text-left',
                        'transition-[border-color,background-color] duration-200',
                        isActive
                          ? 'border-accent-400/45 bg-accent-400/[0.07]'
                          : 'border-surface-800 bg-surface-900/60 hover:border-surface-600 hover:bg-surface-850/60',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'grid size-9 shrink-0 place-items-center rounded-full border font-mono text-2xs font-semibold',
                          'transition-colors duration-200',
                          isActive
                            ? 'border-accent-400/40 bg-accent-400/15 text-accent-400'
                            : 'border-surface-700 bg-surface-850 text-content-400',
                        )}
                      >
                        {initialsOf(testimonial.name)}
                      </span>

                      <span className="w-full min-w-0">
                        <span
                          className={cn(
                            'block truncate text-sm font-medium transition-colors duration-200',
                            isActive ? 'text-content-50' : 'text-content-200',
                          )}
                        >
                          {testimonial.name}
                        </span>
                        <span
                          className={cn(
                            'mt-0.5 block truncate font-mono text-2xs transition-colors duration-200',
                            isActive ? 'text-accent-400' : 'text-content-500',
                          )}
                        >
                          {testimonial.batch}
                        </span>
                      </span>

                      {/* Shows how long the current quote has left, so the
                          rotation never feels like it moved without warning. */}
                      {isActive && autoplaying ? (
                        <motion.span
                          key={`progress-${activeIndex}`}
                          aria-hidden="true"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent-400"
                        />
                      ) : null}
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
