"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { technologyDetails } from "@/lib/technologyDetails";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    title: "Flutter Guide App",
    description:
      "Flutter Guide é um app educativo que ajuda desenvolvedores a aprender Flutter com exemplos práticos.",
    technologies: ["Dart", "Flutter"],
    image:
      "https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_web/main/public/flutter_guide_icon.png",
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
    image:
      "https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_web/main/public/flutter_guide_icon.png",
    links: {
      site: "https://flutter-guide-web.vercel.app/",
      github: "https://github.com/dariomatias-dev/flutter_guide_web",
    },
  },
  {
    title: "Fit App",
    description: "Aplicativo de treinos para facilitar seus exercícios.",
    technologies: ["Dart", "Flutter"],
    image:
      "https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_web/main/public/flutter_guide_icon.png",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.dariomatias.fit_app",
    },
  },
  {
    title: "Scroll Infinity",
    description: "Pacote Flutter para adição simplificada de rolagem infinita.",
    technologies: ["Dart", "Flutter"],
    image:
      "https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_web/main/public/flutter_guide_icon.png",
    links: {
      github: "https://github.com/dariomatias-dev/scroll_infinity",
    },
  },
  {
    title: "Go Validators",
    description:
      "Pacote com utilitários de validação para garantir a integridade dos dados em aplicações Go, utilizando apenas bibliotecas nativas.",
    technologies: ["GoLang"],
    image:
      "https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_web/main/public/flutter_guide_icon.png",
    links: {
      github: "https://github.com/dariomatias-dev/go-validators",
    },
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto mb-20 max-w-5xl scroll-mt-24">
      <h2 className="mb-10 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Projetos
      </h2>

      <div className="grid gap-10 sm:grid-cols-2">
        {projects.map(({ title, description, technologies, image, links }) => (
          <Card
            key={title}
            className="flex flex-col rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-t-lg border-b border-gray-200 bg-white">
              <img
                src={image}
                alt={`${title} logo`}
                className="h-full w-full object-contain p-6"
                loading="lazy"
              />
            </div>

            <CardContent className="flex flex-grow flex-col">
              <CardTitle className="text-black">{title}</CardTitle>

              <p className="mt-2 flex-grow text-gray-700">{description}</p>

              <div className="mt-5">
                <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-500 select-none">
                  {technologies.map((tech) => {
                    const info = technologyDetails[tech];
                    if (!info) return null;

                    return (
                      <Tooltip key={tech} delayDuration={100}>
                        <TooltipTrigger asChild>
                          <a
                            href={info.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded bg-gray-100 px-2 py-0.5 text-gray-700"
                          >
                            <span className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-gray-500 before:transition-all before:duration-300 hover:before:w-full">
                              {info.label}
                            </span>
                          </a>
                        </TooltipTrigger>

                        <TooltipContent
                          className="z-50 max-w-xs rounded-md bg-black px-3 py-2 text-xs text-white shadow-md"
                          sideOffset={8}
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={`/icons/${info.iconNameDark ?? info.iconName}.png`}
                              alt={info.label}
                              width={16}
                              height={16}
                              className="h-4 w-4"
                            />
                            <span>{info.shortDescription}</span>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>

                <div className="mt-4 flex flex-wrap gap-4">
                  {links.site && (
                    <Link
                      href={links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="link"
                        className="p-0 text-gray-600 underline hover:text-gray-900"
                      >
                        Ver site
                      </Button>
                    </Link>
                  )}

                  {links.playStore && (
                    <Link
                      href={links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="link"
                        className="p-0 text-gray-600 underline hover:text-gray-900"
                      >
                        Ver na Play Store
                      </Button>
                    </Link>
                  )}

                  {links.github && (
                    <Link
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="link"
                        className="p-0 text-gray-600 underline hover:text-gray-900"
                      >
                        Ver no GitHub
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
