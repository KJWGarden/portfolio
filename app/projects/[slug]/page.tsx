import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data";
import { StoreButtons } from "@/components/store-buttons";

export function generateStaticParams() {
  return projects.filter((project) => project.featured).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "프로젝트를 찾을 수 없습니다" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.featured) {
    notFound();
  }

  return (
    <main className="pt-24">
      <article className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        <Link href="/#projects" className="text-sm text-muted transition-colors hover:text-foreground">
          ← 프로젝트 목록
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-sm text-accent">
            {project.status ? `${project.period} · ${project.status}` : project.period}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{project.title}</h1>
          <p className="mt-3 text-lg text-muted">{project.subtitle}</p>
          <div className="mt-6 flex flex-col gap-4">
            {project.stores ? <StoreButtons ios={project.stores.ios} android={project.stores.android} /> : null}
            {project.site ? (
              <a href={project.site} target="_blank" rel="noreferrer" className="inline-flex text-sm text-accent hover:underline">
                서비스 바로가기 →
              </a>
            ) : null}
          </div>
        </header>

        {project.gallery[0] ? (
          <div
            className={`relative mt-12 overflow-hidden rounded-3xl border border-border ${
              project.coverFit === "contain"
                ? "flex aspect-[16/10] items-center justify-center bg-[radial-gradient(circle_at_50%_40%,#9ae8e0_0%,#6ec8d4_55%,#3aa8c4_100%)]"
                : "aspect-[16/10] bg-card"
            }`}
          >
            {project.coverFit === "contain" ? (
              <Image
                src={project.gallery[0].src}
                alt={project.gallery[0].alt}
                width={360}
                height={360}
                priority
                className="size-40 drop-shadow-2xl md:size-64"
              />
            ) : (
              <Image
                src={project.gallery[0].src}
                alt={project.gallery[0].alt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1152px) 1152px, 100vw"
              />
            )}
          </div>
        ) : null}

        {project.planningPoints ? (
          <>
            <section className="mt-16">
              <h2 className="text-xl font-semibold">프로젝트 설명</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{project.overview}</p>
              {project.facts ? (
                <ul className="mt-8 space-y-2 text-sm leading-7 text-foreground/85">
                  {project.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              ) : null}
            </section>

            {project.stackGroups ? (
              <section className="mt-20">
                <h2 className="text-xl font-semibold">기술 스택</h2>
                <dl className="mt-8 space-y-4">
                  {project.stackGroups.map((group) => (
                    <div key={group.label} className="grid gap-1 sm:grid-cols-[88px_1fr] sm:gap-6">
                      <dt className="text-sm text-muted">{group.label}</dt>
                      <dd className="text-sm leading-7">{group.items}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            <section className="mt-20">
              <h2 className="text-xl font-semibold">기획 포인트</h2>
              <ul className="mt-8 space-y-6">
                {project.planningPoints.map((point) => (
                  <li key={point.title}>
                    <h3 className="text-base font-semibold">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{point.description}</p>
                  </li>
                ))}
              </ul>
            </section>

            {project.challenges ? (
              <section className="mt-20">
                <h2 className="text-xl font-semibold">해결 과제</h2>
                <ul className="mt-8 space-y-6">
                  {project.challenges.map((point) => (
                    <li key={point.title}>
                      <h3 className="text-base font-semibold">{point.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{point.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </>
        ) : (
          <>
            <section className="mt-16 grid gap-10 md:grid-cols-[1fr_220px]">
              <div>
                <h2 className="text-xl font-semibold">개요</h2>
                <p className="mt-4 text-base leading-8 text-muted">{project.overview}</p>
              </div>
              <aside>
                <h2 className="text-sm font-medium text-muted">역할</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/85">
                  {project.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
                <h2 className="mt-8 text-sm font-medium text-muted">기술</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </aside>
            </section>

            {project.features && project.features.length > 0 ? (
              <section className="mt-20">
                <h2 className="text-xl font-semibold">주요 기능</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {project.features.map((group) => (
                    <div key={group.title} className="rounded-3xl border border-border bg-card p-6 md:p-7">
                      <h3 className="text-base font-semibold">{group.title}</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                        {group.items.map((item) => (
                          <li key={item} className="pl-4 before:mr-3 before:text-accent before:content-['–']">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {project.highlights && project.highlights.length > 0 ? (
              <section className="mt-20">
                <h2 className="text-xl font-semibold">문제와 개선</h2>
                <div className="mt-8 space-y-6">
                  {project.highlights.map((highlight) => (
                    <div key={highlight.title} className="rounded-3xl border border-border bg-card p-6 md:p-8">
                      <h3 className="text-lg font-semibold">{highlight.title}</h3>
                      <div className="mt-6 grid gap-5 md:grid-cols-2">
                        <div className="rounded-2xl bg-foreground/[0.03] p-5">
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">AS-IS</p>
                          <p className="mt-3 text-sm leading-7 text-muted">{highlight.asIs}</p>
                        </div>
                        <div className="rounded-2xl bg-accent-soft p-5">
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">TO-BE</p>
                          <p className="mt-3 text-sm leading-7 text-foreground/90">{highlight.toBe}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {project.talkingPoints && project.talkingPoints.length > 0 ? (
              <section className="mt-20">
                <h2 className="text-xl font-semibold">설계에서 남긴 판단</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {project.talkingPoints.map((point) => (
                    <div key={point.title} className="rounded-3xl border border-border bg-card p-6 md:p-7">
                      <h3 className="text-base font-semibold">{point.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{point.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </>
        )}

        {project.gallery.length > 1 ? (
          <section className="mt-20">
            <h2 className="text-xl font-semibold">화면</h2>
            <div className="mt-8 grid gap-5">
              {project.gallery.slice(1).map((image) => (
                <div key={image.src} className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-card">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1152px) 1152px, 100vw" />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {project.retrospective ? (
          <section className="mt-20 rounded-3xl border border-border bg-card p-7 md:p-10">
            <h2 className="text-xl font-semibold">회고</h2>
            <p className="mt-4 text-base leading-8 text-muted">{project.retrospective}</p>
          </section>
        ) : null}
      </article>
    </main>
  );
}
