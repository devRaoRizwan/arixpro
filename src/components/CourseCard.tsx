import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock, Signal } from 'lucide-react'
import type { Course } from '@/data/courses'
import { TechnologyBadge } from '@/components/ui/TechnologyBadge'

type CourseCardProps = {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const Icon = course.icon

  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group gloss relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-800 bg-surface-900 p-6 shadow-raise transition-[border-color,transform,box-shadow] duration-300 hover:border-surface-600 hover:shadow-card motion-safe:hover:-translate-y-1 sm:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 size-56 rounded-full bg-accent-400/[0.07] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-xl border border-surface-700 bg-surface-850 text-accent-400 transition-colors duration-300 group-hover:border-accent-400/30">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="size-5 text-content-500 transition-[color,transform] duration-300 group-hover:text-accent-400 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>

      <h3 className="relative mt-5 text-xl font-bold sm:text-[1.35rem]">{course.title}</h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-content-400">{course.description}</p>

      <dl className="relative mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-2xs">
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Difficulty</dt>
          <Signal className="size-3.5 text-content-500" aria-hidden="true" />
          <dd className="font-mono tracking-wide text-content-300">{course.level}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Duration</dt>
          <Clock className="size-3.5 text-content-500" aria-hidden="true" />
          <dd className="font-mono tracking-wide text-content-300">{course.duration}</dd>
        </div>
      </dl>

      <ul className="relative mt-6 flex flex-wrap gap-1.5">
        {course.technologies.map((tech) => (
          <li key={tech}>
            <TechnologyBadge label={tech} />
          </li>
        ))}
      </ul>

      <span className="relative mt-7 block border-t border-surface-800 pt-5 text-sm font-medium text-content-200 transition-colors group-hover:text-accent-400">
        View course
      </span>
    </Link>
  )
}
