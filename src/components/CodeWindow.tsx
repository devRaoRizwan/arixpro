import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export const FASTAPI_CODE = `from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel, Field

app = FastAPI(title="ArixPro System Gateway", version="1.0.0")

class ScanRequest(BaseModel):
    url: str = Field(..., description="Target domain to inspect")
    strict_mode: bool = True

class ScanResponse(BaseModel):
    status: str
    checks_passed: int
    total_checks: int
    duration_ms: float

@app.post("/api/v1/scan", response_model=ScanResponse)
async def execute_security_scan(payload: ScanRequest):
    # Asynchronous check verification pipeline
    return ScanResponse(
        status="completed",
        checks_passed=34,
        total_checks=38,
        duration_ms=142.6
    )`

export const DJANGO_CODE = `from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import JobPosting
from .serializers import JobPostingSerializer

class JobPostingViewSet(viewsets.ModelViewSet):
    """
    High-throughput Django REST endpoint for indexed job searches.
    Cached via Redis layer; background sync handled by Celery.
    """
    serializer_class = JobPostingSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return (
            JobPosting.objects
            .select_related('company')
            .filter(is_active=True)
            .order_by('-published_at')
        )`

export const REACT_CODE = `import React, { useState } from 'react';

interface MetricDisplayProps {
  checksPassed: number;
  totalChecks: number;
}

export function SystemMetric({ checksPassed, totalChecks }: MetricDisplayProps) {
  const percentage = Math.round((checksPassed / totalChecks) * 100);

  return (
    <div className="flex items-baseline justify-between border-b border-[#E4DEF2] pb-3">
      <span className="font-mono text-sm uppercase text-[#6B6578]">Compliance</span>
      <span className="font-mono text-lg font-bold text-[#241044] tabular-nums">
        {checksPassed}/{totalChecks} ({percentage}%)
      </span>
    </div>
  );
}`

export function CodeWindow() {
  const [activeTab, setActiveTab] = useState<'fastapi' | 'django' | 'react'>('fastapi')
  const [copied, setCopied] = useState(false)

  const codeSnippets = {
    fastapi: {
      label: 'FastAPI (Python)',
      filename: 'scan_router.py',
      code: FASTAPI_CODE,
    },
    django: {
      label: 'Django 5 REST',
      filename: 'views.py',
      code: DJANGO_CODE,
    },
    react: {
      label: 'React 18 (TypeScript)',
      filename: 'MetricDisplay.tsx',
      code: REACT_CODE,
    },
  }

  const current = codeSnippets[activeTab]

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-window overflow-hidden shadow-2xl">
      {/* Code Window Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#1A0B33] px-4 py-3">
        {/* Left: Window Dots & Tabs */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-[#FF5F56]/80" />
            <span className="size-3 rounded-full bg-[#FFBD2E]/80" />
            <span className="size-3 rounded-full bg-[#27C93F]/80" />
          </div>

          <div className="hidden sm:flex items-center gap-1 border-l border-white/10 pl-4">
            {(['fastapi', 'django', 'react'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-[6px] font-mono text-[12px] font-medium transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'bg-white/15 text-white'
                    : 'text-[#C9C2E0]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {codeSnippets[tab].label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Filename & Copy Button */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-[#C9C2E0]/60 hidden md:inline">
            {current.filename}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-[6px] border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="size-3 text-[#1E9E4A]" />
                <span className="text-[#1E9E4A]">Copied</span>
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
      <div className="p-4 sm:p-6 overflow-x-auto">
        <pre className="font-mono text-[13px] leading-[1.65] text-[#F7F6FC]">
          <code>{current.code}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeWindow
