import { Monitor, Smartphone, Server } from "lucide-react";

import { Service } from "@/@types/Service";

export const services: Service[] = [
  {
    title: "Criação de Sites",
    description:
      "Desenvolvimento de websites responsivos, modernos e otimizados para SEO.",
    icon: <Monitor className="h-5 w-5 text-gray-700 dark:text-zinc-200" />,
  },
  {
    title: "Criação de Aplicativos",
    description:
      "Desenvolvimento de apps multiplataforma com ótima experiência do usuário.",
    icon: <Smartphone className="h-5 w-5 text-gray-700 dark:text-zinc-200" />,
  },
  {
    title: "Criação de Servidores",
    description:
      "APIs e sistemas backend seguros, robustos e escaláveis com boas práticas.",
    icon: <Server className="h-5 w-5 text-gray-700 dark:text-zinc-200" />,
  },
];
