import SectionTag from "@/components/ui/SectionTag";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const tagColorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  purple: "bg-violet-50 text-violet-700 border-violet-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
};

export default function Work() {
  return (
    <section id="work" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <SectionTag>Featured work</SectionTag>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Projects that made a real impact
          </h2>
          <p className="text-slate-500 leading-relaxed">
            From healthcare platforms to blockchain transparency tools — work
            that ships and works.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300",
                project.wide && "md:col-span-2"
              )}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={cn(
                      "text-xs font-semibold px-3 py-1 rounded-full border",
                      tagColorMap[tag.color]
                    )}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Impact stats */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-50">
                {project.impact.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-400">{stat.label}</p>
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
