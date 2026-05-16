export type StackItem = {
  icon: string;
  name: string;
  category: "mobile" | "web" | "backend" | "tools";
};

export const stack: StackItem[] = [
  { icon: "🐦", name: "Flutter", category: "mobile" },
  { icon: "🎯", name: "Dart", category: "mobile" },
  { icon: "⚛️", name: "Next.js", category: "web" },
  { icon: "🟨", name: "JavaScript", category: "web" },
  { icon: "🐘", name: "PHP", category: "web" },
  { icon: "☕", name: "Java", category: "mobile" },
  { icon: "🔥", name: "Firebase", category: "backend" },
  { icon: "🐬", name: "MySQL", category: "backend" },
  { icon: "🐙", name: "GitHub", category: "tools" },
  { icon: "🎨", name: "Figma", category: "tools" },
  { icon: "📮", name: "Postman", category: "tools" },
  { icon: "⛓️", name: "Web3", category: "web" },
];
