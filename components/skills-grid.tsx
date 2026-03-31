"use client"

import { BentoCard } from "./bento-card"

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL", "HTML/CSS"],
  },
  {
    name: "Frontend",
    skills: ["React", "Angular", "Streamlit", "Tailwind", "Bootstrap"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Spring Boot", "JWT", "OpenAI API"],
  },
  {
    name: "Data & ML",
    skills: [
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "MATLAB",
      "LangChain",
      "LangGraph",
      "RAG",
      "Hugging Face",
    ],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "PyCharm", "Jupyter", "Anaconda"],
  },
  {
    name: "Hardware",
    skills: ["Raspberry Pi", "Arduino", "Microcontrollers", "Embedded C/C++"],
  },
]

export function SkillsGrid() {
  return (
    <BentoCard
      label="Skills & Tools"
      className="md:col-span-2 lg:col-span-2 scroll-mt-16"
      id="skills"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {skillCategories.map((cat) => (
          <div key={cat.name}>
            <h4 className="mb-2 font-mono text-[11px] uppercase tracking-wider text-card-foreground">
              {cat.name}
            </h4>
            <div className="flex flex-wrap gap-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
