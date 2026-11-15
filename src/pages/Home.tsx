import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Server, Database, Zap, Cloud, Layout } from 'lucide-react'
import TechIcon from '../components/TechIcon'
import { useSeo } from '../hooks/useSeo'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { faqs } from '../data/faq'
import SectionHeading from '../components/SectionHeading'
import ClosingCta from '../components/ClosingCta'
import Reveal from '../components/Reveal'

export default function Home() {
  useSeo({
    title: 'ArixPro | Backend-first software house in Lahore',
    description:
      "ArixPro is a software house that builds Python backends, APIs and SaaS platforms for startups and growing businesses. Designed properly, shipped on a fixed quote, and handed over with all the code. It's yours.",
    canonical: 'https://arixpro.com/',
  })

  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx))
  }

  const homeFaqs = faqs.slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-heading">
        <svg
          className="hero__watermark"
          viewBox="0 0 72 72"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M14 58 L36 14 L58 58"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 44 H57"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="63" cy="44" r="4.5" fill="currentColor" />
        </svg>

        <div className="container">
          <p className="hero__label">
            Software Studio
          </p>

          <h1 id="hero-heading">
            Backends that don't{' '}
            <span style={{ color: 'var(--violet)' }}>break</span> when you
            grow.
          </h1>

          <div className="hero__route-line" aria-hidden="true">
            <svg viewBox="0 0 600 24" fill="none" preserveAspectRatio="none">
              <circle cx="4" cy="4" r="3.5" fill="#5B2EE5" />
              <path
                className="hero__route-path"
                d="M 4 4 H 280 L 300 20 H 596"
                stroke="#5B2EE5"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="596" cy="20" r="3.5" fill="#5B2EE5" />
            </svg>
          </div>

          <p className="hero__sub">
            ArixPro is a software house that builds Python backends, APIs and
            SaaS platforms for startups and growing businesses. Designed properly,
            shipped on a fixed quote, and handed over with complete code ownership. It's
            yours.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Start a project <ArrowRight size={16} className="btn-arrow" />
            </Link>
            <Link to="/work" className="btn btn-outline-light">
              See our work
            </Link>
          </div>

          {/* Terminal / Live API Code Inspector */}
          <div className="code-panel" role="region" aria-label="Live API verification">
            <div className="code-panel__header">
              <div className="code-panel__dots" aria-hidden="true">
                <span className="code-panel__dot" />
                <span className="code-panel__dot" />
                <span className="code-panel__dot" />
              </div>
              <span className="mono">api.jobharvester.com · Live system inspection</span>
            </div>
            <div>
              <span className="method">GET</span>{' '}
              https://jobharvester-backend-3bto.onrender.com/api/v1/jobs/
            </div>
            <div style={{ marginTop: '8px' }}>
              Response &#123; &quot;count&quot;:{' '}
              <span className="green">1658</span>, &quot;status&quot;:{' '}
              <span className="green">&quot;200 OK&quot;</span> &#125;
            </div>
            <div className="comment" style={{ marginTop: '12px' }}>
              1,658 live Pakistan tech jobs, crawled and de-duplicated · Counted 15 Nov 2026
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <div className="proof-strip">
        <div className="container">
          <div className="proof-strip__inner">
            <div className="proof-item">
              <div className="proof-item__stat">100k+ daily requests</div>
              <div className="proof-item__label">
                Django APIs in production — Rizwan's engineering record
              </div>
            </div>
            <div className="proof-item">
              <div className="proof-item__stat">4 active products</div>
              <div className="proof-item__label">
                Designed, built and maintained end-to-end by this studio
              </div>
            </div>
            <div className="proof-item">
              <div className="proof-item__stat">100% code ownership</div>
              <div className="proof-item__label">
                Repository, cloud accounts and IP transferred on launch day
              </div>
            </div>
            <div className="proof-item">
              <div className="proof-item__stat">Fixed quotes</div>
              <div className="proof-item__label">
                No hourly billing; the price we agree is the price you pay
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 01 Services */}
      <section className="section section--dots" id="services" aria-labelledby="services-heading">
        <div className="container">
          <Reveal>
            <SectionHeading number="01" label="Services" title="What we build" />
            <div className="services-list">
              {services.map((service, idx) => (
                <div className="service-row" key={service.slug}>
                  <div className="service-num">0{idx + 1}</div>
                  <div>
                    <h3>{service.name}</h3>
                    <p style={{ marginTop: '8px' }}>{service.outcome}</p>
                    <ul className="service-deliverables">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-meta">
                    <strong>{service.price}</strong>
                    <span>{service.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 Selected Work */}
      <section className="section" id="work" aria-labelledby="work-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              number="02"
              label="Selected Work"
              title="Products we built"
              note="Our own products, designed and built end-to-end by this studio: public, live, and inspectable. No confidential-client theatre."
            />
            <div className="projects-list">
              {projects.map((project, idx) => (
                <div
                  className="project-row"
                  key={project.slug}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) return
                    navigate(`/work/${project.slug}`)
                  }}
                >
                  <div className="project-row__header">
                    <div>
                      <span className="mono project-row__num" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
                        0{idx + 1}
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginTop: '4px' }}>
                        <Link to={`/work/${project.slug}`} style={{ color: 'var(--ink)' }}>
                          {project.name}
                        </Link>{' '}
                        <span
                          className="muted"
                          style={{ fontWeight: 400, fontSize: '1rem' }}
                        >
                          · {project.tagline}
                        </span>
                      </h3>
                      <p className="project-stack">{project.stack.join(' · ')}</p>
                    </div>
                    <Link
                      to={`/work/${project.slug}`}
                      className="mono"
                      style={{ fontSize: '0.875rem', whiteSpace: 'nowrap', fontWeight: 600 }}
                    >
                      How it's built →
                    </Link>
                  </div>
                  <p style={{ marginTop: '8px' }}>{project.description}</p>
                  {project.architecture && project.architecture.length > 0 && (
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
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 How We Work */}
      <section className="section section--dots" id="process" aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              number="03"
              label="How We Work"
              title="Fixed quote. Weekly proof."
              note="You talk directly to the engineer building your system. No account managers, and no telephone game."
            />
            <div className="process-grid">
              <div className="process-step">
                <div className="process-step__badge mono" aria-hidden="true">01</div>
                <div className="process-step__label">Step 01 · Days 1 to 3</div>
                <h3>Scope &amp; fixed quote</h3>
                <p>
                  We map your user flows and data model, then quote a fixed price
                  and date. You approve before any code exists.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step__badge mono" aria-hidden="true">02</div>
                <div className="process-step__label">Step 02 · Week 1</div>
                <h3>Staging link, live</h3>
                <p>
                  A private staging URL with the real database and auth: click
                  through actual software in week 1, not mockups.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step__badge mono" aria-hidden="true">03</div>
                <div className="process-step__label">Step 03 · Weekly</div>
                <h3>Builds you can test</h3>
                <p>
                  Staging updates on every milestone, with a short written note on
                  what changed and what comes next.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step__badge mono" aria-hidden="true">04</div>
                <div className="process-step__label">Step 04 · Launch</div>
                <h3>Handover, all yours</h3>
                <p>
                  Production deploy, then full transfer: repository, cloud
                  accounts, and docs. 30 days of post-launch fixes included.
                </p>
              </div>
            </div>

            {/* Stack block */}
            <div className="stack-block">
              <div className="stack-block__label">Our Tech Stack</div>

              <div className="stack-grid">
                <div className="stack-row">
                  <div className="stack-row__category">
                    <Server size={15} className="stack-category-icon" aria-hidden="true" />
                    <span>Backend</span>
                  </div>
                  <div className="stack-row__items">
                    <span className="stack-pill"><TechIcon name="python" /> Python</span>
                    <span className="stack-pill"><TechIcon name="django" /> Django</span>
                    <span className="stack-pill"><TechIcon name="fastapi" /> FastAPI</span>
                    <span className="stack-pill"><TechIcon name="flask" /> Flask</span>
                  </div>
                </div>

                <div className="stack-row">
                  <div className="stack-row__category">
                    <Database size={15} className="stack-category-icon" aria-hidden="true" />
                    <span>Data</span>
                  </div>
                  <div className="stack-row__items">
                    <span className="stack-pill"><TechIcon name="postgresql" /> PostgreSQL</span>
                    <span className="stack-pill"><TechIcon name="redis" /> Redis</span>
                    <span className="stack-pill"><TechIcon name="mongodb" /> MongoDB</span>
                  </div>
                </div>

                <div className="stack-row">
                  <div className="stack-row__category">
                    <Zap size={15} className="stack-category-icon" aria-hidden="true" />
                    <span>Async</span>
                  </div>
                  <div className="stack-row__items">
                    <span className="stack-pill"><TechIcon name="celery" /> Celery</span>
                    <span className="stack-pill"><TechIcon name="rabbitmq" /> RabbitMQ</span>
                  </div>
                </div>

                <div className="stack-row">
                  <div className="stack-row__category">
                    <Cloud size={15} className="stack-category-icon" aria-hidden="true" />
                    <span>Infra</span>
                  </div>
                  <div className="stack-row__items">
                    <span className="stack-pill"><TechIcon name="docker" /> Docker</span>
                    <span className="stack-pill"><TechIcon name="aws" /> AWS</span>
                    <span className="stack-pill"><TechIcon name="github" /> GitHub Actions</span>
                  </div>
                </div>

                <div className="stack-row">
                  <div className="stack-row__category">
                    <Layout size={15} className="stack-category-icon" aria-hidden="true" />
                    <span>Frontend</span>
                  </div>
                  <div className="stack-row__items">
                    <span className="stack-pill"><TechIcon name="react" /> React</span>
                    <span className="stack-pill"><TechIcon name="typescript" /> TypeScript</span>
                  </div>
                </div>
              </div>

              <p className="stack-note">
                If we cannot defend it in a technical interview, it does not go on
                this page.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 FAQ */}
      <section className="section" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              number="04"
              label="FAQ"
              title="Questions clients usually ask"
            />
            <div className="faq-list">
              {homeFaqs.map((faq, idx) => (
                <div className="faq-item" key={idx}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span>{faq.question}</span>
                    <span
                      className="faq-indicator mono"
                      aria-hidden="true"
                    >
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`faq-answer ${openFaq === idx ? 'open' : ''}`}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCta />
    </>
  )
}
