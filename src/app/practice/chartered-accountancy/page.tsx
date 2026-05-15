import type { Metadata } from "next";
import { PracticeTemplate } from "@/components/practice-template";

export const metadata: Metadata = {
  title: "Chartered Accountancy",
  description:
    "Statutory audit, tax compliance, and assurance for closely-held companies, growth-stage businesses, and family-owned groups.",
};

export default function CharteredAccountancyPage() {
  return (
    <PracticeTemplate
      eyebrow="Practice / Chartered Accountancy"
      index="A"
      title={<>Chartered Accountancy.</>}
      lede="Statutory audit, tax compliance, and financial reporting executed to the standard a sophisticated reader expects — clean working papers, defensible positions, and filings that do not require explanation."
      aside={
        <div>
          <p className="eyebrow mb-2">Practising under</p>
          <p>
            The Institute of Chartered Accountants of India (ICAI). Engagements
            are accepted only where senior attention is the right answer.
          </p>
        </div>
      }
      whoFor={[
        "Founder-led private companies",
        "Family-owned groups",
        "Growth-stage businesses with VC capital",
        "Indian subsidiaries of foreign parents",
        "NRIs with Indian holdings",
      ]}
      problem={
        <>
          <p>
            Most closely-held businesses outgrow their auditor before they
            realise it. Working papers thin out. Disclosures become formulaic.
            The audit file would not survive a serious second look — by a
            buyer, by a regulator, or by the next generation of the family.
          </p>
          <p>
            The cost of fixing that under pressure — during a transaction,
            during a regulatory inquiry, during a succession — is
            disproportionate to the cost of doing it correctly each year.
          </p>
        </>
      }
      approach={[
        {
          step: "Scoping",
          body: "We map the entity structure, the accounting standards in scope (Ind AS or AS), the regulatory filings due, and the historical accounting positions we will rely on. We tell you what we cannot opine on, and why.",
        },
        {
          step: "Audit fieldwork",
          body: "Risk-based testing aligned to ICAI standards (SA series) and the Companies Act, 2013. Materiality, sampling, and substantive procedures documented in the working papers — not in our heads.",
        },
        {
          step: "Tax & disclosures",
          body: "Income-tax computations under the Income-tax Act, 1961, GST positions, and Companies Act disclosures. Every position has a citation and a defensible rationale.",
        },
        {
          step: "Sign-off & filings",
          body: "Audit report issued under the relevant standard. ROC, income-tax, and GST filings completed on agreed timelines, with calendar reminders for the following year.",
        },
      ]}
      deliverables={[
        "Statutory audit report under the Companies Act, 2013",
        "Tax audit under section 44AB of the Income-tax Act, 1961",
        "Form 3CD and tax computation",
        "GST annual return (GSTR-9) and reconciliation (GSTR-9C)",
        "Internal financial controls (IFC) testing memo",
        "Transfer pricing study and Form 3CEB, where applicable",
        "Group consolidation under Ind AS 110 / AS 21",
        "Year-end MIS and management letter",
      ]}
      engagement={
        <>
          <p>
            Annual audit engagements are taken on a fixed-fee basis, agreed in
            writing before fieldwork begins. Advisory work outside the audit
            scope — tax opinions, restructuring, due diligence — is quoted
            separately, either fixed-fee or capped-time.
          </p>
          <p>
            We do not bundle audit and consulting services where doing so
            would compromise independence under the ICAI Code of Ethics.
          </p>
        </>
      }
      faqs={[
        {
          q: "Do you serve as the principal auditor under the Companies Act?",
          a: "Yes, where independence requirements are met and the engagement fits our acceptance criteria. We accept a limited number of statutory audit clients each year.",
        },
        {
          q: "Can you also handle our US tax and our corporate matters?",
          a: "Yes — that is the reason the practice is structured this way. The CA, US CPA, and corporate-law work coordinate under one principal, which reduces the cost of getting consistent advice across the three.",
        },
        {
          q: "How do you handle conflicts and confidentiality?",
          a: "Every new matter runs through a conflict check before substantive discussion begins. The intake form asks for jurisdiction and matter category for this reason. Privileged information should not be sent until we confirm we can act.",
        },
      ]}
      jurisdictionsNote="This page is informational and does not constitute an audit, tax, or accounting opinion. Practice areas described are subject to acceptance criteria, conflict checks, and a written engagement letter. Independence rules under the ICAI Code of Ethics and the Companies Act, 2013 apply."
    />
  );
}
