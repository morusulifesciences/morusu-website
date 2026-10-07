import { Leaf, Droplets, CheckCircle, Search, Award, MapPin } from "lucide-react";

export function WhyMorusu() {
  const reasons = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Herbal & Botanical Focus",
      description: "Harnessing the power of traditional plant-based ingredients."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Thoughtfully Formulated",
      description: "Designed for a premium sensory experience and daily efficacy."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Focused",
      description: "Rigorous standards from sourcing to final presentation."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Transparent Storytelling",
      description: "Clear information about the botanicals in our formulas."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Modern Presentation",
      description: "Traditional Ayurvedic wisdom adapted for modern routines."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "India-Rooted",
      description: "A wellness brand proudly born and manufactured in India."
    }
  ];

  return (
    <section className="bg-white pt-10 md:pt-18">
      <div className="container mx-auto px-2 md:px-4 lg:px-4 max-w-7xl mb-4 md:mb-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-dark mb-6">
            Why Morusu
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </div>
      
      {/* User requested to comment out the grid content
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-cream-dark/30 border border-soft hover:border-soft transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6">
                {reason.icon}
              </div>
              <h3 className="font-serif text-xl text-primary-dark mb-2">{reason.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      */}

      {/* Full Width Edge-to-Edge Image */}
      <div className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/why.png" 
          alt="Why Morusu Life Sciences" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </section>
  );
}
