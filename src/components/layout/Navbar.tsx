"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work",     label: "Work" },
  { href: "#stack",    label: "Stack" },
  { href: "#about",    label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2 font-bold text-xl transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
          <span className="text-indigo-400 text-2xl">⊙</span>
          AppOrbit
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                scrolled
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 transition-all ${scrolled ? "bg-slate-800" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 transition-all ${scrolled ? "bg-slate-800" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 transition-all ${scrolled ? "bg-slate-800" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-300 font-medium" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-center font-semibold bg-indigo-600 text-white px-4 py-2.5 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
