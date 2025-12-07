export interface Experience {
  id: number;
  company: string;
  role: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  type: "full-time" | "internship" | "trainee";
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "LTI Mindtree",
    role: "Senior Java Backend Developer",
    location: "Noida",
    duration: "Oct 2024 – Present",
    startDate: "2024-10",
    endDate: "Present",
    type: "full-time",
    highlights: [
      "Built and maintained multiple Java Spring Boot, Node.js, and React services for Kenvue",
      "Developed secure REST APIs & optimized microservices architecture",
      "Modernized legacy Node.js/JS services into scalable Spring Boot services",
      "Managed CI/CD pipelines using GitHub Actions, Jenkins & Bitbucket",
      "Solved production issues & ensured 90%+ unit test coverage",
    ],
    technologies: ["Java", "Spring Boot", "Node.js", "React", "GitHub Actions", "Jenkins", "Microservices"],
  },
  {
    id: 2,
    company: "Cognizant",
    role: "Software Engineer",
    location: "Hyderabad",
    duration: "Jan 2022 – Mar 2024",
    startDate: "2022-01",
    endDate: "2024-03",
    type: "full-time",
    highlights: [
      "Built Spring Boot microservices & React modules for healthcare domain",
      "Upgraded legacy systems to microservices architecture",
      "Delivered analytical dashboards using Google APIs",
      "Improved data pipelines and testing efficiency",
    ],
    technologies: ["Spring Boot", "React", "Microservices", "Google APIs", "Healthcare"],
  },
  {
    id: 3,
    company: "QA Infotech (Qualitest)",
    role: "Software Engineer Trainee",
    location: "Noida",
    duration: "Aug 2021 – Dec 2021",
    startDate: "2021-08",
    endDate: "2021-12",
    type: "trainee",
    highlights: [
      "Developed full-stack features using AngularJS + Java + JavaScript",
      "Migrated legacy PHP system to Node.js",
      "Built reusable UI modules and backend integrations",
    ],
    technologies: ["AngularJS", "Java", "JavaScript", "Node.js", "PHP Migration"],
  },
  {
    id: 4,
    company: "Digital Pehal Pvt. Ltd.",
    role: "Full Stack Intern",
    location: "Lucknow",
    duration: "Aug 2020 – Feb 2021",
    startDate: "2020-08",
    endDate: "2021-02",
    type: "internship",
    highlights: [
      "Built clinical management platform using Node.js + MySQL + Angular",
      "Created responsive UI with Angular Material",
      "Learned Java backend development & API integration",
    ],
    technologies: ["Node.js", "MySQL", "Angular", "Angular Material", "Java"],
  },
];
