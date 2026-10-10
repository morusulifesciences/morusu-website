import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, Droplets, Heart } from "lucide-react";

export function AyurvedaCredibility() {
  const pillars = [
    { icon: <Leaf className="w-6 h-6 text-gold" />, title: "Ayurveda" },
    { icon: <Sparkles className="w-6 h-6 text-gold" />, title: "Herbal Ingredients" },
    { icon: <Droplets className="w-6 h-6 text-gold" />, title: "Formulation Expertise" },
    { icon: <Heart className="w-6 h-6 text-gold" />, title: "Natural Wellness" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-primary-dark mb-4">
          Where Ayurvedic Wisdom<br/>Meets Modern Formulation
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-12" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-cream rounded-2xl border border-soft hover:border-gold/30 transition-colors">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-primary-dark font-serif text-lg">{pillar.title}</h3>
            </div>
          ))}
        </div>

        <Link 
          href="/ayurveda"
          className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-button hover:bg-primary-dark transition-colors"
        >
          Explore Ayurveda
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
