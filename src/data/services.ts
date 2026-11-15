export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  outcome: string;
  deliverables: string[];
  stack: string[];
  icon: 'Bot' | 'Workflow' | 'Server' | 'Layers' | 'Globe' | 'Zap';
}

export const services: Service[] = [
  {
    slug: 'web-scraping-crawling',
    name: 'Automation & Web Scraping (Crawling)',
    shortDesc: 'Automated headless crawlers, resilient data scrapers, and scheduled data extraction.',
    outcome:
      'Scheduled crawlers and scrapers that collect data from any web source reliably, handling pagination, JavaScript rendering, and structure changes without failing.',
    deliverables: [
      'Modular per-target crawlers using Playwright, Selenium, and BeautifulSoup',
      'Anti-blocking measures: proxy rotation, rate-throttling, and request fingerprinting',
      'Deterministic deduplication and schema normalization',
      'Direct output to PostgreSQL, JSON APIs, or automated cloud storage',
    ],
    stack: ['Python', 'BeautifulSoup4', 'Selenium', 'Playwright', 'PostgreSQL'],
    icon: 'Bot',
  },
  {
    slug: 'python-pipelines',
    name: 'Python Data & Event Pipelines',
    shortDesc: 'Async worker architectures, background jobs, and automated event-driven processing.',
    outcome:
      'High-throughput background pipelines that handle slow or complex jobs asynchronously so your application stays fast and responsive at all times.',
    deliverables: [
      'Celery & Redis task queues with retry policies and dead-letter handling',
      'Batch processing, ETL data transformations, and scheduled cron jobs',
      'Third-party webhook ingestion and asynchronous event processors',
      'Detailed worker telemetry, failure alerts, and observability logging',
    ],
    stack: ['Python', 'Celery', 'Redis', 'PostgreSQL', 'Docker'],
    icon: 'Workflow',
  },
  {
    slug: 'custom-backend-apis',
    name: 'Custom Backend Architecture & REST APIs',
    shortDesc: 'High-performance Python backends, normalized database schemas, and clean REST APIs.',
    outcome:
      'Robust, secure backend architectures built with FastAPI or Django REST Framework, designed for high concurrency, clear permissions, and long-term maintainability.',
    deliverables: [
      'FastAPI and Django REST Framework API design with OpenAPI documentation',
      'PostgreSQL schema architecture, indexing, and migration pipelines',
      'JWT authentication, Argon2 hashing, and strict role-based access control (RBAC)',
      'Payment gateways, Stripe billing, and third-party API integrations',
    ],
    stack: ['FastAPI', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Stripe'],
    icon: 'Server',
  },
  {
    slug: 'full-stack-apps',
    name: 'Full-Stack Web Applications',
    shortDesc: 'End-to-end web applications combining robust backends with reactive, modern frontends.',
    outcome:
      'Custom web applications, dashboards, internal tools, and SaaS platforms engineered from database models up to pixel-perfect client interfaces.',
    deliverables: [
      'Interactive single-page apps (SPA) built with React, TypeScript, and Tailwind CSS',
      'Secure session management, user workflows, and role-gated admin panels',
      'Real-time data visualization, search filters, and export capabilities',
      'Production deployment on cloud infrastructure (Render, AWS, or Vercel)',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI / Django', 'PostgreSQL'],
    icon: 'Layers',
  },
  {
    slug: 'websites-online',
    name: 'Complete Websites & Online Presence',
    shortDesc: 'Modern, ultra-fast websites designed to launch businesses online with high conversion.',
    outcome:
      'Bespoke, high-performance websites built for companies wanting to establish a credible online presence with fast load speeds, clean typography, and zero maintenance headaches.',
    deliverables: [
      'Responsive, mobile-optimized engineering with 100% Core Web Vitals score',
      'Technical SEO, Open Graph social share metadata, and canonical sitemaps',
      'Direct enquiry capture, custom forms, and WhatsApp / email integrations',
      'Custom domain configuration, SSL certificates, and fast CDN hosting',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Static Prerendering', 'Cloudflare'],
    icon: 'Globe',
  },
  {
    slug: 'system-rescue-optimization',
    name: 'System Optimization & Code Rescue',
    shortDesc: 'Database query tuning, legacy refactoring, and fixing slow or fragile systems.',
    outcome:
      'Deep technical diagnosis and remediation for existing Python and web systems that suffer from slow response times, database bottlenecks, or technical debt.',
    deliverables: [
      'Comprehensive codebase, security, and query performance audit',
      'Resolution of N+1 database queries, slow joins, and connection pooling issues',
      'Automated testing suites and CI/CD security scanning integration',
      'Clear documentation and architectural roadmap for ongoing scaling',
    ],
    stack: ['Python', 'PostgreSQL', 'GitHub Actions', 'Query Optimization', 'Docker'],
    icon: 'Zap',
  },
];
