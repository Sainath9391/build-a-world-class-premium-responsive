import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <span className="inline-flex rounded-full bg-brand-yellow/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-brand-slate sm:text-lg">{description}</p>
    </div>
  );
}
