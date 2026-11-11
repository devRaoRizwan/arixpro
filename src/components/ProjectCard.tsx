import { Link } from 'react-router-dom'
import { LiveBadge, StackBadge } from './Badges'
import { ArrowUpRight } from 'lucide-react'

export interface ProjectCardProps {
  slug: string
  title: string
  subtitle: string
  description?: string
  image: string
  stack: string[]
  isLive?: boolean
  meta?: string
  statusNote?: string
}

export function ProjectCard({
  slug,
  title,
  subtitle,
  image,
  stack,
  isLive = true,
  meta,
  statusNote,
}: ProjectCardProps) {
  return (
    <article className="agency-card flex flex-col overflow-hidden group">
      {/* Photo-First Container with Browser Frame Header */}
      <Link
        to={`/work/${slug}`}
        className="relative block w-full overflow-hidden bg-[#FAF9FD] border-b border-[#E8E4F3]"
      >
        {/* Browser Top Bar with 3 Dots */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#FAF9FD] border-b border-[#E8E4F3]">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-[#E8E4F3] group-hover:bg-[#FF5F56] transition-colors" />
            <span className="size-2.5 rounded-full bg-[#E8E4F3] group-hover:bg-[#FFBD2E] transition-colors" />
            <span className="size-2.5 rounded-full bg-[#E8E4F3] group-hover:bg-[#27C93F] transition-colors" />
          </div>

          <span className="font-mono text-[10px] text-[#6B6578] truncate">
            {slug}.arixpro.com
          </span>

          <div className="size-2" />
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            width={800}
            height={500}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />

          {/* Live Badge Top-Left */}
          {isLive && (
            <div className="absolute top-3 left-3">
              <LiveBadge />
            </div>
          )}

          {statusNote && (
            <div className="absolute bottom-3 left-3 right-3 rounded-[6px] bg-[#160B28]/90 px-2.5 py-1 text-[11px] font-mono text-white backdrop-blur-sm">
              {statusNote}
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-sans text-[18px] font-bold text-[#160B28] group-hover:text-[#6336C5] transition-colors">
              <Link to={`/work/${slug}`}>
                {title}
              </Link>
            </h3>
            <span className="text-[#6B6578] group-hover:text-[#6336C5] transition-colors">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          <p className="mt-1.5 font-sans text-[14px] leading-relaxed text-[#504665] line-clamp-2">
            {subtitle}
          </p>

          {meta && (
            <p className="mt-3 font-mono text-[11px] font-medium text-[#6336C5]">
              {meta}
            </p>
          )}
        </div>

        {/* Stack Tags Below */}
        <div className="mt-5 pt-4 border-t border-[#E8E4F3] flex flex-wrap gap-1.5">
          {stack.map((item) => (
            <StackBadge key={item}>{item}</StackBadge>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
