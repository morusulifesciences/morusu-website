import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ayurveda & Natural Wellness | Morusu Life Sciences",
  description:
    "Discover Morusu Life Sciences' Ayurvedic approach, herbal ingredients, botanical formulations, and authentic product range rooted in tradition.",
};



const PRODUCT_CATEGORIES = [
  {
    title: "Hair Care",
    description:
      "Nourishing herbal hair oils and shampoos developed for comprehensive scalp and hair care.",
    products: "Onion Hair Oil, Onion Shampoo, Black Layer Combo",
    image: "/models/onion-oil/product_mockup.png",
    link: "/products/onion-hair-oil",
    cta: "Explore Products",
  },
  {
    title: "Skin & Beauty Care",
    description:
      "Traditional beauty and facial oils formulated with precious saffron and botanical essences.",
    products: "Kumkumadi Fairness Oil",
    image: "/models/kumkumadi-oil/product_mockup.png",
    link: "/products/kumkumadi-fairness-oil",
    cta: "Explore Products",
  },
  {
    title: "Wellness",
    description:
      "Nutrient-rich single botanical herbal supplements crafted for daily balance and vitality.",
    products: "Moringa Capsules",
    image: "/models/moringa-capsules/product_mockup.png",
    link: "/products/moringa-capsules",
    cta: "Explore Products",
  },
  {
    title: "Foot Care",
    description:
      "Herbal foot care cream formulated with targeted botanical extracts for soothing daily care.",
    products: "Dia 365 Cream",
    image: "/models/dia-365/product_mockup.png",
    link: "/products/dia-365-foot-care-cream",
    cta: "Explore Products",
  },
];

const CONFIRMED_INGREDIENTS = [
  {
    name: "Neem",
    botanical: "Azadirachta indica",
    usage: "Traditionally used in Ayurvedic practices for its cleansing and purifying properties.",
    category: "Foot Care & Skin",
  },
  {
    name: "Brahmi",
    botanical: "Bacopa monnieri",
    usage: "Traditionally used in Ayurvedic preparations for vitality, nourishment, and wellbeing.",
    category: "Wellness & Foot Care",
  },
  {
    name: "Fenugreek",
    botanical: "Trigonella foenum-graecum",
    usage: "Traditionally used in herbal hair and wellness preparations for nourishment and softness.",
    category: "Hair Care & Foot Care",
  },
  {
    name: "Onion",
    botanical: "Allium cepa",
    usage: "Traditionally used in herbal hair formulations to support scalp health and follicle vitality.",
    category: "Hair Care",
  },
  {
    name: "Moringa",
    botanical: "Moringa oleifera",
    usage: "Traditionally valued as a nutrient-dense botanical ingredient for everyday wellness.",
    category: "Wellness",
  },
  {
    name: "Kalajamaun",
    botanical: "Syzygium cumini",
    usage: "Traditionally used in Ayurvedic herbal therapy and specialized topical preparations.",
    category: "Foot Care",
  },
  {
    name: "Coconut Oil",
    botanical: "Cocos nucifera",
    usage: "Traditionally used as a deeply nourishing natural botanical carrier in herbal hair oils.",
    category: "Hair Care",
  },
  {
    name: "Aloe Vera",
    botanical: "Aloe barbadensis",
    usage: "Traditionally known and used for its gentle hydrating, soothing, and cooling properties.",
    category: "Skin & Hair Care",
  },
];





export default function AyurvedaPage() {
  return (
    <div className="min-h-screen bg-cream pb-24 text-text">
      {/* ==================================================
          SECTION 1 — HERO
          ================================================== */}
      <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden mb-16 md:mb-24">
        {/* Nature Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/ayurveda-hero.jpg')" }}
        />
        {/* Deep Botanical & Dark Gradient Overlays for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/75 to-primary-dark/95" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-gold/15 via-transparent to-transparent pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center pt-16">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-md">
            Ayurveda, Rooted in Tradition. <br />
            Created for Modern Wellness.
          </h1>
          

          {/* Action CTAs */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="#product-categories"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-primary-dark font-semibold text-sm md:text-base px-7 py-3.5 rounded-full hover:bg-gold-light transition-all shadow-md active:scale-98 min-h-[44px]"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#understanding-ayurveda"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm md:text-base px-6 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-all min-h-[44px]"
            >
              <span>Our Ayurvedic Approach</span>
            </Link>
          </div> */}
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

        {/* ==================================================
            SECTION 3 — OUR AYURVEDIC HERITAGE
            ================================================== */}
        <section className="mb-20 md:mb-28">
          <div className="bg-white rounded-[2.5rem] border border-soft p-8 md:p-12 lg:p-16 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Image */}
              <div className="lg:col-span-5">
                <div className="rounded-[2rem] overflow-hidden shadow-elevated border border-soft h-[360px] md:h-[420px] bg-cream/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/wisdom.png"
                    alt="Ayurvedic Heritage and Traditional Knowledge"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Heritage Story & Timeline */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-text-muted text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
                  <span className="w-8 h-[2px] bg-gold"></span>
                  <span>Our Ayurvedic Heritage</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
                  A Family Connection to Ayurveda
                </h2>

                <p className="text-base md:text-lg text-text-muted leading-relaxed mb-8">
                  Morusu Life Sciences has its roots in a family tradition connected with Ayurveda. Dr. M. Murali Mohan&apos;s journey began by closely assisting his father, Late Dr. M. Rama Rao, Vaidya Acharya, whose experience as an Ayurvedic physician shaped a lasting respect for traditional Ayurvedic knowledge.
                </p>

                {/* Simple Visual Journey Timeline */}
                <div className="pt-6 border-t border-soft">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-dark mb-4">
                    Our Heritage Journey
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
                    <span className="bg-cream px-3.5 py-2 rounded-xl border border-soft text-primary-dark">
                      Family Ayurvedic Tradition
                    </span>
                    <span className="text-gold font-bold">→</span>
                    <span className="bg-cream px-3.5 py-2 rounded-xl border border-soft text-primary-dark">
                      Traditional Knowledge
                    </span>
                    <span className="text-gold font-bold">→</span>
                    <span className="bg-cream px-3.5 py-2 rounded-xl border border-soft text-primary-dark">
                      Formulation Experience
                    </span>
                    <span className="text-gold font-bold">→</span>
                    <span className="bg-cream px-3.5 py-2 rounded-xl border border-soft text-primary-dark">
                      Morusu Life Sciences
                    </span>
                    <span className="text-gold font-bold">→</span>
                    <span className="bg-primary text-cream px-3.5 py-2 rounded-xl font-semibold shadow-xs">
                      Modern Ayurvedic Products
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ==================================================
            SECTION 5 — PRODUCT CATEGORIES
            ================================================== */}
        <section id="product-categories" className="mb-20 md:mb-28 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 text-text-muted text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-gold"></span>
              <span>Product Range</span>
              <span className="w-8 h-[2px] bg-gold"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-dark font-bold mb-4">
              Our Ayurvedic & Herbal Products
            </h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              Explore our range of Ayurvedic and herbal products developed for different areas of everyday care and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {PRODUCT_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-[2rem] border border-soft shadow-soft overflow-hidden flex flex-col justify-between hover:shadow-card transition-all group"
              >
                {/* Product Image Box */}
                <div className="bg-cream/50 p-6 flex items-center justify-center h-52 relative border-b border-soft/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="max-h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold block mb-1">
                      {cat.products}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-primary-dark mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <Link
                    href={cat.link}
                    className="inline-flex items-center justify-center gap-2 w-full bg-cream hover:bg-primary text-primary-dark hover:text-white font-medium text-sm py-3 px-4 rounded-xl border border-soft hover:border-primary transition-all min-h-[44px]"
                  >
                    <span>{cat.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 6 — INSPIRED BY NATURE (INGREDIENTS)
            ================================================== */}
        <section className="mb-20 md:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 text-text-muted text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>Botanical Sourcing</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-dark font-bold mb-4">
              Inspired by Nature
            </h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              Our formulations incorporate herbs, botanicals and natural ingredients selected according to the intended product formulation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {CONFIRMED_INGREDIENTS.map((ing) => (
              <div
                key={ing.name}
                className="bg-white p-6 rounded-[1.8rem] border border-soft shadow-soft flex flex-col justify-between hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded-md">
                      {ing.category}
                    </span>
                    <Leaf className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-dark mb-0.5">
                    {ing.name}
                  </h3>
                  <span className="text-xs italic text-text-muted/80 block mb-3 font-serif">
                    {ing.botanical}
                  </span>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                    {ing.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>



       
      </div>
    </div>
  );
}