"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/75 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-foreground/15 to-transparent transition-transform duration-700",
          scrolled && "scale-x-100",
        )}
      />
      <Container className="flex h-16 items-center justify-between gap-3 sm:h-[72px]">
        {/* Logo */}
        <Link
          href="/"
          className="group relative flex shrink-0 items-center gap-2.5"
          aria-label="FreedomPulse home"
        >
          <PulseLogo />
          <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
            Freedom<span className="text-accent">Pulse</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
              className="group relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide text-foreground/70 transition-colors hover:text-foreground"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-x-3.5 bottom-1.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="hidden sm:inline-flex">
            <MagneticButton href="/donate" variant="solid" size="sm">
              Donate
            </MagneticButton>
          </span>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/15 transition-colors hover:bg-foreground/[0.05] lg:hidden"
          >
            <span
              className={cn(
                "absolute h-px w-5 bg-foreground transition-transform duration-300",
                open ? "rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-foreground transition-all duration-300",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-foreground transition-transform duration-300",
                open ? "-rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-foreground/10 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-base text-foreground/80 transition-colors hover:border-foreground/10 hover:bg-foreground/[0.04] hover:text-foreground"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-foreground/40">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
              <div className="mt-3 flex gap-2 px-2">
                <MagneticButton href="/donate" variant="solid" className="flex-1">
                  Donate
                </MagneticButton>
                <MagneticButton href="/volunteer" variant="outline" className="flex-1">
                  Join us
                </MagneticButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function PulseLogo() {
  return (
    <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-foreground/10 bg-surface">
      <svg
        viewBox="0 0 36 36"
        className="h-5 w-5"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M2 18 H10 L13 10 L18 26 L23 14 L26 18 H34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.6,
          }}
        />
      </svg>
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-xl bg-accent/0"
        animate={{ backgroundColor: ["rgba(255,58,92,0)", "rgba(255,58,92,0.12)", "rgba(255,58,92,0)"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}
