import React, { useState, useEffect } from 'react';
import { Shield, Terminal, ArrowRight, Download, Radio, Lock, Activity, Award, ExternalLink } from 'lucide-react';
import { CyberGlobe3D } from './CyberGlobe3D';
import { personalInfo } from '../data/portfolioData';
import { cyberAudio } from '../utils/soundEffects';

export const Hero = ({ onDownloadResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [logIndex, setLogIndex] = useState(0);

  const roles = personalInfo.roles;
  const logs = personalInfo.heroTypingSequence;

  // Typing effect for rotating titles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && typedRole === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedRole === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setTypedRole(
        isDeleting
          ? currentRole.substring(0, typedRole.length - 1)
          : currentRole.substring(0, typedRole.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex, roles]);

  // Rotating log lines
  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [logs.length]);

  return (
    <section className="relative pt-24 sm:pt-28 pb-16 md:pb-24 overflow-hidden bg-cyber-grid">
      {/* Radial Background Glow Layers */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Intelligence Dossier & Callouts */}
          <div className="lg:col-span-7 space-y-6 z-10">
            {/* Live Security Clearance & Sequence Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyber-card/90 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan backdrop-blur-md shadow-cyber-cyan">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
              <span className="font-semibold text-slate-300">SECURITY CLEARANCE:</span>
              <span className="text-cyber-cyan">{personalInfo.securityClearance}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-sm sm:text-base tracking-widest uppercase">
                <span className="text-cyber-cyan">&gt;&gt;</span>
                <span>SYSTEM AGENT INTRO</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-none">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-teal-300 to-cyber-matrix">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Dynamic Typing Title */}
            <div className="h-12 flex items-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-cyber-cyan flex items-center gap-1">
                <span>{typedRole}</span>
                <span className="w-2.5 h-6 sm:h-8 bg-cyber-cyan animate-pulse inline-block" />
              </div>
            </div>

            {/* Animated Terminal Status Strip */}
            <div className="bg-cyber-dark/90 border border-cyber-border rounded-lg p-3 font-mono text-xs text-slate-300 flex items-center justify-between shadow-inner">
              <div className="flex items-center gap-2">
                <span className="text-cyber-matrix">$</span>
                <span className="text-cyber-cyan">{logs[logIndex]}</span>
              </div>
              <span className="text-[10px] text-cyber-matrix bg-cyber-matrix/10 px-2 py-0.5 rounded border border-cyber-matrix/20 animate-pulse">
                LIVE
              </span>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={() => cyberAudio.playCommandExecute()}
                className="px-5 py-3 rounded-lg bg-cyber-cyan hover:bg-cyan-400 text-cyber-darker font-mono font-bold text-xs sm:text-sm flex items-center gap-2 shadow-cyber-cyan-lg hover:shadow-cyber-cyan transition-all transform hover:-translate-y-0.5"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#terminal"
                onClick={() => cyberAudio.playCommandExecute()}
                className="px-5 py-3 rounded-lg bg-cyber-card hover:bg-cyber-card-hover border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan font-mono text-xs sm:text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-cyber-cyan"
              >
                <Terminal className="w-4 h-4" />
                <span>LAUNCH SOC TERMINAL</span>
              </a>

              <button
                onClick={() => {
                  cyberAudio.playAccessGranted();
                  if (onDownloadResume) onDownloadResume();
                }}
                className="px-4 py-3 rounded-lg bg-cyber-dark/80 hover:bg-cyber-purple/20 border border-cyber-purple/40 hover:border-cyber-purple text-cyber-purple font-mono text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>RESUME</span>
              </button>
            </div>

            {/* Micro Stats Telemetry */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-cyber-border/80">
              {personalInfo.stats.slice(0, 4).map((st) => (
                <div key={st.label} className="p-2.5 rounded-lg bg-cyber-dark/60 border border-cyber-border">
                  <div className="text-lg sm:text-xl font-mono font-bold text-white">
                    {st.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 truncate">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Holographic Core */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <CyberGlobe3D />
          </div>

        </div>
      </div>
    </section>
  );
};
