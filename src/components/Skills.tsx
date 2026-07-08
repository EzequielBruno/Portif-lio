import { skillGroups } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="habilidades" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Habilidades" title="Competências técnicas conectadas à operação" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group) => <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900"><h3 className="text-xl font-bold text-slate-950 dark:text-white">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-white/10 dark:text-slate-300">{skill}</span>)}</div></article>)}</div>
      </div>
    </section>
  );
}
