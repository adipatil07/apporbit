import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 2,   unit: "+", label: "Years experience" },
  { target: 10,  unit: "+", label: "Projects shipped" },
  { target: 100, unit: "%", label: "On-time delivery" },
  { target: 3,   unit: "+", label: "Live App Store apps" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">

      {/* ── Gradient mesh background ── */}
      <div className="absolute inset-0 mesh-bg" />

      {/* ── Dot grid ── */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* ── Glowing orbs ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-600/15 blur-[100px] animate-pulse-glow animation-delay-700 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

      {/* ── Orbit visual (top-right) ── */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden lg:flex items-center justify-center opacity-60">
        {/* Core */}
        <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/50 flex items-center justify-center text-white text-xl animate-pulse-glow z-10">
          ⊙
        </div>
        {/* Ring 1 */}
        <div className="absolute w-52 h-52 rounded-full border border-indigo-500/30 animate-orbit">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-400 shadow-md shadow-indigo-400/60" />
        </div>
        {/* Ring 2 */}
        <div className="absolute w-80 h-80 rounded-full border border-violet-500/20 animate-orbit-reverse">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-400 shadow-md shadow-violet-400/60" />
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/60" />
        </div>
        {/* Ring 3 */}
        <div className="absolute w-[440px] h-[440px] rounded-full border border-slate-700/40 animate-orbit" style={{animationDuration:"30s"}}>
          <div className="absolute bottom-4 left-12 w-2 h-2 rounded-full bg-pink-400 shadow-md shadow-pink-400/50" />
        </div>
      </div>

      {/* ── Floating tech badges ── */}
      <div className="absolute top-32 right-24 hidden xl:block animate-float animation-delay-300">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-slate-300 font-medium flex items-center gap-2">
          <span>🐦</span> Flutter
        </div>
      </div>
      <div className="absolute bottom-40 right-16 hidden xl:block animate-float-delayed">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-slate-300 font-medium flex items-center gap-2">
          <span>⚛️</span> Next.js
        </div>
      </div>
      <div className="absolute top-48 right-72 hidden xl:block animate-float animation-delay-500">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-slate-300 font-medium flex items-center gap-2">
          <span>🔥</span> Firebase
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-6xl mx-auto px-6 py-32 pt-36 z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 animate-fade-up animate-badge-pulse">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-400/80" />
          Open for new projects
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 max-w-3xl animate-fade-up animation-delay-100">
          <span className="text-white">We build apps</span><br />
          <span className="text-white">that </span>
          <span className="gradient-text">orbit your vision</span>
        </h1>

        <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed animate-fade-up animation-delay-200">
          Cross-platform mobile apps, scalable web solutions, and enterprise
          software — from first commit to App Store launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-24 animate-fade-up animation-delay-300">
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
          >
            Start a project →
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-slate-300 font-semibold text-sm border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:text-white transition-all"
          >
            View our work
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 pt-8 border-t border-white/8 animate-fade-up animation-delay-500">
          {stats.map((stat, i) => (
            <div key={stat.label}>
              <p className="text-3xl font-black text-white tracking-tight">
                <AnimatedCounter target={stat.target} />
                <span className="gradient-text-cyan">{stat.unit}</span>
              </p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
