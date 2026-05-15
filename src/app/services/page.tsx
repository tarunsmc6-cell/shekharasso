import { redirect } from "next/navigation";

// Legacy route — superseded by /practice per CLAUDE.md §4.
export default function ServicesLegacyRedirect(): never {
  redirect("/practice");
}
