"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import type { Project } from "@/@types/Project";
import { getLinkDetails } from "@/lib/getLinkDetails";
import { getTechnologyDetails } from "@/lib/getTechnologyDetails ";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageViewer = ({ src, alt, onClose }: ImageViewerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <motion.div
        initial={{ scale: 0.9, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative h-auto max-h-[90vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-card overflow-hidden rounded-lg border border-zinc-600 shadow-xl dark:border-zinc-800">
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="h-full w-full object-contain"
          />
        </div>
      </motion.div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={onClose}
        className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/75"
        aria-label="Fechar visualizador de imagem"
      >
        <X size={20} />
      </motion.button>
    </motion.div>
  );

  if (!isMounted) {
    return null;
  }

  return createPortal(modalContent, document.body);
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const t = useTranslations("HomePage.ProjectsSection");
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [imageSrc, setImageSrc] = useState(
    project.image || "/image_placeholder.png",
  );
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const technologyDetails = getTechnologyDetails(
    useTranslations("HomePage.technologies"),
  );
  const linkDetails = getLinkDetails(t);

  useEffect(() => {
    setImageSrc(
      `/screenshots/${project.title.toLowerCase().replaceAll(" ", "_")}_screenshot.png`,
    );
  }, [project.title]);

  const openViewer = useCallback(() => setIsViewerOpen(true), []);
  const closeViewer = useCallback(() => setIsViewerOpen(false), []);

  return (
    <>
      <motion.article
        className="group bg-card text-card-foreground relative flex h-full flex-col rounded-lg border shadow-sm transition-shadow duration-300 hover:shadow-md dark:bg-zinc-950"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <button
          onClick={openViewer}
          className="bg-background relative h-48 w-full cursor-pointer overflow-hidden rounded-t-lg border-b"
          aria-label={`Visualizar imagem do projeto ${project.title}`}
        >
          <Image
            src={imageSrc}
            alt={`${project.title} image`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageSrc("/image_placeholder.png")}
          />
        </button>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="flex items-center text-xl font-semibold">
            <span>{project.title}</span>
          </h3>

          <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-col gap-4 border-t pt-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => {
                const info =
                  technologyDetails[tech.toLowerCase().replace(/[^a-z]/g, "")];

                if (!info) return null;

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
                      className="z-50 max-w-xs rounded-md px-3 py-2 text-xs shadow-md"
                      sideOffset={8}
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={`/icons/${isDark ? info.iconName : (info.iconNameDark ?? info.iconName)}.png`}
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
              <TooltipProvider>
                {project.links.map(({ type, url }) => {
                  const detail = linkDetails[type];
                  if (!detail) return null;

                  return (
                    <Tooltip key={url}>
                      <TooltipTrigger asChild>
                        <Link
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary hover:border-primary inline-flex h-auto items-center gap-1.5 rounded-none border-b border-transparent p-0 text-sm font-medium no-underline transition-colors"
                        >
                          <detail.icon className="h-4 w-4" />
                          {detail.label}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p className="max-w-xs text-wrap">{detail.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {isViewerOpen && (
          <ImageViewer
            src={imageSrc}
            alt={`${project.title} image`}
            onClose={closeViewer}
          />
        )}
      </AnimatePresence>
    </>
  );
};
