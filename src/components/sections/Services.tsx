import SectionTag from "@/components/ui/SectionTag";
import { services } from "@/data/services";

const tagColors: Record<string, string> = {
  default: "bg-slate-100 text-slate-600",
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <SectionTag>What we do</SectionTag>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            End-to-end digital products, built to last
          </h2>
          <p className="text-slate-500 leading-relaxed">
            We take your idea from whiteboard to world-class product across
            every platform your users are on.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full border border-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
