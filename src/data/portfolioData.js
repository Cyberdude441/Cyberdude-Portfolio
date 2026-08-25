export const personalInfo = {
  name: "Soumava Das",
  handle: "Cyberdude441",
  status: "SYSTEM ONLINE",
  securityClearance: "TOP SECRET // SOC-L4",
  defconLevel: 5,
  location: "Bhubaneswar, Odisha, India",
  phone: "+91 7001515109",
  affiliation: "B.Tech CSE @ KIIT University (2024 - 2028)",
  cgpa: "8.4",
  schooling: {
    school: "Memari V.M. Institution, Unit-1",
    class12: "93%",
    class10: "95.71%"
  },
  roles: [
    "Cybersecurity Researcher",
    "Digital Forensics Analyst",
    "Threat Intelligence Enthusiast",
    "Penetration Tester"
  ],
  heroTypingSequence: [
    "Initializing Security Profile...",
    "Loading Threat Intelligence...",
    "Scanning Perimeter Defense...",
    "Access Granted ✓"
  ],
  bio: "Cybersecurity undergraduate with hands-on experience in penetration testing, vulnerability assessment, digital forensics, and threat intelligence across four internships. Skilled in SIEM monitoring, OSINT reconnaissance, MITRE ATT&CK mapping, and incident response. Active CTF competitor (TryHackMe Top 7%, picoCTF Global Rank 526).",
  socials: {
    github: "https://github.com/Cyberdude441",
    linkedin: "https://www.linkedin.com/in/soumava-das-267999332",
    email: "soumavadas2005@gmail.com",
    tryhackme: "https://tryhackme.com/p/imcyberdude",
    cylab: "https://learn.cylabacademy.org/users/cyberdude441",
    picoctf: "https://learn.cylabacademy.org/users/cyberdude441",
    phone: "+91 7001515109"
  },
  stats: [
    { label: "Threat Hunting Hours", value: "1,850+" },
    { label: "SOC IOCs Analyzed", value: "14,200+" },
    { label: "CTF Challenges Solved", value: "180+" },
    { label: "Global picoCTF Rank", value: "#526" },
    { label: "TryHackMe Percentile", value: "Top 7%" }
  ]
};

export const socDashboardCards = [
  {
    id: "threat-intel",
    title: "Threat Intelligence",
    status: "ACTIVE",
    statusColor: "matrix",
    metric: "98.4% Confidence",
    description: "Real-time threat feed ingestion, MITRE ATT&CK framework mapping, dynamic IOC triaging, and adversary behavioral analytics.",
    icon: "ShieldAlert",
    pulseRate: "1.2s",
    telemetry: ["Feeds: 14 Live", "YARA Rules: 340+", "Malware Heuristics: OK"]
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics",
    status: "READY",
    statusColor: "cyan",
    metric: "DFIR Pipelines",
    description: "Autopsy, FTK, Cellebrite UFED, Magnet AXIOM, ALEAPP, iLEAPP mobile forensics, and chain-of-custody preservation.",
    icon: "Fingerprint",
    pulseRate: "2.0s",
    telemetry: ["Memory Parser: v3", "Chain of Custody: SHA-256", "Mobile Forensics: Synced"]
  },
  {
    id: "osint-recon",
    title: "OSINT Reconnaissance",
    status: "ONLINE",
    statusColor: "cyan",
    metric: "Recon Framework",
    description: "Multi-threaded reconnaissance using Google Dorking, Shodan, CRT.sh, PhoneInfoga, DeHashed, and FOFA.",
    icon: "Radar",
    pulseRate: "1.5s",
    telemetry: ["Shodan API: OK", "DeHashed / FOFA: Ready", "CRT.sh Harvester: Armed"]
  },
  {
    id: "security-research",
    title: "Security Research",
    status: "ACTIVE",
    statusColor: "purple",
    metric: "CVE Tracking",
    description: "Vulnerability assessments using Burp Suite & Metasploit, OWASP Top 10 remediation, and bug bounty research.",
    icon: "Cpu",
    pulseRate: "2.4s",
    telemetry: ["Burp Scanner: Idle", "OWASP Matrix: Updated", "Zero-day Sandbox: Live"]
  }
];

export const skillCategories = [
  {
    name: "Offensive Security & Pentesting",
    category: "offensive",
    color: "cyan",
    description: "Active vulnerability discovery, network exploitation, and attack simulation methodologies.",
    skills: [
      { name: "Burp Suite Pro", level: 94, tag: "Web Pentest" },
      { name: "Wireshark", level: 92, tag: "Packet Analysis" },
      { name: "Nmap & Port Scanners", level: 96, tag: "Reconnaissance" },
      { name: "Metasploit Framework", level: 88, tag: "Exploit Dev" },
      { name: "Kali Linux", level: 96, tag: "Security OS" },
      { name: "OWASP Top 10 Remediation", level: 95, tag: "AppSec" },
      { name: "Penetration Testing & Bug Bounty", level: 90, tag: "VAPT" }
    ]
  },
  {
    name: "Digital & Mobile Forensics",
    category: "dfir",
    color: "matrix",
    description: "Deep disk extraction, mobile triage, and forensic evidence analysis.",
    skills: [
      { name: "Autopsy", level: 94, tag: "Disk Forensics" },
      { name: "FTK (Forensic Toolkit)", level: 90, tag: "Evidence Analysis" },
      { name: "Cellebrite UFED", level: 86, tag: "Mobile Forensics" },
      { name: "Magnet AXIOM", level: 88, tag: "Artifact Recovery" },
      { name: "ALEAPP & iLEAPP", level: 85, tag: "Mobile DFIR" }
    ]
  },
  {
    name: "Threat Intelligence & SOC",
    category: "threat-intel",
    color: "purple",
    description: "Proactive adversary attribution, telemetry parsing, and defensive architecture.",
    skills: [
      { name: "MITRE ATT&CK Framework", level: 95, tag: "Adversary TTPs" },
      { name: "MISP Threat Sharing", level: 88, tag: "Threat Intel" },
      { name: "SIEM Monitoring & Logs", level: 92, tag: "Log Correlation" },
      { name: "IOC Mapping & Analysis", level: 94, tag: "Incident Response" },
      { name: "Threat Hunting", level: 90, tag: "SOC Analysis" },
      { name: "Incident Detection Workflows", level: 92, tag: "SecOps" }
    ]
  },
  {
    name: "OSINT Reconnaissance",
    category: "osint",
    color: "cyan",
    description: "Automated reconnaissance, leak analysis, and open-source intelligence collection.",
    skills: [
      { name: "Google Dorking", level: 96, tag: "Advanced Search" },
      { name: "Shodan", level: 94, tag: "IoT / Infrastructure" },
      { name: "CRT.sh (Cert Logs)", level: 90, tag: "Subdomain Enumeration" },
      { name: "PhoneInfoga", level: 88, tag: "Telecom OSINT" },
      { name: "DeHashed & Breach Intel", level: 92, tag: "Credential Auditing" },
      { name: "FOFA Search Engine", level: 89, tag: "Cyberspace Mapping" }
    ]
  },
  {
    name: "Programming & Languages",
    category: "programming",
    color: "matrix",
    description: "Authoring automation scripts, API monitors, and systems software.",
    skills: [
      { name: "Python", level: 95, tag: "Primary Lang" },
      { name: "C & C++", level: 86, tag: "Systems" },
      { name: "Java", level: 82, tag: "OOP" },
      { name: "JavaScript", level: 88, tag: "Web" },
      { name: "HTML & CSS", level: 90, tag: "Frontend" },
      { name: "SQL", level: 88, tag: "Database" }
    ]
  },
  {
    name: "Cloud & DevOps",
    category: "cloud",
    color: "purple",
    description: "Virtualization, cloud infrastructure, and containerized security pipelines.",
    skills: [
      { name: "Google Cloud Platform (GCP)", level: 88, tag: "Cloud Security" },
      { name: "Docker", level: 90, tag: "Containers" },
      { name: "Git & GitHub", level: 94, tag: "Version Control" },
      { name: "VMware & VirtualBox", level: 92, tag: "Virtualization" }
    ]
  }
];

export const projects = [
  {
    id: "brute-force-defense",
    title: "Brute Force Defense System",
    category: "Security Automation",
    badge: "Active Defense",
    color: "matrix",
    summary: "Built an ML-based rate-limiting system that reduced brute-force login attempts by 94% using adaptive throttling and socket inspection.",
    description: "An automated security system integrating ML-based rate-limiting with hardware sensor/controller telemetry to identify and throttle anomalous authentication spikes in real-time, reducing brute-force login exposure by 94%.",
    technologies: ["Python", "Arduino", "Flask", "Machine Learning", "Netfilter"],
    highlights: [
      "Reduced brute-force login attempts by 94% through ML-driven adaptive rate-limiting",
      "Arduino hardware telemetry integration for physical defense triggers",
      "Lightweight Flask microservice with sub-millisecond response",
      "Automated IP ban list and anomalous telemetry exporter"
    ],
    github: "https://github.com/Cyberdude441/Brute-Force-Defense-System",
    demo: "https://defense.cyberdude.dev",
    stars: 42,
    forks: 11
  },
  {
    id: "cyber-sentinel-labs",
    title: "Cyber Sentinel Labs",
    category: "Threat Monitoring Platform",
    badge: "Flagship SOC Project",
    color: "cyan",
    summary: "Developed a containerized threat-monitoring platform with real-time IOC mapping and MITRE ATT&CK correlation.",
    description: "A distributed, containerized threat monitoring platform utilizing Docker and SIEM pipelines to capture adversary probing, map indicators of compromise (IOCs), and categorize attack vectors against the MITRE ATT&CK matrix.",
    technologies: ["Docker", "MongoDB", "SIEM", "Python", "Elasticsearch", "MITRE ATT&CK"],
    highlights: [
      "Containerized distributed sensor deployment using Docker",
      "Real-time IOC mapping and threat categorization",
      "Integrated SIEM logging and event stream analytics",
      "High-throughput document storage with MongoDB"
    ],
    github: "https://github.com/Cyberdude441/Cyber-Sentinel-Labs",
    demo: "https://sentinel-labs.cyberdude.dev",
    stars: 48,
    forks: 15
  },
  {
    id: "osint-toolkit",
    title: "OSINT Intelligence Toolkit",
    category: "Reconnaissance Framework",
    badge: "Threat Hunting",
    color: "purple",
    summary: "Built an automated reconnaissance tool for OSINT data collection across Shodan, DNS, and breach intelligence feeds.",
    description: "An automated open-source intelligence collection tool designed for security researchers to harvest target footprints, query Shodan host metadata, resolve DNS records, and correlate threat surface indicators.",
    technologies: ["Python", "Shodan", "BeautifulSoup", "Asyncio", "SQLite"],
    highlights: [
      "Automated target reconnaissance and Shodan infrastructure querying",
      "Multi-source OSINT aggregation for domain and IP footprints",
      "Automated structured report generation",
      "High-concurrency asynchronous scraping pipelines"
    ],
    github: "https://github.com/Cyberdude441/OSINT-Intelligence-Toolkit",
    demo: "https://osint.cyberdude.dev",
    stars: 56,
    forks: 18
  }
];

export const experienceTimeline = [
  {
    year: "2026",
    role: "Cyber Security Intern",
    company: "Amroha Police Cyber Security Internship Program (APCSIP-2026)",
    badge: "Government / Police DFIR",
    color: "cyan",
    location: "Cyber Defense",
    description: "Performed digital and mobile forensics using Autopsy, FTK, and Cellebrite UFED; mapped findings to MITRE ATT&CK framework. Conducted OSINT reconnaissance using Shodan, Google Dorking, and DeHashed.",
    accomplishments: [
      "Performed digital and mobile forensics using Autopsy, FTK, and Cellebrite UFED",
      "Mapped critical forensic findings directly to the MITRE ATT&CK framework",
      "Conducted extensive OSINT reconnaissance using Shodan, Google Dorking, and DeHashed"
    ],
    skillsUsed: ["Autopsy", "FTK", "Cellebrite UFED", "MITRE ATT&CK", "Shodan", "DeHashed", "OSINT"]
  },
  {
    year: "2025",
    role: "Cybersecurity Analyst Intern",
    company: "Redynox",
    badge: "VAPT",
    color: "matrix",
    location: "Vulnerability Assessment",
    description: "Conducted vulnerability assessments using Burp Suite and Metasploit; identified and remediated OWASP Top 10 risks across target applications.",
    accomplishments: [
      "Conducted thorough web application vulnerability assessments using Burp Suite & Metasploit",
      "Identified, documented, and remediated critical OWASP Top 10 security vulnerabilities",
      "Delivered technical remediation guidance to development teams"
    ],
    skillsUsed: ["Burp Suite", "Metasploit", "OWASP Top 10", "Vulnerability Assessment", "Penetration Testing"]
  },
  {
    year: "2025",
    role: "Cybersecurity Intern",
    company: "Pinnacle Lab",
    badge: "SecOps",
    color: "purple",
    location: "Threat Analysis",
    description: "Performed threat modeling and security configuration analysis across system environments.",
    accomplishments: [
      "Executed structured threat modeling exercises on enterprise system architectures",
      "Analyzed security configurations and identified baseline security hardening gaps",
      "Developed recommendations to mitigate lateral movement and privilege escalation"
    ],
    skillsUsed: ["Threat Modeling", "Security Configurations", "System Hardening", "Risk Assessment"]
  },
  {
    year: "2025",
    role: "SOC Intern",
    company: "The Red Users",
    badge: "SOC Operations",
    color: "cyan",
    location: "SOC Tier-1",
    description: "Monitored SIEM alerts and supported incident detection and response workflows.",
    accomplishments: [
      "Monitored live SIEM alert queues to detect anomalous security events in real-time",
      "Supported incident detection, triage, and escalation response workflows",
      "Assisted in log correlation and attack vector verification"
    ],
    skillsUsed: ["SIEM", "Incident Detection", "Response Workflows", "Log Analysis", "Threat Triage"]
  }
];

export const ctfBattlefield = {
  headline: "Cyber Battlefield & Offensive Achievements",
  tagline: "Competitive Capture The Flag (CTF) rankings, binary exploitation, and simulated real-world cyber warfare experience.",
  stats: [
    { label: "TryHackMe Global Rank", value: "Top 7%", change: "Continuous Streak", icon: "Flame", color: "matrix" },
    { label: "picoCTF Global Rank", value: "#526", change: "International Rank", icon: "Trophy", color: "cyan" },
    { label: "Ignithon Hackathon", value: "3rd Position", change: "National Podium", icon: "Award", color: "purple" },
    { label: "BIS Hackathon", value: "3rd Position", change: "National Podium", icon: "Award", color: "matrix" }
  ],
  categoriesSolved: [
    { name: "Web Exploitation (Burp Suite, OWASP Top 10, Injection)", progress: 94, count: "58 Flags" },
    { name: "Digital & Mobile Forensics (Autopsy, FTK, Cellebrite, ALEAPP)", progress: 96, count: "52 Flags" },
    { name: "OSINT & Footprinting (Shodan, Google Dorking, DeHashed)", progress: 95, count: "46 Flags" },
    { name: "Threat Intelligence & SIEM (MITRE ATT&CK, MISP, IOC)", progress: 92, count: "40 Flags" },
    { name: "Cryptography & Cipher Cracking", progress: 85, count: "34 Flags" }
  ],
  badges: [
    { name: "TryHackMe Top 7% Global", platform: "TryHackMe", tier: "Global Elite" },
    { name: "picoCTF Global Rank 526", platform: "Carnegie Mellon Univ.", tier: "International" },
    { name: "Ignithon 3rd Position", platform: "National Hackathon", tier: "Podium Finish" },
    { name: "BIS Hackathon 3rd Position", platform: "Bureau of Indian Standards", tier: "Podium Finish" }
  ]
};

export const certifications = [
  {
    id: "google-trust-sec",
    title: "Trust & Security with Google Cloud",
    issuer: "Google Cloud",
    year: "2025",
    color: "cyan",
    badge: "Cloud Security",
    description: "Cloud identity, IAM security, VPC perimeter controls, and Google Cloud security infrastructure.",
    credentialId: "GCP-TRUST-SEC-VERIFIED",
    link: "https://cloud.google.com"
  },
  {
    id: "chatgpt-simplilearn",
    title: "ChatGPT for Cybersecurity",
    issuer: "Simplilearn",
    year: "2025",
    color: "purple",
    badge: "AI Threat Modeling",
    description: "AI-driven threat hunting, automated vulnerability discovery, and prompt security controls.",
    credentialId: "SIMPLILEARN-AI-CYBER-VERIFIED",
    link: "https://simplilearn.com"
  },
  {
    id: "deloitte-sim",
    title: "Deloitte Cyber Job Simulation",
    issuer: "Deloitte / Forage",
    year: "2025",
    color: "matrix",
    badge: "Enterprise SOC",
    description: "Enterprise incident response, forensic triage, and risk communication simulation.",
    credentialId: "DELOITTE-CYBER-VERIFIED",
    link: "https://theforage.com"
  },
  {
    id: "nielit-cert",
    title: "NIELIT Cyber Security Internship",
    issuer: "Govt. of India (NIELIT)",
    year: "2024",
    color: "cyan",
    badge: "National Standard",
    description: "Network Defense, Information Security Auditing, Cryptographic protocols, and Indian IT Act standards.",
    credentialId: "NIELIT-CYBER-VERIFIED",
    link: "https://nielit.gov.in"
  },
  {
    id: "gen-ai-beginners",
    title: "Generative AI for Beginners",
    issuer: "AI Foundations",
    year: "2024",
    color: "purple",
    badge: "AI Foundations",
    description: "Foundation models, transformer architecture, prompt engineering, and safety alignments.",
    credentialId: "GENAI-BEGINNERS-VERIFIED",
    link: "https://cloud.google.com"
  }
];
