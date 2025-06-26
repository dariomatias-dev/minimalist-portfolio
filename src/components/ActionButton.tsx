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
    "min-w-[200px] rounded-full py-6 text-base font-semibold transition-all duration-300 border border-black inline-flex items-center justify-center gap-2";

  const animations = {
    default: {
      default: `${baseClass} bg-black text-white`,
      outline: `${baseClass} bg-white text-black`,
    },
    invert: {
      default: `${baseClass} bg-black text-white hover:bg-white hover:text-black`,
      outline: `${baseClass} bg-white text-black hover:bg-black hover:text-white`,
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
