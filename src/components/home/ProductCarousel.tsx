"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllProducts } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductCarousel() {
  const products = getAllProducts();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-ivory">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="bg-forest-900 text-ivory rounded-[2rem] md:rounded-[3rem] py-12 md:py-16 shadow-2xl border border-forest-900/10">
          
          <div className="px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between md:items-end mb-8 md:mb-12 gap-6">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-2 block">
                Our Collection
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Explore Our Products</h2>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={cn(
                  "w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                  canScrollLeft 
                    ? "border-ivory/30 text-ivory hover:bg-ivory/10 hover:border-ivory/50" 
                    : "border-ivory/10 text-ivory/30 cursor-not-allowed"
                )}
                aria-label="Previous product"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={cn(
                  "w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                  canScrollRight 
                    ? "border-ivory/30 text-ivory hover:bg-ivory/10 hover:border-ivory/50" 
                    : "border-ivory/10 text-ivory/30 cursor-not-allowed"
                )}
                aria-label="Next product"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative lg:mx-12 mx-2">
            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-4 md:gap-8 overflow-x-auto pb-8 pt-4 px-6 md:px-12 lg:px-16 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product) => (
                <div 
                  key={product.slug} 
                  className="snap-center sm:snap-start shrink-0 w-[70vw] sm:w-[320px] lg:w-[380px] flex flex-col group"
                >
                  <Link 
                    href={`/products/${product.slug}`}
                    className="block h-[40vh] min-h-[250px] max-h-[350px] bg-ivory/10 rounded-2xl mb-5 overflow-hidden relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-ivory/30 p-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain drop-shadow-lg" 
                      />
                    </div>
                  </Link>
                  
                  <div className="flex flex-col flex-1">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                      {product.category}
                    </span>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-xl md:text-2xl font-serif group-hover:text-gold transition-colors leading-tight">
                        <Link href={`/products/${product.slug}`}>{product.name}</Link>
                      </h3>
                      {product.sellingPrice && (
                        <span className="font-medium text-ivory shrink-0 mt-1">{product.sellingPrice}</span>
                      )}
                    </div>
                    <p className="text-ivory/70 text-sm mb-5 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <Link 
                      href={`/products/${product.slug}`}
                      className="mt-auto inline-flex w-fit px-6 py-2.5 rounded-full border border-ivory/30 hover:bg-ivory hover:text-forest-900 transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
