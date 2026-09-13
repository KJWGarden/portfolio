import Image from "next/image";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center gap-12 px-5 pb-24 pt-28 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-2xl">
          <p className="section-label mb-6 text-xs font-medium uppercase text-accent">{profile.title}</p>
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
            안녕하세요,
            <br />
            AI를 제품의 중심으로
            <br />
            설계하는 <span className="text-accent">{profile.name}</span>입니다.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">{profile.description}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition-opacity hover:opacity-85"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/12 px-5 py-2.5 text-foreground transition-colors hover:border-white/30"
            >
              이메일 보내기
            </a>
          </div>
        </div>
        <div className="mx-auto shrink-0 md:mx-0">
          <div className="relative size-56 overflow-hidden rounded-full border border-white/10 bg-card shadow-[0_0_80px_var(--glow)] md:size-72">
            <Image
              src="/images/profile.jpg"
              alt={`${profile.name} 프로필 사진`}
              fill
              priority
              className="object-cover object-[50%_18%]"
              sizes="288px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
