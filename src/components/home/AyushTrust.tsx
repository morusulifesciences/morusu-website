import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function AyushTrust() {
  return (
    <section className="py-20 bg-sage-light border-t border-soft">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
        <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-soft border border-soft relative overflow-hidden">
           <div className="absolute -top-12 -right-12 text-primary-dark/5">
              <ShieldCheck className="w-48 h-48" />
           </div>
           
           <ShieldCheck className="w-12 h-12 text-primary-dark mx-auto mb-6" />
           <p className="text-text-muted uppercase tracking-widest text-sm font-semibold mb-2">Government of Telangana</p>
           <h2 className="text-2xl md:text-3xl font-serif text-primary-dark mb-2">Department of AYUSH</h2>
           
           <div className="inline-block bg-gold-light/20 text-primary-dark px-6 py-2 rounded-full font-medium mb-8">
             AYUSH License: T-2217/Ayur
           </div>

           <div className="border-t border-soft pt-8 mb-8">
             <h3 className="text-lg font-serif text-primary-dark mb-4">Approved Products</h3>
             <div className="flex flex-wrap justify-center gap-4">
               <span className="bg-sage-light border border-soft text-primary-dark px-4 py-2 rounded-lg font-medium">DIA 365 Cream</span>
               <span className="bg-sage-light border border-soft text-primary-dark px-4 py-2 rounded-lg font-medium">EXMOR Capsule</span>
             </div>
           </div>

           <Link 
             href="/certifications"
             className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:text-gold transition-colors"
           >
             View Approval Details
             <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </div>
    </section>
  );
}
