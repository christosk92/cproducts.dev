export function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono tabular text-muted border border-rule-soft rounded-full">
      {children}
    </span>
  );
}
