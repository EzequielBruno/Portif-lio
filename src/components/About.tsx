import { differentiators } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Sobre mim" title="Experiência industrial com mentalidade analítica" description="Ezequiel Bruno atua na interface entre operação, qualidade e tecnologia, conectando dados de rotina a decisões melhores." />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">Profissional com atuação em ambiente industrial, qualidade, análise de indicadores e melhoria contínua. Possui experiência prática no acompanhamento de resultados de qualidade da matéria-prima, apoio à equipe técnica, análise de processos e criação de dashboards próprios em Power BI e Excel.</p>
            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">Os dashboards e projetos apresentados foram desenvolvidos por iniciativa própria, com dados fictícios ou anonimizados, como investimento em crescimento profissional, análise crítica, melhoria de processos e apoio à tomada de decisão. Os dados reais das empresas clientes não são compartilhados!</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-300 dark:border-white/10 dark:bg-slate-900/70"><span className="text-3xl" aria-hidden="true">{item.icon}</span><h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-3 text-slate-600 dark:text-slate-300">{item.description}</p></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
