import { AboutMeSection } from "@/components/AboutMeSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto min-h-screen max-w-5xl bg-white px-6 text-gray-900">
        <HeroSection />

        <div className="mt-16" />

        <AboutMeSection />

        <ServicesSection />

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
