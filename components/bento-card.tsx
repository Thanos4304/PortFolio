"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  label?: string
  className?: string
  children: React.ReactNode
  id?: string
}

export function BentoCard({ label, className, children, id }: BentoCardProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "scanlines relative overflow-hidden rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30 md:p-6",
        className
      )}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {label && (
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
            {label}
          </span>
        </div>
      )}
      {children}
    </section>
  )
}
