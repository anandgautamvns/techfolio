"use client";

import { MapPin, CheckCircle2 } from "lucide-react";
import { useGetExperienceQuery } from "@/lib/features/portfolioApi";

export default function ExperiencePage() {
  const { data: experience } = useGetExperienceQuery();

  return (
    <div className="py-10 max-w-3xl">
      <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">Career Journey</p>
      <h1 className="text-3xl font-bold text-white mb-8">Work Experience</h1>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-700/60" />

        <div className="space-y-8">
          {(experience ?? []).map((job, i) => (
            <div key={job.id} className="relative pl-12">
              {/* Timeline dot */}
              <div className={`absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 ${i === 0 ? "bg-blue-500 border-blue-400" : "bg-slate-700 border-slate-600"}`} />

              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-slate-600/60 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-white font-semibold">{job.role}</h3>
                    <p className="text-blue-400 text-sm font-medium">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-300 text-xs font-medium">{job.period}</p>
                    <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                      <MapPin size={10} /> {job.location}
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mt-3 mb-4">{job.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {job.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                      <CheckCircle2 size={12} className="text-green-400 mt-0.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
