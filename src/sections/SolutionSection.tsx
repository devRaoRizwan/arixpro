import { pillars } from '@/data/pillars'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function SolutionSection() {
  return (
    <Section id="how-it-works" className="scroll-mt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, var(--glow-1) 0%, transparent 70%)',
        }}
      />

      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A Better Way to Learn Technology"
          description="Four stages, repeated on every topic. Nothing is marked complete because a video ended. It is complete when you can build with it."
          align="center"
        />

        <div className="mt-14 grid divide-y divide-surface-800 border-y border-surface-800 sm:mt-16 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal
                key={pillar.title}
                delay={0.06 * index}
                className={[
                  'group relative px-0 py-8 sm:px-7 sm:py-10',
                  index % 2 === 1 ? 'sm:border-l sm:border-surface-800' : '',
                  index >= 2 ? 'sm:border-t sm:border-surface-800 lg:border-t-0' : '',
                  index === 2 ? 'lg:border-l lg:border-surface-800' : '',
                  index === 3 ? 'lg:border-l lg:border-surface-800' : '',
                  index === 0 ? 'border-t border-surface-800 sm:border-t-0' : '',
                ].join(' ')}
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg border border-surface-700 bg-surface-850 text-accent-400 transition-colors duration-300 group-hover:border-accent-400/35 group-hover:bg-accent-400/10">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-2xs tracking-[0.2em] text-content-500">
                    {pillar.index}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold">{pillar.title}</h3>
                <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-content-400">
                  {pillar.body}
                </p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
