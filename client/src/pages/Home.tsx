/**
 * Home Page - Usama Mohamed Portfolio
 * Gulf Elegance Design: Dark luxury with teal/gold accents
 * Focused on Saudi & GCC markets
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SummerFunProject from "@/components/SummerFunProject";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="project">
        <SummerFunProject />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <Footer />
    </div>
  );
}
