'use client'

import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { MagneticButton } from '@/components/anim/MagneticButton'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('[App error]:', error)
  }, [error])

  return (
    <Container className="grid min-h-[70vh] place-items-center py-24">
      <div className="max-w-xl text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          Something broke
        </div>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          That didn&apos;t go as planned.
        </h1>
        <p className="mt-5 text-base leading-7 text-foreground/70">
          We hit an unexpected error rendering this page. The campaign team has been notified —
          try again, or head home and we&apos;ll keep things moving.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <MagneticButton onClick={() => reset()} variant="solid">
            Try again
          </MagneticButton>
          <MagneticButton href="/" variant="outline">
            Go home
          </MagneticButton>
        </div>
      </div>
    </Container>
  )
}
