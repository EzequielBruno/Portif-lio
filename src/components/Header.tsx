import { navItems } from "@/data/portfolioData";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/85 backdrop-blur-xl dark:bg-slate-950/80">
      <nav aria-label="Menu principal" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="font-mono text-lg font-bold tracking-tight text-slate-950 dark:text-white">EB<span className="text-cyan-500">.</span>Dados</a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-cyan-500 dark:text-slate-300">{item.label}</a>)}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
