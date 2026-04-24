"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/section-label";
import { SplitReveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";

type Matter = {
  code: string;
  year: string;
  sector: string;
  tag: "Legal" | "Finance" | "Disputes";
  title: string;
  outcome: string;
  value: string;
};

const matters: Matter[] = [
  {
    code: "C / 019",
    year: "2025",
    sector: "Fintech",
    tag: "Finance",
    title: "A ₹4,200 Cr IPO navigated through three regulatory reversals.",
    outcome: "Filed, priced, oversubscribed 28×.",
    value: "₹4,200 Cr",
  },
  {
    code: "C / 018",
    year: "2025",
    sector: "Pharmaceuticals",
    tag: "Legal",
    title: "Cross-border carve-out of a specialty portfolio across six jurisdictions.",
    outcome: "Closed in 94 days.",
    value: "USD 340M",
  },
  {
    code: "C / 017",
    year: "2024",
    sector: "Family Office",
    tag: "Finance",
    title: "Intergenerational transfer across four jurisdictions without a single contested clause.",
    outcome: "₹1,800 Cr transferred · zero disputes.",
    value: "₹1,800 Cr",
  },
  {
    code: "C / 016",
    year: "2024",
    sector: "Infrastructure",
    tag: "Disputes",
    title: "ICC arbitration seated in Singapore; six-year dispute resolved in twelve months.",
    outcome: "Award of USD 112M enforced in India.",
    value: "USD 112M",
  },
  {
    code: "C / 015",
    year: "2024",
    sector: "Consumer",
    tag: "Legal",
    title: "Promoter buy-back of a listed subsidiary with dissenting-shareholder strategy.",
    outcome: "92% tender acceptance.",
    value: "₹2,650 Cr",
  },
  {
    code: "C / 014",
    year: "2024",
    sector: "Manufacturing",
    tag: "Finance",
    title: "Distressed asset rescued 72 hours before NCLT admission.",
    outcome: "Liquidation averted · 3,400 jobs retained.",
    value: "₹680 Cr",
  },
  {
    code: "C / 013",
    year: "2023",
    sector: "Technology",
    tag: "Legal",
    title: "Series D structuring with a liquidation waterfall engineered for three scenarios.",
    outcome: "Priced at a 3.1× markup to prior round.",
    value: "USD 180M",
  },
  {
    code: "C / 012",
    year: "2023",
    sector: "Real Estate",
    tag: "Disputes",
    title: "Recovery of title to a 42-acre parcel contested for eleven years.",
    outcome: "Title cleared · parcel monetised.",
    value: "₹1,200 Cr",
  },
  {
    code: "C / 011",
    year: "2023",
    sector: "Energy",
    tag: "Legal",
    title: "A green-bond issuance with a sovereign guarantee structured over 19 weeks.",
    outcome: "Listed on SGX · 2.4× subscribed.",
    value: "USD 450M",
  },
];

const filters = ["All", "Legal", "Finance", "Disputes"] as const;

export default function WorkPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = matters.filter((m) => filter === "All" || m.tag === filter);

  return (
    <>
      <section className="pt-40 md:pt-56 pb-12 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel index="01">The Docket</SectionLabel>
          <h1 className="mt-8 font-serif text-display-lg leading-[0.9] tracking-mega-tight text-balance">
            <SplitReveal text="The work we" /> <br />
            <em className="text-ember">
              <SplitReveal text="don't whisper about." delay={0.15} />
            </em>
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <p className="md:col-span-5 md:col-start-8 text-lg leading-relaxed text-bone/80 text-pretty">
              A subset of matters we&apos;ve been cleared to discuss. Everything else sits on the
              shelf above our desk—and that is where the rest of it will stay.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-10">
        <div className="mx-auto max-w-[1600px] flex flex-wrap items-center justify-between gap-6 border-y border-bone/10 py-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
            [ Filter / {filtered.length} matters ]
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] transition-all",
                  filter === f
                    ? "bg-bone text-ink border-bone"
                    : "border-bone/20 text-bone/70 hover:border-bone/60"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[1600px]">
          <ul className="relative">
            <AnimatePresence mode="popLayout">
              {filtered.map((m) => (
                <motion.li
                  layout
                  key={m.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                  onMouseEnter={() => setHovered(m.code)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative border-b border-bone/10"
                >
                  <Link
                    href="#"
                    className="grid grid-cols-12 items-center gap-4 py-8 md:py-10 hover:bg-bone/5 transition-colors -mx-6 px-6 md:-mx-10 md:px-10"
                    data-cursor="case file"
                  >
                    <div className="col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                      <div className="text-ember">{m.code}</div>
                      <div className="mt-1 text-bone/50">{m.year}</div>
                    </div>
                    <div className="col-span-7 md:col-span-6">
                      <h3
                        className={cn(
                          "font-serif text-2xl md:text-4xl leading-[1.05] text-balance transition-colors",
                          hovered === m.code ? "text-ember" : "text-bone"
                        )}
                      >
                        {m.title}
                      </h3>
                    </div>
                    <div className="col-span-3 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                      <div>{m.sector}</div>
                      <div className="mt-1 text-ember">{m.tag}</div>
                    </div>
                    <div className="col-span-10 md:col-span-2 flex items-end justify-between md:flex-col md:items-end gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                      <div className="font-serif not-italic text-xl md:text-2xl text-bone">
                        {m.value}
                      </div>
                      <div className="italic text-ember max-w-[14ch] md:text-right">
                        {m.outcome}
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <div className="mt-20 flex items-center justify-between gap-6 flex-wrap font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
            <div>Everything above is published with client consent.</div>
            <div>Confidential matters available under NDA at intake.</div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 md:px-10 bg-bone text-ink">
        <div className="mx-auto max-w-[1600px] grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel index="02" className="text-ink/50">
              <span className="text-ember">Next</span>
            </SectionLabel>
            <h2 className="mt-6 font-serif text-display-md leading-[0.95] text-balance">
              Your matter may <em className="text-ember">not appear here.</em>
            </h2>
            <p className="mt-6 max-w-lg text-ink/70 leading-relaxed text-pretty">
              Most of our work remains under seal. That is part of the brief. If you&apos;d like
              to discuss a matter in confidence, we can begin with an NDA before we begin with a
              meeting.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex items-end">
            <ButtonLink href="/contact" variant="filled" className="bg-ink text-bone hover:bg-ember hover:text-ink">
              Begin in confidence
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
