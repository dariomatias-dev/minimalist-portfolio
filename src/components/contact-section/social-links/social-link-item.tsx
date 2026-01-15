import { useTranslations } from "next-intl";
import Link from "next/link";

import { SocialLink } from "@/@types/social-link";

type SocialLinkItemProps = {
  socialLink: SocialLink;
  isCopied: boolean;
  onCopy?: () => void;
};

const baseClasses =
  "flex w-full flex-col items-center justify-center gap-2 rounded-md border border-border px-6 py-7 shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export const SocialLinkItem = ({
  socialLink,
  isCopied,
  onCopy,
}: SocialLinkItemProps) => {
  const t = useTranslations("HomePage.ContactSection.email");

  const isEmail = socialLink.href.includes("@gmail");

  const dynamicClasses = isCopied
    ? "bg-foreground text-background"
    : "bg-background text-foreground hover:bg-foreground hover:text-background";

  const classes = `${baseClasses} ${dynamicClasses}`;

  const content = (
    <>
      <div className="text-inherit">
        <socialLink.icon className="h-6 w-6" />
      </div>

      <span className="text-sm font-semibold text-inherit">
        {isCopied ? t("copied") : socialLink.label}
      </span>

      <span className="text-xs text-inherit">{socialLink.subLabel}</span>
    </>
  );

  if (isEmail) {
    return (
      <button
        type="button"
        onClick={onCopy}
        aria-label={t("ariaLabel")}
        className={classes}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={socialLink.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {content}
    </Link>
  );
};
