import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-ink text-paper shadow-soft hover:-translate-y-0.5 hover:bg-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        variant === "secondary" &&
          "border border-line bg-white/50 text-ink hover:-translate-y-0.5 hover:border-ink/30 hover:bg-white",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
