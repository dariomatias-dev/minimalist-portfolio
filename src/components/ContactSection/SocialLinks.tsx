import Link from "next/link";

import { socialLinks } from "@/constants/socialLinks";

export const SocialLinks = () => {
  return (
    <section aria-labelledby="social-section">
      <h3
        id="social-section"
        className="mb-6 text-xl font-semibold tracking-tight text-gray-900"
      >
        Redes Sociais
      </h3>

      <p className="mb-10 max-w-lg text-gray-600">
        Me acompanhe e fique por dentro dos meus projetos e atualizações.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {socialLinks.map(({ href, label, subLabel, icon }) => (
          <li key={href}>
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-6 py-7 shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <div className="text-gray-900">{icon}</div>
              <span className="text-sm font-semibold text-gray-900">
                {label}
              </span>
              <span className="text-xs text-gray-500">{subLabel}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
