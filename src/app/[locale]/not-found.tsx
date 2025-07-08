"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Página não encontrada
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Desculpe, não conseguimos encontrar a página que você está procurando.
          Ela pode ter sido removida, renomeada ou estar temporariamente
          indisponível.
        </p>

        <Link href="/" className="mt-8 inline-block">
          <Button
            variant="outline"
            className="group inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full border border-gray-300 bg-transparent py-6 text-sm font-medium text-gray-800 transition-colors duration-150 hover:bg-gray-50 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:outline-none"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1 group-focus-visible:-translate-x-1" />
            Voltar à página inicial
          </Button>
        </Link>
      </div>
    </main>
  );
}
