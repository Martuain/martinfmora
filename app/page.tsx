import { About } from "@/components/sections/07_About";
import { BusinessOutcomes } from "@/components/sections/03_BusinessOutcomes";
import { ExpertiseEcosystem } from "@/components/sections/06_ExpertiseEcosystem";
import { FinalCTA } from "@/components/sections/09_FinalCTA";
import { Hero } from "@/components/sections/01_Hero";
import { HowIWork } from "@/components/sections/04_HowIWork";
import { Insights } from "@/components/sections/08_Insights";
import { SignalSystem } from "@/components/sections/05_SignalSystem";
import { TrustBar } from "@/components/sections/02_TrustBar";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <BusinessOutcomes />
      <HowIWork />
      <SignalSystem />
      <ExpertiseEcosystem />
      <About />
      <Insights />
      <FinalCTA />
    </main>
  );
}
