import React, { useState } from 'react'
import { TextInput, TextArea } from './Forms'
import { Button } from './Buttons'
import { ArrowUpRight, MessageSquare } from 'lucide-react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState('Web Applications')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Please provide your name.'
    if (!email.trim() || !email.includes('@'))
      errs.email = 'Please provide a valid email address.'
    if (!message.trim()) errs.message = 'Please provide details about your project.'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setLoading(true)

    // Simulate submission / prepare direct WhatsApp handoff
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello ArixPro! My name is ${name}. I am looking to build a ${projectType}.\n\nProject details: ${message}\nContact email: ${email}`
  )

  return (
    <div className="w-full">
      {submitted ? (
        <div className="rounded-[14px] border border-[#C8EED3] bg-[#EAF8EE] p-8 text-center">
          <span className="inline-block size-12 rounded-full bg-[#1E9E4A] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
            ✓
          </span>
          <h3 className="font-sans text-[22px] font-semibold text-[#241044]">
            Inquiry Received
          </h3>
          <p className="mt-2 font-sans text-[15px] text-[#4A4458] max-w-md mx-auto">
            Thank you, {name}. Our senior engineering team will review your specifications and reply via {email}.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/923120418701?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary w-full sm:w-auto"
            >
              <span>Send directly on WhatsApp</span>
              <ArrowUpRight className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setName('')
                setEmail('')
                setMessage('')
              }}
              className="btn-secondary w-full sm:w-auto"
            >
              Submit another project
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <TextInput
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Henderson"
              error={errors.name}
              required
            />

            <TextInput
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              error={errors.email}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="project-type"
              className="font-sans text-[14px] font-medium text-[#241044]"
            >
              Project Type
            </label>
            <select
              id="project-type"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="h-[56px] w-full rounded-[8px] border border-[#E4DEF2] bg-white px-4 font-sans text-[16px] text-[#241044] outline-none focus:border-[#241044] focus:ring-1 focus:ring-[#241044] cursor-pointer"
            >
              <option value="Web Applications">Web Applications (React / TypeScript)</option>
              <option value="Backend Engineering">Backend Engineering (FastAPI / Django)</option>
              <option value="APIs & Microservices">APIs &amp; Microservices</option>
              <option value="SaaS Products">Full SaaS Platform</option>
              <option value="Consulting & Architecture">Architecture &amp; Code Review</option>
            </select>
          </div>

          <TextArea
            label="Project Specifications & Requirements"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you are building, your timeline, and any key integrations..."
            error={errors.message}
            rows={5}
            required
          />

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button type="submit" loading={loading} className="w-full sm:w-auto">
              Submit Project Inquiry
            </Button>

            <a
              href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-[#315BDA] hover:underline"
            >
              <MessageSquare className="size-4" />
              <span>Or WhatsApp directly: +92 312 0418701</span>
            </a>
          </div>
        </form>
      )}
    </div>
  )
}

export default ContactForm
