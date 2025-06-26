import { Button } from "@/components/ui/button";

type ActionButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outline";
  label?: string;
  disabled?: boolean;
};

export const ActionButton = ({
  type = "submit",
  variant = "default",
  label = "Enviar",
  disabled = false,
}: ActionButtonProps) => {
  const baseClass =
    "min-w-[200px] rounded-full py-6 text-base font-semibold transition-all duration-300 border border-black";

  const variants = {
    default: `${baseClass} bg-black text-white hover:bg-white hover:text-black`,
    outline: `${baseClass} bg-white text-black hover:bg-black hover:text-white`,
  };

  return (
    <Button
      type={type}
      variant="outline"
      className={variants[variant]}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};
