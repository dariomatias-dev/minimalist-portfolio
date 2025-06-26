"use client";

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
    <section aria-labelledby="social-section">
      <h3
        id="social-section"
        className="mb-6 text-xl font-semibold tracking-tight text-gray-900"
      >
        Redes Sociais
      </h3>

      <p className="mb-10 text-gray-600">
        Me acompanhe e fique por dentro dos meus projetos e atualizações.
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
    </section>
  );
};
