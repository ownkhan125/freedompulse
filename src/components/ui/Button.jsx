import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-foreground text-background hover:opacity-90 focus-visible:ring-foreground/40",
  ghost:
    "bg-transparent text-foreground border border-foreground/15 hover:bg-foreground/5 focus-visible:ring-foreground/20",
};

export function Button({
  variant = "primary",
  className,
  children,
  as: Tag = "button",
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
