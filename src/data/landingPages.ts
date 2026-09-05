import type { FaqItem } from './faq'

/**
 * Search landing pages. Each one targets a query buyers actually type and that
 * no existing page answers head-on.
 *
 * These are deliberately NOT thin variants of one another: the body copy,
 * examples and questions differ per page because near-duplicate pages built
 * around a keyword are treated as doorway pages and demoted. Everything stated
 * here is true of how ArixPro already teaches -- no invented prices, timings or
 * addresses.
 */
export type LandingSection = {
  title: string
  body: string
}

export type LandingPage = {
  slug: string
  seoTitle: string
  seoDescription: string
  eyebrow: string
  /** Carries the target keyword; this becomes the page's single H1. */
  heading: string
  intro: string
  sections: LandingSection[]
  faqs: FaqItem[]
}

export const landingPages: LandingPage[] = [
  {
    slug: 'coding-classes-in-lahore',
    seoTitle: 'Coding Classes in Lahore — Python, Web Dev & AI',
    seoDescription:
      'Coding classes in Lahore taught live by working developers. Python, web development, backend and AI, in small batches of 5 or 10 students or 1-on-1, with Urdu-friendly explanations and real projects.',
    eyebrow: 'Lahore',
    heading: 'Coding Classes in Lahore',
    intro:
      'ArixPro is based in Lahore and teaches students here and across Pakistan. Classes are live and small, so you are writing code and asking questions in the session rather than watching a recording and hoping it clicks later.',
    sections: [
      {
        title: 'Taught live, in small groups',
        body: 'Every class is taught live by someone who writes code for a living. You can pick a Focus Batch of five students, where the instructor reviews your work individually each week, a Standard Batch of ten, or private 1-on-1 mentorship scheduled around you. Nobody sits at the back of a hall of forty.',
      },
      {
        title: 'Built for students juggling university',
        body: 'Most people who join are university students in Lahore or working professionals fitting sessions around a job. Sessions are scheduled around that reality, and 1-on-1 mentorship exists precisely for people whose timetable will not bend. If a week gets busy, you keep the notes and the recording.',
      },
      {
        title: 'Explained in the language you think in',
        body: 'Concepts are explained in Urdu whenever that makes them land faster, while technical terms stay in English, because that is how documentation, error messages and interviews are written. You ask questions in whichever language you are comfortable with.',
      },
      {
        title: 'You leave with work you can show',
        body: 'Each track ends with projects you can put in front of an employer or a client, not a certificate and an empty GitHub profile. That is the difference between saying you learned Python and showing something you built with it.',
      },
    ],
    faqs: [
      {
        question: 'Are the classes in Lahore in person or online?',
        answer:
          'Both. ArixPro is based in Lahore and teaches online across Pakistan, so you can join from anywhere. Every class is live either way, which means you can interrupt and ask questions in the moment rather than emailing them afterwards.',
      },
      {
        question: 'Do I need a computer science background to join?',
        answer:
          'No. The beginner track assumes nothing at all, not a prior language and not a terminal you have opened before. If you already know some programming, say so during enrolment and we start you further along the roadmap instead of repeating what you know.',
      },
      {
        question: 'How many students are in a batch?',
        answer:
          'Five in a Focus Batch or ten in a Standard Batch. The smaller batch means the instructor reviews your work individually each week and there is room to slow down when the group needs it; the larger one is the most affordable way to learn live with us.',
      },
    ],
  },
  {
    slug: 'online-coding-courses-pakistan',
    seoTitle: 'Online Coding Courses in Pakistan — Live Classes',
    seoDescription:
      'Live online coding courses for students anywhere in Pakistan. Python, web development, backend and AI taught in real time by working developers, with small batches, recordings and real projects.',
    eyebrow: 'Online',
    heading: 'Online Coding Courses in Pakistan',
    intro:
      'You do not need to be in Lahore to learn with ArixPro. Classes run live online, so students in Karachi, Islamabad, Faisalabad, Peshawar or a town with one good internet connection get the same session as everyone else.',
    sections: [
      {
        title: 'Live, not pre-recorded',
        body: 'This is the part that matters most. A recorded course cannot answer the question you have at 11pm when your code will not run. A live class can, and does, in the session. Recordings and written notes exist too, but they are the backup, not the product.',
      },
      {
        title: 'What you actually need',
        body: 'A laptop or desktop, an internet connection good enough for a video call, and a few hours a week you can genuinely protect. Everything else, including the tools and the setup, is walked through in the first sessions. You do not need a powerful machine to learn to program.',
      },
      {
        title: 'Small enough that you are not anonymous',
        body: 'Online classes fail when they turn into a webinar nobody speaks in. Batches are capped at five or ten students so everyone writes code on the call, and 1-on-1 mentorship is there if you would rather have the instructor to yourself.',
      },
      {
        title: 'The same four tracks, wherever you are',
        body: 'Python, web development, backend engineering and AI automation each run the same online as they do in Lahore, ending in projects you can show. Your location changes nothing about the curriculum or who teaches it.',
      },
    ],
    faqs: [
      {
        question: 'Can I join from outside Lahore?',
        answer:
          'Yes. Classes run live online and students join from across Pakistan. Nothing about the curriculum, the instructor or the project work changes based on where you are sitting.',
      },
      {
        question: 'Are the online classes live or recorded?',
        answer:
          'Live. You can interrupt, ask and get unstuck in the moment, which is the whole point. Sessions are supported by recordings and written notes you keep afterwards, so missing one week does not put you behind permanently.',
      },
      {
        question: 'What internet speed do I need?',
        answer:
          'Anything that reliably handles a video call is enough. If your connection drops during a session, the recording and notes cover what you missed, and you can ask about it in the next class.',
      },
    ],
  },
  {
    slug: 'learn-coding-in-urdu',
    seoTitle: 'Learn Coding in Urdu — Programming Classes',
    seoDescription:
      'Learn programming with concepts explained in Urdu and technical terms kept in English. Live Python, web development and AI classes for students in Pakistan who think faster in their own language.',
    eyebrow: 'Urdu-friendly',
    heading: 'Learn Coding in Urdu',
    intro:
      'Plenty of capable students in Pakistan stall on programming not because the logic is hard, but because it arrives in a second language at the same time. ArixPro removes that second obstacle.',
    sections: [
      {
        title: 'The concept in Urdu, the vocabulary in English',
        body: 'When an idea is not landing, it gets explained again in the language you think in. But function, array, endpoint and commit stay in English, on purpose. Documentation, error messages, Stack Overflow answers and job interviews are all written that way, so you learn those words as they are rather than learning a translation you will have to unlearn.',
      },
      {
        title: 'Ask anything, in either language',
        body: 'No question is too basic, and the ones people are embarrassed to ask are usually the important ones. You ask in Urdu, English or a mix of both, which is how most people in Pakistan actually talk about technical work anyway.',
      },
      {
        title: 'Understanding over memorisation',
        body: 'The test is whether you can rebuild something from scratch, not whether you can recite it from a slide. Explaining a concept in your own language is what makes that possible; memorising English sentences about it is not.',
      },
      {
        title: 'Course material stays in English',
        body: 'Code, written notes and this website stay in English so that what you practise on matches what you will meet in real work. The explanation meets you where you are; the material prepares you for where you are going.',
      },
    ],
    faqs: [
      {
        question: 'Are classes taught entirely in Urdu?',
        answer:
          'Not entirely, and deliberately so. Concepts are explained in Urdu whenever that makes them clearer, while technical terms stay in English because that is how documentation, error messages and interviews are written. In practice sessions move between both, the way most technical conversations in Pakistan already do.',
      },
      {
        question: 'Will my English hold me back as a developer?',
        answer:
          'Not if you learn the technical vocabulary as you go, which is exactly how these classes are structured. You do not need fluent conversational English to read documentation or an error message; you need the specific words, and those are taught alongside the concepts.',
      },
      {
        question: 'Is the course material in Urdu too?',
        answer:
          'No. Code, notes and assignments stay in English so that what you practise on matches real work. The teaching adapts to you; the material keeps you ready for the industry you are joining.',
      },
    ],
  },
]

export function getLandingPageBySlug(slug: string | undefined) {
  return landingPages.find((page) => page.slug === slug)
}
