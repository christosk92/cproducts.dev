import Link from "next/link";
import { HeroEditorial } from "@/components/HeroEditorial";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { getAllPosts } from "@/lib/blog";

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <HeroEditorial />

      <section id="work" className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
              Currently shipping
            </h2>
            <span className="font-mono tabular text-sm text-muted">
              {String(products.length).padStart(2, "0")} products
            </span>
          </div>
          <div>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
              Latest writing
            </h2>
            <Link
              href="/blog"
              className="font-mono tabular text-sm text-muted hover:text-accent transition-colors"
            >
              all posts →
            </Link>
          </div>

          {posts.length === 0 ? (
            <p className="text-muted">Nothing published yet. Soon.</p>
          ) : (
            <ul className="divide-y divide-rule-soft border-t border-b border-rule-soft">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="grid gap-2 sm:grid-cols-12 sm:gap-6 py-6 hover:bg-surface-2 -mx-3 px-3 rounded-md transition-colors"
                  >
                    <span className="sm:col-span-2 font-mono tabular text-xs text-muted">
                      {new Date(p.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                    <span className="sm:col-span-7 font-display text-2xl tracking-tight">
                      {p.title}
                    </span>
                    <span className="sm:col-span-3 text-sm text-muted">
                      {p.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
