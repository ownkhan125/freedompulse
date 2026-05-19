"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal, RevealStagger, revealItem } from "@/components/anim/Reveal";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { Img } from "@/components/ui/Img";
import {
  FormFieldset,
  FormGrid,
  FormField,
  Input,
  Select,
  Checkbox,
} from "@/components/ui/Field";
import { getRelatedEvents } from "@/data/events";

function scrollToRegister() {
  if (typeof window === "undefined") return;
  const el = document.getElementById("register");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function EventDetailPage({ event }) {
  const related = getRelatedEvents(event.id, 3);

  return (
    <>
      <EventHero event={event} />
      <EventGallery event={event} />
      <EventOverview event={event} />
      <EventHighlights event={event} />
      <EventSchedule event={event} />
      <RegisterSection event={event} />
      <RelatedEvents related={related} />
    </>
  );
}

/* ── Hero/banner ─────────────────────────────────────────────────────── */
function EventHero({ event }) {
  return (
    <section className="relative isolate overflow-x-clip pt-28 pb-14 sm:pt-32 sm:pb-20">
      {/* Banner image */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Img
          src={event.image}
          alt=""
          aspect="aspect-auto"
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
        <div className="absolute left-[60%] top-[10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      </div>
      <div className="grain" />

      <Container className="relative">
        {/* Breadcrumb */}
        <Reveal y={8} duration={0.6}>
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45"
          >
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="text-accent">·</span>
            <Link href="/events" className="hover:text-foreground">
              Events
            </Link>
            <span className="text-accent">·</span>
            <span className="text-foreground/70 truncate max-w-[200px] sm:max-w-none">
              {event.title}
            </span>
          </nav>
        </Reveal>

        {/* Eyebrow */}
        <Reveal y={10} duration={0.7}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {event.categoryLabel}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
              {event.date.full}
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[1.02] tracking-tight">
          <span className="block overflow-hidden">
            <SplitText text={event.title} duration={0.85} stagger={0.025} />
          </span>
        </h1>

        <Reveal y={20} delay={0.6} duration={0.8}>
          <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
            {event.body}
          </p>
        </Reveal>

        {/* Quick-facts row */}
        <RevealStagger
          stagger={0.07}
          delay={0.8}
          className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 border-t border-foreground/10 pt-8 sm:grid-cols-4"
        >
          <QuickFact label="When" value={event.time} sub={event.date.full} />
          <QuickFact label="Where" value={event.location} sub={event.address} />
          <QuickFact label="Capacity" value={event.seats} sub="RSVP recommended" />
          <QuickFact label="Hosted by" value={event.host} sub="Free to attend" truncate />
        </RevealStagger>

        {/* CTAs */}
        <Reveal y={20} delay={1.05} className="mt-10 flex flex-wrap gap-3">
          <MagneticButton onClick={scrollToRegister} variant="solid">
            RSVP for this event
          </MagneticButton>
          <MagneticButton href="/events" variant="outline">
            All events
          </MagneticButton>
        </Reveal>
      </Container>
    </section>
  );
}

function QuickFact({ label, value, sub, truncate }) {
  return (
    <motion.div variants={revealItem} className="relative">
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
        {label}
      </div>
      <div
        className={`mt-2 font-display text-lg font-semibold tracking-tight sm:text-xl ${
          truncate ? "line-clamp-2" : ""
        }`}
      >
        {value}
      </div>
      {sub && (
        <div className="mt-1.5 text-[12px] leading-5 text-foreground/55">{sub}</div>
      )}
    </motion.div>
  );
}

/* ── Gallery ─────────────────────────────────────────────────────────── */
function EventGallery({ event }) {
  const [active, setActive] = useState(0);
  const imgs = event.gallery && event.gallery.length ? event.gallery : [event.image];

  return (
    <SectionFrame id="gallery" eyebrow="01 — Gallery" className="py-16 sm:py-24">
      <Container>
        <Reveal y={20}>
          <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Img
                src={imgs[active]}
                alt={`${event.title} — image ${active + 1}`}
                aspect="aspect-[16/9]"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background/80 to-transparent p-5">
              <span className="pointer-events-auto font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/65">
                {String(active + 1).padStart(2, "0")} / {String(imgs.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </Reveal>

        {imgs.length > 1 && (
          <RevealStagger
            stagger={0.06}
            delay={0.2}
            className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6"
          >
            {imgs.map((src, i) => (
              <motion.button
                key={src + i}
                variants={revealItem}
                type="button"
                onClick={() => setActive(i)}
                whileHover={{ y: -2 }}
                className={`group relative overflow-hidden rounded-xl border transition-colors duration-300 ${
                  active === i ? "border-accent" : "border-foreground/10 hover:border-foreground/30"
                }`}
              >
                <Img src={src} alt="" aspect="aspect-[4/3]" />
                <span
                  aria-hidden
                  className={`absolute inset-0 transition-colors duration-300 ${
                    active === i ? "bg-transparent" : "bg-background/40 group-hover:bg-background/10"
                  }`}
                />
              </motion.button>
            ))}
          </RevealStagger>
        )}
      </Container>
    </SectionFrame>
  );
}

/* ── Overview ────────────────────────────────────────────────────────── */
function EventOverview({ event }) {
  return (
    <SectionFrame id="overview" eyebrow="02 — Overview" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              About this event
            </Reveal>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
              <span className="block overflow-hidden">
                <SplitText text="What to expect." />
              </span>
            </h2>
            <Reveal y={20} delay={0.4} className="mt-8 space-y-5 text-base leading-7 text-foreground/75">
              {event.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>

          {/* Logistics aside */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Reveal y={20}>
              <div className="rounded-2xl border border-foreground/10 bg-surface/50 p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Logistics
                </div>
                <dl className="mt-6 space-y-5">
                  <LogisticsRow label="Date" value={event.date.full} />
                  <LogisticsRow label="Time" value={event.time} />
                  <LogisticsRow label="Venue" value={event.location} sub={event.address} />
                  <LogisticsRow label="Parking" value={event.parking} />
                  <LogisticsRow label="Accessibility" value={event.accessibility} />
                </dl>
                <div className="mt-7 border-t border-foreground/10 pt-5">
                  <MagneticButton onClick={scrollToRegister} variant="solid" size="sm">
                    RSVP
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </SectionFrame>
  );
}

function LogisticsRow({ label, value, sub }) {
  return (
    <div className="border-t border-foreground/10 pt-4 first:border-t-0 first:pt-0">
      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm leading-6 text-foreground/85">{value}</dd>
      {sub && <dd className="mt-1 text-[12px] leading-5 text-foreground/50">{sub}</dd>}
    </div>
  );
}

/* ── Highlights ──────────────────────────────────────────────────────── */
function EventHighlights({ event }) {
  return (
    <SectionFrame id="highlights" eyebrow="03 — Highlights" className="py-16 sm:py-24">
      <Container>
        <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          What you&apos;ll get
        </Reveal>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
          <span className="block overflow-hidden">
            <SplitText text="Event highlights." />
          </span>
        </h2>

        <RevealStagger
          stagger={0.08}
          delay={0.3}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 md:grid-cols-2 lg:grid-cols-3"
        >
          {event.highlights.map((h, i) => (
            <motion.div
              key={h}
              variants={revealItem}
              className="group relative flex items-start gap-4 bg-background p-7 transition-colors duration-500 hover:bg-surface"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/15">
                <svg className="h-4 w-4 text-accent" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8.5l3.5 3.5L13 4.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                  Highlight · {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-2 text-sm leading-6 text-foreground/85">{h}</p>
              </div>
              <span
                aria-hidden
                className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 group-hover:scale-x-100"
              />
            </motion.div>
          ))}
        </RevealStagger>
      </Container>
    </SectionFrame>
  );
}

/* ── Schedule ────────────────────────────────────────────────────────── */
function EventSchedule({ event }) {
  return (
    <SectionFrame id="schedule" eyebrow="04 — Schedule" className="py-16 sm:py-24">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Run of show
            </Reveal>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
              <span className="block overflow-hidden">
                <SplitText text="Hour by hour." />
              </span>
            </h2>
          </div>
          <Reveal y={20} delay={0.3}>
            <p className="text-base leading-7 text-foreground/70">
              Times are approximate, but the structure is real — and yes, we
              actually stick to it.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-5 top-0 h-full w-px bg-foreground/10 sm:left-[140px]"
          />
          <ol className="space-y-8">
            {event.schedule.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -10, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid grid-cols-[40px_1fr] items-start gap-6 sm:grid-cols-[140px_1fr] sm:gap-10"
              >
                {/* Time + dot */}
                <div className="relative">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/55 sm:text-xs">
                    {s.time}
                  </span>
                  <span
                    aria-hidden
                    className="absolute -right-[1px] top-1.5 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full border border-foreground/20 bg-background sm:left-auto sm:right-[-5px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                </div>
                {/* Block content */}
                <div className="rounded-2xl border border-foreground/10 bg-surface/40 p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold leading-tight tracking-tight sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </SectionFrame>
  );
}

/* ── Register / CTA ──────────────────────────────────────────────────── */
function RegisterSection({ event }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <SectionFrame id="register" eyebrow="05 — RSVP" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-gradient-to-br from-surface-2 via-surface to-background p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Register
              </Reveal>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="Save your seat." />
                </span>
                <span className="block overflow-hidden">
                  <SplitText text="Bring a neighbor." delay={0.2} />
                </span>
              </h2>
              <Reveal y={20} delay={0.4} className="mt-6 max-w-md text-base leading-7 text-foreground/70">
                Free event. RSVP helps us order enough chairs, coffee, and
                clipboards. Walk-ups always welcome.
              </Reveal>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-2xl border border-signal/40 bg-signal/[0.08] p-5 text-sm"
                >
                  <strong className="font-medium">You&apos;re in.</strong>{" "}
                  Confirmation on the way. We&apos;ll text reminders 24 hours
                  out if you opt in below.
                </motion.div>
              )}

              <form onSubmit={onSubmit} className="mt-10 space-y-5">
                <FormFieldset legend="Your details">
                  <FormGrid cols={2}>
                    <FormField label="First name" required>
                      {(id) => <Input id={id} name="firstName" placeholder="Avery" required />}
                    </FormField>
                    <FormField label="Last name" required>
                      {(id) => <Input id={id} name="lastName" placeholder="Mercer" required />}
                    </FormField>
                  </FormGrid>
                  <FormGrid cols={2}>
                    <FormField label="Email" required>
                      {(id) => (
                        <Input
                          id={id}
                          type="email"
                          name="email"
                          placeholder="you@yourstate.us"
                          required
                        />
                      )}
                    </FormField>
                    <FormField label="Phone">
                      {(id) => (
                        <Input id={id} type="tel" name="phone" placeholder="(503) 555-0123" />
                      )}
                    </FormField>
                  </FormGrid>
                  <FormGrid cols={2}>
                    <FormField label="Number of seats">
                      {(id) => (
                        <Select id={id} name="seats" defaultValue="1">
                          <option value="1">Just me</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5+">Five or more</option>
                        </Select>
                      )}
                    </FormField>
                    <FormField label="Accessibility needs">
                      {(id) => (
                        <Select id={id} name="accessibility" defaultValue="">
                          <option value="">No accommodations needed</option>
                          <option>Wheelchair access</option>
                          <option>ASL interpretation</option>
                          <option>Quiet room</option>
                          <option>Childcare</option>
                          <option>Other (describe below)</option>
                        </Select>
                      )}
                    </FormField>
                  </FormGrid>
                </FormFieldset>

                <FormFieldset legend="Reminders">
                  <Checkbox
                    name="optin_sms"
                    label="Text me a reminder 24 hours before the event."
                    hint="Message and data rates may apply. Reply STOP to opt out."
                  />
                </FormFieldset>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="max-w-md text-[12px] leading-5 text-foreground/45">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-accent underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                  <MagneticButton type="submit" variant="solid">
                    Confirm RSVP
                  </MagneticButton>
                </div>
              </form>
            </div>

            {/* Sidebar event card */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <Reveal y={20}>
                <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-background">
                  <Img src={event.image} alt={event.title} aspect="aspect-[4/3]" />
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                        {event.categoryLabel}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                        {event.seats}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                      {event.title}
                    </h3>
                    <ul className="mt-5 space-y-3 border-t border-foreground/10 pt-5 text-sm text-foreground/80">
                      <li className="flex items-baseline gap-3">
                        <span className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                          When
                        </span>
                        <span>
                          {event.date.full}
                          <span className="ml-2 text-foreground/55">{event.time}</span>
                        </span>
                      </li>
                      <li className="flex items-baseline gap-3">
                        <span className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                          Where
                        </span>
                        <span>
                          {event.location}
                          <span className="block text-foreground/55">{event.address}</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}

/* ── Related events ──────────────────────────────────────────────────── */
function RelatedEvents({ related }) {
  if (!related || related.length === 0) return null;
  return (
    <SectionFrame id="related" eyebrow="06 — Related" className="py-16 sm:py-24">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Related
            </Reveal>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
              <span className="block overflow-hidden">
                <SplitText text="Also coming up." />
              </span>
            </h2>
          </div>
          <Reveal y={20} delay={0.3}>
            <p className="text-base leading-7 text-foreground/70">
              Other shifts and gatherings happening near you this cycle.
            </p>
          </Reveal>
        </div>

        <RevealStagger stagger={0.08} delay={0.3} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((e) => (
            <motion.div key={e.id} variants={revealItem}>
              <Link
                href={`/events/${e.id}`}
                className="group block h-full overflow-hidden rounded-2xl border border-foreground/10 bg-surface transition-colors duration-500 hover:border-accent/40"
              >
                <div className="relative">
                  <Img src={e.image} alt={e.title} aspect="aspect-[16/10]" />
                  <div className="absolute left-4 top-4 flex flex-col items-center rounded-2xl border border-foreground/15 bg-background/80 px-3 py-2 text-center font-mono uppercase tracking-[0.2em] backdrop-blur">
                    <span className="text-[10px] text-foreground/55">{e.date.m}</span>
                    <span className="font-display text-2xl font-semibold tracking-tight">
                      {e.date.d}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                    {e.time}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-tight tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                    {e.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55">
                    {e.location}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-foreground transition-colors group-hover:text-accent">
                    Details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </RevealStagger>

        <Reveal delay={0.5} className="mt-12 flex justify-center">
          <MagneticButton href="/events" variant="outline">
            See all events
          </MagneticButton>
        </Reveal>
      </Container>
    </SectionFrame>
  );
}
