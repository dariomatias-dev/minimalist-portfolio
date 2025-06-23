const education = [
  {
    institution: "Instituto Federal da Paraíba",
    campus: "Campus Esperança",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    period: "fev de 2024 - dez de 2027",
    status: "Em andamento",
  },
];

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="mx-auto mb-20 max-w-5xl scroll-mt-24 leading-relaxed text-gray-800"
    >
      <h2 className="mb-8 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Educação
      </h2>

      <div className="space-y-6">
        {education.map(({ institution, campus, degree, period, status }) => (
          <article
            key={institution + degree}
            className="cursor-pointer rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-900">{degree}</h3>

            <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-700">
                {institution} — {campus}
              </p>

              {status && (
                <span className="text-xs text-gray-500 italic">{status}</span>
              )}
            </div>

            <p className="mt-1 text-sm text-gray-500 italic">{period}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
