import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CodeWindow() {
  const [activeTab, setActiveTab] = useState<'fastapi' | 'django' | 'react'>('fastapi')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const rawCodes = {
      fastapi: `from fastapi import FastAPI, Depends, status\nfrom pydantic import BaseModel, Field\n\napp = FastAPI(title="ArixPro System Gateway", version="1.0.0")\n\nclass ScanRequest(BaseModel):\n    url: str = Field(..., description="Target domain to inspect")\n    strict_mode: bool = True\n\nclass ScanResponse(BaseModel):\n    status: str\n    checks_passed: int\n    total_checks: int\n    duration_ms: float\n\n@app.post("/api/v1/scan", response_model=ScanResponse)\nasync def execute_security_scan(payload: ScanRequest):\n    # Asynchronous non-blocking inspection pipeline\n    return ScanResponse(\n        status="completed",\n        checks_passed=34,\n        total_checks=38,\n        duration_ms=142.6\n    )`,
      django: `from rest_framework import viewsets, permissions\nfrom .models import JobPosting\nfrom .serializers import JobPostingSerializer\n\nclass JobPostingViewSet(viewsets.ModelViewSet):\n    """\n    Django REST endpoint handling 100,000+ daily requests.\n    Cached via Redis; background ingestion handled by Celery.\n    """\n    serializer_class = JobPostingSerializer\n    permission_classes = [permissions.IsAuthenticatedOrReadOnly]\n\n    def get_queryset(self):\n        return (\n            JobPosting.objects\n            .select_related('company')\n            .filter(is_active=True)\n            .order_by('-published_at')\n        )`,
      react: `import React from 'react';\n\ninterface MetricDisplayProps {\n  checksPassed: number;\n  totalChecks: number;\n}\n\nexport function SystemMetric({ checksPassed, totalChecks }: MetricDisplayProps) {\n  const percentage = Math.round((checksPassed / totalChecks) * 100);\n\n  return (\n    <div className="flex items-baseline justify-between border-b border-[#E4DEF2] pb-3">\n      <span className="font-mono text-sm text-[#6B6578]">Compliance</span>\n      <span className="font-mono text-lg font-bold text-[#241044] tabular-nums">\n        {checksPassed}/{totalChecks} ({percentage}%)\n      </span>\n    </div>\n  );\n}`,
    }

    navigator.clipboard.writeText(rawCodes[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full rounded-[14px] border border-[#381C6B] bg-[#241044] overflow-hidden shadow-dropdown">
      {/* Code Window Header */}
      <div className="flex items-center justify-between border-b border-[#381C6B] bg-[#1A0B33] px-4 py-3">
        {/* Left: Monochrome Window Dots & Language Tabs */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>

          <div className="flex items-center gap-1 border-l border-white/10 pl-3">
            <button
              type="button"
              onClick={() => setActiveTab('fastapi')}
              className={`px-3 py-1 rounded-[6px] font-mono text-[12px] font-medium transition-colors cursor-pointer ${
                activeTab === 'fastapi'
                  ? 'bg-[#6336C5] text-white'
                  : 'text-[#C9C2E0]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              FastAPI (Python)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('django')}
              className={`px-3 py-1 rounded-[6px] font-mono text-[12px] font-medium transition-colors cursor-pointer ${
                activeTab === 'django'
                  ? 'bg-[#6336C5] text-white'
                  : 'text-[#C9C2E0]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Django 5 REST
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('react')}
              className={`hidden sm:inline-block px-3 py-1 rounded-[6px] font-mono text-[12px] font-medium transition-colors cursor-pointer ${
                activeTab === 'react'
                  ? 'bg-[#6336C5] text-white'
                  : 'text-[#C9C2E0]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              React 18 (TypeScript)
            </button>
          </div>
        </div>

        {/* Right: Filename & Copy Button */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-[#C9C2E0]/70 hidden md:inline">
            {activeTab === 'fastapi'
              ? 'scan_router.py'
              : activeTab === 'django'
              ? 'views.py'
              : 'MetricDisplay.tsx'}
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-[6px] border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="size-3 text-[#8CEA9A]" />
                <span className="text-[#8CEA9A]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3 text-[#C9C2E0]" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Window Body: Explicit dark background with high-contrast text */}
      <div className="p-4 sm:p-6 bg-[#241044] overflow-x-auto">
        {activeTab === 'fastapi' && (
          <pre className="font-mono text-[13px] leading-[1.65] text-[#FFFFFF] bg-[#241044] m-0">
            <code>
              <span className="text-[#C9B8F5]">from</span> fastapi <span className="text-[#C9B8F5]">import</span> <span className="text-[#7FB3FF]">FastAPI</span>, Depends, status{'\n'}
              <span className="text-[#C9B8F5]">from</span> pydantic <span className="text-[#C9B8F5]">import</span> <span className="text-[#7FB3FF]">BaseModel</span>, Field{'\n\n'}
              app = <span className="text-[#7FB3FF]">FastAPI</span>(title=<span className="text-[#8CEA9A]">&quot;ArixPro System Gateway&quot;</span>, version=<span className="text-[#8CEA9A]">&quot;1.0.0&quot;</span>){'\n\n'}
              <span className="text-[#C9B8F5]">class</span> <span className="text-[#7FB3FF]">ScanRequest</span>(BaseModel):{'\n'}
              {'    '}url: str = Field(..., description=<span className="text-[#8CEA9A]">&quot;Target domain to inspect&quot;</span>){'\n'}
              {'    '}strict_mode: bool = <span className="text-[#C9B8F5]">True</span>{'\n\n'}
              <span className="text-[#C9B8F5]">class</span> <span className="text-[#7FB3FF]">ScanResponse</span>(BaseModel):{'\n'}
              {'    '}status: str{'\n'}
              {'    '}checks_passed: int{'\n'}
              {'    '}total_checks: int{'\n'}
              {'    '}duration_ms: float{'\n\n'}
              @app.<span className="text-[#7FB3FF]">post</span>(<span className="text-[#8CEA9A]">&quot;/api/v1/scan&quot;</span>, response_model=ScanResponse){'\n'}
              <span className="text-[#C9B8F5]">async def</span> <span className="text-[#7FB3FF]">execute_security_scan</span>(payload: ScanRequest):{'\n'}
              {'    '}<span className="text-[#9A91B8]"># Asynchronous non-blocking inspection pipeline</span>{'\n'}
              {'    '}<span className="text-[#C9B8F5]">return</span> ScanResponse({'\n'}
              {'        '}status=<span className="text-[#8CEA9A]">&quot;completed&quot;</span>,{'\n'}
              {'        '}checks_passed=34,{'\n'}
              {'        '}total_checks=38,{'\n'}
              {'        '}duration_ms=142.6{'\n'}
              {'    '})
            </code>
          </pre>
        )}

        {activeTab === 'django' && (
          <pre className="font-mono text-[13px] leading-[1.65] text-[#FFFFFF] bg-[#241044] m-0">
            <code>
              <span className="text-[#C9B8F5]">from</span> rest_framework <span className="text-[#C9B8F5]">import</span> viewsets, permissions{'\n'}
              <span className="text-[#C9B8F5]">from</span> .models <span className="text-[#C9B8F5]">import</span> JobPosting{'\n'}
              <span className="text-[#C9B8F5]">from</span> .serializers <span className="text-[#C9B8F5]">import</span> JobPostingSerializer{'\n\n'}
              <span className="text-[#C9B8F5]">class</span> <span className="text-[#7FB3FF]">JobPostingViewSet</span>(viewsets.ModelViewSet):{'\n'}
              {'    '}<span className="text-[#8CEA9A]">&quot;&quot;&quot;{'\n'}
              {'    '}Django REST endpoint handling 100,000+ daily requests.{'\n'}
              {'    '}Cached via Redis; background ingestion handled by Celery.{'\n'}
              {'    '}&quot;&quot;&quot;</span>{'\n'}
              {'    '}serializer_class = JobPostingSerializer{'\n'}
              {'    '}permission_classes = [permissions.IsAuthenticatedOrReadOnly]{'\n\n'}
              {'    '}<span className="text-[#C9B8F5]">def</span> <span className="text-[#7FB3FF]">get_queryset</span>(<span className="text-[#C9B8F5]">self</span>):{'\n'}
              {'        '}<span className="text-[#C9B8F5]">return</span> ({'\n'}
              {'            '}JobPosting.objects{'\n'}
              {'            '}.select_related(<span className="text-[#8CEA9A]">&apos;company&apos;</span>){'\n'}
              {'            '}.filter(is_active=<span className="text-[#C9B8F5]">True</span>){'\n'}
              {'            '}.order_by(<span className="text-[#8CEA9A]">&apos;-published_at&apos;</span>){'\n'}
              {'        '})
            </code>
          </pre>
        )}

        {activeTab === 'react' && (
          <pre className="font-mono text-[13px] leading-[1.65] text-[#FFFFFF] bg-[#241044] m-0">
            <code>
              <span className="text-[#C9B8F5]">import</span> React <span className="text-[#C9B8F5]">from</span> <span className="text-[#8CEA9A]">&apos;react&apos;</span>;{'\n\n'}
              <span className="text-[#C9B8F5]">interface</span> <span className="text-[#7FB3FF]">MetricDisplayProps</span> {'{'}{'\n'}
              {'  '}checksPassed: number;{'\n'}
              {'  '}totalChecks: number;{'\n'}
              {'}'}{'\n\n'}
              <span className="text-[#C9B8F5]">export function</span> <span className="text-[#7FB3FF]">SystemMetric</span>({'{'} checksPassed, totalChecks {'}'}: MetricDisplayProps) {'{'}{'\n'}
              {'  '}<span className="text-[#C9B8F5]">const</span> percentage = Math.<span className="text-[#7FB3FF]">round</span>((checksPassed / totalChecks) * 100);{'\n\n'}
              {'  '}<span className="text-[#C9B8F5]">return</span> ({'\n'}
              {'    '}&lt;div className=<span className="text-[#8CEA9A]">&quot;flex items-baseline justify-between border-b border-[#E4DEF2] pb-3&quot;</span>&gt;{'\n'}
              {'      '}&lt;span className=<span className="text-[#8CEA9A]">&quot;font-mono text-sm text-[#6B6578]&quot;</span>&gt;Compliance&lt;/span&gt;{'\n'}
              {'      '}&lt;span className=<span className="text-[#8CEA9A]">&quot;font-mono text-lg font-bold text-[#241044] tabular-nums&quot;</span>&gt;{'\n'}
              {'        '}{'{'}checksPassed{'}'}/{'{'}totalChecks{'}'} ({'{'}percentage{'}'}%){'\n'}
              {'      '}&lt;/span&gt;{'\n'}
              {'    '}&lt;/div&gt;{'\n'}
              {'  '});{'\n'}
              {'}'}
            </code>
          </pre>
        )}
      </div>
    </div>
  )
}

export default CodeWindow
