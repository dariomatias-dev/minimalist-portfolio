export type Technology = {
  label: string;
  iconName: string;
  description: string;
  url: string;
};

export const technologyDetails: Record<string, Technology> = {
  Flutter: {
    label: "Flutter",
    iconName: "flutter_icon",
    description:
      "Framework da Google para criar apps multiplataforma com uma única base de código.",
    url: "https://flutter.dev",
  },
  Dart: {
    label: "Dart",
    iconName: "dart_icon",
    description:
      "Linguagem moderna desenvolvida pelo Google, usada principalmente com Flutter.",
    url: "https://dart.dev",
  },
  "Next.js": {
    label: "Next.js",
    iconName: "nextjs_icon",
    description:
      "Framework React com renderização híbrida, ótimo para SEO e performance.",
    url: "https://nextjs.org",
  },
  TypeScript: {
    label: "TypeScript",
    iconName: "typescript_icon",
    description: "Superset do JavaScript que adiciona tipagem estática ao JS.",
    url: "https://www.typescriptlang.org",
  },
  TailwindCSS: {
    label: "TailwindCSS",
    iconName: "tailwindcss_icon",
    description:
      "Framework utilitário de CSS para construir interfaces modernas e responsivas.",
    url: "https://tailwindcss.com",
  },
  "shadcn/ui": {
    label: "shadcn/ui",
    iconName: "shadcnui_icon",
    description:
      "Componentes acessíveis e estilizados usando Radix e TailwindCSS.",
    url: "https://ui.shadcn.com",
  },
};
