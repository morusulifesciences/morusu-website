import { Check, X } from "lucide-react";

export function AyurvedaComparison() {
  const points = [
    {
      label: "Philosophy",
      ayurveda: "Holistic, traditional wellness principles",
      conventional: "Product or category specific",
    },
    {
      label: "Ingredient Story",
      ayurveda: "Botanical and natural traditional ingredients",
      conventional: "Blended synthetic or mixed ingredients",
    },
    {
      label: "Formulation",
      ayurveda: "Traditional knowledge + modern refinement",
      conventional: "Purely modern formulation science",
    },
    {
      label: "Focus",
      ayurveda: "Long-term routine and lifestyle-oriented",
      conventional: "Focused on a specific, immediate use case",
    },
    {
      label: "Experience",
      ayurveda: "Ritualistic, sensory, natural connection",
      conventional: "Performance and convenience focused",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-cream">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage-light rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-3 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary-dark mb-6">
            Traditional Roots.<br />
            <span className="italic text-text">Modern Presentation.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 relative">
          
          {/* Ayurveda Card (Hero) */}
          <div className="flex-1 bg-primary text-cream p-8 md:p-12 rounded-[2rem] shadow-elevated relative overflow-hidden transform lg:scale-105 z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-light/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-8 border-b border-gold/20 pb-6">
              Morusu Ayurveda
            </h3>
            <ul className="flex flex-col gap-8">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 text-gold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-cream/50 mb-1">{point.label}</span>
                    <span className="text-lg md:text-xl font-serif">{point.ayurveda}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Conventional Card */}
          <div className="flex-1 bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-soft shadow-elevated relative flex flex-col justify-center mt-4 lg:mt-0">
            <h3 className="text-xl md:text-2xl font-serif text-primary-dark mb-8 border-b border-soft pb-6 opacity-70">
              Conventional Approach
            </h3>
            <ul className="flex flex-col gap-8">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 opacity-70 grayscale">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-primary-dark/40">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-text-muted mb-1">{point.label}</span>
                    <span className="text-base md:text-lg text-text-muted">{point.conventional}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
