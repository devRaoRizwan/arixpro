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
    <article className="ui-card flex flex-col justify-between h-full overflow-hidden group">
      {/* Photo-First Container: Clean padding, no fake browser frame, object-contain, no cropping */}
      <Link
        to={`/work/${slug}`}
        className="block w-full bg-[#F7F6FC] p-4 border-b border-[#E4DEF2] flex items-center justify-center overflow-hidden"
      >
        <img
          src={image}
          alt={`${title} Interface`}
          width={800}
          height={500}
          className="w-full h-[220px] object-contain transition-transform duration-200 group-hover:scale-[1.01]"
          loading="lazy"
        />
      </Link>

      {/* Content Area - Equal Height Structure */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex flex-col flex-1">
          {/* Meta & Live Badge Row - Positioned Below Image, Not Overlaid */}
          <div className="flex items-center justify-between gap-2 mb-3">
            {isLive ? (
              <LiveBadge />
            ) : (
              <span className="font-mono text-[11px] text-[#6B6578]">Archived</span>
            )}
            {meta && (
              <span className="font-mono text-[11px] text-[#6B6578] truncate">
                {meta}
              </span>
            )}
          </div>

          {/* Title Area - Fixed Height for Grid Alignment */}
          <div className="min-h-[32px] flex items-baseline justify-between gap-2">
            <h3 className="font-sans text-[18px] font-semibold text-[#241044] group-hover:text-[#6336C5] transition-colors">
              <Link to={`/work/${slug}`}>{title}</Link>
            </h3>
            <span className="text-[#241044] group-hover:text-[#6336C5] transition-colors shrink-0">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          {/* Subtitle / Description - Flex-1 */}
          <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#4A4458] flex-1">
            {subtitle}
          </p>

          {/* Plain Text Status Note (e.g. JobHarvester maintenance status) */}
          {statusNote && (
            <p className="mt-2.5 font-sans text-[12px] text-[#6B6578] border-l-2 border-[#E4DEF2] pl-2.5">
              {statusNote}
            </p>
          )}
        </div>

        {/* Stack Tags Row - Fixed Height at Card Baseline */}
        <div className="mt-5 pt-4 border-t border-[#E4DEF2] flex flex-wrap items-center gap-1.5 h-[42px] overflow-hidden">
          {stack.map((item) => (
            <StackBadge key={item}>{item}</StackBadge>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
