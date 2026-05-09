"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return <motion.div className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-brand-orange" style={{ scaleX }} />;
}
