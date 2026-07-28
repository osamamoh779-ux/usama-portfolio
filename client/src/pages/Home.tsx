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
import ProjectsGallery from "@/components/ProjectsGallery";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      <div id="projects">
        <ProjectsGallery />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
