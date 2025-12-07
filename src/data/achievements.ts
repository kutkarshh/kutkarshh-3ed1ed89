export interface Achievement {
  id: number;
  title: string;
  description: string;
  year?: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Accelerated Delivery",
    description: "Delivered a multi-service solution planned for 1.2 years in just 8 months",
    icon: "Rocket",
  },
  {
    id: 2,
    title: "Multi-Service Management",
    description: "Successfully managed multiple backend & frontend services simultaneously",
    icon: "Layers",
  },
  {
    id: 3,
    title: "On-the-Spot Award",
    description: "Recognized for exceptional performance in 2022, 2023, and 2024",
    year: "2022, 2023, 2024",
    icon: "Award",
  },
  {
    id: 4,
    title: "Customer Appreciation",
    description: "Received customer appreciation for outstanding service delivery",
    year: "2023",
    icon: "Heart",
  },
];
