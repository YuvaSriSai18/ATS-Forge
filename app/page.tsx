import CTASection from "./components/Home/CTASection";
import FeatureHighlights from "./components/Home/FeatureHighlights";
import Footer from "./components/Home/Footer";
import HeroSection from "./components/Home/HeroSection";
import WhyChooseUs from "./components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <div className="container mx-auto text-center">
        {/* <h1 className="text-3xl font-bold mb-4">Welcome to ATS Forge</h1>
        <p className="text-muted-foreground">Build resumes, use AI tools, and more.</p> */}
        <HeroSection />
        <FeatureHighlights />
        <WhyChooseUs />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
