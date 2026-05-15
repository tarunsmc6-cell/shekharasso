import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ButtonLink } from "@/components/ui/button";

export type FAQ = { q: string; a: ReactNode };

export type PracticeTemplateProps = {
  eyebrow: string;
  index: string;
  title: ReactNode;
  lede: ReactNode;
  aside?: ReactNode;
  whoFor: string[];
  problem: ReactNode;
  approach: { step: string; body: ReactNode }[];
  deliverables: string[];
  engagement: ReactNode;
  faqs: FAQ[];
  jurisdictionsNote?: string;
};

export function PracticeTemplate({
  eyebrow,
  index,
  title,
  lede,
  aside,
  whoFor,
  problem,
  approach,
  deliverables,
  engagement,
  faqs,
  jurisdictionsNote,
}: PracticeTemplateProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        index={index}
        title={title}
        lede={lede}
        aside={aside}
      />

      {/* Who this is for — first answer above the fold per CLAUDE.md §4. */}
      <section className="border-y border-brand-rule bg-brand-cream-50 py-10 md:py-12">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="eyebrow">Who this is for</p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-brand-ink/85">
            {whoFor.map((w) => (
              <li key={w} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-navy" aria-hidden />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="01">The problem</SectionLabel>
          </div>
          <div className="md:col-span-8 md:col-start-5 prose-body">
            {problem}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-brand-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="02">Approach</SectionLabel>
          </div>
          <ol className="md:col-span-8 md:col-start-5 divide-y divide-brand-rule">
            {approach.map((s, i) => (
              <li key={i} className="grid grid-cols-[auto_1fr] gap-x-6 py-6 first:pt-0">
                <span className="font-serif text-3xl text-brand-navy/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-brand-navy">
                    {s.step}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-brand-ink/80">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-brand-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="03">Deliverables</SectionLabel>
          </div>
          <ul className="md:col-span-8 md:col-start-5 grid gap-3 md:grid-cols-2">
            {deliverables.map((d) => (
              <li
                key={d}
                className="rounded-sm border border-brand-rule bg-brand-cream-50 px-4 py-3 text-[14px] text-brand-ink/85"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Engagement model */}
      <section className="border-t border-brand-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="04">Engagement model</SectionLabel>
          </div>
          <div className="md:col-span-8 md:col-start-5 prose-body">
            {engagement}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-brand-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="05">FAQs</SectionLabel>
          </div>
          <dl className="md:col-span-8 md:col-start-5 divide-y divide-brand-rule">
            {faqs.map((f, i) => (
              <div key={i} className="py-6 first:pt-0">
                <dt className="font-serif text-lg md:text-xl text-brand-navy">
                  {f.q}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-brand-ink/80">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-rule bg-brand-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel index="06">Next step</SectionLabel>
            <h2 className="mt-6 font-serif text-display-sm font-semibold text-brand-navy text-balance">
              Tell us what you&rsquo;re solving for.
            </h2>
            <p className="mt-4 max-w-[60ch] text-brand-ink/80">
              Send a paragraph describing the matter. We&rsquo;ll confirm
              whether we&rsquo;re the right firm and propose a brief
              introductory call.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-start justify-end gap-3">
            <ButtonLink href="/contact" variant="primary">
              Begin a conversation
            </ButtonLink>
            <Link href="/engage" className="link-quiet text-sm text-brand-ink/70">
              How we work &rsaquo;
            </Link>
          </div>
        </div>
        {jurisdictionsNote && (
          <p className="mx-auto mt-12 max-w-[1280px] px-6 md:px-10 text-xs text-brand-ink/60">
            {jurisdictionsNote}
          </p>
        )}
      </section>
    </>
  );
}
