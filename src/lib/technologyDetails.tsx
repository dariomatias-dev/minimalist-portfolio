export type Technology = {
  label: string;
  iconName: string;
  iconNameDark?: string;
  url: string;
  shortDescription: string;
  fullDescription: string;
};

export const technologyDetails: Record<string, Technology> = {
  // Programming Languages
  TypeScript: {
    label: "TypeScript",
    iconName: "typescript_icon",
    url: "https://www.typescriptlang.org",
    shortDescription:
      "Superset do JavaScript que adiciona tipagem estática ao JS.",
    fullDescription:
      "TypeScript é uma linguagem baseada em JavaScript que adiciona tipagem estática opcional. Essa tipagem melhora a legibilidade do código, facilita a manutenção e reduz erros durante o desenvolvimento, sendo amplamente adotada em aplicações de médio e grande porte.",
  },
  Dart: {
    label: "Dart",
    iconName: "dart_icon",
    url: "https://dart.dev",
    shortDescription:
      "Linguagem moderna desenvolvida pelo Google, usada principalmente com Flutter.",
    fullDescription:
      "Dart é uma linguagem de programação otimizada para desenvolvimento de interfaces modernas e reativas. Desenvolvida pelo Google, é fortemente tipada, suporta orientação a objetos e é amplamente utilizada com o Flutter para criar aplicações multiplataforma.",
  },
  Go: {
    label: "Go (Golang)",
    iconName: "golang_icon",
    url: "https://go.dev",
    shortDescription:
      "Linguagem de programação eficiente e compilada, ideal para backends escaláveis.",
    fullDescription:
      "Go, também conhecida como Golang, é uma linguagem de programação compilada e criada pelo Google, focada em simplicidade, performance e concorrência. É amplamente utilizada no desenvolvimento de APIs, servidores e sistemas distribuídos devido à sua leveza e robustez.",
  },

  // Frameworks
  TailwindCSS: {
    label: "TailwindCSS",
    iconName: "tailwindcss_icon",
    url: "https://tailwindcss.com",
    shortDescription:
      "Framework utilitário de CSS para construir interfaces modernas e responsivas.",
    fullDescription:
      "TailwindCSS é um framework utilitário que oferece classes pré-definidas para estilização direta no HTML. Ele proporciona agilidade no desenvolvimento de interfaces responsivas, mantendo consistência visual e reduzindo a necessidade de CSS personalizado.",
  },
  "Next.js": {
    label: "Next.js",
    iconName: "nextjs_icon",
    iconNameDark: "nextjs_dark_icon",
    url: "https://nextjs.org",
    shortDescription:
      "Framework React com renderização híbrida, ótimo para SEO e performance.",
    fullDescription:
      "Next.js é um framework para aplicações React que permite renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e APIs integradas. Ideal para aplicações modernas, com foco em performance, SEO e ótima experiência de desenvolvedor.",
  },
  "shadcn/ui": {
    label: "shadcn/ui",
    iconName: "shadcnui_icon",
    url: "https://ui.shadcn.com",
    shortDescription:
      "Componentes acessíveis e estilizados usando Radix e TailwindCSS.",
    fullDescription:
      "shadcn/ui é uma coleção de componentes acessíveis, construídos com Radix UI e estilizados com TailwindCSS. Ele combina acessibilidade, personalização e boas práticas, sendo ideal para interfaces modernas em aplicações React com foco em usabilidade e consistência.",
  },
  Flutter: {
    label: "Flutter",
    iconName: "flutter_icon",
    url: "https://flutter.dev",
    shortDescription:
      "Framework da Google para criar apps multiplataforma com uma única base de código.",
    fullDescription:
      "Flutter é um framework de UI criado pela Google que permite desenvolver aplicações nativas para Android, iOS, Web e Desktop com uma única base de código, utilizando a linguagem Dart. Ele oferece uma rica coleção de widgets, alta performance e suporte a interfaces modernas.",
  },
  Fastify: {
    label: "Fastify",
    iconName: "fastify_icon",
    iconNameDark: "fastify_dark_icon",
    url: "https://fastify.dev",
    shortDescription:
      "Framework web Node.js leve e rápido, com foco em performance.",
    fullDescription:
      "Fastify é um framework web para Node.js projetado para oferecer alta performance com baixa sobrecarga. É extensível por plugins e é excelente para APIs rápidas e escaláveis.",
  },
  NestJS: {
    label: "NestJS",
    iconName: "nestjs_icon",
    url: "https://nestjs.com",
    shortDescription:
      "Framework backend para Node.js com arquitetura modular baseada em TypeScript.",
    fullDescription:
      "NestJS é um framework backend moderno construído com TypeScript e inspirado no Angular. Ele promove uma arquitetura modular, facilita testes e permite o uso de bibliotecas express ou fastify.",
  },

  // Databases
  SQLite: {
    label: "SQLite",
    iconName: "sqlite_icon",
    url: "https://www.sqlite.org",
    shortDescription:
      "Banco de dados relacional leve e embutido, ideal para apps locais.",
    fullDescription:
      "SQLite é um banco de dados SQL leve, embutido, autocontido e sem servidor. Ele é amplamente utilizado em aplicações mobile, desktop e sistemas embarcados por sua simplicidade e eficiência.",
  },
  PostgreSQL: {
    label: "PostgreSQL",
    iconName: "postgresql_icon",
    url: "https://www.postgresql.org",
    shortDescription:
      "Banco de dados relacional robusto, open source e altamente escalável.",
    fullDescription:
      "PostgreSQL é um banco de dados relacional open source conhecido por sua robustez, conformidade com padrões e extensibilidade. Ele oferece suporte a JSON, replicação, indexação avançada e mais.",
  },

  // ORMs
  Prisma: {
    label: "Prisma",
    iconName: "prisma_icon",
    url: "https://www.prisma.io",
    shortDescription:
      "ORM moderno para Node.js e TypeScript com foco em performance e DX.",
    fullDescription:
      "Prisma é um ORM de próxima geração que facilita o acesso a bancos de dados com uma API tipada em TypeScript. Ele melhora a produtividade do desenvolvedor, garante consistência nos dados e é compatível com bancos como PostgreSQL, MySQL e SQLite.",
  },

  // Services
  Firebase: {
    label: "Firebase",
    iconName: "firebase_icon",
    url: "https://firebase.google.com",
    shortDescription:
      "Plataforma do Google com serviços para apps como auth, banco em tempo real e mais.",
    fullDescription:
      "Firebase é uma plataforma do Google que oferece diversos serviços como autenticação, banco de dados em tempo real, Firestore, analytics, notificações push, storage e hosting para acelerar o desenvolvimento de aplicações.",
  },

  // Others
  NodeJS: {
    label: "Node.js",
    iconName: "nodejs_icon",
    url: "https://nodejs.org",
    shortDescription:
      "Ambiente de execução para JavaScript no backend, baseado em V8.",
    fullDescription:
      "Node.js é um ambiente de execução de JavaScript no lado do servidor, baseado no motor V8 do Chrome. Ele é amplamente usado para construir APIs, servidores e aplicações em tempo real com alta performance.",
  },
};
