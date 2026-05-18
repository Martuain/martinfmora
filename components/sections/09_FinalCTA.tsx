export default function FinalCTA() {
  return (
    <section id="contact" className="py-40 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
          Strategic Engagement
        </div>

        <h2 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-10">
          Need help navigating operational complexity or AI transformation?
        </h2>

        <p className="text-zinc-400 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          I work with fintechs, digital platforms and innovation teams looking to modernize operations, improve delivery execution and structure scalable transformation initiatives.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendly.com/martin-f-mora/30-minute-meeting"
            target="_blank"
            className="inline-flex px-10 py-5 rounded-full bg-blue-500 hover:bg-blue-400 transition font-medium"
          >
            Schedule a Strategic Conversation
          </a>

          <a
            href="mailto:martin.f.mora@gmail.com"
            className="inline-flex px-10 py-5 rounded-full border border-white/10 hover:border-white/30 transition"
          >
            Contact Directly
          </a>
        </div>
      </div>
    </section>
  );
}
