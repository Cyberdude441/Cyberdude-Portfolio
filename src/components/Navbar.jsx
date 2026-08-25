import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#080B12]/90 backdrop-blur-md border-b border-surface-border shadow-subtle' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-surface border border-surface-border flex items-center justify-center text-xs font-mono font-bold text-primary group-hover:border-primary/50 transition-colors">
            SD
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-semibold text-sm text-text-primary tracking-tight group-hover:text-primary transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-text-muted hidden sm:inline">
              Cybersecurity Researcher
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href="/Soumava_Das_Resume.pdf"
            download="Soumava_Das_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-surface hover:bg-surface-hover border border-surface-border hover:border-slate-600 text-text-primary text-xs font-medium transition-all"
          >
            <Download className="w-3.5 h-3.5 text-primary" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-primary hover:bg-primary-hover text-background text-xs font-semibold transition-all shadow-sm"
          >
            <span>Get in Touch</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md bg-surface border border-surface-border text-text-secondary hover:text-text-primary"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B101D] border-b border-surface-border px-6 py-5 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md bg-surface text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-surface-border/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-surface-border flex items-center justify-between">
            <a
              href="/Soumava_Das_Resume.pdf"
              download="Soumava_Das_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
