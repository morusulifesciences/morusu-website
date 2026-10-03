import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Morusu Life Sciences | Science of Nature",
  description: "Learn about Morusu Life Sciences, our Ayurveda-inspired product philosophy, natural ingredient focus and vision for modern wellness.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-ivory">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-20 text-center">
        <span className="text-gold font-semibold uppercase tracking-widest mb-4 block">Who We Are</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-forest-900 mb-6 max-w-4xl mx-auto leading-tight">
          About Morusu Life Sciences
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
        <p className="text-xl md:text-2xl text-forest-900/70 max-w-3xl mx-auto font-serif italic">
          An India-rooted wellness brand dedicated to bringing the enduring wisdom of Ayurveda into modern everyday routines.
        </p>
      </div>

      {/* Grid Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-forest-900/5">
            <h2 className="text-3xl font-serif text-forest-900 mb-4">Our Philosophy</h2>
            <p className="text-forest-900/80 leading-relaxed text-lg">
              We believe that natural care, rooted in traditional Ayurvedic principles, can be seamlessly integrated into modern life. Our focus is on harnessing the power of botanical ingredients to create thoughtfully formulated products for hair, skin, nutrition, and everyday wellness.
            </p>
          </div>
          
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-forest-900/5">
            <h2 className="text-3xl font-serif text-forest-900 mb-4">Our Approach</h2>
            <p className="text-forest-900/80 leading-relaxed text-lg">
              Rather than relying on conventional cosmetic methodologies that are often product-specific, we take a holistic approach. We emphasize long-term routines and the sensory experience of natural ingredients.
            </p>
          </div>
        </div>

        {/* Leadership Box */}
        <div className="bg-forest-900 text-ivory rounded-[3rem] p-12 md:p-16 mb-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gold/5" />
          <div className="relative z-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Director & Visionary</h3>
            <p className="text-4xl md:text-5xl font-serif text-white mb-0">Lion Dr. M. Murali Mohan</p>
          </div>
        </div>

        {/* Bottom Wide Card */}
        <div className="bg-sage-light/20 p-10 md:p-16 rounded-[3rem] border border-forest-900/10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-forest-900 mb-6">Quality & Transparency</h2>
          <p className="text-forest-900/80 leading-relaxed text-lg max-w-3xl mx-auto">
            From sourcing to final presentation, we maintain rigorous standards. We believe in transparent storytelling about the botanicals in our formulas, empowering our customers to make informed choices for their personal care rituals.
          </p>
        </div>
      </div>
    </div>
  );
}
