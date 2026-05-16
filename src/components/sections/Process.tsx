import SectionTag from "@/components/ui/SectionTag";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We understand your idea, users, and goals. We define scope, timeline, and tech approach together.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes and high-fidelity Figma prototypes. You approve the design before code begins.",
    icon: "🎨",
  },
  {
    num: "03",
    title: "Development",
    desc: "Agile sprints with weekly demos. You see real progress every step of the way.",
    icon: "⚙️",
  },
  {
    num: "04",
    title: "Launch",
    desc: "We deploy, publish to app stores, and provide 30 days post-launch support — free.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <SectionTag>How we work</SectionTag>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            From idea to launch{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              in 4 steps
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group relative p-6 rounded-2xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number */}
              <div className="text-6xl font-black text-slate-50 leading-none mb-4 select-none group-hover:text-indigo-50 transition-colors">
                {step.num}
              </div>

              {/* Icon */}
              <div className="text-2xl mb-3">{step.icon}</div>

              <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-indigo-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
