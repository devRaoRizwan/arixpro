import { useState } from 'react'
import { Table } from './Tables'

type Category = 'All' | 'Backend' | 'Frontend' | 'Data' | 'DevOps'

interface ToolItem {
  category: Category
  tool: string
  whatItDoes: string
  whereUsed: string
}

const toolkitData: ToolItem[] = [
  // Backend
  {
    category: 'Backend',
    tool: 'Python 3.12',
    whatItDoes: 'Core language for low-latency backend services and async jobs',
    whereUsed: 'All backend APIs and services',
  },
  {
    category: 'Backend',
    tool: 'FastAPI',
    whatItDoes: 'Asynchronous web framework with automatic OpenAPI documentation',
    whereUsed: 'High-throughput APIs (SiteScopia, BOMWatcher)',
  },
  {
    category: 'Backend',
    tool: 'Django 5 & DRF',
    whatItDoes: 'Batteries-included framework for complex relational architectures',
    whereUsed: 'High-scale backends (JobHarvester, 100k+ req/day)',
  },
  {
    category: 'Backend',
    tool: 'Celery 5.4',
    whatItDoes: 'Distributed task queue for background jobs and scheduled tasks',
    whereUsed: 'Asynchronous scrapers, notifications, report pipelines',
  },
  // Frontend
  {
    category: 'Frontend',
    tool: 'React 18',
    whatItDoes: 'Component-driven client frontend with instant hot module replacement',
    whereUsed: 'ArixPro web platforms and client dashboards',
  },
  {
    category: 'Frontend',
    tool: 'TypeScript 5.x',
    whatItDoes: 'Static type verification across all frontend components and contracts',
    whereUsed: 'All production UI codebases and shared schemas',
  },
  // Data
  {
    category: 'Data',
    tool: 'PostgreSQL 16',
    whatItDoes: 'ACID-compliant primary relational database with JSONB indexing',
    whereUsed: 'Transactional storage and multi-tenant data',
  },
  {
    category: 'Data',
    tool: 'Redis 7.2',
    whatItDoes: 'In-memory data structure store for caching and task brokering',
    whereUsed: 'Session states, rate limiting, and Celery task broker',
  },
  {
    category: 'Data',
    tool: 'SQLAlchemy 2.0',
    whatItDoes: 'Python SQL toolkit and Object Relational Mapper for FastAPI',
    whereUsed: 'Async database transactions and query builders',
  },
  // DevOps
  {
    category: 'DevOps',
    tool: 'Docker',
    whatItDoes: 'Containerization for deterministic development and production builds',
    whereUsed: 'Every microservice container deploy',
  },
  {
    category: 'DevOps',
    tool: 'GitHub Actions',
    whatItDoes: 'Automated test execution, lint gating, and continuous delivery',
    whereUsed: 'Continuous integration: unit tests & lint gates',
  },
  {
    category: 'DevOps',
    tool: 'AWS',
    whatItDoes: 'Scalable cloud infrastructure (ECS, RDS, S3, CloudFront)',
    whereUsed: 'Application hosting and CDN delivery',
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
        <span className="font-sans font-semibold text-[#241044] whitespace-nowrap min-w-[140px] block">
          {item.tool}
        </span>
      ),
    },
    {
      key: 'category',
      header: 'Domain',
      render: (item: ToolItem) => (
        <span className="font-mono text-[12px] font-medium text-[#6336C5] whitespace-nowrap min-w-[90px] block">
          {item.category}
        </span>
      ),
    },
    {
      key: 'whatItDoes',
      header: 'Capability',
      render: (item: ToolItem) => (
        <span className="text-[#4A4458] whitespace-normal min-w-[240px] leading-relaxed block">
          {item.whatItDoes}
        </span>
      ),
    },
    {
      key: 'whereUsed',
      header: 'Production Application',
      render: (item: ToolItem) => (
        <span className="text-[#6B6578] whitespace-normal min-w-[200px] leading-relaxed block">
          {item.whereUsed}
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

      {/* Structured Table with horizontal scroll on mobile */}
      <Table columns={columns} data={filteredData} keyField="tool" />
    </div>
  )
}

export default ToolkitTable
