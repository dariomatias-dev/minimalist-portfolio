"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { services } from "@/constants/services";
import { technologyDetails } from "@/lib/technologyDetails";

export const SpecialtiesSection = () => {
  const techKeys = Object.keys(technologyDetails);
  const [selectedTech, setSelectedTech] = useState<string>(techKeys[0]);
  const selectedInfo = technologyDetails[selectedTech];

  return (
    <section
      id="specialties"
      className="mx-auto max-w-5xl scroll-mt-24 leading-relaxed text-gray-800"
    >
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-foreground text-4xl font-bold tracking-tight">
          Uma Abordagem Completa
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Da concepção à entrega, meu trabalho abrange todo o ciclo de vida de
          um produto digital.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
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
        {services.map(({ title, description, icon }) => (
          <motion.div
            key={title}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
              {icon}
            </div>
            <h3 className="text-base font-medium text-zinc-900">{title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-600">
              {description}
            </p>
          </motion.div>
        ))}
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
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Minha Stack Tecnológica
          </h3>

          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Ferramentas e tecnologias que utilizo para construir soluções
            digitais modernas, performáticas e de alta qualidade.
          </p>
        </motion.div>

        <div className="mx-auto mt-6 grid max-w-5xl items-start gap-x-8 gap-y-10 lg:mt-20 lg:grid-cols-12">
          <motion.div
            className="mt-4 flex flex-wrap gap-3 justify-center lg:justify-start lg:col-span-4"
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
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ease-in-out ${selectedTech === techKey
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 bg-transparent text-zinc-600 hover:border-zinc-500 hover:text-zinc-900"
                  }`}
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
                className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={`/icons/${selectedInfo.iconName}.png`}
                    alt={selectedInfo.label}
                    width={36}
                    height={36}
                  />
                  <h4 className="text-xl font-semibold text-zinc-900">
                    {selectedInfo.label}
                  </h4>
                </div>

                <p className="mt-5 text-base leading-relaxed text-zinc-700">
                  {selectedInfo.fullDescription}
                </p>

                <div className="mt-8">
                  <Link
                    href={selectedInfo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
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
