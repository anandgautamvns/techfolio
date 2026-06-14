"use client";

import { Code2, Monitor, Server, Database, Smartphone, Settings } from "lucide-react";
import { useGetTechStackQuery } from "@/lib/features/portfolioApi";
import { useAppSelector } from "@/lib/hooks";

const stackIconMap: Record<string, React.ReactNode> = {
  monitor:    <Monitor size={14} />,
  server:     <Server size={14} />,
  database:   <Database size={14} />,
  smartphone: <Smartphone size={14} />,
  settings:   <Settings size={14} />,
};

const darkBadges = [
  {
    name: "React",
    bg: "#0c1a2e", border: "#1e3a5f",
    render: () => (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <ellipse cx="14" cy="14" rx="12" ry="4.5" stroke="#38bdf8" strokeWidth="1.5" />
        <ellipse cx="14" cy="14" rx="12" ry="4.5" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(60 14 14)" />
        <ellipse cx="14" cy="14" rx="12" ry="4.5" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(120 14 14)" />
        <circle cx="14" cy="14" r="2.2" fill="#38bdf8" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    bg: "#111111", border: "#2a2a2a",
    render: () => (
      <span className="text-white font-black text-base leading-none select-none" style={{ fontFamily: "sans-serif" }}>N</span>
    ),
  },
  {
    name: "Node.js",
    bg: "#0a1f0a", border: "#14532d",
    render: () => (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <path d="M14 2 L24 8 L24 20 L14 26 L4 20 L4 8 Z" fill="#052e16" stroke="#22c55e" strokeWidth="1.2" />
        <text x="14" y="18" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold" fontFamily="sans-serif">N</text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    bg: "#0d1f3c", border: "#1e3a8a",
    render: () => (
      <span className="text-[#3b82f6] font-black text-xs leading-none select-none">TS</span>
    ),
  },
  {
    name: "Flutter",
    bg: "#0c1e2c", border: "#164e63",
    render: () => (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <path d="M5 14 L14 5 L23 14 L18 19 L14 15 L10 19 Z" fill="#38bdf8" opacity="0.9" />
        <path d="M10 19 L14 15 L18 19 L14 23 Z" fill="#0ea5e9" />
      </svg>
    ),
  },
];

const lightBadges = [
  {
    name: "React",
    bg: "#dbeafe", border: "#93c5fd",
    render: () => (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <ellipse cx="14" cy="14" rx="12" ry="4.5" stroke="#0ea5e9" strokeWidth="1.5" />
        <ellipse cx="14" cy="14" rx="12" ry="4.5" stroke="#0ea5e9" strokeWidth="1.5" transform="rotate(60 14 14)" />
        <ellipse cx="14" cy="14" rx="12" ry="4.5" stroke="#0ea5e9" strokeWidth="1.5" transform="rotate(120 14 14)" />
        <circle cx="14" cy="14" r="2.2" fill="#0ea5e9" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    bg: "#f1f5f9", border: "#e2e8f0",
    render: () => (
      <span className="text-slate-900 font-black text-base leading-none select-none" style={{ fontFamily: "sans-serif" }}>N</span>
    ),
  },
  {
    name: "Node.js",
    bg: "#dcfce7", border: "#86efac",
    render: () => (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <path d="M14 2 L24 8 L24 20 L14 26 L4 20 L4 8 Z" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.2" />
        <text x="14" y="18" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold" fontFamily="sans-serif">N</text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    bg: "#dbeafe", border: "#3b82f6",
    render: () => (
      <span className="text-[#1d4ed8] font-black text-xs leading-none select-none">TS</span>
    ),
  },
  {
    name: "Flutter",
    bg: "#e0f2fe", border: "#38bdf8",
    render: () => (
      <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
        <path d="M5 14 L14 5 L23 14 L18 19 L14 15 L10 19 Z" fill="#0ea5e9" opacity="0.85" />
        <path d="M10 19 L14 15 L18 19 L14 23 Z" fill="#0284c7" />
      </svg>
    ),
  },
];

export function TechLovePanel() {
  const isDark = useAppSelector((s) => s.portfolio.isDark);
  const badges = isDark ? darkBadges : lightBadges;

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: "1px solid var(--border-color)" }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Tech I Love</span>
        <Code2 size={14} style={{ color: "var(--text-muted)" }} />
      </div>
      <div className="px-4 py-3 flex items-center gap-2 flex-wrap">
        {badges.map((t) => (
          <div
            key={t.name}
            title={t.name}
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all cursor-default hover:scale-110"
            style={{ background: t.bg, border: `1px solid ${t.border}` }}
          >
            {t.render()}
          </div>
        ))}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl text-xs"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}
        >
          •••
        </div>
      </div>
    </div>
  );
}

export function TechStackPanel() {
  const { data: stack } = useGetTechStackQuery();

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: "1px solid var(--border-color)" }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Tech Stack</span>
        <button className="text-blue-400 text-xs hover:text-blue-300 transition-colors font-medium">
          View All
        </button>
      </div>
      <div>
        {(stack ?? []).map((item, i) => (
          <div
            key={item.id}
            className="flex items-start gap-3 px-4 py-2.5 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
            style={{ borderBottom: i < (stack?.length ?? 0) - 1 ? "1px solid var(--border-color)" : "none" }}
          >
            <span className={`mt-0.5 shrink-0 ${item.color}`}>
              {stackIconMap[item.icon] ?? <Settings size={14} />}
            </span>
            <div className="min-w-0">
              <p className={`text-xs font-semibold ${item.color}`}>{item.category}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.techs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
