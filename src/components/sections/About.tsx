import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

const highlights = [
  {
    icon: "✅",
    title: "Production-first mindset",
    desc: "We build for real users, not demos. Every decision is made with deployment in mind.",
  },
  {
    icon: "🌍",
    title: "Remote-ready from day one",
    desc: "We've worked with clients in Denmark, India, and beyond — async or sync, we adapt.",
  },
  {
    icon: "📐",
    title: "Design before code",
    desc: "Every project starts in Figma. We prototype before we build, saving time and money.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <SectionTag className="bg-white/5 text-indigo-300 border border-indigo-500/20">
              About AppOrbit
            </SectionTag>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Built by engineers<br />
              <span className="gradient-text">who ship</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              AppOrbit was founded with one belief: great software should be
              within reach for every business. We&apos;re a lean, focused team of
              developers from Pune, India, with real production experience across
              industries.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              We&apos;ve built apps for healthcare companies, legal platforms, and
              blockchain startups — and we&apos;ve shipped every single one on time.
            </p>

            <div className="flex flex-col gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-lg shrink-0 group-hover:border-indigo-500/30 transition-colors">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{h.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder card */}
          <div>
            <div className="glow-card rounded-3xl p-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/30">
                  AP
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Aditya Patil</h3>
                  <span className="text-sm text-indigo-400 font-medium">Founder & Lead Developer</span>
                </div>
              </div>

              <blockquote className="text-slate-300 leading-relaxed mb-6 text-sm border-l-2 border-indigo-500/50 pl-4 italic">
                &quot;I started AppOrbit because I saw too many businesses struggling
                to find developers who could actually ship. We fix that.&quot;
              </blockquote>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/6">
                  <p className="text-2xl font-black gradient-text-cyan">9.60</p>
                  <p className="text-xs text-slate-500 mt-1">CGPA · B.E. CompE</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/6">
                  <p className="text-2xl font-black text-white">Pune</p>
                  <p className="text-xs text-slate-500 mt-1">India 🇮🇳</p>
                </div>
              </div>

              <a
                href="mailto:adipatil4554@gmail.com"
                className="btn-shimmer w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
              >
                Work with Aditya →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
