"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ImageIcon, Maximize2, X } from "lucide-react";

export function PortfolioScreenshotSlot({
  folder = "toyzumi",
  lang = "hu",
  label,
  filename,
  imagePath,
  description,
  badge,
  className = "aspect-[16/10]",
  objectPosition = "center",
  fit = "cover",
  presentation = "card",
  preload = false,
}: {
  folder?: "toyzumi" | "menutivo" | "molnar-diagnostic";
  lang?: "hu" | "en";
  label: string;
  filename: string;
  imagePath?: string;
  description?: string;
  badge?: string;
  className?: string;
  objectPosition?: string;
  fit?: "cover" | "contain";
  presentation?: "card" | "embedded";
  preload?: boolean;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [missing, setMissing] = useState(false);
  const [open, setOpen] = useState(false);
  const src = imagePath ?? `/portfolio/${folder}/${filename}`;

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <figure
      className={
        presentation === "embedded"
          ? "overflow-hidden"
          : "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5"
      }
    >
      <div className={`${className} relative overflow-hidden bg-slate-950`}>
        {!missing ? (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`${label} ${lang === "en" ? "enlarge screenshot" : "képernyőkép nagyítása"}`}
            aria-haspopup="dialog"
            className="group relative block h-full w-full cursor-zoom-in"
          >
            <Image
              src={src}
              alt={label}
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 50vw, 100vw"
              preload={preload}
              loading={preload ? undefined : "lazy"}
              onError={() => setMissing(true)}
              className={`absolute inset-0 h-full w-full transition duration-500 ease-out group-hover:scale-[1.045] ${fit === "contain" ? "object-contain" : "object-cover"}`}
              style={{ objectPosition }}
            />
            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-slate-950/75 text-white opacity-100 backdrop-blur transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
              <Maximize2 aria-hidden="true" className="h-4 w-4" />
            </span>
          </button>
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <ImageIcon aria-hidden="true" className="h-6 w-6" />
            </div>
            <div className="mt-4 text-sm font-bold text-slate-900">{label}</div>
            <div className="mt-1 text-xs text-slate-500">
              {lang === "en"
                ? "This screenshot is currently unavailable."
                : "A képernyőkép jelenleg nem érhető el."}
            </div>
          </div>
        )}
      </div>
      <figcaption className={presentation === "embedded" ? "sr-only" : "p-5"}>
        <div className="flex flex-wrap items-center gap-2">
          {badge && (
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-blue-700">
              {badge}
            </span>
          )}
          <h3 className="text-base font-bold text-slate-900">{label}</h3>
        </div>
        {description && (
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        )}
      </figcaption>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${label} ${lang === "en" ? "enlarged screenshot" : "nagyított képernyőkép"}`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-md sm:p-6"
            onMouseDown={() => setOpen(false)}
          >
            <div className="relative flex h-[92vh] w-[94vw] max-w-[1800px] items-center justify-center">
              <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={
                    lang === "en"
                      ? "Close screenshot"
                      : "Nagyított kép bezárása"
                  }
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-slate-950/70 text-white shadow-lg backdrop-blur-md transition hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  autoFocus
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
              {/* The image itself stops the backdrop click; transparent space
                  around a contained image must continue to close the dialog. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={label}
                onMouseDown={(event) => event.stopPropagation()}
                className="max-h-full max-w-full rounded-2xl object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </figure>
  );
}
