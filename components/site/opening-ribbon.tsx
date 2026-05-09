"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Stars } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Phase = "countdown" | "blast" | "message" | "done";

type PaperPiece = {
  id: number;
  side: "left" | "right";
  nearX: number;
  farX: number;
  peakY: number;
  burstY: number;
  rotate: number;
  delay: number;
  duration: number;
  width: number;
  height: number;
  color: string;
};

const paperColors = ["#FF8A00", "#FFD54A", "#FF6B6B", "#4FD1C5", "#7C3AED", "#111827"];

export function OpeningRibbon() {
  const [count, setCount] = useState(5);
  const [phase, setPhase] = useState<Phase>("countdown");

  const papers = useMemo<PaperPiece[]>(
    () =>
      Array.from({ length: 88 }).map((_, index) => ({
        id: index,
        side: index % 2 === 0 ? "left" : "right",
        nearX: 20 + (index % 8) * 12,
        farX: 130 + (index % 10) * 20,
        peakY: 96 + (index % 8) * 15,
        burstY: 210 + (index % 9) * 20,
        rotate: 90 + (index % 8) * 24,
        delay: 0.02 + (index % 16) * 0.014,
        duration: 1 + (index % 6) * 0.08,
        width: 7 + (index % 5) * 3,
        height: 12 + (index % 6) * 3,
        color: paperColors[index % paperColors.length],
      })),
    [],
  );

  useEffect(() => {
    if (phase !== "countdown") return;

    if (count === 0) {
      setPhase("blast");
      return;
    }

    const timer = window.setTimeout(() => setCount((prev) => prev - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [count, phase]);

  useEffect(() => {
    if (phase !== "blast") return;
    const messageTimer = window.setTimeout(() => setPhase("message"), 2200);
    return () => window.clearTimeout(messageTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "message") return;
    const doneTimer = window.setTimeout(() => setPhase("done"), 1800);
    return () => window.clearTimeout(doneTimer);
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "done" ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[120] overflow-hidden bg-[radial-gradient(circle_at_top,#fff4dd,white_40%,#fff8ef_100%)]"
        >
          <div className="absolute inset-0 bg-hero-grid hero-grid opacity-60" />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.22, 0.34, 0.22] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-brand-yellow blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.3, 0.18] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute bottom-[-12%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-orange blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={
              phase === "blast"
                ? { opacity: [0, 0.85, 0.65, 0] }
                : { opacity: 0 }
            }
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="absolute left-0 top-0 z-10 h-[70vh] w-[46vw] origin-top-left bg-[linear-gradient(135deg,rgba(255,213,74,0.85),rgba(255,213,74,0.16)_38%,transparent_72%)] blur-[2px]"
            style={{ clipPath: "polygon(0 0, 100% 0, 52% 100%, 34% 100%)" }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={
              phase === "blast"
                ? { opacity: [0, 0.85, 0.65, 0] }
                : { opacity: 0 }
            }
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="absolute right-0 top-0 z-10 h-[70vh] w-[46vw] origin-top-right bg-[linear-gradient(225deg,rgba(255,138,0,0.82),rgba(255,138,0,0.14)_38%,transparent_72%)] blur-[2px]"
            style={{ clipPath: "polygon(0 0, 100% 0, 66% 100%, 48% 100%)" }}
          />

          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange shadow-soft">
                <Sparkles className="h-4 w-4" />
                Launch Countdown
              </div>
              <h2 className="mt-6 font-[var(--font-heading)] text-4xl font-bold text-brand-ink sm:text-6xl">
                Hai Buddy Is Opening
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-slate sm:text-base">
                Get ready for a joyful AI learning experience.
              </p>
            </motion.div>

            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-brand-orange/20 bg-white/70 shadow-[0_24px_80px_rgba(255,138,0,0.12)] backdrop-blur-xl sm:h-[22rem] sm:w-[22rem]">
              {phase === "message" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.86, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="px-6 text-center"
                >
                  <p className="font-[var(--font-heading)] text-2xl font-bold text-brand-ink sm:text-3xl">
                    Thank you KTR sir,
                  </p>
                  <p className="mt-3 text-sm font-medium text-brand-slate sm:text-base">
                    Our dreams came true
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={count}
                  initial={{ opacity: 0, scale: 0.6, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.2, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="font-[var(--font-heading)] text-8xl font-bold text-brand-ink sm:text-[7rem]"
                >
                  {count}
                </motion.div>
              )}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-brand-orange/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 rounded-full border border-brand-yellow/45"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={phase === "blast" ? { opacity: [0, 1, 0] } : { opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-20 bg-white/20"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={phase === "blast" ? { opacity: [0, 1, 0], scale: [0.4, 1.8, 0.6] } : { opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-1/2 z-20 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-2xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase === "blast" ? { opacity: [0, 1, 0.6, 0], scale: [0.8, 1.18, 1.05, 0.92] } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 z-20 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-brand-yellow/18 blur-xl sm:h-80 sm:w-80"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={phase === "blast" ? { opacity: [0, 1, 0], y: [20, -10, -30] } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
            className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
          >
            <Stars className="h-10 w-10 text-brand-yellow" />
          </motion.div>

          {papers.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.7 }}
              animate={
                phase === "blast"
                  ? {
                      opacity: [0, 1, 1, 0],
                      x:
                        piece.side === "left"
                          ? [0, piece.nearX, piece.farX * 0.72, piece.farX]
                          : [0, -piece.nearX, -(piece.farX * 0.72), -piece.farX],
                      y: [0, -(piece.peakY * 0.55), -piece.peakY, -piece.burstY],
                      rotate:
                        piece.side === "left"
                          ? [0, piece.rotate * 0.32, piece.rotate * 0.7, piece.rotate]
                          : [0, -piece.rotate * 0.32, -(piece.rotate * 0.7), -piece.rotate],
                      scale: [0.7, 1, 1, 0.82],
                    }
                  : { opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.7 }
              }
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                times: [0, 0.24, 0.5, 1],
                ease: [0.2, 0.9, 0.2, 1],
              }}
              className="absolute bottom-0 z-40"
              style={{
                left: piece.side === "left" ? "3.5%" : "auto",
                right: piece.side === "right" ? "3.5%" : "auto",
              }}
            >
              <span
                className="block rounded-[3px] shadow-[0_6px_14px_rgba(0,0,0,0.08)]"
                style={{
                  width: `${piece.width}px`,
                  height: `${piece.height}px`,
                  background: piece.color,
                }}
              />
            </motion.div>
          ))}

        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
