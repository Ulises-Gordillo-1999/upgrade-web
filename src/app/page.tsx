import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { SoftwareSuitesSection } from "@/components/sections/SoftwareSuitesSection";
import { TechnicalSupportSection } from "@/components/sections/TechnicalSupportSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { InteractiveQuoteSection } from "@/components/sections/InteractiveQuoteSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-slate-50 dark:bg-[#090a0f] text-slate-900 dark:text-zinc-100 bg-tech-grid overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <InfrastructureSection />
        <SoftwareSuitesSection />
        <TechnicalSupportSection />
        <CaseStudiesSection />
        <InteractiveQuoteSection />
      </main>
      <Footer />
    </div>
  );
}
