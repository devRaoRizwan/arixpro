import { Braces, Globe, Server, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type CurriculumModule = {
  title: string
  items: string[]
}

export type Course = {
  slug: string
  title: string
  /** One line for cards and page heroes. */
  tagline: string
  description: string
  level: string
  duration: string
  /** Highlighted technologies shown as badges on the course card. */
  technologies: string[]
  /** Bullet topics shown on the marketing card. */
  topics: string[]
  audience: string[]
  curriculum: CurriculumModule[]
  projects: string[]
  outcomes: string[]
  icon: LucideIcon
  /** Editorial preview snippet rendered on the detail-page hero. */
  snippet: {
    filename: string
    lines: string[]
  }
}

export const courses: Course[] = [
  {
    slug: 'python',
    title: 'Python Programming',
    tagline: 'Learn Python from fundamentals to practical development.',
    description:
      'The strongest first language for a beginner, taught the way it is actually used. Variables and loops on day one, working programs by the end.',
    level: 'Beginner to Advanced',
    duration: '12 weeks',
    technologies: ['Python', 'OOP', 'SQLite', 'REST APIs', 'Git'],
    topics: [
      'Python fundamentals',
      'Object-oriented programming',
      'Data structures',
      'Working with APIs',
      'Automation scripting',
      'Backend foundations',
    ],
    audience: [
      'Complete beginners writing their first line of code',
      'University students who want practical Python beyond coursework',
      'Anyone planning to move into backend, data or AI later',
    ],
    curriculum: [
      {
        title: 'Foundations',
        items: [
          'How programs actually run',
          'Variables, types and operators',
          'Conditionals and loops',
          'Functions and scope',
          'Reading errors without panic',
        ],
      },
      {
        title: 'Data & structure',
        items: [
          'Lists, dictionaries, sets and tuples',
          'Comprehensions and iteration patterns',
          'File handling and JSON',
          'Modules, packages and virtual environments',
        ],
      },
      {
        title: 'Object-oriented Python',
        items: [
          'Classes, objects and methods',
          'Inheritance and composition',
          'Dunder methods and data models',
          'Type hints and clean structure',
        ],
      },
      {
        title: 'Practical development',
        items: [
          'Consuming REST APIs with requests',
          'SQLite and basic data persistence',
          'Automation scripts for real tasks',
          'Testing basics and debugging workflow',
          'Git and GitHub from the terminal',
        ],
      },
    ],
    projects: [
      'Command-line expense tracker',
      'Weather API client',
      'File organiser automation script',
      'Quiz engine with persistent scores',
    ],
    outcomes: [
      'Write and debug Python programs without following a tutorial',
      'Model real problems with functions, classes and data structures',
      'Read documentation and integrate a third-party API on your own',
      'Ship code to GitHub with a clean commit history',
    ],
    icon: Braces,
    snippet: {
      filename: 'tracker.py',
      lines: [
        'expenses = []',
        '',
        'def add(label, amount):',
        '    expenses.append({"label": label, "amount": amount})',
        '',
        'total = sum(item["amount"] for item in expenses)',
      ],
    },
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Learn how modern websites and web applications are built.',
    description:
      'From a blank HTML file to a deployed React application, covering structure, styling, interactivity and the workflow professionals use every day.',
    level: 'Beginner to Intermediate',
    duration: '14 weeks',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
    topics: [
      'Semantic HTML',
      'Modern CSS & responsive layout',
      'JavaScript fundamentals',
      'React components & state',
      'Consuming APIs',
      'Git / GitHub workflow',
    ],
    audience: [
      'Beginners who want visible results early',
      'Students aiming for frontend or full-stack roles',
      'Freelancers who need to build client websites properly',
    ],
    curriculum: [
      {
        title: 'The document',
        items: [
          'Semantic HTML and document structure',
          'Accessibility from the first tag',
          'Forms and native browser behaviour',
        ],
      },
      {
        title: 'Modern CSS',
        items: [
          'The box model, cascade and specificity',
          'Flexbox and CSS Grid',
          'Responsive design and mobile-first thinking',
          'Design tokens, spacing scales and typography',
        ],
      },
      {
        title: 'JavaScript',
        items: [
          'Types, functions and control flow',
          'The DOM and event handling',
          'Arrays, objects and immutable updates',
          'Async/await, fetch and error handling',
        ],
      },
      {
        title: 'React',
        items: [
          'Components, props and composition',
          'State, effects and derived data',
          'Client-side routing',
          'Fetching and rendering real API data',
          'Deploying a production build',
        ],
      },
    ],
    projects: [
      'Responsive multi-section landing page',
      'Interactive task manager in vanilla JS',
      'React dashboard consuming a public API',
      'Personal portfolio deployed to the web',
    ],
    outcomes: [
      'Build responsive interfaces that work from 320px upward',
      'Reason about state instead of fighting it',
      'Connect a frontend to a real API and handle failure cases',
      'Deploy a live site and share the URL',
    ],
    icon: Globe,
    snippet: {
      filename: 'CourseList.tsx',
      lines: [
        'export function CourseList({ items }: Props) {',
        '  return (',
        '    <ul className="grid gap-4">',
        '      {items.map((c) => <Card key={c.slug} {...c} />)}',
        '    </ul>',
        '  )',
        '}',
      ],
    },
  },
  {
    slug: 'backend-development',
    title: 'Backend Development',
    tagline: 'Learn how real backend systems are designed and built.',
    description:
      'The part of software most tutorials skip: designing an API, modelling data, protecting routes and putting the whole thing on a server.',
    level: 'Intermediate',
    duration: '14 weeks',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'REST'],
    topics: [
      'FastAPI fundamentals',
      'REST API design',
      'PostgreSQL & data modelling',
      'Authentication & authorization',
      'Testing & error handling',
      'Deployment',
    ],
    audience: [
      'Students who already know basic Python',
      'Frontend developers who want to own the full stack',
      'Anyone targeting backend or API engineering roles',
    ],
    curriculum: [
      {
        title: 'API foundations',
        items: [
          'HTTP, status codes and request lifecycle',
          'FastAPI routing and dependency injection',
          'Request validation with Pydantic',
          'Designing resources and versioning',
        ],
      },
      {
        title: 'Data layer',
        items: [
          'Relational modelling and normalisation',
          'PostgreSQL and SQL that performs',
          'ORMs, migrations and seed data',
          'Transactions and data integrity',
        ],
      },
      {
        title: 'Security',
        items: [
          'Password hashing done correctly',
          'JWT sessions and refresh flows',
          'Role-based access control',
          'Rate limiting and input sanitisation',
        ],
      },
      {
        title: 'Production',
        items: [
          'Automated tests for endpoints',
          'Structured logging and error reporting',
          'Environment configuration and secrets',
          'Containerising and deploying the service',
        ],
      },
    ],
    projects: [
      'Authenticated REST API with role permissions',
      'E-commerce backend with orders and inventory',
      'Task management API with a Postgres schema',
      'Deployed, documented, containerised service',
    ],
    outcomes: [
      'Design an API another developer can consume without asking questions',
      'Model data in PostgreSQL and write queries that scale',
      'Implement authentication you would trust with real users',
      'Deploy and monitor a running backend service',
    ],
    icon: Server,
    snippet: {
      filename: 'main.py',
      lines: [
        '@app.post("/courses", status_code=201)',
        'async def create_course(',
        '    payload: CourseIn,',
        '    user: User = Depends(require_admin),',
        ') -> CourseOut:',
        '    return await repo.create(payload)',
      ],
    },
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    tagline: 'Learn how modern AI-powered applications are built.',
    description:
      'Beyond prompting: calling model APIs from your own code, grounding them in real data, and shipping automation people actually use.',
    level: 'Intermediate',
    duration: '10 weeks',
    technologies: ['Python', 'LLM APIs', 'Vector DB', 'Automation', 'FastAPI'],
    topics: [
      'How LLMs work in practice',
      'Model APIs from code',
      'Retrieval over your own data',
      'Tool use & structured output',
      'Workflow automation',
      'Shipping AI features',
    ],
    audience: [
      'Students comfortable with Python basics',
      'Developers who want to add AI features to real products',
      'Freelancers building automation for local businesses',
    ],
    curriculum: [
      {
        title: 'Foundations',
        items: [
          'What a language model can and cannot do',
          'Tokens, context windows and cost',
          'Prompt design as an engineering task',
        ],
      },
      {
        title: 'Building with model APIs',
        items: [
          'Calling model APIs from Python',
          'Streaming responses to a UI',
          'Structured output and schema validation',
          'Handling failures, retries and timeouts',
        ],
      },
      {
        title: 'Grounding in real data',
        items: [
          'Chunking and embedding documents',
          'Vector search and retrieval',
          'Answering from your own knowledge base',
          'Evaluating output quality honestly',
        ],
      },
      {
        title: 'Automation & delivery',
        items: [
          'Tool use and function calling',
          'Scheduled and event-driven workflows',
          'Wrapping it all in an API',
          'Cost, safety and rate limits in production',
        ],
      },
    ],
    projects: [
      'Chatbot grounded in your own documents',
      'Automated report generator',
      'Data extraction pipeline with structured output',
      'AI feature added to an existing API',
    ],
    outcomes: [
      'Integrate a model API into a real application from scratch',
      'Build retrieval over private data instead of guessing',
      'Return structured, validated output an app can rely on',
      'Understand what an AI feature costs to run',
    ],
    icon: Sparkles,
    snippet: {
      filename: 'assistant.py',
      lines: [
        'response = client.messages.create(',
        '    model=MODEL,',
        '    max_tokens=1024,',
        '    tools=[search_notes],',
        '    messages=history,',
        ')',
      ],
    },
  },
]

export const getCourseBySlug = (slug: string | undefined): Course | undefined =>
  courses.find((course) => course.slug === slug)
