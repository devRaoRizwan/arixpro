import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { site } from '../data/site';
import { useSeo } from '../hooks/useSeo';

export default function Contact() {
  useSeo({
    title: 'Start a project | ArixPro',
    description:
      'Every enquiry is reviewed by an engineer: the person who would build it. We reply within one business day with next steps for scope, architecture and delivery.',
    canonical: 'https://arixpro.com/contact',
  });

  const [searchParams] = useSearchParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(() => {
    const serviceSlug = searchParams.get('service');
    if (serviceSlug) {
      const matched = services.find((s) => s.slug === serviceSlug);
      if (matched) {
        return `I want to scope a project: ${matched.name}.`;
      }
    }
    return '';
  });
  const [budget, setBudget] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const hasWhatsApp = typeof whatsappNumber === 'string' && whatsappNumber.trim().length > 0;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formspreeId && formspreeId.trim()) {
      setStatus('sending');
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId.trim()}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
            budget,
          }),
        });

        if (response.ok) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      // If VITE_FORMSPREE_ID is not configured, do not fake a submission.
      // Direct the user to their mail client instead.
      const bodyText = `Name: ${name}\nWork email: ${email}\nBudget: ${budget || 'Not specified'}\n\nProject details:\n${message}`;
      if (typeof window !== 'undefined') {
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          `Project Inquiry from ${name}`
        )}&body=${encodeURIComponent(bodyText)}`;
      }
    }
  };

  return (
    <section className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Start a Project</p>
          <h1 id="contact-heading">Tell us what you want to build</h1>
          <p className="section-note">
            Every enquiry is reviewed directly by an engineer: the person who will architect and build your system. We reply within one business day with next steps for scope, architecture and delivery.
          </p>
        </div>

        <div className="contact-layout">
          <div>
            {status === 'success' ? (
              <div className="card" role="status" aria-live="polite">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Received · Thank you</h2>
                <p>We will review your project and reply to {email} within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false}>
                <div className="form-group">
                  <label htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Work email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">What do you want to build? *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-budget">Budget range</label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    <option value="">Select an estimated budget range (optional)</option>
                    <option value="Under $3k">Under $3,000</option>
                    <option value="$3k–$10k">$3,000 – $10,000</option>
                    <option value="$10k–$30k">$10,000 – $30,000</option>
                    <option value="$30k+">$30,000+</option>
                  </select>
                </div>

                <p className="form-privacy">
                  We use what you send only to review your project and reply. We respect your privacy and never share information with third parties.
                </p>

                {status === 'error' && (
                  <p className="form-error" role="alert" style={{ marginBottom: '16px' }}>
                    There was an error sending your message. Please reach us directly at{' '}
                    <a href={`mailto:${site.email}`}>{site.email}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ minWidth: '160px' }}
                >
                  {status === 'sending' ? (
                    'Sending…'
                  ) : (
                    <>
                      Send enquiry <ArrowRight size={16} className="btn-arrow" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <aside className="sidebar-box" aria-labelledby="commitment-heading">
            <h3 id="commitment-heading">Our Commitment</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--body-text)', lineHeight: 1.6 }}>
              Every inquiry is reviewed directly by our engineering team: never an automated bot, and never a sales rep.
            </p>
            <ul className="sidebar-bullets">
              <li>Strict confidentiality on everything you share</li>
              <li>Detailed engineering response within one business day</li>
              <li>Guaranteed fixed quote before any code is written</li>
            </ul>
            <p style={{ marginTop: '24px' }}>
              <a href={`mailto:${site.email}`} style={{ fontWeight: 600 }}>{site.email}</a>
            </p>
            {hasWhatsApp && (
              <p style={{ marginTop: '12px' }}>
                <a
                  href={`https://wa.me/${whatsappNumber.trim()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  WhatsApp us ↗
                </a>
              </p>
            )}
            <p className="sidebar-location mono">STUDIO: LAHORE, PAKISTAN · WORKING WORLDWIDE</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
