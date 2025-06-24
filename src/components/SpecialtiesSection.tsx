"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/constants/services";
import { technologyDetails } from "@/lib/technologyDetails";

export const SpecialtiesSection = () => {
  const techKeys = Object.keys(technologyDetails);
  const [selectedTech, setSelectedTech] = useState<string>(techKeys[0]);
  const selectedInfo = technologyDetails[selectedTech];

  return (
    <section
      id="specialties"
      className="mx-auto mb-24 max-w-5xl scroll-mt-24 leading-relaxed text-gray-800"
    >
      {/* Title */}
      <h2 className="mb-8 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Especialidades
      </h2>

      {/* Services  */}
      <div className="mb-16 grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map(({ title, description, icon }) => (
          <Card
            key={title}
            className="shadow-sm transition-shadow hover:shadow-md"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-semibold text-gray-900">
                {title}
              </CardTitle>
              {icon}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Skills */}
      <div>
        <h3 className="mb-4 text-xl font-semibold text-gray-800">
          Habilidades Técnicas
        </h3>

        <p className="mb-8 text-gray-600">
          Tecnologias com as quais tenho experiência e utilizo frequentemente em
          meus projetos profissionais e pessoais.
        </p>

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Technology List */}
          <div className="h-60">
            <span className="mb-4 block text-sm font-medium text-gray-800">
              Tecnologias:
            </span>

            <div className="flex flex-wrap gap-3">
              {techKeys.map((techKey) => {
                const { label } = technologyDetails[techKey];
                const isSelected = selectedTech === techKey;

                return (
                  <button
                    key={techKey}
                    onMouseEnter={() => setSelectedTech(techKey)}
                    className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isSelected
                        ? "border-gray-600 text-black"
                        : "border-gray-300 text-gray-700 hover:border-gray-500 hover:text-black"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Technology Description */}
          <div className="rounded-md border border-gray-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 flex items-center gap-3">
              <Image
                src={`/icons/${selectedInfo.iconName}.png`}
                alt={selectedInfo.label}
                width={20}
                height={20}
              />
              <h4 className="text-base font-semibold text-gray-900">
                {selectedInfo.label}
              </h4>
            </div>

            <p className="text-sm leading-relaxed text-gray-700">
              {selectedInfo.fullDescription}
            </p>

            <Link
              href={selectedInfo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="link"
                className="mt-4 p-0 text-sm text-gray-600 underline hover:text-gray-900"
              >
                Visitar site oficial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
