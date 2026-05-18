"use client";

import { useState } from "react";
import { motion } from "motion/react";
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
  Select,
  Checkbox,
} from "@/components/ui/Field";
import { cn } from "@/utils/cn";

const AMOUNTS = [
  { value: 10, label: "$10", note: "Coffee for a phone bank" },
  { value: 25, label: "$25", note: "An hour of staff time" },
  { value: 50, label: "$50", note: "One precinct walk packet" },
  { value: 100, label: "$100", note: "Lit drop for 200 doors" },
  { value: 250, label: "$250", note: "Field night for a county" },
  { value: 500, label: "$500", note: "A full day of organizing" },
];

const FREQUENCIES = [
  { id: "once", label: "Once" },
  { id: "monthly", label: "Monthly" },
];

const IMPACT = [
  {
    n: "01",
    title: "Doors knocked",
    body: "Field is the single highest-ROI line item in any race. Your donation funds turf maps, scripts, and the snacks that keep volunteers walking.",
  },
  {
    n: "02",
    title: "Hours on the phone",
    body: "Phone banks reach the voters door-knockers can&apos;t. Every $25 pays for an organizer-led shift that connects with 50+ households.",
  },
  {
    n: "03",
    title: "Late-cycle ad time",
    body: "Local radio and digital reach swing voters in the last six weeks. Recurring monthly donors are how we lock in inventory early.",
  },
];

export function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState("once");
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={"No PACs.\nNo lobbyists.\nJust neighbors."}
        kicker="FreedomPulse refuses corporate PAC money. Every dollar comes from individual donors — which is why your $5 matters more than you think."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Donation form */}
      <SectionFrame id="contribute" eyebrow="01 — Contribute" className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Make a contribution
              </Reveal>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block overflow-hidden">
                  <SplitText text="Every dollar shows its work." />
                </span>
              </h2>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-2xl border border-signal/40 bg-signal/[0.08] p-5 text-sm"
                >
                  <strong className="font-medium">Thank you.</strong> Your
                  contribution is processing — a confirmation will arrive in
                  your inbox shortly.
                </motion.div>
              )}

              <form onSubmit={onSubmit} className="mt-10 space-y-6">
                <FormFieldset legend="Amount">
                  {/* Frequency toggle */}
                  <div className="inline-flex rounded-full border border-foreground/15 bg-background/60 p-1">
                    {FREQUENCIES.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFrequency(f.id)}
                        className={cn(
                          "rounded-full px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
                          frequency === f.id
                            ? "bg-accent text-background"
                            : "text-foreground/65 hover:text-foreground",
                        )}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>

                  {/* Amount grid */}
                  <RevealStagger
                    stagger={0.05}
                    delay={0.1}
                    className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3"
                  >
                    {AMOUNTS.map((a) => {
                      const active = amount === a.value && custom === "";
                      return (
                        <motion.button
                          key={a.value}
                          variants={revealItem}
                          type="button"
                          onClick={() => {
                            setAmount(a.value);
                            setCustom("");
                          }}
                          whileHover={{ y: -2 }}
                          className={cn(
                            "group relative overflow-hidden rounded-2xl border bg-background/40 p-4 text-left transition-colors duration-300",
                            active
                              ? "border-accent bg-accent/[0.05]"
                              : "border-foreground/12 hover:border-foreground/30",
                          )}
                        >
                          <div className="font-display text-2xl font-semibold tracking-tight">
                            {a.label}
                          </div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45">
                            {a.note}
                          </div>
                          <span
                            aria-hidden
                            className={cn(
                              "absolute right-3 top-3 h-2 w-2 rounded-full transition-colors duration-300",
                              active ? "bg-accent" : "bg-foreground/15",
                            )}
                          />
                        </motion.button>
                      );
                    })}
                  </RevealStagger>

                  <FormField label="Or another amount" className="mt-2">
                    {(id) => (
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-base text-foreground/55">
                          $
                        </span>
                        <Input
                          id={id}
                          type="number"
                          min="1"
                          placeholder="e.g. 75"
                          value={custom}
                          onChange={(e) => {
                            setCustom(e.target.value);
                            if (e.target.value) setAmount(0);
                          }}
                          className="pl-9"
                        />
                      </div>
                    )}
                  </FormField>
                </FormFieldset>

                <FormFieldset legend="Your details">
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
                  <FormGrid cols={2}>
                    <FormField label="ZIP code" required>
                      {(id) => (
                        <Input id={id} name="zipCode" placeholder="97XXX" required />
                      )}
                    </FormField>
                    <FormField label="Country">
                      {(id) => (
                        <Select id={id} name="country" defaultValue="US">
                          <option value="US">United States</option>
                        </Select>
                      )}
                    </FormField>
                  </FormGrid>
                </FormFieldset>

                <FormFieldset
                  legend="Required disclosures"
                  hint="Federal law requires this information for contributions of $200 or more in a cycle."
                >
                  <FormGrid cols={2}>
                    <FormField label="Employer" required>
                      {(id) => (
                        <Input
                          id={id}
                          name="employer"
                          placeholder="If retired, write &lsquo;Retired&rsquo;"
                          required
                        />
                      )}
                    </FormField>
                    <FormField label="Occupation" required>
                      {(id) => (
                        <Input id={id} name="occupation" placeholder="Veterinarian" required />
                      )}
                    </FormField>
                  </FormGrid>
                </FormFieldset>

                <FormFieldset legend="Certification">
                  <Checkbox
                    name="cert"
                    label="I certify that this contribution is made from my own funds, that I am a U.S. citizen or lawfully admitted permanent resident, that I am at least 18 years old, and that I am not a federal contractor."
                    required
                  />
                </FormFieldset>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="max-w-md text-[12px] leading-5 text-foreground/45">
                    Contributions are not tax-deductible. Maximum individual
                    contribution per election: $3,300.
                  </p>
                  <MagneticButton type="submit" variant="solid">
                    Contribute{" "}
                    {custom
                      ? `$${custom}`
                      : amount
                        ? `$${amount}`
                        : ""}
                  </MagneticButton>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <Reveal y={20}>
                <Img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80&auto=format&fit=crop"
                  alt="Volunteers organizing the campaign"
                  aspect="aspect-[4/5]"
                  className="rounded-3xl border border-foreground/10"
                />
              </Reveal>

              <Reveal y={20} delay={0.15}>
                <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-surface/50 p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    Where it goes
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-foreground/80">
                    <li className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-3">
                      <span>Field operation</span>
                      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                        62%
                      </span>
                    </li>
                    <li className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-3">
                      <span>Communications</span>
                      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                        21%
                      </span>
                    </li>
                    <li className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-3">
                      <span>Compliance & ops</span>
                      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                        12%
                      </span>
                    </li>
                    <li className="flex items-baseline justify-between gap-4">
                      <span>Tools & tech</span>
                      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                        5%
                      </span>
                    </li>
                  </ul>
                  <p className="mt-5 text-[12px] leading-5 text-foreground/45">
                    Allocation reported quarterly. Past statements available on
                    request.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </SectionFrame>

      {/* Impact section */}
      <SectionFrame id="impact" eyebrow="02 — Impact" className="py-16 sm:py-24">
        <Container>
          <Reveal y={10} className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Impact
          </Reveal>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] tracking-tight">
            <span className="block overflow-hidden">
              <SplitText text="What your money buys." />
            </span>
          </h2>

          <RevealStagger
            stagger={0.08}
            delay={0.3}
            className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 md:grid-cols-3"
          >
            {IMPACT.map((i) => (
              <motion.div
                key={i.n}
                variants={revealItem}
                className="group relative bg-background p-7 transition-colors duration-500 hover:bg-surface"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/40">
                  Line item / {i.n}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight">
                  {i.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-6 text-foreground/65"
                  dangerouslySetInnerHTML={{ __html: i.body }}
                />
                <span
                  aria-hidden
                  className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 group-hover:scale-x-100"
                />
              </motion.div>
            ))}
          </RevealStagger>
        </Container>
      </SectionFrame>
    </>
  );
}
