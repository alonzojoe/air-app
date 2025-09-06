import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <main className="text-base text-secondary antialiased">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
    </main>
  );
};

export default App;
