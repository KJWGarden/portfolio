"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "@/lib/data";

export function FloatingNav() {
  const pathname = usePathname();
  const [active, setActive] = useState<(typeof navItems)[number]["href"]>("#about");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const ids = navItems.map((item) => item.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}` as (typeof navItems)[number]["href"]);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname !== "/") {
    return null;
  }

  return (
    <nav
      aria-label="섹션 내비게이션"
      className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-2 py-2 shadow-lg shadow-black/40 backdrop-blur-xl"
    >
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive ? "bg-white/10 text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
