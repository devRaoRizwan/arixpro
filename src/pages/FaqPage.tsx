import { faqs } from '@/data/faq'
import { breadcrumbSchema, faqSchema } from '@/lib/structuredData'
import { useSeo } from '@/lib/useSeo'
import { JsonLd } from '@/components/JsonLd'
import { FaqSection } from '@/sections/FaqSection'
import { CTASection } from '@/sections/CTASection'

export function FaqPage() {
  useSeo({
    title: 'Coding Course FAQs — Urdu Classes & Enrolment',
    description:
      'Answers about coding courses at ArixPro: whether you need prior experience, Urdu-friendly teaching, live batches versus 1-on-1 mentorship, projects, and how to enroll from anywhere in Pakistan.',
    path: '/faq',
  })

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ])}
      />
      <FaqSection headingLevel="h1" bordered={false} />
      <CTASection
        title="Still have a question?"
        description="Ask it directly. A real person replies."
        primaryLabel="Start Learning"
        primaryHref="/contact"
      />
    </>
  )
}
