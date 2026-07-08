import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ezequiel Bruno | Dados Industriais, BI e Tecnologia",
  description: "Portfólio profissional de Ezequiel Bruno com foco em Power BI, Excel, qualidade industrial, melhoria contínua, Oracle Fusion ERP, SQL, automações e desenvolvimento web.",
  keywords: ["Ezequiel Bruno", "Power BI", "dados industriais", "qualidade industrial", "Oracle Fusion ERP", "BI Publisher", "OTBI", "SQL", "dashboards"],
  authors: [{ name: "Ezequiel Bruno" }],
  openGraph: {
    title: "Ezequiel Bruno | Dados Industriais, BI e Tecnologia",
    description: "Análise de dados, dashboards, qualidade industrial, melhoria contínua e soluções digitais aplicadas a processos reais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout(props: Readonly<{ children: React.ReactNode }>) {
  const { children } = props;
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-950 antialiased dark:bg-slate-950 dark:text-slate-100">{children}</body>
    </html>
  );
}
