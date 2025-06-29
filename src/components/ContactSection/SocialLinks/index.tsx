"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { socialLinks } from "@/constants/socialLinks";
import { SocialLink } from "./SocialLink";

export const SocialLinks = () => {
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
        Redes Sociais
      </h3>

      <p className="text-muted-foreground mb-10">
        Me acompanhe para ficar por dentro dos meus projetos e atualizações, ou
        envie uma mensagem.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {socialLinks.map(({ href, label, subLabel, icon }) => {
          const isEmail = href.includes("@gmail");

          return (
            <li key={href}>
              <SocialLink
                href={href}
                label={label}
                subLabel={subLabel}
                icon={icon}
                isCopied={copiedEmail === href}
                onCopy={isEmail ? () => handleCopyEmail(href) : undefined}
              />
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
