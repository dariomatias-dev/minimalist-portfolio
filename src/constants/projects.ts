import { Project } from "@/@types/Project";

export const projects: Project[] = [
  {
    title: "Portfólio",
    description:
      "Portfólio pessoal com informações sobre mim, projetos, experiências e contato.",
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
    image: "image_placeholder.png",
    links: [
      {
        label: "Ver Repositório",
        url: "https://github.com/dariomatias-dev/portfolio",
      },
    ],
  },
  {
    title: "Flutter Guide App",
    description:
      "Flutter Guide é um app educativo que ajuda desenvolvedores a aprender Flutter com exemplos práticos.",
    technologies: ["Dart", "Flutter"],
    image: "image_placeholder.png",
    links: [
      {
        label: "Ver na Play Store",
        url: "https://play.google.com/store/apps/details?id=com.dariomatias.flutter_guide",
      },
      {
        label: "Ver Repositório",
        url: "https://github.com/dariomatias-dev/flutter_guide_app",
      },
    ],
  },
  {
    title: "Flutter Guide Web",
    description:
      "Site oficial do Flutter Guide, com informações, principais funcionalidades, capturas de tela, política de privacidade e link direto para download na Google Play Store.",
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
    image: "image_placeholder.png",
    links: [
      {
        label: "Ver Site",
        url: "https://flutter-guide-web.vercel.app/",
      },
      {
        label: "Ver Repositório",
        url: "https://github.com/dariomatias-dev/flutter_guide_web",
      },
    ],
  },
  {
    title: "Fit App",
    description: "Aplicativo de treinos para facilitar seus exercícios.",
    technologies: ["Dart", "Flutter"],
    image: "image_placeholder.png",
    links: [
      {
        label: "Ver na Play Store",
        url: "https://play.google.com/store/apps/details?id=com.dariomatias.fit_app",
      },
    ],
  },
  {
    title: "Scroll Infinity",
    description: "Pacote Flutter para adição simplificada de rolagem infinita.",
    technologies: ["Dart", "Flutter"],
    image: "image_placeholder.png",
    links: [
      {
        label: "Ver no pub.dev",
        url: "https://pub.dev/packages/scroll_infinity",
      },
      {
        label: "Ver Repositório",
        url: "https://github.com/dariomatias-dev/scroll_infinity",
      },
    ],
  },
  {
    title: "Go Validators",
    description:
      "Pacote com utilitários de validação para garantir a integridade dos dados em aplicações Go, utilizando apenas bibliotecas nativas.",
    technologies: ["GoLang"],
    image: "image_placeholder.png",
    links: [
      {
        label: "Ver na pkg.go.dev",
        url: "https://pkg.go.dev/github.com/dariomatias-dev/go-validators",
      },
      {
        label: "Ver Repositório",
        url: "https://github.com/dariomatias-dev/go-validators",
      },
    ],
  },
];
