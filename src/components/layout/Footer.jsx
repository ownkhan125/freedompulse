"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/anim/Reveal";

const CONTACT = [
  { label: "Phone", value: "(415) 555-2026", href: "tel:+14155552026" },
  { label: "Email", value: "hello@freedompulse.org", href: "mailto:hello@freedompulse.org" },
  { label: "Mail", value: "PO Box 2026, Portland, OR 97201" },
];

const COLUMNS = [
  {
    title: "Campaign",
    links: [
      { label: "About", href: "#about" },
      { label: "Platform", href: "#platform" },
      { label: "Endorsements", href: "#endorsements" },
      { label: "Press", href: "#press" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { label: "Volunteer", href: "#volunteer" },
      { label: "Events", href: "#events" },
      { label: "Donate", href: "#donate" },
      { label: "Yard signs", href: "#signs" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Newsletter", href: "#newsletter" },
      { label: "Instagram", href: "#" },
      { label: "X / Twitter", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-foreground/10 bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />
      <Container className="relative z-10 pt-20 pb-10">
        {/* Big closing line */}
        <Reveal className="mb-14 max-w-4xl">
          <p className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            The pulse of freedom <span className="italic text-accent">starts</span> with you.
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-xl font-semibold tracking-tight">
              Freedom<span className="text-accent">Pulse</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-foreground/60">
              A grassroots campaign powered by neighbors, small businesses, and a belief that government should listen first and deliver always.
            </p>
            <ul className="mt-6 space-y-1.5 text-sm text-foreground/70">
              {CONTACT.map((c) => (
                <li key={c.label} className="flex items-baseline gap-3">
                  <span className="w-12 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a href={c.href} className="hover:text-foreground">
                      {c.value}
                    </a>
                  ) : (
                    <span>{c.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                {col.title}
              </div>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-foreground/75 transition-colors hover:text-foreground"
                    >
                      <span className="h-px w-3 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-foreground/10 pt-6 text-xs text-foreground/45 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} FreedomPulse. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.2em]">
            Paid for by FreedomPulse for Congress · Not authorized by any candidate or candidate&apos;s committee.
          </p>
        </div>
      </Container>
    </footer>
  );
}
