export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How much does a backend cost?',
    answer: 'Fixed quote after a 3-day scope — MVP backends start at $4,500, API work at $2,500, and a Rescue & Scale audit is a flat $750. The agreed price is final: if a feature takes longer than we estimated, that is our problem, not your invoice.',
  },
  {
    question: 'Who owns the code?',
    answer: 'You do — 100%, from day one. Repository, database, cloud accounts and IP transfer to you at launch. No lock-in, no monthly ransom.',
  },
  {
    question: "You're in Lahore — what about timezones?",
    answer: 'We work async-first with written updates and staging links you can test any time, and we overlap calls with EU and US mornings. Most clients prefer it to daily standups.',
  },
  {
    question: 'What happens after launch?',
    answer: "30 days of bug fixes and monitoring are included in every build. After that, optional monthly support — or take the code in-house. It's documented, and it's yours.",
  },
  {
    question: 'Do you build mobile apps or WordPress sites?',
    answer: "No — deliberately. ArixPro is backend-first: Python backends, APIs and the web products built on them. If you need a mobile app or a WordPress site, we'll say so honestly and point you elsewhere rather than take the money.",
  },
];
