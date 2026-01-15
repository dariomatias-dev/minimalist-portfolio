import { useTranslations } from "next-intl";

import { Technology } from "@/@types/technology";

export const getTechnologyDetails = (
  t: ReturnType<typeof useTranslations>,
): Record<string, Technology> => ({
  // Programming Languages
  typescript: {
    label: "TypeScript",
    iconName: "typescript_icon",
    url: "https://www.typescriptlang.org",
    shortDescription: t("typescript.short"),
    fullDescription: t("typescript.full"),
  },
  dart: {
    label: "Dart",
    iconName: "dart_icon",
    url: "https://dart.dev",
    shortDescription: t("dart.short"),
    fullDescription: t("dart.full"),
  },
  go: {
    label: "Go (Golang)",
    iconName: "golang_icon",
    url: "https://go.dev",
    shortDescription: t("golang.short"),
    fullDescription: t("golang.full"),
  },

  // Frameworks
  tailwindcss: {
    label: "TailwindCSS",
    iconName: "tailwindcss_icon",
    url: "https://tailwindcss.com",
    shortDescription: t("tailwindcss.short"),
    fullDescription: t("tailwindcss.full"),
  },
  nextjs: {
    label: "Next.js",
    iconName: "nextjs_icon",
    iconNameDark: "nextjs_dark_icon",
    url: "https://nextjs.org",
    shortDescription: t("nextjs.short"),
    fullDescription: t("nextjs.full"),
  },
  shadcnui: {
    label: "shadcn/ui",
    iconName: "shadcnui_icon",
    url: "https://ui.shadcn.com",
    shortDescription: t("shadcnui.short"),
    fullDescription: t("shadcnui.full"),
  },
  flutter: {
    label: "Flutter",
    iconName: "flutter_icon",
    url: "https://flutter.dev",
    shortDescription: t("flutter.short"),
    fullDescription: t("flutter.full"),
  },
  fastify: {
    label: "Fastify",
    iconName: "fastify_icon",
    iconNameDark: "fastify_dark_icon",
    url: "https://fastify.dev",
    shortDescription: t("fastify.short"),
    fullDescription: t("fastify.full"),
  },
  nestjs: {
    label: "NestJS",
    iconName: "nestjs_icon",
    url: "https://nestjs.com",
    shortDescription: t("nestjs.short"),
    fullDescription: t("nestjs.full"),
  },

  // Databases
  sqlite: {
    label: "SQLite",
    iconName: "sqlite_icon",
    url: "https://www.sqlite.org",
    shortDescription: t("sqlite.short"),
    fullDescription: t("sqlite.full"),
  },
  postgresql: {
    label: "PostgreSQL",
    iconName: "postgresql_icon",
    url: "https://www.postgresql.org",
    shortDescription: t("postgresql.short"),
    fullDescription: t("postgresql.full"),
  },

  // ORMs
  prisma: {
    label: "Prisma",
    iconName: "prisma_icon",
    url: "https://www.prisma.io",
    shortDescription: t("prisma.short"),
    fullDescription: t("prisma.full"),
  },

  // Services
  firebase: {
    label: "Firebase",
    iconName: "firebase_icon",
    url: "https://firebase.google.com",
    shortDescription: t("firebase.short"),
    fullDescription: t("firebase.full"),
  },

  // Others
  nodejs: {
    label: "Node.js",
    iconName: "nodejs_icon",
    url: "https://nodejs.org",
    shortDescription: t("nodejs.short"),
    fullDescription: t("nodejs.full"),
  },
});
