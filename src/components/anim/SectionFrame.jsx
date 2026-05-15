"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/utils/cn";

/**
 * Section wrapper that builds in when entering viewport:
 *   1. Borders/lines build in (left + top hairlines + side label)
 *   2. Then children fade/translate in
 */
export function SectionFrame({
  id,
  eyebrow,
  className = "",
  innerClassName = "",
  children,
  hideLines = false,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: "some", margin: "0px 0px -10% 0px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative isolate overflow-x-clip", className)}
    >
      {!hideLines && (
        <>
          {/* Top hairline */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          />
          {/* Bottom hairline */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-right bg-gradient-to-r from-transparent via-foreground/12 to-transparent"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
          />
          {/* Side eyebrow label */}
          {eyebrow && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-4 top-12 hidden -rotate-90 origin-top-left text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/35 lg:block"
              initial={{ opacity: 0, x: -10 }}
              animate={
                inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
              }
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <span className="inline-block translate-y-full">{eyebrow}</span>
            </motion.div>
          )}
        </>
      )}

      <motion.div
        className={cn("relative z-10", innerClassName)}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
