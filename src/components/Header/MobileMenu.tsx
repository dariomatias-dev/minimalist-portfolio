import { MouseEvent } from "react";
import { X } from "lucide-react";

import { ThemeToggle } from "@/components/Header/ThemeToggle";

type MobileMenuProps = {
  navItems: { label: string; href: string; id: string }[];
  handleScroll: (e: MouseEvent<HTMLAnchorElement>, id: string) => void;
  onClose: () => void;
  isVisible: boolean;
};

export const MobileMenu = ({
  navItems,
  handleScroll,
  onClose,
  isVisible,
}: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex h-screen w-screen transform flex-col items-center bg-white/96 text-lg font-semibold text-gray-800 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden dark:bg-black/96 dark:text-gray-200 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-5 opacity-0"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 p-2 text-gray-700 transition hover:text-black"
        aria-label="Close menu"
      >
        <X className="h-6 w-6 dark:text-white" />
      </button>

      {/* Navigation items */}
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        {navItems.map(({ label, href, id }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              handleScroll(e, id);
            }}
            className="block w-full px-4 py-3 text-center text-2xl transition hover:text-black dark:hover:text-white"
          >
            {label}
          </a>
        ))}

        {/* Theme Toggle */}
        <div className="mt-12">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
