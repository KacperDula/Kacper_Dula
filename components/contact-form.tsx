"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: ""
};

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error" | "missing_config">("idle");

  const validate = (): Partial<FormState> => {
    const nextErrors: Partial<FormState> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email.";
    if (form.message.trim().length < 10) nextErrors.message = "Message must be at least 10 characters.";

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    if (!formEndpoint) {
      setStatus("missing_config");
      return;
    }

    try {
      setStatus("submitting");
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          subject: `Portfolio contact from ${form.name.trim()}`
        })
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-muted">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full rounded-lg border border-white/15 bg-bg/80 px-3 py-2 text-sm"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-300">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full rounded-lg border border-white/15 bg-bg/80 px-3 py-2 text-sm"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-300">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-lg border border-white/15 bg-bg/80 px-3 py-2 text-sm"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-bg transition hover:brightness-95"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-accent">Thanks for your message. I will get back to you soon.</p>
      )}
      {status === "error" && <p className="text-sm text-red-300">Failed to send. Please try again in a moment.</p>}
      {status === "missing_config" && (
        <p className="text-sm text-yellow-300">
          Contact form is not configured yet. Add <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> and redeploy.
        </p>
      )}
    </form>
  );
}
