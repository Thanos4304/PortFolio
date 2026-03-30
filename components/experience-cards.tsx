import { BentoCard } from "./bento-card"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    company: "Enoah iSolution India Pvt Ltd",
    role: "Full Stack Developer Intern",
    period: "Jan 2025 - May 2025",
    bullets: [
      "Built a full-stack e-commerce platform with 20+ REST APIs -- auth, product management, cart & order workflows",
      "Implemented JWT auth + RBAC for 3 user roles, hardening application security end-to-end",
      "Optimized PostgreSQL queries via indexing and caching, cutting API response time by ~35-40%",
      "Improved frontend perf with lazy loading + modular Angular architecture, reducing initial load by ~30%",
    ],
    tech: ["Angular", "Node.js", "PostgreSQL", "JWT", "Express"],
  },
  {
    company: "CSIR-CEERI",
    role: "Image Processing Research Intern",
    period: "May 2024 - Aug 2024",
    bullets: [
      "Processed THz images using Lucy-Richardson deconvolution and edge detection techniques",
      "Achieved ~20-25% improvement in image clarity over raw THz images",
      "Executed enhancement algorithms using MATLAB's image processing toolbox",
      "Conducted research on THz imaging principles, supporting ongoing laboratory research",
    ],
    tech: ["MATLAB", "Image Processing", "THz Imaging", "Algorithm Design"],
  },
]

export function ExperienceCards() {
  return (
    <div id="experience" className="contents">
      <BentoCard label="Experience" className="md:col-span-2 lg:col-span-3">
        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="group">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="inline-flex items-center gap-1.5 text-sm font-medium text-card-foreground">
                    {exp.role}
                    <span className="text-muted-foreground">at</span>
                    <span className="text-primary">{exp.company}</span>
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BentoCard>
    </div>
  )
}
