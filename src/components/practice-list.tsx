"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/section-label";

const practices = [
  {
    code: "L / 01",
    title: "Mergers & Acquisitions",
    lede: "Deal architecture for transactions that rewrite cap tables, markets, and mandates.",
    meta: "Legal",
  },
  {
    code: "L / 02",
    title: "Corporate & Regulatory",
    lede: "Counsel for the boardroom—governance, compliance, ESG, and the rules being written right now.",
    meta: "Legal",
  },
  {
    code: "L / 03",
    title: "Disputes & Arbitration",
    lede: "High-stakes litigation, international arbitration, and confidential resolutions.",
    meta: "Legal",
  },
  {
    code: "L / 04",
    title: "White-Collar & Investigations",
    lede: "Quiet defense against regulators, prosecutors, and reputation-ending allegations.",
    meta: "Legal",
  },
  {
    code: "F / 01",
    title: "Capital Markets & IPOs",
    lede: "From Series C to public listing—structuring, diligence, and sponsor coordination.",
    meta: "Finance",
  },
  {
    code: "F / 02",
    title: "Private Wealth & Succession",
    lede: "Family offices, cross-border estates, trusts, and intergenerational transfer.",
    meta: "Finance",
  },
  {
    code: "F / 03",
    title: "Restructuring & Insolvency",
    lede: "Turnaround strategy, IBC proceedings, and creditor negotiations that preserve value.",
    meta: "Finance",
  },
  {
    code: "F / 04",
    title: "Tax Strategy",
    lede: "Transfer pricing, GAAR defense, cross-border structures audited to withstand inquiry.",
    meta: "Finance",
  },
];

export function PracticeList() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="relative bg-bone text-ink py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="02" className="text-ink/50">
              <span className="text-ember">Practice</span>
            </SectionLabel>
            <h2 className="mt-6 font-serif text-display-md leading-[0.95] text-balance max-w-[18ch]">
              Eight disciplines. <em className="text-ember">One standard.</em>
            </h2>
          </div>
          <Link
            href="/services"
            className="font-mono text-xs uppercase tracking-[0.22em] link-underline"
            data-cursor="full list"
          >
            Full list of services →
          </Link>
        </div>

        <ul className="mt-20 divide-y divide-ink/10 border-y border-ink/10">
          {practices.map((p, i) => (
            <li
              key={p.code}
              className={cn(
                "group relative grid grid-cols-12 items-center gap-4 py-6 md:py-8 transition-colors cursor-pointer",
                active === i && "bg-ember/10"
              )}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
                {p.code}
              </span>
              <div className="col-span-7 md:col-span-6">
                <span className="font-serif text-3xl md:text-5xl leading-none">
                  {p.title}
                </span>
              </div>
              <div
                className={cn(
                  "col-span-3 md:col-span-3 text-sm leading-snug text-ink/70 transition-opacity duration-500",
                  active === i ? "opacity-100" : "opacity-0 md:opacity-40"
                )}
              >
                {p.lede}
              </div>
              <div className="col-span-12 md:col-span-1 flex justify-end">
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.22em] transition-all",
                    active === i ? "text-ember translate-x-1" : "text-ink/40"
                  )}
                >
                  → {p.meta}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
