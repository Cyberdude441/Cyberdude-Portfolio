import React from 'react';
import { Flame, Trophy, Target, Award, Shield, Flag, Terminal, ExternalLink, Zap } from 'lucide-react';
import { ctfBattlefield, personalInfo } from '../data/portfolioData';

export const CTFBattlefield = () => {
  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-cyber-matrix" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Target': return <Target className="w-5 h-5 text-cyber-purple" />;
      default: return <Award className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  return (
    <section id="ctf" className="py-20 bg-cyber-bg relative border-b border-cyber-border overflow-hidden">
      {/* Background Grids & Hex Accents */}
      <div className="absolute inset-0 bg-hex-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyber-matrix font-mono text-xs tracking-widest uppercase mb-2">
              <Flame className="w-4 h-4 text-cyber-matrix animate-bounce" />
              <span>// COMPETITIVE CYBER WARFARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Cyber Battlefield & CTF Ranks
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-sans mt-2 max-w-2xl">
              {ctfBattlefield.tagline}
            </p>
          </div>

          <a
            href={personalInfo.socials.tryhackme}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-matrix/10 border border-cyber-matrix/40 hover:border-cyber-matrix text-xs font-mono font-bold text-cyber-matrix hover:bg-cyber-matrix/20 transition-all shadow-cyber-matrix"
          >
            <Flag className="w-4 h-4" />
            <span>TRYHACKME PROFILE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Top 4 Battlefield Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ctfBattlefield.stats.map((st, i) => (
            <div
              key={i}
              className="bg-cyber-card border border-cyber-border rounded-xl p-6 relative overflow-hidden shadow-xl hover:border-cyber-cyan/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-cyber-dark border border-cyber-border group-hover:scale-110 transition-transform">
                  {getStatIcon(st.icon)}
                </div>
                <span className="text-[10px] font-mono text-cyber-matrix bg-cyber-matrix/10 px-2 py-0.5 rounded border border-cyber-matrix/20">
                  {st.change}
                </span>
              </div>
              <div className="text-3xl font-mono font-extrabold text-white tracking-tight mb-1">
                {st.value}
              </div>
              <div className="text-xs font-mono text-slate-400">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Categories Solved & Specialized Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Challenge Disciplines Breakdown */}
          <div className="lg:col-span-7 bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-cyber-border mb-6">
              <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyber-cyan" />
                EXPLOITATION DISCIPLINES BREAKDOWN
              </span>
              <span className="text-[10px] font-mono text-slate-400">180+ FLAGS</span>
            </div>

            <div className="space-y-5">
              {ctfBattlefield.categoriesSolved.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-200">{cat.name}</span>
                    <span className="text-cyber-cyan font-semibold">{cat.count}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-cyber-darker overflow-hidden border border-cyber-border">
                    <div
                      className="h-full bg-gradient-to-r from-cyber-cyan via-teal-400 to-cyber-matrix rounded-full shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                      style={{ width: `${cat.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specialized CTF Badges */}
          <div className="lg:col-span-5 bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-7 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-cyber-border mb-5">
                <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyber-purple" />
                  SPECIALIZED RECOGNITIONS
                </span>
                <span className="text-[10px] font-mono text-cyber-purple">VERIFIED</span>
              </div>

              <div className="space-y-3">
                {ctfBattlefield.badges.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-cyber-dark/80 border border-cyber-border hover:border-cyber-purple/40 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="font-mono text-xs font-bold text-white">{b.name}</div>
                      <div className="text-[11px] font-mono text-slate-400">{b.platform}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-cyber-purple/15 text-cyber-purple border border-cyber-purple/30 uppercase">
                      {b.tier}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-cyber-border text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>LEADERBOARD STATUS</span>
              <span className="text-cyber-matrix">GLOBAL TIER 1</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
