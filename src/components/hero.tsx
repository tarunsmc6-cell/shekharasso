"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Clock } from "@/components/clock";
import { Marquee } from "@/components/marquee";
import { SplitReveal } from "@/components/reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      className="relative min-h-[120vh] overflow-hidden bg-ink pt-32 md:pt-40"
    >
      <div className="grid-backdrop absolute inset-0 opacity-40" />

      {/* Top eyebrow strip */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60"
      >
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
          Est. 1998 · Mumbai
        </span>
        <span className="hidden md:flex items-center gap-5">
          <Clock tz="Asia/Kolkata" label="IST" />
          <Clock tz="Asia/Singapore" label="SGT" />
          <Clock tz="Europe/London" label="GMT" />
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.div
        style={{ y: y2, opacity, scale }}
        className="relative z-10 mx-auto mt-20 max-w-[1600px] px-6 md:mt-28 md:px-10"
      >
        <div className="font-serif leading-[0.86] tracking-mega-tight">
          <div className="text-display-xl">
            <SplitReveal text="Legal &" />
          </div>
          <div className="flex flex-wrap items-end gap-x-6 md:gap-x-10">
            <div className="text-display-xl italic text-ember">
              <SplitReveal text="financial" delay={0.2} />
            </div>
            <div className="mb-3 md:mb-8 hidden md:flex max-w-[18rem] text-sm leading-relaxed text-bone/70 font-sans">
              <span className="font-mono text-ember mr-2">[ ✦ ]</span>
              A boutique advisory practice engineered for the moments when
              the stakes refuse to be ordinary.
            </div>
          </div>
          <div className="text-display-xl">
            <SplitReveal text="strategy." delay={0.4} />
          </div>
        </div>
      </motion.div>

      {/* Floating credential card */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 mx-auto mt-12 flex max-w-[1600px] flex-wrap items-center justify-between gap-6 px-6 md:mt-16 md:px-10"
      >
        <div className="max-w-md text-pretty text-base leading-relaxed text-bone/75 md:hidden">
          A boutique advisory practice engineered for the moments when the stakes refuse to be ordinary.
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
          <div className="flex items-center gap-3">
            <span className="text-ember">[ Scroll ]</span>
            <span>You&apos;re not reading a brochure</span>
          </div>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
          <span>V. MMXXVI</span>
          <span className="h-3 w-px bg-bone/30" />
          <span>IBA · BAR · SEBI · ICAI</span>
        </div>
      </motion.div>

      {/* Marquee band */}
      <div className="relative z-10 mt-32 md:mt-40">
        <Marquee className="border-y border-bone/15 py-7">
          {[
            "M&A Structuring",
            "White-Collar Defense",
            "Capital Markets",
            "Arbitration",
            "Family Offices",
            "Regulatory Counsel",
            "Private Equity",
            "Tax Strategy",
            "Corporate Restructuring",
            "Cross-Border Advisory",
          ].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-serif text-2xl md:text-3xl">{t}</span>
              <span className="text-ember">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
