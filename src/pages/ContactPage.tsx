import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useSeo } from '@/lib/useSeo'
import { emailHref, siteConfig, whatsappHref } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/PageHero'
import { EnrollmentForm } from '@/sections/EnrollmentForm'

const steps = [
  'You send this form or message us on WhatsApp.',
  'We ask a few questions about your background and goal.',
  'You get a recommended track and starting point.',
  'We confirm a schedule, then you start.',
]

export function ContactPage() {
  useSeo({
    title: 'Start Learning',
    description:
      'Enroll at ArixPro. Choose a course, pick 1-on-1 mentorship or a live batch, and tell us your experience level, then we reply with a recommended starting point.',
    path: '/contact',
  })

  return (
    <>
      <PageHero
        eyebrow="Enrollment"
        title="Start Learning"
        description="Fill this in and we will reply with a recommended track, a starting point on the roadmap, and a schedule that fits. Nothing is charged at this step."
      />

      <Section bordered={false} className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-14">
            <Reveal>
              <EnrollmentForm />
            </Reveal>

            <div className="flex flex-col gap-5">
              <Reveal delay={0.08}>
                <div className="gloss rounded-2xl border border-surface-800 bg-surface-900 p-6 shadow-raise sm:p-7">
                  <h2 className="font-mono text-2xs tracking-[0.2em] text-content-500 uppercase">
                    Direct contact
                  </h2>
                  <ul className="mt-5 flex flex-col gap-4">
                    <li>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex items-start gap-3"
                      >
                        <MessageCircle
                          className="mt-0.5 size-4 shrink-0 text-accent-400"
                          aria-hidden="true"
                        />
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-content-100 transition-colors group-hover:text-accent-400">
                            WhatsApp
                          </span>
                          <span className="block font-mono text-2xs text-content-500">
                            {siteConfig.whatsapp.display}
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={emailHref} className="group flex items-start gap-3">
                        <Mail
                          className="mt-0.5 size-4 shrink-0 text-accent-400"
                          aria-hidden="true"
                        />
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-content-100 transition-colors group-hover:text-accent-400">
                            Email
                          </span>
                          <span className="block truncate font-mono text-2xs text-content-500">
                            {siteConfig.email}
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 size-4 shrink-0 text-content-500"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-sm font-medium text-content-100">Location</span>
                        <span className="block font-mono text-2xs text-content-500">
                          {siteConfig.location}
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="gloss rounded-2xl border border-surface-800 bg-surface-900 p-6 shadow-raise sm:p-7">
                  <h2 className="flex items-center gap-2 font-mono text-2xs tracking-[0.2em] text-content-500 uppercase">
                    <Clock className="size-3.5" aria-hidden="true" />
                    What happens next
                  </h2>
                  <ol className="mt-5 flex flex-col gap-4">
                    {steps.map((step, index) => (
                      <li key={step} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-px grid size-5 shrink-0 place-items-center rounded-full border border-surface-700 font-mono text-[0.6rem] text-content-400"
                        >
                          {index + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-content-300">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
