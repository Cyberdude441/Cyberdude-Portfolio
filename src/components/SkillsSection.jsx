import React from 'react';
import { Shield, Database, Terminal, Search, Cpu, Cloud, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection = () => {
  const getCategoryIcon = (idx) => {
    switch (idx) {
      case 0: return Shield;
      case 1: return Database;
      case 2: return Terminal;
      case 3: return Search;
      case 4: return Cpu;
      default: return Cloud;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
            Technical Proficiencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            Skills &amp; Operational Tooling
          </h2>
          <p className="text-sm text-text-muted mt-1.5 max-w-xl">
            Hands-on technical competencies categorized by security disciplines and software engineering domains.
          </p>
        </div>

        {/* Structured 6-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => {
            const IconComp = getCategoryIcon(idx);
            return (
              <div
                key={category.title}
                className="card-surface rounded-xl p-5 space-y-4 hover:border-slate-600 transition-all shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3 border-b border-surface-border/70 mb-3">
                    <div className="p-2 rounded-md bg-[#080B12] text-primary border border-surface-border">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      {category.title}
                    </h3>
                  </div>

                  {/* Badges Grid */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded bg-[#080B12] text-xs text-text-secondary border border-surface-border font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-text-muted pt-2 border-t border-surface-border/50 flex items-center justify-between">
                  <span>{category.skills.length} Tools / Competencies</span>
                  <span className="text-success">&bull; Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
