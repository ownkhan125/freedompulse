"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export function FormFieldset({ legend, hint, children, className = "" }) {
  return (
    <motion.fieldset
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative rounded-2xl border border-foreground/10 bg-surface/40 p-6 sm:p-8",
        className,
      )}
    >
      {legend && (
        <legend className="px-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {legend}
        </legend>
      )}
      {hint && (
        <p className="mb-6 mt-2 max-w-prose text-sm text-foreground/60">
          {hint}
        </p>
      )}
      <div className="space-y-5">{children}</div>
    </motion.fieldset>
  );
}

export function FormGrid({ cols = 2, children, className = "" }) {
  const colsClass = cols === 2 ? "sm:grid-cols-2" : cols === 3 ? "sm:grid-cols-3" : "";
  return (
    <div className={cn("grid grid-cols-1 gap-5", colsClass, className)}>
      {children}
    </div>
  );
}

export function FormField({
  label,
  hint,
  required,
  children,
  className = "",
  id,
}) {
  const fid = useId();
  const fieldId = id || fid;
  return (
    <div className={cn("relative flex flex-col gap-2", className)}>
      {label && (
        <label
          htmlFor={fieldId}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55"
        >
          {label}
          {required && <span className="ml-1 text-accent">*</span>}
        </label>
      )}
      {typeof children === "function" ? children(fieldId) : children}
      {hint && (
        <span className="text-[12px] leading-5 text-foreground/45">{hint}</span>
      )}
    </div>
  );
}

const inputBase =
  "block w-full rounded-xl border border-foreground/12 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 transition-colors duration-200 focus:border-accent/70 focus:bg-background/80 focus:outline-none focus:ring-2 focus:ring-accent/15";

export function Input({ className = "", ...props }) {
  return <input className={cn(inputBase, className)} {...props} />;
}

export function Textarea({ className = "", rows = 5, ...props }) {
  return (
    <textarea
      rows={rows}
      className={cn(inputBase, "min-h-[120px] resize-y", className)}
      {...props}
    />
  );
}

export function Select({ className = "", children, ...props }) {
  return (
    <div className="relative">
      <select
        className={cn(
          inputBase,
          "appearance-none pr-10 [&>option]:bg-surface [&>option]:text-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-foreground/50"
        viewBox="0 0 12 8"
        fill="none"
      >
        <path
          d="M1 1l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Checkbox({ label, hint, className = "", ...props }) {
  const id = useId();
  return (
    <label
      htmlFor={id}
      className={cn(
        "group flex cursor-pointer items-start gap-3 rounded-xl border border-foreground/8 bg-background/40 p-3.5 transition-colors duration-200 hover:border-foreground/25 has-[:checked]:border-accent/50 has-[:checked]:bg-accent/[0.05]",
        className,
      )}
    >
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        {...props}
      />
      <span
        aria-hidden
        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-foreground/25 transition-colors duration-200 peer-checked:border-accent peer-checked:bg-accent"
      >
        <svg
          className="h-3 w-3 scale-0 text-background transition-transform duration-150 peer-checked:scale-100 group-has-[:checked]:scale-100"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2 6.5l2.5 2.5L10 3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-sm leading-5 text-foreground/90">{label}</span>
        {hint && (
          <span className="text-[12px] leading-5 text-foreground/45">{hint}</span>
        )}
      </span>
    </label>
  );
}

export function CheckboxGrid({ children, cols = 2, className = "" }) {
  const colsClass = cols === 2 ? "sm:grid-cols-2" : cols === 3 ? "sm:grid-cols-3" : "";
  return (
    <div className={cn("grid grid-cols-1 gap-2.5", colsClass, className)}>
      {children}
    </div>
  );
}
