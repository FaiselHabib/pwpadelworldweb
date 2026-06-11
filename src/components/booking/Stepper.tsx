import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { localizeDigits } from "@/lib/format";
import { cn } from "@/lib/cn";

export function Stepper({
  locale,
  dict,
  current,
}: {
  locale: Locale;
  dict: Dictionary;
  /** 1-based current step (1..5) */
  current: number;
}) {
  const b = dict.booking;
  const steps = [b.stepCourt, b.stepDate, b.stepTime, b.stepInfo, b.stepReview];
  const total = steps.length;

  return (
    <div>
      {/* Mobile: compact label + progress bar */}
      <div className="sm:hidden">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-bold text-brand-black">{steps[current - 1]}</span>
          <span className="text-xs text-brand-black/50">
            {b.summaryStep} {localizeDigits(current, locale)} / {localizeDigits(total, locale)}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full rounded-full bg-brand-green transition-all duration-300"
            style={{ width: `${(current / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: full step circles */}
      <ol className="hidden items-center sm:flex">
        {steps.map((label, idx) => {
          const step = idx + 1;
          const done = step < current;
          const active = step === current;
          return (
            <li key={label} className={cn("flex items-center", idx < total - 1 && "flex-1")}>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors",
                    done && "bg-brand-green text-white",
                    active && "bg-brand-green text-white ring-4 ring-brand-green/20",
                    !done && !active && "bg-black/[0.06] text-brand-black/40",
                  )}
                >
                  {done ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    localizeDigits(step, locale)
                  )}
                </span>
                <span
                  className={cn(
                    "whitespace-nowrap text-sm font-semibold transition-colors",
                    active || done ? "text-brand-black" : "text-brand-black/40",
                  )}
                >
                  {label}
                </span>
              </div>
              {idx < total - 1 && (
                <span
                  className={cn(
                    "mx-3 h-0.5 flex-1 rounded-full transition-colors",
                    done ? "bg-brand-green" : "bg-black/10",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
