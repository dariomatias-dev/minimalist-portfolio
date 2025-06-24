import Image from "next/image";
import Link from "next/link";

import { Project } from "@/@types/Project";
import { linkDetails } from "@/lib/linkDetails";
import { technologyDetails } from "@/lib/technologyDetails";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({
  project: { title, description, technologies, image, links },
}: ProjectCardProps) => {
  return (
    <Card className="flex h-full flex-col rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg border-b border-gray-200 bg-white">
        <img
          src={image || "/image_placeholder.png"}
          alt={`${title} logo`}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;

            e.currentTarget.src = "/image_placeholder.png";
          }}
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
            {links.length > 0 && (
              <>
                {links.map(({ type, url }) => {
                  const detail = linkDetails[type];
                  if (!detail) return null;

                  return (
                    <Tooltip key={url} delayDuration={100}>
                      <TooltipTrigger asChild>
                        <Link href={url} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="link"
                            className="p-0 text-gray-600 underline hover:text-gray-900 cursor-pointer"
                            aria-label={detail.tooltip}
                          >
                            {detail.label}
                          </Button>
                        </Link>
                      </TooltipTrigger>

                      <TooltipContent
                        className="z-50 max-w-xs rounded-md bg-black px-3 py-2 text-xs text-white shadow-md"
                        sideOffset={8}
                      >
                        {detail.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
