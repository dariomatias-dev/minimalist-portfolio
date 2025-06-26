import { AboutMeSection } from "@/components/AboutMeSection";
import { Blockquote } from "@/components/Blockquote";
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

      <main className="mx-auto mb-16 flex min-h-screen max-w-5xl flex-col gap-20 bg-white px-6 text-gray-900 sm:mb-20 sm:gap-24">
        <HeroSection />

        <AboutMeSection />

        <Blockquote
          quote="Comece de onde você está. Use o que você tem. Faça o que você pode."
          author="Arthur Ashe"
        />

        <SpecialtiesSection />

        <ProjectsSection />

        <JourneySection />

        <Blockquote
          quote="A maior glória não é ficar de pé, mas levantar-se cada vez que se cai."
          author="Confúcio"
        />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
