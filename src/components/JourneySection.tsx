"use client";

import { useMemo } from "react";

import { educations } from "@/constants/educations";
import { experiences } from "@/constants/experiences";

export const JourneySection = () => {
  const exp = experiences[0];

  const formattedStart = useMemo(() => {
    return new Date(exp.startDate).toLocaleString("pt-BR", {
      month: "short",
      year: "numeric",
    });
  }, [exp.startDate]);

  const formattedEnd = exp.endDate
    ? new Date(exp.endDate).toLocaleString("pt-BR", {
        month: "short",
        year: "numeric",
      })
    : "o momento";

  const duration = useMemo(() => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const yearsText = years > 0 ? `${years} ano${years > 1 ? "s" : ""}` : "";
    const monthsText =
      months > 0 ? `${months} mês${months > 1 ? "es" : ""}` : "";

    return [yearsText, monthsText].filter(Boolean).join(" ");
  }, [exp.startDate, exp.endDate]);

  return (
    <section
      id="journey"
      className="mx-auto mb-16 max-w-5xl scroll-mt-20 text-gray-800 sm:mb-20 sm:scroll-mt-24"
    >
      <h2 className="mb-8 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Trajetória
      </h2>

      <div className="space-y-14">
        {/* Experience */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-gray-900">
            Experiência Profissional
          </h3>

          <article className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h4 className="text-lg font-semibold text-gray-900">{exp.role}</h4>

            <div className="mt-1 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-700">
                {exp.company} {exp.type && <span>· {exp.type}</span>}
              </p>
              <p className="text-gray-500 italic">
                {formattedStart} - {formattedEnd} · {duration}
              </p>
            </div>

            {exp.location && (
              <p className="mt-1 text-sm text-gray-400 italic">
                {exp.location}
              </p>
            )}

            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              {exp.description}
            </p>
          </article>
        </div>

        {/* Education */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-gray-900">
            Formação Acadêmica
          </h3>

          {educations.map((edu) => (
            <article
              key={edu.institution + edu.degree}
              className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h4 className="text-lg font-semibold text-gray-900">
                {edu.degree}
              </h4>

              <div className="mt-1 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
                <p className="text-gray-700">
                  {edu.institution} — {edu.campus}
                </p>
                {edu.status && (
                  <span className="text-gray-500 italic">{edu.status}</span>
                )}
              </div>

              <p className="mt-1 text-sm text-gray-500 italic">{edu.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
