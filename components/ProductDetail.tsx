import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import type { Post } from "@/lib/blog";
import { TechTag } from "./TechTag";
import { StatusPill } from "./StatusPill";

type Props = {
  product: Product;
  relatedPosts?: Post[];
};

export function ProductDetail({ product, relatedPosts = [] }: Props) {
  return (
    <article>
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12">
        <Link
          href="/#work"
          className="font-mono tabular text-sm text-muted hover:text-accent inline-flex items-center gap-2 mb-12"
        >
          <span>←</span> all work
        </Link>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono tabular text-sm text-muted">
                {product.number} / cproducts
              </span>
              <StatusPill status={product.status} />
              {product.version && (
                <span className="font-mono tabular text-xs text-muted">
                  v{product.version}
                </span>
              )}
            </div>

            <h1 className="font-display text-6xl sm:text-7xl tracking-tight leading-[0.95]">
              {product.name}
            </h1>

            <p className="font-display italic text-3xl text-accent leading-tight max-w-xl">
              {product.tagline}
            </p>

            <p className="text-lg text-muted leading-relaxed max-w-xl">
              {product.blurb}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {product.stack.map((s) => (
                <TechTag key={s}>{s}</TechTag>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-accent transition-colors text-sm font-medium"
                >
                  Visit site
                  <span>↗</span>
                </a>
              )}
              {product.repo && (
                <a
                  href={product.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rule-soft hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                >
                  GitHub
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden rounded-md border border-rule-soft bg-surface-2 aspect-[4/3]">
            <Image
              src={product.hero.src}
              alt={product.hero.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {product.overview && product.overview.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-t border-rule-soft">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono tabular text-xs text-muted uppercase tracking-widest sticky top-24">
                The story
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6 max-w-2xl">
              {product.overview.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-display text-3xl sm:text-4xl tracking-tight leading-[1.1]"
                      : "text-lg leading-relaxed text-foreground/90"
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-t border-rule-soft">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-4xl tracking-tight">What it does</h2>
          <span className="font-mono tabular text-sm text-muted">
            {String(product.features.length).padStart(2, "0")} highlights
          </span>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((f, i) => (
            <div key={f.title} className="space-y-3">
              <div className="font-mono tabular text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl tracking-tight">{f.title}</h3>
              <p className="text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {product.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-t border-rule-soft">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-display text-4xl tracking-tight">Gallery</h2>
            <span className="font-mono tabular text-sm text-muted">
              {String(product.gallery.length).padStart(2, "0")} captures
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {product.gallery.map((g, i) => (
              <div
                key={g.src}
                className={`relative overflow-hidden rounded-md border border-rule-soft bg-surface-2 aspect-[16/10] ${
                  i === 0 ? "sm:col-span-2 aspect-[16/9]" : ""
                }`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {product.requirements && product.requirements.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-t border-rule-soft">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl tracking-tight">
                Requirements
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-rule-soft border-t border-b border-rule-soft">
                {product.requirements.map((req, i) => (
                  <li
                    key={req}
                    className="grid grid-cols-[auto_1fr] gap-6 py-4 items-baseline"
                  >
                    <span className="font-mono tabular text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-t border-rule-soft">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-display text-4xl tracking-tight">
              Related writing
            </h2>
            <Link
              href="/blog"
              className="font-mono tabular text-sm text-muted hover:text-accent transition-colors"
            >
              all posts →
            </Link>
          </div>
          <ul className="divide-y divide-rule-soft border-t border-b border-rule-soft">
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="grid gap-2 sm:grid-cols-12 sm:gap-6 py-6 hover:bg-surface-2 -mx-3 px-3 rounded-md transition-colors"
                >
                  <span className="sm:col-span-2 font-mono tabular text-xs text-muted self-start mt-1">
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
        </section>
      )}
    </article>
  );
}
