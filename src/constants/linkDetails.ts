import { ArrowUpRight, Package, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { LinkDetail } from "@/@types/LinkDetail";
import type { ProjectLinkType } from "@/@types/Project";

export const linkDetails: Record<ProjectLinkType, LinkDetail> = {
  github: {
    icon: FaGithub,
    label: "Ver Repositório",
    tooltip:
      "Repositório no GitHub, onde pode acessar o código-fonte completo do projeto, acompanhar atualizações, issues e contribuir.",
  },
  site: {
    icon: ArrowUpRight,
    label: "Ver Site",
    tooltip: "Site oficial do projeto.",
  },
  playStore: {
    icon: Play,
    label: "Ver na Play Store",
    tooltip:
      "Página do aplicativo na Google Play Store, a loja oficial de apps para dispositivos Android, onde pode baixar e avaliar o app.",
  },
  pubDev: {
    icon: Package,
    label: "Ver no pub.dev",
    tooltip:
      "Pacote Dart/Flutter hospedado no pub.dev, o repositório oficial de pacotes Dart/Flutter, onde pode ver a documentação, versões e dependências.",
  },
  goDev: {
    icon: Package,
    label: "Ver na pkg.go.dev",
    tooltip:
      "Pacote Go (GoLang) hospedado no pkg.go.dev, o repositório oficial de bibliotecas Go (GoLang), com documentação e detalhes técnicos.",
  },
};
