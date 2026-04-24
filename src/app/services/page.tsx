"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/section-label";
import { SplitReveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";

const groups = [
  {
    kind: "Legal",
    code: "L",
    tint: "text-ember",
    items: [
      {
        title: "Mergers & Acquisitions",
        blurb:
          "Strategic and structural counsel across domestic and cross-border transactions—public-to-private, private equity, promoter exits, and reverse mergers.",
        sub: [
          "Deal architecture & term sheets",
          "Due diligence (legal, tax, regulatory)",
          "Negotiation of SPAs, SHAs, SSAs",
          "Post-closing integration & disputes",
        ],
      },
      {
        title: "Corporate, Governance & ESG",
        blurb:
          "Board and committee advisory, governance frameworks, regulatory writing, and the increasingly material work of ESG and disclosure.",
        sub: [
          "Board advisory & committee briefs",
          "Whistleblower & investigation frameworks",
          "BRSR, SEBI LODR, NGRBC alignment",
          "Ethics, POSH, and code policies",
        ],
      },
      {
        title: "Disputes & Arbitration",
        blurb:
          "Courtroom representation and confidential arbitral work—Supreme Court, High Courts, NCLT/NCLAT, SIAC, LCIA, ICC.",
        sub: [
          "Commercial & contractual disputes",
          "Insolvency proceedings (IBC)",
          "International commercial arbitration",
          "Enforcement of foreign awards",
        ],
      },
      {
        title: "White-Collar & Investigations",
        blurb:
          "Pre-emptive counsel and defense when regulators, prosecutors, or internal inquiries enter the picture.",
        sub: [
          "ED / CBI / SFIO engagements",
          "Internal investigations",
          "FEMA & PMLA proceedings",
          "SEBI adjudications",
        ],
      },
    ],
  },
  {
    kind: "Finance",
    code: "F",
    tint: "text-signal",
    items: [
      {
        title: "Capital Markets & IPOs",
        blurb:
          "End-to-end counsel across IPOs, FPOs, QIPs, rights issues, InvITs and REITs—including regulatory approvals and issuer diligence.",
        sub: [
          "DRHP / RHP drafting & review",
          "SEBI, RBI, stock-exchange liaison",
          "Ongoing compliance under LODR",
          "Investor disclosures & audits",
        ],
      },
      {
        title: "Private Wealth & Succession",
        blurb:
          "Discreet counsel to founders, promoters, and single-family offices across India and the GCC.",
        sub: [
          "Family constitutions & charters",
          "Domestic & offshore trusts",
          "Cross-border estate structuring",
          "Gifting, will & probate strategy",
        ],
      },
      {
        title: "Restructuring & Insolvency",
        blurb:
          "Turnaround advisory, pre-pack and IBC resolution, creditor negotiations, and stressed-asset investment counsel.",
        sub: [
          "Pre-IBC workouts",
          "Resolution professional support",
          "Creditor & CoC negotiation",
          "Distressed M&A opportunities",
        ],
      },
      {
        title: "Tax Strategy & Controversy",
        blurb:
          "Direct, indirect, and international tax. Transfer pricing. GAAR. Representation before CIT(A), ITAT, and High Courts.",
        sub: [
          "Advance rulings (AAR)",
          "Transfer-pricing studies",
          "GST & customs advisory",
          "Assessment & appellate litigation",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  const [open, setOpen] = useState<string | null>(groups[0].items[0].title);

  return (
    <>
      <section className="pt-40 md:pt-56 pb-16 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel index="01">Services</SectionLabel>
          <h1 className="mt-8 font-serif text-display-lg leading-[0.9] tracking-mega-tight text-balance">
            <SplitReveal text="Two disciplines." /> <br />
            <em className="text-ember">
              <SplitReveal text="One firm." delay={0.15} />
            </em>
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <p className="md:col-span-5 md:col-start-8 text-lg leading-relaxed text-bone/80 text-pretty">
              Legal counsel and financial advisory under a single partnership. We don&apos;t refer
              out the thing that matters most—we do it.
            </p>
          </div>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section
          key={g.kind}
          id={g.kind.toLowerCase()}
          className={cn(
            "py-24 md:py-36 px-6 md:px-10",
            gi % 2 === 0 ? "bg-ink" : "bg-bone text-ink"
          )}
        >
          <div className="mx-auto max-w-[1600px]">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <div className="flex items-baseline gap-6">
                <span className={cn("font-mono text-[11px] uppercase tracking-[0.22em]", g.tint)}>
                  [ {g.code} / {g.kind} ]
                </span>
                <h2 className="font-serif text-display-md leading-[0.95]">
                  {g.kind} <em className={g.tint}>Practice</em>
                </h2>
              </div>
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.22em]",
                  gi % 2 === 0 ? "text-bone/50" : "text-ink/50"
                )}
              >
                0{gi + 1} / 02
              </span>
            </div>

            <ul
              className={cn(
                "mt-16 divide-y",
                gi % 2 === 0 ? "divide-bone/10 border-y border-bone/10" : "divide-ink/10 border-y border-ink/10"
              )}
            >
              {g.items.map((it) => {
                const isOpen = open === it.title;
                return (
                  <li key={it.title}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : it.title)}
                      className="grid w-full grid-cols-12 items-center gap-4 py-7 md:py-9 text-left"
                      data-cursor={isOpen ? "close" : "expand"}
                    >
                      <span
                        className={cn(
                          "col-span-2 font-mono text-[11px] uppercase tracking-[0.22em]",
                          gi % 2 === 0 ? "text-bone/50" : "text-ink/50"
                        )}
                      >
                        {g.code} / 0{g.items.indexOf(it) + 1}
                      </span>
                      <span className="col-span-8 md:col-span-9 font-serif text-3xl md:text-5xl leading-[1.05]">
                        {it.title}
                      </span>
                      <span className="col-span-2 md:col-span-1 flex justify-end">
                        <span
                          className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-full border text-xl transition-all",
                            gi % 2 === 0
                              ? "border-bone/20 group-hover:border-ember"
                              : "border-ink/20",
                            isOpen && (gi % 2 === 0 ? "bg-ember text-ink border-ember" : "bg-ink text-bone border-ink")
                          )}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid grid-cols-12 gap-4 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                        isOpen ? "max-h-[500px] opacity-100 pb-10" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="col-span-12 md:col-span-6 md:col-start-3">
                        <p
                          className={cn(
                            "text-lg leading-relaxed text-pretty",
                            gi % 2 === 0 ? "text-bone/80" : "text-ink/80"
                          )}
                        >
                          {it.blurb}
                        </p>
                      </div>
                      <ul className="col-span-12 md:col-span-3 md:col-start-10 space-y-2 text-sm">
                        {it.sub.map((s) => (
                          <li
                            key={s}
                            className={cn(
                              "flex gap-2 font-mono text-[11px] uppercase tracking-[0.18em]",
                              gi % 2 === 0 ? "text-bone/70" : "text-ink/70"
                            )}
                          >
                            <span className={g.tint}>→</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      <section className="py-32 md:py-48 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionLabel index="03">Engage</SectionLabel>
              <h2 className="mt-6 font-serif text-display-md leading-[0.95] text-balance">
                Engagement <em className="text-ember">models.</em>
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 text-bone/70 text-pretty self-end">
              We work on three structures. The right one depends on your matter—we&apos;ll
              recommend, but the choice is yours.
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                model: "Matter-based",
                desc: "Fixed fee per matter or milestone. Scope clearly defined. No surprises.",
                best: "M&A, IPOs, specific litigation",
              },
              {
                model: "Retainer",
                desc: "A defined monthly engagement with priority response, review hours, and ongoing counsel.",
                best: "Corporate general counsel support",
              },
              {
                model: "Success-linked",
                desc: "Reduced base with contingent component on outcome. Available for select matters only.",
                best: "Disputes, recoveries, tax appeals",
              },
            ].map((m, i) => (
              <div
                key={m.model}
                className="rounded-3xl border border-bone/15 bg-ink-800 p-8 md:p-10 hover:border-ember/50 transition-colors"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
                  / 0{i + 1}
                </div>
                <h3 className="mt-4 font-serif text-3xl">{m.model}</h3>
                <p className="mt-4 text-bone/75 text-pretty leading-relaxed">{m.desc}</p>
                <div className="mt-8 pt-5 border-t border-bone/10 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                  Best for · <span className="text-bone">{m.best}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex items-center gap-6 flex-wrap">
            <ButtonLink href="/contact">Discuss your matter</ButtonLink>
            <Link
              href="/work"
              className="font-mono text-xs uppercase tracking-[0.22em] link-underline text-bone/80"
            >
              See past engagements →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
