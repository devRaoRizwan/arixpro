import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bot,
  Workflow,
  Server,
  Layers,
  Globe,
  Zap,
  Check,
} from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { services, type Service } from '../data/services'
import ClosingCta from '../components/ClosingCta'

const iconComponents: Record<
  Service['icon'],
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Bot,
  Workflow,
  Server,
  Layers,
  Globe,
  Zap,
}

export default function Services() {
  useSeo({
    title: 'Services & Capabilities | ArixPro',
    description:
      'Custom automation and web crawling, high-throughput Python pipelines, bespoke backend APIs, and modern full-stack web applications with direct engineer review and full code ownership.',
    canonical: 'https://arixpro.com/services',
  })

  return (
    <>
      {/* Services offerings */}
      <section className="section section--dots" aria-labelledby="services-page-title">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Engineering Capabilities</p>
            <h1 id="services-page-title">What we engineer &amp; deliver</h1>
            <p
              className="section-note"
              style={{
                marginTop: '20px',
                fontSize: '1.125rem',
                color: 'var(--body-text)',
                maxWidth: '68ch',
              }}
            >
              Specialized software engineering for businesses that need rock-solid data crawlers,
              automated Python pipelines, resilient backends, or modern full-stack web applications.
              Every system is delivered with clean architecture, direct engineering review, and full code ownership.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const IconComp = iconComponents[service.icon]
              return (
                <article key={service.slug} className="service-card">
                  <div>
                    <div className="service-card__top">
                      <div className="service-card__icon" aria-hidden="true">
                        <IconComp size={22} />
                      </div>
                      <span className="mono service-card__badge">Capability</span>
                    </div>

                    <h2 className="service-card__title">{service.name}</h2>
                    <p className="service-card__desc">{service.outcome}</p>

                    <div className="service-card__deliverables-wrap">
                      <p className="mono service-card__section-label">What we deliver</p>
                      <ul className="service-card__deliverables">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx}>
                            <Check size={15} className="service-card__check" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-card__footer">
                    <div>
                      <p className="mono service-card__section-label" style={{ marginBottom: '8px' }}>
                        Core Stack
                      </p>
                      <div className="service-card__stack">
                        {service.stack.map((tech) => (
                          <span key={tech} className="pill pill--sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/contact?service=${service.slug}`}
                      className="btn btn-primary service-card__cta"
                    >
                      Scope this project <ArrowRight size={15} className="btn-arrow" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engineering Consultation Band */}
      <section className="section section--ink" aria-labelledby="consult-heading">
        <div className="container">
          <div className="services-cta-banner">
            <div style={{ maxWidth: '64ch' }}>
              <p className="section-label" style={{ marginBottom: '12px' }}>
                Direct Engineering Review
              </p>
              <h2
                id="consult-heading"
                style={{ color: 'var(--paper)', marginBottom: '16px' }}
              >
                Have a custom technical challenge?
              </h2>
              <p
                style={{
                  color: 'rgba(250,250,248,0.82)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                }}
              >
                Whether you need a bespoke scraping cluster, an event-driven worker pipeline, or a full
                web platform from scratch, talk directly with an engineer to review feasibility, architecture,
                and scope.
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{
                  background: 'var(--paper)',
                  color: 'var(--ink)',
                  borderColor: 'var(--paper)',
                }}
              >
                Start a project discussion <ArrowRight size={16} className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCta />
    </>
  )
}
