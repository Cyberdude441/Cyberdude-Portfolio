import { personalInfo, skillCategories, projects, experienceTimeline, ctfBattlefield, certifications } from './portfolioData';

export const executeTerminalCommand = (cmdStr) => {
  const cleanCmd = cmdStr.trim().toLowerCase();
  const parts = cleanCmd.split(' ');
  const command = parts[0];
  const args = parts.slice(1);

  switch (command) {
    case 'help':
      return {
        type: 'output',
        content: [
          'AVAILABLE SOC TERMINAL COMMANDS:',
          '  whoami       - Display security operative dossier & clearances',
          '  skills       - Query offensive, DFIR & threat intelligence competencies',
          '  projects     - List flagship cybersecurity research platforms & tools',
          '  experience   - Show chronological security analyst internship logs',
          '  ctf          - Print CTF battlefield rankings & platform badges',
          '  certs        - Show verified professional cybersecurity certifications',
          '  status       - Diagnostic health check of local SOC telemetry',
          '  scan [target]- Perform simulated vulnerability and port scan',
          '  contact      - Display encrypted communication channels',
          '  matrix       - Trigger full-screen Cyber Matrix stream (or press Ctrl+Shift+S)',
          '  clear        - Clear terminal stdout buffer',
          '  echo [text]  - Echo string to console',
          '  date         - Print current system epoch & timestamp'
        ]
      };

    case 'whoami':
      return {
        type: 'output',
        content: [
          `OPERATIVE: ${personalInfo.name} [Handle: ${personalInfo.handle}]`,
          `CLEARANCE: ${personalInfo.securityClearance}`,
          `ACADEMIC: ${personalInfo.affiliation}`,
          `LOCATION: ${personalInfo.location}`,
          `ROLES: ${personalInfo.roles.join(' | ')}`,
          `STATUS: ${personalInfo.status}`,
          '',
          `DOSSIER SUMMARY:`,
          personalInfo.bio
        ]
      };

    case 'skills':
      const skillOutput = ['=== OPERATIONAL SKILLS INVENTORY ==='];
      skillCategories.forEach(cat => {
        skillOutput.push(`\n[+] ${cat.name.toUpperCase()}`);
        const skillsList = cat.skills.map(s => `${s.name} (${s.level}%)`).join(', ');
        skillOutput.push(`    -> ${skillsList}`);
      });
      return {
        type: 'output',
        content: skillOutput
      };

    case 'projects':
      const projOutput = ['=== FLAGSHIP CYBERSECURITY PROJECTS ==='];
      projects.forEach((p, idx) => {
        projOutput.push(`\n[0${idx + 1}] ${p.title.toUpperCase()} [${p.category}]`);
        projOutput.push(`    Summary: ${p.summary}`);
        projOutput.push(`    Stack: ${p.technologies.join(', ')}`);
        projOutput.push(`    Repo: ${p.github}`);
      });
      return {
        type: 'output',
        content: projOutput
      };

    case 'experience':
    case 'exp':
      const expOutput = ['=== CHRONOLOGICAL ENGAGEMENT TIMELINE ==='];
      experienceTimeline.forEach(e => {
        expOutput.push(`\n[${e.year}] ${e.role} @ ${e.company} (${e.location})`);
        expOutput.push(`    Description: ${e.description}`);
        expOutput.push(`    Tech: ${e.skillsUsed.join(', ')}`);
      });
      return {
        type: 'output',
        content: expOutput
      };

    case 'ctf':
      return {
        type: 'output',
        content: [
          '=== CYBER BATTLEFIELD & CTF METRICS ===',
          `[+] TryHackMe: ${ctfBattlefield.stats[0].value} (${ctfBattlefield.stats[0].change}) -> https://tryhackme.com/p/imcyberdude`,
          `[+] picoCTF / CyLab Rank: ${ctfBattlefield.stats[1].value} (${ctfBattlefield.stats[1].change}) -> https://learn.cylabacademy.org/users/cyberdude441`,
          `[+] Challenges Solved: ${ctfBattlefield.stats[2].value} across Web, DFIR, Crypto, Reverse Engineering`,
          `[+] National Hackathons: ${ctfBattlefield.stats[3].value}`,
          '',
          'Specialized Badges: Linux PrivEsc, Forensic Investigator, Network Security Specialist'
        ]
      };

    case 'certs':
    case 'certifications':
      const certOutput = ['=== VERIFIED CYBERSECURITY CREDENTIALS ==='];
      certifications.forEach(c => {
        certOutput.push(`\n[✓] ${c.title} (${c.year})`);
        certOutput.push(`    Issuer: ${c.issuer} | ID: ${c.credentialId}`);
        certOutput.push(`    Focus: ${c.description}`);
      });
      return {
        type: 'output',
        content: certOutput
      };

    case 'status':
      return {
        type: 'output',
        content: [
          '=== LOCAL SOC NODE DIAGNOSTICS ===',
          `DEFCON LEVEL: ${personalInfo.defconLevel} (SYSTEM NOMINAL)`,
          'NODE STATUS: ONLINE & LISTENING',
          'INTELLIGENCE ENGINE: ACTIVE [Feed sync: 99.8%]',
          'THREAT MONITOR: ACTIVE [Zero critical breaches in current session]',
          'FIREWALL FILTER: ENFORCING (Iptables / Scapy IPS)',
          'ENCRYPTION LAYER: TLS 1.3 / AES-256-GCM / SHA-512',
          `UPTIME: 99.98% | LATENCY: 14ms`
        ]
      };

    case 'scan':
      const target = args[0] || 'localhost';
      return {
        type: 'output',
        content: [
          `[!] Initiating asynchronous vulnerability probe on: [${target}]...`,
          `[*] Resolving target DNS and ARP tables...`,
          `[*] SYN stealth scan: Port 22/tcp (SSH - Open/Hardened)`,
          `[*] SYN stealth scan: Port 80/tcp (HTTP - Redirect 301)`,
          `[*] SYN stealth scan: Port 443/tcp (HTTPS - TLS 1.3 OK)`,
          `[*] SYN stealth scan: Port 8080/tcp (SOC API - Authorized Access)`,
          `[+] Scan completed: 0 critical vulnerabilities discovered. Node secured.`
        ]
      };

    case 'matrix':
      return {
        type: 'action',
        action: 'TRIGGER_MATRIX',
        content: ['[!] Initializing full-screen Matrix streaming interface...']
      };

    case 'contact':
      return {
        type: 'output',
        content: [
          '=== ENCRYPTED COMMUNICATION CHANNELS ===',
          `Email: ${personalInfo.socials.email}`,
          `GitHub: ${personalInfo.socials.github}`,
          `LinkedIn: ${personalInfo.socials.linkedin}`,
          `PGP Fingerprint: 4F92 A8C1 3E09 87BD 1284 991F 093A C72B`,
          `Secure Comms: Form available in bottom section.`
        ]
      };

    case 'date':
      return {
        type: 'output',
        content: [`CURRENT SOC TIME: ${new Date().toUTCString()} (Epoch: ${Date.now()})`]
      };

    case 'sudo':
      return {
        type: 'output',
        content: [
          `[!] cyberdude is not in the sudoers file. This incident will be reported to SOC Admins.`,
          `[!] Intrusion warning logged in audit log.`
        ]
      };

    case 'clear':
      return {
        type: 'action',
        action: 'CLEAR'
      };

    case 'echo':
      return {
        type: 'output',
        content: [args.join(' ')]
      };

    case '':
      return {
        type: 'output',
        content: []
      };

    default:
      return {
        type: 'output',
        content: [
          `zsh: command not found: ${command}`,
          `Type 'help' to inspect available cybersecurity SOC commands.`
        ]
      };
  }
};
