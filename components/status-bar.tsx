"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = ["about", "experience", "projects", "skills", "contact"]

export function StatusBar() {
  const [time, setTime] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-4 py-2.5 backdrop-blur-md md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary glow-pulse" />
            <span className="font-mono text-xs text-primary">ONLINE</span>
          </div>
          <span className="text-muted-foreground">|</span>
          <span className="font-mono text-xs text-muted-foreground">
            sairavi@portfolio
          </span>
        </div>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="font-mono text-xs tabular-nums text-muted-foreground">
            {time || "--:--:--"}
          </div>
          <button
            className="flex items-center justify-center rounded p-1 text-muted-foreground transition-colors hover:text-primary md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>
      {menuOpen && (
        <div className="sticky top-[45px] z-40 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
