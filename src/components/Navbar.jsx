import React, { useState, useEffect } from 'react';
import { Shield, Volume2, VolumeX, Terminal, Menu, X, Cpu, Radio, Sparkles } from 'lucide-react';
import { cyberAudio } from '../utils/soundEffects';

export const Navbar = ({ onOpenEasterEgg }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toTimeString().split(' ')[0] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const state = cyberAudio.toggleSound();
    setSoundEnabled(state);
  };

  const navLinks = [
    { label: '// DASHBOARD', href: '#dashboard' },
    { label: '// TERMINAL', href: '#terminal' },
    { label: '// ABOUT', href: '#about' },
    { label: '// SKILLS', href: '#skills' },
    { label: '// PROJECTS', href: '#projects' },
    { label: '// TIMELINE', href: '#timeline' },
    { label: '// CTF', href: '#ctf' },
    { label: '// COMMS', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cyber-bg/85 backdrop-blur-xl border-b border-cyber-border/80 transition-all">
      {/* Top Telemetry Ticker Strip */}
      <div className="hidden md:flex items-center justify-between px-6 py-1 bg-cyber-darker/90 border-b border-cyber-border/40 text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-cyber-matrix">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-matrix animate-ping" />
            <span>DEFCON: 5 [SECURE]</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">FIREWALL: ENFORCING</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyber-cyan">ENCRYPT: TLS_1.3_AES_GCM</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400">SYS_TIME: {timeString}</span>
          <span className="text-slate-600">|</span>
          <button
            onClick={onOpenEasterEgg}
            className="text-cyber-purple hover:text-cyber-cyan flex items-center gap-1 transition-colors"
            title="Press Ctrl+Shift+S or Click to trigger breach simulation"
          >
            <Sparkles className="w-3 h-3" />
            <span>EASTER EGG [CTRL+SHIFT+S]</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-cyan/40 flex items-center justify-center group-hover:border-cyber-cyan group-hover:shadow-cyber-cyan transition-all">
            <Shield className="w-5 h-5 text-cyber-cyan group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-base tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                SOUMAVA DAS
              </span>
              <span className="text-[10px] font-mono text-cyber-cyan bg-cyber-cyan/10 px-1.5 py-0.5 rounded border border-cyber-cyan/20">
                SOC-441
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-400 tracking-tight">
              CYBERSECURITY RESEARCHER
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-slate-300 hover:text-cyber-cyan transition-colors tracking-wider hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-lg border transition-all text-xs font-mono flex items-center gap-1.5 ${
              soundEnabled
                ? 'bg-cyber-cyan/15 border-cyber-cyan text-cyber-cyan shadow-cyber-cyan'
                : 'bg-cyber-card border-cyber-border text-slate-400 hover:text-slate-200'
            }`}
            title={soundEnabled ? "Mute Cyber Synthesizer" : "Enable Cyber SFX Audio"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline text-[11px]">{soundEnabled ? 'SFX ON' : 'SFX OFF'}</span>
          </button>

          {/* Quick Resume CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyber-cyan/10 hover:bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 hover:border-cyber-cyan text-xs font-mono font-medium transition-all shadow-cyber-cyan"
          >
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>CONNECT</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-cyber-card border border-cyber-border text-slate-300 hover:text-cyber-cyan"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cyber-card/95 backdrop-blur-2xl border-b border-cyber-border px-6 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded bg-cyber-dark/80 text-xs font-mono text-slate-300 hover:text-cyber-cyan hover:bg-cyber-cyan/10 border border-cyber-border transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-cyber-border text-xs font-mono">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEasterEgg) onOpenEasterEgg();
              }}
              className="text-cyber-purple hover:text-cyber-cyan flex items-center gap-1.5 py-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>TERMINAL BREACH MODE</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
