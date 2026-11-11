import React, { useState } from 'react'
import { CheckCircle2, ArrowUpRight, Shield, MessageSquare } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectDetails, setProjectDetails] = useState('')
  const [budget, setBudget] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

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
    <div className="w-full text-white selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Title Header */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#794BE8]/15 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-4">
              <MessageSquare className="size-3.5 text-[#38BDF8]" />
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#A78BFA]">
                Project Scoping
              </span>
            </div>
            <h1 className="font-sans text-[36px] sm:text-[48px] font-bold text-white tracking-tight leading-tight">
              Start a Project
            </h1>
            <p className="mt-3 font-sans text-[17px] leading-relaxed text-[#C9C2E0]/85">
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
              <div className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="size-14 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="size-7" />
                    </div>
                    <h2 className="font-sans text-[24px] font-bold text-white tracking-tight">
                      Thank you, we have received your enquiry.
                    </h2>
                    <p className="font-sans text-[15px] leading-relaxed text-[#C9C2E0]/80 max-w-md mx-auto">
                      Our engineering leads are reviewing your project specifications. We will reply to <span className="text-white font-mono">{email}</span> within one business day with an architectural proposal.
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
                        className="btn-secondary"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-3 text-[14px] text-red-400 bg-red-950/40 border border-red-500/30 rounded-xl">
                        {error}
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block font-sans text-[14px] font-medium text-[#C9C2E0]"
                      >
                        Your Name <span className="text-[#A78BFA]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Henderson"
                        className="w-full h-[48px] rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 font-sans text-[15px] text-white placeholder-[#8378A6] outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="block font-sans text-[14px] font-medium text-[#C9C2E0]"
                      >
                        Work Email <span className="text-[#A78BFA]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full h-[48px] rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 font-sans text-[15px] text-white placeholder-[#8378A6] outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-details"
                        className="block font-sans text-[14px] font-medium text-[#C9C2E0]"
                      >
                        What do you want to build? <span className="text-[#A78BFA]">*</span>
                      </label>
                      <textarea
                        id="contact-details"
                        required
                        rows={5}
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        placeholder="Describe your product requirements, user volume, concurrency targets, or integrations..."
                        className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] p-4 font-sans text-[15px] text-white placeholder-[#8378A6] outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all resize-y"
                      />
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-budget"
                        className="block font-sans text-[14px] font-medium text-[#C9C2E0]"
                      >
                        Estimated Budget Range (Optional)
                      </label>
                      <select
                        id="contact-budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full h-[48px] rounded-xl border border-white/[0.1] bg-[#0E061D] px-4 font-sans text-[15px] text-white outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all cursor-pointer"
                      >
                        <option value="">Select a range (optional)</option>
                        <option value="Under $5k">Under $5k</option>
                        <option value="$5k to $15k">$5k to $15k</option>
                        <option value="$15k to $30k">$15k to $30k</option>
                        <option value="$30k plus">$30k plus</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <div className="pt-3">
                      <button type="submit" className="btn-primary text-[16px] h-[50px] px-8 w-full sm:w-auto">
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
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="size-5 text-[#10B981]" />
                  <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-white">
                    Our Engineering Commitment
                  </span>
                </div>
                <p className="font-sans text-[15px] leading-relaxed text-[#C9C2E0]/85">
                  Every inquiry is evaluated directly by our principal engineers. We conduct a preliminary architectural review, identify potential bottlenecks, and return a fixed-scope milestone proposal.
                </p>

                <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-3 font-mono text-[12px] text-[#A78BFA]">
                  <div>✓ Strict NDA &amp; confidentiality guaranteed</div>
                  <div>✓ Response within 24 hours</div>
                  <div>✓ Direct engineer consultation</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#07030E] p-6 font-mono text-[12px] text-[#8378A6] flex items-center justify-between">
                <span>Direct Inquiries Channel</span>
                <span className="text-[#10B981]">● Systems Accepting Scopes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
