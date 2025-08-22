"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { socialLinks } from "@/constants/socialLinks";
import { SocialLinkItem } from "./social-link-item";

export const SocialLinks = () => {
  const t = useTranslations("HomePage.ContactSection.socialLinks");

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);

      setCopiedEmail(email);

      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (error) {
      console.error("Erro ao copiar o e-mail:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3
        id="social-section"
        className="text-foreground mb-6 text-xl font-semibold tracking-tight"
      >
        {t("title")}
      </h3>

      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {t("description")}
      </p>

      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {socialLinks.map((socialLink) => {
          const isEmail = socialLink.href.includes("@gmail");

          return (
            <li key={socialLink.href}>
              <SocialLinkItem
                socialLink={socialLink}
                isCopied={copiedEmail === socialLink.href}
                onCopy={
                  isEmail ? () => handleCopyEmail(socialLink.href) : undefined
                }
              />
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
