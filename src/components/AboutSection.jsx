import React from 'react';
import { GraduationCap, ShieldCheck, Search, Cpu, CheckCircle2, Award, BookOpen, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
            Background &amp; Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            About Soumava Das
          </h2>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic & Background Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-surface rounded-xl p-6 sm:p-7 space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2.5">
                  Engineering Foundations &amp; Research Focus
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I am a Computer Science &amp; Engineering undergraduate at <strong>KIIT University</strong> with a concentrated focus on offensive security research, digital forensics, and proactive defense systems.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mt-3">
                  My practical background spans <strong>four internships</strong> across law enforcement cyber defense (Amroha Police Cyber Security Internship Program), enterprise vulnerability assessment (Redynox), threat modeling (Pinnacle Lab), and SOC alert triage (The Red Users).
                </p>
              </div>

              {/* Research Areas */}
              <div className="pt-4 border-t border-surface-border">
                <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Search className="w-4 h-4 text-primary" />
                  Primary Research &amp; Engineering Domains
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#080B12] border border-surface-border">
                    <div className="font-semibold text-text-primary mb-1">Digital &amp; Mobile Forensics</div>
                    <div className="text-text-muted leading-snug">Evidence acquisition, Autopsy, FTK Imager, Cellebrite UFED, and ALEAPP memory triage.</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080B12] border border-surface-border">
                    <div className="font-semibold text-text-primary mb-1">Threat Intelligence &amp; SIEM</div>
                    <div className="text-text-muted leading-snug">MITRE ATT&amp;CK mapping, SIEM log correlation, YARA rule authoring, and IOC ingestion.</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080B12] border border-surface-border">
                    <div className="font-semibold text-text-primary mb-1">Vulnerability Assessment</div>
                    <div className="text-text-muted leading-snug">Web application security assessments against OWASP Top 10 using Burp Suite &amp; Metasploit.</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080B12] border border-surface-border">
                    <div className="font-semibold text-text-primary mb-1">Defensive Automation</div>
                    <div className="text-text-muted leading-snug">Authoring Python/Scapy socket monitors, rate limiters, and automated OSINT harvesters.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Verification Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <div className="card-surface rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-primary border-b border-surface-border pb-3">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Education &amp; Academic Record</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-semibold text-text-primary text-sm">
                    B.Tech in Computer Science &amp; Engineering
                  </div>
                  <div className="text-primary font-medium mt-0.5">
                    KIIT University, Bhubaneswar
                  </div>
                  <div className="text-text-muted mt-1 font-mono">
                    2024 &ndash; 2028 &bull; CGPA: 8.4 / 10.0
                  </div>
                </div>

                <div className="pt-3 border-t border-surface-border/60">
                  <div className="font-semibold text-text-primary">
                    Memari V.M. Institution, Unit-1
                  </div>
                  <div className="text-text-muted mt-1 font-mono">
                    Class XII: 93% &bull; Class X: 95.71%
                  </div>
                </div>
              </div>
            </div>

            {/* Current Technical Focus Card */}
            <div className="card-surface rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-primary border-b border-surface-border pb-3">
                <Cpu className="w-4 h-4 text-success" />
                <span>Current Technical Focus</span>
              </div>

              <ul className="space-y-2 text-xs text-text-secondary leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                  <span>Building containerized honeypot telemetry nodes with SIEM log ingestion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                  <span>Analyzing memory dumps and mobile forensics artifacts for threat attribution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                  <span>Competitive Capture The Flag (CTF) challenges on TryHackMe and picoCTF.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
