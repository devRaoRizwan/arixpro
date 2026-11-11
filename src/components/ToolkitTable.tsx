import { useState } from 'react'
import { Table } from './Tables'

type Category = 'All' | 'Backend' | 'Frontend' | 'Data' | 'DevOps'

interface ToolItem {
  category: Category
  tool: string
  whatItDoes: string
  whereUsed: string
  versionOrNote: string
}

const toolkitData: ToolItem[] = [
  // Backend
  {
    category: 'Backend',
    tool: 'Python 3.12',
    whatItDoes: 'Core language for low-latency backend services and async jobs',
    whereUsed: 'All production backend APIs and microservices',
    versionOrNote: 'Python 3.12 (Strict typing)',
  },
  {
    category: 'Backend',
    tool: 'FastAPI',
    whatItDoes: 'Asynchronous web framework with automatic OpenAPI documentation',
    whereUsed: 'High-throughput APIs (SiteScopia, BOMWatcher)',
    versionOrNote: 'Async / Pydantic v2',
  },
  {
    category: 'Backend',
    tool: 'Django 5 & DRF',
    whatItDoes: 'Batteries-included framework for complex relational architectures',
    whereUsed: 'High-scale backends (JobHarvester, 100k+ req/day)',
    versionOrNote: 'Django 5.x / DRF 3.15',
  },
  {
    category: 'Backend',
    tool: 'Celery & RabbitMQ',
    whatItDoes: 'Distributed task queue for background jobs and scheduled tasks',
    whereUsed: 'Asynchronous scrapers, notifications, report pipelines',
    versionOrNote: 'Celery 5.4',
  },
  // Frontend
  {
    category: 'Frontend',
    tool: 'React 18 + Vite',
    whatItDoes: 'Component-driven client frontend with instant hot module replacement',
    whereUsed: 'ArixPro web platforms and client dashboards',
    versionOrNote: 'React 18 / 19',
  },
  {
    category: 'Frontend',
    tool: 'TypeScript',
    whatItDoes: 'Static type verification across all frontend components and contracts',
    whereUsed: 'All production UI codebases and shared schemas',
    versionOrNote: 'TypeScript 5.x',
  },
  {
    category: 'Frontend',
    tool: 'Next.js',
    whatItDoes: 'Full-stack React framework applied where SSR or public SEO is required',
    whereUsed: 'Public landing portals and editorial web apps',
    versionOrNote: 'App Router (Only where SSR needed)',
  },
  // Data
  {
    category: 'Data',
    tool: 'PostgreSQL',
    whatItDoes: 'ACID-compliant primary relational database with JSONB indexing',
    whereUsed: 'Production transactional storage and multi-tenant data',
    versionOrNote: 'PostgreSQL 16',
  },
  {
    category: 'Data',
    tool: 'Redis',
    whatItDoes: 'In-memory data structure store for caching and task brokering',
    whereUsed: 'Session states, rate limiting, and Celery result backend',
    versionOrNote: 'Redis 7.2',
  },
  {
    category: 'Data',
    tool: 'SQLAlchemy',
    whatItDoes: 'Python SQL toolkit and Object Relational Mapper for FastAPI',
    whereUsed: 'Async database transactions and query builders',
    versionOrNote: 'SQLAlchemy 2.0',
  },
  // DevOps
  {
    category: 'DevOps',
    tool: 'Docker',
    whatItDoes: 'Containerization for deterministic development and production builds',
    whereUsed: 'Every repository and microservice deploy',
    versionOrNote: 'Multi-stage lean images',
  },
  {
    category: 'DevOps',
    tool: 'GitHub Actions CI/CD',
    whatItDoes: 'Automated test execution, lint gating, and zero-downtime shipping',
    whereUsed: 'All project pipelines: tests & security scans must pass',
    versionOrNote: 'Automated CI/CD',
  },
  {
    category: 'DevOps',
    tool: 'AWS',
    whatItDoes: 'Scalable cloud infrastructure (ECS, RDS, S3, CloudFront)',
    whereUsed: 'Production application hosting and CDN delivery',
    versionOrNote: 'Infrastructure as Code',
  },
]

export function ToolkitTable() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')

  const filteredData =
    selectedCategory === 'All'
      ? toolkitData
      : toolkitData.filter((item) => item.category === selectedCategory)

  const columns = [
    {
      key: 'tool',
      header: 'Technology',
      render: (item: ToolItem) => (
        <span className="font-sans font-semibold text-[#241044]">
          {item.tool}
        </span>
      ),
    },
    {
      key: 'category',
      header: 'Domain',
      render: (item: ToolItem) => (
        <span className="font-mono text-[12px] text-[#6336C5]">
          {item.category}
        </span>
      ),
    },
    {
      key: 'whatItDoes',
      header: 'Capability',
      render: (item: ToolItem) => (
        <span className="text-[#4A4458]">{item.whatItDoes}</span>
      ),
    },
    {
      key: 'whereUsed',
      header: 'Production Application',
      render: (item: ToolItem) => (
        <span className="text-[#6B6578]">{item.whereUsed}</span>
      ),
    },
    {
      key: 'versionOrNote',
      header: 'Standard',
      render: (item: ToolItem) => (
        <span className="font-mono text-[12px] text-[#241044] tabular-nums">
          {item.versionOrNote}
        </span>
      ),
    },
  ]

  const categories: Category[] = ['All', 'Backend', 'Frontend', 'Data', 'DevOps']

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`h-[36px] px-3.5 rounded-[6px] font-sans text-[13px] font-medium transition-colors cursor-pointer border ${
              selectedCategory === cat
                ? 'bg-[#241044] text-white border-[#241044]'
                : 'bg-white text-[#4A4458] border-[#E4DEF2] hover:bg-[#F7F6FC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Structured Table */}
      <Table columns={columns} data={filteredData} keyField="tool" />
    </div>
  )
}

export default ToolkitTable
