import { services } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="servicos" className="bg-slate-100 px-4 py-20 dark:bg-slate-950/60 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Serviços" title="Como posso apoiar negócios e equipes" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <div key={service} className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-800 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"><span className="mr-2 text-cyan-500">◆</span>{service}</div>)}</div>
      </div>
    </section>
  );
}
