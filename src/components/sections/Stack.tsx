import SectionTag from "@/components/ui/SectionTag";
import { stack } from "@/data/stack";

export default function Stack() {
  return (
    <section id="stack" className="py-28 bg-white relative overflow-hidden">
      {/* Accent gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100/60 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <SectionTag>Tech Stack</SectionTag>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Tools we{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              master
            </span>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            A carefully selected stack that balances speed, reliability, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="text-xs font-semibold text-slate-500 group-hover:text-indigo-600 transition-colors text-center leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
