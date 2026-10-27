"use client";

import { useState } from "react";
import { company } from "@/lib/data";
import type { Dict } from "@/lib/i18n";
import { Icon, WhatsAppIcon } from "./Icon";

const field =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3.5 text-base text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

type Option = { value: string; label: string };

export default function ContactForm({
  t,
  services,
  initialService = "",
}: {
  t: Dict["form"];
  services: Option[];
  initialService?: string;
}) {
  const [sent, setSent] = useState(false);
  const options: Option[] = [
    ...services,
    { value: "references", label: t.references },
    { value: "other", label: t.other },
  ];

  function compose(form: HTMLFormElement) {
    const d = new FormData(form);
    const service = options.find((o) => o.value === d.get("service"))?.label ?? t.general;
    const subject = `${t.subject} – ${service}`;
    const body = [
      `${t.name}: ${d.get("name")}`,
      `${t.org}: ${d.get("organisation") || "-"}`,
      `${t.email}: ${d.get("email")}`,
      `${t.phone}: ${d.get("phone") || "-"}`,
      `${t.service}: ${service}`,
      `${t.location}: ${d.get("location") || "-"}`,
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
        {t.name} *
        <input name="name" required autoComplete="name" className={field} placeholder={t.namePh} />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        {t.org}
        <input name="organisation" autoComplete="organization" className={field} placeholder={t.orgPh} />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        {t.email} *
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        {t.phone}
        <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="+252 ..." />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        {t.service} *
        <select name="service" required defaultValue={initialService} className={field}>
          <option value="" disabled>{t.selectService}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700">
        {t.location}
        <input name="location" className={field} placeholder={t.locationPh} />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink-700 sm:col-span-2">
        {t.details} *
        <textarea name="message" required rows={5} className={field} placeholder={t.detailsPh} />
      </label>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
        >
          <Icon name="mail" className="h-5 w-5" />
          {t.sendEmail}
        </button>
        <button
          type="button"
          onClick={sendWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-semibold text-white transition hover:brightness-95"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {t.sendWhatsApp}
        </button>
      </div>

      {sent && (
        <p className="flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700 sm:col-span-2">
          <Icon name="check" className="h-4 w-4 shrink-0" />
          {t.sent}
        </p>
      )}
    </form>
  );
}
