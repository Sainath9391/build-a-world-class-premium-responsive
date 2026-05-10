import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { footerLinks } from "@/data/site";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-mist">
      <div className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-brand-slate">
              Hai Buddy helps school students learn AI through storytelling, structured mentorship, and future-ready confidence.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-brand-slate">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                haibuddyofficial@gmail.com
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-orange" />
                +91 93916 82898
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-heading)] text-base font-bold text-brand-ink">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-brand-slate">
              {footerLinks.quickLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-heading)] text-base font-bold text-brand-ink">Programs</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-brand-slate">
              {footerLinks.programs.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-heading)] text-base font-bold text-brand-ink">Social Links</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-brand-slate">
              {footerLinks.social.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-heading)] text-base font-bold text-brand-ink">Newsletter</h4>
            <div className="mt-4 rounded-[28px] bg-white p-5 shadow-soft">
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-orange"
                placeholder="Enter your email"
              />
              <Button className="mt-3 w-full">
                <span className="inline-flex items-center gap-2">
                  Subscribe
                  <Send className="h-4 w-4" />
                </span>
              </Button>
              <Button href="/contact" variant="secondary" className="mt-3 w-full">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-brand-slate">
          (c) Hai Buddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
