import Image from "next/image";
import { team } from "@/data/site";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/ui/reveal";

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="A founder-led team building premium AI education for the next generation"
        description="Our team blends curriculum craft, deep student empathy, and modern product thinking to make AI learning joyful and credible."
      />

      <section className="section-shell py-16 sm:py-24">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[440px] overflow-hidden bg-gradient-to-br from-brand-yellow/25 via-white to-brand-orange/10 sm:min-h-[560px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,213,74,0.16),transparent_52%)]" />
                <div className="absolute inset-6 overflow-hidden rounded-[30px] bg-white shadow-[0_24px_60px_rgba(17,24,39,0.16)]">
                  <Image src={team[0].image} alt="Hai Buddy team" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <div className="inline-flex w-fit rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
                  Founding team
                </div>
                <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-bold text-brand-ink sm:text-4xl">
                  The people building Hai Buddy for the next generation of learners.
                </h2>
                <p className="mt-5 text-sm leading-8 text-brand-slate sm:text-base">
                  Our leadership team combines a strong education vision, product execution, and student-first thinking to make AI learning joyful, premium, and future-ready.
                </p>
                <div className="mt-8 space-y-4">
                  {team.map((member) => (
                    <div key={member.name} className="rounded-[22px] bg-brand-mist px-5 py-4">
                      <div className="font-semibold text-brand-ink">{member.name}</div>
                      <div className="mt-1 text-sm text-brand-orange">{member.role}</div>
                      <div className="mt-2 text-sm leading-7 text-brand-slate">{member.bio}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
