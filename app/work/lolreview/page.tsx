import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { productBySlug } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

const product = productBySlug("lolreview");

export const metadata = product
  ? buildMetadata({
      title: product.name,
      description: product.tagline,
      path: "/work/lolreview",
    })
  : buildMetadata();

export default function LolReviewPage() {
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
