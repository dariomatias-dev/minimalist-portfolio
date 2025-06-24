import { ProjectLinkType } from "@/@types/Project";

export const linkDetails: Record<
  ProjectLinkType,
  { label: string; tooltip: string }
> = {
  github: {
    label: "Ver Repositório",
    tooltip:
      "Repositório no GitHub, onde pode acessar o código-fonte completo do projeto, acompanhar atualizações, issues e contribuir.",
  },
  site: {
    label: "Ver Site",
    tooltip: "Site oficial do projeto.",
  },
  playStore: {
    label: "Ver na Play Store",
    tooltip:
      "Página do aplicativo na Google Play Store, a loja oficial de apps para dispositivos Android, onde pode baixar e avaliar o app.",
  },
  pubDev: {
    label: "Ver no pub.dev",
    tooltip:
      "Pacote Dart/Flutter hospedado no pub.dev, o repositório oficial de pacotes Dart/Flutter, onde pode ver a documentação, versões e dependências.",
  },
  goDev: {
    label: "Ver na pkg.go.dev",
    tooltip:
      "Pacote Go (GoLang) hospedado no pkg.go.dev, o repositório oficial de bibliotecas Go (GoLang), com documentação e detalhes técnicos.",
  },
};
