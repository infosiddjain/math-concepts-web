"use client";

import { useState, type FormEvent } from "react";
import { Field, TextField } from "@/components/calculators/fields";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "Math Concepts visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name">
          <TextField value={name} onChange={setName} placeholder="Jordan Lee" />
        </Field>
        <Field label="Email address">
          <TextField
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field label="Message">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          placeholder="What's on your mind?"
          className="w-full resize-none rounded-xl border border-ink-600 bg-ink-900/70 px-4 py-3 text-base text-cloud-100 outline-none transition-colors placeholder:text-steel-500 focus:border-crimson-500/60"
        />
      </Field>

      <Button type="submit">Send message</Button>

      {sent ? (
        <p className="text-sm text-crimson-400">
          Your email app should now be open with your message ready to send. If nothing
          opened, email us directly at {site.email}.
        </p>
      ) : null}
    </form>
  );
}
