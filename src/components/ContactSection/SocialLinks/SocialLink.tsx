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
  "flex w-full flex-col items-center justify-center gap-2 rounded-md border border-border px-6 py-7 shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export const SocialLink = ({
  href,
  label,
  subLabel,
  icon,
  isCopied,
  onCopy,
}: SocialLinkProps) => {
  const isEmail = href.includes("@gmail");

  const dynamicClasses = isCopied
    ? "bg-foreground text-background"
    : "bg-background text-foreground hover:bg-foreground hover:text-background";

  const classes = `${baseClasses} ${dynamicClasses}`;

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
      className={classes}
    >
      {content}
    </Link>
  );
};
