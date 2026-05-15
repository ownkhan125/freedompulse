import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-10 text-sm text-foreground/60">
      <Container className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} FreedomPulse. All rights reserved.</p>
        <p className="font-mono text-xs">Built with Next.js · Tailwind · GSAP · Motion</p>
      </Container>
    </footer>
  );
}
