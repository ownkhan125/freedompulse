"use client";

import { Container } from "@/components/ui/Container";
import { useGsap } from "@/hooks/useGsap";
import { registerGsapPlugins, gsap } from "@/animations/gsap";

const features = [
  {
    title: "App Router",
    body: "Built on the latest Next.js architecture for streaming, server components, and route-level optimization.",
  },
  {
    title: "Tailwind v4",
    body: "Utility-first styling with the new engine, theme variables, and zero-config PostCSS pipeline.",
  },
  {
    title: "GSAP + Motion",
    body: "Timeline-driven scroll choreography from GSAP, declarative React animation from Motion — together.",
  },
];

export function Features() {
  const scope = useGsap(() => {
    registerGsapPlugins();

    gsap.from(".feature-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <section
      id="features"
      ref={scope}
      className="border-t border-foreground/5 py-24"
    >
      <Container>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
          Engineered for premium motion.
        </h2>
        <div className="features-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="feature-card rounded-2xl border border-foreground/10 p-6 transition-colors hover:border-foreground/25"
            >
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-6 text-foreground/70">{f.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
