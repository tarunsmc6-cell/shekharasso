import type { Metadata } from "next";
import { PracticeTemplate } from "@/components/practice-template";

export const metadata: Metadata = {
  title: "Corporate & Commercial Law",
  description:
    "Entity formation, shareholder agreements, commercial contracts, governance frameworks, M&A advisory, and regulatory counsel.",
};

export default function CorporateLawPage() {
  return (
    <PracticeTemplate
      eyebrow="Practice / Corporate & Commercial Law"
      index="C"
      title={<>Corporate &amp; Commercial Law.</>}
      lede="Entity formation, founder and investor documents, commercial contracts, governance, and the regulatory questions that arise as a private company becomes consequential."
      aside={
        <div>
          <p className="eyebrow mb-2">Practising under</p>
          <p>
            The Bar Council and applicable state-bar rules. Engagements that
            require court appearance are referred to specialist counsel; the
            firm continues as transactional and advisory counsel.
          </p>
        </div>
      }
      whoFor={[
        "Founders raising or restructuring",
        "Boards reviewing governance and committee charters",
        "Buyers and sellers in private M&A",
        "Family offices structuring holding entities",
        "Companies entering new commercial relationships",
      ]}
      problem={
        <>
          <p>
            Corporate documents are written once and lived with for years.
            The cost of a poorly-drafted shareholder agreement is rarely
            visible at signing — it is visible at the next round, the next
            exit, the next dispute. By that point the leverage to fix it
            has usually shifted.
          </p>
          <p>
            We work with clients who would rather pay senior attention now
            than litigation rates later.
          </p>
        </>
      }
      approach={[
        {
          step: "Intake & conflict check",
          body: "We confirm we can act, document the parties involved, and scope the matter. Substantive discussion begins after the conflict check is cleared.",
        },
        {
          step: "Structure & drafting",
          body: "We propose a structure, walk through the trade-offs in writing, and draft from first principles rather than from precedent. Every clause has a reason; every reason is in the file.",
        },
        {
          step: "Negotiation",
          body: "We negotiate the document, not the deal. Where we hold counter-positions, we explain them in writing so the client can decide. We do not paper over open issues.",
        },
        {
          step: "Execution & closing",
          body: "Closing checklist, condition-precedent tracking, and execution under a closing memorandum. We confirm what has been delivered and what remains, in writing, on the day of closing.",
        },
        {
          step: "Post-closing housekeeping",
          body: "ROC filings, share certificates, register updates, stamp duty, and any follow-on filings. The matter is closed only when the file is clean.",
        },
      ]}
      deliverables={[
        "Incorporation documents and shareholder agreement",
        "Founder agreements (vesting, IP assignment, non-compete)",
        "Term sheet and definitive transaction documents (SSHA, SHA, SSA)",
        "Commercial contracts review and negotiation",
        "Board and committee charters; governance policies",
        "Buy-side / sell-side legal due diligence reports",
        "Regulatory opinions (FEMA, FDI, SEBI as applicable)",
        "Closing memorandum and post-closing checklist",
      ]}
      engagement={
        <>
          <p>
            Transactions are typically engaged on a capped-time basis with a
            written estimate before drafting begins. Standalone documents —
            a shareholder agreement, a service contract — are usually
            fixed-fee. Retainer arrangements are available for clients who
            need recurring counsel.
          </p>
          <p>
            Court appearance is not within the firm&rsquo;s practice;
            disputes are referred to specialist counsel and the firm
            continues as transactional and advisory counsel.
          </p>
        </>
      }
      faqs={[
        {
          q: "Do you take on litigation or arbitration?",
          a: "No. The firm is transactional and advisory. Disputes are referred to specialist counsel with whom we coordinate as transactional counsel of record.",
        },
        {
          q: "Can you advise on FEMA / FDI matters?",
          a: "Yes — for transactional and structuring questions. Where a matter requires application to the RBI or a specialist regulatory filing, we coordinate with appropriate counsel.",
        },
        {
          q: "How do you handle privilege?",
          a: "Substantive discussion of the matter begins after a written engagement letter is executed and conflicts are cleared. Communications before that point are not privileged; we say so on intake.",
        },
      ]}
      jurisdictionsNote="This page is informational and does not constitute legal advice or an offer to represent. Legal services are provided only under a written engagement letter and are subject to applicable bar council rules, including advertising and solicitation restrictions. Past results do not guarantee future outcomes."
    />
  );
}
