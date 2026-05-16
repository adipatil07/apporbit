import SectionTag from "@/components/ui/SectionTag";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We understand your idea, users, and goals. We define scope, timeline, and tech approach together.",
    icon: "🔍",
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(99,102,241,0.3)",
    border: "border-blue-500/20",
    tag: "Week 1",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes and high-fidelity Figma prototypes. You approve the design before code begins.",
    icon: "🎨",
    color: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.3)",
    border: "border-violet-500/20",
    tag: "Week 2",
  },
  {
    num: "03",
    title: "Development",
    desc: "Agile sprints with weekly demos. You see real progress every step of the way.",
    icon: "⚙️",
    color: "from-indigo-500 to-cyan-500",
    glow: "rgba(6,182,212,0.3)",
    border: "border-cyan-500/20",
    tag: "Week 3–8",
  },
  {
    num: "04",
    title: "Launch",
    desc: "We deploy, publish to app stores, and provide 30 days post-launch support — free.",
    icon: "🚀",
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.3)",
    border: "border-pink-500/20",
    tag: "Go live",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-slate-950 relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <SectionTag className="bg-white/5 text-indigo-300 border border-indigo-500/20">
            How we work
          </SectionTag>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            From idea to launch{" "}
            <span className="gradient-text">in 4 steps</span>
          </h2>
          <p className="text-slate-400">
            A proven process that keeps you in the loop from day one to go-live.
          </p>
        </div>

        {/* Timeline connector row */}
        <div className="hidden lg:flex items-center justify-between max-w-4xl mx-auto mb-8 px-12">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center flex-1">
              {/* Step circle */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-black text-white text-sm shadow-lg`}
                  style={{ boxShadow: `0 0 20px ${step.glow}` }}
                >
                  {step.num}
                </div>
                <span className="text-xs text-slate-500 font-medium whitespace-nowrap">{step.tag}</span>
              </div>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="flex-1 mx-3 h-px bg-gradient-to-r from-white/10 via-indigo-500/30 to-white/10 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-600 text-xs">›</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`group relative glow-card rounded-2xl p-6 overflow-hidden ${step.border} hover:border-opacity-60 transition-all duration-300`}
            >
              {/* Background number watermark */}
              <div
                className={`absolute -top-4 -right-4 text-8xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-10 select-none group-hover:opacity-20 transition-opacity`}
                aria-hidden
              >
                {step.num}
              </div>

              {/* Icon circle */}
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                style={{ boxShadow: `0 4px 20px ${step.glow}` }}
              >
                {step.icon}
              </div>

              {/* Mobile step badge */}
              <div className={`lg:hidden inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${step.color} text-white mb-3`}>
                {step.num} · {step.tag}
              </div>

              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 rounded-2xl bg-white/4 border border-white/8 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">Ready to start your project?</p>
            <p className="text-slate-400 text-sm">We typically start within 7 days of first contact.</p>
          </div>
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm whitespace-nowrap shrink-0"
          >
            Let&apos;s talk →
          </a>
        </div>
      </div>
    </section>
  );
}
