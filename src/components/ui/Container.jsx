import { cn } from "@/utils/cn";

export function Container({ className, children, as: Tag = "div", ...rest }) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
