import { BentoCard } from "./bento-card"
import { Users } from "lucide-react"

export function VolunteerCard() {
  return (
    <BentoCard label="Volunteer" className="lg:col-span-1">
      <div className="flex gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-secondary">
          <Users className="h-4 w-4 text-primary" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-card-foreground">
            ACM Illinois Tech
          </span>
          <span className="font-mono text-xs text-primary">Vice Treasurer</span>
          <span className="font-mono text-[11px] text-muted-foreground">
            Oct 2025 - Present
          </span>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            Managing annual budget, handling reimbursements, fund allocation for
            technical events, and coordinating with vendors and university
            finance officers for transparent financial reporting.
          </p>
        </div>
      </div>
    </BentoCard>
  )
}
