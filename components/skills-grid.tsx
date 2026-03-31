"use client"

import { BentoCard } from "./bento-card"

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL", "HTML/CSS"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap", "Streamlit"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    name: "Data & ML",
    skills: [
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "MATLAB",
      "LangChain",
      "LangGraph",
      "RAG",
      "Hugging Face",
      "OpenAI API",
    ],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "PyCharm", "Jupyter", "Anaconda", "Linux"],
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
      className="md:col-span-2 lg:col-span-3 scroll-mt-16"
      id="skills"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skillCategories.map((cat) => (
          <div key={cat.name}>
            <h4 className="mb-2 font-mono text-[11px] uppercase tracking-wider text-card-foreground">
              {cat.name}
            </h4>
            <div className="flex flex-wrap gap-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary transition-colors hover:bg-primary/20"
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
