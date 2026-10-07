import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IngredientsShowcase() {
  const featuredIngredients = [
    { name: "Onion Seed", role: "Hair Nourishment", color: "bg-[#7B8B7A]/20" },
    { name: "Moringa", role: "Vital Nutrition", color: "bg-[#B89965]/20" },
    { name: "Saffron", role: "Radiant Skin", color: "bg-[#8A2E50]/10" },
    { name: "Neem", role: "Purifying", color: "bg-[#1C4D30]/10" },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">
              Our Ingredients
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-dark mb-6">
              Powered by Nature's Ingredients
            </h2>
            <p className="text-text-muted leading-relaxed">
              We source potent botanicals and herbs, trusting in traditional knowledge and preparing them carefully to retain their natural efficacy.
            </p>
          </div>
          <Link 
            href="/ingredients"
            className="inline-flex items-center gap-2 text-primary-dark font-medium hover:text-primary transition-colors group whitespace-nowrap"
          >
            <span className="border-b border-primary group-hover:border-primary pb-0.5 transition-colors">
              Explore All Ingredients
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {featuredIngredients.map((ingredient, idx) => (
            <Link 
              key={idx}
              href="/ingredients"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-soft hover:shadow-card transition-shadow"
            >
              {/* Image Placeholder */}
              <div className={`absolute inset-0 ${ingredient.color} group-hover:scale-105 transition-transform duration-700`} />
              
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 transform transition-transform group-hover:-translate-y-2">
                <h3 className="font-serif text-xl text-primary-dark mb-1">{ingredient.name}</h3>
                <p className="text-xs text-primary uppercase tracking-wider">{ingredient.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
