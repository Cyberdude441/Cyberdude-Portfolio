import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans antialiased selection:bg-primary selection:text-background flex flex-col">
      {/* Fixed Enterprise Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About & Profile Section */}
        <AboutSection />

        {/* 3. Professional Experience & Internships */}
        <ExperienceSection />

        {/* 4. Engineering Case Study Projects */}
        <ProjectsSection />

        {/* 5. Skills & Operational Tooling */}
        <SkillsSection />

        {/* 6. Competitive CTF Rankings & Industry Certifications */}
        <CertificationsSection />

        {/* 7. Contact & Outreach Section */}
        <ContactSection />
      </main>

      {/* Global Minimal Footer */}
      <Footer />
    </div>
  );
}
