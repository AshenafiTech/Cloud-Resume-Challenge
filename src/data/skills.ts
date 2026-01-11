import { Cloud, Database as DatabaseIcon, Layers, Server, Wrench } from "lucide-react";
import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    highlight: "API-first, scalable services",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, description: "Event-driven services" },
      { name: "Python", level: 85, description: "Data and automation" },
      { name: "Java", level: 80, description: "Enterprise backends" },
      { name: "Express.js", level: 88, description: "REST & middleware" }
    ]
  },
  {
    title: "Cloud & DevOps",
    highlight: "Reliable CI/CD and infra",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 92, description: "Serverless & core services" },
      { name: "Docker", level: 85, description: "Containerized delivery" },
      { name: "Kubernetes", level: 78, description: "Orchestrated workloads" },
      { name: "Terraform", level: 82, description: "IaC modules" }
    ]
  },
  {
    title: "Databases",
    highlight: "Performance & resilience",
    icon: DatabaseIcon,
    skills: [
      { name: "MongoDB", level: 88, description: "Document stores" },
      { name: "PostgreSQL", level: 85, description: "Relational design" },
      { name: "Redis", level: 80, description: "Caching & queues" },
      { name: "DynamoDB", level: 75, description: "Serverless NoSQL" }
    ]
  },
  {
    title: "Architecture & Practices",
    highlight: "Quality and velocity",
    icon: Layers,
    skills: [
      { name: "System Design", level: 86, description: "Scalable patterns" },
      { name: "CI/CD", level: 88, description: "Pipelines & gating" },
      { name: "Observability", level: 82, description: "Logs, metrics, traces" },
      { name: "Security", level: 78, description: "Least privilege, threat modeling" }
    ]
  },
  {
    title: "Collaboration",
    highlight: "Lead and ship together",
    icon: Wrench,
    skills: [
      { name: "Technical Writing", level: 84, description: "Docs & ADRs" },
      { name: "Code Review", level: 88, description: "Quality reviews" },
      { name: "Agile Delivery", level: 82, description: "Iterative delivery" },
      { name: "Mentorship", level: 80, description: "Guiding teammates" }
    ]
  }
];
