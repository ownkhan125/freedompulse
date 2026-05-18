"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal } from "@/components/anim/Reveal";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { Img } from "@/components/ui/Img";
import {
  FormFieldset,
  FormGrid,
  FormField,
  Input,
  Select,
  Textarea,
  Checkbox,
  CheckboxGrid,
} from "@/components/ui/Field";

const COUNTIES = [
  "Baker", "Benton", "Clackamas", "Clatsop", "Columbia", "Coos", "Crook",
  "Curry", "Deschutes", "Douglas", "Gilliam", "Grant", "Harney", "Hood River",
  "Jackson", "Jefferson", "Josephine", "Klamath", "Lake", "Lane", "Lincoln",
  "Linn", "Malheur", "Marion", "Morrow", "Multnomah", "Polk", "Sherman",
  "Tillamook", "Umatilla", "Union", "Wallowa", "Wasco", "Washington",
  "Wheeler", "Yamhill",
];

const REGIONS = [
  "Portland Metro",
  "Willamette Valley",
  "Oregon Coast",
  "Southern Oregon",
  "Central Oregon",
  "Eastern Oregon",
  "Columbia Gorge",
];

const EXPERIENCE = [
  "First-time volunteer",
  "Yes — local race (school board, county, mayor)",
  "Yes — state legislature",
  "Yes — federal race (House, Senate, Presidential)",
  "Yes — issue campaign",
  "Field organizer / staff",
];

const INTERESTS = [
  { id: "doors", label: "Door knocking", hint: "Weekend shifts, paired with a captain" },
  { id: "phones", label: "Phone banking", hint: "Evenings, work from home or office" },
  { id: "text", label: "Text banking", hint: "1-hour shifts on your phone" },
  { id: "host", label: "Host an event", hint: "House parties, coffee meet-ups" },
  { id: "signs", label: "Yard signs & literature", hint: "Drops in your neighborhood" },
  { id: "data", label: "Data & research", hint: "Spreadsheets, mapping, opposition" },
  { id: "design", label: "Design & content", hint: "Graphics, video, social" },
  { id: "drive", label: "Voter transport", hint: "Day-of-election rides to the polls" },
];

const AVAILABILITY = [
  "1–2 hours per week",
  "3–4 hours per week",
  "5–10 hours per week",
  "10+ hours per week",
  "Election day only",
];

export function VolunteerPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title={"Your time.\nOur best chance.\nBoth get used well."}
        kicker="No corporate PACs means we win this with neighbors talking to neighbors. Sign up below and a captain in your precinct will reach out within two business days."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Intro band */}
      <SectionFrame
        id="intro"
        eyebrow="01 — Why volunteer"
        className="py-16 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal
                y={10}
                className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
              >
                Every door knocked matters
              </Reveal>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.8vw,3.4rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="Three hours can change" />
                </span>
                <span className="block overflow-hidden">
                  <SplitText text="a precinct." delay={0.2} />
                </span>
              </h2>
              <Reveal
                y={20}
                delay={0.4}
                className="mt-6 max-w-xl space-y-4 text-base leading-7 text-foreground/75"
              >
                <p>
                  Field campaigns are won the old-fashioned way: on porches,
                  at coffee shops, and on the phone. Whether you have an hour
                  a week or your whole weekend, we will match you with the
                  right shift and the right captain.
                </p>
                <p>
                  First-time volunteer? You&apos;ll be paired with someone who
                  has done this before. We&apos;ll text you a script, a route,
                  and a meet-up spot. The rest is conversation.
                </p>
              </Reveal>
            </div>
            <Reveal y={30} delay={0.4}>
              <Img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=80&auto=format&fit=crop"
                alt="Volunteers organizing"
                aspect="aspect-[4/5]"
                className="rounded-3xl border border-foreground/10"
              />
            </Reveal>
          </div>
        </Container>
      </SectionFrame>

      {/* Form */}
      <SectionFrame
        id="form"
        eyebrow="02 — Sign up"
        className="py-16 sm:py-24"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.7fr_1fr]">
            <div>
              <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Join the team
              </Reveal>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="Sign up — it takes a minute." />
                </span>
              </h2>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-2xl border border-signal/40 bg-signal/[0.08] p-5 text-sm text-foreground"
                >
                  <strong className="font-medium">You&apos;re in.</strong>{" "}
                  Welcome to the team. A captain in your area will reach out
                  within two business days. Watch for an email from
                  hello@freedompulse.org.
                </motion.div>
              )}

              <form onSubmit={onSubmit} className="mt-10 space-y-6">
                <FormFieldset
                  legend="Contact"
                  hint="The basics, so we can reach out about shifts and events."
                >
                  <FormGrid cols={2}>
                    <FormField label="First name" required>
                      {(id) => (
                        <Input id={id} name="firstName" placeholder="Avery" required />
                      )}
                    </FormField>
                    <FormField label="Last name" required>
                      {(id) => (
                        <Input id={id} name="lastName" placeholder="Mercer" required />
                      )}
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
                  <FormGrid cols={3}>
                    <FormField label="ZIP code" required>
                      {(id) => (
                        <Input id={id} name="zipCode" placeholder="97XXX" required />
                      )}
                    </FormField>
                    <FormField label="County" required>
                      {(id) => (
                        <Select id={id} name="county" required defaultValue="">
                          <option value="" disabled>
                            Select county
                          </option>
                          {COUNTIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </Select>
                      )}
                    </FormField>
                    <FormField label="Region">
                      {(id) => (
                        <Select id={id} name="region" defaultValue="">
                          <option value="" disabled>
                            Select region
                          </option>
                          {REGIONS.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </Select>
                      )}
                    </FormField>
                  </FormGrid>
                </FormFieldset>

                <FormFieldset
                  legend="Civic engagement"
                  hint="No wrong answers. Helps us pair you with the right role."
                >
                  <FormGrid cols={2}>
                    <FormField label="Registered to vote?">
                      {(id) => (
                        <Select id={id} name="registeredVoter" defaultValue="">
                          <option value="" disabled>
                            Select
                          </option>
                          <option>Yes</option>
                          <option>No — help me register</option>
                          <option>Not sure</option>
                        </Select>
                      )}
                    </FormField>
                    <FormField label="Campaign experience">
                      {(id) => (
                        <Select id={id} name="experience" defaultValue="">
                          <option value="" disabled>
                            Select
                          </option>
                          {EXPERIENCE.map((e) => (
                            <option key={e} value={e}>
                              {e}
                            </option>
                          ))}
                        </Select>
                      )}
                    </FormField>
                  </FormGrid>
                </FormFieldset>

                <FormFieldset
                  legend="Interests"
                  hint="Pick anything that sounds good. You can change it later."
                >
                  <CheckboxGrid cols={2}>
                    {INTERESTS.map((i) => (
                      <Checkbox
                        key={i.id}
                        name={`interest_${i.id}`}
                        label={i.label}
                        hint={i.hint}
                      />
                    ))}
                  </CheckboxGrid>
                </FormFieldset>

                <FormFieldset
                  legend="Availability & priorities"
                  hint="Optional, but useful when we&apos;re building your schedule."
                >
                  <FormField label="Hours per week">
                    {(id) => (
                      <Select id={id} name="availability" defaultValue="">
                        <option value="" disabled>
                          Select availability
                        </option>
                        {AVAILABILITY.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </Select>
                    )}
                  </FormField>
                  <FormField
                    label="Issues you care most about"
                    hint="Healthcare, housing, education, forestry — anything."
                  >
                    {(id) => (
                      <Textarea
                        id={id}
                        name="issues"
                        placeholder="The two or three things that brought you here."
                      />
                    )}
                  </FormField>
                  <FormField
                    label="Anything else we should know?"
                    hint="Languages spoken, accessibility needs, specific skills."
                  >
                    {(id) => (
                      <Textarea
                        id={id}
                        name="notes"
                        placeholder="Skills, availability notes, etc."
                      />
                    )}
                  </FormField>
                </FormFieldset>

                <FormFieldset legend="Consent">
                  <div className="space-y-3">
                    <Checkbox
                      name="optin_email"
                      label="Email me about volunteer shifts and campaign updates."
                      hint="Roughly one email a week. Unsubscribe any time."
                      defaultChecked
                    />
                    <Checkbox
                      name="optin_sms"
                      label="Text me about shift confirmations and last-minute events."
                      hint="Message and data rates may apply. Reply STOP to opt out."
                    />
                  </div>
                </FormFieldset>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="max-w-md text-[12px] leading-5 text-foreground/45">
                    By submitting, you agree to our{" "}
                    <a href="/privacy-policy" className="text-accent underline">
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms-of-service" className="text-accent underline">
                      terms of service
                    </a>
                    .
                  </p>
                  <MagneticButton type="submit" variant="solid">
                    Sign up to volunteer
                  </MagneticButton>
                </div>
              </form>
            </div>

            {/* Sticky aside */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <Reveal y={20}>
                <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-surface/50 p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    Field office
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                    HQ — Portland
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    2026 NE Alberta St, Suite 4<br />
                    Open weekdays 10am–7pm
                  </p>
                  <div className="mt-6 space-y-2 border-t border-foreground/10 pt-5 text-sm">
                    <a className="block text-foreground/80 hover:text-foreground" href="tel:+14155552026">
                      (415) 555-2026
                    </a>
                    <a
                      className="block text-foreground/80 hover:text-foreground"
                      href="mailto:volunteer@freedompulse.org"
                    >
                      volunteer@freedompulse.org
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal y={20} delay={0.2} className="mt-6">
                <div className="rounded-2xl border border-foreground/10 bg-background p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                    Not ready to volunteer?
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    Chip in instead
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/65">
                    A $5 contribution keeps a phone bank running for an hour.
                  </p>
                  <div className="mt-5">
                    <MagneticButton href="/#donate" variant="solid" size="sm">
                      Donate
                    </MagneticButton>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </SectionFrame>
    </>
  );
}
