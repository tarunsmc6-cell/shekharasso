"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/section-label";

const stats = [
  { value: 27, suffix: "Y", label: "in continuous practice" },
  { value: 48, suffix: "B₹", label: "in transactions counseled" },
  { value: 14, suffix: "", label: "reported judgments cited" },
  { value: 92, suffix: "%", label: "matters closed without trial" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="num-tick">
      {n}
      <span className="text-ember">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionLabel index="05">Ledger</SectionLabel>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <h2 className="font-serif text-display-md leading-[0.95] text-balance">
            Numbers we&apos;re willing <em className="text-ember">to stand behind.</em>
          </h2>
          <p className="self-end max-w-md text-bone/70 text-pretty">
            Audited annually. Independently verified. We published these because the industry
            doesn&apos;t—and we think you deserve the comparison.
          </p>
        </div>

        <div className="mt-24 grid gap-12 border-t border-bone/10 pt-16 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col gap-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
                / 0{i + 1}
              </div>
              <div className="font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.8] tracking-mega-tight">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-bone/70 text-sm leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
