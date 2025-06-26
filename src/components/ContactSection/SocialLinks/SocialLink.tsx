import Link from "next/link";

type SocialLinkProps = {
  href: string;
  label: string;
  subLabel: string;
  icon: React.ReactNode;
  isCopied: boolean;
  onCopy?: () => void;
};

const baseClasses =
  "flex w-full flex-col items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-6 py-7 shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";

const hoverClasses = "hover:bg-black hover:text-white";

export const SocialLink = ({
  href,
  label,
  subLabel,
  icon,
  isCopied,
  onCopy,
}: SocialLinkProps) => {
  const isEmail = href.includes("@gmail");

  const textColorClass = isCopied ? "bg-black text-white" : "text-black";

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
        className={`${baseClasses} ${hoverClasses} ${textColorClass}`}
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
      className={`${baseClasses} ${hoverClasses} text-black`}
    >
      {content}
    </Link>
  );
};
