import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

const education = [
  {
    institution: "Universidade Exemplo",
    degree: "Bacharel em Ciência da Computação",
    period: "2015 - 2019",
  },
];

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

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto min-h-screen max-w-5xl bg-white px-6 py-16 text-gray-900">
        {/* About Me Section */}
        <section
          id="about"
          className="mx-auto mb-20 max-w-5xl leading-relaxed text-gray-800"
        >
          <h2 className="mb-6 border-b border-gray-300 pb-2 text-3xl font-semibold">
            Sobre Mim
          </h2>
          <p>
            Sou um desenvolvedor Full Stack com ampla experiência no
            desenvolvimento de sites, servidores e aplicativos móveis. Tenho
            conhecimento em tecnologias Web modernas, especialmente React e
            Next.js, focando na criação de interfaces intuitivas e responsivas,
            incluindo Flutter para o desenvolvimento de aplicativos móveis
            eficientes. Busco sempre entregar soluções com código limpo,
            desempenho otimizado e excelente experiência para o usuário final.
          </p>
        </section>

        <ProjectsSection />

        <SkillsSection />

        {/* Education Section */}
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

        {/* Experience Section */}
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
                <p className="mt-3 leading-relaxed text-gray-800">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="mx-auto mb-20 max-w-5xl leading-relaxed text-gray-800"
        >
          <h2 className="mb-6 border-b border-gray-300 pb-2 text-3xl font-semibold">
            Contato
          </h2>
          <p>
            Me envie um email para{" "}
            <a
              href="mailto:dario@example.com"
              className="text-gray-900 underline transition-colors hover:text-black"
            >
              dario@example.com
            </a>{" "}
            ou me ache no{" "}
            <a
              href="https://linkedin.com/in/dariomatias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline transition-colors hover:text-black"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
