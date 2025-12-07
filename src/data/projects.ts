export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlights: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Microservices Migration System",
    description: "Led the modernization initiative to migrate legacy Node.js services to Java Spring Boot, improving scalability and maintainability.",
    technologies: ["Java", "Spring Boot", "Node.js", "Docker", "Microservices"],
    category: "Backend",
    highlights: [
      "Migrated 5+ Node.js services to Spring Boot",
      "Improved response time by 40%",
      "Implemented comprehensive test coverage",
    ],
  },
  {
    id: 2,
    title: "Healthcare Data Workflow Service",
    description: "Developed secure REST APIs for clinical data management in healthcare domain with strict compliance requirements.",
    technologies: ["Spring Boot", "Spring Security", "PostgreSQL", "REST APIs"],
    category: "Healthcare",
    highlights: [
      "Built HIPAA-compliant data pipelines",
      "Integrated with Google APIs for analytics",
      "Achieved 99.9% uptime",
    ],
  },
  {
    id: 3,
    title: "E-commerce Backend Services",
    description: "Designed and built modular backend services for Kenvue's e-commerce platform handling high-volume transactions.",
    technologies: ["Java", "Spring Boot", "MySQL", "GitHub Actions", "Jenkins"],
    category: "E-commerce",
    highlights: [
      "Handled 100K+ daily transactions",
      "Implemented CI/CD automation",
      "Reduced deployment time by 60%",
    ],
  },
  {
    id: 4,
    title: "Clinical Manager Application",
    description: "Full-stack clinical management platform enabling healthcare providers to manage patient data efficiently.",
    technologies: ["Node.js", "Angular", "MySQL", "Angular Material"],
    category: "Full Stack",
    highlights: [
      "Built end-to-end patient management system",
      "Created responsive UI components",
      "Integrated secure authentication",
    ],
  },
];
