import { Metadata } from "next";
import Link from "next/link";
import { BlobImage as Image } from "@/components/blob/BlobImage";
import { getAllProducts } from "@/data/products";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayurvedic & Herbal Products | Morusu Life Sciences",
  description: "Explore Morusu Life Sciences products across healthcare, skincare and haircare, developed around natural and herbal formulations.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-cream">
      
      {/* Image Banner Top */}
      <div className="relative pt-32 pb-12 md:pt-36 md:pb-20 overflow-hidden bg-primary-dark">
        <Image 
          src="/images/hero2.png" 
          alt="Botanical Ingredients"
          fill
          priority
          className="object-cover opacity-40 "
        />
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center mt-12">
          {/* <span className="text-label text-gold mb-3 block">Our Collection</span> */}
          <h1 className="text-hero text-white mb-4 max-w-4xl mx-auto leading-tight">
            Ayurvedic & Herbal Products
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-5" />
          <p className="text-intro text-cream max-w-3xl mx-auto font-medium">
            Explore our thoughtfully crafted collection of herbal hair care, skin care, nutrition, and everyday wellness products. Rooted in traditional Ayurvedic wisdom and presented for modern life.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-16 lg:py-12">
        {/* Increased grid density and reduced gaps for smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div 
              key={product.slug} 
              className="flex flex-col bg-white rounded-2xl p-3 shadow-soft hover:shadow-card hover:border-sage-light transition-all duration-300 group"
            >
              {/* Smaller Product Image Container */}
              <Link 
                href={`/products/${product.slug}`}
                className="block relative h-48 sm:h-56 bg-cream rounded-xl mb-4 overflow-hidden flex items-center justify-center p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative w-full h-full drop-shadow-md group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={product.image ?? "images/placeholder.png"} 
                    alt={product.name}
                    fill
                    className="object-contain" 
                  />
                </div>
              </Link>
              
              {/* Product Info */}
              <div className="flex flex-col flex-1 px-2 pb-2">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h2 className="text-[17px] md:text-[19px] font-sans font-semibold text-primary-dark leading-snug">
                    <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                  </h2>
                </div>
                
                <p className="text-[13px] text-text-muted line-clamp-2 mb-5 leading-relaxed">
                  {product.shortDescription}
                </p>
                
                {/* Clear Call to Action */}
                <div className="mt-auto pt-4 border-t border-soft flex items-center justify-between">
                  <div className="flex flex-col">
                    {product.sellingPrice && (
                      <span className="text-primary-dark font-bold text-lg font-sans leading-none mb-1">
                        {product.sellingPrice}
                      </span>
                    )}
                    {product.mrp && product.mrp !== product.sellingPrice && (
                      <span className="text-text-muted text-xs font-medium line-through leading-none">
                        MRP: {product.mrp}
                      </span>
                    )}
                  </div>
                  <Link 
                    href={`/products/${product.slug}`}
                    className="flex items-center justify-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-[13px] font-medium hover:bg-primary-dark transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:-translate-y-0.5"
                  >
                    View
                    <ArrowRight size={14}/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
