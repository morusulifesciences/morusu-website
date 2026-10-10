import { Metadata } from "next";
import { AwardsShowcase } from "@/components/about/AwardsShowcase";

export const metadata: Metadata = {
  title: "About Morusu Life Sciences | Our Story & Founder",
  description: "Learn about Morusu Life Sciences, founded by Dr. M. Murali Mohan, and our journey combining Ayurvedic knowledge with modern formulation expertise.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream pb-24">
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
      {/* 500px Nature Background Hero Section */}
      <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden mb-16 md:mb-20">
        {/* Nature Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/aboutusbanner.jpeg')" }}
        />
        {/* Emerald Botanical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/85 via-primary-dark/70 to-primary-dark/90" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-gold/15 via-transparent to-transparent pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center pt-16">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold-light font-semibold uppercase tracking-widest text-xs md:text-sm px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
            Who We Are
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 max-w-4xl mx-auto leading-tight drop-shadow-md">
            About Morusu Life Sciences
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-5 shadow-sm" />
          <p className="text-lg sm:text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto font-serif italic drop-shadow-sm">
            &ldquo;Science of Nature for a Healthier Tomorrow&rdquo;
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Our Story / About Section (Matches Reference Design) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24">
          {/* Left Column: Story Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-text-muted text-xs md:text-sm font-bold uppercase tracking-widest">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>Our Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary-dark font-bold leading-tight">
              About <br className="hidden sm:inline" />
              Morusu Life Sciences
            </h2>

            <p className="text-text-muted leading-relaxed text-base md:text-lg">
              Morusu Life Sciences represents a natural wellness philosophy rooted in traditional Ayurveda and supported by over 8+ years of pharmaceutical formulation expertise. Based in Hyderabad, we specialize in pure, evidence-informed herbal healthcare, skin care, and hair care products.
            </p>

            <p className="text-text-muted leading-relaxed text-base md:text-lg">
              We provide high-quality formulations manufactured in compliance with AYUSH licensing standards and GMP guidelines under the proper guidance of skilled Ayurvedic doctors and formulation scientists, using optimum-grade botanical extracts and pure essential oils.
            </p>

            <div className="border-l-4 border-primary bg-primary/5 p-5 md:p-6 rounded-r-2xl">
              <p className="text-primary-dark font-serif italic text-base md:text-lg leading-relaxed">
                &ldquo;To date, we have built a trusted wellness presence, combining time-tested Ayurvedic wisdom with pharmaceutical excellence across 100+ formulations.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Image with Floating 100+ Badge */}
          <div className="lg:col-span-5 relative pb-8 pr-2 sm:pb-10 sm:pr-4">
            <div className="rounded-[2.5rem] overflow-hidden shadow-elevated border border-soft bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/aboutus.png"
                alt="Ayurvedic Scientists and Botanical Formulations"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>

            {/* Overlapping Badge (Matches Reference Design) */}
            <div className="absolute bottom-0 left-2 sm:-left-4 bg-primary-dark text-white p-5 sm:p-6 rounded-2xl shadow-elevated border-2 border-white/20 z-10 min-w-[170px]">
              <span className="block font-serif font-bold text-3xl sm:text-4xl text-sage mb-1">
                100+
              </span>
              <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90">
                Products Formulated
              </span>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <div className="bg-primary text-cream rounded-[3rem] p-8 sm:p-10 md:p-14 lg:p-16 mb-16 relative overflow-hidden shadow-elevated">
          <div className="absolute inset-0 bg-gold-light/10" />
          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-start">
            {/* Founder Profile Column */}
            <div className="w-full lg:w-[38%] flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative w-44 sm:w-52 md:w-60 aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated border-2 border-gold/40 bg-primary-dark mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/founder.png"
                  alt="Dr. M. Murali Mohan - Founder & Managing Director"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold mb-2">
                Founder & Managing Director
              </h3>
              <p className="text-3xl sm:text-4xl font-serif text-white mb-3 leading-tight">
                Dr. M. Murali Mohan
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium border border-white/10">BNYS</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium border border-white/10">MBA</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium border border-white/10">Ph D.</span>
              </div>
              <p className="text-gold/90 font-medium text-sm leading-relaxed max-w-md">
                More than 8+ years of experience in pharmaceutical formulations, herbal products, and herbal cosmetics.
              </p>
            </div>

            {/* Founder Journey Story */}
            <div className="w-full lg:w-[62%] lg:border-l border-white/15 lg:pl-10">
              <h4 className="text-2xl sm:text-3xl font-serif text-white mb-5">
                Founder's Journey
              </h4>
              <div className="space-y-4 text-cream/85 text-base sm:text-lg leading-relaxed">
                <p>
                  Dr. M. Murali Mohan began his career with Nutria Pharma & Health Care Pvt. Ltd., where he developed a strong foundation in nutraceutical and formulation science. He also closely assisted his father, Late Dr. M. Ramana Rao, Vaidya Acharya, a distinguished Ayurvedic physician.
                </p>
                <p>
                  This experience gave him exposure to both modern formulation science and traditional Ayurvedic knowledge, influencing his move toward natural resources such as herbal extracts, botanical ingredients, and essential oils.
                </p>
                <p>
                  He subsequently combined formulation development knowledge with Ayurvedic principles in developing Morusu's range of natural healthcare products, formulated without harmful chemicals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recognition & Awards Section */}
        <AwardsShowcase />

        {/* Timeline */}
        <div className="bg-sage-light p-10 md:p-16 rounded-[3rem] border border-soft mb-20">
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

        {/* Our Vision & Mission Section */}
        <section className="mb-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-text-muted text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
             
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary-dark font-bold mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Pioneering the future of holistic wellness through pure botanical ingredients, pharmaceutical precision, and time-tested Ayurvedic wisdom.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Vision Card */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-soft shadow-soft flex flex-col justify-between relative overflow-hidden group hover:shadow-card transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[4rem] pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold mb-6">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">Our Vision</span>
                <h3 className="text-2xl md:text-3xl font-serif text-primary-dark font-bold mb-4">
                  Global Benchmark in Natural Wellness
                </h3>
                <p className="text-text-muted leading-relaxed text-sm md:text-base mb-6">
                  To be globally recognized as a trusted pioneer in natural healthcare—making authentic Ayurvedic formulations and evidence-informed botanical remedies an integral part of everyday healthy living for families worldwide.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-soft/60 text-xs md:text-sm text-text">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                  <span>Pure botanical preparations without harmful synthetic chemicals</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                  <span>Harmonizing ancient wisdom with modern pharmaceutical science</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                  <span>Accessible, sustainable, and transparent wellness solutions</span>
                </li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-soft shadow-soft flex flex-col justify-between relative overflow-hidden group hover:shadow-card transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Our Mission</span>
                <h3 className="text-2xl md:text-3xl font-serif text-primary-dark font-bold mb-4">
                  Formulating Purity with Scientific Rigor
                </h3>
                <p className="text-text-muted leading-relaxed text-sm md:text-base mb-6">
                  To formulate and deliver therapeutic-grade Ayurvedic healthcare products, herbal cosmetics, and wellness solutions—manufactured under strict AYUSH licensing standards and GMP certified processes, backed by 25+ years of formulation expertise.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-soft/60 text-xs md:text-sm text-text">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <span>Proprietary formulations using optimum-grade herbal extracts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <span>Rigorous quality assurance, hygiene, and standardized efficacy</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <span>Dedicated customer support with authentic Ayurvedic guidance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3 Core Values Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream/70 p-6 md:p-8 rounded-[2rem] border border-soft text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4 className="text-lg font-serif text-primary-dark font-bold mb-2">Authentic Heritage</h4>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                Preserving traditional Ayurvedic knowledge passed down through the Vaidya Acharya legacy.
              </p>
            </div>

            <div className="bg-cream/70 p-6 md:p-8 rounded-[2rem] border border-soft text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              </div>
              <h4 className="text-lg font-serif text-primary-dark font-bold mb-2">Botanical Purity</h4>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                Utilizing optimum-grade herbs, extracts, and essential oils without harmful synthetic additives.
              </p>
            </div>

            <div className="bg-cream/70 p-6 md:p-8 rounded-[2rem] border border-soft text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
              </div>
              <h4 className="text-lg font-serif text-primary-dark font-bold mb-2">Formulation Science</h4>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                Backed by 25+ years of pharmaceutical expertise for consistent potency, safety, and bioavailability.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}