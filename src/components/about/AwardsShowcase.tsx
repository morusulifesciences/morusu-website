"use client";

import { useState, useEffect } from "react";
import { X, Award, Sparkles } from "lucide-react";
import { useBlobUrl } from "@/components/blob/BlobProvider";
import { BlobImage as Image } from "@/components/blob/BlobImage";
import { cn } from "@/lib/utils";

export interface RecognitionItem {
  id: string;
  type: "FOUNDER RECOGNITION" | "PROFESSIONAL RECOGNITION";
  badgeLabel: string;
  title: string;
  subTitle?: string;
  recipient: string;
  role?: string;
  organization: string;
  details: string;
  date?: string;
  location?: string;
  validity?: string;
  image: string;
  imageAlt: string;
  aspectHint?: "landscape" | "portrait";
}

const RECOGNITIONS: RecognitionItem[] = [
  {
    id: "state-icons-2026",
    type: "FOUNDER RECOGNITION",
    badgeLabel: "State Level Honour",
    title: "State Icons Awards Night 2026",
    subTitle: "Amaravathi State Icons Recognition • Vijayawada",
    recipient: "Dr. M. Murali Mohan",
    role: "Founder & Managing Director — Morusu Life Sciences",
    organization: "Global Icons Forum Society",
    details: "Conferred at Hylah Place, Vijayawada in honour of outstanding contribution and distinguished entrepreneurial leadership in Ayurvedic wellness formulations.",
    date: "08 August 2026",
    location: "Vijayawada, Andhra Pradesh",
    image: "/images/awards/state_icon.png",
    imageAlt: "State Icons Awards Night 2026 Trophy & Gold Plaque presented to Dr. M. Murali Mohan by Global Icons Forum Society",
    aspectHint: "portrait",
  },
  {
    id: "rajmata-scindia-award",
    type: "FOUNDER RECOGNITION",
    badgeLabel: "National Business Award",
    title: "Best Businessman Award",
    subTitle: "Rajmata Bharat Gaurav Award",
    recipient: "Dr. M. Murali Mohan",
    role: "Founder & Managing Director — Morusu Life Sciences",
    organization: "H.R.H. Shrimant Rajmata Vijayaraje Scindia Foundation, India",
    details: "National honour presented in recognition of immense hard work, entrepreneurial vision, and impactful dedication to botanical science and natural healthcare.",
    date: "18 November 2024",
    location: "Hotel Cinkistata Hall, India",
    image: "/images/awards/best_business.png",
    imageAlt: "Rajmata Bharat Gaurav Best Businessman Award Certificate presented to Dr. M. Murali Mohan by H.R.H. Shrimant Rajmata Vijayaraje Scindia Foundation",
    aspectHint: "portrait",
  },
  {
    id: "ukrainian-association-ayurveda-yoga",
    type: "PROFESSIONAL RECOGNITION",
    badgeLabel: "International Honour",
    title: "Honorary Lifetime Membership",
    subTitle: "Сертифікат Членства • Membership Certificate",
    recipient: "Doctor of Medical Science M. Murali Mohan",
    role: "Doctor of Medical Science — Natural & Ayurvedic Medicine",
    organization: "NGO «Ukrainian Association Ayurveda-Yoga»",
    details: "International honorary lifetime membership recognition for lifelong commitment to promoting Ayurveda, healthy longevity, and scientific botanical health concepts.",
    validity: "Lifetime",
    image: "/images/awards/honarary.png",
    imageAlt: "Membership Certificate from Ukrainian Association Ayurveda-Yoga issued to Doctor of Medical Science M. Murali Mohan",
    aspectHint: "landscape",
  },
  {
    id: "bharat-gaurav-trophy",
    type: "FOUNDER RECOGNITION",
    badgeLabel: "National Trophy Honour",
    title: "Bharat Gaurav Samman Trophy",
    subTitle: "National Award Ceremony",
    recipient: "Dr. M. Murali Mohan",
    role: "Founder & Managing Director — Morusu Life Sciences",
    organization: "Bharat Gaurav Shri Samman Parishad",
    details: "Distinguished three-star golden sculpture trophy presented in recognition of pioneering excellence and valuable service in Indian Ayurvedic manufacturing.",
    date: "National Award Ceremony",
    location: "Indore / New Delhi, India",
    image: "/images/awards/bharat-gaurav-trophy.jpg",
    imageAlt: "Bharat Gaurav Samman Parishad National Star Trophy presented to Dr. M. Murali Mohan",
    aspectHint: "portrait",
  },
];

export function AwardsShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Keyboard navigation & Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section className="mb-20 md:mb-28 scroll-mt-24" aria-labelledby="awards-heading">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
        {/* <div className="inline-flex items-center justify-center gap-2 text-gold text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20">
          <Award className="w-4 h-4 text-gold" />
          <span>Recognition & Honours</span>
          <Sparkles className="w-3.5 h-3.5 text-gold" />
        </div> */}
        <h2 
          id="awards-heading" 
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary-dark font-bold mb-4 tracking-tight"
        >
          Recognized Along the Journey
        </h2>
        {/* <div className="w-20 h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40 mx-auto rounded-full mb-5" /> */}
        <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Honoured by distinguished national and international institutions for pioneering leadership in Ayurvedic formulations, entrepreneurship, and pharmaceutical excellence.
        </p>
      </div>

      {/* Minimal Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {RECOGNITIONS.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col group cursor-pointer bg-white rounded-3xl p-5 border border-soft shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-300"
            onClick={() => setSelectedImage(item.image)}
          >
            {/* Image Preview Box */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-cream border border-soft mb-5 flex items-center justify-center">
              <Image 
                src={item.image} 
                alt={item.imageAlt}
                fill
                className={cn(
                  "object-contain p-4 group-hover:scale-105 transition-transform duration-500",
                  item.aspectHint === "portrait" ? "max-h-[100%]" : "max-w-[100%]"
                )}
              />
            </div>
            
            {/* Minimal Text Details */}
            <div className="text-center flex flex-col flex-1 justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold mb-2 block">
                  {item.badgeLabel}
                </span>
                <h3 className="text-sm font-bold text-primary-dark mb-2 leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-text-muted font-medium pt-2 border-t border-soft/50 mt-auto">
                {item.organization}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Extremely Minimal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Main Image */}
          <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
            <Image 
              src={selectedImage} 
              alt="Award Preview" 
              fill
              className="object-contain rounded-lg drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </section>
  );
}