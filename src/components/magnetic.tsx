// Deprecated. The new design system uses no magnetic motion — see CLAUDE.md §5.
// Kept as a passthrough so any stale imports compile during the rebrand.
import type { ReactNode } from "react";

export function Magnetic({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
