import { ArrowUpRight, Package, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

import { LinkDetail } from "@/@types/LinkDetail";
import type { ProjectLinkType } from "@/@types/Project";

export const getLinkDetails = (
  t: ReturnType<typeof useTranslations>,
): Record<ProjectLinkType, LinkDetail> => ({
  github: {
    icon: FaGithub,
    label: t("linkDetails.github.label"),
    tooltip: t("linkDetails.github.tooltip"),
  },
  site: {
    icon: ArrowUpRight,
    label: t("linkDetails.site.label"),
    tooltip: t("linkDetails.site.tooltip"),
  },
  playStore: {
    icon: Play,
    label: t("linkDetails.playStore.label"),
    tooltip: t("linkDetails.playStore.tooltip"),
  },
  pubDev: {
    icon: Package,
    label: t("linkDetails.pubDev.label"),
    tooltip: t("linkDetails.pubDev.tooltip"),
  },
  goDev: {
    icon: Package,
    label: t("linkDetails.goDev.label"),
    tooltip: t("linkDetails.goDev.tooltip"),
  },
});
