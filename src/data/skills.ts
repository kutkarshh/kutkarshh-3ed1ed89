export interface Skill {
  name: string;
  category: string;
  level: number; // 0-100
}

export const skillCategories = [
  {
    name: "Languages",
    icon: "Code2",
    skills: ["Java", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    name: "Frameworks",
    icon: "Layers",
    skills: ["Spring Boot", "Spring Security", "ReactJS", "Express.js"],
  },
  {
    name: "DevOps & Tools",
    icon: "Settings",
    skills: ["Gradle", "GitHub Actions", "Jenkins", "Bitbucket", "Docker"],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["MySQL", "SQL", "PostgreSQL"],
  },
  {
    name: "Architecture",
    icon: "Network",
    skills: ["Microservices", "REST APIs", "Event-driven Design"],
  },
  {
    name: "Core Skills",
    icon: "Brain",
    skills: ["DSA", "Debugging", "System Design", "OOP", "API Design"],
  },
  {
    name: "Testing & Others",
    icon: "TestTube",
    skills: ["JUnit", "Mockito", "Kibana", "AWS", "Postman", "Swagger"],
  },
];

export const allSkills: Skill[] = [
  { name: "Java", category: "Languages", level: 95 },
  { name: "JavaScript", category: "Languages", level: 85 },
  { name: "TypeScript", category: "Languages", level: 80 },
  { name: "Node.js", category: "Languages", level: 85 },
  { name: "Spring Boot", category: "Frameworks", level: 95 },
  { name: "Spring Security", category: "Frameworks", level: 85 },
  { name: "ReactJS", category: "Frameworks", level: 80 },
  { name: "Express.js", category: "Frameworks", level: 80 },
  { name: "Microservices", category: "Architecture", level: 90 },
  { name: "REST APIs", category: "Architecture", level: 95 },
  { name: "Docker", category: "DevOps", level: 75 },
  { name: "MySQL", category: "Databases", level: 90 },
  { name: "PostgreSQL", category: "Databases", level: 85 },
];
