import { whyArixPro } from '@/data/features'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { FeatureCard } from '@/components/FeatureCard'

export function WhySection() {
  return (
    <Section id="why">
      <Container>
        <SectionHeading
          eyebrow="Why ArixPro"
          title="Why Learn With ArixPro?"
          description="Six things that shape every session, and the reasons students stay past the first difficult week."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {whyArixPro.map((feature, index) => (
            <Reveal key={feature.title} delay={0.05 * index} className="h-full">
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
