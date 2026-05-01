import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { TechTag } from "./TechTag";
import { StatusPill } from "./StatusPill";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/work/${product.slug}`}
      className="group block border-t border-rule pt-8 pb-12"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <span className="font-mono tabular text-sm text-muted">
              {product.number} /
            </span>
            <StatusPill status={product.status} />
          </div>

          <h3 className="font-display text-5xl sm:text-6xl tracking-tight group-hover:text-accent transition-colors">
            {product.name}
          </h3>

          <p className="text-lg text-muted leading-relaxed max-w-md">
            {product.tagline}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {product.stack.slice(0, 6).map((s) => (
              <TechTag key={s}>{s}</TechTag>
            ))}
          </div>

          <div className="pt-4 inline-flex items-center gap-2 text-sm font-mono tabular text-muted group-hover:text-accent transition-colors">
            <span>read more</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>

        <div className="lg:col-span-7 relative overflow-hidden rounded-md border border-rule-soft bg-surface-2 aspect-[16/10]">
          <Image
            src={product.hero.src}
            alt={product.hero.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            priority={product.number === "01"}
          />
        </div>
      </div>
    </Link>
  );
}
