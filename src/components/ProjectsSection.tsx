"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { technologyDetails } from "@/lib/technologyDetails";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/constants/projects";

export const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="mx-auto mb-20 max-w-5xl scroll-mt-24">
      <h2 className="mb-10 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Projetos
      </h2>

      <div className="relative">
        {/* Carousel wrapper */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6 px-1">
            {projects.map(
              ({ title, description, technologies, image, links }) => (
                <div
                  key={title}
                  className="max-w-sm min-w-[300px] flex-shrink-0"
                >
                  <Card className="flex h-full flex-col rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
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

                      <p className="mt-2 flex-grow text-gray-700">
                        {description}
                      </p>

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
                                      src={`/icons/${
                                        info.iconNameDark ?? info.iconName
                                      }.png`}
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
                </div>
              ),
            )}
          </div>
        </div>

        {/* Botões abaixo do carrossel */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="rounded-full bg-white p-2 shadow-md transition disabled:opacity-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="rounded-full bg-white p-2 shadow-md transition disabled:opacity-30"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
