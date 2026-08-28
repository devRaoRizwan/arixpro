import { ArrowRight } from 'lucide-react'
import { courses } from '@/data/courses'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { CourseCard } from '@/components/CourseCard'

export function CoursesSection() {
  return (
    <Section id="courses" className="scroll-mt-24">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Courses"
            title="Tracks Built Around Real Work"
            description="Each track is a sequence, not a playlist. Start where you are and finish with projects you can show."
          />
          <Reveal delay={0.1} className="shrink-0">
            <ButtonLink to="/courses" variant="secondary" trailingIcon={ArrowRight}>
              All courses
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">
          {courses.map((course, index) => (
            <Reveal key={course.slug} delay={0.06 * index} className="h-full">
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
