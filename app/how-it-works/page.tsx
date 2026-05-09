import { journey } from "@/data/site";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/ui/reveal";

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A full learning journey designed for momentum, confidence, and visible progress"
        description="Hai Buddy turns complex AI learning into a step-by-step mission path that keeps students excited and parents informed."
      />

      <section className="section-shell py-16 sm:py-24">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-orange to-transparent md:block" />
          <div className="space-y-6">
            {journey.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft md:ml-16">
                  <div className="absolute -left-16 top-6 hidden h-12 w-12 items-center justify-center rounded-full bg-brand-orange font-bold text-white md:flex">
                    {index + 1}
                  </div>
                  <div className="inline-flex rounded-full bg-brand-yellow/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink">
                    Step {index + 1}
                  </div>
                  <h2 className="mt-4 font-[var(--font-heading)] text-2xl font-bold text-brand-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-8 text-brand-slate">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
