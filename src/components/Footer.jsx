import React from 'react';
import { Shield, Mail, Heart, ArrowUp, Terminal, Radio } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cyber-darker border-t border-cyber-border py-12 text-slate-400 font-mono text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-cyber-border/60">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-cyber-card border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-base tracking-wider">
                SOUMAVA DAS [CYBERDUDE441]
              </span>
            </div>
            <p className="text-slate-400 text-xs font-sans leading-relaxed max-w-sm">
              AI-Powered Security Operations Center interface and personal cybersecurity portfolio. Building proactive threat hunting and digital forensics automation.
            </p>
            <div className="flex items-center gap-2 text-cyber-matrix text-[11px]">
              <span className="w-2 h-2 rounded-full bg-cyber-matrix animate-ping" />
              <span>SOC TELEMETRY: ACTIVE & DEFENDING</span>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-white font-bold tracking-wider uppercase text-xs mb-3">
              // TELECOMMUNICATION CHANNELS
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub: Cyberdude441</span>
                </a>
              </li>
              <li>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyber-purple transition-colors flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn: soumava-das-267999332</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.socials.email}`} className="hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email: {personalInfo.socials.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Return & Coordinate */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan transition-all flex items-center gap-2 shadow-cyber-cyan"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="mt-4 text-[10px] text-slate-500 font-mono text-left md:text-right">
              LAT: 20.2961° N // LNG: 85.8245° E<br />
              KIIT UNIVERSITY • BHUBANESWAR
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} Soumava Das. All telemetry streams secured.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Built with React, Vite, Tailwind CSS, Three.js & Cyberpunk SOC Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
