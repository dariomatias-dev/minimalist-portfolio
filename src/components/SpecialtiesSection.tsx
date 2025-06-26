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
      className="mx-auto mb-16 max-w-5xl scroll-mt-20 leading-relaxed text-gray-800 sm:mb-20 sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Uma Abordagem Completa
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Da concepção à entrega, meu trabalho abrange todo o ciclo de vida de
          um produto digital.
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
              {icon}
            </div>

            <h3 className="text-base font-medium text-zinc-900">{title}</h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-600">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Technical Skills */}
      <div id="skills" className="mt-24 sm:mt-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Minha Stack Tecnológica
          </h2>

          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Ferramentas e tecnologias que utilizo para construir soluções
            digitais modernas, performáticas e de alta qualidade.
          </p>
        </div>

        {/* Technology List */}
        <div className="mx-auto mt-16 grid max-w-5xl items-start gap-x-8 gap-y-10 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-base leading-7 font-semibold text-zinc-900">
              Tecnologias
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {techKeys.map((techKey) => (
                <button
                  key={techKey}
                  onClick={() => setSelectedTech(techKey)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ease-in-out ${
                    selectedTech === techKey
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-300 bg-transparent text-zinc-600 hover:border-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {technologyDetails[techKey].label}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Description */}
          <div className="lg:sticky lg:top-24 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm"
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
