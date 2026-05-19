"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal, RevealStagger, revealItem } from "@/components/anim/Reveal";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { Img } from "@/components/ui/Img";

const TIMELINE = [
  {
    year: "1976",
    title: "Born and raised in Northwest Oregon",
    body: "Fourth-generation Oregonian. Learned the value of work on a small dairy outside Tillamook before most kids knew where milk came from.",
  },
  {
    year: "1998",
    title: "Founded Northwest Family Veterinary Clinic",
    body: "Built a practice that grew from a single exam room into a regional resource serving 7,000 families and four rural counties.",
  },
  {
    year: "2004",
    title: "Animal welfare advocate — state legislature",
    body: "Authored testimony that helped shape Oregon's modernized animal welfare and rural infrastructure statutes.",
  },
  {
    year: "2007",
    title: "Elected to county school board",
    body: "Two-term chair. Brought balanced budgets and a doubled trade pathway program to a district that had been told it couldn't afford either.",
  },
  {
    year: "2014",
    title: "Led the rural broadband coalition",
    body: "Coordinated fourteen counties, three tribal nations, and two telecoms to bring fiber to communities the market had skipped.",
  },
  {
    year: "2019",
    title: "Authored the small-business resilience act",
    body: "A statewide framework giving Main Street businesses the same emergency relief access big employers already had.",
  },
  {
    year: "2026",
    title: "Running for U.S. Congress",
    body: "Because there is a difference between waiting for help and being the help. FreedomPulse is the next step.",
  },
];

const AWARDS = [
  {
    year: "2012",
    title: "Oregon Veterinary Welfare Award",
    body: "Recognized for two decades of mobile clinic work in underserved counties.",
  },
  {
    year: "2017",
    title: "Rural Champion Citation",
    body: "Oregon Rural Caucus, for the broadband coalition and resulting connectivity expansion.",
  },
  {
    year: "2021",
    title: "Small Business Advocate of the Year",
    body: "Pacific Northwest Independent Business Alliance, for resilience act authorship.",
  },
];

const EDUCATION = [
  {
    year: "1994",
    title: "B.S., Animal Science",
    school: "Oregon State University",
  },
  {
    year: "1998",
    title: "Doctor of Veterinary Medicine",
    school: "Washington State University, Pullman",
  },
  {
    year: "2011",
    title: "Certificate, Public Leadership",
    school: "Harvard Kennedy School Executive Program",
  },
];

const VALUES = [
  {
    n: "01",
    title: "Accountability",
    body: "If I can't show my work, I haven't earned your vote. Every commitment in writing, every vote on the record.",
  },
  {
    n: "02",
    title: "Evidence over ideology",
    body: "Policy should be tested against outcomes, not slogans. We follow what works, even when it's inconvenient.",
  },
  {
    n: "03",
    title: "Community first",
    body: "Washington is the destination, not the audience. Every week of every term, we come home and listen.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the candidate"
        title={"A lifelong\nOregonian.\nA stubborn optimist."}
        kicker="Avery K. Mercer has spent her career fixing the things people assume can't be fixed — small clinics, rural schools, broken broadband maps, and now the way Congress works for our communities."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Bio intro with portrait */}
      <SectionFrame id="bio" eyebrow="01 — Bio" className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-20">
            <Reveal y={20}>
              <div className="relative">
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-3xl border border-accent/40" />
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-foreground/10" />
                <Img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&auto=format&fit=crop"
                  alt="Portrait of Avery K. Mercer"
                  aspect="aspect-[3/4]"
                  className="relative rounded-3xl border border-foreground/10"
                />
              </div>
            </Reveal>

            <div>
              <Reveal
                y={10}
                className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
              >
                Why she's running
              </Reveal>

              <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="The work has been quiet." />
                </span>
                <span className="block overflow-hidden">
                  <SplitText text="The results have not." delay={0.18} />
                </span>
              </h2>

              <Reveal
                y={20}
                delay={0.4}
                className="mt-7 space-y-5 text-base leading-7 text-foreground/75"
              >
                <p>
                  For twenty-eight years, Avery has done the unglamorous work
                  that holds rural Oregon together — calving in the rain at
                  three in the morning, sitting through school board meetings
                  that went past midnight, and writing the kind of careful,
                  unfashionable legislation that quietly changes lives.
                </p>
                <p>
                  She didn&apos;t set out to run for office. She set out to
                  fix the broken thing in front of her, and then the next one,
                  and then the next. Congress is the same job at a different
                  scale — and after watching this district be talked at
                  instead of listened to for the better part of a decade, she
                  decided the next broken thing in front of her was
                  Washington itself.
                </p>
                <p>
                  FreedomPulse is the campaign that follows. It is funded by
                  neighbors, not corporations, and built on a single rule:
                  every promise shows its work.
                </p>
              </Reveal>

              <Reveal delay={0.6} className="mt-10 flex flex-wrap gap-3">
                <MagneticButton href="/volunteer" variant="solid">
                  Join the campaign
                </MagneticButton>
                <MagneticButton href="/contact" variant="outline">
                  Get in touch
                </MagneticButton>
              </Reveal>
            </div>
          </div>
        </Container>
      </SectionFrame>

      {/* Career timeline */}
      <SectionFrame
        id="career"
        eyebrow="02 — Career"
        className="py-20 sm:py-28"
      >
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal
                y={10}
                className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
              >
                A career of service
              </Reveal>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="Two decades. Seven counties." />
                </span>
                <span className="block overflow-hidden">
                  <SplitText
                    text="One stubborn habit of showing up."
                    delay={0.2}
                  />
                </span>
              </h2>
            </div>
            <Reveal y={20} delay={0.3}>
              <p className="text-base leading-7 text-foreground/70">
                A short, honest record. No origin myth — just the receipts of
                where the time went and what it built.
              </p>
            </Reveal>
          </div>

          <RevealStagger
            stagger={0.08}
            delay={0.3}
            className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 md:grid-cols-2"
          >
            {TIMELINE.map((t, i) => (
              <motion.article
                key={t.year}
                variants={revealItem}
                className="group relative bg-background p-7 transition-colors duration-500 hover:bg-surface"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/40">
                    Chapter / 0{i + 1}
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-tight text-accent">
                    {t.year}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/65">
                  {t.body}
                </p>
                <span
                  aria-hidden
                  className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 group-hover:scale-x-100"
                />
              </motion.article>
            ))}
          </RevealStagger>
        </Container>
      </SectionFrame>

      {/* Awards */}
      <SectionFrame
        id="awards"
        eyebrow="03 — Recognition"
        className="py-20 sm:py-28"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <Reveal
                y={10}
                className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
              >
                Recognition
              </Reveal>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="Awards are nice." />
                </span>
                <span className="block overflow-hidden">
                  <SplitText text="Receipts are better." delay={0.2} />
                </span>
              </h2>
              <Reveal y={20} delay={0.4} className="mt-6 max-w-md text-base leading-7 text-foreground/70">
                A few citations along the way — what each one actually meant
                in policy or for a specific community.
              </Reveal>

              <Reveal delay={0.5} className="mt-10">
                <Img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=80&auto=format&fit=crop"
                  alt="Community meeting"
                  aspect="aspect-[4/5]"
                  className="rounded-3xl border border-foreground/10"
                />
              </Reveal>
            </div>

            <RevealStagger stagger={0.1} className="space-y-4">
              {AWARDS.map((a, i) => (
                <motion.article
                  key={a.year}
                  variants={revealItem}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="group relative rounded-2xl border border-foreground/10 bg-surface/40 p-6 transition-colors duration-500 hover:border-accent/30 sm:p-8"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs tracking-widest text-foreground/45">
                      {a.year}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/35">
                      Award · 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {a.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-sm leading-6 text-foreground/70">
                    {a.body}
                  </p>
                </motion.article>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </SectionFrame>

      {/* Values */}
      <SectionFrame
        id="values"
        eyebrow="04 — What drives her"
        className="py-20 sm:py-28"
      >
        <Container>
          <Reveal
            y={10}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
          >
            What drives Avery
          </Reveal>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,3.8vw,3.4rem)] font-semibold leading-[1.05] tracking-tight">
            <span className="block overflow-hidden">
              <SplitText text="Three rules." />
            </span>
            <span className="block overflow-hidden">
              <SplitText text="Held in public. Always." delay={0.2} />
            </span>
          </h2>

          <RevealStagger
            stagger={0.1}
            delay={0.3}
            className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 md:grid-cols-3"
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.n}
                variants={revealItem}
                className="group relative bg-background p-7 transition-colors duration-500 hover:bg-surface"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/40">
                  Value · {v.n}
                </span>
                <h3 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/65">
                  {v.body}
                </p>
                <span
                  aria-hidden
                  className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 group-hover:scale-x-100"
                />
              </motion.div>
            ))}
          </RevealStagger>
        </Container>
      </SectionFrame>

      {/* Education */}
      <SectionFrame
        id="education"
        eyebrow="05 — Education"
        className="py-20 sm:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <Reveal
                y={10}
                className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
              >
                Education
              </Reveal>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="The credentials behind" />
                </span>
                <span className="block overflow-hidden">
                  <SplitText text="the work." delay={0.2} />
                </span>
              </h2>

              <Reveal y={20} delay={0.4} className="mt-12 space-y-0">
                {EDUCATION.map((e) => (
                  <div
                    key={e.title}
                    className="group relative flex items-baseline gap-6 border-t border-foreground/10 py-5 last:border-b"
                  >
                    <span className="w-16 shrink-0 font-mono text-xs tracking-widest text-foreground/45 transition-colors group-hover:text-accent">
                      {e.year}
                    </span>
                    <div>
                      <div className="text-base font-medium">{e.title}</div>
                      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                        {e.school}
                      </div>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal y={30} delay={0.5}>
              <Img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80&auto=format&fit=crop"
                alt="University campus"
                aspect="aspect-[4/5]"
                className="rounded-3xl border border-foreground/10"
              />
            </Reveal>
          </div>
        </Container>
      </SectionFrame>

      {/* Closing CTA */}
      <SectionFrame
        id="cta"
        eyebrow="06 — Join in"
        className="py-24 sm:py-32"
      >
        <Container>
          <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-gradient-to-br from-surface-2 via-surface to-background p-10 sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]"
            />
            <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <Reveal
                  y={10}
                  className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
                >
                  Walk the trail with us
                </Reveal>
                <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.02] tracking-tight">
                  <span className="block overflow-hidden">
                    <SplitText text="The next chapter" />
                  </span>
                  <span className="block overflow-hidden">
                    <SplitText text="starts with a neighbor." delay={0.2} />
                  </span>
                </h2>
                <Reveal
                  y={20}
                  delay={0.4}
                  className="mt-6 max-w-xl text-base leading-7 text-foreground/70"
                >
                  Whether you have ten hours a week or ten minutes, there is a
                  role for you on this campaign. Start where you are.
                </Reveal>
                <Reveal delay={0.5} className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton href="/volunteer" variant="solid">
                    Volunteer
                  </MagneticButton>
                  <MagneticButton href="/events" variant="outline">
                    Find an event
                  </MagneticButton>
                </Reveal>
              </div>
              <Reveal y={30} delay={0.6}>
                <Img
                  src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900&q=80&auto=format&fit=crop"
                  alt="Community gathering"
                  aspect="aspect-[5/6]"
                  className="rounded-2xl border border-foreground/10"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </SectionFrame>
    </>
  );
}
