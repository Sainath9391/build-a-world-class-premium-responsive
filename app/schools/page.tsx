import { schoolMetrics, schoolOffers } from "@/data/site";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Schools"
        title="School partnerships that make AI learning visible, credible, and future-ready"
        description="From workshops to curriculum partnerships, Hai Buddy helps institutions launch modern AI learning programs without adding operational complexity."
        primaryCta="Partner With Us"
      />

      <section className="section-shell py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Partnership models"
            title="Built for principals, coordinators, and academic leaders"
            description="We help schools start with a workshop, scale into a curriculum layer, and eventually launch more immersive AI experiences."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {schoolOffers.map((offer, index) => (
            <Reveal key={offer.title} delay={index * 0.05}>
              <div className="soft-card h-full p-6">
                <offer.icon className="h-8 w-8 text-brand-orange" />
                <h3 className="mt-5 text-lg font-semibold text-brand-ink">{offer.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{offer.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Why schools choose Hai Buddy"
              title="A modern AI partner that feels exciting for students and practical for educators"
              description="Schools work with Hai Buddy to bring future-ready learning into campus life through structured, visible, and high-engagement programs."
              align="center"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {schoolMetrics.map((item) => (
                <div key={item.label} className="rounded-[24px] bg-white p-5 shadow-soft">
                  <div className="text-2xl font-bold text-brand-ink">{item.value}</div>
                  <div className="mt-2 text-sm text-brand-slate">{item.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
