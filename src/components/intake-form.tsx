"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitIntake, type IntakeState } from "@/app/contact/actions";

const initialState: IntakeState = {
  ok: false,
  errors: {},
  values: {},
};

const inputBase =
  "mt-2 block w-full rounded-sm border border-brand-rule bg-brand-cream px-3.5 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/40 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20";

const labelBase = "block text-[13px] font-medium tracking-wide text-brand-ink";

function ErrorText({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p role="alert" className="mt-1.5 text-[12.5px] text-[#8B2230]">
      {children}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn-primary disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Sending…" : "Send to the principal"}
    </button>
  );
}

export function IntakeForm() {
  const [state, formAction] = useActionState(submitIntake, initialState);
  const v = state.values;

  return (
    <form action={formAction} noValidate className="space-y-7">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelBase}>
          Name <span aria-hidden className="text-brand-ink/50">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
          defaultValue={v.name}
          aria-invalid={state.errors.name ? "true" : undefined}
          aria-describedby={state.errors.name ? "name-error" : undefined}
          className={inputBase}
        />
        {state.errors.name && (
          <p id="name-error" className="mt-1.5 text-[12.5px] text-[#8B2230]">
            {state.errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelBase}>
          Work email <span aria-hidden className="text-brand-ink/50">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={v.email}
          aria-invalid={state.errors.email ? "true" : undefined}
          aria-describedby={state.errors.email ? "email-error" : undefined}
          className={inputBase}
        />
        {state.errors.email && (
          <p id="email-error" className="mt-1.5 text-[12.5px] text-[#8B2230]">
            {state.errors.email}
          </p>
        )}
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className={labelBase}>
          Organization <span className="text-brand-ink/50">(optional)</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          maxLength={200}
          autoComplete="organization"
          defaultValue={v.organization}
          className={inputBase}
        />
        <ErrorText>{state.errors.organization}</ErrorText>
      </div>

      {/* Jurisdictions */}
      <div>
        <label htmlFor="jurisdictions" className={labelBase}>
          Jurisdiction(s) involved{" "}
          <span aria-hidden className="text-brand-ink/50">*</span>
        </label>
        <input
          id="jurisdictions"
          name="jurisdictions"
          type="text"
          required
          maxLength={200}
          placeholder="e.g. India · United States · Singapore"
          defaultValue={v.jurisdictions}
          aria-invalid={state.errors.jurisdictions ? "true" : undefined}
          className={inputBase}
        />
        <ErrorText>{state.errors.jurisdictions}</ErrorText>
      </div>

      {/* Category */}
      <fieldset>
        <legend className={labelBase}>
          Matter category{" "}
          <span aria-hidden className="text-brand-ink/50">*</span>
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {[
            { value: "ca", label: "Chartered Accountancy" },
            { value: "cpa", label: "US CPA" },
            { value: "corporate-law", label: "Corporate Law" },
            { value: "not-sure", label: "Not sure" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-3 rounded-sm border border-brand-rule bg-brand-cream px-3.5 py-3 text-[14.5px] hover:border-brand-navy/40"
            >
              <input
                type="radio"
                name="category"
                value={opt.value}
                required
                defaultChecked={v.category === opt.value}
                className="h-4 w-4 accent-brand-navy"
              />
              {opt.label}
            </label>
          ))}
        </div>
        <ErrorText>{state.errors.category}</ErrorText>
      </fieldset>

      {/* Description */}
      <div>
        <label htmlFor="description" className={labelBase}>
          Brief description{" "}
          <span aria-hidden className="text-brand-ink/50">*</span>
        </label>
        <p className="mt-1.5 max-w-[60ch] text-[12.5px] leading-relaxed text-[#8B2230]">
          Please do not include confidential or privileged information
          until we have confirmed that no conflict exists.
        </p>
        <textarea
          id="description"
          name="description"
          required
          maxLength={500}
          rows={5}
          defaultValue={v.description}
          aria-invalid={state.errors.description ? "true" : undefined}
          className={inputBase + " resize-y"}
        />
        <p className="mt-1 text-right text-[11.5px] text-brand-ink/55">
          500 characters max
        </p>
        <ErrorText>{state.errors.description}</ErrorText>
      </div>

      {/* Preferred contact */}
      <fieldset>
        <legend className={labelBase}>
          Preferred contact method{" "}
          <span aria-hidden className="text-brand-ink/50">*</span>
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "either", label: "Either" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-3 rounded-sm border border-brand-rule bg-brand-cream px-3.5 py-3 text-[14.5px] hover:border-brand-navy/40"
            >
              <input
                type="radio"
                name="preferredContact"
                value={opt.value}
                required
                defaultChecked={v.preferredContact === opt.value}
                className="h-4 w-4 accent-brand-navy"
              />
              {opt.label}
            </label>
          ))}
        </div>
        <ErrorText>{state.errors.preferredContact}</ErrorText>
      </fieldset>

      {/* Source */}
      <div>
        <label htmlFor="source" className={labelBase}>
          How did you hear about us?{" "}
          <span className="text-brand-ink/50">(optional)</span>
        </label>
        <input
          id="source"
          name="source"
          type="text"
          maxLength={200}
          defaultValue={v.source}
          className={inputBase}
        />
        <ErrorText>{state.errors.source}</ErrorText>
      </div>

      {/* Conflict-check confirmation — visible BEFORE submit per §7. */}
      <div className="rounded-sm border border-brand-rule bg-brand-cream-50 p-5">
        <p className="eyebrow mb-3">Conflict check &amp; privilege</p>
        <p className="text-[13.5px] leading-relaxed text-brand-ink/85 max-w-[70ch]">
          We will respond within one business day. No
          attorney&ndash;client, CPA&ndash;client, or advisor&ndash;client
          relationship is created by submitting this form. Privilege
          attaches only after a written engagement letter is in place.
        </p>
        <label className="mt-4 flex cursor-pointer items-start gap-3 text-[13.5px] text-brand-ink/85">
          <input
            type="checkbox"
            name="noPrivilegedInfo"
            required
            defaultChecked={v.noPrivilegedInfo === "on"}
            className="mt-1 h-4 w-4 accent-brand-navy"
          />
          <span>
            I confirm I have not included confidential or privileged
            information in the description above.
          </span>
        </label>
        <ErrorText>{state.errors.noPrivilegedInfo}</ErrorText>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
        <p className="text-[12.5px] text-brand-ink/55 max-w-[40ch]">
          Sent to the principal directly. Not stored in a third-party CRM.
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}
