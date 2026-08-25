import React, { useState } from 'react';
import { User, ShieldCheck, GraduationCap, Award, Binary, Cpu, Compass, CheckCircle2, ChevronRight, Database, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutDossier = () => {
  const [activeTab, setActiveTab] = useState('dossier');

  const highlights = [
    { label: "Academic Foundation", val: "B.Tech Computer Science & Engineering @ KIIT University", icon: GraduationCap },
    { label: "Operational Experience", val: "4 Cybersecurity & SOC Internships (APCSIP, Redynox, Pinnacle Labs, The Red Users)", icon: ShieldCheck },
    { label: "DFIR Competence", val: "Memory Dump Extraction, Disk Forensics & Windows Artifact Parsing", icon: Database },
    { label: "Threat Hunting", val: "Adversary TTP Mapping (MITRE ATT&CK), YARA Rules & IOC Triaging", icon: Binary },
    { label: "Security Automation", val: "Custom Python/Scapy IPS engines, honeypot telemetry & socket parsers", icon: Cpu },
    { label: "Competitive CTF", val: "TryHackMe Top 7% Global Ranking | picoCTF Global Rank #526", icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-cyber-bg relative border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>// DECLASSIFIED OPERATIVE DOSSIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            About Soumava Das
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tactical Profile Card */}
          <div className="lg:col-span-4 bg-cyber-card border border-cyber-border rounded-xl p-6 relative overflow-hidden shadow-2xl">
            {/* Top Clearance Header */}
            <div className="flex items-center justify-between pb-4 border-b border-cyber-border mb-5">
              <span className="font-mono text-xs text-cyber-cyan font-bold flex items-center gap-1.5">
                <User className="w-4 h-4" />
                OPERATIVE ID: #441
              </span>
              <span className="bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[10px] font-mono px-2 py-0.5 rounded font-semibold">
                VERIFIED
              </span>
            </div>

            {/* Profile Avatar / Tactical Emblem */}
            <div className="relative mx-auto w-36 h-36 rounded-2xl bg-cyber-dark border-2 border-cyber-cyan/40 p-2 mb-5 flex flex-col items-center justify-center text-center shadow-cyber-cyan">
              <div className="w-full h-full rounded-xl bg-gradient-to-b from-cyber-cyan/10 to-cyber-purple/20 flex flex-col items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-cyber-cyan mb-1 animate-pulse" />
                <span className="font-mono text-[10px] text-cyber-matrix">CLEARANCE L4</span>
              </div>
              <span className="absolute -bottom-2 bg-cyber-dark px-2 py-0.5 rounded border border-cyber-cyan/40 text-[9px] font-mono text-cyber-cyan">
                SOUMAVA DAS
              </span>
            </div>

            {/* Operative Specs */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1.5 border-b border-cyber-border/50">
                <span className="text-slate-400">ALIAS:</span>
                <span className="text-white font-semibold">Cyberdude441</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-cyber-border/50">
                <span className="text-slate-400">INSTITUTION:</span>
                <span className="text-cyber-cyan font-semibold">KIIT University</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-cyber-border/50">
                <span className="text-slate-400">DEGREE:</span>
                <span className="text-white">B.Tech (CSE)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-cyber-border/50">
                <span className="text-slate-400">SPECIALIZATION:</span>
                <span className="text-cyber-matrix">DFIR & Threat Intel</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">LOCATION:</span>
                <span className="text-white">India (IST / UTC+5:30)</span>
              </div>
            </div>

            {/* Terminal Quote */}
            <div className="mt-5 p-3 rounded-lg bg-cyber-darker border border-cyber-border font-mono text-[11px] text-slate-300">
              <span className="text-cyber-matrix">&gt;&gt;</span> "Proactive defense isn't just about building taller walls—it's about understanding adversary behavioral tradecraft."
            </div>
          </div>

          {/* Right Column: Interactive Dossier Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Dossier Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-cyber-border pb-3 font-mono text-xs">
              <button
                onClick={() => setActiveTab('dossier')}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  activeTab === 'dossier'
                    ? 'bg-cyber-cyan/15 border border-cyber-cyan text-cyber-cyan shadow-cyber-cyan'
                    : 'bg-cyber-card text-slate-400 hover:text-slate-200 border border-cyber-border'
                }`}
              >
                [01] BIOGRAPHICAL PROFILE
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  activeTab === 'philosophy'
                    ? 'bg-cyber-matrix/15 border border-cyber-matrix text-cyber-matrix shadow-cyber-matrix'
                    : 'bg-cyber-card text-slate-400 hover:text-slate-200 border border-cyber-border'
                }`}
              >
                [02] SECURITY PHILOSOPHY
              </button>
              <button
                onClick={() => setActiveTab('focus')}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  activeTab === 'focus'
                    ? 'bg-cyber-purple/15 border border-cyber-purple text-cyber-purple shadow-cyber-purple'
                    : 'bg-cyber-card text-slate-400 hover:text-slate-200 border border-cyber-border'
                }`}
              >
                [03] CORE OPERATIONAL PILLARS
              </button>
            </div>

            {/* Tab 1: Biographical Profile */}
            {activeTab === 'dossier' && (
              <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 space-y-6 shadow-xl">
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold text-white">
                    Pioneering Proactive Cyber Defense & Incident Response
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    I am a Computer Science & Engineering undergraduate at <strong>KIIT University</strong> with a rigorous focus on Cybersecurity Research, Digital Forensics & Incident Response (DFIR), and Offensive Security.
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    Through intensive industry internships across four security organizations—<strong>APCSIP</strong> (Cyber Security Intern), <strong>Redynox</strong> (VAPT Analyst), <strong>Pinnacle Labs</strong> (Forensics Intern), and <strong>The Red Users</strong> (SOC Tier-1 Analyst)—I have developed deep hands-on expertise in analyzing live intrusions, reverse-engineering malware artifacts, automating SIEM alert correlation, and assessing enterprise vulnerability surfaces.
                  </p>
                </div>

                {/* Key Highlight Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {highlights.map((h, i) => {
                    const IconComp = h.icon;
                    return (
                      <div key={i} className="p-3.5 rounded-lg bg-cyber-dark/70 border border-cyber-border hover:border-cyber-cyan/40 transition-colors flex items-start gap-3">
                        <div className="p-2 rounded bg-cyber-card border border-cyber-cyan/20 text-cyber-cyan shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-mono text-xs font-semibold text-white">{h.label}</div>
                          <div className="text-xs text-slate-400 leading-snug mt-0.5">{h.val}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 2: Security Philosophy */}
            {activeTab === 'philosophy' && (
              <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 space-y-5 shadow-xl">
                <h3 className="text-xl font-display font-bold text-white">
                  The Adversary-Centric Defense Mindset
                </h3>
                <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed">
                  <div className="p-4 rounded-lg bg-cyber-dark border border-cyber-matrix/30">
                    <h4 className="font-mono font-bold text-cyber-matrix mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      1. Assume Breach & Zero Trust Architecture
                    </h4>
                    <p className="text-xs text-slate-300">
                      Perimeters are fluid. Proactive cybersecurity operates on the assumption that adversaries may already be inside the boundary. Resiliency requires micro-segmentation, continuous telemetry, and automated containment runbooks.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-cyber-dark border border-cyber-cyan/30">
                    <h4 className="font-mono font-bold text-cyber-cyan mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      2. Offense Informs Defense (Purple Teaming)
                    </h4>
                    <p className="text-xs text-slate-300">
                      You cannot effectively defend what you cannot exploit. By mastering penetration testing, web app exploitation (OWASP Top 10), and privilege escalation vectors, defensive playbooks become far more resilient.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-cyber-dark border border-cyber-purple/30">
                    <h4 className="font-mono font-bold text-cyber-purple mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      3. Uncompromising Forensic Integrity
                    </h4>
                    <p className="text-xs text-slate-300">
                      In the wake of an incident, evidence preservation and deterministic chain of custody (hashing, memory volatility preservation, and timeline correlation) form the bedrock of root-cause resolution.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Operational Pillars */}
            {activeTab === 'focus' && (
              <div className="bg-cyber-card border border-cyber-border rounded-xl p-6 space-y-4 shadow-xl">
                <h3 className="text-xl font-display font-bold text-white">
                  Core Tactical Pillars
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-lg bg-cyber-dark border border-cyber-border">
                    <div className="text-cyber-cyan font-bold text-sm mb-2">01 // THREAT INTEL</div>
                    <ul className="space-y-1.5 text-slate-400">
                      <li>• MITRE ATT&CK Mapping</li>
                      <li>• MISP Threat Exchanges</li>
                      <li>• IOC Aggregation & Triaging</li>
                      <li>• Dark Web Exposure Audits</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-cyber-dark border border-cyber-border">
                    <div className="text-cyber-matrix font-bold text-sm mb-2">02 // DFIR & INVESTIGATION</div>
                    <ul className="space-y-1.5 text-slate-400">
                      <li>• Volatility 3 Memory Dumps</li>
                      <li>• Autopsy & FTK Disk Forensics</li>
                      <li>• Event Log (EVTX) Timeline</li>
                      <li>• Rootkit & Payload Extraction</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-cyber-dark border border-cyber-border">
                    <div className="text-cyber-purple font-bold text-sm mb-2">03 // SEC AUTOMATION</div>
                    <ul className="space-y-1.5 text-slate-400">
                      <li>• Scapy Packet Analyzers</li>
                      <li>• Automated Honeypots</li>
                      <li>• Redis IP Blacklisting</li>
                      <li>• Flask SOC Microservices</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
