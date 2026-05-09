"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const styles = {
  primary:
    "bg-brand-orange text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(255,138,0,0.32)]",
  secondary:
    "bg-white text-brand-ink border border-slate-200 hover:border-brand-orange/40 hover:text-brand-orange",
  ghost: "bg-brand-yellow/20 text-brand-ink hover:bg-brand-yellow/35",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof styles;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({ children, href, variant = "primary", className, onClick, type = "button" }: ButtonProps) {
  const shared = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={shared}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={shared} onClick={onClick} type={type}>
      {children}
    </motion.button>
  );
}
