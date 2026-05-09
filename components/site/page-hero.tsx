import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = "Get in Touch",
  secondaryCta = "Contact Us",
  primaryHref = "/contact",
  secondaryHref = "/contact",
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: string;
  secondaryCta?: string;
  primaryHref?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-yellow/20 via-white to-white">
      <div className="section-shell py-20 sm:py-24">
        <Reveal>
          <span className="inline-flex rounded-full bg-brand-orange/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl font-[var(--font-heading)] text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-slate sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryHref}>{primaryCta}</Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
