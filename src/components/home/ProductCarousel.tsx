"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { BlobImage as Image } from "@/components/blob/BlobImage";
import { ArrowRight } from "lucide-react";
import { getAllProducts } from "@/data/products";

export function ProductCarousel() {
  const products = getAllProducts();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="pt-20 pb-8 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            {/* <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold mb-3 block">
              Our Philosophy
            </span> */}
            <h2 className="text-[32px] md:text-[42px] font-serif text-primary-dark font-semibold leading-tight">
              Naturally Effective. Thoughtfully Crafted.
            </h2>
          </div>
          <Link 
            href="/products" 
            className="flex items-center gap-2 text-[14px] font-semibold text-primary-dark hover:text-primary transition-colors underline underline-offset-4 decoration-soft hover:decoration-primary"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          >
            {products.map((product) => (
              <div 
                key={product.slug} 
                className="snap-start shrink-0 w-[260px] md:w-[280px] flex flex-col group bg-cream rounded-2xl p-5 transition-shadow relative"
              >
                <Link 
                  href={`/products/${product.slug}`}
                  className="block relative h-[200px] mb-5 overflow-hidden flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Image 
                    src={product.image || '/images/hero1.png'} 
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-md" 
                  />
                </Link>
                
                <div className="flex flex-col flex-1 pb-4">
                  <h3 className="text-[17px] font-semibold text-primary-dark mb-1 leading-tight">
                    <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-[13px] text-text-muted line-clamp-2 leading-relaxed ">
                    {product.shortDescription}
                  </p>
                </div>
              
                <Link 
                  href={`/products/${product.slug}`}
                  className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white shadow-sm hover:bg-gold-light hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`View ${product.name}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
