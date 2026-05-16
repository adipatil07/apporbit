import SectionTag from "@/components/ui/SectionTag";
import { stack } from "@/data/stack";

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <SectionTag>Tech Stack</SectionTag>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tools we work with
          </h2>
          <p className="text-slate-500 leading-relaxed">
            A carefully selected stack that balances speed, reliability, and
            scalability.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:border-indigo-100 hover:bg-indigo-50/30 hover:shadow-md transition-all duration-200 cursor-default"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-xs font-medium text-slate-600 text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
