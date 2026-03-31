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
    <BentoCard className="md:col-span-2 lg:col-span-2 flex-1">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
          Certifications
        </h2>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.title}
            className="group flex flex-col gap-3 rounded-md border border-border bg-background/50 p-5 transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-base font-medium text-card-foreground">
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
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span>{cert.issuer}</span>
              <span>·</span>
              <span>{cert.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
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
