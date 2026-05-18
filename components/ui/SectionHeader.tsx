type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  tone?: "light" | "dark";
};

export function SectionHeader({ eyebrow, title, copy, tone = "light" }: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-clay">{eyebrow}</p>
      <h2 className={isDark ? "font-serif text-4xl leading-[1.04] text-paper text-balance md:text-6xl" : "font-serif text-4xl leading-[1.04] text-ink text-balance md:text-6xl"}>
        {title}
      </h2>
      {copy ? (
        <p className={isDark ? "mt-5 max-w-2xl text-lg leading-8 text-paper/68" : "mt-5 max-w-2xl text-lg leading-8 text-ink/70"}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
