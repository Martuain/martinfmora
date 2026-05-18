import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-semibold text-lg mb-2">
            Martin Fernando Mora
          </div>

          <div className="text-zinc-500 text-sm max-w-md">
            AI-enabled product and transformation leadership for fintechs, scaleups and innovation teams.
          </div>
        </div>

        <div className="flex items-center gap-6 text-zinc-400">
          <a
            href="https://www.linkedin.com/in/martinfmora"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:martin.f.mora@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

