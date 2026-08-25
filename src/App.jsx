import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Terminal } from './components/Terminal';
import { SecurityDashboard } from './components/SecurityDashboard';
import { AboutDossier } from './components/AboutDossier';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CTFBattlefield } from './components/CTFBattlefield';
import { Certifications } from './components/Certifications';
import { EncryptedContact } from './components/EncryptedContact';
import { Footer } from './components/Footer';
import { EasterEggTerminal } from './components/EasterEggTerminal';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';
import { MatrixRain } from './components/MatrixRain';
import { cyberAudio } from './utils/soundEffects';

export default function App() {
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Global Keyboard Listener for Easter Egg: CTRL + SHIFT + S
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        setIsEasterEggOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text font-sans selection:bg-cyber-cyan selection:text-cyber-darker relative overflow-x-hidden">
      {/* Custom Cyber Cursor */}
      <CustomCursor />

      {/* Subtle Background Ambient Matrix Streams */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <MatrixRain opacity={0.035} fontSize={14} color="#00f0ff" />
      </div>

      {/* Top HUD Navbar */}
      <Navbar onOpenEasterEgg={() => setIsEasterEggOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* 1. Cinematic Hero Section with 3D Cyber Core */}
        <Hero onDownloadResume={() => setIsResumeOpen(true)} />

        {/* 2. Interactive SOC Live Terminal Section */}
        <section id="terminal" className="py-20 bg-cyber-dark/60 relative border-t border-b border-cyber-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-2">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                <span>INTERACTIVE SOC CLI</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                Live Security Terminal
              </h2>
              <p className="text-slate-400 font-mono text-xs sm:text-sm mt-2">
                Execute live SOC shell commands or query operational intel directly from the terminal console below.
              </p>
            </div>

            <Terminal onTriggerMatrix={() => setIsEasterEggOpen(true)} />
          </div>
        </section>

        {/* 3. Real-Time SOC Security Operations Dashboard */}
        <SecurityDashboard />

        {/* 4. Declassified Operative Dossier (About) */}
        <AboutDossier />

        {/* 5. Tactical Skills Matrix */}
        <SkillsMatrix />

        {/* 6. Featured Security Projects Showcase */}
        <ProjectsShowcase />

        {/* 7. Industry Experience Timeline */}
        <ExperienceTimeline />

        {/* 8. Cyber Battlefield & CTF Rankings */}
        <CTFBattlefield />

        {/* 9. Professional Certifications */}
        <Certifications />

        {/* 10. Encrypted Direct Communications */}
        <EncryptedContact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Easter Egg Terminal Modal (CTRL + SHIFT + S) */}
      <EasterEggTerminal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
