import { useId, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CircleCheck, MessageCircle, TriangleAlert } from 'lucide-react'
import { courses } from '@/data/courses'
import type { BatchTierId } from '@/data/learningOptions'
import {
  batchOptions,
  experienceOptions,
  isBatchTierId,
  isEnrollmentDeliveryConfigured,
  isLearningMode,
  modeOptions,
  submitEnrollment,
  type EnrollmentPayload,
  type ExperienceLevel,
  type LearningMode,
} from '@/lib/enrollment'
import { easeOutExpo } from '@/lib/motion'
import { whatsappHref } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Button, ButtonAnchor } from '@/components/ui/Button'
import { Select, type SelectOption } from '@/components/ui/Select'

type FormState = {
  name: string
  email: string
  phone: string
  course: string
  mode: LearningMode
  batch: BatchTierId
  experience: ExperienceLevel
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const courseOptions: SelectOption[] = [
  ...courses.map((course) => ({
    value: course.slug,
    label: course.title,
    hint: `${course.level}, ${course.duration}`,
  })),
  { value: 'undecided', label: 'Not sure yet', hint: 'We will help you choose' },
]

const fieldClass =
  'w-full rounded-xl border border-surface-700 bg-surface-900/70 px-4 py-3 text-[0.95rem] text-content-100 ' +
  'placeholder:text-content-500 transition-colors duration-200 hover:border-surface-600 ' +
  'focus:border-accent-400/60 focus:outline-none'

const labelClass = 'block text-sm font-medium text-content-200'

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (values.phone.replace(/\D/g, '').length < 10)
    errors.phone = 'Please enter a reachable phone or WhatsApp number.'
  if (!values.course) errors.course = 'Please choose a course.'
  return errors
}

export function EnrollmentForm() {
  const [searchParams] = useSearchParams()
  const presetMode = searchParams.get('mode')
  const presetCourse = searchParams.get('course')
  const presetBatch = searchParams.get('batch')
  const ids = useId()

  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    course: courses.some((c) => c.slug === presetCourse) ? (presetCourse as string) : '',
    mode: isLearningMode(presetMode) ? presetMode : 'one-on-one',
    batch: isBatchTierId(presetBatch) ? presetBatch : batchOptions[0].value,
    experience: 'beginner',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [sendError, setSendError] = useState('')

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      /* Bring the first problem into view; focusing alone leaves an off-screen
         field silently rejecting the submit, which reads as a dead button. */
      const field = document.getElementById(`${ids}-${Object.keys(nextErrors)[0]}`)
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      field?.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' })
      field?.focus({ preventScroll: true })
      return
    }

    setStatus('submitting')
    const payload: EnrollmentPayload = { ...values }
    const result = await submitEnrollment(payload)

    if (result.ok) {
      setStatus('success')
      return
    }
    setSendError(result.error)
    setStatus('error')
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        role="status"
        className="rounded-2xl border border-accent-400/25 bg-surface-900/60 p-8 text-center sm:p-12"
      >
        <span className="mx-auto grid size-12 place-items-center rounded-full border border-accent-400/30 bg-accent-400/10 text-accent-400">
          <CircleCheck className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-content-400">
          {isEnrollmentDeliveryConfigured
            ? `Thanks, ${values.name.split(' ')[0]}. Your details are with the ArixPro team and we will reply soon. The fastest answer is on WhatsApp.`
            : `Thanks, ${values.name.split(' ')[0]}. This form is not connected to a destination yet, so nothing was sent. Reach us on WhatsApp in the meantime.`}
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonAnchor href={whatsappHref} leadingIcon={MessageCircle} size="lg">
            Continue on WhatsApp
          </ButtonAnchor>
          <Button variant="secondary" size="lg" onClick={() => setStatus('idle')}>
            Send another request
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="gloss relative rounded-2xl border border-surface-800 bg-surface-900 p-6 shadow-card sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${ids}-name`}
          label="Name"
          error={errors.name}
          className="sm:col-span-2 lg:col-span-1"
        >
          <input
            id={`${ids}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${ids}-name-error` : undefined}
            className={cn(fieldClass, errors.name && 'border-danger/60')}
          />
        </Field>

        <Field id={`${ids}-email`} label="Email" error={errors.email}>
          <input
            id={`${ids}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${ids}-email-error` : undefined}
            className={cn(fieldClass, errors.email && 'border-danger/60')}
          />
        </Field>

        <Field id={`${ids}-phone`} label="Phone / WhatsApp" error={errors.phone}>
          <input
            id={`${ids}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+92 3xx xxxxxxx"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${ids}-phone-error` : undefined}
            className={cn(fieldClass, errors.phone && 'border-danger/60')}
          />
        </Field>

        <Field id={`${ids}-course`} label="Course" error={errors.course}>
          <Select
            id={`${ids}-course`}
            labelId={`${ids}-course-label`}
            name="course"
            value={values.course}
            onChange={(next) => update('course', next)}
            options={courseOptions}
            placeholder="Select a course"
            invalid={Boolean(errors.course)}
            describedBy={errors.course ? `${ids}-course-error` : undefined}
          />
        </Field>
      </div>

      <fieldset className="mt-8">
        <legend className={labelClass}>Learning preference</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {modeOptions.map((option) => (
            <Choice
              key={option.value}
              name="mode"
              value={option.value}
              label={option.label}
              hint={option.hint}
              checked={values.mode === option.value}
              onChange={() => update('mode', option.value)}
            />
          ))}
        </div>
      </fieldset>

      {/* Batch size is a question only a batch student has an answer to, so it
          stays hidden until they pick that mode. */}
      <AnimatePresence initial={false}>
        {values.mode === 'live-batch' ? (
          <motion.div
            key="batch"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: easeOutExpo }}
            className="overflow-hidden"
          >
            <fieldset className="mt-5 rounded-xl border border-surface-800 bg-surface-950/40 p-4 sm:p-5">
              <legend className="px-1 text-sm font-medium text-content-200">Batch size</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {batchOptions.map((option) => (
                  <Choice
                    key={option.value}
                    name="batch"
                    value={option.value}
                    label={option.label}
                    hint={option.hint}
                    checked={values.batch === option.value}
                    onChange={() => update('batch', option.value)}
                  />
                ))}
              </div>
              <p className="mt-3 text-2xs leading-relaxed text-content-500">
                Not sure? Pick either one. We confirm the batch that actually fits you before
                anything starts.
              </p>
            </fieldset>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <fieldset className="mt-8">
        <legend className={labelClass}>Experience</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {experienceOptions.map((option) => (
            <Choice
              key={option.value}
              name="experience"
              value={option.value}
              label={option.label}
              hint={option.hint}
              checked={values.experience === option.value}
              onChange={() => update('experience', option.value)}
            />
          ))}
        </div>
      </fieldset>

      <div className="mt-8">
        <Field id={`${ids}-message`} label="Message" optional>
          <textarea
            id={`${ids}-message`}
            name="message"
            rows={4}
            placeholder="Tell us your goal. A job, a university project, freelancing, or just starting out."
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            className={cn(fieldClass, 'resize-none')}
          />
        </Field>
      </div>

      {status === 'error' ? (
        <p
          role="alert"
          className="mt-8 flex items-start gap-3 rounded-xl border border-danger/40 bg-danger/8 px-4 py-3 text-sm text-content-200"
        >
          <TriangleAlert className="mt-0.5 size-4 shrink-0 text-danger" aria-hidden="true" />
          <span>
            {sendError} You can also message us on{' '}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent-400 underline underline-offset-4"
            >
              WhatsApp
            </a>
            .
          </span>
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          trailingIcon={status === 'submitting' ? undefined : ArrowRight}
          className="w-full sm:w-auto"
        >
          {status === 'submitting' ? 'Sending…' : 'Start Learning'}
        </Button>
        <p className="text-2xs leading-relaxed text-content-500">
          No payment is taken here. We reply first, then confirm a start date.
        </p>
      </div>
    </form>
  )
}

type FieldProps = {
  id: string
  label: string
  error?: string
  optional?: boolean
  className?: string
  children: ReactNode
}

function Field({ id, label, error, optional, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label id={`${id}-label`} htmlFor={id} className={labelClass}>
        {label}
        {optional ? <span className="ml-2 text-2xs text-content-500">optional</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      <AnimatePresence>
        {error ? (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 flex items-center gap-1.5 text-xs font-medium text-danger"
          >
            <TriangleAlert className="size-3.5 shrink-0" aria-hidden="true" />
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

type ChoiceProps = {
  name: string
  value: string
  label: string
  hint: string
  checked: boolean
  onChange: () => void
}

function Choice({ name, value, label, hint, checked, onChange }: ChoiceProps) {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 transition-colors duration-200',
        checked
          ? 'border-accent-400/45 bg-accent-400/[0.07]'
          : 'border-surface-700 bg-surface-900/50 hover:border-surface-600',
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border transition-colors',
          checked ? 'border-accent-400' : 'border-surface-500',
        )}
      >
        {checked ? <span className="size-2 rounded-full bg-accent-400" /> : null}
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            'block text-sm font-medium',
            checked ? 'text-content-50' : 'text-content-200',
          )}
        >
          {label}
        </span>
        <span className="mt-0.5 block text-2xs text-content-500">{hint}</span>
      </span>
    </label>
  )
}
