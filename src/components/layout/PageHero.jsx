"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal } from "@/components/anim/Reveal";

/**
 * Shared inner-page hero: eyebrow, big split headline, kicker, optional breadcrumbs.
 */
export function PageHero({
  eyebrow,
  title,
  kicker,
  crumbs = [{ label: "Home", href: "/" }],
}) {
  return (
    <section className="relative isolate overflow-x-clip pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[60%] top-[10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/12 blur-[120px]" />
        <div className="absolute -bottom-32 left-[10%] h-[320px] w-[320px] rounded-full bg-cobalt/10 blur-[100px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
          <defs>
            <pattern
              id="page-grid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M64 0L0 0 0 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-grid)" />
        </svg>
      </div>
      <div className="grain" />

      <Container className="relative">
        {/* Breadcrumbs */}
        {crumbs && crumbs.length > 0 && (
          <Reveal y={8} duration={0.6}>
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45"
            >
              {crumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-foreground">
                      {c.label}
                    </Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span className="text-accent">·</span>}
                </span>
              ))}
              <span className="text-accent">·</span>
              <span className="text-foreground/70">{eyebrow}</span>
            </nav>
          </Reveal>
        )}

        {/* Eyebrow dot */}
        <Reveal y={10} duration={0.7}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60 sm:text-[11px] sm:tracking-[0.35em]">
              {eyebrow}
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-semibold leading-[1.02] tracking-tight">
          {title.split("\n").map((line, i) => (
            <motion.span
              key={i}
              className="block overflow-hidden"
              initial={false}
            >
              <SplitText
                text={line}
                duration={0.85}
                stagger={0.03}
                delay={0.15 + i * 0.2}
              />
            </motion.span>
          ))}
        </h1>

        {kicker && (
          <Reveal y={20} delay={0.8} duration={0.8}>
            <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
              {kicker}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
