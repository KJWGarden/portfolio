"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectExpand({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-border">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-7 py-4 text-left text-sm text-muted transition-colors hover:text-foreground md:px-9"
        aria-expanded={open}
      >
        주요 업무 내용 보기
        <span className="text-lg leading-none">{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <div className="space-y-6 px-7 pb-8 md:px-9">
          <ul className="space-y-2 text-sm leading-7 text-muted">
            {project.roles.map((role) => (
              <li key={role} className="pl-4 before:mr-3 before:text-accent before:content-['–']">
                {role}
              </li>
            ))}
          </ul>
          {project.planningPoints?.[0] ? (
            <p className="text-sm leading-7 text-foreground/80">
              <span className="text-accent">{project.planningPoints[0].title} · </span>
              {project.planningPoints[0].description}
            </p>
          ) : project.highlights?.[0] ? (
            <p className="text-sm leading-7 text-foreground/80">
              <span className="text-accent">대표 개선 · </span>
              {project.highlights[0].title}. {project.highlights[0].toBe}
            </p>
          ) : null}
          <Link href={`/projects/${project.slug}`} className="inline-flex text-sm font-medium text-accent hover:underline">
            프로젝트 상세 보기 →
          </Link>
        </div>
      ) : null}
    </div>
  );
}
