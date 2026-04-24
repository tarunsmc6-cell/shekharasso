"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/section-label";

const steps = [
  {
    num: "01",
    title: "Intake & Triage",
    duration: "48 hrs",
    body: "A partner—not an associate—reads every inquiry. We decline more than we take. What we accept, we prepare for like the consequences depend on it. They usually do.",
  },
  {
    num: "02",
    title: "Strategy Architecture",
    duration: "1–2 weeks",
    body: "We model the board. Every party, every incentive, every regulator. You receive a written thesis with counterfactuals, risks priced, and a path that is falsifiable.",
  },
  {
    num: "03",
    title: "Execution",
    duration: "Matter-driven",
    body: "Drafting, negotiating, filing, arguing. A named partner leads throughout. You will not meet a stranger at the closing table.",
  },
  {
    num: "04",
    title: "Aftercare",
    duration: "Indefinite",
    body: "We retain the file. We watch the regulatory environment. We pick up the phone when yours rings at 11pm because something changed.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative bg-bone text-ink">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 grid-backdrop opacity-40" />
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <SectionLabel index="04" className="text-ink/50">
            <span className="text-ember">Process</span>
          </SectionLabel>

          <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <h2 className="font-serif text-display-md leading-[0.95] text-balance">
                How a <em className="text-ember">matter</em> moves.
              </h2>
              <p className="mt-6 max-w-md text-ink/70 text-pretty">
                Four stations. No theater. Each engagement earns its next phase or ends with a
                written rationale for why it shouldn&apos;t.
              </p>

              <div className="mt-12 h-[2px] w-full bg-ink/10 relative overflow-hidden rounded-full">
                <motion.div
                  style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
                  className="absolute inset-0 bg-ember"
                />
              </div>
              <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                <span>Begin</span>
                <span>Close</span>
              </div>
            </div>

            <div className="md:col-span-7 relative min-h-[28rem]">
              {steps.map((s, i) => {
                const start = i / steps.length;
                const end = start + 1 / steps.length;
                return <Step key={s.num} step={s} progress={scrollYProgress} range={[start, end]} />;
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for scroll duration */}
      <div className="h-[300vh]" />
    </section>
  );
}

function Step({
  step,
  progress,
  range,
}: {
  step: (typeof steps)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, [range[0] - 0.05, range[0], range[1], range[1] + 0.05], [0, 1, 1, 0]);
  const y = useTransform(progress, range, [40, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
          [ {step.num} / 04 ]
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
          {step.duration}
        </span>
      </div>
      <h3 className="mt-4 font-serif text-display-md leading-[0.95]">{step.title}</h3>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75 text-pretty">{step.body}</p>
    </motion.div>
  );
}
