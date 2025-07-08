"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { highlightText } from "@/lib/AboutMehighlightText";

export const AboutMeSection = () => {
  const t = useTranslations("HomePage.AboutSection");

  const paragraphsCount = 4;

  return (
    <section
      id="about"
      className="mx-auto max-w-3xl scroll-mt-24 px-4 text-center"
    >
      <motion.h2
        className="text-foreground text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("title")}
      </motion.h2>

      <motion.div
        className="mt-8 space-y-6 text-base leading-relaxed text-balance text-gray-600 sm:text-lg dark:text-gray-400"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: {} }}
      >
        {Array.from({ length: paragraphsCount }).map((_, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {highlightText(t(`paragraphs.${index}`))}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};
