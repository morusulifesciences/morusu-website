import Link from "next/link";
import { BlobImage as Image } from "@/components/blob/BlobImage";
import { ArrowRight, Leaf, Heart, Stethoscope } from "lucide-react";

export function AyurvedaIntro() {
  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image Frame */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-r-3xl rounded-l-md overflow-hidden shadow-soft">
            <Image 
              src="/images/wisdom.png" 
              alt="Ayurveda for Today's World" 
              fill
              className="object-cover" 
            />
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start w-full relative z-10">
            {/* <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold mb-4">
              Our Philosophy
            </span> */}
            <h2 className="text-[36px] md:text-[48px] font-serif text-primary-dark font-semibold leading-tight mb-5">
              Ayurveda for Today's World
            </h2>
            
            <div className="flex flex-col gap-10 w-full mb-10">
              <p className="text-[16px] md:text-[17px] text-text-muted leading-[1.8]">
                We believe in the power of nature and the timeless wisdom of Ayurveda. Our formulations are crafted with authentic ingredients, supported by scientific research, to promote healthier and happier lives.
              </p>
              
              <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6 md:gap-10">
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3 flex-1 sm:flex-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-soft bg-white shadow-soft flex items-center justify-center text-primary">
                    <Leaf className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[12px] sm:text-[14px] font-semibold text-primary-dark mb-0.5">Nature First</span>
                    <span className="block text-[10px] sm:text-[12px] text-text-muted leading-tight">Pure & authentic<br className="hidden sm:block"/>ingredients</span>
                  </div>
                </div>
                
                <div className="w-px h-12 sm:h-16 bg-soft hidden md:block" />
                
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3 flex-1 sm:flex-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-soft bg-white shadow-soft flex items-center justify-center text-primary">
                    <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[12px] sm:text-[14px] font-semibold text-primary-dark mb-0.5">Science Driven</span>
                    <span className="block text-[10px] sm:text-[12px] text-text-muted leading-tight">Backed by modern<br className="hidden sm:block"/>research</span>
                  </div>
                </div>
                
                <div className="w-px h-12 sm:h-16 bg-soft hidden md:block" />

                <div className="flex flex-col items-center text-center gap-2 sm:gap-3 flex-1 sm:flex-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-soft bg-white shadow-soft flex items-center justify-center text-primary">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[12px] sm:text-[14px] font-semibold text-primary-dark mb-0.5">People Focused</span>
                    <span className="block text-[10px] sm:text-[12px] text-text-muted leading-tight">Better wellness<br className="hidden sm:block"/>for all</span>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className="bg-primary text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-primary-dark transition-all flex items-center gap-2 group shadow-elevated hover:-translate-y-0.5"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
