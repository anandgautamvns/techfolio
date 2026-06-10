"use client";

import Link from "next/link";
import { ArrowRight, Send, User } from "lucide-react";
import { useGetProfileQuery } from "@/lib/features/portfolioApi";
import NetworkGlobe from "@/components/ui/NetworkGlobe";

/* ── Inline SVG tech icons ─────────────────────────────── */
function ReactLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#38bdf8" strokeWidth="2" />
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#38bdf8" strokeWidth="2" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#38bdf8" strokeWidth="2" transform="rotate(120 20 20)" />
      <circle cx="20" cy="20" r="3" fill="#38bdf8" />
    </svg>
  );
}

function FlutterLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
      <path d="M8 20 L20 8 L32 20 L26 26 L20 20 L14 26 Z" fill="#38bdf8" opacity="0.9" />
      <path d="M14 26 L20 20 L26 26 L20 32 Z" fill="#0ea5e9" />
      <path d="M8 20 L14 26 L20 20 L14 14 Z" fill="#7dd3fc" opacity="0.6" />
    </svg>
  );
}

function NodeLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
      <path d="M20 4 L34 12 L34 28 L20 36 L6 28 L6 12 Z" fill="#166534" stroke="#22c55e" strokeWidth="1.5" />
      <text x="20" y="25" textAnchor="middle" fill="#22c55e" fontSize="14" fontWeight="bold" fontFamily="sans-serif">N</text>
    </svg>
  );
}

function MaterialLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
      <rect x="4" y="4" width="32" height="32" rx="4" fill="#6d28d9" opacity="0.3" stroke="#a78bfa" strokeWidth="1.5" />
      <text x="20" y="26" textAnchor="middle" fill="#c4b5fd" fontSize="16" fontWeight="bold" fontFamily="sans-serif">M</text>
    </svg>
  );
}

/* ── Floating icon card ─────────────────────────────────── */
function FloatingCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={[
        "absolute flex items-center justify-center w-14 h-14",
        "rounded-2xl border shadow-2xl backdrop-blur-sm",
        "border-[#1a2744] bg-[#0f1829]/90",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────── */
export default function HeroSection() {
  const { data: profile } = useGetProfileQuery();

  return (
    <div className="relative">
      {/* ── Top bar ─────────────────────────────────────── */}
      <div className="flex items-center justify-between py-5 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="pulse-dot relative flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-sm text-slate-400">Available for new opportunities</span>
        </div>
        <Link
          href="/contact"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-600 text-white text-sm font-medium hover:border-slate-400 hover:bg-white/5 transition-all"
        >
          Let&apos;s Connect <Send size={13} />
        </Link>
      </div>

      {/* ── Main hero row ───────────────────────────────── */}
      <div className="relative flex items-center min-h-[520px] lg:min-h-[560px]">
        {/* Left: text */}
        <div className="relative z-10 flex flex-col max-w-[480px]">
          <p className="text-slate-400 text-lg mb-1 font-light">Hi, I&apos;m</p>

          <h1 className="text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-3">
            {profile?.name ?? "Your Name"}
          </h1>

          <h2 className="text-2xl xl:text-3xl font-bold gradient-text mb-3">
            {profile?.role ?? "Senior Software Developer"}
          </h2>

          <p className="text-slate-400 text-base mb-5">
            {profile?.tagline ?? "Full Stack Web & Mobile Developer"}
          </p>

          <p className="text-[#94a3b8] text-[15px] leading-7 mb-8 max-w-[430px]">
            I build scalable, performant, and user-centric applications for the web and mobile.
            With{" "}
            <span className="text-blue-400 font-semibold">8+ years</span>{" "}
            of experience, I turn ideas into impactful digital solutions.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all"
              style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", boxShadow: "0 4px 24px rgba(37,99,235,0.3)" }}
            >
              View My Work <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm text-slate-300 hover:text-white transition-all hover:bg-white/5"
              style={{ borderColor: "#233459" }}
            >
              <User size={15} /> Contact Me
            </Link>
          </div>
        </div>

        {/* Center: globe + floating icons */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
          style={{ width: "480px", height: "480px" }}>
          {/* Globe */}
          <div className="absolute inset-0 opacity-85">
            <NetworkGlobe />
          </div>

          {/* React */}
          <FloatingCard className="animate-float-a" style={{ top: "30px", left: "120px" } as React.CSSProperties}>
            <ReactLogo />
          </FloatingCard>

          {/* Flutter */}
          <FloatingCard className="animate-float-b" style={{ top: "160px", right: "0px" } as React.CSSProperties}>
            <FlutterLogo />
          </FloatingCard>

          {/* Node.js */}
          <FloatingCard className="animate-float-c" style={{ bottom: "120px", left: "155px" } as React.CSSProperties}>
            <NodeLogo />
          </FloatingCard>

          {/* Material UI */}
          <FloatingCard className="animate-float-d" style={{ bottom: "60px", right: "30px" } as React.CSSProperties}>
            <MaterialLogo />
          </FloatingCard>
        </div>
      </div>
    </div>
  );
}
