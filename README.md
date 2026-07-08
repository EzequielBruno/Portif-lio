# Portfólio profissional — Ezequiel Bruno

Portfólio em Next.js, TypeScript e Tailwind CSS para apresentar projetos de dados industriais, Power BI, Excel, qualidade, melhoria contínua, Oracle Fusion ERP, BI Publisher, OTBI, SQL, automações, dashboards e desenvolvimento web.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## Scripts disponíveis

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: gera a versão de produção.
- `npm run start`: executa a build de produção.
- `npm run lint`: roda o ESLint.

## Estrutura principal

- `src/app/page.tsx`: composição das seções da página.
- `src/app/layout.tsx`: metadados SEO e layout raiz.
- `src/app/globals.css`: tema base, Tailwind CSS e animações.
- `src/data/portfolioData.ts`: conteúdo editável do portfólio.
- `src/components/`: componentes reutilizáveis.

## Personalização

Edite `src/data/portfolioData.ts` para alterar projetos, habilidades, serviços, processo e experiência. Os links de LinkedIn, GitHub, WhatsApp e e-mail estão em `src/components/Contact.tsx` como placeholders para edição futura.

> Observação: todos os projetos foram descritos com dados fictícios, genéricos ou anonimizados para evitar exposição de informações confidenciais.
