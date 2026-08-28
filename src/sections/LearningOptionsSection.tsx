import { Check } from 'lucide-react'
import { learningOptions } from '@/data/learningOptions'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'

export function LearningOptionsSection() {
  return (
    <Section id="learning-options" className="scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Ways to learn"
          title="Two Ways to Study at ArixPro"
          description="Same curriculum, same instructors. Pick the format that matches how you learn and what your schedule allows."
        />

        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6">
          {learningOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <Reveal key={option.id} delay={0.08 * index} className="h-full">
                <article
                  className={cn(
                    'gloss relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface-900 p-7 sm:p-9',
                    'transition-[border-color,box-shadow] duration-300',
                    option.featured
                      ? 'border-accent-400/35 shadow-card'
                      : 'border-surface-800 shadow-raise hover:border-surface-600 hover:shadow-card',
                  )}
                >
                  {option.featured ? (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-28 -right-20 size-72 rounded-full bg-accent-400/[0.09] blur-3xl"
                    />
                  ) : null}

                  <span
                    className={cn(
                      'relative grid size-11 place-items-center rounded-xl border',
                      option.featured
                        ? 'border-accent-400/30 bg-accent-400/10 text-accent-400'
                        : 'border-surface-700 bg-surface-850 text-content-300',
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                  <h3 className="relative mt-6 text-2xl font-bold sm:text-[1.75rem]">
                    {option.title}
                  </h3>
                  <p className="relative mt-3 text-[0.95rem] leading-relaxed text-content-400">
                    {option.body}
                  </p>

                  <p className="relative mt-7 font-mono text-2xs tracking-[0.2em] text-content-500 uppercase">
                    Best for
                  </p>
                  <ul className="relative mt-4 flex flex-1 flex-col gap-3">
                    {option.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-content-300">
                        <Check
                          className={cn(
                            'mt-0.5 size-4 shrink-0',
                            option.featured ? 'text-accent-400' : 'text-content-500',
                          )}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-9">
                    <ButtonLink
                      to={option.ctaHref}
                      variant={option.featured ? 'primary' : 'secondary'}
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {option.ctaLabel}
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
