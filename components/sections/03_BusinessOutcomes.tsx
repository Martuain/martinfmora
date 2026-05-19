"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const outcomes = [
  {
    title: "AI Operational Transformation",
    short: "AI-enabled workflows and operational intelligence.",
    expanded:
      "Designing AI-enabled workflows, operational intelligence systems and automation initiatives that reduce friction, improve execution velocity and unlock scalable efficiency across business operations.",
  },
  {
    title: "Fintech Infrastructure Modernization",
    short: "Modernizing payment and compliance systems.",
    expanded:
      "Helping fintechs and payment organizations modernize reconciliation, orchestration, compliance and transaction systems across evolving digital payment ecosystems.",
  },
  {
    title: "Product Strategy & Leadership",
    short: "Roadmaps, validation and scalable execution.",
    expanded:
      "Aligning product vision, delivery execution and business priorities through strategic roadmapping, discovery frameworks and scalable operational planning.",
  },
  {
    title: "Delivery Acceleration",
    short: "Improving release velocity and execution.",
    expanded:
      "Optimizing delivery organizations, agile execution and platform operations to increase release velocity, scalability and cross-functional alignment.",
  },
  {
    title: "Web3 & Tokenization",
    short: "Digital assets and blockchain ecosystems.",
    expanded:
      "Designing blockchain-enabled products, tokenization ecosystems and digital asset initiatives aligned with regulatory, operational and business requirements.",
  },
  {
    title: "Platform Scalability",
    short: "Cloud-native distributed systems.",
    expanded:
      "Supporting cloud-native architectures, distributed systems and operational scaling initiatives for high-growth platforms and enterprise environments.",
  },
];

export default function BusinessOutcomes() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
          Transformation Areas
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-5xl mb-10">
          Solving high-impact operational and product challenges across modern digital ecosystems.
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-16">
          From AI operational enablement to fintech infrastructure modernization, I help organizations align strategy, technology and execution to create scalable business outcomes.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 cursor-pointer"
              onClick={() => setActive(active === index ? null : index)}
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

              <p className="text-zinc-400 leading-relaxed">
                {active === index ? item.expanded : item.short}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
