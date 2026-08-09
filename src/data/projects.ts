export interface CaseStudyData {
  overview: string;
  problem: string;
  objective: string;
  myRole: string;
  approach: string;
  design: string;
  development: string;
  keyFeatures: string[];
  challenges: string;
  solutions: string;
  responsiveExperience: string;
  result: string;
  whatILearned: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  year: string;
  isProduction: boolean;
  statusLabel: "Live Client Project" | "In Development" | "Personal Project";
  summary: string;
  description: string;
  role: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  technologies: string[];
  caseStudy: CaseStudyData;
}

export const projectsData: Project[] = [
  {
    id: "trustlayerlabs",
    slug: "trustlayerlabs",
    name: "TrustLayerLabs",
    subtitle: "Cybersecurity Website",
    category: "Cybersecurity Website",
    year: "2026",
    isProduction: true,
    statusLabel: "Live Client Project",
    summary: "A production cybersecurity website built to present technical security services clearly and create a professional experience for potential clients.",
    description: "TrustLayerLabs provides security reviews, VAPT testing, and API audit services for technology startups and digital businesses. This website communicates complex security offerings into clear, actionable client visual pathways.",
    role: "Lead Full-Stack Developer & UX Designer",
    image: "/trustlayerlabs.png",
    liveUrl: "https://www.trustlayerlabs.co.in/",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    caseStudy: {
      overview: "TrustLayerLabs needed a professional web presence to present vulnerability assessments, penetration testing, and compliance audit services to technology companies and startup founders.",
      problem: "Cybersecurity service websites often suffer from dense jargon, confusing pricing, or unconvincing visual presentation, making it difficult for business owners to evaluate services and initiate inquiries.",
      objective: "Build a fast, credible, and clear web platform that explains security offerings, establishes trust with prospective clients, and facilitates consultation requests.",
      myRole: "Responsible for full-stack frontend architecture, UI design system, content hierarchy, mobile responsiveness, and deployment pipeline on Vercel.",
      approach: "Designed a clean, dark editorial aesthetic with clear section navigation, interactive service breakdowns, and clear call-to-action touchpoints.",
      design: "Employed high-contrast typography, generous spacing, and custom visual cards to separate VAPT testing, API security, and security audit offerings.",
      development: "Leveraged Next.js App Router for server-side rendering, component-driven modular architecture, and optimized image assets for high performance.",
      keyFeatures: [
        "Interactive security service matrix for VAPT, API auditing, and cloud security",
        "Streamlined client inquiry and consultation request funnel",
        "Server-rendered static generation for fast page loads and SEO optimization",
        "Responsive multi-device layout with explicit touch targets"
      ],
      challenges: "Presenting technical security terminology in an approachable manner while maintaining technical credibility for security engineering leads.",
      solutions: "Created progressive disclosure sections where visitors can quickly skim high-level service outcomes or expand for detailed scope specifications.",
      responsiveExperience: "Built with mobile-first CSS architecture, ensuring seamless layout reflows from 375px mobile viewports to wide desktop monitors.",
      result: "Successfully launched live in production at trustlayerlabs.co.in, providing the company with an active digital presence for client acquisition.",
      whatILearned: "Reinforced the importance of combining clear product copy with fast, clean frontend engineering to build immediate buyer trust."
    }
  },
  {
    id: "leadpilot-ai",
    slug: "leadpilot-ai",
    name: "LeadPilot AI",
    subtitle: "AI Lead Management Platform",
    category: "AI Product",
    year: "2026",
    isProduction: false,
    statusLabel: "In Development",
    summary: "An AI-powered lead management workspace designed to help businesses organize inquiries, understand customer intent, prioritize opportunities, and prepare follow-up messages for human review.",
    description: "LeadPilot AI organizes incoming leads into an intelligent dashboard, classifying user intent and generating contextual response drafts that team members can review and approve before sending.",
    role: "Full-Stack Developer / Product Creator",
    image: "/leadpilot.png",
    githubUrl: "https://github.com/Nagasrinivas9121",
    featured: true,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AI Engine"],
    caseStudy: {
      overview: "Businesses struggle with manual lead triage, spending hours categorizing incoming inquiries and drafting repetitive response emails.",
      problem: "Inquiry volume often overwhelms small sales and support teams, causing delayed response times and missed business opportunities.",
      objective: "Create an AI-assisted lead workspace that automates lead classification, intent extraction, and priority scoring while keeping humans in control of outgoing messages.",
      myRole: "Designed the full workspace product UI, state management model, lead processing pipeline, and human-in-the-loop review interface.",
      approach: "Focused on a 3-pane layout: Left pane for pipeline navigation & lead filters, center pane for lead activity history, and right pane for AI intelligence insights and response generation.",
      design: "Dark workspace design with subtle status indicators, high-density table views, and clear visual differentiation between AI suggestions and human edits.",
      development: "Implemented with Next.js client component state, TypeScript data models for lead entities, and modular AI pipeline interfaces.",
      keyFeatures: [
        "Authentication & secure user workspace access",
        "Lead pipeline dashboard with status filtering and multi-column sorting",
        "AI customer intent classification and priority scoring engine",
        "AI response draft generator requiring human verification before sending",
        "Activity history timeline, internal notes, and audit log"
      ],
      challenges: "Designing an AI system that provides meaningful assistance without taking dangerous autonomous actions like sending raw unreviewed emails.",
      solutions: "Enforced strict human-in-the-loop gating where AI outputs are strictly formatted as editable draft templates with explicit approval buttons.",
      responsiveExperience: "Adaptive layout that collapses the 3-pane desktop workspace into collapsible tabs on mobile devices.",
      result: "Currently in active development as a portfolio product demonstrating full-stack AI application architecture.",
      whatILearned: "Deepened understanding of human-in-the-loop UX patterns for generative AI applications in business workflow tools."
    }
  },
  {
    id: "nexusflow",
    slug: "nexusflow",
    name: "NexusFlow",
    subtitle: "Project & Sprint Management Platform",
    category: "Full-Stack SaaS",
    year: "2026",
    isProduction: false,
    statusLabel: "In Development",
    summary: "A collaborative sprint and project management application for organizing tasks, teams, and project progress in real time.",
    description: "NexusFlow brings team workspaces, interactive Kanban task boards, sprint planning, real-time activity feeds, and permission controls into a fast web app.",
    role: "Full-Stack Developer & UX Specialist",
    image: "/nexusflow.png",
    githubUrl: "https://github.com/Nagasrinivas9121",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    caseStudy: {
      overview: "Modern product development requires agile task tracking that stays fast, responsive, and clear across multiple concurrent project sprints.",
      problem: "Existing project management platforms are frequently bloated, slow to load, or overly complex for lean product teams.",
      objective: "Develop a lightweight, high-performance sprint management web application with interactive Kanban columns, real-time task movement, and team activity feeds.",
      myRole: "Engineered the frontend Kanban board, component architecture, state updates, and mock database persistence layer.",
      approach: "Built around fluid client-side interaction with instant optimistic state updates for drag-and-drop task movements and status toggles.",
      design: "Minimal dark interface with subtle priority badges, clean avatars, and readable card typography.",
      development: "Structured with reusable React state hooks, modular component trees, and strict TypeScript types for tasks, projects, and users.",
      keyFeatures: [
        "Interactive sprint Kanban board with multi-column status workflow",
        "Workspaces, projects, task assignments, and tag-based filtering",
        "Real-time team activity feed and timeline notifications",
        "Role-based permission models for team leads and contributors",
        "Search bar with instant filter matching across projects"
      ],
      challenges: "Maintaining fluid UI performance and state consistency during rapid drag-and-drop task reordering.",
      solutions: "Implemented optimistic UI updates that immediately re-render card placement before background synchronization completes.",
      responsiveExperience: "Designed custom stacked column views for mobile viewports, enabling full sprint tracking on phone screens.",
      result: "Functional full-stack SaaS prototype showcasing enterprise-grade application structure.",
      whatILearned: "Gained insights into complex state synchronization and component modularity in complex interactive dashboards."
    }
  },
  {
    id: "luxestay",
    slug: "luxestay",
    name: "LuxeStay",
    subtitle: "Hospitality & Property Discovery Platform",
    category: "Web Experience",
    year: "2026",
    isProduction: false,
    statusLabel: "Personal Project",
    summary: "A modern hospitality and property discovery experience focused on visual quality, search, and a smooth booking flow.",
    description: "LuxeStay combines high-resolution property photography, interactive destination search, guest selection, property amenity filters, and a step-by-step reservation UI.",
    role: "Frontend Engineer & UI/UX Specialist",
    image: "/luxestay.png",
    githubUrl: "https://github.com/Nagasrinivas9121",
    featured: true,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    caseStudy: {
      overview: "Luxury hospitality platforms require visual elegance, seamless search interactions, and clear layout hierarchy to convert visitors into bookings.",
      problem: "Cluttered search filters and multi-step reservation friction lead to user drop-offs during property selection.",
      objective: "Build a polished property discovery prototype featuring rich photography, intuitive filter menus, property detail galleries, and an easy checkout flow.",
      myRole: "Designed and developed the full visual design, search filtering component, property detail page layout, and mock booking modal.",
      approach: "Utilized an editorial dark visual style, large media cards, and clean typography to highlight property features and amenity badges.",
      design: "Focused on spacious card grids, subtle hover zooms, clear price disclosures, and intuitive date/guest selection controls.",
      development: "Developed using Next.js, CSS Grid layout systems, and responsive image optimizations with Next.js Image component.",
      keyFeatures: [
        "Destination search, date picker UI, and guest counter controls",
        "Property category filters (Villas, Beachfront, Penthouses, Eco-Lodges)",
        "Property detail pages with high-resolution image galleries and amenity lists",
        "Interactive favorite toggling and availability UI indicators",
        "Step-by-step reservation flow modal with summary validation"
      ],
      challenges: "Delivering fast image load times and layout stability across image-heavy gallery grids.",
      solutions: "Used proper Next.js image sizing, lazy loading, and priority flags for above-the-fold hero imagery.",
      responsiveExperience: "Fully optimized for mobile devices with sticky action bars and bottom drawer filter sheets.",
      result: "High-craft web experience showcasing frontend design execution and interactive e-commerce product flow.",
      whatILearned: "Refined techniques in editorial UI design, media loading optimization, and multi-step modal UX design."
    }
  }
];
