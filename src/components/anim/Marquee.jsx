"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export function Marquee({
  children,
  speed = 40,
  direction = "left",
  className = "",
  pauseOnHover = true,
}) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden",
        className,
      )}
    >
      <motion.div
        className="flex w-max gap-12 will-change-transform"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          animationPlayState: pauseOnHover ? "paused" : "running",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
