import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { Roadmap } from '@/components/Roadmap'

export function RoadmapSection() {
  return (
    <Section id="roadmap" className="scroll-mt-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          maskImage: 'radial-gradient(58% 55% at 20% 40%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(58% 55% at 20% 40%, black 0%, transparent 100%)',
        }}
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>Learning path</Eyebrow>
              <h2 className="text-gradient text-[clamp(1.85rem,5.2vw,3rem)] leading-[1.06] font-bold">
                From Zero
                <br />
                to Developer
              </h2>
              <p className="max-w-md text-[1.0625rem] leading-relaxed text-content-400">
                Eight stages that take someone who has never written a line of code to someone who
                can build, deploy and explain a working application.
              </p>
              <div className="mt-2">
                <ButtonLink to="/learning-paths" variant="secondary" trailingIcon={ArrowRight}>
                  See the full path
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Roadmap />
        </div>
      </Container>
    </Section>
  )
}
