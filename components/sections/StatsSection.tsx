"use client";

import { Calendar, Briefcase, Smile, Rocket } from "lucide-react";
import { useGetStatsQuery } from "@/lib/features/portfolioApi";

const iconMap: Record<string, React.ReactNode> = {
  calendar:  <Calendar size={22} />,
  briefcase: <Briefcase size={22} />,
  smile:     <Smile size={22} />,
  rocket:    <Rocket size={22} />,
};

const palette = [
  { icon: "rgba(99,102,241,0.15)",  text: "#818cf8" },
  { icon: "rgba(34,197,94,0.12)",   text: "#4ade80" },
  { icon: "rgba(234,179,8,0.12)",   text: "#facc15" },
  { icon: "rgba(249,115,22,0.12)",  text: "#fb923c" },
];

export default function StatsSection() {
  const { data: stats } = useGetStatsQuery();

  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8"
      style={{ borderTop: "1px solid #1a2744", borderBottom: "1px solid #1a2744" }}
    >
      {(stats ?? []).map((stat, i) => (
        <div
          key={stat.id}
          className="flex items-center gap-4 p-4 rounded-xl transition-colors"
          style={{ background: "#0f1829", border: "1px solid #1a2744" }}
        >
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
            style={{ background: palette[i % 4].icon, color: palette[i % 4].text }}
          >
            {iconMap[stat.icon] ?? <Briefcase size={22} />}
          </div>
          <div>
            <p className="text-2xl font-extrabold text-white leading-tight">{stat.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
