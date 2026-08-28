export type ProjectExample = {
  name: string
  repo: string
  body: string
  stack: string[]
}

export const projectExamples: ProjectExample[] = [
  {
    name: 'REST API',
    repo: 'courses-api',
    body: 'A documented API with validation, pagination and proper status codes.',
    stack: ['FastAPI', 'Pydantic'],
  },
  {
    name: 'Authentication system',
    repo: 'auth-service',
    body: 'Hashed passwords, JWT sessions and role-based route protection.',
    stack: ['Python', 'JWT'],
  },
  {
    name: 'E-commerce backend',
    repo: 'store-backend',
    body: 'Products, carts, orders and inventory on a relational schema.',
    stack: ['PostgreSQL', 'REST'],
  },
  {
    name: 'Task management app',
    repo: 'taskflow',
    body: 'A full-stack board with optimistic updates and persistent state.',
    stack: ['React', 'API'],
  },
  {
    name: 'AI chatbot',
    repo: 'notes-assistant',
    body: 'Answers grounded in your own documents through retrieval.',
    stack: ['LLM API', 'Vectors'],
  },
  {
    name: 'Automation tool',
    repo: 'report-runner',
    body: 'A scheduled script that collects data and emails a summary.',
    stack: ['Python', 'Cron'],
  },
  {
    name: 'Portfolio website',
    repo: 'portfolio',
    body: 'Responsive, accessible and deployed on a real domain.',
    stack: ['React', 'CSS'],
  },
  {
    name: 'Real-time application',
    repo: 'live-board',
    body: 'WebSocket updates shared across multiple connected clients.',
    stack: ['WebSocket', 'React'],
  },
]
