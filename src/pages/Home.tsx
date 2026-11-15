import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Server,
  Database,
  Zap,
  Cloud,
  Layout,
  Bot,
  Workflow,
  Layers,
  Globe,
  Check,
} from 'lucide-react'
import TechIcon from '../components/TechIcon'
import { useSeo } from '../hooks/useSeo'
import { services, type Service } from '../data/services'
import { projects } from '../data/projects'
import { faqs } from '../data/faq'
import SectionHeading from '../components/SectionHeading'
import ClosingCta from '../components/ClosingCta'
import Reveal from '../components/Reveal'

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

export default function Home() {
  useSeo({
    title: 'ArixPro | Backend-first software studio in Lahore',
    description:
      "ArixPro is a custom software studio that builds Python backends, APIs and SaaS platforms for startups and growing businesses. Designed properly, shipped on a fixed quote, and handed over with all the code. It's yours.",
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
        <div className="container">
          <div className="hero__sign-wrap" aria-hidden="true">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/brand/arixpro-sign.png"
              className="hero__sign-video"
            >
              <source src="/brand/arixpro-sign-animation-hero.webm" type="video/webm" />
              <img
                src="/brand/arixpro-sign-animation-hero.gif"
                alt=""
                className="hero__sign-fallback"
              />
            </video>
            <img
              src="/brand/arixpro-sign.png"
              alt=""
              className="hero__sign-static"
            />
          </div>

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
            ArixPro is a software studio that builds Python backends, APIs and
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
              https://api.jobharvester.com/v1/jobs/
            </div>
            <div style={{ marginTop: '8px' }}>
              Response &#123; &quot;count&quot;: <span className="green">1658</span>, &quot;status&quot;: <span className="green">&quot;200 OK&quot;</span> &#125;
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

      {/* Services */}
      <section className="section section--dots" id="services" aria-labelledby="services-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              label="Capabilities"
              title="What we build"
              note="From automated web scrapers and high-throughput Python pipelines to custom APIs and full-stack web applications."
            />
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

                      <h3 className="service-card__title">{service.name}</h3>
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
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <Link to="/services" className="btn btn-outline">
                Explore all engineering capabilities <ArrowRight size={16} className="btn-arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section" id="work" aria-labelledby="work-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              label="Selected Work"
              title="Products we built"
              note="Our own products, designed and built end-to-end by this studio: public, live, and inspectable. No confidential-client theatre."
            />
            <div className="home-projects-grid">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="home-project-card"
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) return
                    navigate(`/work/${project.slug}`)
                  }}
                >
                  <div>
                    <div className="home-project-card__identity">
                      {project.logo && (
                        <img
                          src={project.logo}
                          alt=""
                          width={32}
                          height={32}
                          className="home-project-card__logo"
                          loading="lazy"
                        />
                      )}
                      <h3 className="home-project-card__title">
                        <Link to={`/work/${project.slug}`}>{project.name}</Link>
                      </h3>
                    </div>

                    <p className="home-project-card__desc">{project.brief}</p>
                  </div>

                  <div className="home-project-card__bottom">
                    <div className="home-project-card__stack">
                      {project.stack.map((item) => (
                        <span key={item} className="home-project-card__pill">
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/work/${project.slug}`}
                      className="home-project-card__link mono"
                    >
                      Case study →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How We Work */}
      <section className="section section--dots" id="process" aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
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

      {/* FAQ */}
      <section className="section" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
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
