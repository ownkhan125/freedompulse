import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight">
          FreedomPulse
        </Link>
        <nav className="flex items-center gap-6 text-sm text-foreground/70">
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
          <a href="#about" className="hover:text-foreground">
            About
          </a>
        </nav>
      </Container>
    </header>
  );
}
