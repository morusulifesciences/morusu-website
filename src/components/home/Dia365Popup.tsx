"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BlobImage as Image } from "@/components/blob/BlobImage";
import { ArrowRight, Leaf, Shield, Stethoscope, Heart, X } from "lucide-react";

export function Dia365Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if the popup was already shown during this session
    const alreadyShown = sessionStorage.getItem('dia365_popup_shown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('dia365_popup_shown', 'true');
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="absolute inset-0 bg-primary-dark/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary-dark hover:bg-white hover:scale-110 transition-all shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Frame */}
        <div className="w-full md:w-[45%] relative bg-cream flex-shrink-0 min-h-[250px] md:min-h-full">
          <Image 
            src="/models/dia-365.png" 
            alt="Dia 365 - Natural Support for Healthy Blood Sugar" 
            fill
            className="object-contain p-8 md:p-12" 
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col items-start w-full md:w-[55%] p-8 md:p-12 overflow-y-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
            Featured Announcement
          </span>
          <h2 className="text-[36px] md:text-[48px] font-serif text-primary-dark font-semibold leading-none mb-2">
            Dia 365
          </h2>
          <h3 className="text-[20px] md:text-[24px] font-serif text-primary-dark/80 leading-tight mb-6">
            Natural Support for Healthy Blood Sugar
          </h3>
          
          <p className="text-[15px] text-text-muted leading-relaxed mb-8 max-w-md">
            An Ayurvedic formulation crafted with natural herbs to support healthy blood sugar levels and overall wellness.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10 w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-soft flex items-center justify-center text-primary shrink-0">
                <Leaf className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <span className="text-[13px] font-semibold text-primary-dark leading-tight">Natural<br/>Ingredients</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-soft flex items-center justify-center text-primary shrink-0">
                <Stethoscope className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <span className="text-[13px] font-semibold text-primary-dark leading-tight">Supports<br/>Metabolism</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-soft flex items-center justify-center text-primary shrink-0">
                <Heart className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <span className="text-[13px] font-semibold text-primary-dark leading-tight">Daily<br/>Wellness</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-soft flex items-center justify-center text-primary shrink-0">
                <Shield className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <span className="text-[13px] font-semibold text-primary-dark leading-tight">Trusted<br/>Formula</span>
            </div>
          </div>

          <Link 
            href="/products/dia-365-foot-care-cream" 
            className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group shadow-elevated mt-auto"
            onClick={() => setIsOpen(false)}
          >
            Learn More About Dia 365
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
