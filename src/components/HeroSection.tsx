"use client";

import Link from "next/link";
import { Download, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";

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
      className="relative mx-auto flex min-h-[90vh] max-w-3xl scroll-mt-24 flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-4 text-lg font-semibold text-gray-700">
        Olá! Eu sou Dário Matias
      </p>

      <h1 className="mb-8 text-6xl font-extrabold tracking-tight text-gray-900">
        Full Stack Developer
      </h1>

      <p className="mx-auto mb-12 max-w-xl text-sm text-gray-600">
        Desenvolvedor mobile especializado em Flutter, com experiência em
        frontend web e backend. Atualmente curso Análise e Desenvolvimento de
        Sistemas no IFPB - campus Esperança, ampliando conhecimentos através de
        projetos diversos.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="https://wa.me/5583986404371"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="default"
            className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full bg-black py-6 text-sm font-semibold text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-600"
            aria-label="Contato via WhatsApp"
          >
            Fale comigo
            <FaWhatsapp className="h-5 w-5" />
          </Button>
        </Link>

        <Link href="/curriculo.pdf" target="_blank" download>
          <Button
            variant="outline"
            className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full border py-6 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
            aria-label="Baixar currículo em PDF"
          >
            Baixar Currículo
            <Download className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="absolute right-0 bottom-10 left-0 flex justify-center">
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
