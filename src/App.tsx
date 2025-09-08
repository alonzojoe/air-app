import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeatureSection from "./components/FeatureSection";
import HighlightSection from "./components/HighlightSection";
import TrackingSection from "./components/TrackingSection";

const App = () => {
  return (
    <main className="text-base text-secondary antialiased">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <HighlightSection />
      <TrackingSection />
    </main>
  );
};

export default App;
