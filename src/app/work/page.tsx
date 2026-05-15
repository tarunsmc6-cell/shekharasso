import { redirect } from "next/navigation";

// Legacy route — the firm does not publish matters. Redirect to /practice
// per CLAUDE.md §4 and confidentiality principle (§5 of CLAUDE.md).
export default function WorkLegacyRedirect(): never {
  redirect("/practice");
}
