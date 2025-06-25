import { X } from "lucide-react";

type MobileMenuProps = {
  navItems: { label: string; href: string; id: string }[];
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
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
      className={`fixed inset-0 z-40 flex h-screen w-screen transform flex-col items-start bg-white/95 text-lg font-semibold text-gray-800 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-5 opacity-0"} `}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-gray-700 transition hover:text-black"
        aria-label="Close menu"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation items */}
      <div className="h-full flex flex-col justify-center items-center mt-16 w-full">
        {navItems.map(({ label, href, id }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              handleScroll(e, id);
              onClose();
            }}
            className="block text-center  w-full px-4 py-3 text-2xl transition hover:text-black"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};
