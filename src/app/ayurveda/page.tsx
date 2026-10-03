import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayurveda & Herbal Wellness | Morusu Life Sciences",
  description: "Explore the traditional ideas, herbs and botanical ingredients that inspire Morusu Life Sciences products and wellness routines.",
};

export default function AyurvedaPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-ivory">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-20 text-center">
        <span className="text-gold font-semibold uppercase tracking-widest mb-4 block">Our Philosophy</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-forest-900 mb-6 max-w-4xl mx-auto leading-tight">
          The Science of Nature
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
        <p className="text-xl md:text-2xl text-forest-900/70 max-w-3xl mx-auto font-serif italic">
          Ayurveda, the traditional Indian system of wellness, emphasizes balance and the use of natural botanicals to support a holistic lifestyle.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <div className="rounded-[3rem] overflow-hidden shadow-xl border border-forest-900/10 h-[500px]">
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
              <h2 className="text-3xl md:text-4xl font-serif text-forest-900 mb-4">Traditional Herbs & Botanicals</h2>
              <p className="text-lg text-forest-900/80 leading-relaxed">
                Our formulations are inspired by ingredients that have been used for centuries. Herbs like Shikakai, Amla, Neem, and Brahmi are celebrated in traditional texts for their cleansing, nourishing, and purifying properties. We bring these ancient remedies to your modern routine.
              </p>
            </div>
            
            <div className="w-16 h-[1px] bg-forest-900/20" />
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-forest-900 mb-4">Daily Wellness Routines</h2>
              <p className="text-lg text-forest-900/80 leading-relaxed">
                In Ayurveda, personal care is viewed not as a quick fix, but as an ongoing ritual. Our products are designed to support these daily rituals, turning everyday actions like hair care or skin moisturization into moments of mindful self-care.
              </p>
            </div>
          </div>
        </div>
        
        {/* Disclaimer Banner */}
        <div className="max-w-4xl mx-auto bg-white border border-forest-900/10 p-8 rounded-[2rem] shadow-sm text-center">
          <p className="text-sm italic text-forest-900/70">
            <span className="font-semibold text-forest-900 block mb-2">Please Note:</span>
            Educational content only. Product suitability and health-related use should be confirmed against the final approved product labeling and professional guidance where appropriate.
          </p>
        </div>
      </div>
    </div>
  );
}
