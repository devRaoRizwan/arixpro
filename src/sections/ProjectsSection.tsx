import { projectExamples } from '@/data/projects'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function ProjectsSection() {
  return (
    <Section id="projects" className="scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Project-based learning"
          title="Don't Just Learn, Build"
          description="Watching someone else write code builds confidence, not skill. Every module at ArixPro ends with something that runs."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {projectExamples.map((project, index) => (
            <Reveal key={project.repo} delay={0.04 * index} className="h-full">
              <article className="group gloss flex h-full flex-col rounded-xl border border-surface-800 bg-surface-900 p-5 shadow-raise transition-[border-color,box-shadow] duration-300 hover:border-surface-600 hover:shadow-card">
                <p className="flex items-center gap-2 font-mono text-2xs text-content-500">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-content-500 transition-colors duration-300 group-hover:bg-accent-400"
                  />
                  {project.repo}
                </p>
                <h3 className="mt-3 text-base font-semibold text-content-100">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-content-400">{project.body}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-surface-800 bg-surface-850 px-1.5 py-0.5 font-mono text-[0.6rem] tracking-wide text-content-500"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
