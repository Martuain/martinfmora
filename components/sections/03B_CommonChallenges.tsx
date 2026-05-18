const problems = [
  "Product delivery is slowing down",
  "Operations are fragmented across teams",
  "AI adoption lacks structure and ownership",
  "Payment infrastructure is difficult to scale",
  "Execution is disconnected from business priorities",
  "Complex initiatives lack operational alignment",
];

export default function CommonChallenges() {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
          Common Challenges
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-5xl mb-20">
          Typical operational and transformation problems I help organizations solve.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-zinc-300 text-lg"
            >
              {problem}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
