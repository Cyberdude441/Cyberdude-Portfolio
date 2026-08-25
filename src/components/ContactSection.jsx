import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getGmailComposeUrl = () => {
    const sub = encodeURIComponent(formData.subject || `Inquiry from Portfolio - ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n--\nSent via Soumava Das Portfolio`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${sub}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Launch Gmail in new tab prefilled
    const url = getGmailComposeUrl();
    window.open(url, '_blank');
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
            Connect
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            Get in Touch
          </h2>
          <p className="text-sm text-text-muted mt-1.5 max-w-xl">
            Open to cybersecurity engineering opportunities, internship discussions, vulnerability research, and technical collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="card-surface rounded-xl p-5 space-y-3 shadow-subtle">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#080B12] text-primary border border-surface-border">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-muted font-medium">Direct Email</div>
                  <div className="text-sm font-semibold text-text-primary font-mono">{personalInfo.email}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-surface-border/60">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=Cybersecurity%20Opportunity%20Inquiry`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-1.5 px-3 rounded-md bg-primary hover:bg-primary-hover text-background text-center text-xs font-semibold transition-all flex items-center justify-center gap-1 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Gmail</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="py-1.5 px-3 rounded-md bg-[#080B12] hover:bg-surface-hover border border-surface-border text-text-secondary hover:text-text-primary text-xs font-medium transition-colors flex items-center justify-center gap-1"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="card-surface rounded-xl p-5 space-y-3">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Professional Networks
              </div>

              <div className="space-y-2 text-xs">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#080B12] hover:bg-surface-hover border border-surface-border text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                    <span className="font-medium">LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#080B12] hover:bg-surface-hover border border-surface-border text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                    <span className="font-medium">GitHub Repositories (@Cyberdude441)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                </a>

                <a
                  href={personalInfo.socials.tryhackme}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#080B12] hover:bg-surface-hover border border-surface-border text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success" />
                    <span className="font-medium">TryHackMe Profile (@imcyberdude)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                </a>
              </div>
            </div>

            {/* Location & Details Card */}
            <div className="card-surface rounded-xl p-4 text-xs text-text-muted space-y-1.5 font-mono">
              <div className="flex items-center gap-2 text-text-secondary font-sans">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="text-[11px] text-text-muted">
                Timezone: IST (UTC +5:30) &bull; Fluent in English, Bengali, Hindi
              </div>
            </div>

          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7 card-surface rounded-xl p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="text-base font-semibold text-text-primary">
                Send a Message
              </h3>
              <p className="text-xs text-text-muted mt-1">
                Fill in the details below to compose and send directly.
              </p>
            </div>

            {isSent ? (
              <div className="p-6 rounded-lg bg-[#080B12] border border-surface-border text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-success-muted text-success mx-auto flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-text-primary">
                  Draft Generated in Gmail
                </h4>
                <p className="text-xs text-text-muted max-w-sm mx-auto">
                  A Gmail compose window was opened with your message. You can also email directly to <span className="font-mono text-text-primary">{personalInfo.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="text-xs text-primary hover:underline pt-1 inline-block"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#080B12] border border-surface-border focus:border-primary focus:outline-none text-xs text-text-primary placeholder:text-text-muted"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#080B12] border border-surface-border focus:border-primary focus:outline-none text-xs text-text-primary placeholder:text-text-muted"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">
                    Subject / Purpose
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Cybersecurity Internship / Project Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#080B12] border border-surface-border focus:border-primary focus:outline-none text-xs text-text-primary placeholder:text-text-muted"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#080B12] border border-surface-border focus:border-primary focus:outline-none text-xs text-text-primary placeholder:text-text-muted resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-md bg-primary hover:bg-primary-hover text-background font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
