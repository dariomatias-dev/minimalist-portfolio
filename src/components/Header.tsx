import Link from "next/link";

export const Header = () => {
  const navItems = [
    { label: "Sobre Mim", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Habilidades", href: "#skills" },
    { label: "Educação", href: "#education" },
    { label: "Experiência", href: "#experience" },
    { label: "Contato", href: "#contact" },
  ];

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
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-black">
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
