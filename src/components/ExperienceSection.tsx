const experience = [
  {
    role: "Desenvolvedor Mobile",
    company: "Empresa XYZ",
    period: "2021 - Atual",
    description:
      "Desenvolvimento e manutenção de aplicativos móveis usando Flutter e integração com APIs REST.",
  },
  {
    role: "Frontend Developer",
    company: "Startup ABC",
    period: "2019 - 2021",
    description:
      "Construção de interfaces responsivas e dinâmicas usando React, Next.js e TailwindCSS.",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="mx-auto mb-20 max-w-5xl">
      <h2 className="mb-8 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Experiência
      </h2>

      <div className="flex flex-col gap-10">
        {experience.map(({ role, company, period, description }) => (
          <article
            key={role + company}
            className="border-l-4 border-gray-700 pl-5"
          >
            <h3 className="text-xl font-semibold text-black">{role}</h3>

            <p className="font-medium text-gray-700 italic">
              {company} — {period}
            </p>

            <p className="mt-3 leading-relaxed text-gray-800">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
