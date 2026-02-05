import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CommandHistory {
  command: string;
  output: string;
  timestamp: Date;
}

const MOCK_FILE_SYSTEM: Record<string, string[]> = {
  '~': ['Documents', 'Downloads', 'Projects', 'Desktop', '.bashrc', '.gitconfig'],
  '~/Documents': ['resume.pdf', 'notes.txt', 'report.docx'],
  '~/Downloads': ['image.png', 'setup.exe', 'data.csv'],
  '~/Projects': ['eddy-data-blueprint', 'portfolio', 'analytics-dashboard'],
  '~/Projects/eddy-data-blueprint': ['src', 'public', 'package.json', 'README.md', 'vite.config.ts'],
  '~/Desktop': ['shortcuts.txt', 'todo.md'],
};

const MOCK_COMMANDS: Record<string, (args: string[], currentDir: string) => string> = {
  help: () => `Available commands:
  help          - Show this help message
  ls            - List directory contents
  cd <dir>      - Change directory
  pwd           - Print working directory
  echo <text>   - Print text to terminal
  cat <file>    - Display file contents
  clear         - Clear the terminal
  date          - Show current date and time
  whoami        - Display current user
  uname         - System information
  history       - Show command history
  neofetch      - Display system info with ASCII art
  cowsay <msg>  - Have a cow say your message
  fortune       - Random fortune cookie
  ping <host>   - Mock ping command
  npm <cmd>     - Mock npm commands
  git <cmd>     - Mock git commands
  python        - Mock python interpreter`,
  
  ls: (args, currentDir) => {
    const dir = args[0] ? (args[0].startsWith('~') ? args[0] : `${currentDir}/${args[0]}`.replace('//', '/')) : currentDir;
    const contents = MOCK_FILE_SYSTEM[dir];
    if (!contents) return `ls: cannot access '${dir}': No such file or directory`;
    return contents.join('  ');
  },
  
  cd: (args, currentDir) => {
    if (!args[0] || args[0] === '~') return '~';
    if (args[0] === '..') {
      const parts = currentDir.split('/');
      parts.pop();
      return parts.length === 0 ? '~' : parts.join('/') || '~';
    }
    const newDir = args[0].startsWith('~') ? args[0] : `${currentDir}/${args[0]}`.replace('//', '/');
    if (MOCK_FILE_SYSTEM[newDir]) return newDir;
    return `cd: ${args[0]}: No such file or directory`;
  },
  
  pwd: (_, currentDir) => currentDir.replace('~', '/home/user'),
  
  echo: (args) => args.join(' '),
  
  cat: (args) => {
    if (!args[0]) return 'cat: missing file operand';
    const fileName = args[0];
    const mockFiles: Record<string, string> = {
      'README.md': `# Eddy Data Blueprint

A personal portfolio and data engineering showcase.

## Features
- Data Engineering Solutions
- Analytics Dashboard
- Technical Advisory Services

## Getting Started
\`\`\`bash
npm install
npm run dev
\`\`\``,
      'package.json': `{
  "name": "eddy-data-blueprint",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}`,
      '.bashrc': `# ~/.bashrc
export PATH=$PATH:/usr/local/bin
alias ll='ls -la'
alias gs='git status'`,
      'notes.txt': `Meeting notes from last week:
- Discussed data pipeline architecture
- Reviewed analytics dashboard mockups
- Planned Q1 deliverables`,
      '.gitconfig': `[user]
  name = Eddy
  email = eddy@example.com
[core]
  editor = vim`,
    };
    return mockFiles[fileName] || `cat: ${fileName}: No such file or directory`;
  },
  
  clear: () => '__CLEAR__',
  
  date: () => new Date().toString(),
  
  whoami: () => 'eddy',
  
  uname: (args) => {
    if (args.includes('-a')) {
      return 'Linux eddy-workstation 5.15.0-generic #1 SMP x86_64 GNU/Linux';
    }
    return 'Linux';
  },
  
  history: () => '__HISTORY__',
  
  neofetch: () => `
       _,met$$$$$gg.          eddy@workstation
    ,g$$$$$$$$$$$$$$$P.       -----------------
  ,g$$P"     """Y$$."$.        OS: Debian GNU/Linux 11
 ,$$P'              \`$$$.      Host: Virtual Machine
',$$P       ,ggs.     \`$$b:    Kernel: 5.15.0-generic
\`d$$'     ,$P"'   .    $$$    Uptime: 4 hours, 23 mins
 $$P      d$'     ,    $$P    Packages: 1847 (dpkg)
 $$:      $$.   -    ,d$$'    Shell: bash 5.1.4
 $$;      Y$b._   _,d$P'      Terminal: MockTerminal v1.0
 Y$$.    \`.\`"Y$$$$P"'         CPU: Intel i7-9700K @ 3.6GHz
 \`$$b      "-.__              Memory: 4.2 GiB / 16 GiB
  \`Y$$                        Disk: 127G / 512G (25%)
   \`Y$$.
     \`$$b.
       \`Y$$b.
          \`"Y$b._
              \`"""
`,
  
  cowsay: (args) => {
    const message = args.join(' ') || 'Moo!';
    const border = '-'.repeat(message.length + 2);
    return `
 ${border}
< ${message} >
 ${border}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
  },
  
  fortune: () => {
    const fortunes = [
      'A journey of a thousand miles begins with a single step.',
      'The best time to plant a tree was 20 years ago. The second best time is now.',
      'Code is like humor. When you have to explain it, it\'s bad.',
      'First, solve the problem. Then, write the code.',
      'Debugging is twice as hard as writing the code in the first place.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    ];
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  },
  
  ping: (args) => {
    if (!args[0]) return 'ping: usage error: Destination address required';
    const host = args[0];
    const times = [12.3, 14.1, 11.8, 13.5];
    return `PING ${host} (93.184.216.34) 56(84) bytes of data.
64 bytes from ${host}: icmp_seq=1 ttl=56 time=${times[0]} ms
64 bytes from ${host}: icmp_seq=2 ttl=56 time=${times[1]} ms
64 bytes from ${host}: icmp_seq=3 ttl=56 time=${times[2]} ms
64 bytes from ${host}: icmp_seq=4 ttl=56 time=${times[3]} ms

--- ${host} ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = ${Math.min(...times)}/${(times.reduce((a, b) => a + b) / times.length).toFixed(1)}/${Math.max(...times)}/0.892 ms`;
  },
  
  npm: (args) => {
    const cmd = args[0];
    if (!cmd) return 'Usage: npm <command>';
    switch (cmd) {
      case 'install':
      case 'i':
        return `added 847 packages, and audited 848 packages in 12s

143 packages are looking for funding
  run \`npm fund\` for details

found 0 vulnerabilities`;
      case 'run':
        if (args[1] === 'dev') {
          return `> eddy-data-blueprint@1.0.0 dev
> vite

  VITE v5.0.0  ready in 342 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.100:5173/
  ➜  press h + enter to show help`;
        }
        return `npm ERR! Missing script: "${args[1]}"`;
      case 'start':
        return `> eddy-data-blueprint@1.0.0 start
> node server.js

Server running on port 3000`;
      default:
        return `Unknown command: "${cmd}"`;
    }
  },
  
  git: (args) => {
    const cmd = args[0];
    if (!cmd) return 'usage: git <command> [<args>]';
    switch (cmd) {
      case 'status':
        return `On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   src/components/Hero.tsx

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/components/MockTerminal.tsx

no changes added to commit`;
      case 'log':
        return `commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6 (HEAD -> main)
Author: Eddy <eddy@example.com>
Date:   ${new Date().toDateString()}

    feat: Add mock terminal component

commit b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7
Author: Eddy <eddy@example.com>
Date:   ${new Date(Date.now() - 86400000).toDateString()}

    style: Update hero section styling`;
      case 'branch':
        return `* main
  feature/analytics
  feature/dashboard
  develop`;
      default:
        return `git: '${cmd}' is not a git command.`;
    }
  },
  
  python: (args) => {
    if (args.length === 0) {
      return `Python 3.10.0 (default, Oct  4 2021, 00:00:00)
[GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> (Interactive mode not supported in mock terminal)`;
    }
    if (args[0] === '--version' || args[0] === '-V') {
      return 'Python 3.10.0';
    }
    return 'python: command execution simulated';
  },
};

export function MockTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentDir, setCurrentDir] = useState('~');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const executeCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const parts = trimmedCmd.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output = '';

    if (command === 'clear') {
      setHistory([]);
      return;
    }

    if (command === 'history') {
      output = history.map((h, i) => `  ${i + 1}  ${h.command}`).join('\n');
    } else if (command === 'cd') {
      const result = MOCK_COMMANDS.cd(args, currentDir);
      if (!result.startsWith('cd:')) {
        setCurrentDir(result);
        output = '';
      } else {
        output = result;
      }
    } else if (MOCK_COMMANDS[command]) {
      output = MOCK_COMMANDS[command](args, currentDir);
    } else {
      output = `${command}: command not found. Type 'help' for available commands.`;
    }

    setHistory(prev => [...prev, { command: trimmedCmd, output, timestamp: new Date() }]);
  }, [currentDir, history]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const commandHistory = history.filter(h => h.command);
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]?.command || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const commandHistory = history.filter(h => h.command);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]?.command || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = Object.keys(MOCK_COMMANDS);
      const match = commands.find(c => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  }, [input, history, historyIndex, executeCommand]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen) {
        const activeElement = document.activeElement;
        const isInputActive = activeElement instanceof HTMLInputElement || 
                              activeElement instanceof HTMLTextAreaElement ||
                              activeElement?.getAttribute('contenteditable') === 'true';
        
        if (!isInputActive) {
          e.preventDefault();
          setIsOpen(true);
        }
      }
      
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Terminal Window */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-[70vh] z-50 rounded-lg overflow-hidden shadow-2xl border border-zinc-700"
        role="dialog"
        aria-modal="true"
        aria-label="Mock Terminal"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
          <div className="flex gap-2">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
              aria-label="Close terminal"
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-4 text-zinc-400 text-sm font-mono">
            eddy@workstation: {currentDir}
          </span>
          <span className="ml-auto text-zinc-500 text-xs font-mono">
            Press ESC to close
          </span>
        </div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef}
          className="bg-zinc-900 overflow-y-auto p-4 font-mono text-sm h-[calc(70vh-48px)]"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Welcome message */}
          <div className="text-green-400 mb-4">
            <pre className="text-emerald-400 text-xs leading-tight">{`
  ███████╗██████╗ ██████╗ ██╗   ██╗
  ██╔════╝██╔══██╗██╔══██╗╚██╗ ██╔╝
  █████╗  ██║  ██║██║  ██║ ╚████╔╝ 
  ██╔══╝  ██║  ██║██║  ██║  ╚██╔╝  
  ███████╗██████╔╝██████╔╝   ██║   
  ╚══════╝╚═════╝ ╚═════╝    ╚═╝   
`}</pre>
            <p className="text-zinc-400 mt-2">Welcome to the Mock Terminal! Type <span className="text-emerald-400">'help'</span> to see available commands.</p>
          </div>

          {/* Command History */}
          {history.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center flex-wrap">
                <span className="text-emerald-400">eddy@workstation</span>
                <span className="text-zinc-500">:</span>
                <span className="text-blue-400">{currentDir}</span>
                <span className="text-zinc-500">$</span>
                <span className="text-zinc-200 ml-2">{item.command}</span>
              </div>
              {item.output && (
                <pre className="text-zinc-300 whitespace-pre-wrap mt-1 ml-0">{item.output}</pre>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center flex-wrap">
            <span className="text-emerald-400">eddy@workstation</span>
            <span className="text-zinc-500">:</span>
            <span className="text-blue-400">{currentDir}</span>
            <span className="text-zinc-500">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 ml-2 bg-transparent text-zinc-200 outline-none caret-emerald-400 min-w-[100px]"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </>
  );
}
