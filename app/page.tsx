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
import { FadeIn } from "@/components/fade-in"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <StatusBar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 md:px-6 md:py-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* Row 1: Identity + Terminal */}
          <FadeIn delay={0} className="md:col-span-2 lg:col-span-2 contents">
            <IdentityCard />
          </FadeIn>
          <FadeIn delay={100}>
            <TerminalCard />
          </FadeIn>

          {/* Row 2: Experience (full width) */}
          <FadeIn delay={0} className="md:col-span-2 lg:col-span-3 contents">
            <ExperienceCards />
          </FadeIn>

          {/* Row 3: Projects + Education */}
          <FadeIn delay={0} className="md:col-span-2 lg:col-span-2 contents">
            <ProjectCards />
          </FadeIn>
          <FadeIn delay={100}>
            <EducationCard />
          </FadeIn>

          {/* Row 4: Skills + Volunteer */}
          <FadeIn delay={0} className="md:col-span-1 lg:col-span-2 contents">
            <SkillsGrid />
          </FadeIn>
          <FadeIn delay={100}>
            <VolunteerCard />
          </FadeIn>

          {/* Row 5: Certifications */}
          <FadeIn delay={0} className="md:col-span-2 lg:col-span-3 contents">
            <CertificationsCard />
          </FadeIn>

          {/* Row 6: Contact */}
          <FadeIn delay={0} className="md:col-span-2 lg:col-span-3 contents">
            <ContactCard />
          </FadeIn>
        </div>
      </main>
      <ScrollToTop />
    </div>
  )
}
