"use client";

import { MockTerminal } from "@/components/MockTerminal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <MockTerminal />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Mock Terminal Demo
        </h1>
        <p className="text-center text-muted-foreground mb-4">
          Press <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">/</kbd> to open the terminal
        </p>
        <p className="text-center text-muted-foreground">
          Press <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">Esc</kbd> to close it
        </p>
        
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Available Commands</h2>
          <div className="grid gap-2 text-sm">
            <div className="flex gap-4">
              <code className="font-mono text-primary">help</code>
              <span className="text-muted-foreground">Show all available commands</span>
            </div>
            <div className="flex gap-4">
              <code className="font-mono text-primary">ls</code>
              <span className="text-muted-foreground">List directory contents</span>
            </div>
            <div className="flex gap-4">
              <code className="font-mono text-primary">cd [dir]</code>
              <span className="text-muted-foreground">Change directory</span>
            </div>
            <div className="flex gap-4">
              <code className="font-mono text-primary">cat [file]</code>
              <span className="text-muted-foreground">Display file contents</span>
            </div>
            <div className="flex gap-4">
              <code className="font-mono text-primary">neofetch</code>
              <span className="text-muted-foreground">Display system info</span>
            </div>
            <div className="flex gap-4">
              <code className="font-mono text-primary">cowsay [msg]</code>
              <span className="text-muted-foreground">Have a cow say something</span>
            </div>
            <div className="flex gap-4">
              <code className="font-mono text-primary">git status</code>
              <span className="text-muted-foreground">Show git status</span>
            </div>
            <div className="flex gap-4">
              <code className="font-mono text-primary">npm install</code>
              <span className="text-muted-foreground">Install dependencies</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
