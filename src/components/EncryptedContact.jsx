import React, { useState } from 'react';
import { Mail, Send, Lock, ShieldCheck, Terminal, Copy, Check, Radio, ExternalLink, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import { cyberAudio } from '../utils/soundEffects';

export const EncryptedContact = () => {
  const [formData, setFormData] = useState({
    sender: '',
    email: '',
    vector: 'Vulnerability Disclosure / Security Inquiry',
    message: ''
  });
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [encryptedHash, setEncryptedHash] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`[SOC Transmission] ${formData.vector} - from ${formData.sender || 'Anonymous'}`);
    const body = encodeURIComponent(
      `Operative: ${formData.sender}\nContact Email: ${formData.email}\nTransmission Vector: ${formData.vector}\n\nMessage Payload:\n${formData.message}\n\n--\nTransmitted via Soumava Das Portfolio SOC Terminal`
    );
    return `mailto:${personalInfo.socials.email}?subject=${subject}&body=${body}`;
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(`[SOC Transmission] ${formData.vector || 'Inquiry'} - from ${formData.sender || 'Anonymous'}`);
    const body = encodeURIComponent(
      `Operative: ${formData.sender}\nContact Email: ${formData.email}\nTransmission Vector: ${formData.vector}\n\nMessage Payload:\n${formData.message}\n\n--\nTransmitted via Soumava Das Portfolio SOC Terminal`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.socials.email}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.sender || !formData.email || !formData.message) return;

    cyberAudio.playCommandExecute();
    setIsEncrypting(true);

    // Simulate PGP / AES payload encryption and trigger direct mail dispatcher
    setTimeout(() => {
      const mockHash = 'SHA256:' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      setEncryptedHash(mockHash);
      setIsEncrypting(false);
      setIsSent(true);
      cyberAudio.playAccessGranted();

      // Automatically launch Gmail or Mailto in new tab if requested
      const gmailLink = getGmailUrl();
      window.open(gmailLink, '_blank');
    }, 1200);
  };

  const handleCopyEmail = () => {
    cyberAudio.playCommandExecute();
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-cyber-bg relative border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>// DIRECT TRANSMISSION LINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Encrypted Communications
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-sans mt-2 max-w-2xl">
            Transmit secure inquiries, vulnerability disclosures, internship proposals, or research collaborations directly to Soumava Das.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Direct Connection Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-cyber-card border border-cyber-border rounded-xl p-5 shadow-xl hover:border-cyber-cyan/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-lg bg-cyber-dark text-cyber-cyan border border-cyber-border">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-400">DIRECT INBOX</div>
                    <div className="font-mono text-sm font-bold text-white truncate">{personalInfo.socials.email}</div>
                  </div>
                </div>
              </div>

              {/* Direct Email Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-cyber-border/60">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.socials.email}&su=Cybersecurity%20Inquiry%20from%20Portfolio`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-lg bg-cyber-cyan hover:bg-cyan-400 text-cyber-darker text-center font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-cyber-cyan"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>OPEN GMAIL</span>
                </a>

                <a
                  href={`mailto:${personalInfo.socials.email}?subject=Cybersecurity%20Inquiry%20from%20Portfolio`}
                  className="py-2 px-3 rounded-lg bg-cyber-card hover:bg-cyber-card-hover border border-cyber-border hover:border-cyber-cyan text-cyber-cyan text-center font-mono text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>MAIL APP</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-1.5 rounded bg-cyber-dark hover:bg-cyber-card border border-cyber-border text-slate-300 hover:text-cyber-cyan transition-colors text-xs font-mono flex items-center justify-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyber-matrix" />
                      <span className="text-cyber-matrix">EMAIL COPIED: {personalInfo.socials.email}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY EMAIL ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="bg-cyber-card border border-cyber-border rounded-xl p-5 shadow-xl hover:border-cyber-cyan/40 transition-all block group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyber-dark text-white border border-cyber-border group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-400">GITHUB REPOSITORIES</div>
                    <div className="font-mono text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors">
                      github.com/Cyberdude441
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/20">
                  ONLINE
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-cyber-card border border-cyber-border rounded-xl p-5 shadow-xl hover:border-cyber-purple/40 transition-all block group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyber-dark text-cyber-purple border border-cyber-border group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-400">LINKEDIN NETWORK</div>
                    <div className="font-mono text-sm font-bold text-white group-hover:text-cyber-purple transition-colors">
                      linkedin.com/in/soumava-das-267999332
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-cyber-purple bg-cyber-purple/10 px-2 py-0.5 rounded border border-cyber-purple/20">
                  CONNECT
                </span>
              </div>
            </a>

            {/* Cryptographic Key Specs */}
            <div className="p-4 rounded-xl bg-cyber-darker border border-cyber-border font-mono text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2 text-cyber-matrix">
                <Lock className="w-3.5 h-3.5" />
                <span className="font-bold">PGP FINGERPRINT:</span>
              </div>
              <p className="text-[11px] text-slate-300 break-all">
                4F92 A8C1 3E09 87BD 1284 991F 093A C72B
              </p>
            </div>

          </div>

          {/* Right: Encrypted Transmission Form */}
          <div className="lg:col-span-7 bg-cyber-card border border-cyber-border rounded-xl p-6 sm:p-8 shadow-2xl relative">
            
            {isSent ? (
              <div className="py-10 flex flex-col items-center justify-center text-center space-y-4 font-mono">
                <div className="w-16 h-16 rounded-full bg-cyber-matrix/15 border-2 border-cyber-matrix flex items-center justify-center text-cyber-matrix shadow-cyber-matrix">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  TRANSMISSION PACKAGED & DISPATCHED ✓
                </h3>
                <p className="text-slate-300 text-xs max-w-md">
                  Your message has been signed with cryptographic hash verification and pre-composed for direct dispatch to <strong>{personalInfo.socials.email}</strong>.
                </p>
                
                <div className="p-3 bg-cyber-dark rounded-lg border border-cyber-border text-xs text-cyber-cyan break-all w-full max-w-md">
                  DIGITAL SIGNATURE: {encryptedHash}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={getGmailUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-cyber-cyan hover:bg-cyan-400 text-cyber-darker font-bold text-xs flex items-center gap-2 shadow-cyber-cyan transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>COMPOSE IN GMAIL</span>
                  </a>

                  <a
                    href={getMailtoUrl()}
                    className="px-5 py-2.5 rounded-lg bg-cyber-dark hover:bg-cyber-darker border border-cyber-border text-xs text-white flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>OPEN IN DEFAULT MAIL APP</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ sender: '', email: '', vector: 'Vulnerability Disclosure / Security Inquiry', message: '' });
                  }}
                  className="pt-2 text-slate-500 hover:text-slate-300 text-[11px] underline"
                >
                  ← Transmit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-cyber-border">
                  <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyber-cyan" />
                    TRANSMITTER BUFFER
                  </span>
                  <span className="text-[10px] font-mono text-cyber-matrix">STATUS: READY TO DISPATCH</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      SENDER IDENTITY / ALIAS *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.sender}
                      onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-dark border border-cyber-border focus:border-cyber-cyan focus:outline-none text-xs font-mono text-white placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      YOUR CONTACT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@security.org"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-dark border border-cyber-border focus:border-cyber-cyan focus:outline-none text-xs font-mono text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    TRANSMISSION VECTOR / TOPIC
                  </label>
                  <select
                    value={formData.vector}
                    onChange={(e) => setFormData({ ...formData, vector: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-dark border border-cyber-border focus:border-cyber-cyan focus:outline-none text-xs font-mono text-white"
                  >
                    <option value="Internship / Role Inquiry">Internship / Full-time Role Inquiry</option>
                    <option value="Security Research Collaboration">Security Research Collaboration</option>
                    <option value="Responsible Vulnerability Disclosure">Responsible Vulnerability Disclosure</option>
                    <option value="DFIR / Incident Investigation Consulting">DFIR / Incident Investigation Consulting</option>
                    <option value="General Peer Networking">General Peer Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    MESSAGE PAYLOAD *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter message details, inquiry, or proposal..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-dark border border-cyber-border focus:border-cyber-cyan focus:outline-none text-xs font-mono text-white placeholder:text-slate-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isEncrypting}
                  className="w-full py-3 rounded-lg bg-cyber-cyan hover:bg-cyan-400 text-cyber-darker font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-cyber-cyan transition-all disabled:opacity-50"
                >
                  {isEncrypting ? (
                    <>
                      <Lock className="w-4 h-4 animate-spin" />
                      <span>SIGNING & PACKAGING PAYLOAD...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>DISPATCH TRANSMISSION</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
