"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Info } from "lucide-react";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { trackEvent } from "@/components/lib/analytics";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const [state, setState] = useState<State>("idle");
  const [detailsLength, setDetailsLength] = useState<number>(0);

  const message =
    state === "sent"
      ? t.contactForm.success
      : state === "error"
        ? t.contactForm.error
        : "";

  function onInvalidField(
    e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = e.currentTarget;

    if (field.validity.valueMissing) {
      field.setCustomValidity(t.contactForm.validationRequired);
      return;
    }

    if (field instanceof HTMLInputElement && field.validity.typeMismatch) {
      field.setCustomValidity(t.contactForm.validationEmail);
      return;
    }

    field.setCustomValidity("");
  }

  function onInputField(
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    e.currentTarget.setCustomValidity("");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const formElement = e.currentTarget;

    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!res.ok || !result?.ok) {
        throw new Error(result?.error || "Request failed");
      }

      setState("sent");
      formElement.reset();
      setDetailsLength(0);
      trackEvent("form_submit", { form: "contact" });
    } catch {
      setState("error");
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1">
            <div className="text-sm font-semibold text-slate-900">
              {t.contactForm.name}
            </div>
            <input
              name="name"
              required
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
              placeholder={t.contactForm.namePlaceholder}
              onInvalid={onInvalidField}
              onInput={onInputField}
            />
          </label>

          <label className="space-y-1">
            <div className="text-sm font-semibold text-slate-900">
              {t.contactForm.emailLabel}
            </div>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
              placeholder={t.contactForm.emailPlaceholder}
              onInvalid={onInvalidField}
              onInput={onInputField}
            />
          </label>
        </div>

        <label className="space-y-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <span>{t.contactForm.helpLabel}</span>

            <div className="relative group">
              <Info className="w-4 h-4 text-yellow-500 cursor-pointer" />

              <div className="absolute left-1/2 top-full z-10 mt-2 hidden w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg group-hover:block">
                {t.contactForm.helpTooltip}
              </div>
            </div>
          </div>
          <div className="relative">
            <textarea
              name="details"
              maxLength={500}
              required
              rows={5}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 resize-none"
              placeholder={t.contactForm.detailsPlaceholder}
              onChange={(e) => setDetailsLength(e.target.value.length)}
              onInvalid={onInvalidField}
              onInput={onInputField}
            />
            <div className="absolute right-3 bottom-2 text-xs text-slate-400 select-none pointer-events-none">
              {detailsLength}/500
            </div>
          </div>
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" className="sm:w-auto w-full">
            {state === "sending" ? t.contactForm.sending : t.contactForm.send}
          </Button>

          {message && (
            <div
              className={
                state === "sent"
                  ? "text-sm text-emerald-700"
                  : "text-sm text-rose-700"
              }
            >
              {message}
            </div>
          )}
        </div>
      </form>
    </Card>
  );
}
