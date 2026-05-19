import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

import { Hero } from "@/components/sections/01_Hero";
import { TrustBar } from "@/components/sections/02_TrustBar";
import WhoIWorkWith from "@/components/sections/02A_WhoIWorkWith";
import BusinessOutcomes from "@/components/sections/03_BusinessOutcomes";
import EngagementModels from "@/components/sections/03A_EngagementModels";
import CommonChallenges from "@/components/sections/03B_CommonChallenges";
import HowIWork from "@/components/sections/04_HowIWork";
import SignalSystem from "@/components/sections/05_SignalSystem";
import ExpertiseEcosystem from "@/components/sections/06_ExpertiseEcosystem";
import About from "@/components/sections/07_About";
import Insights from "@/components/sections/08_Insights";
import FinalCTA from "@/components/sections/09_FinalCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0f1419] text-white">
      <Header />

      <Hero />

      <TrustBar />

      <WhoIWorkWith />

      <BusinessOutcomes />

      <EngagementModels />

      <CommonChallenges />

      <HowIWork />

      <SignalSystem />

      <ExpertiseEcosystem />

      <About />

      <Insights />

      <FinalCTA />

      <Footer />
    </main>
  );
}
