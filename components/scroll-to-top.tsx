"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-background/80 text-primary shadow-lg backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:scale-110"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}
