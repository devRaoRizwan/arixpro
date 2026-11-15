import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'

export default function ClosingCta() {
  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined

  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <p className="section-label">Start a Project</p>
        <h2 id="cta-heading">Have a backend to build or one to fix?</h2>
        <p>
          Tell us what you are building. An engineer replies within one business
          day with clear next steps for architecture, timeline, and a fixed quote.
        </p>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary">
            Start a project <ArrowRight size={16} className="btn-arrow" />
          </Link>
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              className="btn btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
          )}
        </div>
        <p className="cta-email mono">
          Or reach us directly at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </section>
  )
}
