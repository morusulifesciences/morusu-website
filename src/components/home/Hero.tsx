"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    image: "/images/hero1.png", // Spa / Wellness
    title: "The Science of Nature",
    // subtitle: "Ayurvedic Care. Naturally Modern.",
  },
  {
    image: "/images/hero2.png", // Herbs / Botanical
    title: "Pure Botanical Extracts",
    // subtitle: "Harnessing the ancient power of traditional herbs.",
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-primary/20 sm:bg-primary/30 backdrop-blur-[1px]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center flex flex-col items-center mt-20">
        {/* <span className="text-gold font-semibold uppercase tracking-widest mb-4 sm:mb-6 animate-fade-in block drop-shadow-card">
          {HERO_SLIDES[currentSlide].subtitle}
        </span> */}
        
        {/* Cross-fading Titles */}
        <div className="relative w-full flex items-center justify-center mb-8 min-h-[120px] md:min-h-[160px] lg:min-h-[200px]">
          {HERO_SLIDES.map((slide, idx) => (
            <h1
              key={idx}
              className={cn(
                "absolute top-1/2 -translate-y-1/2 w-full text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] drop-shadow-elevated transition-all duration-1000 ease-in-out",
                idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              {slide.title}
            </h1>
          ))}
        </div>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium drop-shadow-card">
          Discover our thoughtfully crafted collection of herbal hair care, skin care, and nutrition products.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-fade-in">
          <Link 
            href="/products" 
            className="w-full sm:w-auto bg-white text-primary-dark px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors flex items-center justify-center gap-2 group shadow-elevated"
          >
            Explore Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/ayurveda" 
            className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white border border-white/50 hover:bg-white/10 transition-colors flex items-center justify-center backdrop-blur-sm"
          >
            Our Philosophy
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              idx === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
