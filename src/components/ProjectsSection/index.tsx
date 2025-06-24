"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { projects } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";

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
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6 px-1">
            {projects.map(
              (project) => (
                <div
                  key={project.title}
                  className="max-w-sm min-w-[300px] flex-shrink-0"
                >
                  <ProjectCard project={project} />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Carousel's Actions */}
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
