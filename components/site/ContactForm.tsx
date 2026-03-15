"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Info } from "lucide-react";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { trackEvent } from "@/components/lib/analytics";

type State = "idle" | "sending" | "sent" | "error";

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 120;
const MIN_DETAILS_LENGTH = 10;
const MAX_DETAILS_LENGTH = 500;

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

    if (field.validity.tooShort) {
      field.setCustomValidity(t.contactForm.validationTooShort);
      return;
    }

    if (field.validity.tooLong) {
      field.setCustomValidity(t.contactForm.validationTooLong);
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

    if (state === "sending") return;

    setState("sending");
    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      details: String(form.get("details") ?? ""),
      website: String(form.get("website") ?? ""), // honeypot
    };

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
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1">
            <div className="text-sm font-semibold text-slate-900">
              {t.contactForm.name}
            </div>
            <input
              name="name"
              required
              minLength={MIN_NAME_LENGTH}
              maxLength={MAX_NAME_LENGTH}
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
              maxLength={320}
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
              <Info className="h-4 w-4 cursor-pointer text-yellow-500" />
              <div className="absolute left-1/2 top-full z-10 mt-2 hidden w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg group-hover:block">
                {t.contactForm.helpTooltip}
              </div>
            </div>
          </div>

          <div className="relative">
            <textarea
              name="details"
              required
              rows={5}
              minLength={MIN_DETAILS_LENGTH}
              maxLength={MAX_DETAILS_LENGTH}
              className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
              placeholder={t.contactForm.detailsPlaceholder}
              onChange={(e) => setDetailsLength(e.target.value.length)}
              onInvalid={onInvalidField}
              onInput={onInputField}
            />
            <div className="pointer-events-none absolute bottom-2 right-3 select-none text-xs text-slate-400">
              {detailsLength}/{MAX_DETAILS_LENGTH}
            </div>
          </div>
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="submit"
            disabled={state === "sending"}
            className="w-full sm:w-auto"
          >
            {state === "sending" && (
              <svg
                className="mr-2 h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-90"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}

            {state === "sending" ? t.contactForm.sending : t.contactForm.send}
          </Button>
        </div>
      </form>
    </Card>
  );
}
