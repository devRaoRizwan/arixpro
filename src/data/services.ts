export interface Service {
  slug: string;
  name: string;
  outcome: string;
  deliverables: string[];
  timeline: string;
  price: string;
}

export const services: Service[] = [
  {
    slug: 'saas-backend',
    name: 'SaaS Backend & MVP Build',
    outcome: 'The complete backend for your product — data model, auth, APIs, background jobs and payments, ready for real users.',
    deliverables: [
      'PostgreSQL schema and Django / FastAPI APIs',
      'Celery workers for slow work — nothing waits on a request',
      'Stripe payments and webhooks',
      'Deployed on AWS, with a staging link from week 1',
    ],
    timeline: '4–8 weeks',
    price: 'From $4,500',
  },
  {
    slug: 'api-integrations',
    name: 'APIs & Integrations',
    outcome: "Custom APIs, third-party integrations and data pipelines that don't fall over when the other side changes.",
    deliverables: [
      'REST API design and build',
      'Payment, CRM and platform integrations',
      'Crawlers and scheduled data collection',
      'Webhook pipelines with retries and logging',
    ],
    timeline: '2–5 weeks',
    price: 'From $2,500',
  },
  {
    slug: 'rescue-scale',
    name: 'Rescue & Scale',
    outcome: 'Your Django or FastAPI system is slow, fragile or stalled. We audit it, show you the evidence, then fix what actually matters.',
    deliverables: [
      'Full codebase and database audit, written report',
      'Query and N+1 fixes, caching, worker offloading',
      'Security scanning wired into CI/CD',
      'Audit fee credited against the fix',
    ],
    timeline: 'Audit in 1 week',
    price: '$750 audit',
  },
];
