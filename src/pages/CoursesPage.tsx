import { courses } from '@/data/courses'
import { breadcrumbSchema, courseListSchema } from '@/lib/structuredData'
import { useSeo } from '@/lib/useSeo'
import { JsonLd } from '@/components/JsonLd'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/PageHero'
import { CourseCard } from '@/components/CourseCard'
import { LearningOptionsSection } from '@/sections/LearningOptionsSection'
import { CTASection } from '@/sections/CTASection'

export function CoursesPage() {
  useSeo({
    title: 'Coding Courses in Pakistan — Python, Web & AI',
    description:
      'Four coding courses in Pakistan: Python programming, web development, backend engineering and AI automation. Taught live in Lahore and online, from complete beginner to job-ready, through real projects.',
    path: '/courses',
  })

  return (
    <>
      <JsonLd data={courseListSchema(courses)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Courses', path: '/courses' },
        ])}
      />
      <PageHero
        eyebrow="Courses"
        title="Coding Courses in Pakistan"
        description="Four tracks that lead to working software. Every one starts from fundamentals, moves through real tooling, and ends with projects you can put in front of an employer or a client."
      />

      <Section bordered={false} className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {courses.map((course, index) => (
              <Reveal key={course.slug} delay={0.05 * index} className="h-full">
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-content-500">
              Not sure which one fits? Tell us your background and goal on the enrolment form and we
              will recommend a starting point before you commit to anything.
            </p>
          </Reveal>
        </Container>
      </Section>

      <LearningOptionsSection />
      <CTASection primaryLabel="Start Learning" primaryHref="/contact" />
    </>
  )
}
