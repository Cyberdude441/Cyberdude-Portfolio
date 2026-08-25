import React, { useState } from 'react';
import { X, Download, Printer, FileText, Check, Copy, Sparkles, Eye, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { cyberAudio } from '../utils/soundEffects';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [themeMode, setThemeMode] = useState('clean'); // 'clean' (white A4 document) | 'cyber' (dark SOC HUD)
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    cyberAudio.playCommandExecute();
    window.print();
  };

  const handleCopyRawText = () => {
    cyberAudio.playCommandExecute();
    const rawText = `SOUMAVA DAS
Cybersecurity | Digital Forensics | Threat Intelligence | Penetration Testing

Contact:
+91 7001515109 | soumavadas2005@gmail.com | Bhubaneswar, Odisha, India
GitHub: github.com/Cyberdude441

PROFESSIONAL SUMMARY
Cybersecurity undergraduate with hands-on experience in penetration testing, vulnerability assessment, digital forensics, and threat intelligence across four internships. Skilled in SIEM monitoring, OSINT reconnaissance, MITRE ATT&CK mapping, and incident response. Active CTF competitor (TryHackMe Top 7%, picoCTF Global Rank 526).

EDUCATION
B.Tech in Computer Science & Engineering, KIIT University (2024 - 2028)
CGPA: 8.4
Class XII & Class X, Memari V.M. Institution, Unit-1
Class XII: 93% | Class X: 95.71%

PROFESSIONAL EXPERIENCE
Cyber Security Intern — Amroha Police Cyber Security Internship Program (APCSIP-2026)
- Performed digital and mobile forensics using Autopsy, FTK, and Cellebrite UFED; mapped findings to MITRE ATT&CK framework.
- Conducted OSINT reconnaissance using Shodan, Google Dorking, and DeHashed.

Cybersecurity Analyst Intern — Redynox
- Conducted vulnerability assessments using Burp Suite and Metasploit; identified and remediated OWASP Top 10 risks.

Cybersecurity Intern — Pinnacle Lab
- Performed threat modeling and security configuration analysis.

SOC Intern — The Red Users
- Monitored SIEM alerts and supported incident detection and response workflows.

PROJECTS
Brute Force Defense System
Python, Arduino, Flask
- Built an ML-based rate-limiting system that reduced brute-force login attempts by 94%.

Cyber Sentinel Labs
Docker, MongoDB, SIEM
- Developed a containerized threat-monitoring platform with IOC mapping.

OSINT Intelligence Toolkit
Python, Shodan
- Built an automated reconnaissance tool for OSINT data collection.

TECHNICAL SKILLS
Programming:
Python, C, C++, Java, JavaScript, HTML, CSS, SQL

Security Tools:
Burp Suite, Wireshark, Nmap, Metasploit, Kali Linux, OWASP Top 10, Penetration Testing, Bug Bounty

Digital Forensics:
Autopsy, FTK, Cellebrite UFED, Magnet AXIOM, ALEAPP, iLEAPP

Threat Intelligence:
MITRE ATT&CK, MISP, SIEM, IOC Mapping, Threat Hunting, Incident Response

OSINT:
Google Dorking, Shodan, CRT.sh, PhoneInfoga, DeHashed, FOFA

Cloud & DevOps:
GCP, Docker, Git, GitHub, VMware, VirtualBox

ACHIEVEMENTS & CERTIFICATIONS
- picoCTF Global Rank 526
- TryHackMe Top 7%
- Ignithon 3rd Position
- BIS Hackathon 3rd Position
- ChatGPT for Cybersecurity (Simplilearn)
- Trust & Security with Google Cloud
- Generative AI for Beginners
- Deloitte Cyber Job Simulation
- NIELIT Cyber Security Internship`;

    navigator.clipboard.writeText(rawText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-cyber-darker border border-cyber-cyan/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Action Toolbar */}
        <div className="bg-cyber-dark px-4 sm:px-6 py-3.5 border-b border-cyber-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white font-mono text-xs sm:text-sm font-bold">
            <FileText className="w-4 h-4 text-cyber-cyan" />
            <span>SOUMAVA_DAS_RESUME // DOCUMENT VIEWER</span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-cyber-card rounded-lg p-0.5 border border-cyber-border text-[11px] font-mono">
              <button
                onClick={() => setThemeMode('clean')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  themeMode === 'clean'
                    ? 'bg-white text-black font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                CLEAN RESUME (PDF)
              </button>
              <button
                onClick={() => setThemeMode('cyber')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  themeMode === 'cyber'
                    ? 'bg-cyber-cyan text-cyber-darker font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                CYBER SOC VIEW
              </button>
            </div>

            {/* Print / Save PDF */}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-cyber-cyan hover:bg-cyan-400 text-cyber-darker font-mono text-xs font-bold flex items-center gap-1.5 shadow-cyber-cyan transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DOWNLOAD / PRINT PDF</span>
            </button>

            {/* Copy Raw Text */}
            <button
              onClick={handleCopyRawText}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-cyber-card hover:bg-cyber-card-hover border border-cyber-border text-slate-300 hover:text-cyber-cyan text-xs font-mono transition-colors flex items-center gap-1"
              title="Copy plain text"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-cyber-matrix" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{isCopied ? 'COPIED' : 'COPY TEXT'}</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-cyber-card text-slate-400 hover:text-white hover:bg-cyber-border transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Viewport */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center bg-zinc-950/70">
          
          {/* A4 Clean Resume Format (Matching exact OCR / PDF structure) */}
          {themeMode === 'clean' ? (
            <div
              id="printable-resume"
              className="w-full max-w-[780px] bg-white text-zinc-900 font-sans p-8 sm:p-12 shadow-2xl rounded-sm text-[13px] leading-relaxed space-y-6 select-text"
            >
              {/* Header */}
              <div className="space-y-1.5">
                <h1 className="text-2xl font-bold tracking-tight text-black">
                  SOUMAVA DAS
                </h1>
                <p className="text-zinc-700 text-sm font-medium">
                  Cybersecurity | Digital Forensics | Threat Intelligence | Penetration Testing
                </p>
                <div className="text-xs text-zinc-600 pt-1">
                  <span className="font-semibold text-black">Contact:</span><br />
                  +91 7001515109 | soumavadas2005@gmail.com | Bhubaneswar, Odisha, India<br />
                  GitHub: <a href="https://github.com/Cyberdude441" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/Cyberdude441</a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-zinc-800 text-xs sm:text-[13px] leading-normal text-justify">
                  Cybersecurity undergraduate with hands-on experience in penetration testing, vulnerability assessment, digital forensics, and threat intelligence across four internships. Skilled in SIEM monitoring, OSINT reconnaissance, MITRE ATT&amp;CK; mapping, and incident response. Active CTF competitor (TryHackMe Top 7%, picoCTF Global Rank 526).
                </p>
              </div>

              {/* Education */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1">
                  EDUCATION
                </h2>
                <div className="space-y-1 text-xs sm:text-[13px]">
                  <div className="font-semibold text-black">
                    B.Tech in Computer Science &amp; Engineering, KIIT University (2024 - 2028)
                  </div>
                  <div className="text-zinc-700 font-medium">
                    CGPA: 8.4
                  </div>
                  <div className="pt-1 text-zinc-800">
                    Class XII &amp; Class X, Memari V.M. Institution, Unit-1
                  </div>
                  <div className="text-zinc-600 text-xs">
                    Class XII: 93% | Class X: 95.71%
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1">
                  PROFESSIONAL EXPERIENCE
                </h2>

                <div className="space-y-1 text-xs sm:text-[13px]">
                  <div className="font-semibold text-black">
                    Cyber Security Intern — Amroha Police Cyber Security Internship Program (APCSIP-2026)
                  </div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-xs space-y-0.5">
                    <li>Performed digital and mobile forensics using Autopsy, FTK, and Cellebrite UFED; mapped findings to MITRE ATT&amp;CK; framework.</li>
                    <li>Conducted OSINT reconnaissance using Shodan, Google Dorking, and DeHashed.</li>
                  </ul>
                </div>

                <div className="space-y-1 text-xs sm:text-[13px]">
                  <div className="font-semibold text-black">
                    Cybersecurity Analyst Intern — Redynox
                  </div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-xs space-y-0.5">
                    <li>Conducted vulnerability assessments using Burp Suite and Metasploit; identified and remediated OWASP Top 10 risks.</li>
                  </ul>
                </div>

                <div className="space-y-1 text-xs sm:text-[13px]">
                  <div className="font-semibold text-black">
                    Cybersecurity Intern — Pinnacle Lab
                  </div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-xs space-y-0.5">
                    <li>Performed threat modeling and security configuration analysis.</li>
                  </ul>
                </div>

                <div className="space-y-1 text-xs sm:text-[13px]">
                  <div className="font-semibold text-black">
                    SOC Intern — The Red Users
                  </div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-xs space-y-0.5">
                    <li>Monitored SIEM alerts and supported incident detection and response workflows.</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1">
                  PROJECTS
                </h2>

                <div className="space-y-0.5 text-xs sm:text-[13px]">
                  <div className="font-semibold text-black">Brute Force Defense System</div>
                  <div className="text-xs text-zinc-500 font-mono">Python, Arduino, Flask</div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-xs">
                    <li>Built an ML-based rate-limiting system that reduced brute-force login attempts by 94%.</li>
                  </ul>
                </div>

                <div className="space-y-0.5 text-xs sm:text-[13px]">
                  <div className="font-semibold text-black">Cyber Sentinel Labs</div>
                  <div className="text-xs text-zinc-500 font-mono">Docker, MongoDB, SIEM</div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-xs">
                    <li>Developed a containerized threat-monitoring platform with IOC mapping.</li>
                  </ul>
                </div>

                <div className="space-y-0.5 text-xs sm:text-[13px]">
                  <div className="font-semibold text-black">OSINT Intelligence Toolkit</div>
                  <div className="text-xs text-zinc-500 font-mono">Python, Shodan</div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-xs">
                    <li>Built an automated reconnaissance tool for OSINT data collection.</li>
                  </ul>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1">
                  TECHNICAL SKILLS
                </h2>
                
                <div className="space-y-1 text-xs leading-relaxed">
                  <div>
                    <span className="font-semibold text-black">Programming: </span>
                    <span className="text-zinc-700">Python, C, C++, Java, JavaScript, HTML, CSS, SQL</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Security Tools: </span>
                    <span className="text-zinc-700">Burp Suite, Wireshark, Nmap, Metasploit, Kali Linux, OWASP Top 10, Penetration Testing, Bug Bounty</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Digital Forensics: </span>
                    <span className="text-zinc-700">Autopsy, FTK, Cellebrite UFED, Magnet AXIOM, ALEAPP, iLEAPP</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Threat Intelligence: </span>
                    <span className="text-zinc-700">MITRE ATT&amp;CK;, MISP, SIEM, IOC Mapping, Threat Hunting, Incident Response</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">OSINT: </span>
                    <span className="text-zinc-700">Google Dorking, Shodan, CRT.sh, PhoneInfoga, DeHashed, FOFA</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Cloud &amp; DevOps: </span>
                    <span className="text-zinc-700">GCP, Docker, Git, GitHub, VMware, VirtualBox</span>
                  </div>
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1">
                  ACHIEVEMENTS &amp; CERTIFICATIONS
                </h2>
                <ul className="list-disc list-outside pl-5 text-zinc-700 text-xs space-y-0.5">
                  <li>picoCTF Global Rank 526</li>
                  <li>TryHackMe Top 7%</li>
                  <li>Ignithon 3rd Position</li>
                  <li>BIS Hackathon 3rd Position</li>
                  <li>ChatGPT for Cybersecurity (Simplilearn)</li>
                  <li>Trust &amp; Security with Google Cloud</li>
                  <li>Generative AI for Beginners</li>
                  <li>Deloitte Cyber Job Simulation</li>
                  <li>NIELIT Cyber Security Internship</li>
                </ul>
              </div>

            </div>
          ) : (
            /* Cyber SOC Dark View */
            <div className="w-full max-w-[780px] bg-cyber-card border border-cyber-cyan/40 p-8 sm:p-10 rounded-xl font-mono text-xs text-slate-300 space-y-6 shadow-2xl">
              <div className="border-b border-cyber-border pb-4 flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-white font-display">SOUMAVA DAS</h1>
                  <p className="text-cyber-cyan text-xs mt-1">Cybersecurity | Digital Forensics | Threat Intelligence | Penetration Testing</p>
                  <p className="text-slate-400 text-[11px] mt-1">+91 7001515109 | soumavadas2005@gmail.com | Bhubaneswar, Odisha, India</p>
                </div>
                <span className="bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan px-2 py-0.5 rounded text-[10px]">
                  VERIFIED PROFILE
                </span>
              </div>

              <div>
                <h3 className="text-cyber-cyan font-bold mb-1">// SUMMARY</h3>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {personalInfo.bio}
                </p>
              </div>

              <div>
                <h3 className="text-cyber-matrix font-bold mb-1">// EDUCATION</h3>
                <p className="text-white">B.Tech in Computer Science &amp; Engineering, KIIT University (2024 - 2028) — CGPA: 8.4</p>
                <p className="text-slate-400 text-[11px]">Memari V.M. Institution: Class XII (93%) | Class X (95.71%)</p>
              </div>

              <div>
                <h3 className="text-cyber-purple font-bold mb-1">// PROFESSIONAL ENGAGEMENTS</h3>
                <div className="space-y-2 text-[11px]">
                  <div>• <strong>APCSIP-2026:</strong> Digital/Mobile forensics (Autopsy, FTK, Cellebrite UFED), OSINT (Shodan, DeHashed).</div>
                  <div>• <strong>Redynox:</strong> Vulnerability assessments (Burp Suite, Metasploit), OWASP Top 10 remediation.</div>
                  <div>• <strong>Pinnacle Lab:</strong> Threat modeling &amp; security configuration analysis.</div>
                  <div>• <strong>The Red Users:</strong> SIEM alert monitoring &amp; incident detection workflows.</div>
                </div>
              </div>

              <div>
                <h3 className="text-cyber-cyan font-bold mb-1">// COMPETITIVE ACHIEVEMENTS &amp; CERTS</h3>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                  <div>• picoCTF Global Rank 526</div>
                  <div>• TryHackMe Top 7%</div>
                  <div>• Ignithon 3rd Position</div>
                  <div>• BIS Hackathon 3rd Position</div>
                  <div>• Google Cloud Trust &amp; Security</div>
                  <div>• ChatGPT for Cybersecurity</div>
                  <div>• Deloitte Cyber Simulation</div>
                  <div>• NIELIT Cyber Internship</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-cyber-dark px-6 py-3 border-t border-cyber-border text-xs font-mono text-slate-400 flex items-center justify-between">
          <span>DOCUMENT STATUS: SYNCED &amp; VERIFIED</span>
          <button
            onClick={handlePrint}
            className="text-cyber-cyan hover:underline flex items-center gap-1"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PRINT / SAVE DIRECTLY</span>
          </button>
        </div>

      </div>
    </div>
  );
};
