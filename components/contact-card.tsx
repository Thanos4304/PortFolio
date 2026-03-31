"use client"

import { useState } from "react"
import { BentoCard } from "./bento-card"
import { Mail, Linkedin, MapPin, Github, Copy, Check } from "lucide-react"

const EMAIL = "sviswanathan@hawk.illinoistech.edu"
const GITHUB_URL = "https://github.com/sairaviganesh"

const links = [
  {
    icon: Mail,
    label: EMAIL,
    href: "mailto:" + EMAIL,
    copyable: true,
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/sairaviganesh",
    href: "https://www.linkedin.com/in/sairaviganesh",
    copyable: false,
  },
  {
    icon: Github,
    label: "github.com/sairaviganesh",
    href: GITHUB_URL,
    copyable: false,
  },
  {
    icon: MapPin,
    label: "Chicago, IL",
    href: null,
    copyable: false,
  },
]

export function ContactCard() {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <BentoCard label="Contact" className="lg:col-span-1 h-full scroll-mt-16" id="contact">
      <div className="flex flex-col gap-3">
        {links.map((link) => {
          const Icon = link.icon
          const content = (
            <div className="flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary truncate">
                  {link.label}
                </span>
              </div>
              {link.copyable && (
                <button
                  onClick={handleCopy}
                  className="shrink-0 rounded p-1 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="h-3 w-3 text-green-500" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </button>
              )}
            </div>
          )

          return link.href ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {content}
            </a>
          ) : (
            <div key={link.label} className="group">
              {content}
            </div>
          )
        })}
      </div>
    </BentoCard>
  )
}
