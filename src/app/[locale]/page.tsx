"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { AboutMeSection } from "@/components/about-me-section";
import { Blockquote } from "@/components/blockquote";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/JourneySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SpecialtiesSection } from "@/components/specialties-section";
import { generateUniqueNumbers } from "@/lib/generateUniqueNumbers";

export default function Home() {
  const t = useTranslations("quotes");

  const totalQuotes = 8;
  const [quoteIndices, setQuoteIndices] = useState<number[]>([]);

  useEffect(() => {
    setQuoteIndices(
      generateUniqueNumbers(Math.min(2, totalQuotes), totalQuotes - 1),
    );
  }, []);

  return (
    <>
      <Header />

      <main className="mx-auto mb-10 flex min-h-screen max-w-5xl flex-col px-6 sm:mb-20">
        <HeroSection />

        <div className="flex min-h-screen flex-col gap-20 sm:gap-24">
          <AboutMeSection />

          {quoteIndices[0] !== undefined && (
            <Blockquote
              quote={t(`${quoteIndices[0]}.message`)}
              author={t(`${quoteIndices[0]}.author`)}
            />
          )}

          <SpecialtiesSection />

          <ProjectsSection />

          <JourneySection />

          {quoteIndices[1] !== undefined && (
            <Blockquote
              quote={t(`${quoteIndices[1]}.message`)}
              author={t(`${quoteIndices[1]}.author`)}
            />
          )}

          <ContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
