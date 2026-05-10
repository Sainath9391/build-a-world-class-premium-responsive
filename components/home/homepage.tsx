"use client";

import { motion } from "framer-motion";
import { Check, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import {
  heroBadges,
  mascotIcons,
  pageIntro,
  schoolOffers,
  stats,
  subjects,
  team,
  trustPillars,
  journey,
} from "@/data/site";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

const particles = Array.from({ length: 16 }).map((_, index) => ({
  id: index,
  x: ((index % 4) - 1.5) * 92 + (index % 2 === 0 ? 18 : -18),
  y: (Math.floor(index / 4) - 1.5) * 74 + (index % 3 === 0 ? 12 : -12),
  duration: 4 + (index % 4),
  delay: index * 0.2,
}));

export function Homepage() {
  const whatsappHref = "https://wa.me/9391682898";

  return (
    <>
      <HeroSection />

      <section className="section-shell -mt-16 relative z-10 pb-6">
        <div className="grid gap-4 md:grid-cols-3">
          {trustPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.1}>
              <div className="glass-panel rounded-[28px] px-6 py-6 shadow-soft">
                <pillar.icon className="h-8 w-8 text-brand-orange" />
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-slate">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="What we teach"
              title="A future-ready AI curriculum that feels playful, not overwhelming"
              description="From first prompts to project confidence, students move through a carefully crafted progression."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {subjects.map((subject, index) => (
              <Reveal key={subject.title} delay={index * 0.08}>
                <TiltCard className="h-full">
                  <div className="soft-card h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
                      <subject.icon className="h-7 w-7 text-brand-orange" />
                    </div>
                    <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-bold text-brand-ink">{subject.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-slate">{subject.description}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
            <Reveal delay={0.28} className="md:col-span-2 xl:col-span-3">
              <div className="soft-card overflow-hidden p-3 sm:p-4">
                <div className="relative h-[280px] overflow-hidden rounded-[24px] bg-gradient-to-br from-brand-yellow/20 via-white to-brand-orange/10 sm:h-[360px] lg:h-[420px]">
                  <Image
                    src="/teaching Ai.png"
                    alt="Hai Buddy teaching AI to school students"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                    <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
                      Learning in action
                    </div>
                    <h3 className="mt-4 max-w-xl font-[var(--font-heading)] text-2xl font-bold text-white sm:text-3xl">
                      Big ideas become fun, visual, and easy to explore with guided AI learning.
                    </h3>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="A learning journey that keeps momentum high and progress visible"
            description="Students move through a structured mission path with live support, practice, and celebration built in."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {journey.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="soft-card relative overflow-hidden p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-yellow" />
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-slate">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Schools"
              title="Partner With Schools for Future Ready Students"
              description="Hai Buddy helps schools launch visible, credible, and exciting AI learning initiatives with confidence."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {schoolOffers.map((offer, index) => (
              <Reveal key={offer.title} delay={index * 0.05}>
                <div className="soft-card h-full p-6">
                  <offer.icon className="h-8 w-8 text-brand-orange" />
                  <h3 className="mt-5 text-lg font-semibold text-brand-ink">{offer.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-slate">{offer.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/schools">Partner With Us</Button>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Team"
            title="A team blending education craft, AI expertise, and product execution"
            description="Hai Buddy is built by people who care deeply about student confidence and high-quality learning design."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-brand-yellow/25 via-white to-brand-orange/10 sm:min-h-[520px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,213,74,0.16),transparent_52%)]" />
                <div className="absolute inset-6 overflow-hidden rounded-[30px] bg-white shadow-[0_24px_60px_rgba(17,24,39,0.16)]">
                  <Image src={team[0].image} alt="Hai Buddy team" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <div className="inline-flex w-fit rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
                  Meet the team
                </div>
                <h3 className="mt-5 font-[var(--font-heading)] text-3xl font-bold text-brand-ink sm:text-4xl">
                  One mission, three builders, and a big vision for AI education.
                </h3>
                <p className="mt-5 text-sm leading-8 text-brand-slate sm:text-base">
                  Hai Buddy is led by a focused founding team combining product thinking, student experience design, and curriculum-led AI education.
                </p>
                <div className="mt-8 space-y-4">
                  {team.map((member) => (
                    <div key={member.name} className="rounded-[22px] bg-brand-mist px-5 py-4">
                      <div className="font-semibold text-brand-ink">{member.name}</div>
                      <div className="mt-1 text-sm text-brand-orange">{member.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-brand-orange to-[#ffb01f] px-6 py-12 text-white shadow-glow sm:px-10 sm:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">Start today</p>
              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold leading-tight sm:text-5xl">
                Give your child the future today
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85">
                Help them learn the language of the future through storytelling, live classes, mentor guidance, and joyful AI building.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={whatsappHref} className="bg-white !text-brand-ink hover:!text-brand-orange">
                  <span className="inline-flex items-center gap-2">
                    <MessageCircleMore className="h-4 w-4" />
                    Get in Touch
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </>
  );
}

function HeroSection() {
  const orbitRadius = 182;
  const whatsappHref = "https://wa.me/9391682898";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid hero-grid opacity-80" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-yellow/30 blur-3xl" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />

      <div className="section-shell relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <Reveal>
          <div className="inline-flex rounded-full bg-brand-orange/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
            {pageIntro.subtitle}
          </div>
          <h1 className="mt-6 max-w-2xl font-[var(--font-heading)] text-4xl font-bold leading-[1.05] text-brand-ink sm:text-5xl lg:text-6xl">
            {pageIntro.title.split("AI").map((part, index, array) => (
              <span key={`${part}-${index}`}>
                {part}
                {index < array.length - 1 ? <span className="text-gradient">AI</span> : null}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-slate sm:text-lg">
            Hai Buddy helps students from classes 6 to 12 learn Artificial Intelligence through fun stories, missions, workshops, live classes, and confidence-building projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappHref}>
              <span className="inline-flex items-center gap-2">
                <MessageCircleMore className="h-4 w-4" />
                Get in Touch
              </span>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-brand-ink shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto flex aspect-square max-w-[560px] items-center justify-center">
            <div className="absolute inset-4 rounded-full border border-brand-orange/20 bg-gradient-to-br from-brand-orange/10 to-brand-yellow/20 blur-2xl" />
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-brand-orange/35 animate-orbit" />
            <div className="absolute inset-10 rounded-full border border-brand-yellow/50" />
            {mascotIcons.map((Icon, index) => {
              const angle = (-Math.PI / 2) + (index / mascotIcons.length) * Math.PI * 2;
              const x = Math.cos(angle) * orbitRadius;
              const y = Math.sin(angle) * orbitRadius;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.8 }}
                  className="absolute left-1/2 top-1/2 z-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white bg-white/95 shadow-soft"
                >
                  <Icon className="h-6 w-6 text-brand-orange" />
                </motion.div>
              );
            })}

            {particles.map((particle) => (
              <motion.span
                key={particle.id}
                className="absolute h-2 w-2 rounded-full bg-brand-orange/50"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 flex h-full w-full items-center justify-center"
            >
              <div className="relative h-[470px] w-[330px] sm:h-[590px] sm:w-[430px]">
                <div className="absolute inset-0 rounded-full bg-brand-orange/15 blur-3xl" />
                <Image
                  src="/robot-mascot.png"
                  alt="Hai Buddy AI robot mascot waving"
                  fill
                  priority
                  className="object-contain object-center drop-shadow-[0_30px_60px_rgba(17,24,39,0.22)]"
                />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
