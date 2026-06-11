"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { courts } from "@/lib/mock/courts";
import { SLOT_TIMES } from "@/lib/mock/slots";
import { toISODate, weekdayShort, dayNumber, formatTime } from "@/lib/format";

const DAYS_AHEAD = 7;

function buildDates(): string[] {
  const out: string[] = [];
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  for (let i = 0; i < DAYS_AHEAD; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    out.push(toISODate(d));
  }
  return out;
}

export function QuickBooking({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const q = dict.quickBook;
  const router = useRouter();
  const dates = useMemo(buildDates, []);

  const defaultCourt = courts.find((c) => c.type === "outdoor")?.id ?? courts[0].id;
  const [court, setCourt] = useState(defaultCourt);
  const [date, setDate] = useState(dates[0]);
  const [time, setTime] = useState(SLOT_TIMES[0]);

  function dateLabel(iso: string, idx: number): string {
    if (idx === 0) return dict.booking.today;
    if (idx === 1) return dict.booking.tomorrow;
    return `${weekdayShort(iso, locale)} ${dayNumber(iso, locale)}`;
  }

  function submit() {
    const params = new URLSearchParams({ court, date, time });
    router.push(`/${locale}/booking?${params.toString()}`);
  }

  return (
    <section className="container-px relative z-20 -mt-12 lg:-mt-16">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="mx-auto max-w-5xl rounded-3xl border border-black/[0.06] bg-white p-4 shadow-card sm:p-5"
      >
        <p className="px-1 pb-3 text-sm font-bold uppercase tracking-wide text-brand-green">
          {q.title}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:items-end">
          <Select label={q.courtLabel} value={court} onChange={setCourt}>
            {courts.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name[locale]}
              </option>
            ))}
          </Select>

          <Select label={q.dateLabel} value={date} onChange={setDate}>
            {dates.map((iso, idx) => (
              <option key={iso} value={iso}>
                {dateLabel(iso, idx)}
              </option>
            ))}
          </Select>

          <Select label={q.timeLabel} value={time} onChange={setTime}>
            {SLOT_TIMES.map((t) => (
              <option key={t} value={t}>
                {formatTime(t, locale)}
              </option>
            ))}
          </Select>

          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            {q.cta}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rtl:rotate-180">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block px-1 text-xs font-semibold text-brand-black/55">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full appearance-none rounded-xl border border-black/[0.1] bg-[var(--surface)] ps-4 pe-10 text-sm font-semibold text-brand-black outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
        >
          {children}
        </select>
        <svg
          aria-hidden
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-brand-black/40"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </label>
  );
}
