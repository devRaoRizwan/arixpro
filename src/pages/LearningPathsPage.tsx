import { ArrowRight } from 'lucide-react'
import { courses } from '@/data/courses'
import { useSeo } from '@/lib/useSeo'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { TechnologyBadge } from '@/components/ui/TechnologyBadge'
import { PageHero } from '@/components/PageHero'
import { Roadmap } from '@/components/Roadmap'
import { CTASection } from '@/sections/CTASection'

export function LearningPathsPage() {
  useSeo({
    title: 'Learning Paths',
    description:
      'The ArixPro roadmap from complete beginner to job-ready developer, in eight stages covering programming fundamentals, Python, Git, APIs, databases, backend, frontend and real projects.',
    path: '/learning-paths',
  })

  return (
    <>
      <PageHero
        eyebrow="Learning paths"
        title="From Zero to Developer"
        description="A sequence, not a playlist. Each stage assumes only what came before it, and none of them end until you can build something with what you just learned."
      >
        <ButtonLink to="/contact" size="lg" trailingIcon={ArrowRight}>
          Find your starting point
        </ButtonLink>
      </PageHero>

      <Section bordered={false} className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="max-w-3xl">
            <Roadmap />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Where tracks fit"
            title="Which Track Covers Which Stage"
            description="The roadmap is the map. Each track takes you through a specific stretch of it."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-surface-800 bg-surface-800 shadow-raise sm:mt-14 sm:grid-cols-2">
            {courses.map((course, index) => {
              const Icon = course.icon
              return (
                <Reveal key={course.slug} delay={0.05 * index}>
                  <div className="flex h-full flex-col bg-surface-900 p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-lg border border-surface-700 bg-surface-850 text-accent-400">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-content-400">
                      {course.tagline}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {course.technologies.slice(0, 4).map((tech) => (
                        <li key={tech}>
                          <TechnologyBadge label={tech} />
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <ButtonLink
                        to={`/courses/${course.slug}`}
                        variant="secondary"
                        size="sm"
                        trailingIcon={ArrowRight}
                      >
                        View track
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Not sure where you fit on the map?"
        description="Tell us what you already know. We will point you to the right stage instead of restarting you from zero."
        primaryLabel="Talk to an instructor"
        primaryHref="/contact"
      />
    </>
  )
}
