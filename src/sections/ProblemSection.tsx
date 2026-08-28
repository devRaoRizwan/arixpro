import { problems } from '@/data/problems'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function ProblemSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Learning to Code Shouldn't Feel Impossible"
          description="Most people who give up on programming were never bad at it. They were handed the wrong sequence, the wrong material and nobody to ask."
        />

        <Reveal delay={0.08} className="mt-12 sm:mt-14">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-surface-800 bg-surface-800 shadow-raise sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <article
                key={problem.title}
                className="group relative bg-surface-900 p-6 transition-colors duration-300 hover:bg-surface-850 sm:p-8"
              >
                <h3 className="flex items-start gap-2.5 text-[1.0625rem] font-semibold text-content-100">
                  <span
                    aria-hidden="true"
                    className="mt-[0.4rem] block h-px w-3.5 shrink-0 bg-content-500 transition-colors duration-300 group-hover:bg-accent-400"
                  />
                  {problem.title}
                </h3>
                <p className="mt-3 pl-6 text-sm leading-relaxed text-content-400">{problem.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
