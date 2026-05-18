"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

/**
 * Number counter that animates from 0 to `to` once when scrolled into view.
 *
 * Props:
 *  - to:         target number (required)
 *  - duration:   seconds (default 1.8)
 *  - delay:      seconds before animation starts (default 0) — use for stagger
 *  - decimals:   number of decimal places (default 0)
 *  - amount:     viewport overlap to trigger own observer (default 0.5)
 *  - rootMargin: IntersectionObserver root margin (default none)
 *  - start:      optional boolean — when provided, overrides internal observer.
 *                Use this with <CounterGroup> to fire all child counters together
 *                when the parent section enters viewport.
 *  - prefix/suffix: optional decorations rendered around the number
 *  - format:     optional custom formatter (number) => string. Defaults to en-US grouping.
 *  - className:  applied to the wrapping span
 */
export function Counter({
  to,
  duration = 1.8,
  delay = 0,
  decimals = 0,
  amount = 0.5,
  rootMargin,
  start,
  prefix = "",
  suffix = "",
  format,
  className = "",
}) {
  const ref = useRef(null);
  const ownInView = useInView(ref, {
    once: true,
    amount,
    ...(rootMargin ? { margin: rootMargin } : {}),
  });
  const inView = typeof start === "boolean" ? start : ownInView;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // Zero target is a no-op tween: just render 0 and stop.
    if (to === 0) {
      setDisplay(0);
      return;
    }
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, delay]);

  const formatter =
    format ||
    ((n) => {
      if (decimals > 0) {
        return n.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      }
      return Math.round(n).toLocaleString("en-US");
    });

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${to}${suffix}`}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {prefix}
      <span aria-hidden="true">{formatter(display)}</span>
      {suffix}
    </span>
  );
}

/**
 * Wraps a group of <Counter> children with a single shared IntersectionObserver
 * so the entire group fires together (with each counter's own `delay` for stagger)
 * when the wrapper enters viewport — not when each counter individually crosses.
 *
 * Usage:
 *   <CounterGroup>
 *     {(start) => (<>
 *       <Counter to={22} start={start} delay={0}    suffix="yrs" />
 *       <Counter to={84} start={start} delay={0.18} suffix="k" />
 *       <Counter to={0}  start={start} delay={0.36} suffix="$" />
 *     </>)}
 *   </CounterGroup>
 */
export function CounterGroup({
  children,
  amount = 0.3,
  rootMargin = "0px 0px -10% 0px",
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount, margin: rootMargin });
  return (
    <Tag ref={ref} className={className} {...rest}>
      {typeof children === "function" ? children(inView) : children}
    </Tag>
  );
}
