export type Technology = {
  label: string;
  iconName: string;
  url: string;
  shortDescription: string;
  fullDescription: string;
};

export const technologyDetails: Record<string, Technology> = {
  TailwindCSS: {
    label: "TailwindCSS",
    iconName: "tailwindcss_icon",
    url: "https://tailwindcss.com",
    shortDescription:
      "Framework utilitário de CSS para construir interfaces modernas e responsivas.",
    fullDescription:
      "TailwindCSS é um framework utilitário que oferece classes pré-definidas para estilização direta no HTML. Ele proporciona agilidade no desenvolvimento de interfaces responsivas, mantendo consistência visual e reduzindo a necessidade de CSS personalizado.",
  },
  TypeScript: {
    label: "TypeScript",
    iconName: "typescript_icon",
    url: "https://www.typescriptlang.org",
    shortDescription:
      "Superset do JavaScript que adiciona tipagem estática ao JS.",
    fullDescription:
      "TypeScript é uma linguagem baseada em JavaScript que adiciona tipagem estática opcional. Essa tipagem melhora a legibilidade do código, facilita a manutenção e reduz erros durante o desenvolvimento, sendo amplamente adotada em aplicações de médio e grande porte.",
  },
  "Next.js": {
    label: "Next.js",
    iconName: "nextjs_icon",
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
  Dart: {
    label: "Dart",
    iconName: "dart_icon",
    url: "https://dart.dev",
    shortDescription:
      "Linguagem moderna desenvolvida pelo Google, usada principalmente com Flutter.",
    fullDescription:
      "Dart é uma linguagem de programação otimizada para desenvolvimento de interfaces modernas e reativas. Desenvolvida pelo Google, é fortemente tipada, suporta orientação a objetos e é amplamente utilizada com o Flutter para criar aplicações multiplataforma.",
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
  Go: {
    label: "Go (Golang)",
    iconName: "golang_icon",
    url: "https://go.dev",
    shortDescription:
      "Linguagem de programação eficiente e compilada, ideal para backends escaláveis.",
    fullDescription:
      "Go, também conhecida como Golang, é uma linguagem de programação compilada e criada pelo Google, focada em simplicidade, performance e concorrência. É amplamente utilizada no desenvolvimento de APIs, servidores e sistemas distribuídos devido à sua leveza e robustez.",
  },
};
