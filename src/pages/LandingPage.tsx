import { courses } from '@/data/courses'
import type { LandingPage as LandingPageData } from '@/data/landingPages'
import { breadcrumbSchema, faqSchema } from '@/lib/structuredData'
import { useSeo } from '@/lib/useSeo'
import { JsonLd } from '@/components/JsonLd'
import { PageHero } from '@/components/PageHero'
import { CourseCard } from '@/components/CourseCard'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LearningOptionsSection } from '@/sections/LearningOptionsSection'
import { CTASection } from '@/sections/CTASection'

/**
 * The route is registered per slug rather than as `:slug`, so the page data is
 * passed in directly. Reading it from useParams would come back empty and send
 * every one of these to the 404.
 */
export function LandingPage({ page }: { page: LandingPageData }) {
  useSeo({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/${page.slug}`,
  })

  return (
    <>
      <JsonLd data={faqSchema(page.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: page.heading, path: `/${page.slug}` },
        ])}
      />

      <PageHero eyebrow={page.eyebrow} title={page.heading} description={page.intro} />

      <Section bordered={false} className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-x-10 gap-y-9 md:grid-cols-2">
            {page.sections.map((section, index) => (
              <Reveal key={section.title} delay={0.06 * index}>
                <h2 className="text-xl font-bold text-content-50 sm:text-2xl">{section.title}</h2>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-content-400">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Courses"
            title="Tracks you can start with"
            description="Every track is taught the same way, and each one ends with projects you can show."
          />
          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">
            {courses.map((course, index) => (
              <Reveal key={course.slug} delay={0.06 * index} className="h-full">
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <LearningOptionsSection />

      <Section>
        <Container>
          <SectionHeading eyebrow="Questions" title="Common questions" />
          <div className="mt-10 sm:mt-12">
            <FAQAccordion items={page.faqs} />
          </div>
        </Container>
      </Section>

      <CTASection
        title="Start where you actually are"
        description="Tell us your goal and your experience level. We reply with a recommended starting point."
        primaryLabel="Start Learning"
        primaryHref="/contact"
      />
    </>
  )
}
