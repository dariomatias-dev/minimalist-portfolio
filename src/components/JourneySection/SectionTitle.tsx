interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <h3 className="text-center text-2xl font-semibold text-slate-800">
    {children}
  </h3>
);
