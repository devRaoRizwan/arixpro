import { testimonials } from '@/data/testimonials'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { TestimonialCard } from '@/components/TestimonialCard'

export function TestimonialsSection() {
  const hasPlaceholders = testimonials.some((item) => item.isPlaceholder)

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Student voices"
          title="What Students Say"
          description="Real quotes from real students go here. Nothing on this page is invented."
        />

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={0.06 * index} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        {hasPlaceholders ? (
          <Reveal delay={0.1}>
            <p className="mt-8 font-mono text-2xs leading-relaxed text-content-500">
              These cards are placeholders. Replace them in{' '}
              <span className="text-content-300">src/data/testimonials.ts</span> once real student
              feedback is collected.
            </p>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  )
}
