"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

const items = [
  {
    cat: "Regulatory",
    title: "SEBI's 2026 disclosure framework, and what boards haven't noticed yet.",
    date: "Mar · 2026",
    read: "12 min",
    slug: "#",
  },
  {
    cat: "M&A",
    title: "The quiet rise of reverse mergers in Indian mid-cap financial services.",
    date: "Feb · 2026",
    read: "8 min",
    slug: "#",
  },
  {
    cat: "Tax",
    title: "GAAR is no longer theoretical. Read the 2025 assessment record.",
    date: "Jan · 2026",
    read: "15 min",
    slug: "#",
  },
];

export function InsightsPreview() {
  return (
    <section className="relative bg-ink py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="07">Field Notes</SectionLabel>
            <h2 className="mt-6 font-serif text-display-md leading-[0.95] text-balance max-w-[20ch]">
              We write <em className="text-ember">what we&apos;d want to read.</em>
            </h2>
          </div>
          <Link href="/insights" className="font-mono text-xs uppercase tracking-[0.22em] link-underline">
            The full archive →
          </Link>
        </div>

        <ul className="mt-16 divide-y divide-bone/10 border-y border-bone/10">
          {items.map((it, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8 }}
              className="group"
            >
              <Link
                href={it.slug}
                className="grid grid-cols-12 items-center gap-4 py-6 md:py-8 transition-colors hover:bg-bone/5 -mx-6 px-6 md:-mx-10 md:px-10"
                data-cursor="read"
              >
                <div className="col-span-3 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
                  {it.cat}
                </div>
                <div className="col-span-9 md:col-span-7">
                  <span className="font-serif text-2xl md:text-3xl leading-[1.1]">
                    {it.title}
                  </span>
                </div>
                <div className="col-span-8 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
                  {it.date} · {it.read}
                </div>
                <div className="col-span-4 md:col-span-1 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 group-hover:border-ember group-hover:bg-ember group-hover:text-ink transition-all">
                    →
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
