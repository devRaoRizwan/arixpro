import { useState } from 'react';
import { useSeo } from '../hooks/useSeo';
import { faqs } from '../data/faq';
import ClosingCta from '../components/ClosingCta';

interface PhaseItem {
  step: string;
  timeframe: string;
  title: string;
  description: string;
  receives: string;
}

const PHASES: PhaseItem[] = [
  {
    step: 'Phase 01',
    timeframe: 'Days 1 to 3',
    title: 'Scope & fixed-price agreement',
    description:
      'We review your requirements, map the user flows and define the data model. Before any code is written, you approve a fixed quote with delivery dates: the price does not creep later.',
    receives:
      'Feature list and user-journey spec · Database schema and integration plan · Guaranteed fixed quote',
  },
  {
    step: 'Phase 02',
    timeframe: 'Week 1',
    title: 'Core build & live staging link',
    description:
      'Database schema, authentication and the core interface go in first. In week 1 you receive a private staging URL running real software with real queries and real auth, updated on every milestone.',
    receives:
      'Live staging environment · Weekly written progress note · Staging build updated per milestone',
  },
  {
    step: 'Phase 03',
    timeframe: 'Weeks 2 to 4+',
    title: 'Integrations & testing',
    description:
      'Payments, third-party APIs, background workers and edge cases get built and tested against the staging build you can already click through. Surprises surface here, while they are still cheap to fix.',
    receives:
      'Integrations live on staging · Test pass on real flows · Performance and security check before launch',
  },
  {
    step: 'Phase 04',
    timeframe: 'Launch & Beyond',
    title: 'Launch & full handover',
    description:
      'Production deployment with SSL and domain configuration, then everything transfers to you: repository, cloud accounts, documentation. 30 days of post-launch fixes and monitoring are included in every build.',
    receives:
      'Production launch · Complete repo and cloud account transfer · 30-day warranty and bug fixes',
  },
];

export default function Process() {
  useSeo({
    title: 'Process | ArixPro',
    description:
      'From first call to production launch: simple milestones, working code every week, and the whole thing handed over to you at the end.',
    canonical: 'https://arixpro.com/process',
  });

  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <>
      <section className="section section--dots" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Process</p>
            <h1 id="process-heading">Fixed quote. Weekly proof.</h1>
            <p
              className="section-note"
              style={{ fontSize: '1.125rem', marginTop: '20px', maxWidth: '64ch' }}
            >
              From first call to production launch: simple milestones, working code every week, and the whole system handed over to you at the end.
            </p>
          </div>

          <div className="phase-list" role="list">
            {PHASES.map((phase, idx) => (
              <article className="phase" key={phase.step} role="listitem">
                <div className="phase__header">
                  <div className="process-step__badge mono" aria-hidden="true">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="phase__meta">
                      {phase.step} · {phase.timeframe}
                    </span>
                    <h2 style={{ fontSize: '1.35rem', marginTop: '8px' }}>
                      {phase.title}
                    </h2>
                  </div>
                </div>
                <p style={{ color: 'var(--body-text)', lineHeight: 1.6 }}>
                  {phase.description}
                </p>
                <div className="phase__receives">
                  <div className="phase__receives-label mono">Included Deliverables</div>
                  <p className="mono">{phase.receives}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Frequently Asked Questions</p>
            <h2 id="faq-heading">Common questions before starting</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaqs.has(index);
              return (
                <div className="faq-item" key={index}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span
                      className="faq-indicator mono"
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`faq-answer ${isOpen ? 'open' : ''}`}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
