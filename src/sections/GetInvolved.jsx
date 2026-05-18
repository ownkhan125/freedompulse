"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal, RevealStagger, revealItem } from "@/components/anim/Reveal";
import { MagneticButton } from "@/components/anim/MagneticButton";

const ACTIONS = [
  {
    id: "volunteer",
    n: "01",
    title: "Volunteer",
    body: "Knock doors, run a phone bank, drop literature, host a meet-and-greet. We&apos;ll match you with a captain in your precinct.",
    cta: "Sign up to volunteer",
    accent: "var(--cobalt)",
  },
  {
    id: "donate",
    n: "02",
    title: "Donate",
    body: "100% of donations stay in district. No corporate PACs. Even $5 keeps a phone bank running for an hour.",
    cta: "Chip in",
    accent: "var(--accent)",
  },
  {
    id: "events",
    n: "03",
    title: "Show up",
    body: "Town halls, ride-alongs with first responders, listening sessions on every corner. Bring questions.",
    cta: "See upcoming events",
    accent: "var(--gold)",
  },
];

const EVENTS = [
  {
    date: "JUN 04",
    title: "Town Hall — Astoria Maritime Workers",
    location: "ILWU Hall, Astoria · 6:30 PM",
  },
  {
    date: "JUN 11",
    title: "Coffee with Avery — Small Business Roundtable",
    location: "The Press Room, Hillsboro · 8:00 AM",
  },
  {
    date: "JUN 19",
    title: "Juneteenth Community BBQ",
    location: "Mt. Tabor Park, Portland · 2:00 PM",
  },
  {
    date: "JUN 27",
    title: "Walk & Talk — Forest Stewardship Loop",
    location: "Tillamook State Forest · 9:00 AM",
  },
];

export function GetInvolved() {
  return (
    <SectionFrame
      id="volunteer"
      eyebrow="04 — Get Involved"
      className="py-28 sm:py-36"
    >
      <Container>
        {/* Header */}
        <div className="grid items-end gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Get Involved
            </Reveal>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.05] tracking-tight">
              <span className="block overflow-hidden">
                <SplitText text="This is a campaign" />
              </span>
              <span className="block overflow-hidden">
                <SplitText
                  text="of three things:"
                  delay={0.18}
                />
              </span>
            </h2>
          </div>
          <Reveal y={20} delay={0.3}>
            <p className="text-base leading-7 text-foreground/70">
              Time. Treasure. Truth. Pick one — pick all three — and help us out-organize the noise.
            </p>
          </Reveal>
        </div>

        {/* Action cards */}
        <RevealStagger
          delay={0.4}
          stagger={0.1}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {ACTIONS.map((a) => (
            <ActionCard key={a.id} action={a} />
          ))}
        </RevealStagger>

        {/* Events list */}
        <div id="events" className="mt-28">
          <Reveal y={10} className="mb-8 flex items-baseline justify-between">
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Upcoming events
            </h3>
            <a
              href="#events-all"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60 hover:text-foreground"
            >
              Full calendar
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>

          <RevealStagger
            stagger={0.07}
            delay={0.2}
            className="overflow-hidden rounded-2xl border border-foreground/10"
          >
            {EVENTS.map((e, i) => (
              <motion.a
                key={e.title}
                href="#rsvp"
                variants={revealItem}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group flex items-center gap-6 border-b border-foreground/10 px-5 py-5 last:border-b-0 sm:gap-10 sm:px-8 sm:py-7"
              >
                <div className="grid grid-cols-2 items-baseline gap-1 font-display text-lg font-semibold tracking-tight sm:text-xl">
                  <span className="text-foreground/80">{e.date.split(" ")[0]}</span>
                  <span className="text-accent">{e.date.split(" ")[1]}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-base font-medium sm:text-lg">
                    {e.title}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                    {e.location}
                  </div>
                </div>
                <span
                  aria-hidden
                  className="hidden text-2xl text-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent sm:block"
                >
                  →
                </span>
              </motion.a>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </SectionFrame>
  );
}

function ActionCard({ action }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rx = useSpring(useTransform(y, [0, 1], [6, -6]), {
    stiffness: 180,
    damping: 18,
  });
  const ry = useSpring(useTransform(x, [0, 1], [-6, 6]), {
    stiffness: 180,
    damping: 18,
  });
  const [hover, setHover] = useState(false);

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    x.set(0.5);
    y.set(0.5);
    setHover(false);
  }

  return (
    <motion.a
      id={action.id}
      href={`#${action.id}-form`}
      variants={revealItem}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative block overflow-hidden rounded-3xl border border-foreground/10 bg-surface p-8 transition-colors duration-500 hover:border-foreground/25"
    >
      {/* Spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${x.get() * 100}% ${
            y.get() * 100
          }%, ${action.accent}22, transparent 60%)`,
        }}
      />

      <div className="relative flex items-baseline justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/40">
          Way {action.n}
        </span>
        <motion.span
          aria-hidden
          className="h-2 w-2 rounded-full"
          animate={{
            backgroundColor: hover ? action.accent : "rgba(245,243,238,0.2)",
            scale: hover ? 1.4 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <h3 className="relative mt-12 font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl">
        {action.title}
      </h3>
      <p
        className="relative mt-4 text-sm leading-6 text-foreground/70"
        dangerouslySetInnerHTML={{ __html: action.body }}
      />

      <div className="relative mt-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          {action.cta}
          <motion.span
            aria-hidden
            animate={{ x: hover ? 6 : 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            style={{ color: action.accent }}
          >
            →
          </motion.span>
        </span>
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: action.accent }}
        >
          /go
        </span>
      </div>

      {/* Bottom accent line */}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left"
        style={{ backgroundColor: action.accent, scaleX: hover ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.a>
  );
}
