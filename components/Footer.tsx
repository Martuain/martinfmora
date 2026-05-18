import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-serif text-3xl">Martin Mora</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-paper/68">
            Strategy, AI, and digital systems for teams that want momentum they can measure.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/45">Navigate</p>
            <div className="mt-4 grid gap-3 text-sm text-paper/72">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-paper">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/45">Connect</p>
            <div className="mt-4 flex gap-3">
              <Link aria-label="Email" href={`mailto:${siteConfig.email}`} className="rounded-full border border-white/15 p-2 hover:bg-white/10">
                <Mail className="size-4" />
              </Link>
              <Link aria-label="LinkedIn" href={siteConfig.social.linkedin} className="rounded-full border border-white/15 p-2 hover:bg-white/10">
                <Linkedin className="size-4" />
              </Link>
              <Link aria-label="GitHub" href={siteConfig.social.github} className="rounded-full border border-white/15 p-2 hover:bg-white/10">
                <Github className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
