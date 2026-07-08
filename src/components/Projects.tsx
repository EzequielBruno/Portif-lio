import { projects, type Project } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

type ProjectCardProps = { project: Project; index: number };

function ProjectCard(props: ProjectCardProps) {
  const { project, index } = props;
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900">
      <p className="font-mono text-sm text-cyan-500">Projeto {String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      <div className="mt-5 rounded-2xl bg-slate-100 p-4 dark:bg-slate-950/70"><strong className="text-slate-950 dark:text-white">Objetivo: </strong><span className="text-slate-600 dark:text-slate-300">{project.objective}</span></div>
      <div className="mt-5 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-700 dark:text-cyan-300">{tool}</span>)}</div>
      <ul className="mt-5 grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">{project.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span className="text-emerald-500">✓</span>{highlight}</li>)}</ul>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="bg-slate-100 px-4 py-20 dark:bg-slate-950/60 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Projetos" title="Soluções com contexto real e dados protegidos" description="Projetos estruturados com informações fictícias, genéricas ou anonimizadas, sem exposição de dados confidenciais." />
        <div className="grid gap-6 lg:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
