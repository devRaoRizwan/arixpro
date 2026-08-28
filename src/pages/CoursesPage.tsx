import { courses } from '@/data/courses'
import { useSeo } from '@/lib/useSeo'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/PageHero'
import { CourseCard } from '@/components/CourseCard'
import { LearningOptionsSection } from '@/sections/LearningOptionsSection'
import { CTASection } from '@/sections/CTASection'

export function CoursesPage() {
  useSeo({
    title: 'Courses',
    description:
      'Python, web development, backend engineering and AI courses at ArixPro. Practical tracks taught live through real projects, for beginners and university students in Pakistan.',
    path: '/courses',
  })

  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Four tracks that lead to working software"
        description="Every track starts from fundamentals, moves through real tooling, and ends with projects you can put in front of an employer or a client."
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
