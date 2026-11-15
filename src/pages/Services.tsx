import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { services } from '../data/services'
import ClosingCta from '../components/ClosingCta'

export default function Services() {
  useSeo({
    title: 'Services | ArixPro',
    description:
      'Three offers, fixed quotes, full code ownership. We are backend-first on purpose: it is the work we can prove, and the work we do best.',
    canonical: 'https://arixpro.com/services',
  })

  return (
    <>
      {/* Page Header */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '40px' }} aria-labelledby="services-page-title">
        <div className="container">
          <p className="section-label">Services</p>
          <h1 id="services-page-title">What we build</h1>
          <p style={{ marginTop: '20px', fontSize: '1.125rem', color: 'var(--body-text)', maxWidth: '64ch' }}>
            Three offers, fixed quotes, and full code ownership. We are backend-first
            on purpose: it is the work we can prove, and the work we do best.
          </p>
        </div>
      </section>

      {/* 3 Services as full blocks */}
      <section className="section section--dots" style={{ paddingTop: 0 }} aria-label="Service offerings">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {services.map((service, idx) => (
              <div
                key={service.slug}
                className="card"
                style={{ padding: '40px', background: 'var(--paper)' }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '16px',
                    borderBottom: '1px solid var(--line)',
                    paddingBottom: '24px',
                  }}
                >
                  <div>
                    <p
                      className="mono"
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--violet)',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      0{idx + 1} · Core Service
                    </p>
                    <h2 style={{ fontSize: '1.75rem' }}>{service.name}</h2>
                  </div>
                  <div className="mono" style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--ink)',
                      }}
                    >
                      {service.price}
                    </div>
                    <div
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--muted)',
                        marginTop: '4px',
                      }}
                    >
                      Timeline: {service.timeline}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    marginTop: '24px',
                    fontSize: '1.0625rem',
                    color: 'var(--body-text)',
                    maxWidth: 'none',
                  }}
                >
                  {service.outcome}
                </p>

                <div style={{ marginTop: '28px' }}>
                  <p
                    className="mono"
                    style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      marginBottom: '12px',
                      fontWeight: 600,
                    }}
                  >
                    What you receive in scope
                  </p>
                  <ul className="service-deliverables">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '36px' }}>
                  <Link
                    to={`/contact?service=${service.slug}`}
                    className="btn btn-primary"
                  >
                    Start with this <ArrowRight size={16} className="btn-arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rescue & Scale Audit Band */}
      <section className="section section--ink" aria-labelledby="audit-band-heading">
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '32px',
            }}
          >
            <div style={{ maxWidth: '64ch' }}>
              <p className="section-label" style={{ marginBottom: '12px' }}>
                Rescue &amp; Scale Audit
              </p>
              <h2
                id="audit-band-heading"
                style={{ color: 'var(--paper)', marginBottom: '16px' }}
              >
                Not sure which you need?
              </h2>
              <p
                style={{
                  color: 'rgba(250,250,248,0.8)',
                  fontSize: '1.0625rem',
                }}
              >
                Start with a Rescue &amp; Scale audit: a fixed $750, credited
                against any fix we do afterwards.
              </p>
            </div>
            <div>
              <Link
                to="/contact?service=rescue-scale"
                className="btn btn-primary"
                style={{
                  background: '#ffffff',
                  color: 'var(--ink)',
                  borderColor: '#ffffff',
                }}
              >
                Book an audit <ArrowRight size={16} className="btn-arrow" />
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
