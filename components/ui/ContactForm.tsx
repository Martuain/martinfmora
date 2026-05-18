"use client";

import { Send } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mgvzbjqw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData))
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Name"
          className="min-h-12 rounded-2xl border border-line bg-white/70 px-4 outline-none transition focus:border-ink/40"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="min-h-12 rounded-2xl border border-line bg-white/70 px-4 outline-none transition focus:border-ink/40"
        />
      </div>
      <input
        name="company"
        placeholder="Company"
        className="min-h-12 rounded-2xl border border-line bg-white/70 px-4 outline-none transition focus:border-ink/40"
      />
      <textarea
        required
        name="message"
        placeholder="What are you trying to unlock?"
        rows={5}
        className="rounded-2xl border border-line bg-white/70 px-4 py-3 outline-none transition focus:border-ink/40"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-paper transition hover:bg-clay disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="size-4" aria-hidden="true" />
        {status === "sending" ? "Sending" : "Send inquiry"}
      </button>
      <p className="min-h-6 text-sm text-ink/65" role="status">
        {status === "sent" ? "Thanks. I will get back to you shortly." : null}
        {status === "error" ? "Something went wrong. Please email hello@martinmora.com." : null}
      </p>
    </form>
  );
}
