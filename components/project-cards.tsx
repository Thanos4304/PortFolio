import { BentoCard } from "./bento-card"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    name: "SabiScholar",
    tagline: "AI-Powered EdTech Platform",
    period: "Jan 2026 - Present",
    description:
      "Building full-stack features for an AI-driven learning platform. Developing REST APIs, integrating LLM-based tools, and improving frontend performance to deliver a seamless student experience.",
    metrics: [
      { label: "Role", value: "SWE" },
      { label: "Stack", value: "Full" },
      { label: "Status", value: "Live" },
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AI/LLM"],
    github: "",
    demo: "",
  },
  {
    name: "SleepGuard",
    tagline: "Real-Time Driver Drowsiness Detection",
    period: "Jan 2025 - May 2025",
    description:
      "Computer vision system processing 20-25 FPS live video with 92-95% eye-state accuracy across 10,000+ images. Reduced false alerts by ~30% and integrated Arduino hardware alerts with <500ms response time.",
    metrics: [
      { label: "Accuracy", value: "92-95%" },
      { label: "Latency", value: "<500ms" },
      { label: "FPS", value: "20-25" },
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "Arduino", "dlib"],
    github: "#",
    demo: "",
  },
  {
    name: "EFRDAP",
    tagline: "Enhanced TCP Congestion Control",
    period: "May 2024 - Aug 2024",
    description:
      "Novel TCP congestion control algorithm for OBS networks improving throughput over burst assembly. Reduced burst loss by ~20% under high traffic and achieved ~15% faster recovery via dynamic window adjustment.",
    metrics: [
      { label: "Loss Cut", value: "~20%" },
      { label: "Recovery", value: "+15%" },
      { label: "Scenarios", value: "5+" },
    ],
    tech: ["C++", "Network Sim", "TCP/IP", "Algorithm Design"],
    github: "#",
    demo: "",
  },
]

export function ProjectCards() {
  return (
    <div className="contents">
      {projects.map((project, index) => (
        <BentoCard
          key={project.name}
          label={project.name}
          className="md:col-span-1 lg:col-span-1 scroll-mt-16 flex flex-col"
          id={index === 0 ? "projects" : undefined}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="mb-1 text-xs font-medium text-card-foreground">
                {project.tagline}
              </p>
              <span className="font-mono text-[10px] text-muted-foreground">
                {project.period}
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`${project.name} GitHub repository`}
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`${project.name} live demo`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Metrics row */}
          <div className="mt-4 flex gap-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="font-mono text-lg font-semibold text-primary">
                  {m.value}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </BentoCard>
      ))}
    </div>
  )
}
