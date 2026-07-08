import { experienceItems } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experiencia" className="bg-slate-100 px-4 py-20 dark:bg-slate-950/60 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl"><SectionHeader eyebrow="Experiência" title="Evolução profissional orientada por dados e melhoria" />
        <div className="relative border-l border-cyan-400/40 pl-6">{experienceItems.map((item) => <div key={item} className="relative mb-6 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900"><span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full bg-cyan-400 ring-4 ring-slate-100 dark:ring-slate-950" /><p className="font-semibold text-slate-800 dark:text-slate-100">{item}</p></div>)}</div>
      </div>
    </section>
  );
}
