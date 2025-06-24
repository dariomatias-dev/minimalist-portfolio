"use client";

import { useCallback } from "react";

export const Header = () => {
  const navItems = [
    { label: "Sobre Mim", href: "#about", id: "about" },
    { label: "Especialidades", href: "#specialties", id: "specialties" },
    { label: "Projetos", href: "#projects", id: "projects" },
    { label: "Trajetória", href: "#journey", id: "journey" },
    { label: "Contato", href: "#contact", id: "contact" },
  ];

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();

      const el = document.getElementById(id);

      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    [],
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-5xl px-6">
        <nav className="flex h-16 items-center justify-between text-sm font-semibold text-gray-800">
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "hero")}
            className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-black cursor-pointer"
          >
            Dário Matias
          </a>

          <ul className="flex space-x-8">
            {navItems.map(({ label, href, id }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleScroll(e, id)}
                  className="group relative cursor-pointer text-gray-700 transition-colors duration-300 hover:text-black"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
