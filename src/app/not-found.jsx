import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { MagneticButton } from '@/components/anim/MagneticButton'

export const metadata = {
  title: 'Page not found — FreedomPulse',
}

export default function NotFound() {
  return (
    <Container className="grid min-h-[70vh] place-items-center py-24">
      <div className="max-w-xl text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          404 · Lost on the trail
        </div>
        <h1 className="mt-5 font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl">
          Page not found.
        </h1>
        <p className="mt-5 text-base leading-7 text-foreground/70">
          The page you were looking for doesn&apos;t exist — or has been moved. The campaign
          itself, on the other hand, is right where you left it.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <MagneticButton href="/" variant="solid">
            Back to home
          </MagneticButton>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.25em] text-foreground/65 hover:text-foreground"
          >
            Report a broken link →
          </Link>
        </div>
      </div>
    </Container>
  )
}
