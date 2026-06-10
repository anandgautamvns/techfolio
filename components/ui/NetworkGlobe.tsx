"use client";

const CX = 250, CY = 250;

function ring(r: number, count: number, offset = 0) {
  return Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2 + offset;
    return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
  });
}

const r1 = ring(185, 12, 0);
const r2 = ring(128, 10, 0.31);
const r3 = ring(75, 7, 0.9);
const extra = [
  { x: 298, y: 158 }, { x: 348, y: 188 }, { x: 378, y: 258 },
  { x: 340, y: 322 }, { x: 275, y: 355 }, { x: 195, y: 340 },
  { x: 148, y: 280 }, { x: 155, y: 205 }, { x: 210, y: 158 },
  { x: 320, y: 130 }, { x: 175, y: 135 }, { x: 390, y: 175 },
];
const center = { x: CX, y: CY };

const nodes = [...r1, ...r2, ...r3, ...extra, center];

function dist(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

const edges: [number, number][] = [];
const maxDist = 115;
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    if (dist(nodes[i], nodes[j]) < maxDist) {
      edges.push([i, j]);
    }
  }
}

const brightIdx = new Set([0, 3, 6, 9, 12, 15, 17, 21, 24, nodes.length - 1]);

export default function NetworkGlobe() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#1e3a8a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle cx={CX} cy={CY} r="210" fill="url(#gGlow)" />
      <circle cx={CX} cy={CY} r="110" fill="url(#gCenter)" />

      {/* Ring guides */}
      <circle cx={CX} cy={CY} r="185" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.18" />
      <circle cx={CX} cy={CY} r="128" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.14" />
      <circle cx={CX} cy={CY} r="75"  stroke="#60a5fa" strokeWidth="0.6" strokeOpacity="0.20" />

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="#3b82f6"
          strokeWidth="0.6"
          strokeOpacity="0.22"
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => {
        const isBright = brightIdx.has(i);
        const isCenter = i === nodes.length - 1;
        const r = isCenter ? 5 : isBright ? 2.8 : 1.8;
        return (
          <g key={i}>
            {isBright && (
              <circle cx={n.x} cy={n.y} r={r + 4} fill="#60a5fa" fillOpacity="0.08" />
            )}
            <circle
              cx={n.x} cy={n.y} r={r}
              fill={isCenter ? "#93c5fd" : isBright ? "#60a5fa" : "#3b82f6"}
              fillOpacity={isCenter ? 1 : isBright ? 0.9 : 0.55}
            />
          </g>
        );
      })}
    </svg>
  );
}
