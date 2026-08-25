import React, { useState } from 'react';
import { ExternalLink, ShieldAlert, Cpu, Terminal, ArrowUpRight, FolderGit2, Info } from 'lucide-react';
import { Github } from './BrandIcons';
import { projects } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { cyberAudio } from '../utils/soundEffects';

export const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (p) => {
    cyberAudio.playCommandExecute();
    setSelectedProject(p);
  };

  return (
    <section id="projects" className="py-20 bg-cyber-bg relative border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
              <span>// REPOSITORIES & SECURITY TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Featured Security Projects
            </h2>
          </div>

          <a
            href="https://github.com/Cyberdude441"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-xs font-mono text-slate-300 hover:text-white transition-all shadow-cyber-cyan"
          >
            <FolderGit2 className="w-4 h-4 text-cyber-cyan" />
            <span>EXPLORE GITHUB [@Cyberdude441]</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const accentBorder = project.color === 'matrix' 
              ? 'group-hover:border-cyber-matrix group-hover:shadow-cyber-matrix' 
              : project.color === 'purple' 
              ? 'group-hover:border-cyber-purple group-hover:shadow-cyber-purple' 
              : 'group-hover:border-cyber-cyan group-hover:shadow-cyber-cyan';

            const badgeBg = project.color === 'matrix'
              ? 'bg-cyber-matrix/10 text-cyber-matrix border-cyber-matrix/30'
              : project.color === 'purple'
              ? 'bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30'
              : 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30';

            return (
              <div
                key={project.id}
                className={`group bg-cyber-card border border-cyber-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${accentBorder} relative overflow-hidden`}
              >
                {/* Glowing Background Radial */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyber-cyan/15 transition-all" />

                <div>
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-cyber-border/70 mb-5">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${badgeBg}`}>
                      {project.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      0{idx + 1} // {project.category}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet Tags */}
                  <div className="space-y-2 mb-6 font-mono text-xs">
                    {project.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-400">
                        <span className="text-cyber-matrix">✔</span>
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges & Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-cyber-dark text-[11px] font-mono text-slate-300 border border-cyber-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded bg-cyber-dark text-[11px] font-mono text-slate-500 border border-cyber-border/40">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-cyber-border/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="text-xs font-mono text-cyber-cyan hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      <span>DEEP DIVE</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-cyber-dark hover:bg-cyber-dark/80 border border-cyber-border hover:border-cyber-cyan text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1"
                        title="GitHub Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-lg bg-cyber-cyan/15 hover:bg-cyber-cyan text-cyber-cyan hover:text-cyber-darker border border-cyber-cyan/40 hover:border-cyber-cyan transition-all text-xs font-mono font-bold flex items-center gap-1.5 shadow-cyber-cyan"
                      >
                        <span>LIVE</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
