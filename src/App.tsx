import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeatureSection from "./components/FeatureSection";
import HighlightSection from "./components/HighlightSection";
import TrackingSection from "./components/TrackingSection";
import PricingSection from "./components/PricingSection";
import DownloadSection from "./components/DownloadSection";
import TestimonialSection from "./components/TestimonialSeciton";
import NewsSection from "./components/NewsSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <main className="text-base text-secondary antialiased scroll-smooth">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <HighlightSection />
      <TrackingSection />
      <PricingSection />
      <TestimonialSection />
      <DownloadSection />
      <NewsSection />
      <FooterSection />
    </main>
  );
};

export default App;
