import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Writing",
  description: "Notes on building cproducts.",
  path: "/blog",
});

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <section className="max-w-4xl mx-auto px-6 sm:px-10 pt-20 pb-24">
      <header className="mb-16 space-y-4">
        <div className="text-xs font-mono tabular text-muted uppercase tracking-widest">
          Writing
        </div>
        <h1 className="font-display text-6xl sm:text-7xl tracking-tight leading-[0.95]">
          Notes from the desk.
        </h1>
        <p className="text-lg text-muted max-w-xl">
          Occasional writing on the products, the protocols beneath them, and the work itself.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <ul className="divide-y divide-rule-soft border-t border-b border-rule-soft">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="grid gap-2 sm:grid-cols-12 sm:gap-6 py-8 hover:bg-surface-2 -mx-3 px-3 rounded-md transition-colors"
              >
                <span className="sm:col-span-2 font-mono tabular text-xs text-muted self-start mt-1">
                  {new Date(p.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </span>
                <div className="sm:col-span-10 space-y-1">
                  <div className="font-display text-3xl tracking-tight">{p.title}</div>
                  {p.summary && (
                    <div className="text-muted leading-relaxed">{p.summary}</div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
