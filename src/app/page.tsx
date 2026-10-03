import { Hero } from "@/components/home/Hero";
import { AyurvedaIntro } from "@/components/home/AyurvedaIntro";
import { IngredientsCarousel } from "@/components/home/IngredientsCarousel";
import { AyurvedaComparison } from "@/components/home/AyurvedaComparison";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { Dia365Announcement } from "@/components/home/Dia365Announcement";
import { WhyMorusu } from "@/components/home/WhyMorusu";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { CertificationsPreview } from "@/components/home/CertificationsPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-[100dvh]">
        <Hero />
      </div>
      <AyurvedaIntro />
      {/* <div className="bg-ivory border-t border-forest-900/5">
        <IngredientsCarousel />
      </div> */}
      <div className="bg-forest-900">
        <WhyMorusu />
      </div>
      <ProductCarousel />
      <div className="bg-sage-light/10 border-t border-forest-900/5">
        <Dia365Announcement />
      </div>
      <AyurvedaComparison />
      
      <ReviewsPreview />
      <CertificationsPreview />
      <FinalCTA />
    </div>
  );
}
