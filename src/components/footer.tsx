import Link from "next/link";
import { Logo } from "@/components/logo";

const practiceLinks = [
  { href: "/practice/chartered-accountancy", label: "Chartered Accountancy" },
  { href: "/practice/us-cpa", label: "US CPA" },
  { href: "/practice/corporate-law", label: "Corporate & Commercial Law" },
];

const firmLinks = [
  { href: "/about", label: "About" },
  { href: "/engage", label: "How we work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-cream-50 border-t border-brand-rule">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Identity */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Logo variant="monogram" size={44} />
              <span className="flex flex-col leading-[1.05]">
                <span className="font-serif text-[21px] font-semibold text-brand-navy">
                  Shekhar &amp; Associates
                </span>
                <span className="eyebrow">Consulting Firm</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-ink/80">
              A boutique practice in chartered accountancy, US CPA services,
              and corporate &amp; commercial law. Senior-led, by engagement.
            </p>
            <Link href="/contact" className="mt-6 inline-flex btn-secondary">
              Begin a conversation
            </Link>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="eyebrow">Practice</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {practiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-quiet text-brand-ink/85">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Firm</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {firmLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-quiet text-brand-ink/85"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-brand-ink/85">
              <li>
                <a
                  href="mailto:contact@shekhar-associates.com"
                  className="link-quiet"
                >
                  contact@shekhar-associates.com
                </a>
              </li>
              <li className="text-brand-ink/65">
                By appointment, monday&ndash;friday.
              </li>
              <li className="text-brand-ink/65">
                Replies within one business day.
              </li>
            </ul>
          </div>
        </div>

        {/* Standard disclaimer — CLAUDE.md §9 verbatim. */}
        <div className="mt-16 border-t border-brand-rule pt-10">
          <p className="eyebrow mb-3">Notice</p>
          <p className="max-w-[80ch] text-[12.5px] leading-relaxed text-brand-ink/75">
            The content on this site is provided for general informational
            purposes only and does not constitute legal, tax, accounting, or
            financial advice. No attorney&ndash;client, CPA&ndash;client, or
            advisor&ndash;client relationship is created by your use of this
            site or by any communication with the firm until a written
            engagement letter is executed. Past results do not guarantee
            future outcomes. Jurisdiction-specific rules may apply; consult
            qualified counsel in your jurisdiction.
          </p>
        </div>

        {/* Meta row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-brand-rule pt-6 text-[12px] tracking-wide text-brand-ink/60 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} Shekhar &amp; Associates Consulting. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-quiet">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
