import { StatusBar } from "@/components/status-bar"
import { IdentityCard } from "@/components/identity-card"
import { TerminalCard } from "@/components/terminal-card"
import { EducationCard } from "@/components/education-card"
import { ExperienceCards } from "@/components/experience-cards"
import { ProjectCards } from "@/components/project-cards"
import { SkillsGrid } from "@/components/skills-grid"
import { VolunteerCard } from "@/components/volunteer-card"
import { ContactCard } from "@/components/contact-card"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CertificationsCard } from "@/components/certifications-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <StatusBar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 md:px-6 md:py-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* Row 1: Identity + Terminal */}
          <IdentityCard />
          <TerminalCard />

          {/* Row 2: Experience (full width) */}
          <ExperienceCards />

          {/* Row 3: Projects + Education */}
          <ProjectCards />
          <EducationCard />

          {/* Row 4: Skills + Volunteer */}
          <SkillsGrid />
          <VolunteerCard />

          {/* Row 5: Certifications */}
          <CertificationsCard />

          {/* Row 6: Contact */}
          <ContactCard />
        </div>
      </main>
      <ScrollToTop />
    </div>
  )
}
