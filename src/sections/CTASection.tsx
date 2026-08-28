import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappHref } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button'

type CTASectionProps = {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
}

export function CTASection({
  title = 'Your First Line of Code Starts Here',
  description = 'Start learning practical technology skills with ArixPro.',
  primaryLabel = 'Explore Courses',
  primaryHref = '/courses',
}: CTASectionProps) {
  return (
    <section className="relative isolate overflow-hidden border-t border-surface-800">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="bg-grid absolute inset-0 opacity-50"
          style={{
            maskImage: 'radial-gradient(58% 70% at 50% 100%, black 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(58% 70% at 50% 100%, black 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(52% 60% at 50% 108%, var(--glow-3) 0%, transparent 72%)',
          }}
        />
      </div>

      <Container className="py-20 text-center sm:py-24 lg:py-28">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
          <h2 className="text-gradient text-[clamp(2rem,6.5vw,3.5rem)] leading-[1.03] font-extrabold tracking-[-0.03em]">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-content-300 sm:text-lg">
            {description}
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <ButtonLink to={primaryHref} size="lg" trailingIcon={ArrowRight}>
              {primaryLabel}
            </ButtonLink>
            <ButtonAnchor
              href={whatsappHref}
              size="lg"
              variant="secondary"
              leadingIcon={MessageCircle}
            >
              Talk to Us
            </ButtonAnchor>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
