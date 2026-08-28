import { heroTechnologies } from '@/data/technologies'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function TrustBar() {
  return (
    <section aria-label="Technologies taught" className="border-y border-surface-850 bg-surface-900/30">
      <Container className="py-10 sm:py-12">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-12">
          <Reveal className="shrink-0">
            <p className="max-w-[16rem] font-mono text-2xs leading-relaxed tracking-[0.16em] text-content-500 uppercase">
              Learn the technologies
              <br />
              developers actually use
            </p>
          </Reveal>

          <div
            aria-hidden="true"
            className="hidden h-10 w-px shrink-0 bg-gradient-to-b from-transparent via-surface-700 to-transparent lg:block"
          />

          <Reveal delay={0.08} className="min-w-0 flex-1">
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 sm:gap-x-3">
              {heroTechnologies.map((tech) => (
                <li key={tech}>
                  <span className="inline-flex items-center rounded-full border border-surface-800 bg-surface-900 px-3.5 py-1.5 text-sm text-content-300 transition-colors duration-300 hover:border-accent-400/25 hover:text-content-50 sm:px-4">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
