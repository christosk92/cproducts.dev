import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { productBySlug } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

const product = productBySlug("wavee");

export const metadata = product
  ? buildMetadata({
      title: product.name,
      description: product.tagline,
      path: "/work/wavee",
    })
  : buildMetadata();

export default function WaveePage() {
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
