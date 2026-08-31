import { Languages, MessageCircle, UserRound } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'

const principles = [
  {
    title: 'Explained in Urdu',
    body: 'When a concept is not landing, it gets explained again in the language you think in.',
  },
  {
    title: 'Technical terms stay English',
    body: 'Function, array, endpoint, commit. Documentation and interviews use these words, so you learn them as they are.',
  },
  {
    title: 'Ask anything, any time',
    body: 'No question is too basic. The ones people are embarrassed to ask are usually the important ones.',
  },
  {
    title: 'Understanding over memorisation',
    body: 'You should be able to rebuild it from scratch, not recite it from a slide.',
  },
]

export function UrduSection() {
  return (
    <Section id="urdu-friendly" className="scroll-mt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>Urdu-friendly teaching</Eyebrow>
              <h2 className="text-gradient max-w-lg text-[clamp(1.85rem,5.2vw,2.85rem)] leading-[1.08] font-bold">
                Technical concepts shouldn't be difficult because of language
              </h2>
              <p className="max-w-lg text-[1.0625rem] leading-relaxed text-content-400">
                Plenty of students in Pakistan stall on programming not because the logic is hard,
                but because it arrives in a second language at the same time. ArixPro removes that
                second obstacle.
              </p>
            </Reveal>

            <dl className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {principles.map((item, index) => (
                <Reveal key={item.title} delay={0.05 * index}>
                  <dt className="flex items-center gap-2.5 text-[0.95rem] font-semibold text-content-100">
                    <Languages className="size-4 shrink-0 text-accent-400" aria-hidden="true" />
                    {item.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-content-400">{item.body}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal delay={0.12}>
            <div className="relative">
              {/* Bleed must stay inside container-page's padding (20px under sm,
                  32px above) or it widens the page and adds a scrollbar. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 -z-10 opacity-70 blur-3xl sm:-inset-6"
                style={{
                  background:
                    'radial-gradient(50% 50% at 60% 40%, var(--glow-2) 0%, transparent 72%)',
                }}
              />

              <div className="gloss overflow-hidden rounded-2xl border border-surface-700 bg-surface-900/85 shadow-card backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b border-surface-800 bg-surface-850/60 px-5 py-3">
                  <MessageCircle className="size-3.5 text-content-500" aria-hidden="true" />
                  <span className="font-mono text-2xs tracking-[0.16em] text-content-500 uppercase">
                    In a session
                  </span>
                </div>

                <div className="flex flex-col gap-5 p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-surface-700 bg-surface-850 text-content-400"
                    >
                      <UserRound className="size-4" />
                    </span>
                    <div className="min-w-0 rounded-2xl rounded-tl-sm border border-surface-800 bg-surface-850/70 px-4 py-3">
                      <p className="text-2xs font-medium tracking-[0.14em] text-content-500 uppercase">
                        Student
                      </p>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-content-200">
                        Sir, <span className="font-mono text-accent-300">return</span> aur{' '}
                        <span className="font-mono text-accent-300">print</span> mein farq kya hai?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-accent-400/30 bg-accent-400/10 font-display text-xs font-bold text-accent-400"
                    >
                      A
                    </span>
                    <div className="min-w-0 rounded-2xl rounded-tl-sm border border-accent-400/20 bg-accent-900/25 px-4 py-3">
                      <p className="text-2xs font-medium tracking-[0.14em] text-accent-400/80 uppercase">
                        Instructor
                      </p>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-content-100">
                        <span className="font-mono text-accent-300">print</span> sirf screen par
                        dikhata hai. <span className="font-mono text-accent-300">return</span> value
                        ko wapas bhejta hai, taake aap usay aage{' '}
                        <span className="font-mono text-accent-300">use</span> kar sakein.
                      </p>
                    </div>
                  </div>

                  <pre className="overflow-x-auto rounded-xl border border-surface-800 bg-surface-950 px-4 py-3.5 font-mono text-[0.7rem] leading-relaxed sm:text-xs">
                    <code>
                      <span className="text-code-keyword">def </span>
                      <span className="text-content-50">greet</span>
                      <span className="text-content-500">(name):</span>
                      {'\n'}
                      <span className="text-code-keyword">    return </span>
                      <span className="text-accent-300">f"Salam, </span>
                      <span className="text-content-400">{'{name}'}</span>
                      <span className="text-accent-300">!"</span>
                    </code>
                  </pre>
                </div>

                <p className="border-t border-surface-800 px-5 py-3.5 text-2xs leading-relaxed text-content-500 sm:px-6">
                  Course material, code and this website stay in English. The explanation meets you
                  where you are.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
