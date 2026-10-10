"use server";

import {
  validateContact,
  type ContactErrors,
  type ContactField,
} from "@/lib/contact-validation";

const HUBFORM_ENDPOINT = "https://hub-form.vercel.app/api/f/347KmcGpu1AO";

export interface ContactState {
  status: "idle" | "success" | "error";
  /** A message for the whole form — shown when the problem isn't tied to one field. */
  message?: string;
  errors?: ContactErrors;
}

const FIELDS: ContactField[] = ["name", "email", "message"];

export async function sendContact(
  _previous: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Spam trap: real visitors never see this field, so anything in it is a bot.
  // Report success so the bot has nothing to retry against.
  if (formData.get("_gotcha")) return { status: "success" };

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) return { status: "error", errors };

  const key = process.env.HUB_KEY;
  if (!key) {
    console.error("sendContact: HUB_KEY is not set");
    return {
      status: "error",
      message: "The contact form isn't configured yet. Please email us directly.",
    };
  }

  try {
    const res = await fetch(HUBFORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(values),
      cache: "no-store",
    });
    const data: { ok?: boolean; error?: string; field?: string } = await res
      .json()
      .catch(() => ({}));

    if (res.ok && data.ok) return { status: "success" };

    const error = data.error ?? "We couldn't send your message. Please try again.";
    const field = FIELDS.find((f) => f === data.field);
    return field
      ? { status: "error", errors: { [field]: error } }
      : { status: "error", message: error };
  } catch (err) {
    console.error("sendContact: request failed", err);
    return {
      status: "error",
      message: "We couldn't reach the server. Please check your connection and try again.",
    };
  }
}
