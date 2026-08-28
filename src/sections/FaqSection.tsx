import { faqs } from '@/data/faq'
import { emailHref, siteConfig, whatsappHref } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { FAQAccordion } from '@/components/FAQAccordion'

type FaqSectionProps = {
  /** Renders as the page's h1 when the FAQ is the primary page content. */
  headingLevel?: 'h1' | 'h2'
  bordered?: boolean
}

export function FaqSection({ headingLevel: Heading = 'h2', bordered = true }: FaqSectionProps) {
  return (
    <Section id="faq" bordered={bordered} className="scroll-mt-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>FAQ</Eyebrow>
              <Heading className="text-gradient text-[clamp(1.85rem,5.2vw,3rem)] leading-[1.06] font-bold">
                Questions,
                <br />
                answered honestly
              </Heading>
              <p className="max-w-sm text-[1.0625rem] leading-relaxed text-content-400">
                Still unsure? Message us on{' '}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent-400 underline decoration-accent-400/30 underline-offset-4 transition-colors hover:decoration-accent-400"
                >
                  WhatsApp
                </a>{' '}
                or email{' '}
                <a
                  href={emailHref}
                  className="text-accent-400 underline decoration-accent-400/30 underline-offset-4 transition-colors hover:decoration-accent-400"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
