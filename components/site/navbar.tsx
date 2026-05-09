"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircleMore, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/site";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappHref = "https://wa.me/919876543210";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-9 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition hover:text-brand-orange",
                  pathname === item.href ? "text-brand-orange" : "text-brand-slate",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button href={whatsappHref}>
              <span className="inline-flex items-center gap-2">
                <MessageCircleMore className="h-4 w-4" />
                Get in Touch
              </span>
            </Button>
          </div>
          <button className="rounded-full border border-slate-200 p-2 lg:hidden" onClick={() => setMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-[80] bg-brand-ink/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
              className="fixed right-0 top-0 z-[81] h-full w-[88%] max-w-sm bg-white p-6 shadow-soft lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button className="rounded-full border border-slate-200 p-2" onClick={() => setMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base font-medium transition hover:bg-brand-yellow/25",
                      pathname === item.href ? "bg-brand-orange/10 text-brand-orange" : "text-brand-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Button className="mt-8 w-full" href={whatsappHref}>
                <span className="inline-flex items-center gap-2">
                  <MessageCircleMore className="h-4 w-4" />
                  Get in Touch
                </span>
              </Button>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

    </>
  );
}
