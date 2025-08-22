"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MouseEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { ActionButton } from "./action-button";

export const HeroSection = () => {
  const t = useTranslations("HomePage.HeroSection");

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
      className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-3xl scroll-mt-20 flex-col items-center justify-center px-6 text-center sm:scroll-mt-24"
    >
      <motion.div
        className="mb-10 pb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 text-base font-semibold text-gray-700 sm:text-lg dark:text-gray-300">
          {t("greeting")}
        </p>

        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white">
          Full Stack Developer
        </h1>

        <p className="mx-auto max-w-xl text-sm text-gray-600 sm:text-base dark:text-gray-400">
          {t("description")}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="https://wa.me/5583986404371"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ActionButton
            label={t("contactButton")}
            icon={<FaWhatsapp className="h-5 w-5" />}
          />
        </Link>

        <Link href="/cv.pdf" target="_blank" download>
          <ActionButton
            variant="outline"
            label={t("downloadCV")}
            icon={<Download className="h-5 w-5" />}
          />
        </Link>
      </motion.div>

      <div className="absolute right-0 bottom-10 left-0 hidden justify-center sm:flex">
        <motion.a
          href="#about"
          aria-label={t("scrollLabel")}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
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
