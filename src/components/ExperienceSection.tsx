const experience = [
  {
    role: "Desenvolvedor Mobile",
    company: "Media4ALL Soluções em Tecnologia",
    startDate: "2024-03-01",
    endDate: null,
    description:
      "Desenvolvimento e manutenção de aplicativos móveis construídos em Flutter e integração com APIs REST.",
    location: "João Pessoa, Paraíba, Brasil · Remota",
    type: "Estágio",
  },
];

export const ExperienceSection = () => {
  const calculateDuration = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

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
  };

  const { role, company, startDate, endDate, description, location, type } =
    experience[0];

  const periodStart = new Date(startDate).toLocaleString("pt-BR", {
    month: "short",
    year: "numeric",
  });
  const periodEnd = endDate
    ? new Date(endDate).toLocaleString("pt-BR", {
        month: "short",
        year: "numeric",
      })
    : "o momento";

  const duration = calculateDuration(startDate, endDate);

  return (
    <section
      id="experience"
      className="mx-auto mb-20 max-w-5xl scroll-mt-24 leading-relaxed text-gray-800"
      aria-label="Experiência profissional"
    >
      <h2 className="mb-6 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Experiência
      </h2>

      <article className="cursor-pointer rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
        <h3 className="mb-2 text-2xl font-semibold text-gray-900">{role}</h3>

        <p className="mb-1 text-lg font-medium text-gray-700 italic">
          {company} {type && <span className="font-normal">· {type}</span>}
        </p>

        <p className="mb-1 text-sm text-gray-500">
          {periodStart} - {periodEnd} · {duration}
        </p>

        {location && (
          <p className="mb-4 text-sm text-gray-400 italic">{location}</p>
        )}

        <p className="leading-relaxed text-gray-800">{description}</p>
      </article>
    </section>
  );
};
