import Link from "next/link";
import { BlobImage as Image } from "@/components/blob/BlobImage";
import { ArrowRight, Check } from "lucide-react";

export function AyurvedaComparison() {
  return (
    <section className="pt-8 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-[36px] md:text-[42px] font-serif text-primary-dark font-semibold leading-tight">
            Traditional Roots. Modern Presentation.
          </h2>
          <p className="text-[16px] text-text-muted leading-[1.8] max-w-2xl">
            We bring the goodness of traditional Ayurvedic ingredients in modern, easy-to-use formulations for today's lifestyle.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Box 1: Traditional Ayurveda */}
          <div className="bg-cream rounded-3xl overflow-hidden  flex flex-col relative z-10 group">
            <div className="relative h-[240px] w-full overflow-hidden">
              <Image src="/images/hero2.png" alt="Traditional Ayurveda" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-10 flex flex-col gap-5">
              <h3 className="text-[22px] font-serif font-semibold text-primary-dark mb-1">Traditional Ayurveda</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-primary-dark font-medium leading-relaxed">Time-tested ingredients</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-primary-dark font-medium leading-relaxed">Natural healing properties</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-primary-dark font-medium leading-relaxed">Holistic wellness approach</span>
                </li>
              </ul>
            </div>
          </div>

          {/* VS Badge (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold text-white font-serif  font-bold items-center justify-center text-xl shadow-elevated z-20 border-[6px] border-white">
            VS
          </div>

          {/* Box 2: Modern Science */}
          <div className="bg-cream rounded-3xl overflow-hidden  flex flex-col relative z-10 group">
            <div className="relative h-[240px] w-full overflow-hidden">
              <Image src="/images/hero1.png" alt="Modern Science" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-10 flex flex-col gap-5">
              <h3 className="text-[22px] font-serif font-semibold text-primary-dark mb-1">Modern Science</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-primary-dark font-medium leading-relaxed">Standardized extracts</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-primary-dark font-medium leading-relaxed">Quality assurance</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-primary-dark font-medium leading-relaxed">Better absorption & effectiveness</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
