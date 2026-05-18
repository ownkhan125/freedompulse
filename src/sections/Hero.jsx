"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal, RevealStagger, revealItem } from "@/components/anim/Reveal";

const STATS = [
  { value: "22", suffix: "yrs", label: "Public service" },
  { value: "84", suffix: "k", label: "Voters reached" },
  { value: "0", suffix: "$", label: "Corporate PAC money" },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-x-clip overflow-y-hidden pt-28 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Animated SVG / gradient background */}
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0">
        <BackgroundOrnament />
      </motion.div>
      <div className="grain" />

      <motion.div style={{ y: yContent }} className="relative z-10">
        <Container>
          {/* Eyebrow */}
          <Reveal y={12} duration={0.8} className="flex flex-wrap items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60 sm:text-[11px] sm:tracking-[0.35em]">
              Congressional Campaign · 2026
            </span>
          </Reveal>

          {/* Headline */}
          <h1 className="mt-7 max-w-5xl font-display text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-tight">
            <span className="block overflow-hidden">
              <SplitText text="A new pulse" stagger={0.035} duration={0.85} />
            </span>
            <span className="block overflow-hidden">
              <SplitText
                text="for the people"
                stagger={0.035}
                duration={0.85}
                delay={0.25}
              />
            </span>
            <span className="block overflow-hidden">
              <SplitText
                text="who built this country."
                stagger={0.025}
                duration={0.8}
                delay={0.55}
              />
            </span>
          </h1>

          {/* Subline + CTAs */}
          <div className="mt-12 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <Reveal y={20} delay={0.9} duration={0.9}>
              <p className="max-w-xl text-base leading-7 text-foreground/70 sm:text-lg">
                FreedomPulse is the grassroots campaign for a Congress that
                shows up, listens hard, and delivers real action — for small
                businesses, working families, and every community that&apos;s
                been forgotten.
              </p>
            </Reveal>

            <RevealStagger
              delay={1.05}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.div variants={revealItem}>
                <MagneticButton
                  href="#volunteer"
                  variant="solid"
                  icon={<ArrowIcon />}
                >
                  Join the movement
                </MagneticButton>
              </motion.div>
              <motion.div variants={revealItem}>
                <MagneticButton href="#about" variant="outline">
                  Meet the candidate
                </MagneticButton>
              </motion.div>
            </RevealStagger>
          </div>

          {/* Stats row */}
          <Reveal delay={1.35} y={20} className="mt-20">
            <div className="relative grid grid-cols-2 gap-x-4 gap-y-8 border-t border-foreground/10 pt-8 sm:grid-cols-3 sm:gap-x-10">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.12, duration: 0.7 }}
                  className="group relative"
                >
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                      {s.value}
                    </span>
                    <span className="font-display text-2xl text-accent sm:text-3xl">
                      {s.suffix}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                    {s.label}
                  </div>
                  {/* Vertical ticks */}
                  {i < STATS.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute right-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent sm:block"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </Reveal>
        </Container>
      </motion.div>
    </section>
  );
}

function BackgroundOrnament() {
  return (
    <div className="absolute inset-0">
      {/* Radial gradient orb */}
      <div className="absolute left-[60%] top-[10%] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute -bottom-32 left-[10%] h-[420px] w-[420px] rounded-full bg-cobalt/10 blur-[100px]" />

      {/* Grid */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid-hero" width="64" height="64" patternUnits="userSpaceOnUse">
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-hero)" />
      </svg>

      {/* Drifting pulse waves */}
      <PulseWave className="absolute left-[-10%] right-[-10%] top-[58%] h-32 text-accent/50" delay={0} />
      <PulseWave className="absolute left-[-10%] right-[-10%] top-[72%] h-24 text-gold/35" delay={0.6} />

      {/* Side decorative ticks */}
      <div className="absolute left-6 top-32 hidden h-[60%] w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent md:block" />
      <div className="absolute right-6 top-32 hidden h-[60%] w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent md:block" />
    </div>
  );
}

function PulseWave({ className, delay = 0 }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
    >
      <motion.path
        d="M0 60 Q90 20 180 60 T360 60 T540 60 T720 60 T900 60 T1080 60 T1260 60 T1440 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.9, 0.9, 0.4] }}
        transition={{
          duration: 4,
          delay,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M0 60 L80 60 L100 30 L130 90 L160 30 L190 60 L1440 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.6"
        animate={{ x: [0, 60, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 + delay,
        }}
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 7 H12 M7 2 L12 7 L7 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
