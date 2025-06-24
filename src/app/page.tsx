import { AboutMeSection } from "@/components/AboutMeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto min-h-screen max-w-5xl bg-white px-6 text-gray-900">
        <HeroSection />

        <div className="mt-16" />

        <AboutMeSection />

        <SpecialtiesSection />

        <ProjectsSection />

        <JourneySection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
