import { Button } from "@/components/ui/button";
import { type ReactNode } from "react";

type ActionButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outline";
  animation?: "default" | "invert";
  label?: string;
  disabled?: boolean;
  icon?: ReactNode;
};

export const ActionButton = ({
  type = "submit",
  variant = "default",
  animation = "default",
  label = "Enviar",
  disabled = false,
  icon,
}: ActionButtonProps) => {
  const baseClass =
    "min-w-[200px] rounded-full py-6 text-base font-semibold transition-all duration-300 border inline-flex items-center justify-center gap-2";

  const animations = {
    default: {
      default: `${baseClass} border-black bg-black text-white dark:border-white dark:bg-white dark:text-black`,
      outline: `${baseClass} border-black bg-white text-black dark:border-white dark:bg-black dark:text-white`,
    },
    invert: {
      default: `${baseClass} border-black bg-black text-white hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white`,
      outline: `${baseClass} border-black bg-white text-black hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black`,
    },
  };

  return (
    <Button
      type={type}
      variant={variant}
      className={animations[animation][variant]}
      disabled={disabled}
    >
      {label}
      {icon}
    </Button>
  );
};
