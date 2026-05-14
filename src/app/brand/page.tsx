import { Logo } from "@/components/logo";

const palette = [
  {
    name: "Brand Navy",
    token: "--brand-navy",
    hex: "#1E3A5F",
    note: "Headings, monogram, primary buttons, link hover",
  },
  {
    name: "Brand Cream",
    token: "--brand-cream",
    hex: "#F2EDE4",
    note: "Site background — not pure white",
  },
  {
    name: "Brand Ink",
    token: "--brand-ink",
    hex: "#14202E",
    note: "Body copy — never #000",
  },
  {
    name: "Brand Muted",
    token: "--brand-muted",
    hex: "#6B7280",
    note: "Secondary text, captions, metadata",
  },
  {
    name: "Brand Rule",
    token: "--brand-rule",
    hex: "#D9D2C5",
    note: "Dividers and hairline borders",
  },
];

const logoSizes = [24, 32, 40, 56, 72, 96, 128];

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <header className="mb-20">
          <p className="eyebrow mb-6">Brand System — Internal Review</p>
          <h1 className="font-serif font-bold text-brand-navy text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Shekhar &amp; Associates
            <br />
            Consulting Firm
          </h1>
          <p className="mt-6 max-w-2xl text-brand-muted text-base leading-relaxed">
            Foundational visual system. Logo, palette, and typography for review
            before any other route is touched.
          </p>
        </header>

        <hr className="border-0 border-t border-brand-rule mb-20" />

        {/* LOGO — full lockup at multiple sizes */}
        <section className="mb-24">
          <p className="eyebrow mb-4">01 — Logo · Full Lockup</p>
          <h2 className="font-serif font-semibold text-brand-navy text-3xl md:text-4xl mb-10">
            The mark is locked. Build the system around it.
          </h2>

          <div className="flex flex-wrap items-end gap-12 p-10 border border-brand-rule rounded">
            {logoSizes.map((s) => (
              <figure key={`full-${s}`} className="flex flex-col items-center gap-3">
                <Logo variant="full" size={s} />
                <figcaption className="eyebrow">{s}px</figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 text-sm text-brand-muted max-w-2xl leading-relaxed">
            Header uses 40px on desktop, 32px on mobile. Clear space on all
            sides equals the height of the &ldquo;S&rdquo; in the monogram. Never invert.
            Never place on the navy. Never apply overlays, gradients, or
            drop shadows.
          </p>
        </section>

        <hr className="border-0 border-t border-brand-rule mb-20" />

        {/* LOGO — monogram */}
        <section className="mb-24">
          <p className="eyebrow mb-4">02 — Logo · Monogram</p>
          <h2 className="font-serif font-semibold text-brand-navy text-3xl md:text-4xl mb-4">
            S&amp;A monogram
          </h2>
          <p className="text-sm text-brand-muted max-w-2xl mb-10 leading-relaxed">
            For favicons, OG images, and footer. Currently cropped from the
            full lockup — a dedicated monogram-only asset is recommended for
            production fidelity.
          </p>

          <div className="flex flex-wrap items-end gap-12 p-10 border border-brand-rule rounded">
            {[32, 40, 56, 72, 96, 128].map((s) => (
              <figure key={`mono-${s}`} className="flex flex-col items-center gap-3">
                <Logo variant="monogram" size={s} />
                <figcaption className="eyebrow">{s}px</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <hr className="border-0 border-t border-brand-rule mb-20" />

        {/* PALETTE */}
        <section className="mb-24">
          <p className="eyebrow mb-4">03 — Palette</p>
          <h2 className="font-serif font-semibold text-brand-navy text-3xl md:text-4xl mb-2">
            Navy on cream. That is the entire system.
          </h2>
          <p className="text-sm text-brand-muted max-w-2xl mb-10 leading-relaxed">
            No additional accent colors. No gradients. No drop shadows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-rule border border-brand-rule rounded overflow-hidden">
            {palette.map((c) => (
              <div key={c.token} className="bg-brand-cream p-6 flex gap-6 items-start">
                <div
                  className="w-20 h-20 flex-shrink-0 border border-brand-rule rounded-sm"
                  style={{ background: c.hex }}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-serif font-semibold text-brand-navy text-xl leading-tight">
                    {c.name}
                  </p>
                  <p className="mt-1 text-xs text-brand-muted tracking-wider">
                    {c.token}
                  </p>
                  <p className="mt-2 font-sans text-sm text-brand-ink">{c.hex}</p>
                  <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                    {c.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-0 border-t border-brand-rule mb-20" />

        {/* TYPOGRAPHY */}
        <section className="mb-24">
          <p className="eyebrow mb-4">04 — Typography</p>
          <h2 className="font-serif font-semibold text-brand-navy text-3xl md:text-4xl mb-10">
            Cormorant Garamond &amp; Inter
          </h2>

          <div className="space-y-12">
            <SpecimenRow label="Eyebrow · Inter 500 · 0.75rem · tracking 0.18em">
              <p className="eyebrow">Consulting Firm</p>
            </SpecimenRow>

            <SpecimenRow label="H1 · Cormorant Garamond 700">
              <h1 className="font-serif font-bold text-brand-navy text-6xl md:text-7xl leading-[0.95] tracking-tight">
                Engineered for consequence.
              </h1>
            </SpecimenRow>

            <SpecimenRow label="H2 · Cormorant Garamond 700">
              <h2 className="font-serif font-bold text-brand-navy text-5xl leading-[1] tracking-tight">
                A boutique advisory practice.
              </h2>
            </SpecimenRow>

            <SpecimenRow label="H3 · Cormorant Garamond 600">
              <h3 className="font-serif font-semibold text-brand-navy text-4xl leading-[1.05]">
                Strategy that survives contact with reality.
              </h3>
            </SpecimenRow>

            <SpecimenRow label="H4 · Cormorant Garamond 600">
              <h4 className="font-serif font-semibold text-brand-navy text-3xl leading-[1.1]">
                Counsel for the ambitious.
              </h4>
            </SpecimenRow>

            <SpecimenRow label="H5 · Cormorant Garamond 600">
              <h5 className="font-serif font-semibold text-brand-navy text-2xl leading-[1.15]">
                Section heading
              </h5>
            </SpecimenRow>

            <SpecimenRow label="H6 · Cormorant Garamond 600">
              <h6 className="font-serif font-semibold text-brand-navy text-xl leading-[1.2]">
                Subsection heading
              </h6>
            </SpecimenRow>

            <SpecimenRow label="Body · Inter 400 · 1rem · leading 1.65">
              <p className="font-sans text-base text-brand-ink leading-[1.65] max-w-2xl">
                Shekhar &amp; Associates is a consulting firm that pairs rigor
                with restraint. We work with founders, operators, and boards
                navigating the moments that matter — capital, governance, and
                the structural decisions that compound for a decade. Our work
                is private, our counsel is direct, and our outcomes speak in
                a register we&rsquo;d rather not advertise.
              </p>
            </SpecimenRow>

            <SpecimenRow label="Body · Inter 500 · 0.875rem · muted">
              <p className="font-sans text-sm text-brand-muted leading-[1.6] max-w-2xl">
                Secondary text. Used for captions, metadata, and supporting
                detail beneath primary content. Slightly heavier weight,
                slightly smaller scale, slightly cooler tone.
              </p>
            </SpecimenRow>
          </div>
        </section>

        <hr className="border-0 border-t border-brand-rule mb-20" />

        {/* CTAs */}
        <section className="mb-24">
          <p className="eyebrow mb-4">05 — Buttons</p>
          <h2 className="font-serif font-semibold text-brand-navy text-3xl md:text-4xl mb-10">
            Primary &amp; secondary
          </h2>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="btn-primary">
              Schedule a consultation
            </a>
            <a href="#" className="btn-secondary">
              View our practice
            </a>
          </div>
          <p className="mt-6 text-xs text-brand-muted">
            Primary — navy fill, cream text, 4px radius. Secondary — 1px navy
            border, navy text, transparent fill.
          </p>
        </section>

        <hr className="border-0 border-t border-brand-rule mb-20" />

        {/* FOOTER USAGE */}
        <section className="mb-24">
          <p className="eyebrow mb-4">06 — Footer Usage</p>
          <h2 className="font-serif font-semibold text-brand-navy text-3xl md:text-4xl mb-10">
            Monogram + wordmark, centered
          </h2>
          <div className="flex flex-col items-center gap-4 py-16 border border-brand-rule rounded">
            <Logo variant="monogram" size={56} />
            <p className="font-serif font-semibold text-brand-navy text-2xl">
              Shekhar &amp; Associates
            </p>
            <p className="eyebrow">Consulting Firm</p>
          </div>
        </section>

        <footer className="pt-10 border-t border-brand-rule">
          <p className="eyebrow">End of brand review</p>
        </footer>
      </div>
    </div>
  );
}

function SpecimenRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-10 items-baseline">
      <p className="eyebrow pt-2">{label}</p>
      <div>{children}</div>
    </div>
  );
}
