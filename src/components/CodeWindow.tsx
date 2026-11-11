import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CodeWindow() {
  const [activeTab, setActiveTab] = useState<'fastapi' | 'django' | 'react'>('fastapi')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const rawCodes = {
      fastapi: `from fastapi import FastAPI, Depends, status\nfrom pydantic import BaseModel, Field\n\napp = FastAPI(title="ArixPro System Gateway", version="1.0.0")\n\nclass ScanRequest(BaseModel):\n    url: str = Field(..., description="Target domain to inspect")\n    strict_mode: bool = True\n\nclass ScanResponse(BaseModel):\n    status: str\n    checks_passed: int\n    total_checks: int\n    duration_ms: float\n\n@app.post("/api/v1/scan", response_model=ScanResponse)\nasync def execute_security_scan(payload: ScanRequest):\n    # Asynchronous non-blocking inspection pipeline\n    return ScanResponse(\n        status="completed",\n        checks_passed=34,\n        total_checks=38,\n        duration_ms=142.6\n    )`,
      django: `from rest_framework import viewsets, permissions\nfrom .models import JobPosting\nfrom .serializers import JobPostingSerializer\n\nclass JobPostingViewSet(viewsets.ModelViewSet):\n    """\n    Django REST endpoint handling 100,000+ daily requests.\n    Cached via Redis; background ingestion handled by Celery.\n    """\n    serializer_class = JobPostingSerializer\n    permission_classes = [permissions.IsAuthenticatedOrReadOnly]\n\n    def get_queryset(self):\n        return (\n            JobPosting.objects\n            .select_related('company')\n            .filter(is_active=True)\n            .order_by('-published_at')\n        )`,
      react: `import React from 'react';\n\ninterface MetricDisplayProps {\n  checksPassed: number;\n  totalChecks: number;\n}\n\nexport function SystemMetric({ checksPassed, totalChecks }: MetricDisplayProps) {\n  const percentage = Math.round((checksPassed / totalChecks) * 100);\n\n  return (\n    <div className="flex items-baseline justify-between border-b border-white/10 pb-3">\n      <span className="font-mono text-sm text-[#8378A6]">Compliance</span>\n      <span className="font-mono text-lg font-bold text-white tabular-nums">\n        {checksPassed}/{totalChecks} ({percentage}%)\n      </span>\n    </div>\n  );\n}`,
    }

    navigator.clipboard.writeText(rawCodes[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full rounded-2xl border border-white/[0.12] bg-[#0E061D]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
      {/* Code Window Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.03] px-4 py-3">
        {/* Left: Window Dots & Language Tabs */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="size-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="size-2.5 rounded-full bg-[#27C93F]/80" />
          </div>

          <div className="flex items-center gap-1 border-l border-white/[0.08] pl-3">
            <button
              type="button"
              onClick={() => setActiveTab('fastapi')}
              className={`px-3 py-1 rounded-lg font-mono text-[12px] font-medium transition-all cursor-pointer ${
                activeTab === 'fastapi'
                  ? 'bg-[#8B5CF6]/20 text-white border border-[#8B5CF6]/40'
                  : 'text-[#8378A6] hover:text-white'
              }`}
            >
              FastAPI (Python)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('django')}
              className={`px-3 py-1 rounded-lg font-mono text-[12px] font-medium transition-all cursor-pointer ${
                activeTab === 'django'
                  ? 'bg-[#8B5CF6]/20 text-white border border-[#8B5CF6]/40'
                  : 'text-[#8378A6] hover:text-white'
              }`}
            >
              Django 5 REST
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('react')}
              className={`hidden sm:inline-block px-3 py-1 rounded-lg font-mono text-[12px] font-medium transition-all cursor-pointer ${
                activeTab === 'react'
                  ? 'bg-[#8B5CF6]/20 text-white border border-[#8B5CF6]/40'
                  : 'text-[#8378A6] hover:text-white'
              }`}
            >
              React 19 (TS)
            </button>
          </div>
        </div>

        {/* Right: Filename & Copy Button */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-[#8378A6] hidden md:inline">
            {activeTab === 'fastapi'
              ? 'scan_router.py'
              : activeTab === 'django'
              ? 'views.py'
              : 'MetricDisplay.tsx'}
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-[#C9C2E0] hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="size-3 text-[#10B981]" />
                <span className="text-[#10B981]">Copied</span>
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

      {/* Code Window Body */}
      <div className="p-5 bg-[#090314]/90 overflow-x-auto min-h-[300px]">
        {activeTab === 'fastapi' && (
          <pre className="font-mono text-[13px] leading-[1.7] text-[#FFFFFF] m-0">
            <code>
              <span className="text-[#A78BFA]">from</span> fastapi <span className="text-[#A78BFA]">import</span> <span className="text-[#38BDF8]">FastAPI</span>, Depends, status{'\n'}
              <span className="text-[#A78BFA]">from</span> pydantic <span className="text-[#A78BFA]">import</span> <span className="text-[#38BDF8]">BaseModel</span>, Field{'\n\n'}
              app = <span className="text-[#38BDF8]">FastAPI</span>(title=<span className="text-[#34D399]">&quot;ArixPro System Gateway&quot;</span>, version=<span className="text-[#34D399]">&quot;1.0.0&quot;</span>){'\n\n'}
              <span className="text-[#A78BFA]">class</span> <span className="text-[#38BDF8]">ScanRequest</span>(BaseModel):{'\n'}
              {'    '}url: str = Field(..., description=<span className="text-[#34D399]">&quot;Target domain to inspect&quot;</span>){'\n'}
              {'    '}strict_mode: bool = <span className="text-[#A78BFA]">True</span>{'\n\n'}
              <span className="text-[#A78BFA]">class</span> <span className="text-[#38BDF8]">ScanResponse</span>(BaseModel):{'\n'}
              {'    '}status: str{'\n'}
              {'    '}checks_passed: int{'\n'}
              {'    '}total_checks: int{'\n'}
              {'    '}duration_ms: float{'\n\n'}
              @app.<span className="text-[#38BDF8]">post</span>(<span className="text-[#34D399]">&quot;/api/v1/scan&quot;</span>, response_model=ScanResponse){'\n'}
              <span className="text-[#A78BFA]">async def</span> <span className="text-[#FBBF24]">execute_security_scan</span>(payload: ScanRequest):{'\n'}
              {'    '}<span className="text-[#8378A6]"># Asynchronous non-blocking inspection pipeline</span>{'\n'}
              {'    '}<span className="text-[#A78BFA]">return</span> ScanResponse({'\n'}
              {'        '}status=<span className="text-[#34D399]">&quot;completed&quot;</span>,{'\n'}
              {'        '}checks_passed=34,{'\n'}
              {'        '}total_checks=38,{'\n'}
              {'        '}duration_ms=142.6{'\n'}
              {'    '})
            </code>
          </pre>
        )}

        {activeTab === 'django' && (
          <pre className="font-mono text-[13px] leading-[1.7] text-[#FFFFFF] m-0">
            <code>
              <span className="text-[#A78BFA]">from</span> rest_framework <span className="text-[#A78BFA]">import</span> viewsets, permissions{'\n'}
              <span className="text-[#A78BFA]">from</span> .models <span className="text-[#A78BFA]">import</span> JobPosting{'\n'}
              <span className="text-[#A78BFA]">from</span> .serializers <span className="text-[#A78BFA]">import</span> JobPostingSerializer{'\n\n'}
              <span className="text-[#A78BFA]">class</span> <span className="text-[#38BDF8]">JobPostingViewSet</span>(viewsets.ModelViewSet):{'\n'}
              {'    '}<span className="text-[#34D399]">&quot;&quot;&quot;{'\n'}
              {'    '}Django REST endpoint handling 100,000+ daily requests.{'\n'}
              {'    '}Cached via Redis; background ingestion handled by Celery.{'\n'}
              {'    '}&quot;&quot;&quot;</span>{'\n'}
              {'    '}serializer_class = JobPostingSerializer{'\n'}
              {'    '}permission_classes = [permissions.IsAuthenticatedOrReadOnly]{'\n\n'}
              {'    '}<span className="text-[#A78BFA]">def</span> <span className="text-[#FBBF24]">get_queryset</span>(<span className="text-[#A78BFA]">self</span>):{'\n'}
              {'        '}<span className="text-[#A78BFA]">return</span> ({'\n'}
              {'            '}JobPosting.objects{'\n'}
              {'            '}.select_related(<span className="text-[#34D399]">&apos;company&apos;</span>){'\n'}
              {'            '}.filter(is_active=<span className="text-[#A78BFA]">True</span>){'\n'}
              {'            '}.order_by(<span className="text-[#34D399]">&apos;-published_at&apos;</span>){'\n'}
              {'        '})
            </code>
          </pre>
        )}

        {activeTab === 'react' && (
          <pre className="font-mono text-[13px] leading-[1.7] text-[#FFFFFF] m-0">
            <code>
              <span className="text-[#A78BFA]">import</span> React <span className="text-[#A78BFA]">from</span> <span className="text-[#34D399]">&apos;react&apos;</span>;{'\n\n'}
              <span className="text-[#A78BFA]">interface</span> <span className="text-[#38BDF8]">MetricDisplayProps</span> {'{'}{'\n'}
              {'  '}checksPassed: number;{'\n'}
              {'  '}totalChecks: number;{'\n'}
              {'}'}{'\n\n'}
              <span className="text-[#A78BFA]">export function</span> <span className="text-[#FBBF24]">SystemMetric</span>({'{'} checksPassed, totalChecks {'}'}: MetricDisplayProps) {'{'}{'\n'}
              {'  '}<span className="text-[#A78BFA]">const</span> percentage = Math.<span className="text-[#38BDF8]">round</span>((checksPassed / totalChecks) * 100);{'\n\n'}
              {'  '}<span className="text-[#A78BFA]">return</span> ({'\n'}
              {'    '}&lt;div className=<span className="text-[#34D399]">&quot;flex items-baseline justify-between border-b border-white/10 pb-3&quot;</span>&gt;{'\n'}
              {'      '}&lt;span className=<span className="text-[#34D399]">&quot;font-mono text-sm text-[#8378A6]&quot;</span>&gt;Compliance&lt;/span&gt;{'\n'}
              {'      '}&lt;span className=<span className="text-[#34D399]">&quot;font-mono text-lg font-bold text-white tabular-nums&quot;</span>&gt;{'\n'}
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
