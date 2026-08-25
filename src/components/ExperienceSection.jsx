import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Shield } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
            Career History
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            Professional Experience &amp; Internships
          </h2>
          <p className="text-sm text-text-muted mt-1.5 max-w-xl">
            Hands-on cybersecurity roles focused on forensics investigation, penetration testing, threat modeling, and SOC triage.
          </p>
        </div>

        {/* Clean LinkedIn-Style Timeline */}
        <div className="space-y-6">
          {experienceTimeline.map((exp, idx) => (
            <div
              key={idx}
              className="card-surface rounded-xl p-6 sm:p-7 space-y-4 hover:border-slate-600 transition-all shadow-subtle"
            >
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-surface-border/70">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-primary font-medium px-2 py-0.5 rounded bg-primary-muted border border-primary/20">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-text-muted mt-1.5">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <span className="self-start text-[11px] font-medium text-text-secondary bg-[#080B12] px-2.5 py-1 rounded border border-surface-border">
                  {exp.type}
                </span>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {exp.summary}
              </p>

              {/* Contributions */}
              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Key Technical Contributions:
                </div>
                <ul className="space-y-1.5">
                  {exp.contributions.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-1" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-surface-border/60 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-text-muted mr-1 font-mono">Skills:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-[#080B12] text-[11px] font-mono text-text-muted border border-surface-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
