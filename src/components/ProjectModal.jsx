import React from 'react';
import { X, ExternalLink, ShieldCheck, Cpu, Terminal, CheckCircle2, Star, GitFork } from 'lucide-react';
import { Github } from './BrandIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-bg/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-cyber-card border border-cyber-cyan/50 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Glowing cyber accents */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-matrix" />
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-cyber-border mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                // {project.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-cyber-dark text-slate-400 hover:text-white hover:bg-cyber-dark/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="space-y-6 overflow-y-auto pr-2 no-scrollbar">
          {/* Deep Architectural Breakdown */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              SYSTEM ARCHITECTURE & CAPABILITIES
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Highlights & Security Invariants */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-matrix uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              KEY TECHNICAL INVARIANTS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((hl, i) => (
                <div key={i} className="p-3 rounded-lg bg-cyber-dark/80 border border-cyber-border/70 flex items-start gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyber-matrix shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyber-purple uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              ENGINEERING STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-cyber-dark text-slate-300 border border-cyber-border font-mono text-xs hover:border-cyber-cyan/40 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="pt-6 mt-6 border-t border-cyber-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400" />
              {project.stars} Stars
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-3.5 h-3.5 text-slate-400" />
              {project.forks} Forks
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-cyber-dark hover:bg-cyber-dark/80 border border-cyber-border hover:border-cyber-cyan text-white text-xs font-mono font-medium flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE CODE</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-cyber-cyan hover:bg-cyan-400 text-cyber-darker text-xs font-mono font-bold flex items-center gap-2 shadow-cyber-cyan transition-all"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
