"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Operational Diagnosis",
    description:
      "Clarifying business priorities, operational bottlenecks, delivery friction and organizational constraints before proposing solutions.",
  },
  {
    number: "02",
    title: "Strategic Alignment",
    description:
      "Aligning product, operations, technology and leadership stakeholders around measurable transformation objectives.",
  },
  {
    number: "03",
    title: "Transformation Design",
    description:
      "Designing scalable operational models, AI-enabled workflows and execution structures adapted to organizational maturity.",
  },
  {
    number: "04",
    title: "Execution Enablement",
    description:
      "Supporting delivery acceleration, cross-functional coordination and implementation governance across teams and initiatives.",
  },
  {
    number: "05",
    title: "Scale & Optimization",
    description:
      "Optimizing systems, operational workflows and delivery models to support sustainable long-term scalability.",
  },
];

export default function HowIWork() {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
          How I Work
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold max-w-5xl leading-tight mb-10">
          Structured transformation leadership built around operational clarity and measurable execution.
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-20">
          I combine strategic product thinking, operational transformation and delivery execution to help organizations move from complexity to scalable operational outcomes.
        </p>

        <div className="grid lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative border border-white/5 bg-white/[0.02] rounded-3xl p-8 hover:bg-white/[0.04] transition"
            >
              <div className="text-cyan-400 text-sm mb-4">{step.number}</div>

              <h3 className="text-2xl font-semibold mb-4 leading-tight">
                {step.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

