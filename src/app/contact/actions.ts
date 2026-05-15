"use server";

import { redirect } from "next/navigation";

// Server action for intake-form submission per CLAUDE.md §7.
// Validation is hand-written here to keep the dependency tree minimal.
// Email transport (Resend / Postmark) is intentionally stubbed — wire it
// only after the principal provides RESEND_API_KEY or similar via the
// hosting environment.

type Errors = Partial<Record<
  | "name"
  | "email"
  | "organization"
  | "jurisdictions"
  | "category"
  | "description"
  | "preferredContact"
  | "source"
  | "noPrivilegedInfo"
  | "_form",
  string
>>;

export type IntakeState = {
  ok: boolean;
  errors: Errors;
  values: Record<string, string>;
};

const CATEGORIES = new Set([
  "ca",
  "cpa",
  "corporate-law",
  "not-sure",
]);

const CONTACT_METHODS = new Set(["email", "phone", "either"]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitIntake(
  _prev: IntakeState,
  form: FormData,
): Promise<IntakeState> {
  const values: Record<string, string> = {
    name: (form.get("name")?.toString() ?? "").trim(),
    email: (form.get("email")?.toString() ?? "").trim(),
    organization: (form.get("organization")?.toString() ?? "").trim(),
    jurisdictions: (form.get("jurisdictions")?.toString() ?? "").trim(),
    category: (form.get("category")?.toString() ?? "").trim(),
    description: (form.get("description")?.toString() ?? "").trim(),
    preferredContact: (form.get("preferredContact")?.toString() ?? "").trim(),
    source: (form.get("source")?.toString() ?? "").trim(),
    noPrivilegedInfo: (form.get("noPrivilegedInfo")?.toString() ?? "").trim(),
  };

  const errors: Errors = {};

  if (!values.name) errors.name = "Required.";
  else if (values.name.length > 120) errors.name = "Please keep under 120 characters.";

  if (!values.email) errors.email = "Required.";
  else if (!EMAIL_RE.test(values.email))
    errors.email = "Please enter a valid email address.";

  if (values.organization.length > 200)
    errors.organization = "Please keep under 200 characters.";

  if (!values.jurisdictions) errors.jurisdictions = "Required.";
  else if (values.jurisdictions.length > 200)
    errors.jurisdictions = "Please keep under 200 characters.";

  if (!values.category) errors.category = "Required.";
  else if (!CATEGORIES.has(values.category))
    errors.category = "Please select a category.";

  if (!values.description) errors.description = "Required.";
  else if (values.description.length > 500)
    errors.description = "Please keep under 500 characters.";

  if (!values.preferredContact)
    errors.preferredContact = "Required.";
  else if (!CONTACT_METHODS.has(values.preferredContact))
    errors.preferredContact = "Please choose a contact method.";

  if (values.source.length > 200)
    errors.source = "Please keep under 200 characters.";

  if (values.noPrivilegedInfo !== "on")
    errors.noPrivilegedInfo =
      "Please confirm you have not included confidential or privileged information.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, values };
  }

  // ---- Persist / notify -----------------------------------------------------
  // TODO(abhi): wire transactional email transport.
  //   - Add RESEND_API_KEY (or POSTMARK_TOKEN) to the hosting environment.
  //   - npm i resend → import { Resend } from "resend";
  //   - await resend.emails.send({ from, to, subject, text }) with the
  //     plain-text body assembled below. CLAUDE.md §3 requires plain text.
  //   - Encrypt the source record at rest per the same section.
  const submittedAt = new Date().toISOString();
  const plainText = [
    `New intake submission · ${submittedAt}`,
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Organization: ${values.organization || "—"}`,
    `Jurisdiction(s): ${values.jurisdictions}`,
    `Category: ${values.category}`,
    `Preferred contact: ${values.preferredContact}`,
    `Source: ${values.source || "—"}`,
    "",
    "Description:",
    values.description,
  ].join("\n");

  // Until email is wired, the submission is logged server-side. Replace
  // this with the transactional-email call. Do not log PII to a shared
  // logging stack without retention and access controls in place.
  // eslint-disable-next-line no-console
  console.log("[intake]", plainText);

  redirect("/contact/confirmation");
}
