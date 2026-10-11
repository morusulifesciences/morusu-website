"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBlobUrl } from "@/components/blob/BlobProvider";
import { BlobImage as Image } from "@/components/blob/BlobImage";
import { cn } from "@/lib/utils";

const carouselIngredients = [
  { name: "Amla", role: "Scalp Nourishment", image: "/ingredients/amala.webp" },
  { name: "Onion Seed", role: "Hair Growth", image: "/ingredients/onion.jpg" },
  { name: "Moringa", role: "Vital Nutrition", image: null },
  { name: "Saffron", role: "Radiant Skin", image: null },
  { name: "Neem", role: "Purifying", image: null },
  { name: "Aloe Vera", role: "Soothing Moisture", image: null },
  { name: "Fenugreek", role: "Softness & Shine", image: null },
];

export function IngredientsCarousel() {
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
      const scrollAmount = scrollRef.current.clientWidth * 0.5;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden border-t border-soft">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-section text-primary-dark mb-2">
              Key Ingredients We Use
            </h2>
            <p className="text-text-muted max-w-xl">
              Discover the potent botanicals and herbs that power our Ayurvedic formulations.
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={cn(
                "w-10 h-10 rounded-full border border-soft flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                canScrollLeft 
                  ? "text-primary-dark hover:bg-primary/5" 
                  : "text-primary-dark/30 cursor-not-allowed border-soft"
              )}
              aria-label="Previous ingredient"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={cn(
                "w-10 h-10 rounded-full border border-soft flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                canScrollRight 
                  ? "text-primary-dark hover:bg-primary/5" 
                  : "text-primary-dark/30 cursor-not-allowed border-soft"
              )}
              aria-label="Next ingredient"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="pl-4 md:pl-6 lg:pl-8 2xl:pl-[max(2rem,calc((100vw-80rem)/2))]">
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 md:gap-10 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-hide pr-4 md:pr-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselIngredients.map((ingredient, idx) => (
            <div 
              key={idx} 
              className="snap-center sm:snap-start shrink-0 flex flex-col items-center group w-[140px] md:w-[160px]"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-sage-light mb-4 overflow-hidden relative shadow-soft border border-soft group-hover:shadow-card group-hover:scale-105 transition-all duration-300">
                {ingredient.image ? (
                  <Image 
                    src={ingredient.image} 
                    alt={ingredient.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-primary-dark/30 text-xs">
                    Image Pending
                  </div>
                )}
              </div>
              <h3 className="font-serif text-lg text-primary-dark text-center">{ingredient.name}</h3>
              <span className="text-xs text-primary uppercase tracking-wider text-center mt-1">
                {ingredient.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
