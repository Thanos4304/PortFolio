import { BentoCard } from "./bento-card"
import { Mail, Linkedin, MapPin, Github } from "lucide-react"

// TODO: Update GITHUB_URL with your actual GitHub profile
const GITHUB_URL = "https://github.com/sairaviganesh"

const links = [
  {
    icon: Mail,
    label: "sviswanathan@hawk.illinoistech.edu",
    href: "mailto:sviswanathan@hawk.illinoistech.edu",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/sairaviganesh",
    href: "https://www.linkedin.com/in/sairaviganesh",
  },
  {
    icon: Github,
    label: "github.com/sairaviganesh",
    href: GITHUB_URL,
  },
  {
    icon: MapPin,
    label: "Chicago, IL",
    href: null,
  },
]

export function ContactCard() {
  return (
    <BentoCard label="Contact" className="lg:col-span-1" id="contact">
      <div className="flex flex-col gap-3">
        {links.map((link) => {
          const Icon = link.icon
          const content = (
            <div key={link.label} className="flex items-center gap-2.5">
              <Icon className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                {link.label}
              </span>
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
      <div className="mt-5 border-t border-border pt-4">
        <p className="font-mono text-[10px] text-muted-foreground">
          Built with Next.js + Tailwind CSS
        </p>
      </div>
    </BentoCard>
  )
}
