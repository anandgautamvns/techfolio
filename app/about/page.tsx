"use client";

import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";
import { useGetAboutMeQuery, useGetProfileQuery } from "@/lib/features/portfolioApi";

export default function AboutPage() {
  const { data: about } = useGetAboutMeQuery();
  const { data: profile } = useGetProfileQuery();

  return (
    <div className="py-10 max-w-4xl">
      <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">Who I Am</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">About Me</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left */}
        <div className="space-y-6">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-slate-300 dark:border-slate-700/60 flex items-center justify-center text-5xl">
            👨‍💻
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{profile?.name}</h2>
            <p className="text-blue-400 text-sm mb-4">{profile?.role}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <MapPin size={14} className="text-blue-400" /> {profile?.location}
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <Mail size={14} className="text-blue-400" /> {profile?.email}
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <Phone size={14} className="text-blue-400" /> {profile?.phone}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <GraduationCap size={16} className="text-blue-400" /> Education
            </h3>
            {(about?.education ?? []).map((edu, i) => (
              <div key={i} className="pl-4 border-l-2 border-blue-500/40">
                <p className="text-slate-900 dark:text-white text-sm font-medium">{edu.degree}</p>
                <p className="text-slate-500 text-xs">{edu.school} · {edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40">
            <h3 className="text-slate-900 dark:text-white font-semibold mb-3">My Story</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{about?.story}</p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40">
            <h3 className="text-slate-900 dark:text-white font-semibold mb-3">My Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{about?.mission}</p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40">
            <h3 className="text-slate-900 dark:text-white font-semibold mb-3">Fun Facts</h3>
            <ul className="space-y-2">
              {(about?.funFacts ?? []).map((fact, i) => (
                <li key={i} className="text-slate-600 dark:text-slate-400 text-sm">{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
