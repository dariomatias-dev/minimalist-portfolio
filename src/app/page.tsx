import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Flutter Guide",
    description: "App educativo para aprender Flutter com exemplos práticos.",
    technologies: ["Flutter", "Dart", "Firebase"],
    image: "/images/flutter-guide.png",
    href: "https://github.com/dariomatias-dev/flutter_guide",
  },
  {
    title: "Portfolio Next.js",
    description:
      "Meu portfolio pessoal construído com Next.js, Tailwind e shadcn/ui.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/images/portfolio-nextjs.png",
    href: "https://github.com/dariomatias-dev/portfolio",
  },
];

const skills = [
  "Flutter",
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Firebase",
  "shadcn/ui",
];

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
          className="mx-auto mb-20 max-w-prose text-lg leading-relaxed text-gray-800"
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

        {/* Projects Section */}
        <section id="projects" className="mx-auto mb-20 max-w-5xl">
          <h2 className="mb-10 border-b border-gray-300 pb-2 text-3xl font-semibold">
            Projetos
          </h2>

          {/* Project Cards */}
          <div className="grid gap-10 sm:grid-cols-2">
            {projects.map(({ title, description, href, technologies }) => (
              <Card
                key={title}
                className="flex flex-col rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg border-b border-gray-200 bg-white">
                  <img
                    src="https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_web/main/public/flutter_guide_icon.png"
                    alt={`${title} logo`}
                    className="h-full w-full object-contain p-6"
                    loading="lazy"
                  />
                </div>

                <CardContent className="flex flex-grow flex-col">
                  <CardTitle className="text-black">{title}</CardTitle>
                  <p className="mt-2 flex-grow text-gray-700">{description}</p>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-500 select-none">
                      {technologies.map((tech) => (
                        <a
                          key={tech}
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded bg-gray-100 px-2 py-0.5 text-gray-500 transition hover:underline"
                          aria-label={`Search technology ${tech}`}
                        >
                          {tech}
                        </a>
                      ))}
                    </div>

                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="link"
                        className="mt-4 p-0 text-gray-600 underline hover:text-gray-900"
                      >
                        Ver no GitHub
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mx-auto mb-20 max-w-prose">
          <h2 className="mb-6 border-b border-gray-300 pb-2 text-3xl font-semibold">
            Habilidades
          </h2>
          <ul className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-gray-200 px-4 py-2 font-medium text-gray-900 select-none"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="mx-auto mb-20 max-w-prose leading-relaxed text-gray-800"
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
        <section id="experience" className="mx-auto mb-20 max-w-prose">
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
          className="mx-auto mb-20 max-w-prose leading-relaxed text-gray-800"
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
