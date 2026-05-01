import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { productBySlug } from "@/lib/products";
import { getPostsForProduct } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

const product = productBySlug("wavee");

export const metadata = product
  ? buildMetadata({
      title: product.name,
      description: product.tagline,
      path: "/work/wavee",
    })
  : buildMetadata();

export default async function WaveePage() {
  if (!product) notFound();
  const relatedPosts = await getPostsForProduct("wavee");
  return <ProductDetail product={product} relatedPosts={relatedPosts} />;
}
