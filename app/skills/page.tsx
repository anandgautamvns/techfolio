"use client";

import { useGetSkillsQuery } from "@/lib/features/portfolioApi";

const categories = ["Frontend", "Backend", "Mobile", "Database", "DevOps"];

export default function SkillsPage() {
  const { data: skills } = useGetSkillsQuery();

  return (
    <div className="py-10 max-w-4xl">
      <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">What I Know</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Skills & Technologies</h1>

      <div className="space-y-10">
        {categories.map((cat) => {
          const catSkills = (skills ?? []).filter((s) => s.category === cat);
          if (!catSkills.length) return null;
          return (
            <div key={cat}>
              <h2 className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">{cat}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {catSkills.map((skill) => (
                  <div key={skill.id} className="p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-900 dark:text-white text-sm font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-xs font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
