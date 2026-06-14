"use client";

import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { useGetProjectsQuery } from "@/lib/features/portfolioApi";

const categories = ["All", "Web", "Mobile", "Backend", "DevOps", "AI"];

const gradients: Record<string, string> = {
  Web: "from-blue-500/20 to-cyan-500/20",
  Mobile: "from-purple-500/20 to-pink-500/20",
  Backend: "from-green-500/20 to-teal-500/20",
  DevOps: "from-orange-500/20 to-red-500/20",
  AI: "from-violet-500/20 to-indigo-500/20",
};

export default function ProjectsPage() {
  const { data: projects } = useGetProjectsQuery();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? (projects ?? [])
      : (projects ?? []).filter((p) => p.category === activeCategory);

  return (
    <div className="py-10 max-w-5xl">
      <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">My Work</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Projects</h1>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={[
              "px-4 py-1.5 rounded-full text-xs font-medium transition-all",
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700",
            ].join(" ")}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 hover:border-slate-300 dark:hover:border-slate-600/60 overflow-hidden transition-all hover:-translate-y-0.5"
          >
            {/* Image placeholder */}
            <div className={`h-40 bg-gradient-to-br ${gradients[project.category] ?? "from-slate-200/50 to-slate-300/50 dark:from-slate-700/30 dark:to-slate-800/30"} flex items-center justify-center border-b border-slate-200 dark:border-slate-700/40`}>
              <span className="text-4xl opacity-60">
                {project.category === "Web" ? "🌐" : project.category === "Mobile" ? "📱" : project.category === "Backend" ? "⚙️" : project.category === "DevOps" ? "🚀" : "🤖"}
              </span>
            </div>

            <div className="flex flex-col flex-1 p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-slate-900 dark:text-white font-semibold text-sm leading-tight">{project.title}</h3>
                {project.featured && (
                  <Star size={12} className="text-yellow-400 shrink-0 mt-0.5 fill-yellow-400" />
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs border border-blue-500/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs transition-colors">
                  <GithubIcon size={13} /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 text-xs transition-colors">
                  <ExternalLink size={13} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
