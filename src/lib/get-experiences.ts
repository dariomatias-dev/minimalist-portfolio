import { useTranslations } from "next-intl";

import { Experience } from "@/@types/experience";

export const getExperiences = (
  t: ReturnType<typeof useTranslations>,
): Experience[] => [
  {
    role: t("experiences.media4all.role"),
    company: "Media4ALL Soluções em Tecnologia",
    startDate: "2024-03-01",
    endDate: null,
    description: t("experiences.media4all.description"),
    location: t("experiences.media4all.location"),
    type: t("experiences.media4all.type"),
  },
];
