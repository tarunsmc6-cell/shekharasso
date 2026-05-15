"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

// Restrained fade-and-rise. Used sparingly; never on full sections at once.
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "li" | "section";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -5% 0px" });

  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={defaultVariants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
