"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { projects } from "@/constants/projects";
import { Button } from "../ui/button";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
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
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="w-full scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-foreground text-4xl font-bold tracking-tight">
            O Que Tenho Criado
          </h2>

          <p className="text-muted-foreground mt-4 text-lg">
            Uma seleção dos meus principais projetos desenvolvidos ao longo da
            minha trajetória.
          </p>
        </motion.div>

        {/* Carrossel */}
        <motion.div
          className="relative mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <div ref={emblaRef} className="overflow-hidden pb-6">
            <div className="flex gap-6 px-1">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  className="w-full max-w-[380px] flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel Buttons */}
          <motion.div
            className="flex justify-between"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div whileTap={{ scale: 0.95 }}>
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
            </motion.div>

            <motion.div whileTap={{ scale: 0.95 }}>
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
