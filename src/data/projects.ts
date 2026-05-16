export type Tag = {
  label: string;
  color: "blue" | "green" | "purple" | "orange";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  impact: { value: string; label: string }[];
  wide?: boolean;
};

export const projects: Project[] = [
  {
    id: "clinisio",
    title: "Clinisio",
    description:
      "A healthcare workflow optimization platform that improved clinical team efficiency by 35%. Built for Intellicuria HealthCare AI with real-time data sync and role-based access control.",
    tags: [
      { label: "Flutter", color: "blue" },
      { label: "Healthcare", color: "green" },
      { label: "Firebase", color: "purple" },
    ],
    impact: [
      { value: "35%", label: "Efficiency gain" },
      { value: "Live", label: "Production app" },
    ],
    wide: true,
  },
  {
    id: "vejen",
    title: "Vejen Til Jura",
    description:
      "A legal aid app for the Danish market helping users navigate case preparation and find legal resources. Published on the App Store, built remotely for a Denmark-based client.",
    tags: [
      { label: "Flutter", color: "orange" },
      { label: "LegalTech", color: "blue" },
    ],
    impact: [
      { value: "🇩🇰", label: "Denmark market" },
      { value: "App Store", label: "Published" },
    ],
  },
  {
    id: "csrchain",
    title: "CSRChain",
    description:
      "A blockchain-powered CSR transparency platform bringing accountability and auditability to corporate social responsibility initiatives via smart contracts.",
    tags: [
      { label: "Blockchain", color: "purple" },
      { label: "Next.js", color: "blue" },
      { label: "Web3", color: "green" },
    ],
    impact: [
      { value: "Smart Contracts", label: "On-chain" },
      { value: "Decentralized", label: "Trustless" },
    ],
  },
];
