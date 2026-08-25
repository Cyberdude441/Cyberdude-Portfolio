import React from 'react';
import { ExternalLink, ArrowUpRight, ShieldCheck, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { Github } from './BrandIcons';
import { caseStudyProjects } from '../data/portfolioData';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
              Engineering Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
              Featured Security Projects
            </h2>
            <p className="text-sm text-text-muted mt-1.5 max-w-xl">
              Production-grade security tools, honeypot telemetry platforms, and active defense mechanisms with measurable outcomes.
            </p>
          </div>

          <a
            href="https://github.com/Cyberdude441"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors self-start md:self-auto"
          >
            <span>View All on GitHub (@Cyberdude441)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudyProjects.map((project, idx) => (
            <div
              key={project.id}
              className="card-surface rounded-xl p-6 sm:p-8 space-y-6 hover:border-slate-600 transition-all shadow-subtle"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-surface-border/70">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-mono text-text-muted font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-primary bg-primary-muted px-2.5 py-0.5 rounded border border-primary/20">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed max-w-3xl">
                    {project.overview}
                  </p>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-md bg-[#080B12] hover:bg-surface-hover border border-surface-border hover:border-slate-600 text-text-secondary hover:text-text-primary transition-all text-xs font-mono flex items-center gap-1.5"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-md bg-surface hover:bg-surface-hover border border-surface-border hover:border-primary/50 text-text-primary hover:text-primary transition-all text-xs font-mono font-medium flex items-center gap-1.5"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Case Study Grid: Problem, Solution, Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-[#080B12] border border-surface-border space-y-1.5">
                  <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                    The Problem
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#080B12] border border-surface-border space-y-1.5">
                  <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                    Technical Solution
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#080B12] border border-surface-border space-y-1.5">
                  <div className="text-[11px] font-semibold text-success uppercase tracking-wider">
                    Measurable Impact
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Architecture Invariants & Technologies */}
              <div className="pt-2 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#080B12] text-[11px] font-mono text-text-muted border border-surface-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="text-[11px] font-mono text-text-muted">
                  Domain: <span className="text-text-secondary">{project.domain}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
