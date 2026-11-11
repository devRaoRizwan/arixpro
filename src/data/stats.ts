export type StatItem = {
  label: string
  detail: string
  metric?: string
}

export const stats: StatItem[] = [
  {
    metric: '100%',
    label: 'Code Ownership',
    detail: 'Full IP transfer with clean git repositories and comprehensive documentation.',
  },
  {
    metric: '99.9%',
    label: 'Architecture Uptime',
    detail: 'High-availability infrastructure designed with automated failover and zero-downtime deploys.',
  },
  {
    metric: '< 100ms',
    label: 'Target Latency',
    detail: 'Performance-engineered APIs optimized with connection pooling and query indexing.',
  },
  {
    metric: 'Zero',
    label: 'Vendor Lock-in',
    detail: 'Built on open cloud-native standards (Docker, PostgreSQL, Terraform, Linux).',
  },
]
