import { useSeo } from '@/lib/useSeo'
import { Hero } from '@/sections/Hero'
import { TrustBar } from '@/sections/TrustBar'
import { ProblemSection } from '@/sections/ProblemSection'
import { SolutionSection } from '@/sections/SolutionSection'
import { LearningOptionsSection } from '@/sections/LearningOptionsSection'
import { CoursesSection } from '@/sections/CoursesSection'
import { RoadmapSection } from '@/sections/RoadmapSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { UrduSection } from '@/sections/UrduSection'
import { WhySection } from '@/sections/WhySection'
import { StatsSection } from '@/sections/StatsSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { FaqSection } from '@/sections/FaqSection'
import { CTASection } from '@/sections/CTASection'

export function HomePage() {
  useSeo({
    title: 'ArixPro',
    description:
      'ArixPro is a modern coding institute for students in Pakistan. Learn Python, web development, backend engineering and AI through live batches, 1-on-1 mentorship and real projects.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <LearningOptionsSection />
      <CoursesSection />
      <RoadmapSection />
      <ProjectsSection />
      <UrduSection />
      <WhySection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CTASection />
    </>
  )
}
