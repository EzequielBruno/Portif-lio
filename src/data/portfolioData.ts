export type Project = {
  title: string;
  description: string;
  objective: string;
  tools: string[];
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export const differentiators = [
  { title: "Visão prática de indústria", description: "Experiência com processos reais, qualidade, matéria-prima, análise operacional e rotina industrial.", icon: "🏭" },
  { title: "Dados aplicados à decisão", description: "Criação de dashboards e indicadores para transformar dados brutos em informações claras.", icon: "📊" },
  { title: "Melhoria contínua", description: "Uso de pensamento Lean Six Sigma para identificar perdas, tendências, gargalos e oportunidades.", icon: "⚙️" },
  { title: "Tecnologia com propósito", description: "Conhecimento em Power BI, Excel, Oracle ERP, SQL, automações e desenvolvimento para resolver problemas reais.", icon: "💡" },
];

export const projects: Project[] = [
  { title: "Análise e Acompanhamento de Projetos Jira com Plataforma BI", description: "Projeto completo para análise, acompanhamento e governança de projetos no Jira, com plataforma de Business Intelligence desenvolvida para visão gerencial e executiva. A solução consolida status, prazos, responsáveis, backlog, evolução das entregas, riscos, impedimentos e indicadores de performance em dashboards claros para gerentes e gestores.", objective: "Dar visibilidade estratégica à carteira de projetos, apoiar decisões de priorização, acompanhar produtividade e antecipar atrasos, gargalos e riscos operacionais.", tools: ["Jira", "Power BI", "Business Intelligence", "Dashboards gerenciais", "Indicadores de projetos"], highlights: ["Visão para gerente e gestor", "Acompanhamento de prazos", "Status por projeto", "Riscos e impedimentos", "Backlog e entregas", "Indicadores executivos"] },
  { title: "Implantação ERP Oracle", description: "Atuação em projetos de implantação ERP Oracle, com 3 anos de experiência em implantação, parametrização, validação de processos e suporte a áreas de negócio. Especialidade em configurações contábeis e de impostos, garantindo aderência às regras fiscais, contábeis e operacionais.", objective: "Apoiar a implantação do ERP Oracle com foco em processos financeiros, fiscais e contábeis, assegurando configurações corretas, validações consistentes e maior segurança na operação.", tools: ["Oracle ERP", "Oracle Fusion", "Configurações contábeis", "Configurações de impostos", "Processos financeiros"], highlights: ["3 anos de experiência em implantação", "Especialista em configurações contábeis", "Especialista em impostos", "Parametrização ERP", "Validação de processos", "Suporte ao negócio"] },
  { title: "Oracle Integration Cloud (OIC) para Integrações ERP", description: "Experiência com Oracle Integration Cloud (OIC) aplicada a integrações de ERP, conectando sistemas, automatizando fluxos de dados e apoiando processos corporativos entre módulos, plataformas e aplicações externas.", objective: "Viabilizar integrações confiáveis entre o ERP Oracle e outros sistemas, reduzindo retrabalho manual, aumentando rastreabilidade e melhorando a consistência das informações.", tools: ["Oracle Integration Cloud", "OIC", "Oracle ERP", "APIs", "Integrações"], highlights: ["Integrações de ERP", "Automação de fluxos", "Conexão entre sistemas", "APIs", "Rastreabilidade", "Consistência de dados"] },
  { title: "Dashboard de Qualidade da Matéria-Prima", description: "Dashboard criado para acompanhar a qualidade das cargas recebidas, analisando aprovações, reprovações, aprovações parciais, defeitos recorrentes, pontuação por carga, motivos de reprovação, fornecedores/produtores e tendências ao longo do tempo.", objective: "Apoiar a identificação de oportunidades de melhoria na qualidade da matéria-prima e facilitar a análise histórica dos resultados.", tools: ["Power BI", "Excel", "Análise de dados", "Indicadores de qualidade"], highlights: ["Taxa de aprovação", "Taxa de reprovação", "Defeitos por período", "Tendência por produtor", "Pontuação por carga", "Classificação de desempenho"] },
  { title: "Análise de Desempenho de Produtores e Fazendas", description: "Modelo analítico para classificar produtores com base no desempenho das cargas, considerando que um mesmo produtor pode possuir várias fazendas com resultados diferentes.", objective: "Evitar classificações injustas e permitir uma análise mais equilibrada por produtor, fazenda, volume, histórico, estabilidade e criticidade dos defeitos.", tools: ["Power BI", "Excel", "Modelagem analítica", "Critérios de classificação"], highlights: ["Classe S: 95% a 100%", "Classe A: alto desempenho", "Classe B: bom com atenção", "Classe C: instável", "Classe D: crítico ou recorrente", "Volume, estabilidade e tendência histórica"] },
  { title: "Dashboard de Desempenho da Equipe", description: "Dashboard voltado ao acompanhamento de produtividade, desempenho operacional, volume de análises, indicadores de rotina e apoio à liderança.", objective: "Acompanhar a evolução da equipe, identificar gargalos, apoiar decisões e visualizar tendências de desempenho.", tools: ["Power BI", "Excel", "Indicadores operacionais"], highlights: ["Produtividade", "Volume de análises", "Rotina operacional", "Gargalos", "Apoio à liderança"] },
  { title: "Análise FTY e FTQ", description: "Análise para acompanhamento de First Time Yield e First Time Quality, separando visões gerais, anuais, mensais, diárias e tendências.", objective: "Melhorar a leitura dos indicadores e evitar dashboards poluídos, com páginas separadas para análise estratégica e operacional.", tools: ["Power BI", "Modelagem de dados", "DimData", "DAX"], highlights: ["FTY", "FTQ", "Visões anual/mensal/diária", "Tendências", "Páginas estratégicas e operacionais"] },
  { title: "Controle de Açúcar em Batatas Armazenadas", description: "Modelo de acompanhamento semanal dos resultados de açúcar em câmaras de armazenamento, usando gráficos e indicadores para analisar variações ao longo do tempo.", objective: "Acompanhar comportamento dos resultados por câmara, semana e tipo de análise, facilitando comparações históricas e identificação de padrões.", tools: ["Power BI", "Excel", "Análise temporal", "Gráficos de dispersão"], highlights: ["Indicadores semanais", "Comparações históricas", "Análise por câmara", "Padrões de variação"] },
  { title: "Relatórios Oracle Fusion ERP", description: "Experiência e estudos com Oracle Fusion ERP, OTBI e BI Publisher para criação, ajuste e análise de relatórios corporativos.", objective: "Apoiar a extração de informações, análise de dados sistêmicos, validação de cálculos e melhoria de relatórios.", tools: ["Oracle Fusion ERP", "OTBI", "BI Publisher", "SQL", "Excel"], highlights: ["Relatórios operacionais", "Validação de dados", "Cálculos", "Extração sistêmica"] },
  { title: "Sistema de Ponto Eletrônico Web", description: "Projeto próprio de sistema web para controle de ponto eletrônico, com login, registro de entrada e saída, geolocalização, cálculo de horas trabalhadas, horas extras e relatórios.", objective: "Criar uma solução digital para controle de jornada com foco em usabilidade, segurança e organização de dados.", tools: ["Next.js", "React", "NestJS", "Prisma", "PostgreSQL", "JWT", "Docker", "Tailwind CSS"], highlights: ["Login", "Geolocalização", "Horas extras", "Relatórios", "Segurança"] },
  { title: "Plataforma para Profissionais Autônomos", description: "Ideia de aplicativo web para profissionais autônomos gerenciarem agenda, orçamentos, pagamentos, clientes e indicadores.", objective: "Centralizar a gestão do profissional autônomo em uma solução simples, moderna e escalável.", tools: ["Next.js", "Banco de dados", "APIs", "Dashboard analítico", "Integrações de pagamento"], highlights: ["Agenda", "Orçamentos", "Pagamentos", "Clientes", "Indicadores"] },
];

export const skillGroups: SkillGroup[] = [
  { title: "Dados e BI", skills: ["Power BI", "Excel", "Power Query", "DAX", "Modelagem de dados", "Dashboards", "Indicadores", "Análise de tendências"] },
  { title: "Indústria e Qualidade", skills: ["Controle de qualidade", "Análise de matéria-prima", "Indicadores industriais", "Melhoria contínua", "Lean Six Sigma", "PCP", "Análise de processos", "Gestão visual"] },
  { title: "ERP, Fiscal e Integrações", skills: ["Oracle Fusion ERP", "Oracle ERP", "OIC", "OTBI", "BI Publisher", "SQL", "Implantação ERP", "Configurações contábeis", "Configurações de impostos", "Integração entre sistemas"] },
  { title: "Desenvolvimento", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "NestJS", "APIs", "PostgreSQL", "Prisma", "Docker"] },
];

export const services = ["Criação de dashboards em Power BI", "Organização e automação de planilhas Excel", "Desenvolvimento de relatórios gerenciais", "Análise de indicadores industriais", "Consultoria em melhoria de processos", "Relatórios Oracle OTBI / BI Publisher", "Implantação e parametrização ERP Oracle", "Integrações ERP com Oracle Integration Cloud (OIC)", "Integrações e automações com dados", "Desenvolvimento de sistemas web simples para processos internos"];

export const processSteps = ["Entendimento do problema", "Levantamento dos dados disponíveis", "Organização e tratamento das informações", "Criação dos indicadores", "Desenvolvimento do dashboard ou solução", "Validação dos cálculos", "Ajustes com base no uso real", "Entrega e orientação de uso"];

export const experienceItems = ["Atuação em ambiente industrial", "Controle de qualidade da matéria-prima", "Acompanhamento de resultados operacionais", "Apoio à equipe técnica", "Desenvolvimento de dashboards próprios", "Estudos em Power BI, Excel e análise de dados", "3 anos de experiência em implantação ERP Oracle", "Especialista em configurações contábeis e de impostos", "Experiência em integrações ERP com Oracle Integration Cloud (OIC)", "Conhecimentos em Oracle ERP, relatórios e automações", "Aplicação de melhoria contínua na rotina profissional"];
