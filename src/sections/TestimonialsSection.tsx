import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { TestimonialCard } from '@/components/TestimonialCard'

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Student voices"
          title="What Students Say"
          description="Students come in with uncertainty and leave with clarity, confidence, and momentum."
        />

        <div className="mt-12 sm:mt-14">
          <div className="mx-auto max-w-3xl">
            <Reveal className="h-full">
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    layout
                    initial={{ opacity: 0, y: 16, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.985 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="w-full"
                  >
                    <TestimonialCard testimonial={activeTestimonial} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => {
              const isActive = activeIndex === index

              return (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                  className={[
                    'h-2.5 rounded-full transition-all duration-300',
                    isActive ? 'w-10 bg-accent-400' : 'w-2.5 bg-surface-700 hover:bg-surface-600',
                  ].join(' ')}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
