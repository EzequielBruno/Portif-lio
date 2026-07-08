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
          <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
            <div className="mb-6 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Aprovação", "FTQ", "Produtividade", "Tendência"].map((metric, index) => <div key={metric} className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-sm text-slate-400">{metric}</p><p className="mt-2 text-3xl font-bold text-cyan-300">{index === 0 ? "96%" : index === 1 ? "91%" : index === 2 ? "+18%" : "↑"}</p></div>)}
            </div>
            <div className="mt-6 h-32 rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,.16),rgba(16,185,129,.08))] p-4" aria-label="Ilustração de dashboard industrial">
              <div className="flex h-full items-end gap-3">{[45, 72, 54, 86, 63, 95, 78].map((height) => <span key={height} className="flex-1 rounded-t bg-cyan-300/80" style={{ height: `${height}%` }} />)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
