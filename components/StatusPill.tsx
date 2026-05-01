import type { ProductStatus } from "@/lib/products";

const colors: Record<ProductStatus, string> = {
  live: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
  beta: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
  "in development":
    "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
};

export function StatusPill({ status }: { status: ProductStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono tabular border rounded-full ${colors[status]}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
