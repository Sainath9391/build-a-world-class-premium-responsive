import { Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { comparePlans, faqs, programs } from "@/data/site";

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Flexible AI learning programs for every stage of student growth"
        description="Explore premium summer camps, focused monthly cohorts, and deeper future-creator journeys built for classes 6 to 12."
      />

      <section className="section-shell py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Courses"
            title="Choose the learning path that matches your child's ambition"
            description="Every plan combines joyful learning design with visible outcomes, mentor support, and polished delivery."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.08}>
              <div
                className={`rounded-[32px] border p-8 shadow-soft ${
                  program.featured ? "border-brand-orange glow-border" : "border-slate-200"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-orange">{program.duration}</p>
                <h2 className="mt-4 font-[var(--font-heading)] text-2xl font-bold text-brand-ink">{program.title}</h2>
                <p className="mt-4 text-sm leading-7 text-brand-slate">{program.description}</p>
                <div className="mt-6 text-4xl font-bold text-brand-ink">{program.price}</div>
                <div className="mt-6 space-y-3">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-brand-slate">
                      <Check className="h-4 w-4 text-brand-orange" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="mt-8 w-full">{program.cta}</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Compare"
              title="See what changes as students go deeper"
              description="The higher tiers increase mentorship, live sessions, and portfolio depth while keeping the experience fun and structured."
            />
          </Reveal>
          <div className="mt-10 overflow-x-auto rounded-[32px] border border-slate-200 bg-white shadow-soft">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-4 border-b border-slate-200 bg-brand-ink text-sm font-semibold text-white">
                <div className="p-4">Feature</div>
                <div className="p-4">Summer Camp</div>
                <div className="p-4">Skill Builder</div>
                <div className="p-4">Future Creator</div>
              </div>
              {comparePlans.map((row) => (
                <div key={row[0]} className="grid grid-cols-4 border-b border-slate-100 text-sm text-brand-slate last:border-b-0">
                  {row.map((cell, index) => (
                    <div key={`${row[0]}-${index}`} className={`p-4 ${index === 0 ? "font-semibold text-brand-ink" : ""}`}>
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions from parents and students"
            description="A quick look at the most frequent questions before families choose a program."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.06}>
              <div className="soft-card p-6">
                <h3 className="text-lg font-semibold text-brand-ink">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
