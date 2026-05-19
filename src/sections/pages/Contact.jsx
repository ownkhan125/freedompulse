"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
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
  Textarea,
  Checkbox,
} from "@/components/ui/Field";
import { cn } from "@/lib/cn";

const REACHES = [
  {
    label: "General",
    value: "hello@freedompulse.org",
    href: "mailto:hello@freedompulse.org",
    hint: "Questions, comments, ideas",
  },
  {
    label: "Press",
    value: "press@freedompulse.org",
    href: "mailto:press@freedompulse.org",
    hint: "Interviews, statements, credentials",
  },
  {
    label: "Volunteer",
    value: "volunteer@freedompulse.org",
    href: "mailto:volunteer@freedompulse.org",
    hint: "Shifts, captains, training",
  },
  {
    label: "Phone",
    value: "(415) 555-2026",
    href: "tel:+14155552026",
    hint: "Weekdays 10am–7pm PT",
  },
];

const FAQ = [
  {
    q: "Is FreedomPulse funded by corporate PACs?",
    a: "No. We do not accept corporate PAC contributions. Every dollar comes from individual donors, and we publish the rolling totals quarterly.",
  },
  {
    q: "How do you handle my personal information?",
    a: "Read our privacy policy in full. The short version: we use your information to coordinate the campaign and never sell or share it with third parties for marketing.",
  },
  {
    q: "Can I host a fundraiser or house party?",
    a: "Absolutely — that's one of the most powerful things you can do. Use the contact form or email volunteer@freedompulse.org and we'll partner with you on logistics.",
  },
  {
    q: "Do you have yard signs?",
    a: "Yes. Once we're 60 days from the primary, sign drops begin. Volunteer or sign up for the newsletter to be the first to grab one.",
  },
  {
    q: "How do I report an issue with the campaign or website?",
    a: "Email feedback@freedompulse.org. We read every message and respond within two business days.",
  },
  {
    q: "Is the campaign hiring?",
    a: "We are. Field organizers, communications, and digital are our current priorities. Email volunteer@freedompulse.org for current openings and we'll route you to the hiring lead.",
  },
];

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={"Real questions.\nReal answers.\nNo gatekeepers."}
        kicker="Send a note. A real person on the campaign reads every message — and writes back, usually within two business days."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Reach grid */}
      <SectionFrame id="reach" eyebrow="01 — Reach us" className="py-16 sm:py-24">
        <Container>
          <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Reach us
          </Reveal>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
            <span className="block overflow-hidden">
              <SplitText text="Pick a line. Any line." />
            </span>
          </h2>

          <RevealStagger
            stagger={0.07}
            delay={0.3}
            className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {REACHES.map((r) => (
              <motion.a
                key={r.label}
                href={r.href}
                variants={revealItem}
                className="group relative block bg-background p-6 transition-colors duration-500 hover:bg-surface sm:p-7"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                  {r.label}
                </span>
                <div className="mt-5 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {r.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-foreground/55">{r.hint}</p>
                <span
                  aria-hidden
                  className="absolute right-5 top-5 inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </motion.a>
            ))}
          </RevealStagger>
        </Container>
      </SectionFrame>

      {/* Form + office image */}
      <SectionFrame id="message" eyebrow="02 — Send a message" className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Send a message
              </Reveal>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="Tell us what's on your mind." />
                </span>
              </h2>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-2xl border border-signal/40 bg-signal/[0.08] p-5 text-sm text-foreground"
                >
                  <strong className="font-medium">Got it — thanks.</strong>{" "}
                  We received your note and someone will reply within two
                  business days.
                </motion.div>
              )}

              <form onSubmit={onSubmit} className="mt-10 space-y-6">
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
                        <Input
                          id={id}
                          type="tel"
                          name="phone"
                          placeholder="(503) 555-0123"
                        />
                      )}
                    </FormField>
                  </FormGrid>
                </FormFieldset>

                <FormFieldset legend="Your message">
                  <FormField label="How can we help?" required>
                    {(id) => (
                      <Textarea
                        id={id}
                        name="message"
                        placeholder="Questions, ideas, requests — anything."
                        rows={6}
                        required
                      />
                    )}
                  </FormField>
                </FormFieldset>

                <FormFieldset legend="Consent">
                  <Checkbox
                    name="sms_promo"
                    label="Text me about campaign news and shift opportunities."
                    hint="Message and data rates may apply. Reply STOP to opt out."
                  />
                </FormFieldset>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="max-w-md text-[12px] leading-5 text-foreground/45">
                    By submitting, you agree to our{" "}
                    <a href="/privacy-policy" className="text-accent underline">
                      privacy policy
                    </a>
                    .
                  </p>
                  <MagneticButton type="submit" variant="solid">
                    Send message
                  </MagneticButton>
                </div>
              </form>
            </div>

            {/* Side panel */}
            <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <Reveal y={20}>
                <Img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop"
                  alt="Campaign field office"
                  aspect="aspect-[4/5]"
                  className="rounded-3xl border border-foreground/10"
                />
              </Reveal>
              <Reveal y={20} delay={0.15}>
                <div className="rounded-2xl border border-foreground/10 bg-surface/50 p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    HQ
                  </div>
                  <p className="mt-3 text-sm leading-6 text-foreground/80">
                    FreedomPulse for Congress
                    <br />
                    2026 NE Alberta St, Suite 4
                    <br />
                    Portland, OR 97211
                  </p>
                  <p className="mt-4 text-sm leading-6 text-foreground/55">
                    Walk-ins welcome weekdays 10am–7pm.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </SectionFrame>

      {/* FAQ */}
      <SectionFrame id="faq" eyebrow="03 — FAQ" className="py-16 sm:py-24">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Frequently asked
              </Reveal>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="Questions, answered." />
                </span>
              </h2>
            </div>
            <Reveal y={20} delay={0.3}>
              <p className="text-base leading-7 text-foreground/70">
                The shortlist of things we get asked most often. Anything
                missing? Send a message above and we&apos;ll add it.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 overflow-hidden rounded-2xl border border-foreground/10">
            {FAQ.map((item, i) => (
              <FAQItem key={item.q} item={item} index={i} />
            ))}
          </div>
        </Container>
      </SectionFrame>
    </>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={cn(
        "border-b border-foreground/10 last:border-b-0",
        open && "bg-accent/[0.03]",
      )}
    >
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="group flex w-full items-center gap-6 px-6 py-6 text-left sm:px-8 sm:py-7"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="flex-1 font-display text-lg font-medium tracking-tight sm:text-xl">
          {item.q}
        </h3>
        <span
          aria-hidden
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-foreground/15 transition-all duration-300",
            open && "border-accent bg-accent text-background",
          )}
        >
          <motion.svg
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-7 text-sm leading-7 text-foreground/75 sm:px-8 sm:pl-[88px]">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
