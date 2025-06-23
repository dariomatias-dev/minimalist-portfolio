"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { technologyDetails } from "@/lib/technologyDetails";
import { Button } from "@/components/ui/button";

const skills = [
  "Flutter",
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Firebase",
  "shadcn/ui",
];

export const SkillsSection = () => {
  const [activeTech, setActiveTech] = useState<string>(skills[0]);

  const info = technologyDetails[activeTech];

  return (
    <section id="skills" className="mx-auto mb-24 max-w-5xl">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">Habilidades</h2>

        <div className="mt-2 mb-4 h-px w-full bg-gray-300" />

        <p className="w-full text-gray-600">
          Tecnologias com as quais tenho experiência e utilizo frequentemente em
          meus projetos profissionais e pessoais.
        </p>
      </div>

      <div className="grid items-start gap-12 md:grid-cols-2">
        {/* Technology Buttons */}
        <div className="h-44">
          <div className="mb-4 text-sm font-medium text-gray-800">
            Tecnologias:
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => {
              const tech = technologyDetails[skill];
              if (!tech) return null;

              return (
                <button
                  key={skill}
                  onMouseEnter={() => setActiveTech(skill)}
                  className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeTech === skill
                      ? "border-gray-600 text-black"
                      : "border-gray-300 text-gray-700 hover:border-gray-500 hover:text-black"
                  }`}
                >
                  {tech.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Panel */}
        <div className="rounded-md border border-gray-200 bg-white px-5 py-4">
          <div className="mb-3 flex items-center gap-3">
            <Image
              src={`/icons/${info.iconName}.png`}
              alt={info.label}
              width={20}
              height={20}
              className="opacity-80"
            />
            <h3 className="text-base font-semibold text-gray-900">
              {info.label}
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-gray-700">
            {info.fullDescription}
          </p>

          <Link href={info.url} target="_blank" rel="noopener noreferrer">
            <Button
              variant="link"
              className="mt-4 p-0 text-sm text-gray-600 underline hover:text-gray-900"
            >
              Visitar site oficial
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
