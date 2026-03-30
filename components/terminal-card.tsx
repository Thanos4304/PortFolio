"use client"

import { useEffect, useRef, useState, KeyboardEvent } from "react"
import { BentoCard } from "./bento-card"

const BOOT_LINES = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "Sairavi Ganesh Viswanathan" },
  { prompt: true, text: "cat interests.txt" },
  { prompt: false, text: "Full-Stack Dev | ML & AI | Embedded Systems" },
  { prompt: true, text: "echo $STATUS" },
  { prompt: false, text: "Open to opportunities" },
]

type Line = { prompt: boolean; text: string }

const COMMANDS: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  whoami       → who am I",
    "  skills       → my tech stack",
    "  experience   → work history",
    "  projects     → what I've built",
    "  contact      → get in touch",
    "  clear        → clear terminal",
  ],
  whoami: "Sairavi Ganesh Viswanathan — Full Stack Dev & ML Enthusiast",
  skills:
    "React · Next.js · TypeScript · Node.js · Python · PostgreSQL · TensorFlow · Angular",
  experience: [
    "→ Full Stack Developer Intern @ Enoah iSolution (Jan–May 2025)",
    "→ Image Processing Research Intern @ CSIR-CEERI (May–Aug 2024)",
  ],
  projects: [
    "→ SleepGuard — Real-time driver drowsiness detection (92-95% accuracy)",
    "→ EFRDAP — TCP congestion control algo, ~20% burst loss reduction",
  ],
  contact: "sviswanathan@hawk.illinoistech.edu | linkedin.com/in/sairaviganesh",
  clear: "__CLEAR__",
}

export function TerminalCard() {
  const [bootDone, setBootDone] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)
  const [history, setHistory] = useState<Line[]>([])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Boot sequence
  useEffect(() => {
    if (visibleLines < BOOT_LINES.length) {
      const timer = setTimeout(
        () => setVisibleLines((prev) => prev + 1),
        visibleLines % 2 === 0 ? 600 : 300
      )
      return () => clearTimeout(timer)
    } else {
      setBootDone(true)
    }
  }, [visibleLines])

  // Auto-scroll terminal container only (not the whole page)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [history, visibleLines])

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const result = COMMANDS[trimmed]

    if (trimmed === "") return

    if (result === "__CLEAR__") {
      setHistory([])
      return
    }

    const output: Line[] = [{ prompt: true, text: cmd }]

    if (!result) {
      output.push({
        prompt: false,
        text: `command not found: ${trimmed}. Type 'help' for available commands.`,
      })
    } else if (Array.isArray(result)) {
      result.forEach((line) => output.push({ prompt: false, text: line }))
    } else {
      output.push({ prompt: false, text: result })
    }

    setHistory((prev) => [...prev, ...output])
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      runCommand(input)
      setInput("")
    }
  }

  return (
    <BentoCard className="lg:col-span-1">
      {/* Title bar */}
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-2 font-mono text-[10px] text-muted-foreground">
          terminal — type &apos;help&apos; for commands
        </span>
      </div>

      {/* Output area */}
      <div
        ref={containerRef}
        className="flex max-h-52 flex-col gap-1 overflow-y-auto font-mono text-xs scrollbar-thin"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Boot sequence */}
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={`boot-${i}`} className="flex gap-2">
            {line.prompt ? (
              <>
                <span className="shrink-0 text-primary">$</span>
                <span className="text-card-foreground">{line.text}</span>
              </>
            ) : (
              <span className="pl-4 text-muted-foreground">{line.text}</span>
            )}
          </div>
        ))}

        {/* Command history */}
        {history.map((line, i) => (
          <div key={`hist-${i}`} className="flex gap-2">
            {line.prompt ? (
              <>
                <span className="shrink-0 text-primary">$</span>
                <span className="text-card-foreground">{line.text}</span>
              </>
            ) : (
              <span className="pl-4 text-muted-foreground">{line.text}</span>
            )}
          </div>
        ))}

        {/* Input line */}
        {bootDone && (
          <div className="flex gap-2 items-center">
            <span className="shrink-0 text-primary">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              className="flex-1 bg-transparent text-card-foreground outline-none caret-primary font-mono text-xs"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
            />
          </div>
        )}

        {!bootDone && (
          <div className="flex gap-2">
            <span className="text-primary">$</span>
            <span className="cursor-blink text-card-foreground">|</span>
          </div>
        )}

      </div>
    </BentoCard>
  )
}
