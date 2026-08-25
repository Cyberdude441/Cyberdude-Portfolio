import React from 'react';
import { Award, ShieldCheck, Trophy, ExternalLink, Key, Check } from 'lucide-react';
import { certifications, competitiveRankings } from '../data/portfolioData';

export const CertificationsSection = () => {
  return (
    <section id="achievements" className="py-20 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
            Credentials &amp; Standings
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            Competitive Rankings &amp; Certifications
          </h2>
          <p className="text-sm text-text-muted mt-1.5 max-w-xl">
            Verified international CTF leaderboards, national hackathon podiums, and professional industry certifications.
          </p>
        </div>

        {/* 1. Competitive CTF & Hackathons */}
        <div className="mb-12">
          <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            Competitive Cybersecurity &amp; Hackathon Leaderboards
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {competitiveRankings.map((cr, idx) => (
              <div
                key={idx}
                className="card-surface rounded-xl p-5 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-medium text-text-muted">{cr.title}</div>
                  <div className="text-xl font-bold font-mono text-text-primary mt-1">{cr.rank}</div>
                  <p className="text-xs text-text-secondary mt-1 leading-snug">{cr.detail}</p>
                </div>

                {cr.link && (
                  <a
                    href={cr.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline pt-2 border-t border-surface-border/50"
                  >
                    <span>Verify Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Professional Certifications */}
        <div>
          <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            Professional Industry Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="card-surface rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-slate-600 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-text-muted pb-2 border-b border-surface-border/60 mb-2.5">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>

                  <h4 className="text-sm font-semibold text-text-primary mb-1.5">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-surface-border/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-text-muted truncate">ID: {cert.credentialId}</span>
                  <span className="text-success">&bull; Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
