import type { Metadata } from "next";
import { Logo } from "@/components/logo";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Brand reference",
  description: "Internal brand reference — tokens, typography, components.",
  robots: { index: false, follow: false },
};

const palette = [
  { name: "Navy", token: "--brand-navy", hex: "#1A2E4F", note: "Primary brand — wordmark, primary CTA, link accents." },
  { name: "Navy 700", token: "--brand-navy-700", hex: "#152641", note: "Hover state for primary CTA; depth." },
  { name: "Cream", token: "--brand-cream", hex: "#F5EFE3", note: "Page background — matches the logo plate." },
  { name: "Cream 50", token: "--brand-cream-50", hex: "#FBF7EE", note: "Section bands, raised surfaces." },
  { name: "Ink", token: "--brand-ink", hex: "#0F1A2A", note: "Body text on cream — near-black, warm." },
  { name: "Muted", token: "--brand-muted", hex: "#6B6759", note: "Eyebrows, captions, fine print." },
  { name: "Rule", token: "--brand-rule", hex: "#E0D8C8", note: "Hairline dividers, input borders." },
];

export default function BrandReferencePage() {
  return (
    <>
      <PageHero
        eyebrow="Brand / Reference"
        index="∞"
        title={<>Brand reference.</>}
        lede="Internal page — tokens, typography, and component examples. Not linked from primary navigation."
      />

      {/* Logo lockup */}
      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="01">Lockup</SectionLabel>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-4">Full lockup</p>
                <div className="border border-brand-rule bg-brand-cream p-10 flex justify-center">
                  <Logo size={180} />
                </div>
              </div>
              <div>
                <p className="eyebrow mb-4">Monogram</p>
                <div className="border border-brand-rule bg-brand-cream p-10 flex justify-center">
                  <Logo variant="monogram" size={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Palette */}
      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="02">Palette</SectionLabel>
          </div>
          <ul className="md:col-span-8 md:col-start-5 grid gap-3 sm:grid-cols-2">
            {palette.map((c) => (
              <li key={c.name} className="border border-brand-rule overflow-hidden">
                <div className="h-20" style={{ background: c.hex }} aria-hidden />
                <div className="p-4">
                  <p className="font-serif text-lg text-brand-navy">{c.name}</p>
                  <p className="mt-1 text-[12px] text-brand-ink/65 tabular-nums">
                    {c.hex} · <code>{c.token}</code>
                  </p>
                  <p className="mt-2 text-[12.5px] text-brand-ink/80">{c.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Typography */}
      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="03">Typography</SectionLabel>
          </div>
          <div className="md:col-span-8 md:col-start-5 space-y-8">
            <div>
              <p className="eyebrow mb-3">Display — Cormorant Garamond</p>
              <p className="font-serif text-display-lg font-semibold text-brand-navy">
                Counsel for decisions that cannot be undone.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Section heading — Cormorant Garamond</p>
              <p className="font-serif text-display-sm font-semibold text-brand-navy">
                Three disciplines, one principal.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Body — Montserrat</p>
              <p className="prose-body">
                Body text at 17px with 1.7 leading, measured to 72ch. Cormorant
                Garamond handles display and serifed running text where the
                article calls for it; Montserrat carries body, navigation,
                forms, eyebrows, and the small-caps echo of the
                logo&rsquo;s &ldquo;Consulting Firm&rdquo; line.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Eyebrow — Montserrat</p>
              <p className="eyebrow eyebrow--accent">Practice / Chartered Accountancy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="04">Components</SectionLabel>
          </div>
          <div className="md:col-span-8 md:col-start-5 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <button type="button" className="btn-primary">
                Primary CTA
              </button>
              <button type="button" className="btn-secondary">
                Secondary CTA
              </button>
            </div>
            <div className="border-t border-brand-rule pt-6">
              <p className="eyebrow mb-3">Form field</p>
              <label
                htmlFor="brand-demo"
                className="block text-[13px] font-medium tracking-wide text-brand-ink"
              >
                Sample field
              </label>
              <input
                id="brand-demo"
                type="text"
                placeholder="Placeholder text"
                className="mt-2 block w-full max-w-md rounded-sm border border-brand-rule bg-brand-cream px-3.5 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/40 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
