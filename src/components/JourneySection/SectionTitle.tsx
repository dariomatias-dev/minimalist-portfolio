import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <h3 className="text-center text-2xl font-semibold text-slate-800 dark:text-zinc-200">
    {children}
  </h3>
);
