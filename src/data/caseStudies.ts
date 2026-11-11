export type CaseStudy = {
  id: string
  title: string
  clientIndustry: string
  challenge: string
  solution: string
  impact: string[]
  stack: string[]
  metrics: { value: string; label: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-settlement',
    title: 'Distributed Transaction Settlement Engine',
    clientIndustry: 'FinTech & Payments',
    challenge:
      'The client was processing over 120,000 daily transactions through a legacy relational database, causing frequent lock contention, delayed settlement batches, and reconciliation mismatches during peak volume spikes.',
    solution:
      'We engineered an event-driven ledger service with an immutable append-only transaction log. High-frequency balance queries were decoupled using in-memory Redis clusters, while Kafka ensured ordered, at-least-once message delivery.',
    impact: [
      'P99 settlement latency dropped from 2.4s to 38ms',
      'Zero balance reconciliation discrepancies over 18 consecutive months',
      'Engine capacity scaled to 5,000+ concurrent transactions per second',
    ],
    stack: ['Go', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'AWS'],
    metrics: [
      { value: '38ms', label: 'P99 Latency' },
      { value: '5,000 TPS', label: 'Peak Capacity' },
      { value: '99.99%', label: 'Uptime Maintained' },
    ],
  },
  {
    id: 'logistics-telematics',
    title: 'Real-Time Fleet Telematics & Dispatch Platform',
    clientIndustry: 'Logistics & Supply Chain',
    challenge:
      'A cross-border freight fleet struggled with a 4-minute lag in vehicle telemetry, preventing dispatchers from issuing timely dynamic reroutes around road closures and regional bottlenecks.',
    solution:
      'We designed a high-concurrency ingestion gateway utilizing lightweight binary protocols and WebSockets. Integrated PostGIS geospatial queries with an interactive vector map client for instant dispatcher visualization.',
    impact: [
      'Live vehicle telemetry lag reduced from 240 seconds to under 350 milliseconds',
      'Automated dispatch routing slashed fleet fuel overhead by 18%',
      'Continuous telemetry tracking across 3,500+ commercial vehicles in real time',
    ],
    stack: ['TypeScript', 'Node.js', 'React', 'PostGIS', 'Redis Streams', 'Mapbox'],
    metrics: [
      { value: '< 350ms', label: 'Live Stream Lag' },
      { value: '18%', label: 'Fuel Savings' },
      { value: '3,500+', label: 'Connected Units' },
    ],
  },
  {
    id: 'healthcare-portal',
    title: 'HIPAA-Compliant Patient Telemetry & Portal',
    clientIndustry: 'Healthcare & MedTech',
    challenge:
      'Clinics lacked a unified, secure platform to aggregate diagnostic device data into patient charts, forcing medical staff into manual copy-pasting that introduced transcription errors and compliance liabilities.',
    solution:
      'Engineered an encrypted microservices architecture with field-level cryptographic encryption at rest, automatic session termination, and audit log generation adhering strictly to HIPAA guidelines.',
    impact: [
      'Eliminated 100% of manual data entry errors across clinical staff workflows',
      'Automated encryption and zero-knowledge telemetry pipeline passed SOC2 audit',
      'Rapid diagnostic telemetry available to on-call physicians within seconds',
    ],
    stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'AWS KMS'],
    metrics: [
      { value: '100%', label: 'SOC2 & HIPAA Ready' },
      { value: '0', label: 'Manual Errors' },
      { value: '45,000+', label: 'Patients Served' },
    ],
  },
  {
    id: 'enterprise-workflow-saas',
    title: 'Multi-Tenant Enterprise Workflow Platform',
    clientIndustry: 'B2B SaaS & Legal Operations',
    challenge:
      'Enterprise sales teams experienced a 7-day bottleneck waiting for custom contract generation, legal redlines, and executive sign-offs managed through disconnected email chains.',
    solution:
      'Developed a collaborative multi-tenant workspace featuring live document editing, role-based approval gates, automated template variables, and verifiable cryptographic audit trails.',
    impact: [
      'Contract turnaround cycle compressed from 7 business days down to 4 hours',
      'Over 40,000 corporate seats actively managed across 15 enterprise clients',
      'Native webhooks easily connected to enterprise ERPs and CRM databases',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
    metrics: [
      { value: '4 Hours', label: 'Contract Turnaround' },
      { value: '40k+', label: 'Active Seats' },
      { value: '99.95%', label: 'API Availability' },
    ],
  },
]
