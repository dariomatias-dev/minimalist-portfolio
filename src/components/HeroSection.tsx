import Link from "next/link";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative mx-auto flex min-h-[90vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-lg font-semibold text-gray-700">
        Olá! Eu sou Dário Matias
      </p>

      <h1 className="mb-8 text-6xl font-extrabold tracking-tight text-gray-900">
        Full Stack Developer
      </h1>

      <p className="mx-auto mb-12 max-w-xl text-sm text-gray-600">
        Desenvolvedor mobile especializado em Flutter, com experiência em
        frontend web e backend. Atualmente curso Análise e Desenvolvimento de
        Sistemas no IFPB - campus Esperança, ampliando conhecimentos através de
        projetos diversos.
      </p>

      <Link href="/curriculo.pdf" target="_blank" download>
        <Button
          variant="outline"
          className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full border py-7 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:ring-3 focus:ring-gray-300"
          aria-label="Baixar currículo em PDF"
        >
          Baixar Currículo
          <Download className="h-6 w-6" />
        </Button>
      </Link>
    </section>
  );
};
