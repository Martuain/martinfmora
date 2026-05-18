const signals = ["Founder advisory", "AI transformation", "Digital product strategy", "Operating cadence"];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white/35">
      <div className="section-shell grid gap-4 py-6 text-sm font-semibold text-ink/60 md:grid-cols-4">
        {signals.map((signal) => (
          <div key={signal} className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-moss" aria-hidden="true" />
            {signal}
          </div>
        ))}
      </div>
    </section>
  );
}
