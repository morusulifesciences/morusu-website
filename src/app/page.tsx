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
import { FounderCredibility } from "@/components/home/FounderCredibility";
import { AyurvedaCredibility } from "@/components/home/AyurvedaCredibility";
import { AyushTrust } from "@/components/home/AyushTrust";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-[100dvh]">
        <Hero />
      </div>
      <FounderCredibility />
      <AyurvedaCredibility />
      <AyurvedaIntro />
      {/* <div className="bg-cream border-t border-soft">
        <IngredientsCarousel />
      </div> */}
      <div className="bg-primary">
        <WhyMorusu />
      </div>
      <ProductCarousel />
      <div className="bg-sage-light border-t border-soft">
        <Dia365Announcement />
      </div>
      <AyurvedaComparison />
      
      <AyushTrust />
      
      <ReviewsPreview />
      <CertificationsPreview />
      <FinalCTA />
    </div>
  );
}
