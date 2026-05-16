import SectionTag from "@/components/ui/SectionTag";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-indigo-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag>What we do</SectionTag>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            End-to-end digital products,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              built to last
            </span>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            We take your idea from whiteboard to world-class product across
            every platform your users are on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glow-card-light rounded-2xl p-6 group cursor-default"
            >
              {/* Icon with gradient bg */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 flex items-center justify-center text-2xl mb-5 group-hover:from-indigo-100 group-hover:to-violet-100 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full border border-slate-100 group-hover:border-indigo-100 group-hover:text-indigo-600 group-hover:bg-indigo-50/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
