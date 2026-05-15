"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal } from "@/components/anim/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const constraintRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <SectionFrame
      id="newsletter"
      eyebrow="05 — Join In"
      className="relative py-28 sm:py-36"
    >
      <Container>
        <div
          ref={constraintRef}
          className="relative isolate overflow-hidden rounded-[28px] border border-foreground/10 bg-gradient-to-br from-surface-2 via-surface to-background p-8 sm:p-14 lg:p-20"
        >
          {/* Background grid + glow */}
          <BgPattern />

          <div className="relative grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Stay in the loop
              </Reveal>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="Get the pulse." />
                </span>
                <span className="block overflow-hidden text-foreground/65">
                  <SplitText text="Once a week." delay={0.18} />
                </span>
                <span className="block overflow-hidden italic text-accent">
                  <SplitText text="No spin." delay={0.36} />
                </span>
              </h2>

              <Reveal y={20} delay={0.5} className="mt-6 max-w-md text-base leading-7 text-foreground/70">
                Updates from the campaign trail, where we&apos;ll be next, and what bills we&apos;re tracking — straight to your inbox.
              </Reveal>

              {/* Form */}
              <Reveal delay={0.7} className="mt-10">
                <form
                  onSubmit={onSubmit}
                  className="group relative flex items-stretch overflow-hidden rounded-full border border-foreground/15 bg-background/60 backdrop-blur-md transition-colors focus-within:border-accent/60"
                >
                  <span className="grid place-items-center pl-5 text-foreground/50">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourstate.us"
                    className="w-full bg-transparent px-4 py-4 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none"
                  />
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.96 }}
                    className="group/btn relative m-1.5 inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-accent px-6 text-[12px] font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-[color-mix(in_srgb,var(--accent)_88%,white)]"
                  >
                    <span className="relative z-10">
                      {sent ? "On the list" : "Sign me up"}
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
                    />
                  </motion.button>
                </form>
                <p className="mt-3 pl-5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                  We&apos;ll never share your address.
                </p>
              </Reveal>
            </div>

            {/* Right column: draggable pulse badge */}
            <div className="relative hidden h-[360px] md:block">
              <DraggablePulseBadge constraintRef={constraintRef} />
            </div>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}

function DraggablePulseBadge({ constraintRef }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintRef}
        dragElastic={0.35}
        dragTransition={{ bounceStiffness: 220, bounceDamping: 16 }}
        whileHover={{ scale: 1.05 }}
        whileDrag={{ scale: 1.06, cursor: "grabbing" }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ x, y }}
        className="absolute right-4 top-4 grid h-48 w-48 cursor-grab place-items-center rounded-full border border-foreground/15 bg-background/60 backdrop-blur-md lg:h-56 lg:w-56"
      >
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full text-foreground/70"
        >
          <defs>
            <path
              id="circle-text"
              d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
            />
          </defs>
          <motion.text
            fontSize="11"
            fontFamily="var(--font-jetbrains)"
            letterSpacing="4"
            fill="currentColor"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          >
            <textPath href="#circle-text">
              FREEDOMPULSE · 2026 · FREEDOMPULSE · 2026 ·
            </textPath>
          </motion.text>
        </svg>

        <div className="relative grid place-items-center">
          <svg viewBox="0 0 80 80" className="h-12 w-12 text-accent" fill="none">
            <motion.path
              d="M5 40 H18 L24 24 L34 60 L44 32 L50 40 H75"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.4,
              }}
            />
          </svg>
          <span className="mt-2 font-display text-sm font-semibold tracking-tight">
            Drag me
          </span>
        </div>
      </motion.div>

      {/* Static decorations */}
      <div
        aria-hidden
        className="absolute bottom-4 left-0 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40"
      >
        <span className="h-px w-8 bg-foreground/30" />
        Physics enabled
      </div>
    </>
  );
}

function BgPattern() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-cobalt/12 blur-[100px]"
      />
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.06]"
      >
        <defs>
          <pattern id="grid-news" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-news)" />
      </svg>
    </>
  );
}
