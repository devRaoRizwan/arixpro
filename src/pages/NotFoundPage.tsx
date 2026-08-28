import { ArrowRight } from 'lucide-react'
import { useSeo } from '@/lib/useSeo'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { CodeCard } from '@/components/CodeCard'

export function NotFoundPage() {
  useSeo({
    title: 'Page not found',
    description: 'The page you were looking for does not exist at ArixPro.',
  })

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="bg-grid absolute inset-0 opacity-50"
          style={{
            maskImage: 'radial-gradient(60% 60% at 50% 20%, black 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(60% 60% at 50% 20%, black 0%, transparent 100%)',
          }}
        />
      </div>

      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-mono text-2xs tracking-[0.24em] text-accent-400 uppercase">Error 404</p>
        <h1 className="text-gradient mt-5 text-[clamp(2rem,7vw,3.25rem)] leading-[1.05] font-extrabold">
          This route doesn't exist yet
        </h1>
        <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-content-400">
          The page you were looking for isn't here. Debugging starts the same way every time.
          Go back to something that works.
        </p>

        <div className="mt-9 w-full max-w-md">
          <CodeCard
            filename="router.py"
            lines={[
              'try:',
              '    render(request.path)',
              'except RouteNotFound:',
              '    return redirect("/")',
            ]}
          />
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/" size="lg" trailingIcon={ArrowRight}>
            Back to home
          </ButtonLink>
          <ButtonLink to="/courses" size="lg" variant="secondary">
            Browse courses
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
