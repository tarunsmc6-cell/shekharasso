"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

const cases = [
  {
    code: "C / 019",
    sector: "Fintech",
    title: "A ₹4,200 Cr IPO navigated through three regulatory reversals.",
    outcome: "Filed. Priced. Oversubscribed 28×.",
    year: "2025",
    color: "from-ember/30 to-transparent",
  },
  {
    code: "C / 017",
    sector: "Family Office",
    title: "Intergenerational transfer across four jurisdictions without a single contested clause.",
    outcome: "₹1,800 Cr transferred · zero disputes.",
    year: "2024",
    color: "from-signal/20 to-transparent",
  },
  {
    code: "C / 014",
    sector: "Manufacturing",
    title: "Distressed asset rescued 72 hours before NCLT admission.",
    outcome: "Liquidation averted · 3,400 jobs retained.",
    year: "2024",
    color: "from-ember/40 to-transparent",
  },
];

export function FeaturedWork() {
  return (
    <section className="relative bg-ink py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="03">Selected Matters</SectionLabel>
            <h2 className="mt-6 font-serif text-display-md leading-[0.95] text-balance max-w-[20ch]">
              The work we&apos;re allowed <em className="text-ember">to talk about.</em>
            </h2>
          </div>
          <Link href="/work" className="font-mono text-xs uppercase tracking-[0.22em] link-underline">
            The full docket →
          </Link>
        </div>

        <div className="mt-20 space-y-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link
                href="/work"
                className="group relative block rounded-[32px] border border-bone/10 bg-ink-800 p-8 md:p-12 overflow-hidden hover:border-bone/30 transition-colors"
                data-cursor="read case"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-80 w-80 rounded-full bg-gradient-radial bg-gradient-to-br ${c.color} opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
                />
                <div className="relative grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
                    <div>{c.code}</div>
                    <div className="mt-2 text-ember">{c.sector}</div>
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="font-serif text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.05] text-pretty">
                      {c.title}
                    </h3>
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-between gap-4 md:items-end">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
                        Outcome
                      </div>
                      <div className="mt-2 font-serif text-xl italic text-ember md:text-right">
                        {c.outcome}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
                      <span>{c.year}</span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/30 text-base transition-all group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
