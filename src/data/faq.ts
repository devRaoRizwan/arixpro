export type FaqItem = {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'Who owns the intellectual property and code produced during the project?',
    answer:
      'You do, 100%. Upon completion of project milestones and payment, all source code, repository commits, cloud configurations, schemas, and design assets are fully transferred to your company with zero licensing restrictions.',
  },
  {
    question: 'How do you structure project engagements and contracts?',
    answer:
      'We offer two primary delivery models: Fixed-Scope Delivery for well-defined projects with agreed milestone checkpoints, and Dedicated Engineering Sprints for evolving products requiring continuous, agile development and roadmap flexibility.',
  },
  {
    question: 'What does your day-to-day communication and progress reporting look like?',
    answer:
      'We work in transparent bi-weekly sprints with clear deliverable boards. You receive automated pull request previews, weekly sprint review demonstrations, and direct asynchronous access to the engineering team via Slack or Microsoft Teams.',
  },
  {
    question: 'How do you ensure software quality, security, and performance?',
    answer:
      'Every codebase adheres to automated CI/CD checks: unit testing, static type verification (TypeScript/Go/Python), dependency vulnerability scanning, and end-to-end integration tests. We benchmark against strict P99 latency and security compliance requirements.',
  },
  {
    question: 'Can you work with our existing codebase or legacy infrastructure?',
    answer:
      'Yes. We regularly perform technical architecture audits on legacy systems and execute non-disruptive modernization strategies (such as the Strangler pattern), refactoring outdated components while keeping live production services uninterrupted.',
  },
  {
    question: 'Do you offer ongoing post-launch maintenance and support?',
    answer:
      'Yes. After production launch, we provide ongoing maintenance SLAs covering 24/7 infrastructure monitoring, zero-downtime security patches, library updates, cloud optimization, and on-call engineering support.',
  },
  {
    question: 'How quickly can an engineering engagement kick off?',
    answer:
      'Following an initial technical discovery session to review requirements and define the system architecture, we typically establish the project workspace, staging pipelines, and begin Sprint 1 within 5 to 7 business days.',
  },
  {
    question: 'What tech stacks do you specialize in?',
    answer:
      'Our core production stack includes React, Next.js, and TypeScript on the frontend; Go, Node.js, and Python on the backend; PostgreSQL, Redis, and Kafka for data layers; and AWS, Google Cloud, Docker, and Terraform for cloud infrastructure.',
  },
]
