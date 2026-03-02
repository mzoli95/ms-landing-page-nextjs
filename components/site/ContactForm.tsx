"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Info } from "lucide-react";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState<string>("");
  const [detailsLength, setDetailsLength] = useState<number>(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setState("sent");
      setMessage("Köszi! Megkaptam az üzenetet, hamarosan válaszolok.");
      e.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("Hopp, valami nem ment át. Írj emailt, vagy próbáld újra.");
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1">
            <div className="text-sm font-semibold text-slate-900">Név</div>
            <input
              name="name"
              required
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Pl. Kiss Péter"
            />
          </label>

          <label className="space-y-1">
            <div className="text-sm font-semibold text-slate-900">Email</div>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="peter@ceg.hu"
            />
          </label>
        </div>

        <label className="space-y-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <span>Miben segíthetek?</span>

            <div className="relative group">
              <Info className="w-4 h-4 text-yellow-500 cursor-pointer" />

              <div className="absolute left-1/2 top-full z-10 mt-2 hidden w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg group-hover:block">
                Írd le, mi a probléma és mi a cél, kb. hány felhasználó
                érintett, van-e határidő. Minél több infó, annál jobb javaslatot
                tudok adni!
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
              placeholder="Írd le röviden a helyzetet: mi a probléma, mi a cél, kb. mennyi felhasználó, van-e határidő."
              onChange={(e) => setDetailsLength(e.target.value.length)}
            />
            <div className="absolute right-3 bottom-2 text-xs text-slate-400 select-none pointer-events-none">
              {detailsLength}/500
            </div>
          </div>
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" className="sm:w-auto w-full">
            {state === "sending" ? "Küldés..." : "Üzenet küldése"}
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
