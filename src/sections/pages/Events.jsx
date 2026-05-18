"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal, RevealStagger, revealItem } from "@/components/anim/Reveal";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { Img } from "@/components/ui/Img";
import { cn } from "@/lib/cn";
import { EVENTS, EVENT_CATEGORIES as CATEGORIES } from "@/data/events";

export function EventsPage() {
  const [filter, setFilter] = useState("all");

  const events = useMemo(
    () => (filter === "all" ? EVENTS : EVENTS.filter((e) => e.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Events"
        title={"Show up.\nBring questions.\nLeave with a plan."}
        kicker="Every week, somewhere in the district. Town halls, coffee mornings, listening sessions, and the kind of door-knocking that actually wins races."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Filter bar + counts */}
      <SectionFrame
        id="upcoming"
        eyebrow="01 — Upcoming"
        className="py-16 sm:py-24"
      >
        <Container>
          <div className="grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal
                y={10}
                className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
              >
                Upcoming
              </Reveal>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="The next six weeks" />
                </span>
                <span className="block overflow-hidden">
                  <SplitText text="on the trail." delay={0.2} />
                </span>
              </h2>
            </div>
            <Reveal y={20} delay={0.3}>
              <p className="text-base leading-7 text-foreground/70">
                Every event is free. RSVPs help us bring enough chairs, coffee,
                and clipboards. Walk-ups always welcome.
              </p>
            </Reveal>
          </div>

          {/* Filter pills */}
          <Reveal delay={0.4} className="mt-12 -mx-2 overflow-x-auto pb-2">
            <div className="flex min-w-max items-center gap-2 px-2">
              {CATEGORIES.map((c) => {
                const active = c.id === filter;
                const count =
                  c.id === "all"
                    ? EVENTS.length
                    : EVENTS.filter((e) => e.category === c.id).length;
                return (
                  <button
                    key={c.id}
                    onClick={() => setFilter(c.id)}
                    className={cn(
                      "group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
                      active
                        ? "border-accent bg-accent text-background"
                        : "border-foreground/15 bg-transparent text-foreground/70 hover:border-foreground/40 hover:text-foreground",
                    )}
                  >
                    <span>{c.label}</span>
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-normal",
                        active ? "text-background/70" : "text-foreground/40",
                      )}
                    >
                      {String(count).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Cards */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {events.map((e, i) => (
                <EventCard key={e.id} event={e} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {events.length === 0 && (
            <Reveal className="mt-16 rounded-2xl border border-dashed border-foreground/15 p-12 text-center">
              <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-foreground/50">
                No events in this category yet
              </p>
              <p className="mt-3 text-foreground/65">
                Check back next week, or{" "}
                <a href="/contact" className="text-accent underline">
                  suggest one near you
                </a>
                .
              </p>
            </Reveal>
          )}
        </Container>
      </SectionFrame>

      {/* Host an event CTA */}
      <SectionFrame
        id="host"
        eyebrow="02 — Host"
        className="py-20 sm:py-28"
      >
        <Container>
          <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-gradient-to-br from-surface-2 via-surface to-background p-10 sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -bottom-20 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[120px]"
            />
            <div className="relative grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
              <Reveal y={30}>
                <Img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=80&auto=format&fit=crop"
                  alt="House party gathering"
                  aspect="aspect-[4/5]"
                  className="rounded-2xl border border-foreground/10"
                />
              </Reveal>
              <div>
                <Reveal
                  y={10}
                  className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
                >
                  Host the campaign
                </Reveal>
                <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
                  <span className="block overflow-hidden">
                    <SplitText text="Have a living room?" />
                  </span>
                  <span className="block overflow-hidden">
                    <SplitText text="That'll do." delay={0.2} />
                  </span>
                </h2>
                <Reveal y={20} delay={0.4} className="mt-6 max-w-md text-base leading-7 text-foreground/70">
                  Eight to forty neighbors, one evening, and Avery answers
                  every question. We bring the snacks, you bring the
                  conversation. Sign up to host — we&apos;ll match you with a
                  date that works.
                </Reveal>
                <Reveal delay={0.5} className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton href="/contact" variant="solid">
                    Host an event
                  </MagneticButton>
                  <MagneticButton href="/volunteer" variant="outline">
                    Volunteer instead
                  </MagneticButton>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </SectionFrame>
    </>
  );
}

function EventCard({ event, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Link
        href={`/events/${event.id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-surface transition-colors duration-500 hover:border-accent/40"
      >
        <div className="relative">
          <Img src={event.image} alt={event.title} aspect="aspect-[16/10]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/75 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {event.categoryLabel}
            </span>
          </div>
          <div className="absolute left-4 top-4 flex flex-col items-center rounded-2xl border border-foreground/15 bg-background/80 px-3 py-2 text-center font-mono uppercase tracking-[0.2em] backdrop-blur">
            <span className="text-[10px] text-foreground/55">{event.date.m}</span>
            <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {event.date.d}
            </span>
            <span className="text-[9px] text-foreground/40">{event.date.y}</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
            {event.time}
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
            {event.title}
          </h3>
          <p className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 11s4-3.5 4-7a4 4 0 10-8 0c0 3.5 4 7 4 7z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="6" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            {event.location}
          </p>
          <p className="mt-4 text-sm leading-6 text-foreground/70">
            {event.body}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
              {event.seats}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
              Details & RSVP
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
