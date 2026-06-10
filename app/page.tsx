import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CodePanel from "@/components/ui/CodePanel";
import { TechLovePanel, TechStackPanel } from "@/components/ui/TechPanels";

export default function HomePage() {
  return (
    <div className="flex gap-6 xl:gap-8 min-h-screen">
      {/* Main content column */}
      <div className="flex-1 min-w-0 pb-12">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
      </div>

      {/* Right panels column — visible only on xl+ */}
      <aside className="hidden xl:flex flex-col gap-4 w-[310px] shrink-0 py-5 pt-[72px]">
        <CodePanel />
        <TechLovePanel />
        <TechStackPanel />
      </aside>
    </div>
  );
}
