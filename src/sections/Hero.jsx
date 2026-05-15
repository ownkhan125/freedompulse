"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeInUp}
            className="rounded-full border border-foreground/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground/60"
          >
            Premium animated experiences
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
          >
            Motion that feels alive.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-lg text-foreground/70"
          >
            A Next.js App Router foundation wired with Tailwind, GSAP, and
            Motion — ready to build something premium.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex gap-3">
            <Button>Get started</Button>
            <Button variant="ghost">Learn more</Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
