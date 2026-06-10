"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

const lines = [
  [{ t: "keyword", v: "const " }, { t: "var", v: "developer" }, { t: "op", v: " = {" }],
  [{ t: "prop", v: "  name" }, { t: "op", v: ": " }, { t: "string", v: '"Your Name"' }, { t: "op", v: "," }],
  [{ t: "prop", v: "  role" }, { t: "op", v: ": " }, { t: "string", v: '"Senior Software Developer"' }, { t: "op", v: "," }],
  [{ t: "prop", v: "  skills" }, { t: "op", v: ": [" }, { t: "string", v: '"React"' }, { t: "op", v: ", " }, { t: "string", v: '"Node.js"' }, { t: "op", v: ", " }, { t: "string", v: '"Flutter"' }, { t: "op", v: "," }],
  [{ t: "string", v: '    "TypeScript"' }, { t: "op", v: ", " }, { t: "string", v: '"MongoDB"' }, { t: "op", v: ", " }, { t: "string", v: '"AWS"' }, { t: "op", v: "]," }],
  [{ t: "prop", v: "  passion" }, { t: "op", v: ": " }, { t: "string", v: '"Building scalable & impactful' }],
  [{ t: "string", v: '    solutions"' }, { t: "op", v: "," }],
  [{ t: "prop", v: "  focus" }, { t: "op", v: ": [" }, { t: "string", v: '"Web Development"' }, { t: "op", v: "," }],
  [{ t: "string", v: '    "Mobile Development"' }, { t: "op", v: "," }],
  [{ t: "string", v: '    "UI/UX"' }, { t: "op", v: ", " }, { t: "string", v: '"API Design"' }, { t: "op", v: "]," }],
  [{ t: "prop", v: "  experience" }, { t: "op", v: ": " }, { t: "string", v: '"8+ years"' }, { t: "op", v: "," }],
  [{ t: "prop", v: "  available" }, { t: "op", v: ": " }, { t: "keyword", v: "true" }],
  [{ t: "op", v: "};" }],
  [],
  [{ t: "comment", v: "// Let's build something amazing together 🚀" }],
];

const color: Record<string, string> = {
  keyword: "#c084fc",
  var: "#e2e8f0",
  prop: "#93c5fd",
  string: "#86efac",
  op: "#cbd5e1",
  comment: "#475569",
};

export default function CodePanel() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "#0f1829", border: "1px solid #1a2744" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ background: "#0a1020", borderBottom: "1px solid #1a2744" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/70 block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70 block" />
          <span className="w-3 h-3 rounded-full bg-green-500/70 block" />
        </div>
        <span className="text-[#64748b] text-xs font-mono">about.me.ts</span>
        <button
          onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }}
          className="text-slate-600 hover:text-slate-400 transition-colors"
          aria-label="Copy"
        >
          {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
        </button>
      </div>

      {/* Code */}
      <div className="px-3 py-3 font-mono text-[11px] leading-[1.65] overflow-x-auto">
        {lines.map((row, i) => (
          <div key={i} className="flex gap-3 min-w-0">
            <span className="text-[#1e3a5f] w-5 text-right shrink-0 select-none tabular-nums">{i + 1}</span>
            <span className="whitespace-pre">
              {row.map((tok, j) => (
                <span key={j} style={{ color: color[tok.t] ?? "#cbd5e1" }}>{tok.v}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
