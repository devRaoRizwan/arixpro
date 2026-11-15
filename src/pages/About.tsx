import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import { site } from '../data/site';
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

          <div className="team-block" style={{ marginTop: '72px' }}>
            <div className="section-heading" style={{ marginBottom: '36px' }}>
              <p className="section-label">THE TEAM</p>
              <h2>Two engineers. No hand-offs.</h2>
            </div>

            <div className="team-grid">
              {/* ENTRY A — Rao Rizwan */}
              <article className="team-card" aria-labelledby="member-rizwan">
                <div className="founder-photo" style={{ maxWidth: '240px', marginBottom: '24px' }}>
                  <img
                    src="/images/rizwan.jpg"
                    alt="Rao Rizwan"
                    width={240}
                    height={320}
                    loading="eager"
                  />
                  <div className="founder-caption mono">RAO RIZWAN</div>
                </div>

                <h3 id="member-rizwan" className="team-card__name">Rao Rizwan</h3>

                <div className="team-card__bio">
                  <p>
                    Python backend engineer based in Lahore, Pakistan. At Programmers
                    Force (2024–2026) he built Django REST APIs serving 100,000+
                    requests a day, with Celery workers moving the slow work off the
                    request path. At Broadstone Technologies he worked on Flask
                    backends on AWS with OAuth, and wired security scanning into the
                    CI/CD pipeline.
                  </p>
                  <p>
                    His own products (JobHarvester, BOMWatcher, SiteScopia and
                    Jobbr) are the studio's public proof: designed, built and
                    maintained end-to-end, and inspectable on the{' '}
                    <Link to="/work">Work page</Link>.
                  </p>
                  <p>
                    ArixPro is a two-engineer studio run by two friends, Rizwan and
                    Aneeq, with Rizwan leading the backend work. The people who
                    scope your project are the people who build it. For a backend
                    build, that is not a limitation — it is the advantage.
                  </p>
                </div>

                <div className="team-card__links">
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub @devRaoRizwan ↗
                  </a>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://devraorizwan.online"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    devraorizwan.online ↗
                  </a>
                </div>
              </article>

              {/* ENTRY B — Aneeq */}
              <article className="team-card" aria-labelledby="member-aneeq">
                <h3 id="member-aneeq" className="team-card__name">Aneeq</h3>

                <div className="team-card__bio">
                  <p>
                    Aneeq is an engineer and the studio's second pair of hands on
                    everything ArixPro ships. He builds alongside Rizwan across the
                    studio's own products and client work — the other half of every
                    build review and launch.
                  </p>
                </div>
              </article>
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
