import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Court } from "@/types/booking";
import { formatFullDate, formatTime } from "@/lib/format";

export function Confirmation({
  locale,
  dict,
  court,
  date,
  time,
  reference,
  onBookAnother,
}: {
  locale: Locale;
  dict: Dictionary;
  court: Court;
  date: string;
  time: string;
  reference: string;
  onBookAnother: () => void;
}) {
  const b = dict.booking;
  return (
    <div className="mx-auto max-w-lg text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>

      <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-brand-black sm:text-3xl">
        {b.confirmedTitle}
      </h2>
      <p className="mt-2 text-brand-black/60">{b.confirmedSubtitle}</p>

      <div className="mt-7 overflow-hidden rounded-2xl border border-black/[0.08] bg-white text-start shadow-card">
        <div className="bg-[var(--surface)] px-5 py-4">
          <p className="text-xs uppercase tracking-wide text-brand-black/45">{b.referenceLabel}</p>
          <p className="mt-1 font-mono text-2xl font-extrabold tracking-[0.2em] text-brand-green">
            {reference}
          </p>
        </div>
        <div className="px-5 py-4">
          <p className="font-bold text-brand-black">{court.name[locale]}</p>
          <p className="mt-1 text-sm text-brand-black/60">
            {formatFullDate(date, locale)} · {formatTime(time, locale)} · {b.duration90}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-brand-green/20 bg-brand-green/5 px-4 py-3.5 text-start">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </span>
        <p className="text-sm font-medium text-brand-black/75">{b.teamContact}</p>
      </div>

      <div className="mt-7 flex flex-col gap-3">
        <button
          type="button"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-card transition-colors hover:bg-[#1eb858]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.42 1.32-1.96 1.36-.5.05-1.13.07-1.83-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.83 2.02.9 2.17.07.14.12.31.02.5-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.2.68-.79.86-1.07.18-.27.36-.22.61-.13.25.09 1.6.76 1.87.9.27.13.46.2.53.31.07.11.07.66-.17 1.34Z" />
          </svg>
          {b.whatsappCta}
        </button>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={onBookAnother}
            className="inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            {b.bookAnother}
          </button>
          <Link
            href={`/${locale}`}
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-6 text-sm font-semibold text-brand-black transition-colors hover:border-brand-green hover:text-brand-green"
          >
            {b.backHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
