import { BentoCard } from "./bento-card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    school: "Illinois Institute of Technology",
    degree: "M.S., Computer Engineering",
    gpa: "3.7",
    period: "Aug 2025 - May 2027",
  },
  {
    school: "St. Joseph's College of Engineering",
    degree: "B.E., Electronics & Communication",
    gpa: "3.6",
    period: "Aug 2021 - May 2025",
  },
]

export function EducationCard() {
  return (
    <BentoCard label="Education" className="flex-1">
      <div className="flex flex-col gap-4">
        {education.map((edu) => (
          <div key={edu.school} className="group flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-secondary">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-card-foreground">
                {edu.school}
              </span>
              <span className="text-xs text-muted-foreground">
                {edu.degree}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-primary">
                  GPA {edu.gpa}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {edu.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
