import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects, getOtherProjects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { ProjectExpand } from "@/components/project-expand";
import { StoreButtons } from "@/components/store-buttons";

export function Projects() {
  const featured = getFeaturedProjects();
  const others = getOtherProjects();

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          eyebrow="Projects"
          title="프로젝트"
          description="기획부터 운영까지 직접 책임진 제품들입니다. 문제와 개선 과정을 자세히 볼 수 있습니다."
        />
        <div className="space-y-5">
          {featured.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-3xl border border-border bg-card">
              <Link href={`/projects/${project.slug}`} className="group grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
                <div
                  className={`relative aspect-[16/11] md:aspect-auto md:min-h-[280px] ${
                    project.coverFit === "contain"
                      ? "flex items-center justify-center bg-[radial-gradient(circle_at_50%_40%,#9ae8e0_0%,#6ec8d4_55%,#3aa8c4_100%)]"
                      : "bg-foreground/10"
                  }`}
                >
                  {project.coverFit === "contain" ? (
                    <Image
                      src={project.cover}
                      alt={project.title}
                      width={220}
                      height={220}
                      className="size-32 drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.03] md:size-44"
                    />
                  ) : (
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 55vw, 100vw"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between p-7 md:p-9">
                  <div>
                    <p className="text-xs text-muted">
                      {project.period} · {project.status}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
                    <p className="mt-5 text-sm leading-7 text-muted">{project.summary}</p>
                  </div>
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span key={tech} className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 text-sm font-medium text-accent">자세히 보기 →</p>
                  </div>
                </div>
              </Link>
              {project.stores ? (
                <div className="border-t border-border px-7 py-5 md:px-9">
                  <StoreButtons ios={project.stores.ios} android={project.stores.android} />
                </div>
              ) : null}
              <ProjectExpand project={project} />
            </article>
          ))}
        </div>

        {others.length > 0 ? (
          <div className="mt-16">
            <h3 className="mb-6 text-sm font-medium text-muted">Other Projects</h3>
            <div className="grid gap-4">
              {others.map((project) => (
                <article key={project.slug} className="rounded-3xl border border-border bg-card p-7 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs text-muted">
                        {project.period} · {project.status}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.site ? (
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 text-sm text-accent hover:underline"
                      >
                        서비스 바로가기
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
