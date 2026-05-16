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
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionTag>About AppOrbit</SectionTag>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Built by engineers who ship
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              AppOrbit was founded with one belief: great software should be
              within reach for every business. We&apos;re a lean, focused team
              of developers from Pune, India, with real production experience
              across industries.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              We&apos;ve built apps for healthcare companies, legal platforms,
              and blockchain startups — and we&apos;ve shipped every single one
              on time.
            </p>

            <div className="flex flex-col gap-5">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4">
                  <span className="text-xl mt-0.5">{h.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-0.5">
                      {h.title}
                    </h4>
                    <p className="text-sm text-slate-500">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder card */}
          <div>
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
                  AP
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    Aditya Patil
                  </h3>
                  <span className="text-sm text-indigo-600 font-medium">
                    Founder & Lead Developer
                  </span>
                </div>
              </div>

              <blockquote className="text-slate-600 leading-relaxed mb-6 text-sm border-l-2 border-indigo-200 pl-4 italic">
                &quot;I started AppOrbit because I saw too many businesses
                struggling to find developers who could actually ship. We fix
                that.&quot;
              </blockquote>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-2xl">
                <div>
                  <p className="text-xl font-bold text-slate-900">9.60</p>
                  <p className="text-xs text-slate-500">CGPA · B.E. CompE</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900">Pune, IN</p>
                  <p className="text-xs text-slate-500">Based in India</p>
                </div>
              </div>

              <Button
                href="mailto:adipatil4554@gmail.com"
                className="w-full justify-center"
              >
                Work with Aditya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
