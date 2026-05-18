"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SectionFrame } from "@/components/anim/SectionFrame";
import { Reveal } from "@/components/anim/Reveal";

export function LegalLayout({ title, eyebrow, kicker, lastUpdated, sections }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        kicker={kicker}
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <SectionFrame
        id="legal-body"
        eyebrow={`Last updated ${lastUpdated}`}
        className="py-16 sm:py-24"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_2.4fr] lg:gap-20">
            {/* Sidebar nav */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <Reveal y={10}>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Sections
                </div>
                <ol className="mt-6 space-y-1 border-l border-foreground/10">
                  {sections.map((s, i) => {
                    const isActive = active === s.id;
                    return (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className={`group relative block py-2 pl-5 pr-3 text-[13px] leading-5 transition-colors ${
                            isActive
                              ? "text-foreground"
                              : "text-foreground/55 hover:text-foreground"
                          }`}
                        >
                          <span
                            aria-hidden
                            className={`absolute left-[-1px] top-1/2 h-6 w-px -translate-y-1/2 transition-all duration-300 ${
                              isActive ? "bg-accent" : "bg-transparent"
                            }`}
                          />
                          <span className="mr-2 font-mono text-[10px] text-foreground/40">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {s.heading}
                        </a>
                      </li>
                    );
                  })}
                </ol>

                <div className="mt-10 rounded-2xl border border-foreground/10 bg-surface/40 p-5 text-sm leading-6 text-foreground/65">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                    Questions?
                  </div>
                  <p className="mt-3">
                    Email{" "}
                    <a className="text-accent underline" href="mailto:privacy@freedompulse.org">
                      privacy@freedompulse.org
                    </a>{" "}
                    and a real person will reply within two business days.
                  </p>
                </div>
              </Reveal>
            </aside>

            {/* Content */}
            <article className="prose prose-invert max-w-none">
              {sections.map((s, i) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="scroll-mt-28 border-b border-foreground/10 pb-12 pt-6 first:pt-0 last:border-b-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {s.heading}
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-7 text-foreground/80">
                    {s.body.map((node, j) =>
                      typeof node === "string" ? (
                        <p key={j}>{node}</p>
                      ) : node.type === "h3" ? (
                        <h3
                          key={j}
                          className="mt-8 font-display text-lg font-medium tracking-tight text-foreground"
                        >
                          {node.text}
                        </h3>
                      ) : node.type === "ul" ? (
                        <ul
                          key={j}
                          className="ml-6 list-disc space-y-1.5 marker:text-accent"
                        >
                          {node.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      ) : null,
                    )}
                  </div>
                </motion.section>
              ))}
            </article>
          </div>
        </Container>
      </SectionFrame>
    </>
  );
}
