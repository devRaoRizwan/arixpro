import { useState } from 'react'
import { ProjectCard, type ProjectCardProps } from '../components/ProjectCard'
import { EmptyState } from '../components/EmptyState'

export function Work() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const projects: ProjectCardProps[] = [
    {
      slug: 'sitescopia',
      title: 'SiteScopia',
      subtitle: 'Production website analyzer executing 38 security & compliance checks per scan.',
      image:
        '/images/media-generation-sitescopia-dashboard-mock-0-7adb795b-9ffd-452c-a525-5c03f5c1d0f7.webp',
      stack: ['FastAPI', 'React 18', 'Pydantic v2', 'Tailwind CSS'],
      isLive: true,
      meta: '38 checks per scan • 142ms avg response',
    },
    {
      slug: 'jobharvester',
      title: 'JobHarvester',
      subtitle: 'Automated job board ingestion engine powered by Django, Celery, and PostgreSQL.',
      image:
        '/images/media-generation-jobharvester-board-mock-0-4ce00962-dbfa-4c30-9cc6-6df95f7d8b04.webp',
      stack: ['Django 5', 'PostgreSQL', 'Celery', 'Redis'],
      isLive: true,
      meta: 'Celery worker queues & relational indexing',
      statusNote: 'Note: Live site currently in active maintenance (no synthetic data)',
    },
    {
      slug: 'bomwatcher',
      title: 'BOMWatcher',
      subtitle: 'AI supply-chain scanner evaluating component obsolescence and compliance risk.',
      image:
        '/images/media-generation-bomwatcher-scanner-mock-0-70ac7d75-3093-461b-b864-a208b80a2497.webp',
      stack: ['FastAPI', 'LLM / RAG', 'PostgreSQL', 'Docker'],
      isLive: true,
      meta: 'RAG-driven BOM risk classification & part lifecycle',
    },
  ]

  const filterOptions = ['All', 'FastAPI', 'Django 5', 'React 18', 'Celery', 'PostgreSQL']

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) =>
          p.stack.some((s) => s.toLowerCase().includes(selectedFilter.toLowerCase()))
        )

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-[#E8E4F3] bg-[#FAF9FD]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Production Portfolio
            </span>
            <h1 className="mt-3 font-sans text-[36px] sm:text-[44px] font-bold text-[#160B28] tracking-tight leading-tight">
              Featured Systems &amp; Engineering Work
            </h1>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-[#504665]">
              Real software systems shipped to production. Photo-first inspection, transparent architectures, and verified source code.
            </p>
          </div>

          {/* Stack Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`h-[38px] px-4 rounded-full font-sans text-[14px] font-medium transition-all cursor-pointer border ${
                  selectedFilter === filter
                    ? 'bg-[#6336C5] text-white border-[#6336C5] shadow-sm'
                    : 'bg-white text-[#504665] border-[#E8E4F3] hover:border-[#6336C5] hover:text-[#6336C5]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Projects */}
      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          {filteredProjects.length === 0 ? (
            <EmptyState
              title="No projects match this filter"
              description="Try selecting 'All' or a different technology stack filter above."
              actionLabel="Reset to All"
              onAction={() => setSelectedFilter('All')}
            />
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Work
