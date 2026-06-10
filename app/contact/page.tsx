"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { useGetProfileQuery } from "@/lib/features/portfolioApi";

export default function ContactPage() {
  const { data: profile } = useGetProfileQuery();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="py-10 max-w-4xl">
      <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
      <h1 className="text-3xl font-bold text-white mb-8">Contact Me</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Info */}
        <div className="space-y-6">
          <p className="text-slate-400 text-sm leading-relaxed">
            I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                <p className="text-white text-sm">{profile?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                <p className="text-white text-sm">{profile?.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Location</p>
                <p className="text-white text-sm">{profile?.location}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a href={profile?.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              <GithubIcon size={16} />
            </a>
            <a href={profile?.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all">
              <LinkedinIcon size={16} />
            </a>
            <a href={profile?.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
              <TwitterIcon size={16} />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-400 text-xs mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-slate-400 text-xs mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-slate-400 text-xs mb-1.5 block">Subject</label>
            <input
              type="text"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="Project Inquiry"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="text-slate-400 text-xs mb-1.5 block">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20"
          >
            {submitted ? (
              "Message Sent! ✓"
            ) : (
              <>
                <Send size={15} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
