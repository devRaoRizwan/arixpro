import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { site } from '../data/site';
import { useSeo } from '../hooks/useSeo';
import ClosingCta from '../components/ClosingCta';

export default function Work() {
  const navigate = useNavigate();
  useSeo({
    title: 'Work | ArixPro',
    description:
      'Our own products, designed and built end-to-end by this studio: public, live, and inspectable. No confidential-client theatre.',
    canonical: `${site.url}/work`,
  });

  return (
    <div>
      <section className="section" aria-labelledby="work-heading">
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <p className="section-label">Work</p>
            <h1 id="work-heading">Products we built</h1>
            <p
              className="section-note"
              style={{
                marginTop: '16px',
                maxWidth: '68ch',
                fontSize: '1.125rem',
                color: 'var(--body-text)',
              }}
            >
              Our own products, designed and built end-to-end by this studio: public, live, and
              inspectable. No confidential-client theatre.
            </p>
          </div>

          <div className="project-list" style={{ marginTop: '48px' }}>
            {projects.map((project, idx) => (
              <article
                key={project.slug}
                className="project-row"
                aria-labelledby={`proj-${project.slug}`}
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('a, button')) return;
                  navigate(`/work/${project.slug}`);
                }}
              >
                <div className="project-row__header">
                  <div>
                    <span className="mono project-row__num" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
                      0{idx + 1}
                    </span>
                    <h2 id={`proj-${project.slug}`} style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '4px' }}>
                      <Link to={`/work/${project.slug}`} style={{ color: 'var(--ink)' }}>
                        {project.name}
                      </Link>{' '}
                      <span style={{ fontWeight: 400, color: 'var(--muted)', fontSize: '1.125rem' }}>· {project.tagline}</span>
                    </h2>
                  </div>
                  <Link
                    to={`/work/${project.slug}`}
                    className="btn btn-outline"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    How it's built →
                  </Link>
                </div>

                <div className="project-stack">{project.stack.join(' · ')}</div>

                <p
                  style={{
                    marginTop: '12px',
                    color: 'var(--body-text)',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    maxWidth: '68ch',
                  }}
                >
                  {project.description}
                </p>

                <div className="arch-box" aria-label={`Architecture for ${project.name}`}>
                  <div className="arch-box__header" aria-hidden="true">
                    <span className="arch-box__bullet" />
                    <span className="arch-box__tag">FLOW</span>
                  </div>
                  <div className="arch-box__body">
                    {project.architecture.map((line, aIdx) => (
                      <div key={aIdx}>
                        {line.split('→').map((part, pIdx, arr) => (
                          <span key={pIdx}>
                            {part}
                            {pIdx < arr.length - 1 && <span className="arch-arrow"> → </span>}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}
