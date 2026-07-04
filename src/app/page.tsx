import { HeroSection } from "@/components/sections/hero-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ResultsSection } from "@/components/sections/results-section";
import { WhyGrowZeroSection } from "@/components/sections/why-growzero-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandStorySection />
      <TrustedBySection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ResultsSection />
      <WhyGrowZeroSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
