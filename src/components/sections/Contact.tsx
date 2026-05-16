"use client";

import { useState } from "react";
import SectionTag from "@/components/ui/SectionTag";

const contactDetails = [
  { icon: "✉️", label: "adipatil4554@gmail.com", href: "mailto:adipatil4554@gmail.com" },
  { icon: "📞", label: "+91 9529323131", href: "tel:+919529323131" },
  { icon: "📍", label: "Pune, India", href: null },
];

const services = [
  "Mobile App Development",
  "Web Development",
  "Backend & Cloud",
  "UI/UX Design",
  "Blockchain Solution",
  "Other",
];

type FormState = { name: string; email: string; service: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition";

  return (
    <section id="contact" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left */}
          <div className="flex flex-col justify-center">
            <SectionTag className="bg-white/5 text-indigo-300 border border-indigo-500/20">
              Contact
            </SectionTag>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Let&apos;s build something<br />
              <span className="gradient-text">great together</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10">
              Have a project in mind? Drop us a message and we&apos;ll get back within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              {contactDetails.map((d) =>
                d.href ? (
                  <a key={d.label} href={d.href}
                    className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
                      {d.icon}
                    </span>
                    <span className="text-sm font-medium">{d.label}</span>
                  </a>
                ) : (
                  <span key={d.label} className="flex items-center gap-3 text-slate-400">
                    <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center">
                      {d.icon}
                    </span>
                    <span className="text-sm font-medium">{d.label}</span>
                  </span>
                )
              )}
            </div>
          </div>

          {/* Form */}
          <div className="glow-card rounded-3xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="text-5xl animate-float">🎉</div>
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="text-slate-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Your name</label>
                    <input name="name" type="text" placeholder="John Smith" required value={form.name} onChange={handleChange} className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Email</label>
                    <input name="email" type="email" placeholder="john@company.com" required value={form.email} onChange={handleChange} className={inputCls} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Service needed</label>
                  <select name="service" value={form.service} onChange={handleChange} className={inputCls + " bg-slate-900"}>
                    <option value="">Select a service…</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Your project</label>
                  <textarea name="message" rows={4} placeholder="Describe your idea, timeline, and budget…" required value={form.message} onChange={handleChange} className={inputCls + " resize-none"} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shimmer w-full py-3.5 rounded-xl text-white font-semibold text-sm disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                >
                  {loading ? "Sending…" : "Send message →"}
                </button>

                {error && <p className="text-sm text-red-400 text-center">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
