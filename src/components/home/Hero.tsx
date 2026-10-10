"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Leaf } from "lucide-react";
import { VariableProximity } from "@/components/ui/VariableProximity";
import { useBlobUrl } from "@/components/blob/BlobProvider";

const videos = [
  "/videos/herbal_hair_care.mp4",
  "/videos/skincare_commercial.mp4",
  "/videos/moringa_capsules.mp4",
  "/videos/hair_oil_commercial.mp4",
  "/videos/dia_365.mp4",
  "/videos/foot_cream.mp4",
  "/videos/hair_oil_apply.mp4"
];

export function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const resolvedVideoUrl = useBlobUrl(videos[currentVideoIndex]);

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-end bg-black pt-16 md:pt-24 pb-12 sm:pb-20 overflow-hidden group">
      
      {/* Video Player */}
      {resolvedVideoUrl && (
        <video 
          key={currentVideoIndex}
          autoPlay 
          muted 
          playsInline 
          onEnded={handleNext}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={resolvedVideoUrl} type="video/mp4" />
        </video>
      )}
      
      {/* Gradient overlay for text visibility */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0 pointer-events-none" />

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-5xl mx-auto">
          
          <h1 className="text-[38px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-serif text-cream leading-[1.1] font-semibold flex flex-col items-center drop-shadow-xl">
            <VariableProximity 
              text="Nature’s Wisdom" 
              className="mb-1 md:mb-3" 
              radius={250} 
              falloff="exponential"
            />
            <span className="flex items-center justify-center text-[34px] sm:text-[46px] md:text-[56px] lg:text-[68px]">
              <VariableProximity 
                text="Your Everyday Wellness" 
                radius={250} 
                falloff="exponential"
              />
            </span>
          </h1>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link 
              href="/products" 
              className="w-full sm:w-auto bg-gold text-primary-dark px-10 py-4 rounded-full text-[15px] md:text-[16px] font-bold hover:bg-gold-light transition-all flex items-center justify-center gap-2 group shadow-elevated hover:-translate-y-1"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/ayurveda" 
              className="w-full sm:w-auto bg-white/20 text-white backdrop-blur-md border border-white/30 px-10 py-4 rounded-full text-[15px] md:text-[16px] font-bold hover:bg-white/30 transition-all flex items-center justify-center hover:-translate-y-1"
            >
              Our Philosophy
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
