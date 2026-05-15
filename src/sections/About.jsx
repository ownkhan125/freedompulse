"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal, RevealStagger, revealItem } from "@/components/anim/Reveal";
import { MagneticButton } from "@/components/anim/MagneticButton";

const CREDENTIALS = [
  { year: "1998", text: "Founded Northwest Family Veterinary Clinic" },
  { year: "2007", text: "Elected to county school board, two-term chair" },
  { year: "2014", text: "Led rural broadband coalition across 14 counties" },
  { year: "2019", text: "Authored statewide small-business resilience act" },
  { year: "2024", text: "Launched FreedomPulse, the people-funded campaign" },
];

export function About() {
  const portraitRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <SectionFrame
      id="about"
      eyebrow="01 — About"
      className="py-28 sm:py-36"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Portrait / decorative card */}
          <div className="relative">
            <motion.div
              ref={portraitRef}
              style={{ rotate }}
              className="relative mx-auto aspect-[3/4] w-full max-w-md"
            >
              {/* Frame */}
              <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-3xl border border-accent/40" />
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-foreground/10" />

              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-surface">
                <PortraitArt />

                {/* Tag */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-3 py-1 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">
                    Candidate
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                  <div>
                    <div className="font-display text-2xl font-semibold tracking-tight">
                      Avery K. Mercer
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                      Veterinarian · Civic leader · Mother of three
                    </div>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/40">
                    OR-01
                  </span>
                </div>
              </div>

              {/* Floating signature element */}
              <motion.div
                aria-hidden
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 -top-6 hidden h-20 w-20 place-items-center rounded-2xl border border-foreground/10 bg-background/80 backdrop-blur md:grid"
              >
                <svg viewBox="0 0 40 40" className="h-10 w-10 text-gold" fill="none">
                  <motion.path
                    d="M5 30 C 10 10, 18 32, 22 18 S 32 28, 35 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Copy */}
          <div>
            <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Meet your candidate
            </Reveal>

            <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-tight">
              <span className="block overflow-hidden">
                <SplitText text="Service before slogans." duration={0.8} />
              </span>
              <span className="block overflow-hidden text-foreground/65">
                <SplitText
                  text="Action before applause."
                  duration={0.8}
                  delay={0.2}
                />
              </span>
            </h2>

            <Reveal y={20} delay={0.4} className="mt-6 max-w-xl text-base leading-7 text-foreground/70">
              For more than two decades, Avery has built a life around the
              quiet, stubborn work of showing up — for animals, for neighbors,
              for the families that hold rural America together. FreedomPulse
              is the next chapter of that work: bringing the same hands-on
              clarity to Washington.
            </Reveal>

            {/* Timeline */}
            <RevealStagger
              delay={0.5}
              stagger={0.07}
              className="mt-10 space-y-0"
            >
              {CREDENTIALS.map((c, i) => (
                <motion.div
                  key={c.year}
                  variants={revealItem}
                  className="group relative flex items-baseline gap-6 border-t border-foreground/10 py-4 last:border-b"
                >
                  <span className="w-16 shrink-0 font-mono text-xs tracking-widest text-foreground/45 transition-colors group-hover:text-accent">
                    {c.year}
                  </span>
                  <span className="text-[15px] leading-7 text-foreground/85">
                    {c.text}
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-0 bg-accent/[0.04] transition-[width] duration-500 group-hover:w-full"
                  />
                </motion.div>
              ))}
            </RevealStagger>

            <Reveal delay={0.75} className="mt-10">
              <MagneticButton href="#platform" variant="outline">
                See the platform
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}

function PortraitArt() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-surface-2 via-surface to-background">
      <svg
        viewBox="0 0 400 540"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="port-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff3a5c" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5b8cff" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="port-grad2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#e6b94a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <radialGradient id="port-glow" cx="50%" cy="38%" r="40%">
            <stop offset="0%" stopColor="#ff3a5c" stopOpacity="0.45" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <rect width="400" height="540" fill="url(#port-grad)" />
        <ellipse cx="200" cy="200" rx="160" ry="200" fill="url(#port-glow)" />
        <rect width="400" height="540" fill="url(#port-grad2)" />

        {/* Abstract face/silhouette */}
        <motion.g
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <circle cx="200" cy="220" r="92" fill="#0a0e1a" opacity="0.4" />
          <circle
            cx="200"
            cy="220"
            r="92"
            stroke="#f5f3ee"
            strokeOpacity="0.15"
            fill="none"
          />
          <path
            d="M108 380 Q200 320 292 380 L292 540 L108 540 Z"
            fill="#0a0e1a"
            fillOpacity="0.45"
          />
          <path
            d="M108 380 Q200 320 292 380"
            stroke="#f5f3ee"
            strokeOpacity="0.15"
            fill="none"
          />
        </motion.g>

        {/* Concentric pulse rings around head */}
        {[120, 150, 180].map((r, i) => (
          <motion.circle
            key={r}
            cx="200"
            cy="220"
            r={r}
            stroke="#ff3a5c"
            strokeOpacity={0.15 - i * 0.04}
            fill="none"
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.15 }}
          />
        ))}

        {/* Crosshair marks */}
        <g stroke="#f5f3ee" strokeOpacity="0.4">
          <line x1="20" y1="20" x2="20" y2="34" />
          <line x1="20" y1="20" x2="34" y2="20" />
          <line x1="380" y1="20" x2="380" y2="34" />
          <line x1="380" y1="20" x2="366" y2="20" />
          <line x1="20" y1="520" x2="20" y2="506" />
          <line x1="20" y1="520" x2="34" y2="520" />
          <line x1="380" y1="520" x2="380" y2="506" />
          <line x1="380" y1="520" x2="366" y2="520" />
        </g>
      </svg>
    </div>
  );
}
