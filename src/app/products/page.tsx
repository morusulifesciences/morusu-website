import { Metadata } from "next";
import Link from "next/link";
import { getAllProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Ayurvedic & Herbal Products | Morusu Life Sciences",
  description: "Explore Morusu Life Sciences products across healthcare, skincare and haircare, developed around natural and herbal formulations.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <header className="mb-16 max-w-6xl">
          {/* <span className="text-gold font-semibold uppercase tracking-wider mb-3 block">Our Collection</span> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans tracking-tight text-primary-dark mb-6 mt-2 font-bold">
            Ayurvedic & Herbal Products
          </h1>
          <p className="text-md text-text-muted leading-relaxed font-sans ">
            Explore our thoughtfully crafted collection of herbal hair care, skin care, nutrition, and everyday wellness products. Rooted in traditional Ayurvedic wisdom and presented for modern life.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <div 
              key={product.slug} 
              className="flex flex-col bg-white rounded-[2rem] p-4 shadow-soft border border-soft hover:border-soft transition-colors"
            >
              {/* Product Image */}
              <Link 
                href={`/products/${product.slug}`}
                className="block relative h-64 sm:h-72 bg-cream rounded-[1.5rem] mb-6 overflow-hidden flex items-center justify-center p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-card" 
                />
              </Link>
              
              {/* Product Info */}
              <div className="flex flex-col flex-1 px-2 pb-2">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                  
                </div>
                
                <h2 className=" flex text-xl md:text-xl font-semibold font-sans text-primary-dark mb-3 leading-tight justify-between">
                  <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                  {product.sellingPrice && (
                    <span className="text-primary-dark font-bold whitespace-nowrap bg-sage-light px-2.5 py-1 rounded-md text-sm font-sans">
                      {product.sellingPrice}
                    </span>
                  )}
                </h2>
                
                <p className="text-sm text-text-muted line-clamp-2 mb-6">
                  {product.shortDescription}
                </p>
                
                {/* Clear Call to Action */}
                <div className="mt-auto pt-4 border-t border-soft">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="flex w-full items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-soft"
                  >
                    View Product
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
