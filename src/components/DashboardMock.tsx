import { CheckCircle2 } from 'lucide-react'
import { StatusBadge } from './Badges'

export function DashboardMock() {
  const checks = [
    {
      id: 'SEC-01',
      name: 'TLS 1.3 Handshake & Cipher Suite',
      category: 'Transport Security',
      status: 'passed' as const,
      responseTime: '24ms',
      result: 'Verified strong cipher (ECDHE-RSA-AES128-GCM-SHA256)',
    },
    {
      id: 'SEC-02',
      name: 'Strict-Transport-Security (HSTS)',
      category: 'Headers',
      status: 'passed' as const,
      responseTime: '12ms',
      result: 'max-age=31536000; includeSubDomains; preload',
    },
    {
      id: 'SEC-03',
      name: 'Content-Security-Policy (CSP)',
      category: 'Headers',
      status: 'warning' as const,
      responseTime: '15ms',
      result: "Missing default-src fallback directive ('unsafe-inline' detected)",
    },
    {
      id: 'SEC-04',
      name: 'X-Frame-Options Protection',
      category: 'Clickjacking',
      status: 'passed' as const,
      responseTime: '11ms',
      result: 'DENY (Clickjacking mitigated across all frames)',
    },
    {
      id: 'SEC-05',
      name: 'Cross-Origin Resource Sharing (CORS)',
      category: 'API Access',
      status: 'passed' as const,
      responseTime: '18ms',
      result: 'Strict origin allowlist validated against preflight OPTIONS',
    },
    {
      id: 'SEC-06',
      name: 'X-Content-Type-Options Header',
      category: 'MIME Sniffing',
      status: 'passed' as const,
      responseTime: '9ms',
      result: 'nosniff directive enforced on all static & dynamic routes',
    },
    {
      id: 'SEC-07',
      name: 'API Rate Limiting & Throttling',
      category: 'Abuse Prevention',
      status: 'warning' as const,
      responseTime: '32ms',
      result: 'Redis token bucket active (100 req/min per IP threshold)',
    },
    {
      id: 'SEC-08',
      name: 'SQL Injection & ORM Escaping',
      category: 'Database Input',
      status: 'passed' as const,
      responseTime: '21ms',
      result: 'Parameterized query compilation verified via SQLAlchemy AST',
    },
  ]

  return (
    <div className="rounded-[14px] border border-[#E4DEF2] bg-white overflow-hidden shadow-sm">
      {/* Dashboard Top Header Bar */}
      <div className="border-b border-[#E4DEF2] bg-[#F7F6FC] p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#241044]" />
              <span className="font-mono text-[12px] uppercase text-[#6B6578]">
                SiteScopia Production Inspection
              </span>
            </div>
            <h4 className="mt-1 font-sans text-[18px] font-semibold text-[#241044]">
              Target: api.production-gateway.internal
            </h4>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="rounded-[8px] border border-[#E4DEF2] bg-white px-3.5 py-1.5 text-center">
              <span className="block font-mono text-[16px] font-semibold text-[#241044] tabular-nums">
                34/38
              </span>
              <span className="font-mono text-[10px] uppercase text-[#6B6578]">
                Passed
              </span>
            </div>

            <div className="rounded-[8px] border border-[#E4DEF2] bg-white px-3.5 py-1.5 text-center">
              <span className="block font-mono text-[16px] font-semibold text-[#241044] tabular-nums">
                4
              </span>
              <span className="font-mono text-[10px] uppercase text-[#6B6578]">
                Issues
              </span>
            </div>

            <div className="rounded-[8px] border border-[#E4DEF2] bg-white px-3.5 py-1.5 text-center">
              <span className="block font-mono text-[16px] font-semibold text-[#241044] tabular-nums">
                142.6ms
              </span>
              <span className="font-mono text-[10px] uppercase text-[#6B6578]">
                Duration
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Scans */}
      <div className="overflow-x-auto">
        <table className="w-full text-left font-sans text-[13px]">
          <thead>
            <tr className="border-b border-[#E4DEF2] bg-[#F7F6FC] text-[#6B6578] font-mono text-[11px] uppercase tracking-wider">
              <th className="py-3 px-4">Code</th>
              <th className="py-3 px-4">Check Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Latency</th>
              <th className="py-3 px-4">Result Specification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E4DEF2]">
            {checks.map((item) => (
              <tr key={item.id} className="hover:bg-[#F7F6FC]/60 transition-colors">
                <td className="py-3 px-4 font-mono font-medium text-[#241044]">
                  {item.id}
                </td>
                <td className="py-3 px-4 font-medium text-[#241044]">
                  {item.name}
                </td>
                <td className="py-3 px-4 text-[#6B6578]">
                  {item.category}
                </td>
                <td className="py-3 px-4">
                  <StatusBadge status={item.status} label={item.status.toUpperCase()} />
                </td>
                <td className="py-3 px-4 font-mono text-[#4A4458] tabular-nums">
                  {item.responseTime}
                </td>
                <td className="py-3 px-4 text-[#4A4458] max-w-xs truncate">
                  {item.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Footer */}
      <div className="border-t border-[#E4DEF2] bg-[#F7F6FC] px-4 py-3 flex items-center justify-between font-mono text-[12px] text-[#6B6578]">
        <span>Full report contains 38 total checks</span>
        <span className="flex items-center gap-1.5 text-[#241044]">
          <CheckCircle2 className="size-3.5 text-[#241044]" />
          <span>89.4% Compliance Score</span>
        </span>
      </div>
    </div>
  )
}

export default DashboardMock
