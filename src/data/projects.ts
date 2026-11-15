export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  built: string[];
  architecture: string[];
  stack: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: 'jobharvester',
    name: 'JobHarvester',
    tagline: 'Pakistan tech jobs, in one feed',
    description: 'Scheduled crawlers collect tech jobs from company career pages into one searchable feed. Crawlers post to a Django REST API with API keys — they never touch the database directly — and listings are de-duplicated on source URL. 1,658 live listings, counted 15 Nov 2026.',
    problem: 'Tech jobs in Pakistan are spread across dozens of company career pages, and many never reach the big job boards. Checking them by hand is a daily chore nobody keeps up.',
    built: [
      'Per-company crawlers that run on a schedule and report new listings',
      'A Django REST API that accepts crawler posts by API key — crawlers never write to the database directly',
      'De-duplication and matching on source URL, so the same job never appears twice',
      'A React frontend with one searchable feed across every source',
    ],
    architecture: [
      'career pages → crawlers → API-key POST → Django REST API',
      '→ dedupe on source_url → PostgreSQL → React feed',
    ],
    stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'Celery', 'React'],
    links: [{ label: 'Live demo', url: 'https://job-harvester-demo.vercel.app' }],
  },
  {
    slug: 'bomwatcher',
    name: 'BOMWatcher',
    tagline: 'An AI bill of materials for GitHub repos',
    description: "Scans run on the user's own GitHub Actions and report exactly which libraries and AI models their code uses — an AI-BOM for teams that need to answer \"what's inside this software?\"",
    problem: 'Teams increasingly ship code that depends on AI models and libraries nobody inventoried. When someone asks what a system is built on, the honest answer is usually a shrug.',
    built: [
      "Scans that run inside the user's own GitHub Actions — code never leaves their pipeline",
      'An inventory of the libraries and AI models a repository actually uses',
      'A bill-of-materials report a team can hand to clients, auditors or their future selves',
    ],
    architecture: [
      'repo → GitHub Actions scan → dependency + AI-model inventory → AI-BOM report',
    ],
    stack: ['Python', 'GitHub Actions', 'SBOM'],
    links: [],
  },
  {
    slug: 'sitescopia',
    name: 'SiteScopia',
    tagline: 'Evidence-led website analysis',
    description: 'Analyzes any public URL across SEO, accessibility, security, performance and domain signals — with evidence and a fix for every finding, not a vague score.',
    problem: 'Most website audits hand you a score and a generic checklist. You still do not know what is actually wrong with your site, or what to fix first.',
    built: [
      'A five-signal audit of any public URL: SEO, accessibility, security, performance and domain',
      'Evidence attached to every finding, so each claim can be checked',
      'A fix for every finding, in priority order',
    ],
    architecture: [
      'URL → 5-signal audit → evidence per finding → prioritised fix list',
    ],
    stack: ['Python', 'Web auditing', 'Reporting'],
    links: [],
  },
  {
    slug: 'jobbr',
    name: 'Jobbr',
    tagline: 'A job board API, done properly',
    description: 'A Django REST Framework job board API where employers and job seekers get genuinely different permissions — JWT auth and role-based access, not one login with hidden buttons.',
    problem: 'Job boards look simple until permissions arrive: employers and seekers must see and do different things, and bolting that onto one shared account type ends in leaks.',
    built: [
      'JWT authentication with role-based access control from the first commit',
      'Separate employer and job-seeker permission sets, enforced in the API — not hidden in the UI',
      'A clean REST surface for listings, applications and accounts',
    ],
    architecture: [
      'JWT login → role check (RBAC) → employer / seeker permissions → API',
    ],
    stack: ['Python', 'Django REST Framework', 'JWT', 'PostgreSQL'],
    links: [],
  },
];
