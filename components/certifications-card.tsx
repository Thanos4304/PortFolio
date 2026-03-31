import { BentoCard } from "./bento-card"
import { Award, ExternalLink } from "lucide-react"

const CERTIFICATIONS = [
  {
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    date: "2024",
    url: "/certificates/udemymlcert.pdf",
    tags: ["Python", "ML", "Supervised Learning", "Deep Learning"],
  },
  // Add more certifications here in the future
]

export function CertificationsCard() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-3">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
          Certifications
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.title}
            className="group flex flex-col gap-2 rounded-md border border-border bg-background/50 p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm font-medium text-card-foreground">
                  {cert.title}
                </span>
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span>{cert.issuer}</span>
              <span>·</span>
              <span>{cert.date}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
