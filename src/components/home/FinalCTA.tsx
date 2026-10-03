import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-sage-light/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest-900 mb-8 leading-tight">
          Bring Ayurveda Into Your<br />
          <span className="italic text-forest-800">Everyday Routine</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Link 
            href="/products"
            className="bg-forest-900 text-white px-8 py-4 rounded-full font-medium hover:bg-forest-800 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-forest-900/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-900"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/contact"
            className="bg-white text-forest-900 border border-forest-900/20 px-8 py-4 rounded-full font-medium hover:bg-forest-50 transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
