export type Service = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Cross-platform Flutter apps for iOS and Android. One codebase, native performance, App Store ready.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Modern, fast, and scalable web applications built with the latest frameworks and best practices.",
    tags: ["Next.js", "React", "PHP", "MySQL"],
  },
  {
    icon: "🔗",
    title: "Backend & Cloud",
    description:
      "Robust server-side architecture, real-time databases, and cloud integrations that scale with you.",
    tags: ["Firebase", "Node.js", "MySQL", "REST"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces that users love — designed in Figma before a single line of code is written.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: "⛓️",
    title: "Blockchain Solutions",
    description:
      "Transparent, decentralized applications built on smart contracts for trustless business workflows.",
    tags: ["Smart Contracts", "Web3", "Next.js"],
  },
  {
    icon: "🏥",
    title: "HealthTech & LegalTech",
    description:
      "Specialized apps for regulated industries — healthcare workflows, legal case management, compliance-first builds.",
    tags: ["HIPAA-aware", "Workflow Automation", "SaaS"],
  },
];
