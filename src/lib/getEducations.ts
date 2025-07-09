import { useTranslations } from "next-intl";

import { Education } from "@/@types/Education";

export const getEducations = (
  t: ReturnType<typeof useTranslations>,
): Education[] => [
  {
    institution: "Instituto Federal da Paraíba",
    campus: "Campus Esperança",
    degree: t("educations.ads.degree"),
    period: t("educations.ads.period"),
    status: t("educations.ads.status"),
  },
];
