export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectHighlight {
  title: string;
  detail: string;
}

export interface ProjectPipelineStage {
  step: string;
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  brief: string;
  description: string;
  specs: ProjectSpec[];
  problemPoints: string[];
  builtPoints: ProjectHighlight[];
  pipelineStages: ProjectPipelineStage[];
  stack: string[];
  coverImage: string;
  logo: string;
  links: ProjectLink[];
  // Backwards compatibility if needed
  problem: string;
  built: string[];
  architecture: string[];
}

export const projects: Project[] = [
  {
    slug: 'bomwatcher',
    name: 'BOMWatcher',
    tagline: 'An AI bill of materials for your GitHub repos',
    brief:
      'Scans run directly on GitHub Actions to inventory AI models, SDKs, and dependencies into a CycloneDX 1.6 report without source code leaving GitHub.',
    description:
      'Automated scans running inside GitHub Actions that inventory AI models, SDKs, and dependencies into a CycloneDX 1.6 bill of materials without proprietary code leaving GitHub.',
    specs: [
      { label: 'Architecture', value: 'Zero-clone in-pipeline scanning' },
      { label: 'Report Format', value: 'CycloneDX 1.6 SBOM' },
      { label: 'Ingest Security', value: 'HMAC webhooks · 202 Accepted' },
      { label: 'Runner Target', value: 'GitHub Actions (read-only)' },
    ],
    problemPoints: [
      'Teams ship AI features without an accurate inventory of models, SDKs, or providers in use.',
      'Auditors and clients require visibility into licenses and dependencies across repositories.',
      'Traditional tools require cloning private code to third-party servers, creating security risks.',
    ],
    builtPoints: [
      {
        title: 'Zero-Clone Execution',
        detail:
          'Scans run entirely inside the repo owner’s read-only GitHub Actions runner. Source code never leaves GitHub.',
      },
      {
        title: 'PR-First Workflow',
        detail:
          'Installed via a GitHub App that opens a clean workflow PR. Nothing runs until the repository owner reviews and merges.',
      },
      {
        title: 'HMAC-Verified Webhooks',
        detail:
          'Incoming workflow_run events verify HMAC signatures and return 202 Accepted immediately before downloading reports.',
      },
      {
        title: 'Syft + AST Model Scanner',
        detail:
          'Combines Syft dependency analysis with custom AST detectors identifying AI model endpoints, SDK calls, and licenses.',
      },
    ],
    pipelineStages: [
      {
        step: '01',
        title: 'Install & Review',
        detail:
          'GitHub App is connected to chosen repos. The API generates a read-only Actions workflow PR for owner review.',
      },
      {
        step: '02',
        title: 'In-Pipeline Scan',
        detail:
          'Every push runs Syft and AST detectors directly on GitHub runners, compiling a bom.cdx.json artifact.',
      },
      {
        step: '03',
        title: 'HMAC Ingest',
        detail:
          'Signed workflow_run webhook is verified via HMAC; API responds 202 Accepted, then validates and stores report by run ID.',
      },
    ],
    stack: ['Python', 'FastAPI', 'GitHub Actions', 'Syft', 'CycloneDX 1.6', 'PostgreSQL', 'React 19'],
    coverImage: '/images/projects/bomwatcher.webp',
    logo: '/images/projects/bomwatcher-logo.svg',
    links: [],
    problem:
      'AI features are going into codebases faster than anyone tracks them. Most teams cannot quickly say which models they call, from which providers, in which repos, or under what licenses.',
    built: [
      'Zero-clone architecture: the scan runs entirely inside the repository owner’s GitHub Actions runner so proprietary source code never leaves GitHub.',
      'PR-based workflow delivery: installs as a GitHub App that opens a clean workflow PR, ensuring nothing runs until the repo owner reviews and merges.',
      'Signed HMAC webhooks: workflow_run events verify signatures and return 202 Accepted immediately before safely downloading and validating artifacts.',
      'Standardized CycloneDX 1.6 output: combines Syft dependency extraction with custom AST detectors for AI model endpoints, SDKs, and licenses.',
    ],
    architecture: [
      'GitHub App install → API generates workflow PR → Owner reviews & merges',
      'Push to default branch → Read-only Actions runner → Syft & AI Detector scan → bom.cdx.json artifact',
      'Signed workflow_run webhook → HMAC verification → 202 Accepted → Artifact ingest & storage by run ID',
    ],
  },
  {
    slug: 'sitescopia',
    name: 'SiteScopia',
    tagline: 'Evidence-led website analysis',
    brief:
      'Single-pass website audit engine executing 38 isolated checks across SEO, accessibility, security, and domain signals with evidence for every finding.',
    description:
      'Single-pass website audit engine running 38 isolated checks across SEO, accessibility, security headers, and domain signals with evidence for every finding.',
    specs: [
      { label: 'Evaluation Engine', value: 'Single-pass 38-signal audit' },
      { label: 'Security Layer', value: 'SSRF protection & hop DNS checks' },
      { label: 'Enrichment', value: 'Parallel RDAP & link telemetry' },
      { label: 'Bot Handling', value: 'Challenges flagged, not scored' },
    ],
    problemPoints: [
      'Auditing a website properly requires jumping between multiple fragmented tools with inconsistent outputs.',
      'Most SEO/audit tools produce generic scores without showing the raw evidence behind their findings.',
      'SSRF vulnerabilities and bot-challenge pages frequently distort audit results or expose internal services.',
    ],
    builtPoints: [
      {
        title: '38 Isolated Diagnostics',
        detail:
          'Fetches the page once and runs 38 independent rules across SEO, accessibility, headers, and domain signals.',
      },
      {
        title: 'Strict SSRF Protection',
        detail:
          'Re-resolves DNS at every redirect hop and strictly rejects private, internal, or loopback IP addresses.',
      },
      {
        title: 'Anti-Bot Gate Detection',
        detail:
          'Detects Cloudflare and bot barriers up-front, marking results as blocked rather than falsely scoring a captcha page.',
      },
      {
        title: 'Evidence-Backed Findings',
        detail:
          'Every diagnostic pairs the raw HTTP header, DOM element, or RDAP record with a concrete, prioritized code fix.',
      },
    ],
    pipelineStages: [
      {
        step: '01',
        title: 'Queue & SSRF Check',
        detail:
          'URL is validated against internal/loopback IPs. An async job is queued and returns a 202 token for polling.',
      },
      {
        step: '02',
        title: 'Multi-Signal Audit',
        detail:
          'Single fetch detects bot gates, parses the DOM with BeautifulSoup, and gathers parallel RDAP telemetry.',
      },
      {
        step: '03',
        title: 'Evidence Report',
        detail:
          'Executes 38 isolated rules, generating a weighted score alongside concrete evidence and remediation steps.',
      },
    ],
    stack: ['Python', 'FastAPI', 'httpx', 'asyncio', 'BeautifulSoup4', 'RDAP', 'React', 'Vite'],
    coverImage: '/images/projects/sitescopia.webp',
    logo: '/images/projects/sitescopia-logo.svg',
    links: [],
    problem:
      'Checking a page properly means opening several tools: one for meta tags, one for security headers, a WHOIS lookup, a link checker. Each one gives its own verdict, and most of them do not show what they actually saw.',
    built: [
      'Single-pass 38-signal evaluation: fetches the page once and executes 38 isolated audit rules across SEO, accessibility, security headers, and domain telemetry.',
      'SSRF & redirect protection: strictly refuses private, internal, or loopback IP resolutions and re-validates DNS at every single redirect hop.',
      'Anti-bot challenge detection: identifies Cloudflare or bot challenge gates up-front and flags the URL as blocked rather than scoring an irrelevant captcha wall.',
      'Evidence-backed reporting: every diagnostic includes the exact response header, DOM snippet, or RDAP record found, plus an actionable code fix.',
    ],
    architecture: [
      'URL submitted (public IP validation, SSRF-safe) → Job queued with 202 & polling token',
      'Background worker fetches with per-hop DNS checks → Bot gate check → Single BeautifulSoup parse → Parallel RDAP & link lookups',
      '38 isolated audit rules → Weighted signal scoring (0–100) → Comprehensive report with evidence & fixes',
    ],
  },
  {
    slug: 'jobharvester',
    name: 'JobHarvester',
    tagline: 'Job aggregation for the Pakistani tech market',
    brief:
      'Scheduled crawler pipeline collecting tech jobs across company career pages into a de-duplicated PostgreSQL database and searchable feed.',
    description:
      'Scheduled crawler pipeline aggregating tech jobs across Pakistani company career pages into a de-duplicated PostgreSQL database and searchable feed.',
    specs: [
      { label: 'Scraping Architecture', value: 'Isolated per-company crawlers' },
      { label: 'Ingest Security', value: 'DRF serializers & ingest key auth' },
      { label: 'Deduplication', value: 'Deterministic source URL indexing' },
      { label: 'Data Volume', value: '1,600+ verified listings indexed' },
    ],
    problemPoints: [
      'Tech opportunities are scattered across dozens of individual company career pages with no single source.',
      'Most job crawlers break entirely when one website updates its DOM or layout.',
      'Duplicate listings pollute search feeds when companies refresh their postings.',
    ],
    builtPoints: [
      {
        title: 'Isolated Crawler Modules',
        detail:
          'Each company has a dedicated crawler script, ensuring DOM updates on one site never disrupt the rest of the pipeline.',
      },
      {
        title: 'Source URL Deduplication',
        detail:
          'Jobs are indexed on their canonical URL, updating existing listings rather than duplicating them on re-crawls.',
      },
      {
        title: 'Protected Ingest API',
        detail:
          'Crawlers authenticate with dedicated secret keys against throttled DRF serializers, isolating PostgreSQL.',
      },
      {
        title: 'Searchable REST Layer',
        detail:
          'Normalised PostgreSQL database exposed via paginated REST endpoints powering an instant-filter React UI.',
      },
    ],
    pipelineStages: [
      {
        step: '01',
        title: 'Scheduled Crawlers',
        detail:
          'Cron triggers on GitHub Actions run modular scrapers (requests, Selenium, BeautifulSoup) per company.',
      },
      {
        step: '02',
        title: 'API & Deduplication',
        detail:
          'Crawlers post via secret ingest keys; DRF serializers validate and upsert records into PostgreSQL by source URL.',
      },
      {
        step: '03',
        title: 'Searchable Feed',
        detail:
          'Fast, paginated REST endpoints deliver real-time searchable listings to engineers across Pakistan.',
      },
    ],
    stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'GitHub Actions', 'Selenium', 'React', 'Vite'],
    coverImage: '/images/projects/jobharvester.webp',
    logo: '/images/projects/jobharvester-logo.webp',
    links: [],
    problem:
      'Tech jobs in Lahore and across Pakistan are spread across dozens of company career pages, each with its own layout, and many never reach the big job boards. Finding them means checking site after site by hand.',
    built: [
      'Isolated per-company scrapers: each organization has its own dedicated crawler script so layout adjustments on one website never disrupt the broader ingestion pipeline.',
      'Deterministic URL de-duplication: incoming postings are indexed on canonical source URLs, updating existing job records rather than creating redundant duplicates.',
      'Secured API-only ingestion: crawlers authenticate via a dedicated ingest key header against throttled DRF serializers, completely isolating the PostgreSQL database.',
      'Fast searchable interface: indexed listings are cached and exposed via a paginated REST API powering a responsive, instant-filter React client.',
    ],
    architecture: [
      'GitHub Actions cron trigger → Independent company crawlers (requests / Selenium / JSON) → BeautifulSoup parsing',
      'Ingest key auth → DRF serializer validation & rate throttling → Upsert on source URL → PostgreSQL (Supabase)',
      'Paginated REST endpoints → React frontend with real-time keyword search, filtering, and shareable links',
    ],
  },
];
