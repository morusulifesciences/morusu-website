import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Morusu Life Sciences | Our Story & Founder",
  description: "Learn about Morusu Life Sciences, founded by Dr. M. Murali Mohan, and our journey combining Ayurvedic knowledge with modern formulation expertise.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Morusu Life Sciences",
            "url": "https://morusulifesciences.com",
            "founder": {
              "@type": "Person",
              "name": "Dr. M. Murali Mohan",
              "jobTitle": "Founder & Managing Director"
            }
          })
        }}
      />
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-20 text-center">
        <span className="text-gold font-semibold uppercase tracking-widest mb-4 block">Who We Are</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-dark mb-6 max-w-4xl mx-auto leading-tight">
          About Morusu Life Sciences
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
        <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-serif italic">
          Science of Nature for a Healthier Tomorrow
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        {/* Company Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-soft border border-soft md:col-span-2">
            <h2 className="text-3xl font-serif text-primary-dark mb-4">Our Philosophy</h2>
            <p className="text-text-muted leading-relaxed text-lg mb-4">
              Morusu Life Sciences represents a natural wellness philosophy rooted in Ayurveda and supported by modern formulation expertise. 
            </p>
            <p className="text-text-muted leading-relaxed text-lg">
              We focus on the combination of traditional Ayurveda with pharmaceutical formulation experience. By utilizing herbal products, herbal cosmetics, botanical ingredients, herbal extracts, and essential oils, we deliver natural wellness solutions for modern everyday routines.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-primary text-cream rounded-[3rem] p-10 md:p-16 mb-16 relative overflow-hidden shadow-elevated">
          <div className="absolute inset-0 bg-gold-light/10" />
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="md:w-1/3 text-center md:text-left flex flex-col justify-center h-full">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Founder & Managing Director</h3>
              <p className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">Dr. M. Murali Mohan</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">BNYS</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">MBA</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Ph D.</span>
              </div>
              <p className="text-gold/90 font-medium">More than 25 years of experience in pharmaceutical formulations, herbal products, and herbal cosmetics.</p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-2xl font-serif text-white mb-4">Founder's Journey</h4>
              <p className="text-cream/80 leading-relaxed mb-4">
                Dr. M. Murali Mohan began his career with Nutria Pharma & Health Care Pvt. Ltd., where he developed a strong foundation in nutraceutical and formulation science. He also closely assisted his father, Late Dr. M. Ramana Rao, Vaidya Acharya, a distinguished Ayurvedic physician.
              </p>
              <p className="text-cream/80 leading-relaxed mb-6">
                This experience gave him exposure to both modern formulation science and traditional Ayurvedic knowledge, influencing his move toward natural resources such as herbal extracts, botanical ingredients, and essential oils. He subsequently combined formulation development knowledge with Ayurvedic principles in developing Morusu's range of natural healthcare products, formulated without harmful chemicals.
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-xl font-serif text-white mb-2">Innovation & Vision</h4>
                <p className="text-cream/80 leading-relaxed text-sm">
                  Dr. M. Murali Mohan is driven by innovation and a strong global vision. He served as a consultant to the Government of Ukraine for setting up an Ayurveda college and manufacturing setup.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Product Categories */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-4">Our Product Categories</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Thoughtfully developed ranges that cater to your holistic wellbeing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-soft text-center">
              <h3 className="text-xl font-serif text-primary-dark mb-3">General Healthcare</h3>
              <p className="text-text-muted text-sm">Pharmaceutical formulations & nutraceuticals rooted in traditional wellness.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-soft text-center">
              <h3 className="text-xl font-serif text-primary-dark mb-3">Skincare</h3>
              <p className="text-text-muted text-sm">Herbal cosmetics powered by pure botanical ingredients and essential oils.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-soft text-center">
              <h3 className="text-xl font-serif text-primary-dark mb-3">Haircare</h3>
              <p className="text-text-muted text-sm">Nourishing herbal products designed with potent herbal extracts.</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-sage-light p-10 md:p-16 rounded-[3rem] border border-soft">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-12 text-center">Our Evolution</h2>
          <div className="flex flex-col gap-8 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="md:w-1/2 text-left md:text-right">
                <h3 className="text-xl font-serif text-primary-dark mb-2">Foundation in Formulation Science</h3>
                <p className="text-text-muted text-sm">Dr. M. Murali Mohan began his career with Nutria Pharma & Health Care Pvt. Ltd.</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-gold z-10 shrink-0 hidden md:block"></div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="w-4 h-4 rounded-full bg-primary z-10 shrink-0 hidden md:block"></div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-xl font-serif text-primary-dark mb-2">Ayurvedic Knowledge</h3>
                <p className="text-text-muted text-sm">Worked closely with Late Dr. M. Ramana Rao, Vaidya Acharya.</p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="md:w-1/2 text-left md:text-right">
                <h3 className="text-xl font-serif text-primary-dark mb-2">Shift Toward Natural Resources</h3>
                <p className="text-text-muted text-sm">Focused on herbal extracts, botanical ingredients and essential oils.</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-gold z-10 shrink-0 hidden md:block"></div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="w-4 h-4 rounded-full bg-primary z-10 shrink-0 hidden md:block"></div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-xl font-serif text-primary-dark mb-2">Formulation + Ayurveda</h3>
                <p className="text-text-muted text-sm">Combined formulation expertise with Ayurvedic knowledge.</p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="md:w-1/2 text-left md:text-right">
                <h3 className="text-xl font-serif text-primary-dark mb-2">Morusu Life Sciences</h3>
                <p className="text-text-muted text-sm">Development of natural wellness products across healthcare, skincare and haircare.</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-gold z-10 shrink-0 hidden md:block"></div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
