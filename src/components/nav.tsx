"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Magnetic } from "@/components/magnetic";

const links = [
  { href: "/", label: "Index", code: "00" },
  { href: "/about", label: "About", code: "01" },
  { href: "/services", label: "Services", code: "02" },
  { href: "/work", label: "Work", code: "03" },
  { href: "/insights", label: "Insights", code: "04" },
  { href: "/contact", label: "Contact", code: "05" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3 backdrop-blur-md bg-ink/70" : "py-6 bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link href="/" className="group flex items-center gap-3" data-cursor="home">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-bone/40">
              <span className="font-serif text-lg italic text-bone">S</span>
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-ember" />
            </span>
            <span className="hidden md:flex flex-col leading-[1] pt-0.5">
              <span className="font-serif text-[17px] tracking-tight">Shekhar</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-bone/60">
                & Associates
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group relative flex items-center gap-1.5 text-[13px] font-medium"
                  data-cursor={l.label}
                >
                  <span
                    className={cn(
                      "font-mono text-[10px] tracking-[0.18em]",
                      active ? "text-ember" : "text-bone/40"
                    )}
                  >
                    {l.code}
                  </span>
                  <span className={cn("link-underline", active && "text-ember")}>{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-bone/30 bg-bone/5 px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-mono hover:bg-bone hover:text-ink transition-colors"
                data-cursor="book"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
                Book Consult
              </Link>
            </Magnetic>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-bone/30"
              aria-label="Menu"
              data-cursor={open ? "close" : "menu"}
            >
              <span
                className={cn(
                  "h-px w-4 bg-bone transition-transform duration-300",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-bone transition-transform duration-300",
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
          "fixed inset-0 z-40 md:hidden bg-ink transition-[clip-path] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
          open ? "[clip-path:circle(150%_at_100%_0%)]" : "[clip-path:circle(0%_at_100%_0%)]"
        )}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-24">
          <ul className="flex flex-col gap-2">
            {links.map((l, i) => (
              <li
                key={l.href}
                className="border-b border-bone/10 py-4 transition-all duration-700"
                style={{ transitionDelay: `${open ? 200 + i * 60 : 0}ms`, opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(20px)" }}
              >
                <Link href={l.href} className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl">{l.label}</span>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-bone/40">
                    {l.code}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
            Mumbai · Bengaluru · Singapore
          </div>
        </div>
      </div>
    </>
  );
}
