import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main flow matching source repo structure */}
      <main>
        {/* 1. Full-screen video hero */}
        <HeroSection />

        {/* 2. About — red bg, ID badge */}
        <AboutSection />

        {/* 3. Areas of Expertise — dark bg */}
        <ExpertiseSection />

        {/* 4. Experience & Education — scroll timeline cards */}
        <ExperienceSection />

        {/* 5. Skills — white bg, pill cards */}
        <SkillsSection />

        {/* 6. Works / Projects — dark bg */}
        <ProjectsSection />

        {/* 7. Contact — dark bg, giant text, red form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

