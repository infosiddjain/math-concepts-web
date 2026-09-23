import { Hero } from "@/components/home/Hero";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { CalculatorsShowcase } from "@/components/home/CalculatorsShowcase";
import { LearnShowcase } from "@/components/home/LearnShowcase";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <CalculatorsShowcase />
      <LearnShowcase />
      <CTASection />
    </>
  );
}
