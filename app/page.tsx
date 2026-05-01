import Image from "next/image";
import Link from "next/link";
import { HeroEditorial } from "@/components/HeroEditorial";
import { ProductCard } from "@/components/ProductCard";
import { TechTag } from "@/components/TechTag";
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
              Products
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

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
              Professional work
            </h2>
            <span className="font-mono tabular text-sm text-muted">
              not a cproducts product
            </span>
          </div>

          <a
            href="https://isoplanner.app"
            className="group block border-t border-rule pt-8 pb-12"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono tabular text-sm text-muted">
                    FT /
                  </span>
                  <span className="inline-flex items-center rounded-full border border-rule-soft px-2.5 py-1 text-[11px] font-mono uppercase tracking-wide text-muted">
                    Senior Software Engineer
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/products/isoplanner/icon.png"
                    alt=""
                    width={64}
                    height={64}
                    className="size-14 sm:size-16"
                  />
                  <h3 className="font-display text-5xl sm:text-6xl tracking-tight group-hover:text-accent transition-colors">
                    ISOPlanner
                  </h3>
                </div>

                <p className="text-lg text-muted leading-relaxed max-w-md">
                  Full-time product engineering on a production SaaS platform for
                  ISO compliance, audits, tasks, documents, and operational workflows.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {[
                    ".NET",
                    "React",
                    "TypeScript",
                    "Azure",
                    "SQL Server",
                    "AI search",
                  ].map((s) => (
                    <TechTag key={s}>{s}</TechTag>
                  ))}
                </div>

                <div className="pt-4 inline-flex items-center gap-2 text-sm font-mono tabular text-muted group-hover:text-accent transition-colors">
                  <span>visit isoplanner.app</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    {"->"}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 lg:pt-12">
                <dl className="grid gap-6 sm:grid-cols-3">
                  <div className="border-t border-rule-soft pt-4">
                    <dt className="font-mono tabular text-xs text-muted uppercase tracking-widest mb-3">
                      Product
                    </dt>
                    <dd className="text-base leading-relaxed text-foreground/90">
                      Compliance management software for companies working with ISO
                      standards and certification processes.
                    </dd>
                  </div>
                  <div className="border-t border-rule-soft pt-4">
                    <dt className="font-mono tabular text-xs text-muted uppercase tracking-widest mb-3">
                      Role
                    </dt>
                    <dd className="text-base leading-relaxed text-foreground/90">
                      Building and maintaining backend services, frontend flows,
                      integrations, and production features.
                    </dd>
                  </div>
                  <div className="border-t border-rule-soft pt-4">
                    <dt className="font-mono tabular text-xs text-muted uppercase tracking-widest mb-3">
                      Context
                    </dt>
                    <dd className="text-base leading-relaxed text-foreground/90">
                      Professional full-time work, separate from the independent
                      products listed above.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </a>
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
              all posts -&gt;
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
