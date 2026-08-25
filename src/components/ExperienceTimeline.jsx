import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Shield } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export const ExperienceTimeline = () => {
  return (
    <section id="timeline" className="py-20 bg-cyber-dark/40 relative border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>// CHRONOLOGICAL ENGAGEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Industry Experience & Internships
          </h2>
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyber-border space-y-12">
          {experienceTimeline.map((item, idx) => {
            const isCyan = item.color === 'cyan';
            const isMatrix = item.color === 'matrix';
            const markerColor = isCyan ? 'bg-cyber-cyan shadow-cyber-cyan' : isMatrix ? 'bg-cyber-matrix shadow-cyber-matrix' : 'bg-cyber-purple shadow-cyber-purple';
            const badgeBg = isCyan ? 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/40' : isMatrix ? 'bg-cyber-matrix/15 text-cyber-matrix border-cyber-matrix/40' : 'bg-cyber-purple/15 text-cyber-purple border-cyber-purple/40';

            return (
              <div key={idx} className="relative group">
                {/* Timeline Pulsing Node */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full ${markerColor} border-4 border-cyber-bg transition-transform group-hover:scale-125`} />

                {/* Main Card Container */}
                <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-7 hover:border-cyber-cyan/40 hover:bg-cyber-card-hover transition-all shadow-xl space-y-4">
                  
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cyber-border/70">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                          {item.role}
                        </h3>
                        <span className="font-mono text-xs font-semibold text-cyber-cyan">
                          @ {item.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <span className={`self-start sm:self-auto px-3 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider border ${badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {/* Accomplishments */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider">
                      KEY DEFENSE CONTRIBUTIONS:
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {item.accomplishments.map((acc, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyber-matrix shrink-0 mt-0.5" />
                          <span>{acc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-3 border-t border-cyber-border/60 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-slate-500 mr-1">TECH:</span>
                    {item.skillsUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-cyber-dark text-[11px] font-mono text-slate-300 border border-cyber-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
