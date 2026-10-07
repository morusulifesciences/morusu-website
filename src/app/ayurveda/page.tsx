import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayurveda & Natural Wellness | Morusu Life Sciences",
  description: "Discover Morusu Life Sciences' approach to Ayurveda, herbal ingredients, botanical extracts and modern formulation expertise for natural wellness.",
};

export default function AyurvedaPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-20 text-center">
        <span className="text-gold font-semibold uppercase tracking-widest mb-4 block">Our Philosophy</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-dark mb-6 max-w-4xl mx-auto leading-tight">
          Where Ayurvedic Wisdom Meets Modern Formulation
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
        <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-serif italic">
          Traditional Ayurvedic knowledge combined with modern formulation expertise to create natural wellness products.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <div className="rounded-[3rem] overflow-hidden shadow-elevated border border-soft h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/wisdom.png" 
                alt="Ayurvedic Wisdom" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-4">A Heritage of Healing</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                The foundation of Morusu Life Sciences is built upon a profound respect for Ayurveda. Dr. M. Murali Mohan's journey began by closely assisting his father, Late Dr. M. Ramana Rao, Vaidya Acharya, a distinguished Ayurvedic physician.
              </p>
            </div>
            
            <div className="w-16 h-[1px] bg-primary/20" />
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-4">Modern Formulation Expertise</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                By subsequently combining this profound traditional Ayurvedic knowledge with deep expertise in formulation development, Morusu Life Sciences crafts products that bridge the gap between ancient wisdom and modern natural wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Storytelling Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-12 text-center">The Path to Natural Wellness</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
             <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10 -translate-y-1/2 z-0"></div>
             
             <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-soft text-center relative z-10">
                <div className="w-12 h-12 bg-primary text-gold rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-serif font-bold">1</div>
                <h3 className="text-xl font-serif text-primary-dark mb-3">Ancient Ayurvedic Wisdom</h3>
                <p className="text-text-muted text-sm">Rooted in time-tested traditions and holistic understanding of wellbeing.</p>
             </div>
             
             <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-soft text-center relative z-10">
                <div className="w-12 h-12 bg-primary text-gold rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-serif font-bold">2</div>
                <h3 className="text-xl font-serif text-primary-dark mb-3">Formulation Knowledge</h3>
                <p className="text-text-muted text-sm">Applying scientific principles to create effective and elegant formulations.</p>
             </div>
             
             <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-soft text-center relative z-10">
                <div className="w-12 h-12 bg-primary text-gold rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-serif font-bold">3</div>
                <h3 className="text-xl font-serif text-primary-dark mb-3">Herbal & Botanical Ingredients</h3>
                <p className="text-text-muted text-sm">Sourcing nature's finest extracts, botanical ingredients, and essential oils.</p>
             </div>

             <div className="bg-primary text-cream p-8 rounded-[2rem] shadow-card border border-primary text-center relative z-10">
                <div className="w-12 h-12 bg-gold text-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-serif font-bold">4</div>
                <h3 className="text-xl font-serif text-white mb-3">Modern Natural Wellness Products</h3>
                <p className="text-cream/80 text-sm">Delivering holistic solutions for healthcare, skincare, and haircare.</p>
             </div>
          </div>
        </div>
        
        {/* Disclaimer Banner */}
        <div className="max-w-4xl mx-auto bg-white border border-soft p-8 rounded-[2rem] shadow-soft text-center">
          <p className="text-sm italic text-text-muted">
            <span className="font-semibold text-primary-dark block mb-2">Please Note:</span>
            Educational content only. Product suitability and health-related use should be confirmed against the final approved product labeling and professional guidance where appropriate.
          </p>
        </div>
      </div>
    </div>
  );
}
