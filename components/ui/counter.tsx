"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div ref={ref} className="soft-card px-6 py-7 text-center">
      <div className="font-[var(--font-heading)] text-3xl font-bold text-brand-ink sm:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-brand-slate">{label}</p>
    </motion.div>
  );
}
