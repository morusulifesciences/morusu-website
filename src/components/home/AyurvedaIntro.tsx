import { Leaf, Beaker, Sun } from "lucide-react";

export function AyurvedaIntro() {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Image Frame */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-sm lg:mr-auto aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-forest-900/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/wisdom.png" 
              alt="Wisdom of Ayurveda" 
              className="w-full h-full object-cover" 
            />
            {/* Decorative inner border */}
            {/* <div className="absolute inset-4 rounded-[1.5rem] border border-white/30 pointer-events-none" /> */}
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest-900 mb-6 leading-tight">
              The Wisdom of Ayurveda, Presented for Modern Life.
            </h2>
            <p className="text-lg md:text-xl text-forest-900/80 mb-12 leading-relaxed font-medium">
              Ayurvedic principles have guided wellness for centuries. At Morusu Life Sciences, we combine this traditional knowledge of natural ingredients with modern formulation, creating products that fit seamlessly into your everyday routine.
            </p>

            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-8 md:gap-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 shrink-0 rounded-full bg-forest-900/5 flex items-center justify-center text-forest-700 shadow-sm">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-forest-900 mb-1">Herbal Ingredients</h3>
                  <p className="text-sm text-forest-900/70 leading-relaxed">Carefully selected botanicals rooted in ancient Ayurvedic tradition.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 shrink-0 rounded-full bg-forest-900/5 flex items-center justify-center text-forest-700 shadow-sm">
                  <Beaker className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-forest-900 mb-1">Thoughtful Formulations</h3>
                  <p className="text-sm text-forest-900/70 leading-relaxed">Blended for ultimate efficacy and a premium sensory experience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 shrink-0 rounded-full bg-forest-900/5 flex items-center justify-center text-forest-700 shadow-sm">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-forest-900 mb-1">Everyday Wellness</h3>
                  <p className="text-sm text-forest-900/70 leading-relaxed">Designed to be an effortless part of your daily long-term care routine.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
