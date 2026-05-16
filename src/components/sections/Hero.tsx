import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";

const stats = [
  { target: 2, unit: "+", label: "Years experience" },
  { target: 10, unit: "+", label: "Projects shipped" },
  { target: 100, unit: "%", label: "On-time delivery" },
  { target: 3, unit: "+", label: "Live App Store apps" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 pt-16">
      {/* Orbit decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none hidden lg:block">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-indigo-600 shadow-lg shadow-indigo-200 flex items-center justify-center text-2xl">
            ⊙
          </div>
        </div>
        {[240, 360, 480].map((size, i) => (
          <div
            key={size}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="rounded-full border border-indigo-100"
              style={{ width: size, height: size }}
            />
          </div>
        ))}
        {/* Orbiting dots */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-3 h-3 rounded-full bg-indigo-400 absolute"
            style={{ top: "50%", left: "calc(50% + 120px)", marginTop: "-6px" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-violet-400 absolute"
            style={{ top: "calc(50% - 100px)", left: "calc(50% + 150px)" }}
          />
          <div
            className="w-2.5 h-2.5 rounded-full bg-blue-400 absolute"
            style={{ top: "calc(50% + 110px)", left: "calc(50% + 120px)" }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-indigo-100">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open for new projects
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 max-w-2xl">
          We build apps that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            orbit your vision
          </span>
        </h1>

        <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
          Cross-platform mobile apps, scalable web solutions, and enterprise
          software — from first commit to App Store launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20">
          <Button href="#contact" size="lg">
            Start a project
          </Button>
          <Button href="#work" variant="ghost" size="lg">
            View our work
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-10 max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-slate-900">
                <AnimatedCounter target={stat.target} />
                <span className="text-indigo-600">{stat.unit}</span>
              </p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
