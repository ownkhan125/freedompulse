"use client";

import { motion } from "motion/react";
import { EASE_OUT } from "@/animations/variants";

/**
 * Scroll-triggered reveal. Supports y / scale / opacity tweens with stagger.
 */
export function Reveal({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
  duration = 0.7,
  y = 28,
  x = 0,
  scale = 1,
  blur = 0,
  once = true,
  amount = 0.35,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        scale,
        filter: blur ? `blur(${blur}px)` : undefined,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: blur ? "blur(0px)" : undefined,
      }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function RevealStagger({
  as: Tag = "div",
  className = "",
  children,
  stagger = 0.08,
  delay = 0.1,
  once = true,
  amount = 0.25,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};
