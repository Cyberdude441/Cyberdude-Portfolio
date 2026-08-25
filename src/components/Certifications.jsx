import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle, ExternalLink, Key, Check } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { cyberAudio } from '../utils/soundEffects';

export const Certifications = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id) => {
    cyberAudio.playCommandExecute();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certs" className="py-20 bg-cyber-dark/40 relative border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>// ACCREDITATIONS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Professional Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const isCyan = cert.color === 'cyan';
            const isMatrix = cert.color === 'matrix';
            const borderAccent = isCyan 
              ? 'hover:border-cyber-cyan hover:shadow-cyber-cyan' 
              : isMatrix 
              ? 'hover:border-cyber-matrix hover:shadow-cyber-matrix' 
              : 'hover:border-cyber-purple hover:shadow-cyber-purple';
            
            const badgeBg = isCyan 
              ? 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/40' 
              : isMatrix 
              ? 'bg-cyber-matrix/15 text-cyber-matrix border-cyber-matrix/40' 
              : 'bg-cyber-purple/15 text-cyber-purple border-cyber-purple/40';

            return (
              <div
                key={cert.id}
                className={`bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${borderAccent} shadow-xl relative`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-cyber-border/70 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyber-dark border border-cyber-border text-cyber-cyan">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-slate-400">{cert.issuer}</div>
                        <div className="font-mono text-[10px] text-slate-500">ISSUED: {cert.year}</div>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${badgeBg}`}>
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Credential ID Verification */}
                <div className="pt-4 border-t border-cyber-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 bg-cyber-dark px-3 py-1.5 rounded border border-cyber-border/80 font-mono text-[11px] text-slate-300">
                    <Key className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span className="truncate">{cert.credentialId}</span>
                  </div>

                  <button
                    onClick={() => handleCopy(cert.credentialId)}
                    className="self-start sm:self-auto px-3 py-1.5 rounded bg-cyber-dark hover:bg-cyber-cyan/15 border border-cyber-border hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan text-xs font-mono transition-colors flex items-center gap-1.5"
                  >
                    {copiedId === cert.credentialId ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cyber-matrix" />
                        <span className="text-cyber-matrix">COPIED</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>VERIFY ID</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
