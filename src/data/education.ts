export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science",
    institution: "SRMGPC",
    location: "Lucknow",
    duration: "2018 – 2021",
    grade: "7.7 CGPA",
  },
];

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
  },
  {
    id: 2,
    name: "Java Bootcamp",
    issuer: "Precursor Info",
  },
  {
    id: 3,
    name: "IBM Career Education Program",
    issuer: "IBM",
  },
  {
    id: 4,
    name: "GitHub Copilot + React + CI/CD",
    issuer: "GitHub / Various",
  },
];
