import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
    description: project.brief,
    canonical: `${site.url}/work/${project.slug}`,
  });

  const nextIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <div>
      <article className="section">
        <div className="container">
          {/* Back link */}
          <div style={{ marginBottom: '28px' }}>
            <Link to="/work" className="detail-back">
              ← Back to Work
            </Link>
          </div>

          {/* Title and tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            {project.logo && (
              <img
                src={project.logo}
                alt=""
                width={44}
                height={44}
                className="work-card-minimal__logo"
                loading="eager"
              />
            )}
            <div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1.15 }}>
                {project.name}
              </h1>
              <p style={{ color: 'var(--muted)', fontSize: '1.0625rem', marginTop: '4px' }}>
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Key Specifications Bar */}
          <div className="work-detail__specs">
            {project.specs.map((spec) => (
              <div key={spec.label} className="work-detail__spec-card">
                <span className="mono work-detail__spec-label">{spec.label}</span>
                <span className="work-detail__spec-value">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Hero Preview Frame */}
          {project.coverImage && (
            <div className="work-detail__hero-frame">
              <div className="work-card__browser-bar">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-domain">{project.slug}.app</span>
              </div>
              <img
                src={project.coverImage}
                alt={`${project.name} system showcase`}
                className="work-detail__hero-img"
                width={1400}
                height={612}
                loading="eager"
              />
            </div>
          )}

          {/* The Problem (Crisp points, no paragraphs) */}
          <section className="work-detail__section" aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="section-label">
              The Problem
            </h2>
            <div className="work-detail__points-card">
              <ul className="work-detail__bullet-list">
                {project.problemPoints.map((pt, idx) => (
                  <li key={idx}>
                    <span className="work-detail__bullet-dot" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Key Engineering Decisions (Crisp 2-column cards) */}
          <section className="work-detail__section" aria-labelledby="decisions-heading">
            <h2 id="decisions-heading" className="section-label">
              Key Engineering Decisions
            </h2>
            <div className="work-detail__decisions-grid">
              {project.builtPoints.map((item, idx) => (
                <div key={idx} className="work-detail__decision-card">
                  <h3 className="work-detail__decision-title">{item.title}</h3>
                  <p className="work-detail__decision-detail">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* System Pipeline (Crisp 3-stage cards, NO ascii flowcharts) */}
          <section className="work-detail__section" aria-labelledby="pipeline-heading">
            <h2 id="pipeline-heading" className="section-label">
              System Pipeline
            </h2>
            <div className="work-detail__pipeline-grid">
              {project.pipelineStages.map((stage) => (
                <div key={stage.step} className="work-detail__pipeline-card">
                  <span className="mono work-detail__pipeline-step">STAGE {stage.step}</span>
                  <h3 className="work-detail__pipeline-title">{stage.title}</h3>
                  <p className="work-detail__pipeline-detail">{stage.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="work-detail__section" aria-labelledby="tech-heading">
            <h2 id="tech-heading" className="section-label">
              Technologies Used
            </h2>
            <div className="work-card-minimal__stack" style={{ marginTop: '16px' }}>
              {project.stack.map((item) => (
                <span key={item} className="work-card-minimal__pill">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Next product link */}
          <div
            className="detail-nav"
            style={{ marginTop: '56px', paddingTop: '28px', borderTop: '1px solid var(--line)' }}
          >
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
              Next project: {nextProject.name} <ArrowRight size={15} className="btn-arrow" />
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
