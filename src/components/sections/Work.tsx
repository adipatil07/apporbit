import SectionTag from "@/components/ui/SectionTag";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const tagColorMap: Record<string, string> = {
  blue:   "ptag-blue",
  green:  "ptag-green",
  purple: "ptag-purple",
  orange: "ptag-orange",
};

export default function Work() {
  return (
    <section id="work" className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-indigo-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag className="bg-white/5 text-indigo-300 border border-indigo-500/20">
            Featured work
          </SectionTag>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Projects that made{" "}
            <span className="gradient-text">a real impact</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            From healthcare platforms to blockchain transparency tools — work
            that ships and works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "glow-card rounded-2xl p-8 group",
                project.wide && "md:col-span-2"
              )}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={cn("text-xs font-semibold px-3 py-1 rounded-full", tagColorMap[tag.color])}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Impact stats */}
              <div className="flex flex-wrap gap-6 pt-5 border-t border-white/6">
                {project.impact.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-bold gradient-text-cyan">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
