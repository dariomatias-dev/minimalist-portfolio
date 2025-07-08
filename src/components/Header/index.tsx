"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { MouseEvent, useCallback, useEffect, useState } from "react";

import { getNavItems } from "@/constants/navItems";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const t = useTranslations("NavBar");
  const navItems = getNavItems(t);

  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    },
    [],
  );

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

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="dark:supports-[backdrop-filter]:bg-bg-black/60 sticky top-0 z-50 h-14 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-black/80"
    >
      <div className="mx-auto h-full max-w-5xl px-6">
        <nav className="flex h-full items-center justify-between text-sm font-semibold text-gray-800 dark:text-gray-200">
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "hero")}
            className="cursor-pointer text-xl font-bold tracking-tight transition-colors duration-300 hover:text-black dark:hover:text-white"
          >
            Dário Matias
          </a>

          <div className="flex items-center gap-4">
            <ul className="hidden space-x-8 md:flex">
              {navItems.map(({ label, href, id }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleScroll(e, id)}
                    className="group relative cursor-pointer text-gray-700 transition-colors duration-300 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  >
                    {label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="ml-10 hidden items-center gap-5 md:flex">
              <LanguageSwitcher />

              <ThemeToggle />
            </div>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="block md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
    </motion.header>
  );
};
