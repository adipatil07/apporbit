import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work",     label: "Work" },
  { href: "#stack",    label: "Stack" },
  { href: "#about",    label: "About" },
  { href: "#contact",  label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <span className="text-indigo-400 text-2xl">⊙</span>
            AppOrbit
          </Link>
          <ul className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} AppOrbit. Built in Pune, India 🇮🇳</p>
          <p className="gradient-text font-medium">Launching ideas into orbit.</p>
        </div>
      </div>
    </footer>
  );
}
