import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TopRankersSection from "@/components/TopRankersSection";
import NewsSection from "@/components/NewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionCTA from "@/components/AdmissionCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <StatsSection />
      <AboutSection />
      
      <AchievementsSection />
      <TopRankersSection />
      {/* <TestimonialsSection /> */}
      <NewsSection />
      <AdmissionCTA />
      <Footer />
    </div>
  );
};

export default Index;
