export type FaqItem = {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'Do I need programming experience?',
    answer:
      'No. The beginner track assumes nothing. Not a prior language, not a computer science background, not even a terminal you have opened before. If you already know some programming, tell us during enrolment and we start you further along the roadmap instead of repeating what you know.',
  },
  {
    question: 'Are classes available in Urdu?',
    answer:
      'Yes. Concepts are explained in Urdu whenever that makes them clearer, while technical terms stay in English, because that is how documentation, error messages and job interviews are written. You can ask questions in whichever language you are comfortable with.',
  },
  {
    question: 'Do you offer 1-on-1 classes?',
    answer:
      'Yes. One-on-one mentorship is scheduled around you, moves at your pace, and can be shaped around a specific goal such as a university project, a job interview or a freelance client. It suits complete beginners and anyone who needs individual attention.',
  },
  {
    question: 'Are courses live or recorded?',
    answer:
      'Teaching is live, both in batches and in 1-on-1 sessions, so you can interrupt, ask and get unstuck in the moment. Sessions are supported by written notes and practice work you keep afterwards.',
  },
  {
    question: 'What programming language should beginners start with?',
    answer:
      'Python. The syntax stays out of your way while you learn how programming actually works, and it carries directly into backend development, automation and AI. If your goal is specifically websites, the Web Development track starts with HTML, CSS and JavaScript instead.',
  },
  {
    question: 'Do students build projects?',
    answer:
      'Every module ends in something that runs. By the end of a track you have several complete projects on GitHub, with the code, the commit history and the ability to explain every decision in them.',
  },
  {
    question: 'Can university students join?',
    answer:
      'Yes, and many do. Sessions are scheduled around semester timetables, and the practical side, covering Git, APIs, databases and deployment, tends to be exactly what coursework leaves out.',
  },
  {
    question: 'How do I enroll?',
    answer:
      'Send the enrolment form on this site or message us on WhatsApp. We will talk through your background and goal, recommend a starting point on the roadmap, and confirm whether 1-on-1 or a live batch fits you better before anything is paid.',
  },
]
