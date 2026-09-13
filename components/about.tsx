import { capabilities, profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          eyebrow="About"
          title="핵심 역량"
          description="확장 가능하게 설계하고, 현장에서 검증하며, 측정해 개선합니다."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {capabilities.map((item) => (
            <li key={item.title} className="rounded-3xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
        <dl className="mt-12 grid gap-6 border-t border-border pt-10 text-sm text-muted sm:grid-cols-3">
          <div>
            <dt className="mb-1 text-xs uppercase tracking-[0.16em] text-accent">Birth</dt>
            <dd className="text-foreground">{profile.birth}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs uppercase tracking-[0.16em] text-accent">School</dt>
            <dd className="text-foreground">{profile.school}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs uppercase tracking-[0.16em] text-accent">Based in</dt>
            <dd className="text-foreground">{profile.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
