import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPost } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return buildMetadata({ title: "Not found", path: `/blog/${slug}` });
  return buildMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="max-w-3xl mx-auto px-6 sm:px-10 pt-20 pb-24">
      <Link
        href="/blog"
        className="font-mono tabular text-sm text-muted hover:text-accent inline-flex items-center gap-2 mb-12"
      >
        <span>←</span> all writing
      </Link>

      <header className="space-y-5 mb-12 pb-12 border-b border-rule-soft">
        <div className="font-mono tabular text-xs text-muted uppercase tracking-widest">
          {formattedDate}
        </div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight leading-[0.95]">
          {post.title}
        </h1>
        {post.summary && (
          <p className="text-xl text-muted leading-relaxed">{post.summary}</p>
        )}
      </header>

      <div>
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
