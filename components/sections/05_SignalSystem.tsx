"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const signals = [
  {
    title: "ECB Wholesale CBDC MVP",
    impact: "Cross-network DvP interoperability",
    description:
      "Delivered a wholesale CBDC proof-of-concept enabling Delivery versus Payment interoperability across distributed financial networks.",
  },
  {
    title: "€470M Tokenized Real Estate Platform",
    impact: "94% settlement time reduction",
    description:
      "Designed and coordinated the delivery of a tokenized real estate platform integrating ERC-1400 standards and automated KYC/AML workflows.",
  },
  {
    title: "LATAM Mobile Banking Transformation",
    impact: "$2.5B transaction volume",
    description:
      "Led the migration of 2.5M users across 12 countries while accelerating enterprise digital adoption.",
  },
];

export default function SignalSystem() {
  return (
    <section className="border-t border-white/5 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
            Selected Work
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold max-w-5xl leading-tight mb-20">
            Delivering measurable impact across complex transformation initiatives.
          </h2>
        </Reveal>

        <div className="space-y-8">
          {signals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/5 bg-white/[0.02] p-10 hover:bg-white/[0.04] transition"
            >
              <div className="text-cyan-400 text-sm mb-4">
                {signal.impact}
              </div>

              <h3 className="text-3xl font-semibold mb-6">
                {signal.title}
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
