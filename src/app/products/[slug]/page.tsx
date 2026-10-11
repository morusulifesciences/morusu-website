import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Morusu Life Sciences`,
    description: product.shortDescription,
  };
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
