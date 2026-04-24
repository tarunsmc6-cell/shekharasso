"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

const quotes = [
  {
    quote:
      "They don't sell comfort. They sell a defensible position—and they build it with you in the room. Every meeting ended with fewer open questions, not more.",
    attribution: "Group CFO",
    org: "Listed Infrastructure Co. · ₹12,000 Cr revenue",
  },
  {
    quote:
      "We've worked with four firms in Mumbai and one magic circle. Shekhar & Associates is the only one where a partner still opens their own email.",
    attribution: "Founder & Managing Partner",
    org: "Growth-stage Venture Fund",
  },
  {
    quote:
      "The brief was a tax position we'd been losing for six years. They re-argued it in a way nobody had thought to, and the Tribunal went with them.",
    attribution: "Head of Tax",
    org: "Consumer Goods Multinational",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-bone text-ink py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionLabel index="06" className="text-ink/50">
          <span className="text-ember">In Their Words</span>
        </SectionLabel>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col gap-6 border-t border-ink/20 pt-6"
            >
              <span className="font-serif text-6xl leading-none text-ember">&ldquo;</span>
              <blockquote className="font-serif text-xl leading-[1.3] text-ink text-pretty">
                {q.quote}
              </blockquote>
              <figcaption className="mt-auto">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                  Attribution
                </div>
                <div className="mt-1 font-medium">{q.attribution}</div>
                <div className="text-sm text-ink/60">{q.org}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
