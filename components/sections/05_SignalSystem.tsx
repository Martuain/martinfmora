"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const nodes = ["Markets", "Customers", "Data", "AI", "Product", "Operations", "Growth", "Leadership"];

export function SignalSystem() {
  return (
    <section className="section-shell py-24">
      <Reveal className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-clay">Signal system</p>
          <h2 className="font-serif text-4xl leading-[1.04] text-ink md:text-6xl">
            Make the business easier to read.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            Premium execution depends on the quality of the signals a team uses. The work creates visibility across
            markets, customers, operations, data, and leadership decisions.
          </p>
        </div>
        <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-line bg-white/50 p-6 shadow-soft">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(95,111,82,0.12),transparent_45%),linear-gradient(45deg,rgba(45,95,154,0.13),transparent_48%)]" />
          <div className="relative grid h-full grid-cols-2 content-center gap-4 sm:grid-cols-4">
            {nodes.map((node, index) => (
              <motion.div
                key={node}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.12 }}
                className="flex aspect-square items-center justify-center rounded-full border border-line bg-paper/80 text-center text-sm font-semibold text-ink/72"
              >
                {node}
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
