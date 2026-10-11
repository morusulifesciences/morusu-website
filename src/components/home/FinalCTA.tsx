import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
        <h2 className="text-section text-primary-dark mb-8 leading-tight">
          Bring Ayurveda Into Your<br />
          <span className="italic text-text">Everyday Routine</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Link 
            href="/products"
            className="bg-primary text-white px-8 py-4 rounded-full text-button hover:bg-primary-dark transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-elevated shadow-primary/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/contact"
            className="bg-white text-primary-dark border border-soft px-8 py-4 rounded-full text-button hover:bg-forest-50 transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
