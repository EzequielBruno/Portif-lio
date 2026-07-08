"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function toggleTheme() {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  return (
    <button aria-label="Alternar tema claro e escuro" onClick={toggleTheme} className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 dark:border-white/10 dark:bg-slate-900/80">
      {isDark ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  );
}
