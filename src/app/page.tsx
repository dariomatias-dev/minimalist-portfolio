import { AboutMeSection } from "@/components/AboutMeSection";
import { Blockquote } from "@/components/Blockquote";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";

export default function Home() {
  return (
    <main className="mx-auto mb-16 flex min-h-screen max-w-5xl flex-col px-6 sm:mb-20">
      <HeroSection />

      <div className="flex min-h-screen flex-col gap-20 sm:gap-24">
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
      </div>
    </main>
  );
}
