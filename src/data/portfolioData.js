export const personalInfo = {
  name: "Soumava Das",
  handle: "Cyberdude441",
  title: "Cybersecurity Researcher & Security Engineer",
  subTitle: "Digital Forensics • Threat Intelligence • Penetration Testing",
  tagline: "Building security tools, investigating threats, and exploring defensive technologies.",
  location: "Bhubaneswar, Odisha, India",
  phone: "+91 7001515109",
  email: "soumavadas2005@gmail.com",
  affiliation: "B.Tech in Computer Science & Engineering, KIIT University (2024 - 2028)",
  cgpa: "8.4 / 10.0",
  schooling: {
    institution: "Memari V.M. Institution, Unit-1",
    class12: "93%",
    class10: "95.71%"
  },
  bio: "Undergraduate computer science student specializing in cybersecurity engineering, threat intelligence, and digital forensics. Experienced across 4 security internships focusing on SIEM log correlation, vulnerability assessment (OWASP Top 10), OSINT reconnaissance, and memory/mobile artifact analysis.",
  socials: {
    github: "https://github.com/Cyberdude441",
    linkedin: "https://www.linkedin.com/in/soumava-das-267999332",
    email: "soumavadas2005@gmail.com",
    tryhackme: "https://tryhackme.com/p/imcyberdude",
    cylab: "https://learn.cylabacademy.org/users/cyberdude441",
    phone: "+91 7001515109"
  },
  metrics: [
    { label: "Industry Internships", value: "4 Completed" },
    { label: "picoCTF International Rank", value: "#526" },
    { label: "TryHackMe Global", value: "Top 7%" },
    { label: "Academic CGPA", value: "8.4 / 10" }
  ]
};

export const caseStudyProjects = [
  {
    id: "brute-force-defense",
    title: "Brute Force Defense System",
    category: "Intrusion Prevention & Automation",
    domain: "Network Security & Active Defense",
    overview: "An autonomous intrusion mitigation framework designed to identify and throttle coordinated credential-stuffing attacks in real-time.",
    problem: "Traditional rate limiters struggle with distributed low-and-slow authentication attacks and often impose high false-positive overhead on genuine users.",
    solution: "Engineered an ML-driven adaptive rate-limiting engine integrated with hardware sensor/controller telemetry and Netfilter queues to dynamically throttle malicious source sockets while preserving legitimate user sessions.",
    impact: "Successfully reduced brute-force login exposure by 94% during simulated high-concurrency attack tests.",
    technologies: ["Python", "Machine Learning", "Arduino", "Flask", "Netfilter / Iptables", "Prometheus"],
    architecture: [
      "Sub-millisecond packet inspection via low-level socket queues",
      "Adaptive exponential backoff tarpit consuming malicious socket pools",
      "Hardware telemetry alerts for physical intrusion triggers",
      "Automated IP ban list synchronization"
    ],
    github: "https://github.com/Cyberdude441/Brute-Force-Defense-System",
    demo: "https://defense.cyberdude.dev"
  },
  {
    id: "cyber-sentinel-labs",
    title: "Cyber Sentinel Labs",
    category: "Threat Monitoring Platform",
    domain: "SOC Telemetry & Detection Engineering",
    overview: "A distributed containerized honeypot system designed to capture active adversary probing, extract IOCs, and correlate attacks with MITRE ATT&CK.",
    problem: "Security teams often lack early-warning visibility into automated scanning sweeps and zero-day probing before attacks reach internal production endpoints.",
    solution: "Constructed a multi-container threat telemetry pipeline using Docker and SIEM log forwarders that ingests unsolicited network traffic, extracts attack signatures, and correlates them with adversary techniques.",
    impact: "Streamlined threat triage by categorizing over 14,000+ indicators of compromise (IOCs) into actionable defense feeds.",
    technologies: ["Docker", "MongoDB", "SIEM (ELK)", "Python", "Elasticsearch", "MITRE ATT&CK"],
    architecture: [
      "Containerized distributed sensor nodes for isolated honeypot deployments",
      "Real-time event stream parsing and GeoIP/ASN enrichment",
      "Integrated SIEM correlation rules for suspicious command sequences",
      "High-throughput document storage with MongoDB"
    ],
    github: "https://github.com/Cyberdude441/Cyber-Sentinel-Labs",
    demo: "https://sentinel-labs.cyberdude.dev"
  },
  {
    id: "osint-toolkit",
    title: "OSINT Intelligence Toolkit",
    category: "Reconnaissance Framework",
    domain: "Threat Intelligence & Surface Mapping",
    overview: "An automated open-source intelligence collection framework for passive attack surface discovery and credential leak auditing.",
    problem: "Manual security reconnaissance across disparate OSINT databases (Shodan, Certificate Transparency, DNS records) is time-consuming and difficult to aggregate.",
    solution: "Built a high-concurrency asynchronous reconnaissance pipeline that aggregates target domain footprints, certificate logs, subdomains, and Shodan service banners into structured intelligence dossiers.",
    impact: "Accelerated external attack surface mapping by 10x, enabling rapid identification of exposed legacy services and forgotten subdomains.",
    technologies: ["Python", "Asyncio", "Shodan API", "BeautifulSoup", "SQLite", "NetworkX"],
    architecture: [
      "Asynchronous parallel querying across 10+ open intelligence sources",
      "Automated subdomain harvesting and DNS resolution validation",
      "Structured JSON and PDF intelligence dossier exports",
      "Relationship mapping between domains, IP ranges, and SSL certificates"
    ],
    github: "https://github.com/Cyberdude441/OSINT-Intelligence-Toolkit",
    demo: "https://osint.cyberdude.dev"
  }
];

export const experienceTimeline = [
  {
    period: "2026",
    role: "Cyber Security Intern",
    company: "Amroha Police Cyber Security Internship Program (APCSIP-2026)",
    type: "Government / Law Enforcement DFIR",
    location: "Cyber Crime Unit",
    summary: "Conducted digital and mobile forensic investigations on seized devices and performed open-source intelligence operations.",
    contributions: [
      "Analyzed digital evidence and extracted disk/mobile forensic artifacts using Autopsy, FTK Imager, and Cellebrite UFED",
      "Mapped critical forensic findings and adversary procedures directly to the MITRE ATT&CK framework",
      "Executed OSINT investigations to track threat actors using Shodan, Google Dorking, and DeHashed"
    ],
    skills: ["Autopsy", "FTK Imager", "Cellebrite UFED", "MITRE ATT&CK", "Shodan", "DeHashed", "DFIR"]
  },
  {
    period: "2025",
    role: "Cybersecurity Analyst Intern",
    company: "Redynox",
    type: "Vulnerability Assessment & Pentesting",
    location: "Security Assessment Team",
    summary: "Conducted web application vulnerability assessments and assisted in securing staging platforms against OWASP Top 10 risks.",
    contributions: [
      "Performed comprehensive vulnerability assessments using Burp Suite Pro, Nmap, and Metasploit",
      "Identified and documented authentication flaws, SQL injections, and CSRF vulnerabilities across client applications",
      "Authored remediation guidance and collaborated with software engineers to implement defensive controls"
    ],
    skills: ["Burp Suite", "OWASP Top 10", "Metasploit", "VAPT", "Web Security", "Penetration Testing"]
  },
  {
    period: "2025",
    role: "Cybersecurity Intern",
    company: "Pinnacle Lab",
    type: "Threat Analysis & SecOps",
    location: "Security Engineering",
    summary: "Performed threat modeling exercises and analyzed system security configurations.",
    contributions: [
      "Conducted structured threat modeling to identify potential adversary lateral movement pathways",
      "Evaluated system configurations and identified baseline security gaps against CIS benchmarks",
      "Developed hardening checklists for Linux and cloud infrastructure deployments"
    ],
    skills: ["Threat Modeling", "Security Configurations", "System Hardening", "Risk Assessment"]
  },
  {
    period: "2025",
    role: "SOC Intern",
    company: "The Red Users",
    type: "Security Operations Center",
    location: "SOC Tier-1",
    summary: "Monitored SIEM alert queues and supported incident detection and response triage.",
    contributions: [
      "Monitored live SIEM telemetry feeds to identify unauthorized authentication attempts and anomalous spikes",
      "Supported incident response workflows by performing initial alert triage and log correlation",
      "Documented standard operating procedures for phishing analysis and suspicious process execution"
    ],
    skills: ["SIEM", "Incident Detection", "Response Workflows", "Log Analysis", "Threat Triage"]
  }
];

export const skillCategories = [
  {
    title: "Security & Penetration Testing",
    skills: ["Burp Suite Pro", "Wireshark", "Nmap", "Metasploit", "Kali Linux", "OWASP Top 10", "Vulnerability Assessment", "Bug Bounty"]
  },
  {
    title: "Digital Forensics & Incident Response",
    skills: ["Autopsy", "FTK Imager", "Cellebrite UFED", "Magnet AXIOM", "ALEAPP & iLEAPP", "Memory Forensics", "Evidence Chain of Custody"]
  },
  {
    title: "Threat Intelligence & SOC",
    skills: ["MITRE ATT&CK Framework", "MISP", "SIEM Monitoring", "IOC Mapping", "Threat Hunting", "Incident Response Workflows"]
  },
  {
    title: "OSINT & Surface Mapping",
    skills: ["Google Dorking", "Shodan", "CRT.sh", "PhoneInfoga", "DeHashed", "FOFA Search", "Asset Discovery"]
  },
  {
    title: "Programming & Systems",
    skills: ["Python", "C / C++", "Java", "JavaScript", "HTML / CSS", "SQL", "Bash Scripting"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Google Cloud Platform (GCP)", "Docker", "Git & GitHub", "VMware", "VirtualBox", "Linux Hardening"]
  }
];

export const certifications = [
  {
    title: "Trust & Security with Google Cloud",
    issuer: "Google Cloud",
    year: "2025",
    credentialId: "GCP-TRUST-SEC-VERIFIED",
    description: "Cloud identity management, IAM least-privilege architecture, VPC security controls, and cloud audit logging."
  },
  {
    title: "ChatGPT for Cybersecurity",
    issuer: "Simplilearn",
    year: "2025",
    credentialId: "SIMPLILEARN-AI-CYBER-VERIFIED",
    description: "AI-assisted threat hunting, automated code vulnerability analysis, and LLM security controls."
  },
  {
    title: "Deloitte Cyber Job Simulation",
    issuer: "Deloitte / Forage",
    year: "2025",
    credentialId: "DELOITTE-CYBER-VERIFIED",
    description: "Enterprise incident response, adversary movement analysis, risk assessment, and executive communication."
  },
  {
    title: "NIELIT Cyber Security Internship",
    issuer: "Govt. of India (NIELIT)",
    year: "2024",
    credentialId: "NIELIT-CYBER-VERIFIED",
    description: "Certified training in Network Defense, Information Security Auditing, and Cryptographic standards."
  },
  {
    title: "Generative AI for Beginners",
    issuer: "AI Foundations",
    year: "2024",
    credentialId: "GENAI-BEGINNERS-VERIFIED",
    description: "Core architectural foundations of generative models, tokenization, and AI security alignments."
  }
];

export const competitiveRankings = [
  {
    title: "TryHackMe Global Ranking",
    rank: "Top 7%",
    detail: "Continuous platform streak across defensive and offensive rooms",
    link: "https://tryhackme.com/p/imcyberdude"
  },
  {
    title: "picoCTF / CyLab Academy",
    rank: "Global Rank #526",
    detail: "Carnegie Mellon University competitive cybersecurity leaderboard",
    link: "https://learn.cylabacademy.org/users/cyberdude441"
  },
  {
    title: "Ignithon Hackathon",
    rank: "3rd Position",
    detail: "National cybersecurity and software innovation competition",
    link: null
  },
  {
    title: "BIS Hackathon",
    rank: "3rd Position",
    detail: "Bureau of Indian Standards cybersecurity challenge",
    link: null
  }
];
