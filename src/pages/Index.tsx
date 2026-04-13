import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DemoSection from "@/components/landing/DemoSection";
import GallerySection from "@/components/landing/GallerySection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <FeaturesSection />
    <DemoSection />
    <GallerySection />
    <ComparisonSection />
    <PricingSection />
    <CTASection />
    <Footer />
  </>
);

export default Index;
