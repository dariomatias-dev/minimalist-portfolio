"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { label: "Sobre Mim", href: "#about", id: "about" },
    { label: "Especialidades", href: "#specialties", id: "specialties" },
    { label: "Projetos", href: "#projects", id: "projects" },
    { label: "Trajetória", href: "#journey", id: "journey" },
    { label: "Contato", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    if (menuOpen) {
      setShowMenu(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";

      const timeout = setTimeout(() => setShowMenu(false), 300);

      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });

        setMenuOpen(false);
      }
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
            className="cursor-pointer text-xl font-bold tracking-tight transition-colors duration-300 hover:text-black"
          >
            Dário Matias
          </a>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="block md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden space-x-8 md:flex">
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

      {/* Mobile Menu */}
      {showMenu && (
        <MobileMenu
          navItems={navItems}
          handleScroll={handleScroll}
          onClose={() => setMenuOpen(false)}
          isVisible={menuOpen}
        />
      )}
    </header>
  );
};
