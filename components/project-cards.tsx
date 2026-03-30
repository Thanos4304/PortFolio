import { BentoCard } from "./bento-card"
import { Github, ExternalLink } from "lucide-react"

// TODO: Replace "#" with your actual GitHub repo URLs
const projects = [
  {
    name: "SleepGuard",
    tagline: "Real-Time Driver Drowsiness Detection",
    period: "Jan 2025 - May 2025",
    description:
      "Computer vision system processing 20-25 FPS live video streams with ~92-95% eye-state classification accuracy across 10,000+ images. Reduced false alerts by ~30% via facial landmark optimization and integrated Arduino hardware alerts with <500ms response time.",
    metrics: [
      { label: "Accuracy", value: "92-95%" },
      { label: "Latency", value: "<500ms" },
      { label: "FPS", value: "20-25" },
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "Arduino", "dlib"],
    github: "#", // TODO: add repo URL
    demo: "",
  },
  {
    name: "EFRDAP",
    tagline: "Enhanced TCP Congestion Control for OBS Networks",
    period: "May 2024 - Aug 2024",
    description:
      "Designed a novel TCP congestion control algorithm improving throughput over traditional burst assembly approaches. Reduced burst loss by ~20% under high traffic and achieved ~15% faster recovery through dynamic congestion window adjustment.",
    metrics: [
      { label: "Loss Reduction", value: "~20%" },
      { label: "Recovery Speed", value: "+15%" },
      { label: "Scenarios", value: "5+" },
    ],
    tech: ["C++", "Network Sim", "TCP/IP", "Algorithm Design"],
    github: "#", // TODO: add repo URL
    demo: "",
  },
]

export function ProjectCards() {
  return (
    <div id="projects" className="contents">
      {projects.map((project, index) => (
        <BentoCard
          key={project.name}
          label={project.name}
          className="md:col-span-1 lg:col-span-1"
          id={index === 0 ? "projects-anchor" : undefined}
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
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
