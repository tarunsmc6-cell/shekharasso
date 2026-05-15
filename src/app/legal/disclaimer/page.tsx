import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important legal notice regarding the informational nature of this website and the absence of any advisor-client relationship until a written engagement letter is executed.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal / Disclaimer"
        index="A"
        title={<>Disclaimer.</>}
        lede="Please read this notice carefully before using any information on this website or sending any communication to the firm."
      />

      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <aside className="md:col-span-3">
            <p className="eyebrow">Last reviewed</p>
            <p className="mt-2 text-[14px] text-brand-ink/80">May 2026</p>
          </aside>
          <article className="md:col-span-8 md:col-start-5 article">
            {/* CLAUDE.md §9 — verbatim. */}
            <p>
              <strong>
                The content on this site is provided for general
                informational purposes only and does not constitute legal,
                tax, accounting, or financial advice.
              </strong>{" "}
              No attorney&ndash;client, CPA&ndash;client, or
              advisor&ndash;client relationship is created by your use of
              this site or by any communication with the firm until a
              written engagement letter is executed. Past results do not
              guarantee future outcomes. Jurisdiction-specific rules may
              apply; consult qualified counsel in your jurisdiction.
            </p>

            <h2>No advice without an engagement letter</h2>
            <p>
              Reading this website, downloading materials from it, or
              submitting the intake form does not create a relationship of
              advisor and client. A relationship is created only when both
              parties have executed a written engagement letter setting
              out scope, fees, and the applicable professional standards.
              Until then, the firm is under no obligation to act on, hold,
              or maintain the confidentiality of any information shared.
            </p>

            <h2>Bar council and professional-body rules</h2>
            <p>
              Provision of legal services is governed by the rules of the
              Bar Council and the relevant state-bar authority.
              Provision of audit and assurance services is governed by the
              standards and ethical requirements of The Institute of
              Chartered Accountants of India (ICAI). Provision of US tax
              and accounting services is governed by the rules of the
              American Institute of CPAs (AICPA), the relevant US state
              board, and Treasury Circular 230. Nothing on this website is
              intended to be interpreted in a manner inconsistent with
              those rules.
            </p>

            <h2>No solicitation</h2>
            <p>
              This website is intended to provide general information
              about the firm and the disciplines in which it practises.
              It is not intended to constitute, and should not be
              interpreted as, advertising, solicitation, or an offer to
              represent any particular person or matter in any
              jurisdiction in which such advertising, solicitation, or
              offer would be prohibited.
            </p>

            <h2>Past results</h2>
            <p>
              References to prior matters &mdash; whether on this site, in
              briefings, or in correspondence &mdash; are general and do
              not guarantee or predict a similar outcome on any future
              matter. Each engagement is fact-specific.
            </p>

            <h2>Third-party content</h2>
            <p>
              This site may reference statutes, case law, accounting
              standards, regulatory notifications, or other third-party
              materials. The firm does not warrant the accuracy or
              current applicability of such references. Statutes and
              standards are amended; readers should consult primary
              sources or qualified counsel.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this notice should be sent to{" "}
              <a
                className="link-quiet text-brand-navy"
                href="mailto:contact@shekhar-associates.com"
              >
                contact@shekhar-associates.com
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
