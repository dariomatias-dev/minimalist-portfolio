import Link from "next/link";
import { ReactNode } from "react";

type SocialLinkProps = {
  href: string;
  label: string;
  subLabel: string;
  icon: ReactNode;
  isCopied: boolean;
  onCopy?: () => void;
};

const baseClasses =
  "flex w-full flex-col items-center justify-center gap-2 rounded-md border border-gray-200 px-6 py-7 shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";

export const SocialLink = ({
  href,
  label,
  subLabel,
  icon,
  isCopied,
  onCopy,
}: SocialLinkProps) => {
  const isEmail = href.includes("@gmail");

  const bgColor = isCopied
    ? "bg-black text-white"
    : "bg-white text-black hover:bg-black hover:text-white";
  const classes = `${baseClasses} ${bgColor}`;

  const content = (
    <>
      <div className="text-inherit">{icon}</div>

      <span className="text-sm font-semibold text-inherit">
        {isCopied ? "E-mail copiado!" : label}
      </span>

      <span className="text-xs text-inherit">{subLabel}</span>
    </>
  );

  if (isEmail) {
    return (
      <button
        type="button"
        onClick={onCopy}
        aria-label="Copiar e-mail"
        className={classes}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} text-black hover:bg-black hover:text-white`}
    >
      {content}
    </Link>
  );
};
