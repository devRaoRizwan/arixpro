import { useState, useRef, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import { site } from '../data/site';
import { useSeo } from '../hooks/useSeo';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  budget?: string;
}

export default function Contact() {
  useSeo({
    title: 'Start a project | ArixPro',
    description:
      'Direct engineer review. Scope, architecture, and a guaranteed fixed quote within one business day.',
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
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const budgetInputRef = useRef<HTMLInputElement>(null);
  const okButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (status === 'success') {
      okButtonRef.current?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setStatus('idle');
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [status]);

  const handleCloseDialog = () => {
    setStatus('idle');
  };

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const hasWhatsApp = typeof whatsappNumber === 'string' && whatsappNumber.trim().length > 0;

  const validateName = (val: string): string | undefined => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Name is required.';
    }
    if (/\d/.test(val)) {
      return 'Name cannot contain numbers.';
    }
    if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes.';
    }
    if (trimmed.length < 2) {
      return 'Name must be at least 2 characters.';
    }
    return undefined;
  };

  const validateEmail = (val: string): string | undefined => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Email is required.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
      return 'Please enter a valid email address.';
    }
    return undefined;
  };

  const validateMessage = (val: string): string | undefined => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Please describe what you want to build.';
    }
    if (trimmed.length < 10) {
      return 'Please provide a bit more detail (at least 10 characters).';
    }
    return undefined;
  };

  const validateBudget = (val: string): string | undefined => {
    const trimmed = val.trim();
    if (!trimmed) {
      return undefined;
    }
    if (!/^\d+$/.test(trimmed)) {
      return 'Budget must contain digits only (e.g. 5000).';
    }
    return undefined;
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
    if (/\d/.test(val)) {
      setErrors((prev) => ({ ...prev, name: 'Name cannot contain numbers.' }));
    } else if (touched.name) {
      setErrors((prev) => ({ ...prev, name: validateName(val) }));
    } else if (errors.name) {
      setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handleNameBlur = () => {
    setTouched((prev) => ({ ...prev, name: true }));
    setErrors((prev) => ({ ...prev, name: validateName(name) }));
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (touched.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(val) }));
    }
  };

  const handleEmailBlur = () => {
    setTouched((prev) => ({ ...prev, email: true }));
    setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setMessage(val);
    if (touched.message) {
      setErrors((prev) => ({ ...prev, message: validateMessage(val) }));
    }
  };

  const handleMessageBlur = () => {
    setTouched((prev) => ({ ...prev, message: true }));
    setErrors((prev) => ({ ...prev, message: validateMessage(message) }));
  };

  const handleBudgetChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Only accept numeric digits
    const digitsOnly = e.target.value.replace(/[^0-9]/g, '');
    setBudget(digitsOnly);
    if (touched.budget) {
      setErrors((prev) => ({ ...prev, budget: validateBudget(digitsOnly) }));
    }
  };

  const handleBudgetBlur = () => {
    setTouched((prev) => ({ ...prev, budget: true }));
    setErrors((prev) => ({ ...prev, budget: validateBudget(budget) }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const messageErr = validateMessage(message);
    const budgetErr = validateBudget(budget);

    setTouched({ name: true, email: true, message: true, budget: true });
    setErrors({
      name: nameErr,
      email: emailErr,
      message: messageErr,
      budget: budgetErr,
    });

    if (nameErr) {
      nameInputRef.current?.focus();
      return;
    }
    if (emailErr) {
      emailInputRef.current?.focus();
      return;
    }
    if (messageErr) {
      messageInputRef.current?.focus();
      return;
    }
    if (budgetErr) {
      budgetInputRef.current?.focus();
      return;
    }

    const budgetFormatted = budget ? `$${Number(budget).toLocaleString()} USD` : 'Not specified';

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
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            budget: budgetFormatted,
          }),
        });

        if (response.ok) {
          setSubmittedEmail(email.trim());
          setStatus('success');
          setName('');
          setEmail('');
          setMessage('');
          setBudget('');
          setErrors({});
          setTouched({});
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      // If VITE_FORMSPREE_ID is not configured, do not fake a submission.
      // Direct the user to their mail client instead.
      const bodyText = `Name: ${name.trim()}\nEmail: ${email.trim()}\nBudget: ${budgetFormatted}\n\nProject details:\n${message.trim()}`;
      if (typeof window !== 'undefined') {
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          `Project Inquiry from ${name.trim()}`
        )}&body=${encodeURIComponent(bodyText)}`;
      }
    }
  };

  return (
    <section className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Start a Project</p>
          <h1 id="contact-heading">Tell us what you want to build</h1>
          <p className="section-note">
            Direct engineer review. Scope, architecture, and a fixed quote within one business day.
          </p>
        </div>

        <div className="contact-layout">
          <div>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Name *</label>
                  <input
                    ref={nameInputRef}
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="field-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    ref={emailInputRef}
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="field-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">What do you want to build? *</label>
                  <textarea
                    ref={messageInputRef}
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={handleMessageChange}
                    onBlur={handleMessageBlur}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="field-error" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-budget">Estimated budget (USD, optional)</label>
                  <input
                    ref={budgetInputRef}
                    id="contact-budget"
                    name="budget"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="e.g. 5000"
                    value={budget}
                    onChange={handleBudgetChange}
                    onBlur={handleBudgetBlur}
                    aria-invalid={!!errors.budget}
                    aria-describedby={errors.budget ? 'contact-budget-error' : undefined}
                  />
                  {errors.budget && (
                    <p id="contact-budget-error" className="field-error" role="alert">
                      {errors.budget}
                    </p>
                  )}
                </div>

                <p className="form-privacy">
                  Strict privacy. Everything you share is kept confidential.
                </p>

                {status === 'error' && (
                  <p className="form-error" role="alert" style={{ marginBottom: '16px' }}>
                    There was an error sending your message. Please reach us directly at{' '}
                    <a href={`mailto:${site.email}`}>{site.email}</a>.
                  </p>
                )}

                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'sending'}
                    style={{ minWidth: '170px' }}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="spin-loader" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        Send enquiry <ArrowRight size={16} className="btn-arrow" />
                      </>
                    )}
                  </button>

                  {status === 'sending' && (
                    <p className="form-sending" role="status" aria-live="polite">
                      <Loader2 size={15} className="spin-loader" />
                      <span>Submitting your enquiry, please wait…</span>
                    </p>
                  )}
                </div>
              </form>
          </div>

          <aside className="sidebar-box" aria-labelledby="commitment-heading">
            <h2 id="commitment-heading" style={{ fontSize: '1.0625rem', fontWeight: 600, marginBottom: '16px' }}>
              What to expect
            </h2>
            <ul className="sidebar-bullets">
              <li>
                <strong>Talk directly with an engineer</strong>
                <span>You'll speak with someone who actually builds software — no sales reps or pushy pitches.</span>
              </li>
              <li>
                <strong>A clear reply within 24 hours</strong>
                <span>We'll review your notes and share honest thoughts on feasibility, timeline, and architecture.</span>
              </li>
              <li>
                <strong>Fixed, upfront pricing</strong>
                <span>Once we agree on what to build, the price is locked before work starts. No surprise invoices.</span>
              </li>
              <li>
                <strong>Your project stays private</strong>
                <span>Everything you share is strictly confidential. We're happy to sign an NDA before diving into details.</span>
              </li>
            </ul>
            <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--line)' }}>
              <p className="mono" style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '6px' }}>
                Direct email
              </p>
              <a href={`mailto:${site.email}`} style={{ fontWeight: 600, fontSize: '0.9375rem' }}>
                {site.email}
              </a>
            </div>
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
          </aside>
        </div>
      </div>

      {status === 'success' && (
        <div
          className="modal-backdrop"
          onClick={handleCloseDialog}
          role="presentation"
        >
          <div
            className="modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-desc"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-icon-badge" aria-hidden="true">
              <CheckCircle2 size={30} strokeWidth={2.2} />
            </div>
            <h2 id="dialog-title" className="modal-title">
              Received · Thank you
            </h2>
            <p id="dialog-desc" className="modal-body">
              We will review your project and reply to <strong>{submittedEmail}</strong> within one business day.
            </p>
            <div className="modal-actions">
              <button
                ref={okButtonRef}
                type="button"
                className="btn btn-primary modal-btn"
                onClick={handleCloseDialog}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
