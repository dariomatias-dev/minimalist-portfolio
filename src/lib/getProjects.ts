import { useTranslations } from "next-intl";

import { Project } from "@/@types/Project";

export const getProjects = (
  t: ReturnType<typeof useTranslations>,
): Project[] => [
  {
    title: "Portfolio",
    description: t("projects.portfolio.description"),
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
    image: "/image_placeholder.png",
    links: [
      { type: "site", url: "https://dariomatias-portfolio.vercel.app/" },
      { type: "github", url: "https://github.com/dariomatias-dev/portfolio" },
    ],
  },
  {
    title: "FlutterGuide App",
    description: t("projects.flutterGuideApp.description"),
    technologies: ["Dart", "Flutter"],
    image: "/image_placeholder.png",
    links: [
      {
        type: "playStore",
        url: "https://play.google.com/store/apps/details?id=com.dariomatias.flutter_guide",
      },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/flutter_guide_app",
      },
    ],
  },
  {
    title: "FlutterGuide Web",
    description: t("projects.flutterGuideWeb.description"),
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
    image: "/image_placeholder.png",
    links: [
      { type: "site", url: "https://flutter-guide-web.vercel.app/" },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/flutter_guide_web",
      },
    ],
  },
  {
    title: "Scroll Infinity",
    description: t("projects.scrollInfinity.description"),
    technologies: ["Dart", "Flutter"],
    image: "/image_placeholder.png",
    links: [
      { type: "pubDev", url: "https://pub.dev/packages/scroll_infinity" },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/scroll_infinity",
      },
    ],
  },
  {
    title: "Flutter Syntax Highlighter",
    description: t("projects.flutterSyntaxHighlighter.description"),
    technologies: ["Dart", "Flutter"],
    image: "/image_placeholder.png",
    links: [
      {
        type: "pubDev",
        url: "https://pub.dev/packages/flutter_syntax_highlighter",
      },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/flutter_syntax_highlighter",
      },
    ],
  },
  {
    title: "Go Validators",
    description: t("projects.goValidators.description"),
    technologies: ["Go"],
    image: "/image_placeholder.png",
    links: [
      {
        type: "goDev",
        url: "https://pkg.go.dev/github.com/dariomatias-dev/go-validators",
      },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/go-validators",
      },
    ],
  },
];
