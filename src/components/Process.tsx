import { processSteps } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export function Process() {
  return (
    <section id="processo" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Processo" title="Método de trabalho claro, validado e orientado ao uso" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{processSteps.map((step, index) => <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900"><span className="font-mono text-sm text-cyan-500">{String(index + 1).padStart(2, "0")}</span><p className="mt-3 font-semibold text-slate-900 dark:text-white">{step}</p></div>)}</div>
      </div>
    </section>
  );
}
