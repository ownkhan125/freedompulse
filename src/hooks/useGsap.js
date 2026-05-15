"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

export function useGsap(setup, deps = []) {
  const scopeRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (!scopeRef.current) return;
    const ctx = gsap.context(setup, scopeRef);
    return () => ctx.revert();
  }, deps);

  return scopeRef;
}
