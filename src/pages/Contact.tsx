import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, ArrowUpRight, Shield, MessageSquare } from 'lucide-react'

const SERVICE_LABELS: Record<string, string> = {
  'local-business': 'Online Presence & Booking Engine (Barbers, Clinics, Restaurants)',
  'saas-product': 'Custom SaaS Platform / Web Application',
  'internal-ops': 'Internal Operations Dashboard / Admin Panel',
  ecommerce: 'Bespoke E-Commerce Store',
  portals: 'Customer & Client Portal',
  'admin-panels': 'Internal Admin & Operations Panel',
  'saas-platforms': 'Subscription & SaaS Platform',
  'api-integrations': 'Custom APIs & System Integrations',
  automations: 'Business Workflow Automations',
}

export function Contact() {
  const [searchParams] = useSearchParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectDetails, setProjectDetails] = useState('')
  const [budget, setBudget] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam && SERVICE_LABELS[serviceParam]) {
      setProjectDetails(`I want to scope a project for: ${SERVICE_LABELS[serviceParam]}.\n\nHere are some initial details: `)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !projectDetails.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      {/* Title Header */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-purple-100/50 to-transparent blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-4 shadow-xs">
              <MessageSquare className="size-3.5 text-[#0284C7]" />
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
                Project Scoping
              </span>
            </div>
            <h1 className="font-sans text-[36px] sm:text-[48px] font-bold text-slate-950 tracking-tight leading-tight">
              Start a Project
            </h1>
            <p className="mt-3 font-sans text-[17px] leading-relaxed text-slate-600">
              Tell us what you want to build. Our engineering leads will review your requirements and reply with architectural next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Commitment Sidebar */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Left Side */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="size-14 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="size-7" />
                    </div>
                    <h2 className="font-sans text-[24px] font-bold text-slate-950 tracking-tight">
                      Thank you, we have received your enquiry.
                    </h2>
                    <p className="font-sans text-[15px] leading-relaxed text-slate-600 max-w-md mx-auto">
                      Our engineering leads are reviewing your project specifications. We will reply to <span className="text-slate-950 font-mono font-medium">{email}</span> within one business day with an architectural proposal.
                    </p>
                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false)
                          setName('')
                          setEmail('')
                          setProjectDetails('')
                          setBudget('')
                        }}
                        className="btn-secondary rounded-full"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-3.5 text-[14px] text-red-700 bg-red-50 border border-red-200 rounded-xl">
                        {error}
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block font-sans text-[14px] font-medium text-slate-700"
                      >
                        Your Name <span className="text-[#6336C5]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Henderson"
                        className="w-full h-[48px] rounded-xl border border-slate-200 bg-white px-4 font-sans text-[15px] text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/5 transition-all shadow-xs"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="block font-sans text-[14px] font-medium text-slate-700"
                      >
                        Work Email <span className="text-[#6336C5]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full h-[48px] rounded-xl border border-slate-200 bg-white px-4 font-sans text-[15px] text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/5 transition-all shadow-xs"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-details"
                        className="block font-sans text-[14px] font-medium text-slate-700"
                      >
                        What do you want to build? <span className="text-[#6336C5]">*</span>
                      </label>
                      <textarea
                        id="contact-details"
                        required
                        rows={5}
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        placeholder="Describe your product requirements, user volume, concurrency targets, or integrations..."
                        className="w-full rounded-xl border border-slate-200 bg-white p-4 font-sans text-[15px] text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/5 transition-all resize-y shadow-xs"
                      />
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-budget"
                        className="block font-sans text-[14px] font-medium text-slate-700"
                      >
                        Estimated Budget Range (Optional)
                      </label>
                      <select
                        id="contact-budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full h-[48px] rounded-xl border border-slate-200 bg-white px-4 font-sans text-[15px] text-slate-900 outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/5 transition-all cursor-pointer shadow-xs"
                      >
                        <option value="">Select a range (optional)</option>
                        <option value="Under $5k">Under $5k</option>
                        <option value="$5k to $15k">$5k to $15k</option>
                        <option value="$15k to $30k">$15k to $30k</option>
                        <option value="$30k plus">$30k plus</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button type="submit" className="btn-primary text-[15px] h-[48px] px-8 w-full sm:w-auto rounded-full">
                        <span>Send Project Enquiry</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Commitments Sidebar Right */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-8 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="size-5 text-[#059669]" />
                  <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-slate-950">
                    Our Engineering Commitment
                  </span>
                </div>
                <p className="font-sans text-[15px] leading-relaxed text-slate-600">
                  Every inquiry is evaluated directly by our principal engineers. We conduct a preliminary architectural review, identify potential bottlenecks, and return a fixed-scope milestone proposal.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200/80 space-y-3 font-mono text-[12px] text-[#6336C5] font-medium">
                  <div>✓ Strict NDA &amp; confidentiality guaranteed</div>
                  <div>✓ Response within 24 hours</div>
                  <div>✓ Direct engineer consultation</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 font-mono text-[12px] text-slate-600 flex items-center justify-between shadow-xs">
                <span>Direct Inquiries Channel</span>
                <span className="text-[#059669] font-semibold">● Systems Accepting Scopes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
