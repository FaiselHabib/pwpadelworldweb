import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { StepHeading } from "./SelectCourt";
import { getSlots } from "@/lib/mock/slots";
import { formatTime } from "@/lib/format";
import { cn } from "@/lib/cn";

export function SelectTime({
  locale,
  dict,
  courtId,
  date,
  selectedTime,
  onSelect,
}: {
  locale: Locale;
  dict: Dictionary;
  courtId?: string;
  date?: string;
  selectedTime?: string;
  onSelect: (time: string) => void;
}) {
  if (!courtId || !date) {
    return (
      <div>
        <StepHeading title={dict.booking.selectTimeTitle} subtitle={dict.booking.selectTimeSubtitle} />
        <p className="mt-6 rounded-2xl border border-dashed border-black/15 p-6 text-center text-sm text-brand-black/50">
          {dict.booking.noCourtFirst}
        </p>
      </div>
    );
  }

  const slots = getSlots(courtId, date);

  return (
    <div>
      <StepHeading title={dict.booking.selectTimeTitle} subtitle={dict.booking.selectTimeSubtitle} />

      <div className="mt-4 flex items-center gap-4 text-xs text-brand-black/60">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-green" /> {dict.booking.available}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" /> {dict.booking.booked}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5">
        {slots.map((slot) => {
          const selected = slot.start === selectedTime;
          return (
            <button
              key={slot.start}
              type="button"
              disabled={!slot.available}
              onClick={() => onSelect(slot.start)}
              aria-pressed={selected}
              className={cn(
                "rounded-xl border py-3 text-center text-sm font-semibold transition-all",
                !slot.available && "cursor-not-allowed border-black/[0.06] bg-[var(--surface)] text-brand-black/30 line-through",
                slot.available && !selected && "border-black/[0.1] bg-white text-brand-black hover:border-brand-green hover:text-brand-green",
                selected && "border-brand-green bg-brand-green text-white ring-2 ring-brand-green",
              )}
            >
              {formatTime(slot.start, locale)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
