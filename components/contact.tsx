import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="section-label mb-4 text-xs font-medium uppercase text-accent">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          감사합니다
          <br />
          더 궁금한 점이 있다면 편하게 연락주세요
        </h2>
        <dl className="mx-auto mt-12 grid max-w-md gap-6 text-left sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-muted">이메일</dt>
            <dd className="mt-2">
              <a href={`mailto:${profile.email}`} className="text-foreground hover:text-accent">
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-muted">GitHub</dt>
            <dd className="mt-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-foreground hover:text-accent">
                @{profile.githubHandle}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
