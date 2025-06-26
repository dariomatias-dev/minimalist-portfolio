"use client";

import { ChevronDown, Download } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { ActionButton } from "./ActionButton";

export const HeroSection = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-3xl scroll-mt-20 flex-col items-center justify-center px-6 text-center sm:scroll-mt-24"
    >
      <div className="mb-10 pb-10">
        <p className="mb-4 text-base font-semibold text-gray-700 sm:text-lg">
          Olá! Eu sou Dário Matias
        </p>

        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
          Full Stack Developer
        </h1>

        <p className="mx-auto max-w-xl text-sm text-gray-600 sm:text-base">
          Desenvolvedor mobile especializado em Flutter, com experiência em
          frontend web e backend. Atualmente curso Análise e Desenvolvimento de
          Sistemas no IFPB - campus Esperança, ampliando conhecimentos através
          de projetos diversos.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="https://wa.me/5583986404371"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ActionButton
            label="Fale comigo"
            icon={<FaWhatsapp className="h-5 w-5" />}
          />
        </Link>

        <Link href="/curriculum.pdf" target="_blank" download>
          <ActionButton
            variant="outline"
            label="Baixar Currículo"
            icon={<Download className="h-5 w-5" />}
          />
        </Link>
      </div>

      <div className="absolute right-0 bottom-10 left-0 hidden justify-center sm:flex">
        <a
          href="#about"
          aria-label="Scroll para a próxima seção"
          className="animate-bounce text-gray-400 transition-colors hover:text-gray-600"
          style={{ animationDuration: "1500ms" }}
          onClick={scrollToAbout}
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};
