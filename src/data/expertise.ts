export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  highlights?: string[];
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: "fullstack-web-dev",
    number: "01",
    title: "Full-Stack Web Development",
    description: "Building responsive websites and web applications across frontend and backend.",
    iconName: "Layers",
  },
  {
    id: "ai-machine-learning",
    number: "02",
    title: "AI & Machine Learning",
    description: "Working with Python, Scikit-learn, data analysis, and AI-powered application features.",
    iconName: "BrainCircuit",
  },
  {
    id: "frontend-dev",
    number: "03",
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, JavaScript, Tailwind CSS.",
    iconName: "Layout",
  },
  {
    id: "backend-dev",
    number: "04",
    title: "Backend Development",
    description: "Node.js, Express, APIs, authentication, and database integration.",
    iconName: "Server",
  },
  {
    id: "data-science",
    number: "05",
    title: "Data Science",
    description: "NumPy, Pandas, data analysis, and machine-learning workflows.",
    iconName: "LineChart",
  },
  {
    id: "product-focused-dev",
    number: "06",
    title: "Product-Focused Development",
    description: "Turning business requirements into usable, maintainable digital products.",
    iconName: "Rocket",
  },
  {
    id: "responsive-ui-ux",
    number: "07",
    title: "Responsive UI/UX",
    description: "Creating interfaces that work cleanly across desktop, tablet, and mobile.",
    iconName: "Smartphone",
  },
  {
    id: "performance-maintainability",
    number: "08",
    title: "Performance & Maintainability",
    description: "Building with speed, clean structure, and scalable code in mind.",
    iconName: "Zap",
  },
];
