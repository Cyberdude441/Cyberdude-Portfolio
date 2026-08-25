import React, { useState, useEffect } from 'react';
import { ShieldAlert, Fingerprint, Radar, Cpu, Activity, AlertTriangle, CheckCircle, Radio, Lock, Server } from 'lucide-react';
import { socDashboardCards } from '../data/portfolioData';

export const SecurityDashboard = () => {
  const [activeCard, setActiveCard] = useState('threat-intel');
  const [livePackets, setLivePackets] = useState([
    { id: 1, time: '11:42:04', ip: '198.51.100.44', event: 'SSH Brute-Force Tarpitted', sev: 'HIGH', port: '22/TCP' },
    { id: 2, time: '11:42:12', ip: '203.0.113.89', event: 'SYN Flood Mitigated', sev: 'MED', port: '443/TCP' },
    { id: 3, time: '11:42:19', ip: '192.0.2.17', event: 'YARA Rule Match: Trojan.Heur', sev: 'CRITICAL', port: '8080/TCP' },
    { id: 4, time: '11:42:25', ip: '198.51.100.112', event: 'Directory Traversal Blocked', sev: 'LOW', port: '80/TCP' },
    { id: 5, time: '11:42:31', ip: '203.0.113.14', event: 'Memory Dump Process Parsed', sev: 'INFO', port: 'VOLATILITY' },
  ]);

  const [threatCount, setThreatCount] = useState(1420);
  const [blockedCount, setBlockedCount] = useState(8942);

  // Simulated live event feed
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIP = `${Math.floor(Math.random() * 200) + 20}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
      const events = [
        { event: 'SQLi Probe Neutralized', sev: 'HIGH', port: '443/TCP' },
        { event: 'OSINT Footprint Queried', sev: 'INFO', port: 'SHODAN' },
        { event: 'Malware Sandbox Exec Complete', sev: 'MED', port: 'CUCKOO' },
        { event: 'Volatile RAM Injection Flagged', sev: 'CRITICAL', port: 'VOLATILITY' },
        { event: 'Port 3389 RDP Sweep Blocked', sev: 'LOW', port: '3389/TCP' },
      ];
      const selected = events[Math.floor(Math.random() * events.length)];
      const now = new Date();
      const time = now.toTimeString().split(' ')[0];

      setLivePackets(prev => [
        { id: Date.now(), time, ip: randomIP, event: selected.event, sev: selected.sev, port: selected.port },
        ...prev.slice(0, 5)
      ]);

      setBlockedCount(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Fingerprint': return <Fingerprint className="w-6 h-6" />;
      case 'Radar': return <Radar className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-cyber-dark/50 relative border-t border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
              <span>// SYSTEM TELEMETRY & OPERATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Security Operations Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-cyber-card px-4 py-2 rounded-lg border border-cyber-border font-mono text-xs flex items-center gap-2">
              <span className="text-slate-400">STATUS:</span>
              <span className="text-cyber-matrix font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyber-matrix animate-ping" />
                ACTIVE SOC MONITOR
              </span>
            </div>
          </div>
        </div>

        {/* 4 Futuristic Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {socDashboardCards.map((card) => {
            const isSelected = activeCard === card.id;
            const colorClass = card.statusColor === 'matrix' 
              ? 'text-cyber-matrix border-cyber-matrix/40 bg-cyber-matrix/10'
              : card.statusColor === 'purple'
              ? 'text-cyber-purple border-cyber-purple/40 bg-cyber-purple/10'
              : 'text-cyber-cyan border-cyber-cyan/40 bg-cyber-cyan/10';

            return (
              <div
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                className={`relative rounded-xl p-6 transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isSelected
                    ? 'bg-cyber-card-hover border-cyber-cyan shadow-cyber-cyan'
                    : 'bg-cyber-card/80 border-cyber-border hover:border-cyber-cyan/50 hover:bg-cyber-card'
                }`}
              >
                {/* Glowing Corner Indicator */}
                <div className={`absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20 ${
                  card.statusColor === 'matrix' ? 'bg-cyber-matrix' : card.statusColor === 'purple' ? 'bg-cyber-purple' : 'bg-cyber-cyan'
                } blur-xl`} />

                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg border ${colorClass}`}>
                    {getIconComponent(card.icon)}
                  </div>
                  <div className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold border ${colorClass} uppercase tracking-wider`}>
                    {card.status}
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-1">
                  {card.title}
                </h3>
                <div className="text-xs font-mono text-cyber-cyan mb-3">
                  {card.metric}
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* Telemetry points */}
                <div className="pt-3 border-t border-cyber-border/70 space-y-1.5 font-mono text-[11px] text-slate-400">
                  {card.telemetry.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-cyber-matrix text-[10px]">▶</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Threat Telemetry Feed & Radar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Live Packet Log Stream */}
          <div className="lg:col-span-8 bg-cyber-card border border-cyber-border rounded-xl p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-cyber-border mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Radio className="w-4 h-4 text-cyber-cyan animate-pulse" />
                <span className="font-bold text-white">LIVE INCIDENT & THREAT FEED</span>
                <span className="text-[10px] text-slate-500 font-normal">| Real-time Socket Stream</span>
              </div>
              <span className="text-[11px] font-mono text-cyber-matrix bg-cyber-matrix/10 px-2 py-0.5 rounded border border-cyber-matrix/20">
                STREAMING
              </span>
            </div>

            <div className="space-y-2 font-mono text-xs overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 border-b border-cyber-border/50 text-[11px]">
                    <th className="pb-2 font-medium">TIMESTAMP</th>
                    <th className="pb-2 font-medium">SOURCE IP</th>
                    <th className="pb-2 font-medium">EVENT DESCRIPTION</th>
                    <th className="pb-2 font-medium">PORT</th>
                    <th className="pb-2 font-medium text-right">SEVERITY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cyber-border/30">
                  {livePackets.map((pkt) => (
                    <tr key={pkt.id} className="hover:bg-cyber-dark/40 transition-colors">
                      <td className="py-2.5 text-slate-400 text-[11px] whitespace-nowrap">{pkt.time}</td>
                      <td className="py-2.5 text-cyber-cyan font-semibold whitespace-nowrap">{pkt.ip}</td>
                      <td className="py-2.5 text-slate-200">{pkt.event}</td>
                      <td className="py-2.5 text-slate-400 text-[11px]">{pkt.port}</td>
                      <td className="py-2.5 text-right">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          pkt.sev === 'CRITICAL'
                            ? 'bg-cyber-red/20 text-cyber-red border border-cyber-red/40'
                            : pkt.sev === 'HIGH'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : pkt.sev === 'MED'
                            ? 'bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/40'
                            : 'bg-cyber-matrix/20 text-cyber-matrix border border-cyber-matrix/40'
                        }`}>
                          {pkt.sev}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Active Defense Metrics & Radar Scan */}
          <div className="lg:col-span-4 bg-cyber-card border border-cyber-border rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-cyber-border mb-4">
                <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-cyber-purple" />
                  DEFENSE METRICS
                </span>
                <span className="text-[10px] font-mono text-cyber-cyan">NODE-01</span>
              </div>

              {/* Radar visualization */}
              <div className="relative w-full h-40 flex items-center justify-center my-2 overflow-hidden rounded-lg bg-cyber-darker border border-cyber-border">
                {/* Radar grid circles */}
                <div className="absolute w-32 h-32 rounded-full border border-cyber-matrix/20" />
                <div className="absolute w-20 h-20 rounded-full border border-cyber-matrix/30" />
                <div className="absolute w-8 h-8 rounded-full border border-cyber-matrix/40 bg-cyber-matrix/10" />
                
                {/* Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyber-matrix/20" />
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-cyber-matrix/20" />

                {/* Rotating sweep line */}
                <div className="absolute inset-0 flex items-center justify-center animate-radar origin-center">
                  <div className="w-1/2 h-[2px] bg-gradient-to-r from-transparent to-cyber-matrix" style={{ transformOrigin: '0% 50%', transform: 'rotate(0deg)' }} />
                </div>

                {/* Radar Blips */}
                <span className="absolute top-10 left-16 w-2 h-2 rounded-full bg-cyber-red animate-ping" />
                <span className="absolute bottom-12 right-20 w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
                <span className="absolute top-16 right-14 w-1.5 h-1.5 rounded-full bg-cyber-matrix animate-pulse" />

                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-cyber-matrix">
                  RADAR SCAN: ACTIVE
                </div>
              </div>

              {/* Counters */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 bg-cyber-dark rounded-lg border border-cyber-border">
                  <div className="text-[10px] font-mono text-slate-400">AUTOMATED BLOCKS</div>
                  <div className="text-xl font-mono font-bold text-cyber-matrix">{blockedCount.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-cyber-dark rounded-lg border border-cyber-border">
                  <div className="text-[10px] font-mono text-slate-400">IOCS INGESTED</div>
                  <div className="text-xl font-mono font-bold text-cyber-cyan">{threatCount}</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-cyber-border text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>UPTIME: 99.98%</span>
              <span className="text-cyber-matrix">ENFORCING</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
