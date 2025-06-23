import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

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

        <EducationSection />

        <ExperienceSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
