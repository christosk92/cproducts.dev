import { productBySlug } from "@/lib/products";
import type { ProductSlug } from "@/lib/blog";

export function PostProductChips({
  products,
  className = "",
}: {
  products: ProductSlug[];
  className?: string;
}) {
  if (products.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {products.map((slug) => {
        const product = productBySlug(slug);
        if (!product) return null;
        return (
          <span
            key={slug}
            className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono tabular text-muted border border-rule-soft rounded-full"
          >
            {product.name}
          </span>
        );
      })}
    </div>
  );
}
