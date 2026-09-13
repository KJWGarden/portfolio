import { About } from "@/components/about";
import { Awards } from "@/components/awards";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="pb-20">
      <Hero />
      <About />
      <Projects />
      <Awards />
      <Skills />
      <Contact />
    </main>
  );
}
