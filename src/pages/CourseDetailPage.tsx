import { Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, Clock, MessageCircle, Signal } from 'lucide-react'
import { courses, getCourseBySlug } from '@/data/courses'
import { useSeo } from '@/lib/useSeo'
import { whatsappHref } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button'
import { TechnologyBadge } from '@/components/ui/TechnologyBadge'
import { PageHero } from '@/components/PageHero'
import { CodeCard } from '@/components/CodeCard'
import { CourseCard } from '@/components/CourseCard'
import { CTASection } from '@/sections/CTASection'

export function CourseDetailPage() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  if (!course) return <Navigate to="/404" replace />

  return <CourseDetail course={course} />
}

function CourseDetail({ course }: { course: NonNullable<ReturnType<typeof getCourseBySlug>> }) {
  useSeo({
    title: course.title,
    description: `${course.tagline} ${course.description}`,
    path: `/courses/${course.slug}`,
  })

  const related = courses.filter((item) => item.slug !== course.slug)

  return (
    <>
      <PageHero
        eyebrow="Course"
        title={course.title}
        description={course.tagline}
        aside={
          <CodeCard
            filename={course.snippet.filename}
            lines={course.snippet.lines}
            label="Preview"
          />
        }
      >
        <div className="flex flex-col gap-6">
          <dl className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Difficulty</dt>
              <Signal className="size-4 text-content-500" aria-hidden="true" />
              <dd className="font-mono text-2xs tracking-wide text-content-300">{course.level}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Duration</dt>
              <Clock className="size-4 text-content-500" aria-hidden="true" />
              <dd className="font-mono text-2xs tracking-wide text-content-300">{course.duration}</dd>
            </div>
          </dl>

          <ul className="flex flex-wrap gap-1.5">
            {course.technologies.map((tech) => (
              <li key={tech}>
                <TechnologyBadge label={tech} tone="accent" />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              to={`/contact?course=${course.slug}`}
              size="lg"
              trailingIcon={ArrowRight}
            >
              Start Learning
            </ButtonLink>
            <ButtonAnchor
              href={whatsappHref}
              size="lg"
              variant="secondary"
              leadingIcon={MessageCircle}
            >
              Ask a question
            </ButtonAnchor>
          </div>
        </div>
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="text-gradient mt-5 text-[clamp(1.6rem,4.5vw,2.25rem)] leading-tight font-bold">
                What this track covers
              </h2>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-content-300">
                {course.description}
              </p>
              <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {course.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5 text-sm text-content-300">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] block size-1 shrink-0 rounded-full bg-accent-400"
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="gloss rounded-2xl border border-surface-800 bg-surface-900 p-6 shadow-raise sm:p-8">
                <h2 className="font-mono text-2xs tracking-[0.2em] text-content-500 uppercase">
                  Who it's for
                </h2>
                <ul className="mt-6 flex flex-col gap-5">
                  {course.audience.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-content-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Curriculum"
            title="Module by module"
            description="Taught in order. Each module builds directly on the one before it."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-surface-800 bg-surface-800 shadow-raise sm:mt-14 lg:grid-cols-2">
            {course.curriculum.map((module, index) => (
              <Reveal key={module.title} delay={0.05 * index}>
                <div className="flex h-full flex-col bg-surface-900 p-6 sm:p-8">
                  <div className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="font-mono text-2xs tracking-[0.2em] text-accent-400/70"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-semibold sm:text-xl">{module.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {module.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-content-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] block h-px w-2.5 shrink-0 bg-surface-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Projects</Eyebrow>
                <h2 className="text-gradient mt-5 text-[clamp(1.6rem,4.5vw,2.25rem)] leading-tight font-bold">
                  What you will have built
                </h2>
              </Reveal>
              <ul className="mt-8 flex flex-col gap-3">
                {course.projects.map((project, index) => (
                  <Reveal key={project} delay={0.04 * index}>
                    <li className="flex items-center gap-4 rounded-xl border border-surface-800 bg-surface-900 px-5 py-4 shadow-raise transition-[border-color,box-shadow] duration-300 hover:border-surface-600 hover:shadow-card">
                      <span
                        aria-hidden="true"
                        className="block h-px w-4 shrink-0 bg-accent-400/70"
                      />
                      <span className="text-sm text-content-200 sm:text-[0.95rem]">{project}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div>
              <Reveal>
                <Eyebrow>Outcomes</Eyebrow>
                <h2 className="text-gradient mt-5 text-[clamp(1.6rem,4.5vw,2.25rem)] leading-tight font-bold">
                  What you will be able to do
                </h2>
              </Reveal>
              <ul className="mt-8 flex flex-col gap-5">
                {course.outcomes.map((outcome, index) => (
                  <Reveal key={outcome} delay={0.04 * index}>
                    <li className="flex items-start gap-3 border-b border-surface-850 pb-5">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-content-300 sm:text-[0.95rem]">
                        {outcome}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Other tracks" title="Continue in another direction" />
          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={0.05 * index} className="h-full">
                <CourseCard course={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Ready to start ${course.title}?`}
        description="Tell us where you are right now and we will place you at the right point in the track."
        primaryLabel="Start Learning"
        primaryHref={`/contact?course=${course.slug}`}
      />
    </>
  )
}
