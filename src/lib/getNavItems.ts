import { useTranslations } from "next-intl";

import { NavBarItem } from "@/@types/NavBarItem";

export const getNavItems = (
  t: ReturnType<typeof useTranslations>,
): NavBarItem[] => {
  return [
    { label: t("aboutMe"), href: "#about", id: "about" },
    { label: t("specialties"), href: "#specialties", id: "specialties" },
    { label: t("projects"), href: "#projects", id: "projects" },
    { label: t("journey"), href: "#journey", id: "journey" },
    { label: t("contact"), href: "#contact", id: "contact" },
  ];
};
