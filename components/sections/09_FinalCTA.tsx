import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="contact" className="section-shell py-24">
      <Reveal className="grid gap-10 rounded-[2rem] border border-line bg-white/65 p-6 shadow-soft backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-clay">Final CTA</p>
          <h2 className="font-serif text-4xl leading-[1.04] text-ink md:text-6xl">
            Let us build the next useful system.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            Bring a messy strategic question, an AI initiative, or a digital product that needs sharper business logic.
          </p>
          <div className="mt-8">
            <Button href="mailto:${siteConfig.email}" variant="secondary">
              Email directly
            </Button>
          </div>
        </div>
        <ContactForm />
      </Reveal>
    </section>
  );
}
