import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { site } from '../data/site';
import { useSeo } from '../hooks/useSeo';
import ClosingCta from '../components/ClosingCta';

export default function Work() {
  const navigate = useNavigate();
  useSeo({
    title: 'Work | ArixPro',
    description:
      'Production software and systems engineered end-to-end by ArixPro: security tooling, data aggregators, and automated audit pipelines.',
    canonical: `${site.url}/work`,
  });

  return (
    <div>
      <section className="section" aria-labelledby="work-heading">
        <div className="container">
          <div className="section-heading" style={{ marginBottom: '56px' }}>
            <p className="section-label">Selected Work</p>
            <h1 id="work-heading">Products we built</h1>
            <p className="section-note">
              Real production systems designed, architected, and built end-to-end by this studio.
              Click any project to deep dive into its architecture and implementation.
            </p>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="work-card-minimal"
                aria-labelledby={`proj-${project.slug}`}
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('a, button')) return;
                  navigate(`/work/${project.slug}`);
                }}
              >
                <div>
                  <div className="work-card-minimal__identity">
                    {project.logo && (
                      <img
                        src={project.logo}
                        alt=""
                        className="work-card-minimal__logo"
                        width={38}
                        height={38}
                        loading="lazy"
                      />
                    )}
                    <h2 id={`proj-${project.slug}`} className="work-card-minimal__title">
                      <Link to={`/work/${project.slug}`}>{project.name}</Link>
                    </h2>
                  </div>

                  <p className="work-card-minimal__desc">{project.brief}</p>
                </div>

                <div className="work-card-minimal__bottom">
                  <div className="work-card-minimal__stack">
                    {project.stack.map((item) => (
                      <span key={item} className="work-card-minimal__pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/work/${project.slug}`}
                    className="work-card-minimal__link"
                  >
                    Deep dive architecture <ArrowRight size={15} className="btn-arrow" />
                  </Link>
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
