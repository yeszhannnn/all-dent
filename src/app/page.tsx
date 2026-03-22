import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { AdvantagesSection } from "@/components/sections/advantages";
import { DirectionsSection } from "@/components/sections/directions";
import { PricePreview } from "@/components/sections/price-preview";
import { TreatmentSteps } from "@/components/sections/treatment-steps";
import { ReviewsPreview } from "@/components/sections/reviews-preview";
import { PromotionsSection } from "@/components/sections/promotions";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AdvantagesSection />
      <DirectionsSection />
      <PricePreview />
      <TreatmentSteps />
      <ReviewsPreview />
      <PromotionsSection />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
