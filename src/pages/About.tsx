import { useSeo } from '../hooks/useSeo';
import ClosingCta from '../components/ClosingCta';

const PRINCIPLES = [
  {
    title: 'Direct engineer access',
    description:
      'You work directly with the engineer writing your code. Zero account managers, zero sales fluff, and zero telephone games.',
  },
  {
    title: 'Complete code ownership',
    description:
      'Every repository, database schema and deployment pipeline belongs to you from day one. No proprietary lock-in, no monthly software ransom.',
  },
  {
    title: 'Fixed quotes, honestly scoped',
    description:
      'A guaranteed fixed quote before we write code. If a feature takes longer than we estimated, that is on our shoulders: never added to your bill.',
  },
  {
    title: 'Post-launch reliability',
    description:
      'Every project includes 30 days of post-launch bug fixes and monitoring at no extra cost. We stand by the code we ship.',
  },
];

export default function About() {
  useSeo({
    title: 'About | ArixPro',
    description:
      'ArixPro is an independent, backend-first software studio in Lahore. We design, build and maintain Python backends, APIs and SaaS platforms, and we would rather be honestly small than impressively fake.',
    canonical: 'https://arixpro.com/about',
  });

  return (
    <>
      <section className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">About</p>
            <h1 id="about-heading">Small studio. Senior people.</h1>
            <p
              className="section-note"
              style={{ fontSize: '1.125rem', marginTop: '20px', maxWidth: '64ch' }}
            >
              ArixPro is an independent, backend-first software studio in Lahore.
              We design, build and maintain Python backends, APIs and SaaS
              platforms, and we would rather be honestly small than
              impressively fake.
            </p>
          </div>

          <div className="studio-story" style={{ marginTop: '72px' }}>
            <div className="section-heading" style={{ marginBottom: '28px' }}>
              <p className="section-label">THE STUDIO</p>
              <h2>Built to stay small. Built to stay close to code.</h2>
            </div>

            <div className="studio-story__body">
              <p className="studio-story__lead">
                ArixPro was built on a straightforward belief: the engineers who scope your architecture should be the engineers who write the code, run the migrations, and deploy to production.
              </p>
              <p>
                We do not maintain sales layers, account managers, or junior benches. When you hire ArixPro, there is zero translation loss between your product requirements and the backend that powers them. Every database schema, API endpoint, and background queue is designed and built directly by senior engineers.
              </p>
              <p>
                We keep the studio deliberately compact so we never take on more projects than we can give our full attention. For teams building serious backends, that focus is not a compromise — it is the competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-heading">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">How We Operate</p>
            <h2 id="principles-heading">Studio Principles</h2>
          </div>

          <div className="principles-grid">
            {PRINCIPLES.map((principle) => (
              <div className="principle" key={principle.title}>
                <h3 style={{ fontSize: '1.0625rem', marginBottom: '10px' }}>
                  {principle.title}
                </h3>
                <p style={{ lineHeight: 1.6 }}>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
