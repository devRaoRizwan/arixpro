import { useSeo } from '@/lib/useSeo'
import { FaqSection } from '@/sections/FaqSection'
import { CTASection } from '@/sections/CTASection'

export function FaqPage() {
  useSeo({
    title: 'FAQ',
    description:
      'Common questions about ArixPro courses, including prior experience, Urdu-friendly teaching, 1-on-1 versus live batches, projects and how to enroll.',
    path: '/faq',
  })

  return (
    <>
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
