"use client";

import { useState } from "react";
import { company, services } from "@/lib/data";
import { Icon, WhatsAppIcon } from "./Icon";

const field =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3.5 text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [sent, setSent] = useState(false);

  function compose(form: HTMLFormElement) {
    const d = new FormData(form);
    const service = services.find((s) => s.slug === d.get("service"))?.title ?? String(d.get("service") || "General enquiry");
    const subject = `Project enquiry – ${service}`;
    const body = [
      `Name: ${d.get("name")}`,
      `Organisation: ${d.get("organisation") || "-"}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || "-"}`,
      `Service: ${service}`,
      `Project location: ${d.get("location") || "-"}`,
      "",
      String(d.get("message")),
    ].join("\n");
    return { subject, body };
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { subject, body } = compose(e.currentTarget);
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  function sendWhatsApp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form!;
    if (!form.reportValidity()) return;
    const { subject, body } = compose(form);
    window.open(`${company.whatsappHref}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        Full name *
        <input name="name" required className={field} placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        Organisation
        <input name="organisation" className={field} placeholder="Company / NGO / Agency" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        Email *
        <input name="email" type="email" required className={field} placeholder="you@example.com" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        Phone
        <input name="phone" type="tel" className={field} placeholder="+252 ..." />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        Service *
        <select name="service" required defaultValue={initialService} className={field}>
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
          <option value="references">Project references</option>
          <option value="other">Other enquiry</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        Project location
        <input name="location" className={field} placeholder="City, country" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700 sm:col-span-2">
        Project details *
        <textarea name="message" required rows={5} className={field} placeholder="Scope of work, timeline, budget range…" />
      </label>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
        >
          <Icon name="mail" className="h-5 w-5" />
          Send via Email
        </button>
        <button
          type="button"
          onClick={sendWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-semibold text-white transition hover:brightness-95"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send via WhatsApp
        </button>
      </div>

      {sent && (
        <p className="flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700 sm:col-span-2">
          <Icon name="check" className="h-4 w-4" />
          Your message has been prepared — just press send in your email or WhatsApp app.
        </p>
      )}
    </form>
  );
}
