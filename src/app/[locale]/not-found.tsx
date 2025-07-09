"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-zinc-100">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          {t("title")}
        </h2>

        <p>{t("description")}</p>

        <Link href="/" className="mt-8 inline-block">
          <Button
            variant="outline"
            className="group inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full border border-gray-300 bg-transparent py-6 text-sm font-medium text-gray-800 transition-colors duration-150 hover:bg-gray-50 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:outline-none dark:border-gray-100 dark:text-zinc-200"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1 group-focus-visible:-translate-x-1" />
            {t("button")}
          </Button>
        </Link>
      </div>
    </main>
  );
}
