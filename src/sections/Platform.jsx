"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal, RevealStagger, revealItem } from "@/components/anim/Reveal";

const PILLARS = [
  {
    n: "01",
    title: "Main Street, not Wall Street",
    body: "Every small business deserves a fair shot at capital, talent, and federal contracts — without lobbyists getting first pick.",
  },
  {
    n: "02",
    title: "Accountability, not theater",
    body: "Demanding receipts from Washington. Real votes, real attendance, real budgets — published in plain language.",
  },
  {
    n: "03",
    title: "Communities, not corporations",
    body: "Putting the people who live, work, and raise families in the district first on every decision.",
  },
];

const ISSUES = [
  {
    title: "Economic growth",
    body: "Tax relief for working families and startups. A federal procurement pipeline that prioritizes local manufacturers.",
    icon: IconChart,
  },
  {
    title: "Education",
    body: "Tripling funding for STEM and trade pathways. Loan forgiveness tied to public service in rural communities.",
    icon: IconBook,
  },
  {
    title: "Healthcare",
    body: "Capping insulin and inhaler costs, opening Medicare buy-in at 55, and funding rural hospital infrastructure.",
    icon: IconPulse,
  },
  {
    title: "Forest & land stewardship",
    body: "Modernized federal forestry, faster fire response, and partnerships with tribal nations to protect watersheds.",
    icon: IconTree,
  },
  {
    title: "Housing",
    body: "Targeted federal credits to build starter homes, convert vacant offices, and restore rural workforce housing.",
    icon: IconHouse,
  },
  {
    title: "Public safety",
    body: "Funding our first responders, reforming sentencing, and tackling fentanyl at the supply level — not in our schools.",
    icon: IconShield,
  },
  {
    title: "Maritime & transport",
    body: "Reinvesting in working ports, rail freight, and the roads that move our food, fuel, and futures.",
    icon: IconShip,
  },
];

export function Platform() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  return (
    <SectionFrame
      id="platform"
      eyebrow="02 — Platform"
      className="py-28 sm:py-36"
    >
      <Container>
        {/* Header */}
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              The Platform
            </Reveal>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-tight">
              <span className="block overflow-hidden">
                <SplitText text="Plain promises." />
              </span>
              <span className="block overflow-hidden">
                <SplitText text="Stubborn delivery." delay={0.2} />
              </span>
            </h2>
          </div>
          <Reveal y={20} delay={0.3}>
            <p className="text-base leading-7 text-foreground/70">
              Seven priority files, three guiding pillars, and a single rule: every line item shows its work. No corporate PAC money. No surprises.
            </p>
          </Reveal>
        </div>

        {/* Pillars */}
        <RevealStagger
          stagger={0.1}
          delay={0.4}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 md:grid-cols-3"
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.n}
              variants={revealItem}
              className="group relative bg-background p-7 transition-colors duration-500 hover:bg-surface"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/40">
                  Pillar / {p.n}
                </span>
                <motion.span
                  aria-hidden
                  className="h-1 w-1 rounded-full bg-accent"
                  whileHover={{ scale: 2 }}
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/65">
                {p.body}
              </p>
              <span
                aria-hidden
                className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 group-hover:scale-x-100"
              />
            </motion.div>
          ))}
        </RevealStagger>

        {/* Issues — connected timeline */}
        <div ref={ref} className="relative mt-24">
          <Reveal y={10} className="mb-10 flex items-baseline justify-between">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Seven priority files
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              File 01 / 07
            </span>
          </Reveal>

          {/* Vertical scroll line */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-5 top-0 h-full w-px bg-foreground/10 md:left-1/2 md:-translate-x-1/2"
            />
            <motion.div
              aria-hidden
              style={{ height: lineHeight }}
              className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-accent via-accent/60 to-transparent md:left-1/2 md:-translate-x-1/2"
            />

            <ul className="relative space-y-12 md:space-y-20">
              {ISSUES.map((issue, i) => (
                <IssueRow key={issue.title} issue={issue} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}

function IssueRow({ issue, index }) {
  const isLeft = index % 2 === 0;
  const Icon = issue.icon;
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 ${
        isLeft ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      {/* Node */}
      <span
        aria-hidden
        className="absolute left-5 top-7 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-foreground/15 bg-background md:left-1/2"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
      </span>

      {/* Content */}
      <div
        className={`pl-12 md:pl-0 ${
          isLeft ? "md:pr-16 md:text-right" : "md:pl-16"
        }`}
      >
        <div
          className={`mb-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40 ${
            isLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <span>File · 0{index + 1}</span>
        </div>
        <h4 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {issue.title}
        </h4>
        <p className="mt-3 max-w-md text-sm leading-6 text-foreground/70">
          {issue.body}
        </p>
      </div>

      {/* Visual */}
      <div
        className={`hidden md:block ${
          isLeft ? "md:pl-16" : "md:pr-16 md:text-right"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02, rotate: isLeft ? 1.5 : -1.5 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="group relative inline-block aspect-square w-44 overflow-hidden rounded-2xl border border-foreground/10 bg-surface p-5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cobalt/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Icon className="relative h-full w-full text-foreground/85" />
        </motion.div>
      </div>
    </motion.li>
  );
}

/* Custom icons */
function IconChart({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <motion.path
        d="M8 48 L24 32 L36 40 L56 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <circle cx="56" cy="12" r="3" fill="#ff3a5c" />
      <line x1="8" y1="56" x2="56" y2="56" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.2" />
    </svg>
  );
}
function IconBook({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path d="M10 14 H30 V52 H10 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M34 14 H54 V52 H34 Z" stroke="currentColor" strokeWidth="2" />
      <line x1="14" y1="22" x2="26" y2="22" stroke="currentColor" strokeOpacity="0.5" />
      <line x1="14" y1="28" x2="26" y2="28" stroke="currentColor" strokeOpacity="0.5" />
      <line x1="38" y1="22" x2="50" y2="22" stroke="currentColor" strokeOpacity="0.5" />
      <line x1="38" y1="28" x2="50" y2="28" stroke="currentColor" strokeOpacity="0.5" />
      <circle cx="32" cy="14" r="2" fill="#ff3a5c" />
    </svg>
  );
}
function IconPulse({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M4 32 H18 L22 20 L28 44 L34 28 L38 32 H60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="48" r="3" fill="#ff3a5c" />
    </svg>
  );
}
function IconTree({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M32 8 L46 28 H38 L50 46 H40 L40 56 H24 L24 46 H14 L26 28 H18 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="2" fill="#e6b94a" />
    </svg>
  );
}
function IconHouse({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path d="M10 30 L32 12 L54 30 V54 H10 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M26 54 V40 H38 V54" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="32" x2="58" y2="32" stroke="currentColor" strokeOpacity="0.3" />
    </svg>
  );
}
function IconShield({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M32 6 L54 14 V32 C54 44 44 54 32 58 C20 54 10 44 10 32 V14 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M22 32 L29 39 L42 26"
        stroke="#ff3a5c"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconShip({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path d="M10 44 H54 L48 54 H16 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M32 10 V44" stroke="currentColor" strokeWidth="2" />
      <path d="M32 14 L48 36 H32 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="4" y1="58" x2="60" y2="58" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="3 4" />
    </svg>
  );
}
