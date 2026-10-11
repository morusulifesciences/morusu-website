import { Hero } from "@/components/home/Hero";
import { AyurvedaIntro } from "@/components/home/AyurvedaIntro";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { AyurvedaComparison } from "@/components/home/AyurvedaComparison";
import { AyushTrust } from "@/components/home/AyushTrust";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { CertificatesDisplay } from "@/components/home/CertificatesDisplay";
import { FinalCTA } from "@/components/home/FinalCTA";
import { WhyMorusu } from "@/components/home/WhyMorusu";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <AyurvedaIntro />
      <ProductCarousel />
      <AyurvedaComparison />
      
      {/* Kept existing footer sections for continuity */}
      {/* <AyushTrust /> */}
      {/* <ReviewsPreview /> */}
      <WhyMorusu/>
      <CertificatesDisplay />
      <FinalCTA />

      {/* Popups */}
    </div>
  );
}
