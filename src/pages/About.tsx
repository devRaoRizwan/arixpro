import { useSeo } from '../hooks/useSeo';
import ClosingCta from '../components/ClosingCta';

const ABOUT_POINTS = [
  {
    title: 'Direct engineer access',
    description:
      'You communicate directly with the engineer writing your code. Zero account managers, zero sales layers, and zero translation loss.',
  },
  {
    title: 'Complete code ownership',
    description:
      'Every repository, database schema, and deployment pipeline belongs to you on launch. Full intellectual property transfer, zero lock-in.',
  },
  {
    title: 'Guaranteed fixed quotes',
    description:
      'Clear scope and fixed pricing agreed upfront before any code is written. If a feature takes longer, it is never added to your bill.',
  },
  {
    title: 'Focused studio capacity',
    description:
      'We deliberately stay compact and take on a limited number of systems at a time, ensuring each build gets undivided attention.',
  },
  {
    title: 'Weekly working builds',
    description:
      'Private staging environment running real software with real database queries from week 1, updated on every milestone.',
  },
  {
    title: '30-day post-launch warranty',
    description:
      'Every build includes 30 days of bug fixes, performance monitoring, and handoff support at no extra cost.',
  },
];

export default function About() {
  useSeo({
    title: 'About | ArixPro',
    description:
      'ArixPro is an independent, backend-first software studio in Lahore. We design, build, and maintain Python backends, APIs, and SaaS platforms.',
    canonical: 'https://arixpro.com/about',
  });

  return (
    <>
      <section className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">About</p>
            <h1 id="about-heading">Small team. Direct to code.</h1>
            <p
              className="section-note"
              style={{ fontSize: '1.125rem', marginTop: '20px', maxWidth: '64ch' }}
            >
              ArixPro is an independent, backend-first software studio in Lahore.
              We design, build, and maintain Python backends, APIs, and SaaS
              platforms.
            </p>
          </div>

          <div className="principles-grid" role="list">
            {ABOUT_POINTS.map((point) => (
              <div className="principle" key={point.title} role="listitem">
                <h2 style={{ fontSize: '1.125rem', marginBottom: '8px', fontWeight: 600 }}>
                  {point.title}
                </h2>
                <p style={{ lineHeight: 1.6, color: 'var(--body-text)', fontSize: '0.9375rem' }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
