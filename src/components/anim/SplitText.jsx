"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { EASE_OUT } from "@/animations/variants";

/**
 * Splits text into words and characters and animates them in.
 * mode: "chars" | "words" | "lines"
 */
export function SplitText({
  text,
  mode = "chars",
  className = "",
  delay = 0,
  duration = 0.7,
  stagger = 0.025,
  as: Tag = "span",
  initialDelay = 0.1,
  once = true,
  amount = 0.5,
}) {
  const words = useMemo(() => text.split(" "), [text]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: initialDelay + delay,
      },
    },
  };

  const child = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration, ease: EASE_OUT },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className="split-word">
          {mode === "chars"
            ? Array.from(word).map((char, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  variants={child}
                  className="split-char"
                  aria-hidden="true"
                >
                  {char}
                </motion.span>
              ))
            : (
                <motion.span
                  variants={child}
                  className="split-char"
                  aria-hidden="true"
                >
                  {word}
                </motion.span>
              )}
          {wi < words.length - 1 && (
            <span className="split-char" aria-hidden="true">
              {" "}
            </span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
