import HeroSection from "@/components/landing/HeroSection";
import FeatureSection from "@/components/landing/FeatureSection";
import PropertySpecs from "@/components/landing/PropertySpecs";
import ConceptsSection from "@/components/landing/ConceptsSection";
import CTASection from "@/components/landing/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <PropertySpecs />
      <ConceptsSection />
      <CTASection />
    </main>
  );
}
