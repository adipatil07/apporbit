import SectionTag from "@/components/ui/SectionTag";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We understand your idea, users, and goals. We define scope, timeline, and tech approach together.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes and high-fidelity Figma prototypes. You approve the design before code begins.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Agile sprints with weekly demos. You see real progress every step of the way.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "We deploy, publish to app stores, and stay on for 30 days post-launch support — free.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <SectionTag>How we work</SectionTag>
          <h2 className="text-4xl font-bold text-slate-900">
            From idea to launch in 4 steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-indigo-200 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="text-4xl font-black text-indigo-100 mb-3">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
