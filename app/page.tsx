import Navigation from "@/components/Navigation";

import Hero from "@/components/sections/01_Hero";
import TrustMetrics from "@/components/sections/02_TrustMetrics";
import WhoIWorkWith from "@/components/sections/02A_WhoIWorkWith";
import BusinessOutcomes from "@/components/sections/03_BusinessOutcomes";
import EngagementModels from "@/components/sections/03A_EngagementModels";
import CommonChallenges from "@/components/sections/03B_CommonChallenges";
import HowIWork from "@/components/sections/04_HowIWork";
import CaseStudies from "@/components/sections/05_CaseStudies";
import ExpertiseEcosystem from "@/components/sections/06_ExpertiseEcosystem";
import About from "@/components/sections/07_About";
import Insights from "@/components/sections/08_Insights";
import FinalCTA from "@/components/sections/09_FinalCTA";
import Footer from "@/components/sections/10_Footer";

export default function HomePage() {
  return (
    <main className="bg-[#0f1419] text-white overflow-hidden">
      <Navigation />

      <Hero />
      <TrustMetrics />
      <WhoIWorkWith />
      <BusinessOutcomes />
      <EngagementModels />
      <CommonChallenges />
      <HowIWork />
      <CaseStudies />
      <ExpertiseEcosystem />
      <About />
      <Insights />
      <FinalCTA />
      <Footer />
    </main>
  );
}
