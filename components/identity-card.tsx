import Image from "next/image"
import { BentoCard } from "./bento-card"
import { ArrowUpRight, Github, FileText } from "lucide-react"

// TODO: Update these with your actual links
const GITHUB_URL = "https://github.com/sairaviganesh"
const RESUME_URL = "/resume/SAIRAVI GANESH (1).pdf"

export function IdentityCard() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-2 scroll-mt-16" id="about">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-border md:h-24 md:w-24">
              <Image
                src="/images/profile.png"
                alt="Sairavi Ganesh"
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 border border-primary/20 rounded-lg" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-card-foreground md:text-3xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Sairavi Ganesh
              <span className="cursor-blink ml-0.5 text-primary">_</span>
            </h1>
            <p className="mt-1 font-mono text-sm text-primary">
              Full Stack Developer & ML Enthusiast
            </p>
          </div>
        </div>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Computer Engineering grad student at{" "}
          <span className="text-card-foreground">
            Illinois Institute of Technology
          </span>
          . I build full-stack web applications and intelligent systems —
          currently shipping features at SabiScholar and focused on the
          intersection of software engineering and machine learning. Previously
          at Enoah iSolution and CSIR-CEERI.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="https://www.linkedin.com/in/sairaviganesh"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            LinkedIn
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-3 w-3" />
            GitHub
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <FileText className="h-3 w-3" />
            Resume
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:sviswanathan@hawk.illinoistech.edu"
            className="group inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            Email
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <span className="font-mono text-xs text-muted-foreground">
            Chicago, IL
          </span>
        </div>
      </div>
    </BentoCard>
  )
}
