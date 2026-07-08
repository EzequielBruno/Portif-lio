import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300">Dados industriais • BI • Qualidade • Tecnologia</p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">Transformando dados operacionais em decisões inteligentes.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Portfólio de Ezequiel Bruno — análise de dados, dashboards, qualidade industrial, melhoria contínua e soluções digitais aplicadas a processos reais.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#projetos" className="rounded-full bg-cyan-500 px-7 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-400">Ver projetos</a>
            <a href="#contato" className="rounded-full border border-slate-300 px-7 py-3 text-center font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-cyan-400 dark:border-white/15 dark:text-white">Entrar em contato</a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-5 shadow-2xl shadow-slate-200/70 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-950 text-white">
            <div className="relative min-h-[520px]">
              <Image
                src="/FotoProfissional.jpeg"
                alt="Foto de Ezequiel Bruno"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[center_28%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Ezequiel Bruno</p>
                <p className="mt-3 text-2xl font-black">Dados, qualidade e melhoria contínua com foco em resultados reais.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["BI", "Qualidade", "Indústria"].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-center text-sm font-semibold backdrop-blur">{item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
