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
    title: 'Coding Classes in Pakistan — Python, Web Dev & AI',
    description:
      'Learn coding in Pakistan with ArixPro. Live Python, web development, backend and AI classes in Lahore and online, taught in Urdu-friendly English through real projects, small batches and 1-on-1 mentorship.',
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
