import { Technology } from "@/@types/Technology";
import { useTranslations } from "next-intl";

export const getTechnologyDetails = (
  t: ReturnType<typeof useTranslations>,
): Record<string, Technology> => ({
  // Programming Languages
  typescript: {
    label: "TypeScript",
    iconName: "typescript_icon",
    url: "https://www.typescriptlang.org",
    shortDescription: t("technologies.typescript.short"),
    fullDescription: t("technologies.typescript.full"),
  },
  dart: {
    label: "Dart",
    iconName: "dart_icon",
    url: "https://dart.dev",
    shortDescription: t("technologies.dart.short"),
    fullDescription: t("technologies.dart.full"),
  },
  golang: {
    label: "Go (Golang)",
    iconName: "golang_icon",
    url: "https://go.dev",
    shortDescription: t("technologies.golang.short"),
    fullDescription: t("technologies.golang.full"),
  },

  // Frameworks
  tailwindcss: {
    label: "TailwindCSS",
    iconName: "tailwindcss_icon",
    url: "https://tailwindcss.com",
    shortDescription: t("technologies.tailwindcss.short"),
    fullDescription: t("technologies.tailwindcss.full"),
  },
  nextjs: {
    label: "Next.js",
    iconName: "nextjs_icon",
    iconNameDark: "nextjs_dark_icon",
    url: "https://nextjs.org",
    shortDescription: t("technologies.nextjs.short"),
    fullDescription: t("technologies.nextjs.full"),
  },
  shadcnui: {
    label: "shadcn/ui",
    iconName: "shadcnui_icon",
    url: "https://ui.shadcn.com",
    shortDescription: t("technologies.shadcnui.short"),
    fullDescription: t("technologies.shadcnui.full"),
  },
  flutter: {
    label: "Flutter",
    iconName: "flutter_icon",
    url: "https://flutter.dev",
    shortDescription: t("technologies.flutter.short"),
    fullDescription: t("technologies.flutter.full"),
  },
  fastify: {
    label: "Fastify",
    iconName: "fastify_icon",
    iconNameDark: "fastify_dark_icon",
    url: "https://fastify.dev",
    shortDescription: t("technologies.fastify.short"),
    fullDescription: t("technologies.fastify.full"),
  },
  nestjs: {
    label: "NestJS",
    iconName: "nestjs_icon",
    url: "https://nestjs.com",
    shortDescription: t("technologies.nestjs.short"),
    fullDescription: t("technologies.nestjs.full"),
  },

  // Databases
  sqlite: {
    label: "SQLite",
    iconName: "sqlite_icon",
    url: "https://www.sqlite.org",
    shortDescription: t("technologies.sqlite.short"),
    fullDescription: t("technologies.sqlite.full"),
  },
  postgresql: {
    label: "PostgreSQL",
    iconName: "postgresql_icon",
    url: "https://www.postgresql.org",
    shortDescription: t("technologies.postgresql.short"),
    fullDescription: t("technologies.postgresql.full"),
  },

  // ORMs
  prisma: {
    label: "Prisma",
    iconName: "prisma_icon",
    url: "https://www.prisma.io",
    shortDescription: t("technologies.prisma.short"),
    fullDescription: t("technologies.prisma.full"),
  },

  // Services
  firebase: {
    label: "Firebase",
    iconName: "firebase_icon",
    url: "https://firebase.google.com",
    shortDescription: t("technologies.firebase.short"),
    fullDescription: t("technologies.firebase.full"),
  },

  // Others
  nodejs: {
    label: "Node.js",
    iconName: "nodejs_icon",
    url: "https://nodejs.org",
    shortDescription: t("technologies.nodejs.short"),
    fullDescription: t("technologies.nodejs.full"),
  },
});
