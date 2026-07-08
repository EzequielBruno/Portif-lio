import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contato" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Contato" title="Vamos conversar sobre dados, BI e soluções digitais" description="Formulário visual sem backend. Edite os links e conecte o envio quando desejar." />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white dark:border-white/10"><h3 className="text-2xl font-bold">Ezequiel Bruno</h3><p className="mt-4 text-slate-300">Disponível para oportunidades profissionais, projetos de BI, automação, relatórios, análise de indicadores e sistemas web internos.</p><div className="mt-8 grid gap-3"><a href="https://www.linkedin.com/in/ezequiel-deivid-bruno-044707170/" className="hover:text-cyan-300">LinkedIn: ezequiel-deivid-bruno</a><a href="https://github.com/EzequielBruno" className="hover:text-cyan-300">GitHub: EzequielBruno</a><a href="https://wa.me/5534974000856" className="hover:text-cyan-300">WhatsApp: (34) 97400-0856</a><a href="mailto:ezequieldbruno@gmail.com" className="hover:text-cyan-300">E-mail: ezequieldbruno@gmail.com</a></div></aside>
          <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900"><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Nome<input className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-cyan-400 dark:border-white/10" placeholder="Seu nome" /></label><label className="grid gap-2 text-sm font-semibold">E-mail<input type="email" className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-cyan-400 dark:border-white/10" placeholder="seu@email.com" /></label></div><label className="mt-5 grid gap-2 text-sm font-semibold">Assunto<input className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-cyan-400 dark:border-white/10" placeholder="Projeto, oportunidade ou parceria" /></label><label className="mt-5 grid gap-2 text-sm font-semibold">Mensagem<textarea rows={5} className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-cyan-400 dark:border-white/10" placeholder="Conte brevemente como posso ajudar" /></label><button type="button" className="mt-6 rounded-full bg-cyan-500 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-400">Enviar mensagem</button></form>
        </div>
      </div>
    </section>
  );
}
