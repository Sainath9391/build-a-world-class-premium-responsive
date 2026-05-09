import { MessageCircleMore } from "lucide-react";
import { contactCards } from "@/data/site";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Hai Buddy about programs, demos, workshops, or partnerships"
        description="Whether you're a parent, a student, a school, or a potential partner, we'd love to hear from you."
      />

      <section className="section-shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Reach us"
              title="Fast ways to connect"
              description="Choose the channel that works best and our team will respond with the right next step."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => (
                <div key={item.title} className="soft-card p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">{item.title}</div>
                  <div className="mt-3 text-lg font-semibold text-brand-ink">{item.value}</div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919876543210"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white shadow-soft"
            >
              <MessageCircleMore className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-brand-orange" placeholder="Full name" />
                <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-brand-orange" placeholder="Email address" />
                <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-brand-orange" placeholder="Phone number" />
                <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-brand-orange" placeholder="Student class or organization" />
              </div>
              <textarea
                className="mt-4 min-h-40 w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-brand-orange"
                placeholder="Tell us what you're looking for"
              />
              <Button className="mt-6" type="submit">Send Message</Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
