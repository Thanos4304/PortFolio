"use client"

import { useEffect, useState } from "react"
import { BentoCard } from "./bento-card"

const lines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "Sairavi Ganesh Viswanathan" },
  { prompt: true, text: "cat interests.txt" },
  { prompt: false, text: "Full-Stack Dev | ML & AI | Embedded Systems" },
  { prompt: true, text: "echo $STATUS" },
  { prompt: false, text: "Open to opportunities" },
]

export function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(
        () => setVisibleLines((prev) => prev + 1),
        visibleLines % 2 === 0 ? 600 : 300
      )
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  return (
    <BentoCard className="lg:col-span-1">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-2 font-mono text-[10px] text-muted-foreground">
          terminal
        </span>
      </div>
      <div className="flex flex-col gap-1 font-mono text-xs">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.prompt ? (
              <>
                <span className="shrink-0 text-primary">$</span>
                <span className="text-card-foreground">{line.text}</span>
              </>
            ) : (
              <span className="text-muted-foreground pl-4">{line.text}</span>
            )}
          </div>
        ))}
        <div className="flex gap-2">
          <span className="text-primary">$</span>
          <span className="cursor-blink text-card-foreground">|</span>
        </div>
      </div>
    </BentoCard>
  )
}
