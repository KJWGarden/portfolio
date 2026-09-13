import { awards } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Awards() {
  return (
    <section id="awards" className="scroll-mt-24 border-t border-white/6">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading eyebrow="Awards" title="수상" description="어르다로 받은 상입니다." />
        <ul className="divide-y divide-white/8 border-y border-white/8">
          {awards.map((award) => (
            <li key={award.title} className="grid gap-3 py-8 md:grid-cols-[88px_1fr_auto] md:items-baseline">
              <p className="text-sm text-accent">{award.year}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{award.title}</h3>
                <p className="mt-2 text-sm text-muted">{award.org}</p>
              </div>
              <p className="text-sm text-muted">{award.project}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
