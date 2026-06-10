"use client";

import { ArrowRight, Code2, Smartphone, Cloud, PenTool } from "lucide-react";
import { useGetServicesQuery } from "@/lib/features/portfolioApi";

const iconMap: Record<string, React.ReactNode> = {
  code2: <Code2 size={32} />,
  smartphone: <Smartphone size={32} />,
  cloud: <Cloud size={32} />,
  "pen-tool": <PenTool size={32} />,
};

export default function ServicesPage() {
  const { data: services } = useGetServicesQuery();

  return (
    <div className="py-10 max-w-4xl">
      <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">What I Offer</p>
      <h1 className="text-3xl font-bold text-white mb-4">Services</h1>
      <p className="text-slate-400 text-sm mb-10 max-w-lg">
        End-to-end development services to help businesses and startups bring their ideas to life. From concept to deployment.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {(services ?? []).map((service) => (
          <div
            key={service.id}
            className="group p-6 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-slate-600/60 hover:bg-slate-800/60 transition-all"
          >
            <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${service.bg} ${service.color} mb-5`}>
              {iconMap[service.icon] ?? <Code2 size={32} />}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>
            <button className={`flex items-center gap-1.5 text-sm font-medium ${service.color} group-hover:gap-3 transition-all`}>
              Learn More <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
