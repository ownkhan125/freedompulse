"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal, RevealStagger, revealItem } from "@/components/anim/Reveal";
import { Marquee } from "@/components/anim/Marquee";

const QUOTES = [
  {
    quote:
      "Avery doesn't perform leadership — she shows up, takes the meeting, and brings the receipts. That's exactly what this district has been missing.",
    name: "Senator Marisol Cruz-Hale",
    title: "Former State Senate Majority Leader",
  },
  {
    quote:
      "I've watched her keep her promises for twenty years. Sending her to Congress is the easiest decision I've made this cycle.",
    name: "Mayor Davis Whitlock",
    title: "Mayor of Tilllamook",
  },
  {
    quote:
      "She actually reads the bills. In Washington, that's a rounding error away from radical.",
    name: "Hon. Patricia Nguyen",
    title: "Retired Circuit Court Judge",
  },
  {
    quote:
      "Avery understands working families because she's lived it. We're proud to stand with FreedomPulse.",
    name: "Local 218 — Plumbers & Pipefitters",
    title: "Endorsing Council",
  },
  {
    quote:
      "She refused our PAC money. Then she came back with a policy that's actually good for our customers and our workers.",
    name: "Renata Olu",
    title: "CEO, Northwest Independent Pharmacies",
  },
  {
    quote:
      "The first candidate who asked our farmers what they need before telling us what we need.",
    name: "Tom Cassady",
    title: "President, OR Cattlemen's Association",
  },
];

const ORGS = [
  "Northwest Farm Bureau",
  "Pacific Educators United",
  "Veterans of America — OR",
  "Small Business Coalition",
  "Healthcare Workers Local 49",
  "Tribal Council Alliance",
  "Working Families Party",
  "Rural Broadband Now",
  "OR Cattlemen's Association",
  "Local 218",
];

export function Endorsements() {
  return (
    <SectionFrame
      id="endorsements"
      eyebrow="03 — Endorsements"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]"
      />

      <Container>
        {/* Header */}
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Endorsements
            </Reveal>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-tight">
              <span className="block overflow-hidden">
                <SplitText text="The people who" />
              </span>
              <span className="block overflow-hidden">
                <SplitText text="know the work." delay={0.2} />
              </span>
            </h2>
          </div>
          <Reveal y={20} delay={0.3}>
            <p className="text-base leading-7 text-foreground/70">
              From mayors and labor councils to small-business owners and tribal nations — the support behind FreedomPulse comes from the people closest to the work.
            </p>
          </Reveal>
        </div>

        {/* Featured quote */}
        <Reveal delay={0.4} y={30} className="mt-16">
          <figure className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface/60 p-8 sm:p-12">
            <span
              aria-hidden
              className="absolute -top-6 left-8 font-display text-[160px] leading-none text-accent/15"
            >
              &ldquo;
            </span>
            <blockquote className="relative font-display text-2xl leading-[1.3] tracking-tight sm:text-3xl md:text-[2.2rem]">
              <SplitText
                text="If you want to know how a candidate will govern, watch them when no one's looking. Avery has been showing up for this district for two decades — long before there was a microphone."
                mode="words"
                stagger={0.04}
                duration={0.7}
              />
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 text-sm">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-foreground/20 bg-background font-display text-base font-semibold">
                MC
              </span>
              <div>
                <div className="font-medium">Senator Marisol Cruz-Hale</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                  Former State Senate Majority Leader
                </div>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        {/* Grid of smaller quotes */}
        <RevealStagger
          delay={0.4}
          stagger={0.08}
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {QUOTES.slice(1).map((q, i) => (
            <motion.figure
              key={q.name}
              variants={revealItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative flex h-full flex-col rounded-2xl border border-foreground/10 bg-background p-6 transition-colors duration-500 hover:border-accent/40"
            >
              <span
                aria-hidden
                className="absolute right-5 top-4 font-display text-5xl leading-none text-foreground/10 transition-colors duration-500 group-hover:text-accent/40"
              >
                &rdquo;
              </span>
              <blockquote className="text-sm leading-6 text-foreground/85">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-foreground/10 pt-4">
                <div className="text-sm font-medium">{q.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                  {q.title}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </RevealStagger>

        {/* Org marquee */}
        <Reveal delay={0.2} className="mt-20">
          <div className="mb-6 flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              Endorsing organizations
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              ·  partial list
            </span>
          </div>
          <div className="relative border-y border-foreground/10 py-6">
            <Marquee speed={48}>
              {ORGS.map((o) => (
                <span
                  key={o}
                  className="flex items-center gap-4 font-display text-xl tracking-tight text-foreground/65 sm:text-2xl"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {o}
                </span>
              ))}
            </Marquee>
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
          </div>
        </Reveal>
      </Container>
    </SectionFrame>
  );
}
