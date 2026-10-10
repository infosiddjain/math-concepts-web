"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { sendContact, type ContactState } from "@/app/actions/contact";
import {
  MESSAGE_MAX,
  validateContact,
  type ContactErrors,
  type ContactField,
} from "@/lib/contact-validation";
import { site } from "@/lib/site";

const initialState: ContactState = { status: "idle" };

const controlClasses =
  "w-full rounded-xl border bg-ink-900/70 px-4 py-3 text-base text-cloud-100 outline-none transition-colors placeholder:text-steel-500";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 flex items-center gap-1.5 text-sm font-medium text-cloud-100">
      <Icon name="warning" className="h-4 w-4 shrink-0 text-crimson-400" />
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  // Errors found in the browser, and the fields edited since the server last replied.
  const [clientErrors, setClientErrors] = useState<ContactErrors>({});
  const [edited, setEdited] = useState<Partial<Record<ContactField, boolean>>>({});

  function update(field: ContactField, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setEdited((e) => ({ ...e, [field]: true }));
    setClientErrors((e) => ({ ...e, [field]: undefined }));
  }

  function checkField(field: ContactField) {
    setClientErrors((e) => ({ ...e, [field]: validateContact(values)[field] }));
  }

  function errorFor(field: ContactField) {
    return clientErrors[field] ?? (edited[field] ? undefined : state.errors?.[field]);
  }

  if (state.status === "success") {
    return (
      <div className="py-6 text-center" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson-500 text-on-accent">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl text-cloud-100">Message sent</h3>
        <p className="mt-3 text-sm leading-relaxed text-steel-400 sm:text-base">
          Thanks for getting in touch. We read every message and will reply to the email
          address you gave us.
        </p>
      </div>
    );
  }

  const fieldProps = (field: ContactField) => ({
    id: `contact-${field}`,
    name: field,
    value: values[field],
    onBlur: () => checkField(field),
    "aria-invalid": errorFor(field) ? true : undefined,
    "aria-describedby": errorFor(field) ? `contact-${field}-error` : undefined,
    className: clsx(
      controlClasses,
      errorFor(field)
        ? "border-crimson-500"
        : "border-ink-600 focus:border-crimson-500/60"
    ),
  });

  const labelClasses =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-steel-400";

  return (
    <form
      action={formAction}
      noValidate
      onSubmit={(e) => {
        const errors = validateContact(values);
        setClientErrors(errors);
        setEdited({});
        if (Object.keys(errors).length > 0) e.preventDefault();
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Your name
          </label>
          <input
            {...fieldProps("name")}
            type="text"
            autoComplete="name"
            placeholder="Jordan Lee"
            onChange={(e) => update("name", e.target.value)}
          />
          <FieldError id="contact-name-error" message={errorFor("name")} />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email address
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            onChange={(e) => update("email", e.target.value)}
          />
          <FieldError id="contact-email-error" message={errorFor("email")} />
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor="contact-message" className={labelClasses}>
            Message
          </label>
          <span className="text-xs text-steel-500">
            {values.message.length} / {MESSAGE_MAX}
          </span>
        </div>
        <textarea
          {...fieldProps("message")}
          rows={6}
          placeholder="What's on your mind?"
          onChange={(e) => update("message", e.target.value)}
          className={clsx(fieldProps("message").className, "resize-none")}
        />
        <FieldError id="contact-message-error" message={errorFor("message")} />
      </div>

      {/* Spam trap: hidden from people, filled in by bots. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {state.status === "error" && state.message ? (
        <p role="alert" className="rounded-xl border border-crimson-500 bg-ink-700 px-4 py-3 text-sm text-cloud-100">
          {state.message} You can also email us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-crimson-400 underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className={clsx(pending && "pointer-events-none opacity-60")}>
          {pending ? "Sending…" : "Send message"}
          <Icon name="arrowRight" className="h-4 w-4" />
        </Button>
        <p className="text-xs leading-relaxed text-steel-400">
          By sending this you agree to our{" "}
          <Link href="/privacy-policy" className="font-semibold text-crimson-400 underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
