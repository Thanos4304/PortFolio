import { BentoCard } from "./bento-card"
import { Users } from "lucide-react"

const VOLUNTEER = [
  {
    org: "ACM Illinois Tech",
    role: "Vice Treasurer",
    period: "Oct 2025 - Present",
    description:
      "Managing annual budget, handling reimbursements, fund allocation for technical events, and coordinating with vendors and university finance officers for transparent financial reporting.",
  },
  {
    org: "ISA Illinois Tech",
    role: "Vice Treasurer",
    period: "Feb 2026 - Present",
    description:
      "Managing annual budget, handling reimbursements, fund allocation for technical events, and coordinating with vendors and university finance officers for transparent financial reporting.",
  },
]

export function VolunteerCard() {
  return (
    <BentoCard label="Volunteer" className="lg:col-span-1">
      <div className="flex flex-col gap-4">
        {VOLUNTEER.map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-secondary">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-card-foreground">
                {item.org}
              </span>
              <span className="font-mono text-xs text-primary">{item.role}</span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {item.period}
              </span>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
