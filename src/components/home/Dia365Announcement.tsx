"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Dia365Announcement() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Check if dismissed in session
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem("dia365-dismissed");
      if (dismissed === "true") return;
    }

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > window.innerHeight * 0.8) {
        setHasScrolled(true);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("dia365-dismissed", "true");
  };

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-primary/40 backdrop-blur-sm transition-all duration-500 ease-out",
        isVisible 
          ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none"
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div 
        className={cn(
          "bg-white rounded-3xl shadow-elevated max-w-4xl w-full max-h-[90vh] md:max-h-[85vh] relative overflow-y-auto overflow-x-hidden flex flex-col md:flex-row transition-transform duration-500 delay-100",
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        )}
      >
        <button 
          onClick={dismiss}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 text-text-muted hover:text-primary-dark bg-white/80 backdrop-blur-md rounded-full p-2 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Area */}
        <div className="w-full md:w-1/2 bg-sage-light relative h-48 sm:h-64 md:h-auto flex items-center justify-center p-6 md:p-8 shrink-0">
           <div className="absolute inset-0 bg-gold-light/20" />
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img 
             src="/models/dia-365.png" 
             alt="DIA 365 Cream" 
             className="relative z-10 w-full h-full object-contain drop-shadow-elevated" 
           />
        </div>
        
        {/* Content Area */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center shrink-0">
          <span className="text-primary text-xs font-bold uppercase tracking-wider mb-3 block">
            New Wellness Focus
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-primary-dark mb-4 leading-tight">
            Discover DIA 365 Ayurvedic Foot Care Cream
          </h3>
          <p className="text-text-muted mb-8 leading-relaxed">
            Experience the soothing power of traditional botanical extracts with our new daily foot-care routine designed specifically for diabetic wellness.
          </p>
          
          <Link 
            href="/products/dia-365-foot-care-cream"
            className="inline-flex w-fit items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors group"
            onClick={() => setIsVisible(false)} // close on click
          >
            Discover DIA 365
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
