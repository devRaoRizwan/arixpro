import { useParams, Link } from 'react-router-dom';
import { projects, Project } from '../data/projects';
import { site } from '../data/site';
import { useSeo } from '../hooks/useSeo';
import NotFound from './NotFound';
import ClosingCta from '../components/ClosingCta';

interface WorkDetailViewProps {
  project: Project;
  projectIndex: number;
}

function WorkDetailView({ project, projectIndex }: WorkDetailViewProps) {
  useSeo({
    title: `${project.name} | ArixPro`,
    description: project.description,
    canonical: `${site.url}/work/${project.slug}`,
  });

  const nextIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <div>
      <article className="section">
        <div className="container">
          {/* Back link */}
          <div>
            <Link to="/work" className="detail-back">
              ← Back to Work
            </Link>
          </div>

          {/* Stack line (mono uppercase) */}
          <div className="project-stack" style={{ margin: '0 0 16px 0' }}>
            {project.stack.join(' · ')}
          </div>

          {/* H1 */}
          <h1 style={{ marginBottom: '24px' }}>
            {project.name}{' '}
            <span style={{ fontWeight: 400, color: 'var(--muted)', fontSize: '1.5rem' }}>· {project.tagline}</span>
          </h1>

          {/* Description paragraph */}
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: 'var(--body-text)',
              maxWidth: '68ch',
            }}
          >
            {project.description}
          </p>

          {/* Problem section */}
          <section
            style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}
            aria-labelledby="problem-heading"
          >
            <h2 id="problem-heading" className="section-label">
              The Problem
            </h2>
            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: '1.7',
                color: 'var(--body-text)',
                maxWidth: '68ch',
              }}
            >
              {project.problem}
            </p>
          </section>

          {/* What we built section */}
          <section
            style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}
            aria-labelledby="built-heading"
          >
            <h2 id="built-heading" className="section-label">
              What We Built
            </h2>
            <ul
              style={{
                listStyle: 'none',
                margin: '16px 0 0 0',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {project.built.map((bullet, idx) => (
                <li
                  key={idx}
                  style={{
                    position: 'relative',
                    paddingLeft: '20px',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: 'var(--body-text)',
                    maxWidth: '68ch',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: '2px',
                      top: '10px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--violet)',
                      display: 'inline-block',
                    }}
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture box */}
          <div style={{ marginTop: '36px' }}>
            <p className="mono" style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Architecture Pipeline
            </p>
            <div className="arch-box" aria-label={`Architecture for ${project.name}`}>
              <div className="arch-box__header" aria-hidden="true">
                <span className="arch-box__bullet" />
                <span className="arch-box__tag">FLOW</span>
              </div>
              <div className="arch-box__body">
                {project.architecture.map((line, idx) => (
                  <div key={idx}>
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
          </div>

          {/* External links: ONLY where data provides a real URL */}
          {project.links && project.links.length > 0 && (
            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}

          {/* Next product link */}
          <div className="detail-nav">
            <Link
              to={`/work/${nextProject.slug}`}
              className="btn btn-outline"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Next product: {nextProject.name} →
            </Link>
          </div>
        </div>
      </article>

      <ClosingCta />
    </div>
  );
}

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projectIndex !== -1 ? projects[projectIndex] : null;

  if (!project) {
    return <NotFound />;
  }

  return <WorkDetailView project={project} projectIndex={projectIndex} />;
}
