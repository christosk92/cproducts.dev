import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { productBySlug } from "@/lib/products";
import { getPostsForProduct } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

const product = productBySlug("lolreview");

export const metadata = product
  ? buildMetadata({
      title: product.name,
      description: product.tagline,
      path: "/work/lolreview",
    })
  : buildMetadata();

export default async function LolReviewPage() {
  if (!product) notFound();
  const relatedPosts = await getPostsForProduct("lolreview");
  return <ProductDetail product={product} relatedPosts={relatedPosts} />;
}
