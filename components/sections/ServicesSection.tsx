"use client";

import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Cloud, PenTool } from "lucide-react";
import { useGetServicesQuery } from "@/lib/features/portfolioApi";

const iconMap: Record<string, React.ReactNode> = {
  code2:       <Code2 size={22} />,
  smartphone:  <Smartphone size={22} />,
  cloud:       <Cloud size={22} />,
  "pen-tool":  <PenTool size={22} />,
};

const iconBg: Record<string, string> = {
  "text-blue-400":   "rgba(59,130,246,0.12)",
  "text-purple-400": "rgba(167,139,250,0.12)",
  "text-green-400":  "rgba(74,222,128,0.12)",
  "text-orange-400": "rgba(251,146,60,0.12)",
};

export default function ServicesSection() {
  const { data: services } = useGetServicesQuery();

  return (
    <section className="py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left */}
        <div className="lg:w-52 shrink-0">
          <p className="text-blue-400 text-[11px] font-semibold uppercase tracking-widest mb-2">
            What I Do
          </p>
          <h2 className="text-2xl font-bold text-white mb-3">Services I Offer</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            End-to-end development services to help businesses and startups bring their ideas to life.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white px-4 py-2 rounded-lg transition-all"
            style={{ border: "1px solid #1e2d47" }}
          >
            Explore Services <ArrowRight size={13} />
          </Link>
        </div>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {(services ?? []).map((svc) => (
            <div
              key={svc.id}
              className="group flex flex-col p-5 rounded-xl transition-all cursor-pointer"
              style={{ background: "#0f1829", border: "1px solid #1a2744" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#233459";
                (e.currentTarget as HTMLDivElement).style.background = "#131e30";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1a2744";
                (e.currentTarget as HTMLDivElement).style.background = "#0f1829";
              }}
            >
              <div
                className={`flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${svc.color}`}
                style={{ background: iconBg[svc.color] ?? "rgba(59,130,246,0.12)" }}
              >
                {iconMap[svc.icon] ?? <Code2 size={22} />}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{svc.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">{svc.description}</p>
              <button className={`flex items-center gap-1.5 text-xs font-medium ${svc.color} transition-all group-hover:gap-2.5`}>
                Learn More <ArrowRight size={11} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
