import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FounderCredibility() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="bg-primary rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-elevated flex flex-col md:flex-row items-center gap-12">
          <div className="absolute inset-0 bg-gold-light/10" />
          <div className="relative z-10 md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Rooted in Ayurveda.<br/>
              <span className="text-gold">Guided by Formulation Science.</span>
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-8 max-w-xl">
              Morusu Life Sciences is dedicated to bringing the enduring wisdom of Ayurveda into modern everyday routines, backed by decades of scientific expertise.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center gap-3 bg-white text-primary-dark px-8 py-4 rounded-full text-button hover:bg-gold hover:text-primary-dark transition-colors"
            >
              Discover Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative z-10 md:w-1/2 flex flex-col items-center md:items-start md:border-l border-white/10 md:pl-12">
            <h3 className="text-white text-2xl font-serif mb-2">Dr. M. Murali Mohan</h3>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Founder & Managing Director</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">BNYS</span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">MBA</span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">Ph D.</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed text-center md:text-left">
              More than 25 years of experience in pharmaceutical formulations, herbal products, and herbal cosmetics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
