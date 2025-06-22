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
    title: "Flutter Guide",
    description: "App educativo para aprender Flutter com exemplos práticos.",
    technologies: ["Flutter", "Dart", "Firebase"],
    image:
      "https://github.com/dariomatias-dev/flutter_guide_web/blob/main/public/flutter_guide_icon.png",
    href: "https://github.com/dariomatias-dev/flutter_guide",
  },
  {
    title: "Portfolio Next.js",
    description:
      "Meu portfolio pessoal construído com Next.js, Tailwind e shadcn/ui.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui"],
    image:
      "https://github.com/dariomatias-dev/flutter_guide_web/blob/main/public/flutter_guide_icon.png",
    href: "https://github.com/dariomatias-dev/portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto mb-20 max-w-5xl">
      <h2 className="mb-10 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Projetos
      </h2>

      <div className="grid gap-10 sm:grid-cols-2">
        {projects.map(({ title, description, href, technologies, image }) => (
          <Card
            key={title}
            className="flex flex-col rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-t-lg border-b border-gray-200 bg-white">
              <img
                src="https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_web/main/public/flutter_guide_icon.png"
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
                            className="rounded bg-gray-100 px-2 py-0.5 transition hover:underline"
                          >
                            {info.label}
                          </a>
                        </TooltipTrigger>

                        <TooltipContent
                          className="z-50 max-w-xs rounded-md bg-black px-3 py-2 text-xs text-white shadow-md"
                          sideOffset={8}
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={`/icons/${info.iconName}.png`}
                              alt={info.label}
                              width={16}
                              height={16}
                              className="h-4 w-4"
                            />
                            <span>{info.description}</span>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>

                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="link"
                    className="mt-4 p-0 text-gray-600 underline hover:text-gray-900"
                  >
                    Ver no GitHub
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
