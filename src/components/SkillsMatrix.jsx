import React, { useState } from 'react';
import { Shield, Database, Terminal, Cpu, Cloud, Search, Sparkles, Filter } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    offensive: Shield,
    dfir: Database,
    'threat-intel': Terminal,
    programming: Cpu,
    cloud: Cloud,
  };

  const filteredCategories = skillCategories.map(cat => {
    if (activeCategory !== 'all' && cat.category !== activeCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSkills.length === 0) return null;
    return { ...cat, skills: filteredSkills };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-cyber-dark/40 relative border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
              <span>// ARSENAL & CORE COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Tactical Skills Matrix
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools (e.g. Burp, Volatility)..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-cyber-card border border-cyber-border focus:border-cyber-cyan focus:outline-none text-xs font-mono text-white placeholder:text-slate-500 shadow-inner"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar text-xs font-mono">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan shadow-cyber-cyan'
                : 'bg-cyber-card text-slate-400 hover:text-slate-200 border border-cyber-border'
            }`}
          >
            [ALL ARSENAL ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})]
          </button>
          {skillCategories.map((cat) => {
            const IconComp = categoryIcons[cat.category] || Shield;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeCategory === cat.category
                    ? 'bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan shadow-cyber-cyan'
                    : 'bg-cyber-card text-slate-400 hover:text-slate-200 border border-cyber-border'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat.name.split('&')[0].trim().toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const IconComp = categoryIcons[category.category] || Shield;
            const accentColor = category.color === 'matrix' ? 'text-cyber-matrix' : category.color === 'purple' ? 'text-cyber-purple' : 'text-cyber-cyan';
            const barFillColor = category.color === 'matrix' ? 'bg-cyber-matrix' : category.color === 'purple' ? 'bg-cyber-purple' : 'bg-cyber-cyan';
            const borderAccent = category.color === 'matrix' ? 'hover:border-cyber-matrix/50' : category.color === 'purple' ? 'hover:border-cyber-purple/50' : 'hover:border-cyber-cyan/50';

            return (
              <div
                key={category.name}
                className={`bg-cyber-card border border-cyber-border rounded-xl p-6 transition-all duration-300 ${borderAccent} shadow-xl`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-cyber-border mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyber-dark border border-cyber-border text-white">
                      <IconComp className={`w-5 h-5 ${accentColor}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        {category.name}
                      </h3>
                      <p className="font-mono text-[11px] text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5 group">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium group-hover:text-cyber-cyan transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-slate-400 bg-cyber-dark px-2 py-0.5 rounded border border-cyber-border">
                            {skill.tag}
                          </span>
                        </div>
                        <span className={`font-bold ${accentColor}`}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="w-full h-1.5 rounded-full bg-cyber-darker overflow-hidden border border-cyber-border/40">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ease-out ${barFillColor} shadow-[0_0_8px_currentColor]`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tactical Footer Note */}
        <div className="mt-8 p-4 rounded-xl bg-cyber-card/60 border border-cyber-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyber-cyan" />
            <span>Continuous tool refinement: custom YARA signatures, Scapy protocol dissection, and memory forensics scripts authored regularly.</span>
          </div>
          <span className="text-cyber-cyan whitespace-nowrap">STATUS: OPERATIONAL</span>
        </div>

      </div>
    </section>
  );
};
