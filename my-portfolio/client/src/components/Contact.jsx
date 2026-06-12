import React, { useState } from "react";
import axios from "axios";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Loader2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "karki0008@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=karki0008@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+977 9862276291",
    link: "tel:+9779862276291",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kathmandu, Nepal",
    link: null,
  },
];

const socialLinks = [
  { icon: Github, link: "https://github.com/nabin171", name: "GitHub" },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/nabin-karki-22a872203/",
    name: "LinkedIn",
  },
  { icon: Twitter, link: "https://twitter.com/yourusername", name: "Twitter" },
];

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/contact",
        formData,
        { headers: { "Content-Type": "application/json" } },
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error.response) {
        alert("Server error: " + (error.response.data.error || "Unknown error"));
      } else if (error.request) {
        alert("Network error. Make sure backend is running and CORS is allowed.");
      } else {
        alert("Error sending message: " + error.message);
      }
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build"
          accent="something"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open — let's create something amazing together."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left - info */}
          <Reveal>
            <div className="flex h-full flex-col gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Contact Information
                </h3>
                <div className="mt-6 space-y-3">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const inner = (
                      <div className="flex items-center gap-4">
                        <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                          <Icon size={20} />
                        </span>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            {item.title}
                          </p>
                          <p className="text-sm font-medium text-slate-800">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return item.link ? (
                      <a
                        key={item.title}
                        href={item.link}
                        className="block rounded-2xl p-2 transition-colors hover:bg-slate-50"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={item.title} className="p-2">
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Follow Me
                </h3>
                <div className="mt-4 flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                        className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:text-brand-600"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-auto rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
                <p className="italic text-slate-700">
                  "Let's collaborate and create something amazing together."
                </p>
                <p className="mt-3 font-display font-semibold text-slate-900">
                  — Nabin Karki
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right - form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-card"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
