"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

const SIZE = {
  sm: "h-9 px-4 text-[10px] tracking-[0.18em]",
  md: "h-12 px-7 text-[13px] tracking-[0.18em]",
};

const VARIANT = {
  solid:
    "bg-accent text-background hover:bg-[color-mix(in_srgb,var(--accent)_88%,white)] shadow-[0_10px_40px_-12px_var(--glow-accent)]",
  outline:
    "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/50 hover:bg-foreground/[0.04]",
  ghost: "bg-foreground/[0.04] text-foreground hover:bg-foreground/[0.08]",
  gold:
    "bg-gold text-background hover:bg-[color-mix(in_srgb,var(--gold)_88%,white)] shadow-[0_10px_40px_-12px_var(--glow-gold)]",
};

/**
 * Magnetic button: tracks cursor with inertia.
 * - size: "sm" (compact, navbar) | "md" (default, in-page)
 * - variant: "solid" | "outline" | "ghost" | "gold"
 */
export function MagneticButton({
  children,
  className = "",
  variant = "solid",
  size = "md",
  href,
  onClick,
  ariaLabel,
  icon,
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.35 });
  const labelX = useTransform(sx, (v) => v * 0.4);
  const labelY = useTransform(sy, (v) => v * 0.4);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - (r.left + r.width / 2);
    const py = e.clientY - (r.top + r.height / 2);
    x.set(px * 0.25);
    y.set(py * 0.35);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full font-medium uppercase transition-colors duration-300 will-change-transform",
        SIZE[size],
        VARIANT[variant],
        className,
      )}
      whileTap={{ scale: 0.97 }}
      {...rest}
    >
      <motion.span
        style={{ x: labelX, y: labelY }}
        className="relative z-10 flex items-center gap-2 whitespace-nowrap"
      >
        {children}
        {icon ? (
          <span className="ml-1 transition-transform duration-500 group-hover:translate-x-1">
            {icon}
          </span>
        ) : null}
      </motion.span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </Tag>
  );
}
