"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/section-label";

const words = [
  "We",
  "counsel",
  "the",
  "founders,",
  "families",
  "and",
  "funds",
  "whose",
  "decisions",
  "compound —",
  "where",
  "a",
  "single",
  "clause,",
  "a",
  "filing,",
  "a",
  "signature",
  "reshapes",
  "what",
  "follows",
  "for",
  "a",
  "decade.",
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });

  return (
    <section ref={ref} className="relative bg-ink py-40 md:py-56">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionLabel index="01">Manifesto</SectionLabel>
        <div className="mt-12 font-serif text-[clamp(2.2rem,5.2vw,5.2rem)] leading-[1.05] tracking-[-0.015em] text-balance">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} word={w} progress={scrollYProgress} range={[start, end]} />;
          })}
        </div>
        <div className="mt-24 grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
              Principle I
            </div>
            <div className="mt-3 font-serif text-2xl italic">Precision over performance.</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
              Principle II
            </div>
            <div className="mt-3 font-serif text-2xl italic">Discretion as default.</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
              Principle III
            </div>
            <div className="mt-3 font-serif text-2xl italic">Outcomes, not opinions.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const italic = word.includes("reshapes") || word.includes("compound");
  return (
    <motion.span style={{ opacity }} className={`mr-[0.28em] inline-block ${italic ? "italic text-ember" : ""}`}>
      {word}
    </motion.span>
  );
}
