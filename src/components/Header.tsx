"use client";

import Link from "next/link";
import { useCallback } from "react";

export const Header = () => {
  const navItems = [
    { label: "Sobre Mim", href: "#about", id: "about" },
    { label: "Serviços", href: "#services", id: "services" },
    { label: "Projetos", href: "#projects", id: "projects" },
    { label: "Habilidades", href: "#skills", id: "skills" },
    { label: "Educação", href: "#education", id: "education" },
    { label: "Experiência", href: "#experience", id: "experience" },
    { label: "Contato", href: "#contact", id: "contact" },
  ];

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-5xl px-6">
        <nav className="flex h-16 items-center justify-between text-sm font-semibold text-gray-800">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-black"
          >
            Dário Matias
          </Link>

          <ul className="flex space-x-8">
            {navItems.map(({ label, href, id }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleScroll(e, id)}
                  className="cursor-pointer transition-colors hover:text-black"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
