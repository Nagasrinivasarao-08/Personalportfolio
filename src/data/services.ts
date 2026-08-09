export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    description: "Professional websites that clearly communicate what your business does and make it easy for customers to take action.",
    deliverables: [
      "Custom responsive layouts",
      "SEO-friendly structure",
      "Mobile optimization",
      "CMS integration when required"
    ]
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    description: "Full-stack web applications built around real workflows, users, and business requirements.",
    deliverables: [
      "Frontend and backend development",
      "API integration",
      "Authentication",
      "Database integration",
      "Performance optimization"
    ]
  },
  {
    id: "landing-pages",
    number: "03",
    title: "Landing Pages",
    description: "Focused landing pages designed to communicate a clear offer and guide visitors toward a specific action.",
    deliverables: [
      "Clear content hierarchy",
      "Responsive design",
      "Fast loading",
      "Analytics integration",
      "Conversion-focused structure"
    ]
  },
  {
    id: "website-redesign",
    number: "04",
    title: "Website Redesign",
    description: "Modernize an outdated website with better usability, responsiveness, performance, and visual clarity.",
    deliverables: [
      "UI/UX improvements",
      "Responsive redesign",
      "Performance improvements",
      "Code cleanup where required"
    ]
  },
  {
    id: "ai-integrations",
    number: "05",
    title: "AI Integrations",
    description: "Add practical AI features such as summarization, classification, data processing, and assisted workflows.",
    deliverables: [
      "AI API integration",
      "Text summarization",
      "Intent classification",
      "Data processing workflows",
      "Human review for generated outputs"
    ]
  }
];
