import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 bg-white">
      <div className="text-muted-foreground mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 py-6 text-center text-sm md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
          <span>© {new Date().getFullYear()} Dário Matias</span>

          <span className="hidden md:inline">|</span>

          <span>Todos os direitos reservados</span>
        </div>

        <div>
          Desenvolvido por{" "}
          <Link
            href="https://github.com/dariomatias-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-gray-900"
          >
            Dário Matias
          </Link>
        </div>
      </div>
    </footer>
  );
};
