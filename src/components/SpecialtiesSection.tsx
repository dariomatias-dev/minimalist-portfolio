"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

import { services } from "@/constants/services";
import { technologyDetails } from "@/constants/technologyDetails";

export const SpecialtiesSection = () => {
  const techKeys = Object.keys(technologyDetails);
  const [selectedTech, setSelectedTech] = useState<string>(techKeys[0]);
  const selectedInfo = technologyDetails[selectedTech];

  const { resolvedTheme } = useTheme();

  const iconSrc =
    resolvedTheme === "dark" && selectedInfo.iconNameDark
      ? `/icons/${selectedInfo.iconNameDark}.png`
      : `/icons/${selectedInfo.iconName}.png`;

  return (
    <section
      id="specialties"
      className="mx-auto max-w-5xl scroll-mt-24 leading-relaxed text-gray-800 dark:text-gray-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-foreground text-4xl font-bold tracking-tight dark:text-white">
            Uma Abordagem Completa
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Da concepção à entrega, meu trabalho abrange todo o ciclo de vida de
            um produto digital.
          </p>
        </div>

        {/* Services */}
        <div className="mx-auto mt-20 flex max-w-6xl flex-wrap justify-start gap-12">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="mx-auto flex w-72 flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium text-zinc-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical Skills */}
      <div id="skills" className="mt-20 sm:mt-28">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            Minha Stack Tecnológica
          </h3>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Ferramentas e tecnologias que utilizo para construir soluções
            digitais modernas, performáticas e de alta qualidade.
          </p>
        </motion.div>

        <div className="mx-auto mt-6 grid max-w-5xl items-start gap-x-8 gap-y-10 lg:mt-20 lg:grid-cols-12">
          {/* Technologies */}
          <motion.div
            className="mt-4 flex flex-wrap justify-center gap-3 lg:col-span-4 lg:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {techKeys.map((techKey) => (
              <motion.button
                key={techKey}
                onClick={() => setSelectedTech(techKey)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ease-in-out ${
                  selectedTech === techKey
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-200 dark:bg-zinc-100 dark:text-zinc-900"
                    : "border-zinc-300 bg-transparent text-zinc-600 hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-600 dark:text-zinc-400 dark:hover:border-zinc-800 dark:hover:text-white"
                } `}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                {technologyDetails[techKey].label}
              </motion.button>
            ))}
          </motion.div>

          {/* Technology Description */}
          <div className="lg:sticky lg:top-24 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech}
                className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={iconSrc}
                    alt={selectedInfo.label}
                    width={36}
                    height={36}
                  />

                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {selectedInfo.label}
                  </h4>
                </div>

                <p className="mt-5 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {selectedInfo.fullDescription}
                </p>

                <div className="mt-8">
                  <Link
                    href={selectedInfo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <span>Visitar site oficial</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
