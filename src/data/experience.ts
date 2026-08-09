export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  subtitle: string;
  tag: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "iitg",
    organization: "IIT Guwahati",
    role: "B.Sc. (Honours)",
    subtitle: "Data Science & Artificial Intelligence",
    tag: "Education",
  },
  {
    id: "google-gsa",
    organization: "Google Student Ambassador",
    role: "Student Ambassador",
    subtitle: "2026",
    tag: "Leadership",
  },
  {
    id: "gao-tek",
    organization: "GAO Tek Inc.",
    role: "Internship Experience",
    subtitle: "Software & Web Engineering Intern",
    tag: "Internship",
  },
];
