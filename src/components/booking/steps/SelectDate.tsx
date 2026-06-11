import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { StepHeading } from "./SelectCourt";
import { weekdayShort, dayNumber, toISODate } from "@/lib/format";
import { cn } from "@/lib/cn";

const DAYS_AHEAD = 14;

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

export function SelectDate({
  locale,
  dict,
  selectedDate,
  onSelect,
}: {
  locale: Locale;
  dict: Dictionary;
  selectedDate?: string;
  onSelect: (iso: string) => void;
}) {
  const dates = buildDates();

  return (
    <div>
      <StepHeading title={dict.booking.selectDateTitle} subtitle={dict.booking.selectDateSubtitle} />
      <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
        {dates.map((iso, idx) => {
          const selected = iso === selectedDate;
          const label = idx === 0 ? dict.booking.today : idx === 1 ? dict.booking.tomorrow : weekdayShort(iso, locale);
          return (
            <button
              key={iso}
              type="button"
              onClick={() => onSelect(iso)}
              aria-pressed={selected}
              className={cn(
                "flex flex-col items-center justify-center rounded-2xl border py-3 transition-all",
                selected
                  ? "border-brand-green bg-brand-green text-white ring-2 ring-brand-green"
                  : "border-black/[0.08] bg-white text-brand-black hover:border-brand-green/50",
              )}
            >
              <span className={cn("text-xs font-medium", selected ? "text-white/80" : "text-brand-black/55")}>
                {label}
              </span>
              <span className="mt-1 text-xl font-extrabold">{dayNumber(iso, locale)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
