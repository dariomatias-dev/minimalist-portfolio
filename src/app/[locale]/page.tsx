"use client";

import { useTranslations } from "next-intl";

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
  const t = useTranslations("quotes");

  return (
    <>
      <Header />

      <main className="mx-auto mb-10 flex min-h-screen max-w-5xl flex-col px-6 sm:mb-20">
        <HeroSection />

        <div className="flex min-h-screen flex-col gap-20 sm:gap-24">
          <AboutMeSection />

          <Blockquote quote={t("0")} author="Arthur Ashe" />

          <SpecialtiesSection />

          <ProjectsSection />

          <JourneySection />

          <Blockquote quote={t("1")} author="Confucius" />

          <ContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
