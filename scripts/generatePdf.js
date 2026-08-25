import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'a4'
});

const pageWidth = doc.internal.pageSize.getWidth();
const margin = 36;
const contentWidth = pageWidth - (margin * 2);
let y = 38;

function checkPage(needed) {
  // single page target
}

// 1. Header
doc.setFont('helvetica', 'bold');
doc.setFontSize(15);
doc.setTextColor(17, 24, 39);
doc.text('SOUMAVA DAS', pageWidth / 2, y, { align: 'center' });
y += 14;

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(55, 65, 81);
doc.text('Cybersecurity | Digital Forensics | Threat Intelligence | Penetration Testing', pageWidth / 2, y, { align: 'center' });
y += 13;

doc.setFontSize(8);
doc.setTextColor(75, 85, 99);
const contactLine = '+91 7001515109  |  soumavadas2005@gmail.com  |  Bhubaneswar, Odisha, India  |  linkedin.com/in/soumava-das-267999332  |  github.com/Cyberdude441';
doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
y += 16;

function drawSectionHeader(title) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(17, 24, 39);
  doc.text(title.toUpperCase(), margin, y);
  y += 3;
  doc.setDrawColor(31, 41, 55);
  doc.setLineWidth(0.75);
  doc.line(margin, y, margin + contentWidth, y);
  y += 11;
}

// 2. Professional Summary
drawSectionHeader('PROFESSIONAL SUMMARY');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(31, 41, 55);
const summaryText = 'Cybersecurity undergraduate with hands-on experience in penetration testing, vulnerability assessment, digital forensics, and threat intelligence across four internships. Skilled in SIEM monitoring, OSINT reconnaissance, MITRE ATT&CK mapping, and incident response. Active CTF competitor (TryHackMe Top 7%, picoCTF Global Rank 526).';
const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
doc.text(splitSummary, margin, y);
y += (splitSummary.length * 11) + 6;

// 3. Education
drawSectionHeader('EDUCATION');

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(17, 24, 39);
doc.text('B.Tech in Computer Science & Engineering, KIIT University', margin, y);
doc.setFont('helvetica', 'italic');
doc.text('2024 \u2013 2028', margin + contentWidth, y, { align: 'right' });
y += 11;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(55, 65, 81);
doc.text('CGPA: 8.4', margin, y);
y += 12;

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(17, 24, 39);
doc.text('Class XII & Class X, Memari V.M. Institution, Unit-1', margin, y);
doc.setFont('helvetica', 'italic');
doc.text('2015 \u2013 2023', margin + contentWidth, y, { align: 'right' });
y += 11;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(55, 65, 81);
doc.text('Class XII: 93% | Class X: 95.71%', margin, y);
y += 15;

// 4. Professional Experience
drawSectionHeader('PROFESSIONAL EXPERIENCE');

function drawJob(title, period, location, bullets) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(17, 24, 39);
  doc.text(title, margin, y);
  doc.setFont('helvetica', 'italic');
  doc.text(period, margin + contentWidth, y, { align: 'right' });
  y += 10;

  if (location) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(107, 114, 128);
    doc.text(location, margin, y);
    y += 10;
  }

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(31, 41, 55);

  bullets.forEach(bullet => {
    doc.text('\u2022', margin + 6, y);
    const splitB = doc.splitTextToSize(bullet, contentWidth - 16);
    doc.text(splitB, margin + 16, y);
    y += (splitB.length * 10) + 1.5;
  });
  y += 3;
}

drawJob(
  'Cyber Security Intern \u2014 Amroha Police Cyber Security Internship Program (APCSIP-2026)',
  'Jun 2026',
  'Amroha, Uttar Pradesh',
  [
    'Performed digital and mobile forensics using Autopsy, FTK, and Cellebrite UFED; mapped findings to the MITRE ATT&CK framework and maintained chain-of-custody documentation.',
    'Conducted OSINT reconnaissance (Shodan, Google Dorking, DeHashed) and supported cyber awareness and incident response protocols.'
  ]
);

drawJob(
  'Cybersecurity Analyst Intern \u2014 Redynox',
  'Nov \u2013 Dec 2025',
  'Remote',
  [
    'Conducted vulnerability assessments using Burp Suite and Metasploit; identified and remediated OWASP Top 10 risks.'
  ]
);

drawJob(
  'Cybersecurity Intern \u2014 Pinnacle Lab',
  'Jun \u2013 Aug 2025',
  'Remote',
  [
    'Performed threat modeling and security configuration analysis for client environments.'
  ]
);

drawJob(
  'SOC Intern \u2014 The Red Users',
  'May \u2013 Jun 2025',
  'Remote',
  [
    'Monitored SIEM alerts and supported incident detection and response workflows.'
  ]
);

// 5. Projects
drawSectionHeader('PROJECTS');
const projects = [
  { name: 'Brute Force Defense System', stack: 'Python, Arduino, Flask', desc: 'Built an ML-based rate-limiting system that reduced brute-force login attempts by 94%.' },
  { name: 'API Sentinel', stack: 'Rust, Async Tokio, REST', desc: 'High-throughput zero-overhead API security sentinel engine for intercepting unauthorized access.' },
  { name: 'Subdomain Enumerator OSINT', stack: 'Python, Shodan, DNS', desc: 'Built an automated reconnaissance tool that optimized OSINT data collection by 71%.' },
  { name: 'CyberQwen AI', stack: 'Python, LLMs, MITRE ATT&CK', desc: 'AI-powered security analysis assistant for automated vulnerability triage and incident response.' }
];

projects.forEach(p => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(31, 41, 55);
  doc.text('\u2022', margin + 6, y);

  const fullText = `${p.name} (${p.stack}) \u2014 ${p.desc}`;
  const splitP = doc.splitTextToSize(fullText, contentWidth - 16);
  doc.text(splitP, margin + 16, y);
  y += (splitP.length * 10) + 1.5;
});
y += 4;

// 6. Technical Skills
drawSectionHeader('TECHNICAL SKILLS');
const skills = [
  ['Programming:', 'Python, C, C++, Java, JavaScript, HTML, CSS, SQL'],
  ['Security Tools:', 'Burp Suite, Wireshark, Nmap, Metasploit, Kali Linux, OWASP Top 10, Penetration Testing, Bug Bounty'],
  ['Digital Forensics:', 'Autopsy, FTK, Cellebrite UFED, Magnet AXIOM, ALEAPP, iLEAPP'],
  ['Threat Intelligence:', 'MITRE ATT&CK, MISP, SIEM, IOC Mapping, Threat Hunting, Incident Response'],
  ['OSINT:', 'Google Dorking, Shodan, CRT.sh, PhoneInfoga, DeHashed, FOFA'],
  ['Cloud & DevOps:', 'GCP (Compute Engine, IAM, Cloud Storage), Docker, Git, GitHub, VMware, VirtualBox'],
  ['Frameworks & Databases:', 'React, Node.js, Express, Flask, MongoDB, REST APIs, Firebase']
];

skills.forEach(([label, val]) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.8);
  doc.setTextColor(17, 24, 39);
  doc.text(label, margin, y);

  const labelWidth = doc.getTextWidth(label) + 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(55, 65, 81);
  const splitV = doc.splitTextToSize(val, contentWidth - labelWidth);
  doc.text(splitV, margin + labelWidth, y);
  y += (splitV.length * 9.5);
});
y += 4;

// 7. Achievements & Certifications
drawSectionHeader('ACHIEVEMENTS & CERTIFICATIONS');
const achList = [
  'picoCTF Global Rank 526  |  TryHackMe Top 7%  |  Ignithon 3rd Position  |  BIS Hackathon 3rd Position',
  'ChatGPT for Cybersecurity (Simplilearn)  |  Trust & Security with Google Cloud  |  Generative AI for Beginners  |  Cyber Job Simulation (Deloitte)  |  NIELIT Cyber Security Internship'
];

achList.forEach(item => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(31, 41, 55);
  doc.text('\u2022', margin + 6, y);
  const splitA = doc.splitTextToSize(item, contentWidth - 16);
  doc.text(splitA, margin + 16, y);
  y += (splitA.length * 9.5) + 1;
});

// Write to public/
const outputDir = path.resolve('public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(path.join(outputDir, 'Soumava_Das_Resume.pdf'), pdfBuffer);
fs.writeFileSync(path.join(outputDir, 'resume.pdf'), pdfBuffer);

console.log('Successfully generated Soumava_Das_Resume.pdf and resume.pdf');
