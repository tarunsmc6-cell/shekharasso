import type { Metadata } from "next";
import { PracticeTemplate } from "@/components/practice-template";

export const metadata: Metadata = {
  title: "US CPA",
  description:
    "US federal and state tax filings, US GAAP financial reporting, and cross-border structuring for India–US corridor founders, dual-resident families, and businesses with US nexus.",
};

export default function UsCpaPage() {
  return (
    <PracticeTemplate
      eyebrow="Practice / US CPA"
      index="B"
      title={<>US CPA.</>}
      lede="US federal and state tax, US GAAP financial reporting, and the cross-border structuring questions that fall between an Indian CA and a US firm — handled by one practice."
      aside={
        <div>
          <p className="eyebrow mb-2">Practising under</p>
          <p>
            Licensure with the American Institute of CPAs (AICPA) and the
            relevant state board. US tax positions are signed by a licensed
            CPA.
          </p>
        </div>
      }
      whoFor={[
        "India-incorporated companies with US revenue or subsidiaries",
        "Founders on H-1B, L-1, or O-1 visas",
        "Dual-resident families with assets on both sides",
        "Indian holding-company structures with US operating subs",
        "Funds, GPs, and LPs in cross-border vehicles",
      ]}
      problem={
        <>
          <p>
            Cross-border tax is a discipline of its own. An Indian CA who
            also fills in a US return, and a US CPA who has never read a
            Form 3CEB, will both miss what the other catches. The result
            tends to be visible only later — a disallowed deduction, an FBAR
            penalty, a corporate structure that no longer makes sense after
            the next round.
          </p>
          <p>
            We do not split the file in two. The same principal reviews the
            Indian and US positions before either is filed.
          </p>
        </>
      }
      approach={[
        {
          step: "Residency & nexus review",
          body: "Substantial-presence test, treaty-tiebreaker analysis under the India–US DTAA, and state-nexus mapping. Filings are sequenced so that one position does not undercut another.",
        },
        {
          step: "Federal & state filings",
          body: "Individual (Form 1040, 1040-NR), corporate (1120, 1120-F), and pass-through (1065, 1120-S) returns. State filings as required, with apportionment workings retained for review.",
        },
        {
          step: "Reporting compliance",
          body: "FBAR (FinCEN 114), FATCA (Form 8938), Form 5471 for controlled foreign corporations, Form 8865 for foreign partnerships, and Form 8621 for PFICs.",
        },
        {
          step: "GAAP financial reporting",
          body: "US GAAP financial statements, GAAP/IFRS bridges where consolidation requires it, and ASC 740 income-tax provisions for entities that need them.",
        },
        {
          step: "Structuring opinions",
          body: "Written opinions on entity choice (LLC vs. C-corp vs. partnership), check-the-box elections, and how Indian and US tax interact on dividends, royalties, and stock-based compensation.",
        },
      ]}
      deliverables={[
        "Form 1040 / 1040-NR with all required schedules",
        "Form 1120, 1120-F, 1120-S, or 1065 with state filings",
        "FBAR (FinCEN 114) and Form 8938 (FATCA)",
        "Forms 5471, 8865, 8621 as applicable",
        "Estimated-tax workings and quarterly vouchers",
        "ASC 740 tax provision memo",
        "US GAAP financial statements (compilation basis)",
        "Cross-border structuring opinion (long-form, written)",
      ]}
      engagement={
        <>
          <p>
            Recurring compliance (annual returns, quarterly estimates, FBAR)
            is engaged on a fixed annual fee. Structuring and opinion work is
            quoted separately and is typically capped-time, with the cap set
            after a scoping call.
          </p>
          <p>
            We do not provide tax advice on positions we have not been
            engaged to review. Informal questions over email become formal
            advice only when documented under an engagement letter.
          </p>
        </>
      }
      faqs={[
        {
          q: "Do you sign as paid preparer on US returns?",
          a: "Yes. US returns prepared by the firm are signed by a licensed CPA. The signing CPA's PTIN and license number appear on the return.",
        },
        {
          q: "Can you coordinate with our existing US firm?",
          a: "Frequently. Many engagements take the form of an India-side advisor that reviews the US firm's positions for treaty interaction, transfer pricing, and Indian reporting consequences. The reverse — US-side review of an Indian CA's work — is also common.",
        },
        {
          q: "What about state tax?",
          a: "State nexus is scoped at intake. We handle California, New York, New Jersey, Texas, and Delaware filings directly; other states are handled on a matter-by-matter basis.",
        },
      ]}
      jurisdictionsNote="This page is informational and does not constitute US tax, legal, or accounting advice. US tax advice is provided only under a written engagement letter and is subject to Circular 230 standards. State and federal positions vary by facts; consult a qualified CPA in your jurisdiction."
    />
  );
}
