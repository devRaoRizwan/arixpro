import { Compass, Target, Wrench, ShieldCheck } from 'lucide-react'
import { useSeo } from '@/lib/useSeo'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/PageHero'
import { FeatureCard } from '@/components/FeatureCard'
import { UrduSection } from '@/sections/UrduSection'
import { StatsSection } from '@/sections/StatsSection'
import { CTASection } from '@/sections/CTASection'

const principles = [
  {
    title: 'Teach the fundamentals first',
    body: 'Frameworks change every two years. Logic, data structures and how systems talk to each other do not.',
    icon: Compass,
  },
  {
    title: 'Nothing is complete until it runs',
    body: 'A topic is finished when a student can build with it unaided, not when the syllabus says so.',
    icon: Wrench,
  },
  {
    title: 'Small groups, real attention',
    body: 'Batches stay small enough that every student gets looked at, and 1-on-1 stays genuinely 1-on-1.',
    icon: Target,
  },
  {
    title: 'Say only what is true',
    body: 'No guaranteed jobs, no inflated numbers, no borrowed logos. What you read here is what you get.',
    icon: ShieldCheck,
  },
]

const notDoing = [
  'We do not guarantee jobs or placements.',
  'We do not publish student numbers we have not measured.',
  'We do not claim partnerships or accreditation we do not hold.',
  'We do not sell a course that is wrong for you to make a sale.',
]

export function AboutPage() {
  useSeo({
    title: 'Coding Institute in Lahore, Pakistan',
    description:
      'ArixPro is a coding and technology institute based in Lahore, teaching students across Pakistan online. Practical, Urdu-friendly teaching built around real projects, small live batches and 1-on-1 mentorship.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        eyebrow="About ArixPro"
        title="A technology institute, not a tuition academy"
        description="ArixPro exists because talented students in Pakistan keep stalling on programming for reasons that have nothing to do with ability. The wrong sequence, the wrong material, and nobody to ask when something breaks."
      />

      <Section bordered={false} className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <div className="mt-5 flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-content-300">
                <p>
                  We teach programming and modern software development to beginners, university
                  students and fresh graduates, the same way it is done inside a working
                  engineering team, at a pace that assumes you are starting from scratch.
                </p>
                <p>
                  That means a terminal, a Git history, an API you wrote, a database you designed,
                  and a project deployed somewhere real. It does not mean memorising definitions for
                  a paper.
                </p>
                <p>
                  Sessions run live, as small batches or private 1-on-1 mentoring, so questions
                  get answered while they still matter.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>Who it's for</Eyebrow>
              <div className="gloss mt-5 rounded-2xl border border-surface-800 bg-surface-900 p-6 shadow-raise sm:p-8">
                <ul className="flex flex-col divide-y divide-surface-850">
                  {[
                    ['Complete beginners', 'Never written a line of code'],
                    ['University students', 'Studying CS, SE, IT or anything adjacent'],
                    ['Fresh graduates', 'Degree done, practical skills missing'],
                    ['Career switchers', 'Moving into software from somewhere else'],
                    ['Freelancers', 'Need real skills to take on client work'],
                  ].map(([title, detail]) => (
                    <li key={title} className="flex items-baseline justify-between gap-4 py-3.5">
                      <span className="text-sm font-medium text-content-100">{title}</span>
                      <span className="text-right font-mono text-2xs text-content-500">{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-2xs tracking-[0.16em] text-content-500 uppercase">
                  Typically 16 – 30 years old
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title="How We Teach"
            description="Four rules that decide what goes into a session and what stays out of it."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={0.06 * index} className="h-full">
                <FeatureCard {...principle} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <UrduSection />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <Reveal>
              <Eyebrow>Straight answers</Eyebrow>
              <h2 className="text-gradient mt-5 text-[clamp(1.75rem,5vw,2.5rem)] leading-tight font-bold">
                What we don't claim
              </h2>
              <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-content-400">
                Education marketing in this space is full of promises nobody can keep. Here is what
                ArixPro will not tell you.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="flex flex-col divide-y divide-surface-800 border-y border-surface-800">
                {notDoing.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-5">
                    <span
                      aria-hidden="true"
                      className="mt-2 block h-px w-5 shrink-0 bg-content-500"
                    />
                    <span className="text-[0.95rem] leading-relaxed text-content-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <StatsSection />
      <CTASection
        title="Come and see how it's taught"
        description="Ask anything before you enrol. No pressure, no sales script."
        primaryLabel="Start Learning"
        primaryHref="/contact"
      />
    </>
  )
}
