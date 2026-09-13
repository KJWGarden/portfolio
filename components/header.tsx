import Link from "next/link";
import { profile } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="whitespace-nowrap text-sm font-medium tracking-tight text-foreground">
          {profile.name}
          <span className="hidden text-muted sm:inline"> · {profile.title}</span>
        </Link>
        <div className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm text-muted sm:gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-foreground">
            Email
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
