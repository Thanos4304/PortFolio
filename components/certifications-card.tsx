import { BentoCard } from "./bento-card"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    date: "2024",
    url: null, // Add your certificate URL here when available
  },
  // Add more certifications here as you get them:
  // {
  //   title: "AWS Cloud Practitioner",
  //   issuer: "Amazon Web Services",
  //   date: "2025",
  //   url: "https://...",
  // },
]

export function CertificationsCard() {
  return (
    <BentoCard label="Certifications" className="lg:col-span-1">
      <div className="flex flex-col gap-3">
        {certifications.map((cert) => (
          <div key={cert.title} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-secondary">
              <Award className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-card-foreground truncate">
                  {cert.title}
                </span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                    title="View certificate"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-primary">
                  {cert.issuer}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {cert.date}
                </span>
              </div>
            </div>
          </div>
        ))}
        <p className="font-mono text-[10px] text-muted-foreground pt-1 border-t border-border mt-1">
          More certifications in progress...
        </p>
      </div>
    </BentoCard>
  )
}
