import { cn } from "@/utils/cn";

/**
 * Resilient remote image wrapper. Uses native <img> so it works without
 * next/image domain coupling, with proper aspect/cover defaults and a
 * subtle skeleton background while loading.
 */
export function Img({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  aspect = "aspect-[4/3]",
  loading = "lazy",
  ...rest
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-2",
        aspect,
        className,
      )}
    >
      {/* Subtle skeleton gradient */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]"
      />
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn(
          "relative h-full w-full object-cover",
          imgClassName,
        )}
        {...rest}
      />
    </div>
  );
}
