"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { projects } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";
import { Button } from "../ui/button";

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
        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden pb-6">
          <div className="flex gap-6 px-1">
            {projects.map((project) => (
              <div
                key={project.title}
                className="max-w-sm min-w-[300px] flex-shrink-0"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel's Actions */}
        <div className="flex justify-between">
          <Button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            variant="ghost"
            size="icon"
            className="cursor-pointer rounded-full shadow-md transition-colors duration-200 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:opacity-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            onClick={scrollNext}
            disabled={!canScrollNext}
            variant="ghost"
            size="icon"
            className="cursor-pointer rounded-full shadow-md transition-colors duration-200 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:opacity-30"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
