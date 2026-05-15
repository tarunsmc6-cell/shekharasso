"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/logo";

const links = [
  { href: "/practice", label: "Practice" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/engage", label: "Engage" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300",
          scrolled
            ? "bg-brand-cream/95 backdrop-blur-md py-3 shadow-[0_1px_0_0_var(--brand-rule)]"
            : "bg-brand-cream py-5"
        )}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Shekhar & Associates — home"
          >
            <Logo variant="monogram" size={36} />
            <span className="hidden sm:flex flex-col leading-[1.05]">
              <span className="font-serif text-[19px] font-semibold tracking-tight text-brand-navy">
                Shekhar &amp; Associates
              </span>
              <span className="eyebrow text-[10px] tracking-[0.28em]">
                Consulting Firm
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8"
          >
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "text-[13px] font-medium tracking-wide transition-colors",
                    active
                      ? "text-brand-navy"
                      : "text-brand-ink/75 hover:text-brand-navy"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary"
            >
              Begin a conversation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-sm border border-brand-rule bg-brand-cream-50"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={cn(
                  "h-px w-4 bg-brand-navy transition-transform duration-300",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-brand-navy transition-[opacity] duration-300",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-brand-navy transition-transform duration-300",
                  open && "-translate-y-[3px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-brand-cream transition-[clip-path] duration-500 ease-editorial",
          open
            ? "[clip-path:inset(0_0_0_0)]"
            : "[clip-path:inset(0_0_100%_0)]"
        )}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-24">
          <ul className="flex flex-col">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <li key={l.href} className="border-b border-brand-rule">
                  <Link
                    href={l.href}
                    className={cn(
                      "flex items-baseline justify-between py-5 font-serif text-3xl",
                      active ? "text-brand-navy" : "text-brand-ink"
                    )}
                  >
                    <span>{l.label}</span>
                    <span className="eyebrow text-[10px]">
                      0{links.indexOf(l) + 1}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <Link href="/contact" className="btn-primary w-full">
              Begin a conversation
            </Link>
            <p className="mt-6 eyebrow">
              Reply within one business day
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
