import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeatureSection from "./components/FeatureSection";
import HighlightSection from "./components/HighlightSection";
import TrackingSection from "./components/TrackingSection";
import PricingSection from "./components/PricingSection";
import DownloadSection from "./components/DownloadSection";

const App = () => {
  return (
    <main className="text-base text-secondary antialiased">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <HighlightSection />
      <TrackingSection />
      <PricingSection />
      <DownloadSection />
    </main>
  );
};

export default App;
