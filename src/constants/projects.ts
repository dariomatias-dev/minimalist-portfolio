import { Project } from "@/@types/Project";

export const projects: Project[] = [
  {
    title: "Flutter Guide App",
    description:
      "Flutter Guide é um app educativo que ajuda desenvolvedores a aprender Flutter com exemplos práticos.",
    technologies: ["Dart", "Flutter"],
    image: "image_placeholder.png",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.dariomatias.flutter_guide",
      github: "https://github.com/dariomatias-dev/flutter_guide_app",
    },
  },
  {
    title: "Flutter Guide Web",
    description:
      "Site oficial do Flutter Guide, com informações, principais funcionalidades, capturas de tela, política de privacidade e link direto para download na Google Play Store.",
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
    image: "image_placeholder.png",
    links: {
      site: "https://flutter-guide-web.vercel.app/",
      github: "https://github.com/dariomatias-dev/flutter_guide_web",
    },
  },
  {
    title: "Fit App",
    description: "Aplicativo de treinos para facilitar seus exercícios.",
    technologies: ["Dart", "Flutter"],
    image: "image_placeholder.png",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.dariomatias.fit_app",
    },
  },
  {
    title: "Scroll Infinity",
    description: "Pacote Flutter para adição simplificada de rolagem infinita.",
    technologies: ["Dart", "Flutter"],
    image: "image_placeholder.png",
    links: {
      github: "https://github.com/dariomatias-dev/scroll_infinity",
    },
  },
  {
    title: "Go Validators",
    description:
      "Pacote com utilitários de validação para garantir a integridade dos dados em aplicações Go, utilizando apenas bibliotecas nativas.",
    technologies: ["GoLang"],
    image: "image_placeholder.png",
    links: {
      github: "https://github.com/dariomatias-dev/go-validators",
    },
  },
];
