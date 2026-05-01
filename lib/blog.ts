import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type ProductSlug = "wavee" | "lolreview";

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  products: ProductSlug[];
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const KNOWN_PRODUCTS: readonly ProductSlug[] = ["wavee", "lolreview"];

function parseProducts(value: unknown): ProductSlug[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is ProductSlug =>
    typeof v === "string" &&
    (KNOWN_PRODUCTS as readonly string[]).includes(v),
  );
}

async function readDir(): Promise<string[]> {
  try {
    return await fs.readdir(CONTENT_DIR);
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await readDir();
  const posts: Post[] = [];
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const slug = file.replace(/\.mdx$/, "");
    const post = await getPost(slug);
    if (post) posts.push(post);
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  let raw: string;
  try {
    raw = await fs.readFile(file, "utf8");
  } catch {
    return null;
  }
  const { data, content } = matter(raw);
  if (typeof data.title !== "string" || typeof data.date !== "string") {
    return null;
  }
  return {
    slug,
    title: data.title,
    date: data.date,
    summary: typeof data.summary === "string" ? data.summary : "",
    products: parseProducts(data.products),
    content,
  };
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}

export async function getPostsForProduct(
  product: ProductSlug,
  limit = 5,
): Promise<Post[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.products.includes(product)).slice(0, limit);
}
