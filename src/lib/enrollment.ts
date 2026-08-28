import { courses } from '@/data/courses'

export type LearningMode = 'one-on-one' | 'live-batch'
export type ExperienceLevel = 'beginner' | 'some-experience' | 'intermediate'

export type EnrollmentPayload = {
  name: string
  email: string
  phone: string
  /** Course slug from `src/data/courses.ts`, or `undecided`. */
  course: string
  mode: LearningMode
  experience: ExperienceLevel
  message: string
}

export type EnrollmentResult = { ok: true } | { ok: false; error: string }

export const experienceOptions: { value: ExperienceLevel; label: string; hint: string }[] = [
  { value: 'beginner', label: 'Beginner', hint: 'Never written code' },
  { value: 'some-experience', label: 'Some experience', hint: 'Tried a course or two' },
  { value: 'intermediate', label: 'Intermediate', hint: 'Can build small things' },
]

export const modeOptions: { value: LearningMode; label: string; hint: string }[] = [
  { value: 'one-on-one', label: '1-on-1 Mentorship', hint: 'Private sessions' },
  { value: 'live-batch', label: 'Live Batch', hint: 'Small group class' },
]

export function isLearningMode(value: string | null): value is LearningMode {
  return value === 'one-on-one' || value === 'live-batch'
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Web3Forms access key. Public by design: it identifies the destination inbox
 * and is meant to ship in client code. Restrict it to the live domain from the
 * Web3Forms dashboard once the site is deployed.
 */
const WEB3FORMS_ACCESS_KEY: string = '8e4c1704-6577-48fe-85b5-4a5ce6324f35'

export const isEnrollmentDeliveryConfigured = WEB3FORMS_ACCESS_KEY !== ''

/** The email should read like a person wrote it, not like slugs. */
function toReadableAnswers(payload: EnrollmentPayload) {
  const course =
    courses.find((item) => item.slug === payload.course)?.title ?? 'Not sure yet, help me choose'

  return {
    Name: payload.name.trim(),
    Email: payload.email.trim(),
    'Phone / WhatsApp': payload.phone.trim(),
    Course: course,
    'Learning preference':
      modeOptions.find((item) => item.value === payload.mode)?.label ?? payload.mode,
    Experience:
      experienceOptions.find((item) => item.value === payload.experience)?.label ??
      payload.experience,
    Message: payload.message.trim() || 'No message',
  }
}

export async function submitEnrollment(payload: EnrollmentPayload): Promise<EnrollmentResult> {
  if (!isEnrollmentDeliveryConfigured) {
    if (import.meta.env.DEV) {
      console.info('[enrollment] no access key set, payload:', payload)
    }
    await new Promise((resolve) => setTimeout(resolve, 600))
    return { ok: true }
  }

  const answers = toReadableAnswers(payload)

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New enrolment request from ${answers.Name}`,
        from_name: 'ArixPro website',
        /* Hitting reply in the inbox answers the student directly. */
        replyto: answers.Email,
        ...answers,
      }),
    })

    const result: unknown = await response.json().catch(() => null)
    const success =
      typeof result === 'object' && result !== null && (result as { success?: boolean }).success

    if (response.ok && success) return { ok: true }

    const message =
      typeof result === 'object' && result !== null
        ? (result as { message?: string }).message
        : undefined
    return { ok: false, error: message ?? 'We could not send that. Please try again.' }
  } catch {
    return { ok: false, error: 'We could not send that. Check your connection and try again.' }
  }
}
