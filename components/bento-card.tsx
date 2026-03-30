import React from "react"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  label?: string
  className?: string
  children: React.ReactNode
  id?: string
}

export function BentoCard({ label, className, children, id }: BentoCardProps) {
  return (
    <section
      id={id}
      className={cn(
        "scanlines relative overflow-hidden rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30 md:p-6",
        className
      )}
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
