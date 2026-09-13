"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "@/lib/data";

type NavHref = (typeof navItems)[number]["href"];

const HEADER_HEIGHT = 64;
const FLOATING_NAV_CLEARANCE = 88;
const VISIBLE_HYSTERESIS = 48;

function visibleHeight(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    return 0;
  }

  const rect = element.getBoundingClientRect();
  const top = Math.max(rect.top, HEADER_HEIGHT);
  const bottom = Math.min(rect.bottom, window.innerHeight - FLOATING_NAV_CLEARANCE);
  return Math.max(0, bottom - top);
}

function getActiveSection(current: NavHref): NavHref {
  const ids = navItems.map((item) => item.href.slice(1));
  const scrollBottom = window.scrollY + window.innerHeight;
  const pageBottom = document.documentElement.scrollHeight;

  if (pageBottom - scrollBottom < 64) {
    return `#${ids[ids.length - 1]}` as NavHref;
  }

  let bestId = ids[0];
  let bestVisible = -1;

  for (const id of ids) {
    const visible = visibleHeight(id);
    if (visible > bestVisible) {
      bestVisible = visible;
      bestId = id;
    }
  }

  if (bestVisible <= 0) {
    return current;
  }

  const currentId = current.slice(1);
  const currentVisible = visibleHeight(currentId);
  if (bestId !== currentId && bestVisible < currentVisible + VISIBLE_HYSTERESIS) {
    return current;
  }

  return `#${bestId}` as NavHref;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FloatingNav() {
  const pathname = usePathname();
  const [active, setActive] = useState<NavHref>("#about");
  const pendingHref = useRef<NavHref | null>(null);
  const settleTimer = useRef(0);
  const maxLockTimer = useRef(0);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    let frame = 0;

    const releaseIfArrived = () => {
      const pending = pendingHref.current;
      if (pending && getActiveSection(pending) !== pending) {
        return;
      }

      pendingHref.current = null;
      window.clearTimeout(maxLockTimer.current);
      setActive((prev) => getActiveSection(prev));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (pendingHref.current) {
          return;
        }
        setActive((prev) => getActiveSection(prev));
      });

      if (!pendingHref.current) {
        return;
      }

      window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(releaseIfArrived, 220);
    };

    setActive((prev) => getActiveSection(prev));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", releaseIfArrived);
    window.addEventListener("scrollend", releaseIfArrived);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer.current);
      window.clearTimeout(maxLockTimer.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", releaseIfArrived);
      window.removeEventListener("scrollend", releaseIfArrived);
    };
  }, [pathname]);

  const goToSection = (href: NavHref) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    setActive(href);
    pendingHref.current = href;
    window.clearTimeout(maxLockTimer.current);
    maxLockTimer.current = window.setTimeout(() => {
      pendingHref.current = null;
      setActive((prev) => getActiveSection(prev));
    }, 2500);

    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({
      behavior: prefersReducedMotion() ? "instant" : "smooth",
      block: "start",
    });
    history.pushState(null, "", href);

    if (getActiveSection(href) === href) {
      pendingHref.current = null;
      window.clearTimeout(maxLockTimer.current);
    }
  };

  if (pathname !== "/") {
    return null;
  }

  return (
    <nav
      aria-label="섹션 내비게이션"
      className="fixed bottom-5 left-1/2 z-40 w-fit max-w-[calc(100vw-1.5rem)] -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-1.5 py-1.5 shadow-lg shadow-black/40 backdrop-blur-xl sm:px-2 sm:py-2"
    >
      <ul className="flex flex-nowrap items-center justify-center gap-0.5 sm:gap-1">
        {navItems.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                onClick={goToSection(item.href)}
                className={`block whitespace-nowrap rounded-full px-2.5 py-2 text-xs leading-none [word-break:keep-all] transition-colors sm:px-4 sm:text-sm ${
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
