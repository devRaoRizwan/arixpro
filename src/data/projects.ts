export type ProjectExample = {
  name: string
  repo: string
  body: string
  stack: string[]
}

export const projectExamples: ProjectExample[] = [
  {
    name: 'Transaction Settlement Ledger',
    repo: 'ledger-core',
    body: 'High-throughput event-driven ledger processing 5,000 TPS with sub-40ms P99 settlement.',
    stack: ['Go', 'PostgreSQL', 'Kafka', 'Redis'],
  },
  {
    name: 'Real-Time Fleet Telematics',
    repo: 'telematics-stream',
    body: 'Geospatial vehicle tracking engine streaming sub-350ms telemetry for 3,500+ commercial units.',
    stack: ['TypeScript', 'Node.js', 'PostGIS', 'WebSockets'],
  },
  {
    name: 'Encrypted Telehealth Portal',
    repo: 'patient-core',
    body: 'SOC2 & HIPAA-compliant biometric streaming platform with fine-grained RBAC and audit trails.',
    stack: ['Python', 'FastAPI', 'Next.js', 'AWS KMS'],
  },
  {
    name: 'Multi-Tenant Workflow SaaS',
    repo: 'contract-flow',
    body: 'Collaborative contract automation suite reducing sales execution cycles from 7 days to 4 hours.',
    stack: ['React', 'TypeScript', 'Node.js', 'Docker'],
  },
  {
    name: 'Enterprise Cloud Ingestion',
    repo: 'data-pipeline',
    body: 'Automated data ingestion processing 10M+ daily events with zero data loss guarantees.',
    stack: ['AWS', 'Kubernetes', 'Terraform', 'Kafka'],
  },
  {
    name: 'Intelligent Support Agent',
    repo: 'agent-orchestrator',
    body: 'Proprietary RAG knowledge system with hybrid vector indexing and cost-governed token routing.',
    stack: ['Python', 'FastAPI', 'Pinecone', 'LangChain'],
  },
  {
    name: 'Edge API Gateway',
    repo: 'gateway-proxy',
    body: 'Ultra-low latency reverse proxy with distributed rate-limiting and JWT token verification.',
    stack: ['Go', 'Redis', 'Docker', 'Linux'],
  },
  {
    name: 'Warehouse Operations App',
    repo: 'inventory-mobile',
    body: 'Offline-first barcode scanning and inventory dispatch application for cross-border logistics.',
    stack: ['React Native', 'SQLite', 'TypeScript'],
  },
]
