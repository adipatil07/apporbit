"use client";

import { useState } from "react";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

const contactDetails = [
  { icon: "✉️", label: "aditya.patil@littersoft.com", href: "mailto:aditya.patil@littersoft.com" },
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

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., Resend, EmailJS, Formspree)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <SectionTag>Contact</SectionTag>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Let&apos;s build something great together
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Have a project in mind? Drop us a message and we&apos;ll get back
              within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              {contactDetails.map((d) =>
                d.href ? (
                  <a
                    key={d.label}
                    href={d.href}
                    className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    <span>{d.icon}</span>
                    <span className="text-sm font-medium">{d.label}</span>
                  </a>
                ) : (
                  <span
                    key={d.label}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span>{d.icon}</span>
                    <span className="text-sm font-medium">{d.label}</span>
                  </span>
                )
              )}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="text-5xl">🎉</div>
                <h3 className="text-xl font-bold text-slate-900">
                  Message sent!
                </h3>
                <p className="text-slate-500 text-sm">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Service needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition bg-white"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your idea, timeline, and budget…"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full justify-center">
                  Send message →
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
