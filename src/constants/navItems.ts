import { useTranslations } from "next-intl";

export function getNavItems(t: ReturnType<typeof useTranslations>) {
  return [
    { label: t("aboutMe"), href: "#about", id: "about" },
    { label: t("specialties"), href: "#specialties", id: "specialties" },
    { label: t("projects"), href: "#projects", id: "projects" },
    { label: t("journey"), href: "#journey", id: "journey" },
    { label: t("contact"), href: "#contact", id: "contact" },
  ];
}
