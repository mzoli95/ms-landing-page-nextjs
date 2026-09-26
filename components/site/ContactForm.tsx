"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { contactTopics } from "@/components/lib/contact-topics";
import { site } from "@/components/lib/site";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { trackEvent } from "@/components/lib/analytics";

type State = "idle" | "sending" | "sent" | "error";

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 120;
const MIN_DETAILS_LENGTH = 10;
const MAX_DETAILS_LENGTH = 2000;

export function ContactForm({
  lang = "hu",
  initialTopic = "",
}: {
  lang?: Lang;
  initialTopic?: string;
}) {
  const [topic, setTopic] = useState(initialTopic);
  const [details, setDetails] = useState("");
  const busy = useRef(false);
  const en = lang === "en";
  const t = getDictionary(lang);
  const [state, setState] = useState<State>("idle");

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

    if (busy.current) return;
    busy.current = true;

    setState("sending");
    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      details: String(form.get("details") ?? ""),
      website: String(form.get("website") ?? ""), // honeypot
      topic,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(20000),
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
      setDetails("");
      setTopic("");
      trackEvent("form_submit", { form: "contact" });
    } catch {
      setState("error");
    } finally {
      busy.current = false;
    }
  }

  return (
    <Card className="p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">
        {en ? "Tell me what you need" : "Írd le, miben segíthetek"}
      </h2>
      <p className="mt-3 mb-6 text-sm leading-7 text-slate-600">
        {en
          ? "A few sentences are enough. No company or finished specification is required. The first conversation is free."
          : "Néhány mondat is elég. Nem szükséges hozzá vállalkozás vagy kész műszaki terv. Az első egyeztetés díjmentes."}
      </p>
      <form
        onSubmit={onSubmit}
        aria-busy={state === "sending"}
        className="space-y-5"
      >
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <label className="block space-y-2">
          <span className="text-sm font-semibold text-slate-900">
            {en ? "Topic (optional)" : "Miben kérsz segítséget? (nem kötelező)"}
          </span>
          <select
            name="topic"
            value={topic}
            disabled={state === "sending"}
            onChange={(e) => setTopic(e.target.value)}
            className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 focus:ring-2 focus:ring-blue-300"
          >
            <option value="">{en ? "Choose a topic" : "Válassz témát"}</option>
            {contactTopics.map((item) => (
              <option key={item.id} value={item.id}>
                {item[lang]}
              </option>
            ))}
          </select>
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block space-y-2">
            <div className="text-sm font-semibold text-slate-900">
              {t.contactForm.name}
            </div>
            <input
              name="name"
              autoComplete="name"
              disabled={state === "sending"}
              required
              minLength={MIN_NAME_LENGTH}
              maxLength={MAX_NAME_LENGTH}
              className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              placeholder={t.contactForm.namePlaceholder}
              onInvalid={onInvalidField}
              onInput={onInputField}
            />
          </label>

          <label className="block space-y-2">
            <div className="text-sm font-semibold text-slate-900">
              {t.contactForm.emailLabel}
            </div>
            <input
              type="email"
              name="email"
              autoComplete="email"
              disabled={state === "sending"}
              required
              maxLength={320}
              className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              placeholder={t.contactForm.emailPlaceholder}
              onInvalid={onInvalidField}
              onInput={onInputField}
            />
          </label>
        </div>

        <label className="block space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <span>{t.contactForm.helpLabel}</span>
          </div>

          <div className="relative">
            <textarea
              name="details"
              required
              rows={5}
              value={details}
              disabled={state === "sending"}
              aria-describedby="contact-help contact-count"
              minLength={MIN_DETAILS_LENGTH}
              maxLength={MAX_DETAILS_LENGTH}
              className="block min-h-40 w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-3 text-base leading-6 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              placeholder={
                topic === "hardware"
                  ? en
                    ? "Device model, the issue and where you need help."
                    : "Az eszköz típusa, a tapasztalt hiba és a helyszín, ahol segítséget kérsz."
                  : en
                    ? "What would you like to build or simplify? How do you do it now? You can include a budget or deadline if known."
                    : "Mit szeretnél megvalósítani vagy egyszerűbbé tenni? Hogyan csinálod most? Ha van keret vagy határidő, azt is megírhatod."
              }
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              onInvalid={onInvalidField}
              onInput={onInputField}
            />
            <div
              id="contact-count"
              className="mt-1 text-right text-xs text-slate-500"
            >
              {details.length}/{MAX_DETAILS_LENGTH}
            </div>
          </div>
        </label>
        <p id="contact-help" className="text-xs leading-6 text-slate-500">
          {en
            ? "Name, email and at least 10 characters of description are required. Please do not include passwords or sensitive customer data."
            : "A név, e-mail-cím és legalább 10 karakteres leírás kötelező. Jelszót és érzékeny ügyféladatot ne írj bele."}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            type="submit"
            disabled={state === "sending"}
            className="min-h-12 w-full sm:w-auto"
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
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
          >
            {en ? "Prefer email?" : "Inkább e-mailt írok"}
          </a>
          {message && (
            <p
              role={state === "error" ? "alert" : "status"}
              className={`w-full text-sm font-semibold ${state === "error" ? "text-red-600 dark:text-red-400" : "text-emerald-700 dark:text-emerald-400"}`}
            >
              {message}
            </p>
          )}
        </div>
        {state === "error" && (
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Molnár Systems – " + (contactTopics.find((item) => item.id === topic)?.[lang] || "Kapcsolat"))}&body=${encodeURIComponent(details)}`}
            className="inline-block text-sm font-semibold text-blue-700 underline dark:text-blue-300"
          >
            {en
              ? "Your message is preserved. Continue in your email app →"
              : "Az üzeneted megmaradt. Folytatás a levelezőben →"}
          </a>
        )}
      </form>
    </Card>
  );
}
