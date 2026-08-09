export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Python", "Java", "Spring Boot", "MySQL", "MongoDB", "C++"],
  },
  {
    name: "Data & AI",
    items: ["NumPy", "Pandas", "Scikit-learn", "Machine Learning", "Data Analysis"],
  },
  {
    name: "Tools & Cloud",
    items: ["Git", "GitHub", "Node.js", "Express", "REST APIs"],
  },
];
