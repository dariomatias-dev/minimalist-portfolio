"use client";

import { ChevronDown, Download } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import { ActionButton } from "./ActionButton";

export const HeroSection = () => {
  const scrollToAbout = (e: MouseEvent<HTMLAnchorElement>) => {
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
      <motion.div
        className="mb-10 pb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
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
      </motion.div>

      <div className="absolute right-0 bottom-10 left-0 hidden justify-center sm:flex">
        <motion.a
          href="#about"
          aria-label="Scroll para a próxima seção"
          className="text-gray-400 transition-colors hover:text-gray-600"
          style={{ animationDuration: "1500ms" }}
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
