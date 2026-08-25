import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border py-12 bg-[#06080E] text-text-muted text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-semibold text-text-primary">
              {personalInfo.name}
            </div>
            <p className="text-xs text-text-muted">
              Cybersecurity Researcher &amp; Security Engineer &bull; KIIT University
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-text-secondary">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-primary transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-text-primary transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-surface hover:bg-surface-hover border border-surface-border text-text-muted hover:text-text-primary transition-colors ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-text-muted text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Soumava Das. All rights reserved.
          </div>
          <div>
            Designed with enterprise simplicity, performance, and accessibility.
          </div>
        </div>
      </div>
    </footer>
  );
};
