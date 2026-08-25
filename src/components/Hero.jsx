import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Shield, CheckCircle2, Terminal, Activity, FileText, ChevronRight, Lock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('telemetry');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-surface-border bg-subtle-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-medium text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>Available for Cybersecurity Roles &amp; Research</span>
            </div>

            {/* Name & Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
                {personalInfo.name}
              </h1>
              
              <div className="text-lg sm:text-xl font-medium text-primary">
                Cybersecurity Researcher &amp; Security Engineer
              </div>

              <div className="text-sm font-medium text-text-muted">
                Digital Forensics &bull; Threat Intelligence &bull; Penetration Testing
              </div>
            </div>

            {/* Core Value Statement */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>

            <p className="text-sm text-text-muted leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-md bg-primary hover:bg-primary-hover text-background font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Soumava_Das_Resume.pdf"
                download="Soumava_Das_Resume.pdf"
                className="px-5 py-2.5 rounded-md bg-surface hover:bg-surface-hover border border-surface-border text-text-primary font-medium text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-text-secondary" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface text-xs sm:text-sm font-medium transition-all"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Verified Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-surface-border/60">
              {personalInfo.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-surface/60 border border-surface-border">
                  <div className="text-base font-semibold text-text-primary font-mono">{m.value}</div>
                  <div className="text-[11px] text-text-muted mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Clean Enterprise Security Dashboard Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-surface border border-surface-border shadow-card overflow-hidden">
              
              {/* Window Titlebar */}
              <div className="bg-[#0B101D] px-4 py-3 border-b border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="text-xs font-mono text-text-muted ml-2">sec-ops.local // research-node</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-success bg-success-muted px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  ONLINE
                </span>
              </div>

              {/* Card Tabs */}
              <div className="flex border-b border-surface-border text-xs font-medium text-text-muted bg-[#0B101D]/50">
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-4 py-2.5 border-b-2 transition-colors ${
                    activeTab === 'telemetry'
                      ? 'border-primary text-text-primary bg-surface'
                      : 'border-transparent hover:text-text-secondary'
                  }`}
                >
                  Active Telemetry
                </button>
                <button
                  onClick={() => setActiveTab('investigation')}
                  className={`px-4 py-2.5 border-b-2 transition-colors ${
                    activeTab === 'investigation'
                      ? 'border-primary text-text-primary bg-surface'
                      : 'border-transparent hover:text-text-secondary'
                  }`}
                >
                  DFIR Pipeline
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                {activeTab === 'telemetry' ? (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-md bg-[#080B12] border border-surface-border">
                        <div className="text-[11px] text-text-muted">Brute-Force IPS Mitigation</div>
                        <div className="text-xl font-bold font-mono text-success mt-1">94.0%</div>
                        <div className="text-[10px] text-text-muted mt-0.5">Adaptive socket throttling</div>
                      </div>

                      <div className="p-3 rounded-md bg-[#080B12] border border-surface-border">
                        <div className="text-[11px] text-text-muted">IOC Telemetry Mapped</div>
                        <div className="text-xl font-bold font-mono text-primary mt-1">14,200+</div>
                        <div className="text-[10px] text-text-muted mt-0.5">MITRE ATT&amp;CK taxonomy</div>
                      </div>
                    </div>

                    {/* Operational Status Checklist */}
                    <div className="space-y-2 pt-2 border-t border-surface-border/60 text-xs">
                      <div className="flex items-center justify-between text-text-secondary">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                          <span>SIEM Log Forwarding</span>
                        </span>
                        <span className="font-mono text-text-muted text-[11px]">Synced (ELK)</span>
                      </div>

                      <div className="flex items-center justify-between text-text-secondary">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                          <span>OWASP Vulnerability Matrix</span>
                        </span>
                        <span className="font-mono text-text-muted text-[11px]">Remediated</span>
                      </div>

                      <div className="flex items-center justify-between text-text-secondary">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                          <span>OSINT Recon Pipelines</span>
                        </span>
                        <span className="font-mono text-text-muted text-[11px]">Shodan / DNS OK</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-md bg-[#080B12] border border-surface-border space-y-1.5">
                      <div className="text-text-muted text-[11px]">FORENSIC ARTIFACT PIPELINE</div>
                      <div className="text-primary font-semibold">&gt; Autopsy &amp; FTK Imager: Verified</div>
                      <div className="text-text-secondary">&gt; Mobile Forensics: Cellebrite / ALEAPP</div>
                      <div className="text-success">&gt; Evidence Integrity: SHA-256 Hash Chain</div>
                    </div>
                    <div className="text-[11px] text-text-muted leading-relaxed font-sans">
                      Standard operating procedures mapped directly to law enforcement &amp; enterprise incident response standards.
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="bg-[#0B101D] px-4 py-2.5 border-t border-surface-border text-[11px] text-text-muted flex items-center justify-between font-mono">
                <span>SOC Node: APCSIP / KIIT</span>
                <span className="text-primary">TLS 1.3 Verified</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
