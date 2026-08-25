import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, ShieldAlert, Skull, Play, Zap, Check } from 'lucide-react';
import { MatrixRain } from './MatrixRain';
import { cyberAudio } from '../utils/soundEffects';

export const EasterEggTerminal = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState([
    '=====================================================',
    '  [!] SECURITY OVERRIDE TRIGGERED: CTRL + SHIFT + S  ',
    '  ACCESS LEVEL: ROOT / GODMODE PRIVILEGES GRANTED   ',
    '=====================================================',
    '[*] Initializing raw SOC packet sniffer...',
    '[*] Kernel trace enabled. Zero-day heuristics armed.',
    '[*] Type "help", "scan", "decrypt", "breach", "whoami", or "exit".',
    ''
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      cyberAudio.playAlert();
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Handle escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    cyberAudio.playCommandExecute();

    let newLogs = [`# ${cmd}`];

    switch (cmd) {
      case 'help':
        newLogs.push(
          'ROOT COMMANDS:',
          '  scan       - Trigger full subnet vulnerability & port sweep',
          '  decrypt    - Execute quantum cryptanalysis on mock hash payload',
          '  breach     - Simulate automated red-team privilege escalation attack',
          '  whoami     - Print root identity profile',
          '  clear      - Clear buffer',
          '  exit       - Close classified breach console'
        );
        break;
      case 'scan':
        newLogs.push(
          '[*] Scanning 192.168.1.0/24 subnet...',
          '[+] 192.168.1.1   - Gateway [HARDENED]',
          '[+] 192.168.1.44  - Kali Linux Security Node [CYBERDUDE441]',
          '[+] 192.168.1.108 - Simulated Honeypot Sentinel [ACTIVE]',
          '[✓] Zero unauthorized rogue endpoints detected.'
        );
        break;
      case 'decrypt':
        newLogs.push(
          '[*] Ingesting SHA-256 cipher payload: 9e107d9d372bb6826bd81d3542a419d6',
          '[*] Applying rainbow table and GPU dictionary attack...',
          '[+] KEY FOUND: "CYBER_DEFENSE_2026_SOUMAVA"',
          '[✓] Decryption successful in 0.04s.'
        );
        break;
      case 'breach':
        newLogs.push(
          '[!] Simulating Red-Team Lateral Movement...',
          '[*] Bypassing standard user tokens via CVE-2024-XXXX...',
          '[*] Injecting non-root shellcode into target daemon memory...',
          '[+] Escalated to NT AUTHORITY\\SYSTEM / UID 0 (root).',
          '[!] Simulation complete. Incident audit logged to SOC SIEM.'
        );
        break;
      case 'whoami':
        newLogs.push(
          'root@cyberdude-core [Soumava Das // Cyberdude441]',
          'Capabilities: Offensive Security, DFIR, Threat Intelligence, Automation.'
        );
        break;
      case 'clear':
        setLogs([]);
        setInputVal('');
        return;
      case 'exit':
      case 'quit':
        onClose();
        return;
      default:
        newLogs.push(`Unknown root instruction: "${cmd}". Type "help" for commands.`);
    }

    setLogs(prev => [...prev, ...newLogs]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl">
      {/* Matrix background */}
      <MatrixRain opacity={0.25} fontSize={16} color="#00ff66" />

      {/* Terminal Container */}
      <div className="relative w-full max-w-4xl h-[85vh] bg-cyber-darker/95 border-2 border-cyber-matrix rounded-2xl shadow-[0_0_50px_rgba(0,255,102,0.3)] flex flex-col overflow-hidden z-10 font-mono">
        
        {/* Header Bar */}
        <div className="bg-cyber-card/90 border-b border-cyber-matrix/50 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyber-matrix text-xs font-bold">
            <Skull className="w-4 h-4 animate-pulse text-cyber-red" />
            <span>CLASSIFIED SOC TERMINAL // OVERRIDE MODE</span>
            <span className="text-[10px] bg-cyber-matrix/20 text-cyber-matrix px-2 py-0.5 rounded border border-cyber-matrix/40">
              UID=0(ROOT)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-cyber-dark text-slate-400 hover:text-cyber-matrix border border-cyber-matrix/30 hover:border-cyber-matrix transition-all"
            title="Close (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-6 overflow-y-auto space-y-2 text-xs sm:text-sm text-cyber-matrix leading-relaxed scanline-overlay cursor-text"
        >
          {logs.map((log, index) => (
            <div
              key={index}
              className={
                log.startsWith('[!]') || log.includes('OVERRIDE') || log.includes('SECURITY')
                  ? 'text-cyber-red font-bold'
                  : log.startsWith('[+]') || log.startsWith('[✓]') || log.includes('KEY FOUND')
                  ? 'text-cyber-matrix font-bold'
                  : log.startsWith('#')
                  ? 'text-cyber-cyan font-bold'
                  : log.startsWith('===')
                  ? 'text-cyber-purple'
                  : 'text-emerald-400'
              }
            >
              {log}
            </div>
          ))}

          {/* Prompt line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 text-cyber-cyan">
            <span className="text-cyber-matrix font-bold">root@cyberdude:~#</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => {
                cyberAudio.playKeypress();
                setInputVal(e.target.value);
              }}
              className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm caret-cyber-matrix"
              placeholder="type 'scan', 'decrypt', 'breach', 'exit'..."
              autoFocus
            />
            <span className="w-2.5 h-4 bg-cyber-matrix animate-pulse inline-block" />
          </form>

          <div ref={terminalEndRef} />
        </div>

        {/* Footer Info */}
        <div className="bg-cyber-dark border-t border-cyber-matrix/40 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between">
          <span className="text-cyber-matrix">PRESS ESC TO RETURN TO PORTFOLIO</span>
          <span className="text-slate-500">ENCRYPTION: QUANTUM_SECURE</span>
        </div>

      </div>
    </div>
  );
};
