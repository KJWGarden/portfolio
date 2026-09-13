import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading eyebrow="Stack" title="기술" />
        <div className="grid gap-10 md:grid-cols-2">
          {[skills.core, skills.experienced].map((group) => (
            <div key={group.label}>
              <h3 className="text-lg font-semibold">{group.label}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{group.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
