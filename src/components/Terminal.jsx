import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Shield, Play, RotateCcw, Copy, Check, Maximize2, Minimize2 } from 'lucide-react';
import { executeTerminalCommand } from '../data/terminalCommands';
import { cyberAudio } from '../utils/soundEffects';

export const Terminal = ({ onTriggerMatrix }) => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: [
        '┌── Cyberdude SOC Terminal [v4.8.2-kali-amd64] ──┐',
        '│ Node: SOC-NODE-01 // Operative: Soumava Das   │',
        '│ Type "help" to view available cyber commands   │',
        '└────────────────────────────────────────────────┘',
        '',
        '$ whoami',
        'Cybersecurity Researcher & DFIR Analyst [Handle: Cyberdude441]',
        '',
        '$ status',
        'DEFCON LEVEL: 5 // SYSTEM ONLINE ✓ // PERIMETER SECURED',
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState(['whoami', 'status']);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdToRun) => {
    const rawCmd = cmdToRun !== undefined ? cmdToRun : inputVal;
    if (!rawCmd.trim()) return;

    cyberAudio.playCommandExecute();

    const result = executeTerminalCommand(rawCmd);

    if (result.type === 'action') {
      if (result.action === 'CLEAR') {
        setHistory([]);
        setInputVal('');
        return;
      }
      if (result.action === 'TRIGGER_MATRIX') {
        if (onTriggerMatrix) onTriggerMatrix();
      }
    }

    setHistory(prev => [
      ...prev,
      { type: 'command', cmd: rawCmd },
      ...(result.content && result.content.length > 0 ? [{ type: 'output', content: result.content }] : [])
    ]);

    setCommandHistory(prev => [...prev, rawCmd]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    cyberAudio.playKeypress();

    if (e.key === 'Enter') {
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    }
  };

  const handleCopyLogs = () => {
    const textToCopy = history.map(item => {
      if (item.type === 'command') return `$ ${item.cmd}`;
      if (item.content) return item.content.join('\n');
      return '';
    }).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const quickCommands = ['whoami', 'skills', 'projects', 'experience', 'ctf', 'status', 'scan target.lab', 'matrix', 'clear'];

  return (
    <div className={`w-full transition-all duration-300 font-mono ${isExpanded ? 'fixed inset-4 z-50 flex flex-col bg-cyber-bg/95 backdrop-blur-xl border border-cyber-cyan/40 rounded-xl p-4 shadow-2xl' : ''}`}>
      <div className="bg-cyber-dark/95 border border-cyber-border rounded-xl shadow-2xl overflow-hidden backdrop-blur-md flex flex-col">
        {/* Terminal Header Bar */}
        <div className="bg-cyber-card/90 border-b border-cyber-border px-4 py-3 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyber-red/80 border border-cyber-red" />
            <span className="w-3 h-3 rounded-full bg-cyber-amber/80 border border-cyber-amber" />
            <span className="w-3 h-3 rounded-full bg-cyber-matrix/80 border border-cyber-matrix" />
            <div className="h-4 w-[1px] bg-cyber-border mx-2" />
            <div className="flex items-center gap-1.5 text-xs text-cyber-cyan font-medium">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span className="tracking-wide">cyberdude@soc-core:~#</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLogs}
              title="Copy Terminal Logs"
              className="p-1.5 text-slate-400 hover:text-cyber-cyan rounded bg-cyber-dark/60 hover:bg-cyber-cyan/10 transition-colors text-xs flex items-center gap-1"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-cyber-matrix" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline text-[11px]">{isCopied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={() => setHistory([])}
              title="Clear Buffer"
              className="p-1.5 text-slate-400 hover:text-cyber-cyan rounded bg-cyber-dark/60 hover:bg-cyber-cyan/10 transition-colors text-xs flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Clear</span>
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? "Collapse" : "Maximize"}
              className="p-1.5 text-slate-400 hover:text-cyber-cyan rounded bg-cyber-dark/60 hover:bg-cyber-cyan/10 transition-colors text-xs"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="bg-cyber-darker/70 border-b border-cyber-border/60 px-4 py-2 flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
          <span className="text-slate-500 font-mono text-[10px] uppercase tracking-wider whitespace-nowrap mr-1">QUICK CMDS:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-cyber-card/80 hover:bg-cyber-cyan/15 text-slate-300 hover:text-cyber-cyan border border-cyber-border hover:border-cyber-cyan/40 transition-all font-mono whitespace-nowrap"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Screen Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className={`p-4 sm:p-5 overflow-y-auto text-xs sm:text-sm leading-relaxed space-y-2 scanline-overlay cursor-text ${isExpanded ? 'h-full flex-1' : 'h-[360px] sm:h-[420px]'}`}
        >
          {history.map((block, i) => (
            <div key={i} className="space-y-1">
              {block.type === 'command' && (
                <div className="flex items-center gap-2 text-cyber-cyan font-semibold">
                  <span className="text-cyber-matrix">cyberdude@soc:~$</span>
                  <span>{block.cmd}</span>
                </div>
              )}
              {block.content && block.content.map((line, j) => (
                <div
                  key={j}
                  className={`font-mono ${
                    line.startsWith('[+]') || line.startsWith('✓') || line.includes('ONLINE')
                      ? 'text-cyber-matrix'
                      : line.startsWith('[!]') || line.includes('WARNING') || line.includes('error')
                      ? 'text-cyber-red'
                      : line.startsWith('[*]') || line.startsWith('OPERATIVE:') || line.startsWith('CLEARANCE:')
                      ? 'text-cyber-cyan'
                      : line.startsWith('┌') || line.startsWith('│') || line.startsWith('└') || line.startsWith('===')
                      ? 'text-cyber-purple font-semibold'
                      : 'text-slate-300'
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-1 text-cyber-cyan">
            <span className="text-cyber-matrix font-semibold">cyberdude@soc:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-cyber-text focus:outline-none font-mono text-xs sm:text-sm caret-cyber-cyan"
              placeholder="type 'help', 'skills', 'projects', 'status'..."
              autoFocus
            />
            <span className="w-2 h-4 bg-cyber-cyan animate-pulse inline-block" />
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Footer Info */}
        <div className="bg-cyber-card/70 border-t border-cyber-border px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-matrix animate-pulse" />
            <span className="font-mono text-cyber-matrix">STATUS: READY FOR INPUT</span>
          </div>
          <span className="font-mono text-slate-500">SESSION: TLS-1.3-SECURED</span>
        </div>
      </div>
    </div>
  );
};
