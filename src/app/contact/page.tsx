"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { SplitReveal } from "@/components/reveal";
import { Clock } from "@/components/clock";
import { cn } from "@/lib/cn";

const offices = [
  {
    city: "Mumbai",
    addr: "Nariman Point · Level 14 · Express Towers",
    phone: "+91 22 4000 1998",
    email: "mumbai@shekhar-associates.in",
    tz: "Asia/Kolkata",
    tzLabel: "IST",
  },
  {
    city: "Bengaluru",
    addr: "UB City · Vittal Mallya Road · Level 9",
    phone: "+91 80 4030 1998",
    email: "bengaluru@shekhar-associates.in",
    tz: "Asia/Kolkata",
    tzLabel: "IST",
  },
  {
    city: "Singapore",
    addr: "One Raffles Quay · Level 25",
    phone: "+65 6411 1998",
    email: "singapore@shekhar-associates.sg",
    tz: "Asia/Singapore",
    tzLabel: "SGT",
  },
];

const matterTypes = [
  "M&A / Transactions",
  "Capital Markets",
  "Disputes / Arbitration",
  "Private Client",
  "Regulatory / Investigations",
  "Tax",
  "Other",
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<string>(matterTypes[0]);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="pt-40 md:pt-56 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel index="01">Contact</SectionLabel>
          <h1 className="mt-8 font-serif text-display-lg leading-[0.9] tracking-mega-tight text-balance">
            <SplitReveal text="Write to us." /> <br />
            <em className="text-ember">
              <SplitReveal text="A partner reads every note." delay={0.15} />
            </em>
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[1600px] grid gap-16 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-bone/15 bg-ink-800 p-8 md:p-12">
              <div className="flex items-center justify-between gap-4 mb-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
                  [ Intake / Confidential ]
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
                  Response within 1 business day
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={onSubmit} className="space-y-10">
                  <Field label="Your name" name="name" placeholder="First · Last" />
                  <Field label="Role · Organization" name="org" placeholder="Founder · Acme Ventures" />
                  <Field label="Email" name="email" type="email" placeholder="you@firm.co" />
                  <Field label="Phone (optional)" name="phone" placeholder="+91 —" />

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60 block mb-4">
                      Nature of matter
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {matterTypes.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedType(t)}
                          className={cn(
                            "rounded-full border px-4 py-2 text-xs transition-all",
                            selectedType === t
                              ? "bg-ember text-ink border-ember"
                              : "border-bone/20 text-bone/70 hover:border-bone/60"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="brief"
                      className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60 block mb-4"
                    >
                      A paragraph about the matter
                    </label>
                    <textarea
                      id="brief"
                      name="brief"
                      rows={5}
                      placeholder="Describe the situation, what's at stake, and what you've already considered. Everything here is privileged."
                      className="w-full bg-transparent border-b border-bone/30 pb-4 font-serif text-xl leading-[1.4] placeholder:text-bone/30 focus:border-ember outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                    <input
                      type="checkbox"
                      id="confid"
                      defaultChecked
                      className="mt-[2px] accent-ember"
                    />
                    <label htmlFor="confid">
                      I understand this note is privileged from first receipt and will be read only
                      by partners of the firm.
                    </label>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
                      By submitting, you consent to our Privacy Protocol.
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 rounded-full bg-bone px-8 py-4 text-ink font-mono text-xs uppercase tracking-[0.22em] hover:bg-ember transition-colors"
                      data-cursor="send"
                    >
                      Send confidentially →
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-20 text-center"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
                    [ Received ]
                  </div>
                  <h2 className="mt-8 font-serif text-5xl md:text-6xl leading-[0.95]">
                    Thank you. <em className="text-ember">A partner will write back.</em>
                  </h2>
                  <p className="mt-8 max-w-md mx-auto text-bone/70 text-pretty">
                    Typically within a business day. Sooner if the matter is time-sensitive and
                    you&apos;ve said so.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Aside */}
          <aside className="md:col-span-5 md:col-start-8 space-y-14">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                [ Direct lines ]
              </div>
              <div className="mt-6 space-y-8">
                {offices.map((o) => (
                  <div key={o.city} className="group border-t border-bone/10 pt-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-3xl">{o.city}</h3>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                        <Clock tz={o.tz} label={o.tzLabel} />
                      </div>
                    </div>
                    <div className="mt-3 text-bone/70 text-sm">{o.addr}</div>
                    <div className="mt-4 flex flex-wrap gap-5 font-mono text-[11px] text-bone/80">
                      <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="link-underline">
                        {o.phone}
                      </a>
                      <a href={`mailto:${o.email}`} className="link-underline text-ember">
                        {o.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-bone/15 bg-ember/10 p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
                [ Urgent matter ]
              </div>
              <p className="mt-4 font-serif text-xl leading-[1.3] text-pretty">
                If this is time-sensitive—a regulatory call, a notice received today, an
                impending filing—call the Mumbai duty line direct.
              </p>
              <a
                href="tel:+912240001998"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ember link-underline"
              >
                +91 22 4000 1998 →
              </a>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                [ Press & speaking ]
              </div>
              <a
                href="mailto:press@shekhar-associates.in"
                className="mt-4 inline-flex font-serif text-2xl italic text-bone link-underline"
              >
                press@shekhar-associates.in
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60 block mb-4"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-bone/30 pb-3 font-serif text-2xl placeholder:text-bone/30 focus:border-ember outline-none transition-colors"
      />
    </div>
  );
}
