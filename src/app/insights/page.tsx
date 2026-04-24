"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/section-label";
import { SplitReveal } from "@/components/reveal";

type Article = {
  cat: "Regulatory" | "M&A" | "Tax" | "Private Client" | "Disputes";
  title: string;
  dek: string;
  author: string;
  date: string;
  read: string;
  featured?: boolean;
};

const articles: Article[] = [
  {
    cat: "Regulatory",
    title: "SEBI's 2026 disclosure framework, and what boards haven't noticed yet.",
    dek: "Three obligations that will surprise issuers—and how to stage readiness before the October cut-over.",
    author: "Arjun Shekhar",
    date: "Mar 14, 2026",
    read: "12 min",
    featured: true,
  },
  {
    cat: "M&A",
    title: "The quiet rise of reverse mergers in Indian mid-cap financial services.",
    dek: "Why sponsors are preferring route B. A data read of 2024-25 deals and what it means for valuation.",
    author: "Meera Iyer",
    date: "Feb 22, 2026",
    read: "8 min",
  },
  {
    cat: "Tax",
    title: "GAAR is no longer theoretical. Read the 2025 assessment record.",
    dek: "We pulled every public GAAR order in 2024-25. The pattern is unambiguous, and planning cycles should adjust.",
    author: "Meera Iyer",
    date: "Jan 30, 2026",
    read: "15 min",
  },
  {
    cat: "Private Client",
    title: "Family constitutions that survive a founder's exit.",
    dek: "Three tension points and how good charters resolve them before they become disputes.",
    author: "Priya Khanna",
    date: "Jan 11, 2026",
    read: "9 min",
  },
  {
    cat: "Disputes",
    title: "The case against arbitration for promoter disputes.",
    dek: "Counterintuitive, but the numbers say confidentiality may be the wrong trade.",
    author: "Rohan Verma",
    date: "Dec 18, 2025",
    read: "10 min",
  },
  {
    cat: "Regulatory",
    title: "RBI's FEMA compounding: what 2025 told us.",
    dek: "A note on pricing, timing, and the paperwork that lands applications on the faster list.",
    author: "Arjun Shekhar",
    date: "Dec 02, 2025",
    read: "7 min",
  },
  {
    cat: "M&A",
    title: "Earn-outs that actually pay out.",
    dek: "Structuring contingent consideration so both sides close the file without the second dispute.",
    author: "Arjun Shekhar",
    date: "Nov 14, 2025",
    read: "11 min",
  },
  {
    cat: "Tax",
    title: "A simpler way to think about transfer pricing in a services business.",
    dek: "Method selection, benchmarking, and the one thing assessors keep asking that companies keep missing.",
    author: "Meera Iyer",
    date: "Oct 29, 2025",
    read: "14 min",
  },
];

const categories = ["All", "Regulatory", "M&A", "Tax", "Private Client", "Disputes"] as const;

export default function InsightsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = articles.filter((a) => cat === "All" || a.cat === cat);
  const featured = articles.find((a) => a.featured);

  return (
    <>
      <section className="pt-40 md:pt-56 pb-12 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel index="01">Insights</SectionLabel>
          <h1 className="mt-8 font-serif text-display-lg leading-[0.9] tracking-mega-tight text-balance">
            <SplitReveal text="Field notes from" /> <br />
            <em className="text-ember">
              <SplitReveal text="the practice." delay={0.15} />
            </em>
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <p className="md:col-span-5 md:col-start-8 text-lg leading-relaxed text-bone/80 text-pretty">
              We publish what we&apos;d want to read—short reads, deep analyses, and quiet calls on
              what the market is about to do next. No filler.
            </p>
          </div>
        </div>
      </section>

      {/* Featured editorial */}
      {featured && (
        <section className="px-6 md:px-10 py-16">
          <div className="mx-auto max-w-[1600px]">
            <Link
              href="#"
              className="group relative block rounded-3xl overflow-hidden bg-ember text-ink p-10 md:p-16 hover:bg-ember-light transition-colors"
              data-cursor="read"
            >
              <div className="grid gap-10 md:grid-cols-12 items-end">
                <div className="md:col-span-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70 flex items-center gap-3">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
                    Featured · {featured.cat}
                  </div>
                  <h2 className="mt-6 font-serif text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.95] text-balance">
                    {featured.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 text-pretty">
                    {featured.dek}
                  </p>
                </div>
                <div className="md:col-span-4 md:col-start-9 flex items-end justify-between gap-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
                    <div>{featured.author}</div>
                    <div className="mt-1">{featured.date} · {featured.read}</div>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-bone text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="px-6 md:px-10 py-6">
        <div className="mx-auto max-w-[1600px] flex flex-wrap items-center justify-between gap-6 border-y border-bone/10 py-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
            [ Topic / {filtered.length} articles ]
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] transition-all",
                  cat === c
                    ? "bg-bone text-ink border-bone"
                    : "border-bone/20 text-bone/70 hover:border-bone/60"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[1600px]">
          <motion.ul layout className="grid gap-px bg-bone/10 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((a) => (
                <motion.li
                  key={a.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <Link
                    href="#"
                    className="group flex h-full flex-col gap-8 bg-ink p-10 md:p-14 hover:bg-ink-800 transition-colors"
                    data-cursor="read"
                  >
                    <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em]">
                      <span className="text-ember">{a.cat}</span>
                      <span className="text-bone/50">{a.date} · {a.read}</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl leading-[1.05] text-pretty">
                      {a.title}
                    </h3>
                    <p className="text-bone/70 leading-relaxed text-pretty">{a.dek}</p>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-bone/10">
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                        {a.author}
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 group-hover:border-ember group-hover:bg-ember group-hover:text-ink transition-all">
                        →
                      </span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-bone/10">
        <div className="mx-auto max-w-[1600px] grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <SectionLabel index="02">Subscribe</SectionLabel>
            <h2 className="mt-6 font-serif text-display-md leading-[0.95] text-balance">
              Ten editions a year. <em className="text-ember">No other mail.</em>
            </h2>
            <p className="mt-6 max-w-lg text-bone/70 leading-relaxed text-pretty">
              The same notes our partners circulate internally, condensed for a wider audience.
              Unsubscribe sits at the top of every issue.
            </p>
          </div>
          <form className="md:col-span-5 md:col-start-8 flex flex-col gap-4">
            <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
              Email address
            </label>
            <div className="flex gap-3 border-b border-bone/30 pb-3 focus-within:border-ember transition-colors">
              <input
                id="email"
                type="email"
                placeholder="you@firm.co"
                className="flex-1 bg-transparent font-serif text-2xl placeholder:text-bone/30 outline-none"
              />
              <button
                type="submit"
                className="font-mono text-xs uppercase tracking-[0.22em] text-ember hover:text-bone transition-colors"
              >
                Send →
              </button>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/40">
              Hosted privately. Never shared.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
