import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
const App = () => {
  return (
    <main className="text-base text-secondary antialiased">
      <Navbar />
      <HeroSection />
      <StatsSection />
    </main>
  );
};

export default App;
