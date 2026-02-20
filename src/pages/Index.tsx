import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import AchievementsSection from "@/components/AchievementsSection";
import NewsSection from "@/components/NewsSection";
import AdmissionCTA from "@/components/AdmissionCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <AboutSection />
      <StatsSection />
      <AchievementsSection />
      <NewsSection />
      <AdmissionCTA />
      <Footer />
    </div>
  );
};

export default Index;
