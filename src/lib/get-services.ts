import { Monitor, Server, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Service } from "@/@types/service";

export const getServices = (
  t: ReturnType<typeof useTranslations>,
): Service[] => [
  {
    title: t("services.site.title"),
    description: t("services.site.description"),
    icon: Monitor,
  },
  {
    title: t("services.app.title"),
    description: t("services.app.description"),
    icon: Smartphone,
  },
  {
    title: t("services.server.title"),
    description: t("services.server.description"),
    icon: Server,
  },
];
