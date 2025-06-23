const education = [
  {
    institution: "Universidade Exemplo",
    degree: "Bacharel em Ciência da Computação",
    period: "2015 - 2019",
  },
];

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="mx-auto mb-20 max-w-5xl leading-relaxed text-gray-800"
    >
      <h2 className="mb-6 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Educação
      </h2>

      {education.map(({ institution, degree, period }) => (
        <article key={institution} className="mb-6">
          <h3 className="text-xl font-semibold text-black">{degree}</h3>

          <p className="text-gray-700 italic">
            {institution} — {period}
          </p>
        </article>
      ))}
    </section>
  );
};
