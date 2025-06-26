"use client";

import { ArrowUpRight, Package, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ElementType, useState } from "react";
import { FaGithub } from "react-icons/fa";

import type { Project, ProjectLinkType } from "@/@types/Project";
import { technologyDetails } from "@/lib/technologyDetails";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const linkDetails: Record<
  ProjectLinkType,
  { icon: ElementType; label: string }
> = {
  github: { icon: FaGithub, label: "GitHub" },
  site: { icon: ArrowUpRight, label: "Website" },
  playStore: { icon: Play, label: "Play Store" },
  pubDev: { icon: Package, label: "Pub.dev" },
  goDev: { icon: Package, label: "Go.dev" },
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const [imageSrc, setImageSrc] = useState(
    project.image || "/image_placeholder.png",
  );

  return (
    <article className="group bg-card text-card-foreground relative flex h-full flex-col rounded-lg border shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="bg-background relative h-48 w-full overflow-hidden rounded-t-lg border-b">
        <Image
          src={imageSrc}
          alt={`${project.title} image`}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
          onError={() => setImageSrc("/image_placeholder.png")}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="flex items-center text-xl font-semibold">
          <span>{project.title}</span>
        </h3>

        <p className="text-muted-foreground mt-2 flex-1 text-sm">
          {project.description}
        </p>

        <div className="mt-4 flex flex-col gap-4 border-t pt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => {
              const info = technologyDetails[tech];

              return (
                <Tooltip key={tech} delayDuration={150}>
                  <TooltipTrigger asChild>
                    <Link
                      href={info.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Saber mais sobre ${info.label}`}
                    >
                      <Badge variant="outline">{info.label}</Badge>
                    </Link>
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

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {project.links.map(({ type, url }) => {
              const detail = linkDetails[type];

              return (
                <Link
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary hover:border-primary inline-flex h-auto items-center gap-1.5 rounded-none border-b border-transparent p-0 text-sm font-medium no-underline transition-colors"
                >
                  <detail.icon className="h-4 w-4" />
                  {detail.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};
